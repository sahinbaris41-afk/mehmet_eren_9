/* B9.oturum: depolama adaptörleri + SessionManager. DOM'a dokunmaz (indir() hariç, o da korumalı). */
(function () {
  "use strict";
  const G = typeof window !== "undefined" ? window : globalThis;
  const B9 = (G.B9 = G.B9 || {});

  const SURUM = 1;
  // GOCLER[n]: n sürümünden n+1'e. v alanı eksik veri 0 sayılır.
  const GOCLER = {
    0: d => Object.assign({}, d, { v: 1 }),
  };
  const IZ_SINIRI = 500, NOT_SINIRI = 5000;

  const bos = () => ({
    v: SURUM, kutular: {}, istatistik: {}, iz: [], notlar: {}, dakika: {}, acik: {},
    ayarlar: { tema: "sistem", buyuk_yazi: false, veli_pin: null },
  });
  const nesne = x => x !== null && typeof x === "object" && !Array.isArray(x);

  function yerelGun(d) {
    d = d || new Date();
    try {
      return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
    } catch (e) {
      const p = n => String(n).padStart(2, "0");
      return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
    }
  }

  // Eksik alanları doldurur; göç sonrası ve içe aktarmada ortak kullanılır.
  function tamamla(d) {
    const b = bos();
    for (const k of Object.keys(b)) if (d[k] === undefined || d[k] === null) d[k] = b[k];
    d.ayarlar = Object.assign({}, b.ayarlar, d.ayarlar);
    return d;
  }

  // -> { durum: "tamam", veri } | { durum: "yeni" (bilinmeyen gelecek sürüm), veri: ham }
  function goc(ham) {
    if (!nesne(ham)) return { durum: "bozuk", veri: null };
    let d = Object.assign({}, ham);
    let v = Number.isInteger(d.v) ? d.v : 0;
    if (v > SURUM) return { durum: "yeni", veri: ham };
    if (v < 0) return { durum: "bozuk", veri: null };
    while (v < SURUM) {
      const f = GOCLER[v];
      if (!f) return { durum: "bozuk", veri: null };
      d = f(d);
      v = d.v;
    }
    return { durum: "tamam", veri: tamamla(d) };
  }

  // İçe aktarılan dosyanın şekil doğrulaması. -> hata metni | null
  function dogrula(d) {
    if (!nesne(d)) return "Dosya bir ilerleme kaydı gibi görünmüyor.";
    for (const k of ["kutular", "istatistik", "notlar", "dakika", "acik", "ayarlar"])
      if (d[k] !== undefined && !nesne(d[k])) return "“" + k + "” alanı beklenen biçimde değil.";
    if (d.iz !== undefined && !Array.isArray(d.iz)) return "“iz” alanı beklenen biçimde değil.";
    for (const [a, k] of Object.entries(d.kutular || {})) {
      if (!nesne(k) || !Number.isInteger(k.kutu) || k.kutu < 0 || k.kutu > 5) return "“" + a + "” kutu kaydı geçersiz.";
    }
    for (const [a, g] of Object.entries(d.acik || {})) if (!Array.isArray(g)) return "“" + a + "” açık uçlu kaydı geçersiz.";
    return null;
  }

  class LocalStorageAdapter {
    constructor(onek) { this.onek = onek; this.bellek = {}; }
    depo() { try { return G.localStorage || null; } catch (e) { return null; } }
    available() {
      try { const s = this.depo(), k = this.onek + "__t"; s.setItem(k, "1"); s.removeItem(k); return true; } catch (e) { return false; }
    }
    async load(kid) {
      try { const s = this.depo(), ham = s && s.getItem(this.onek + kid); if (ham) return JSON.parse(ham); } catch (e) { return this.bellek[kid] || null; }
      return this.bellek[kid] || null;
    }
    async save(kid, veri) {
      this.bellek[kid] = veri;
      try { this.depo().setItem(this.onek + kid, JSON.stringify(veri)); return true; } catch (e) { return false; }
    }
    async clear(kid) { delete this.bellek[kid]; try { this.depo().removeItem(this.onek + kid); } catch (e) { /* depo yok */ } }
    // Mevcut kaydı <anahtar>:yedek altına kopyalar.
    async yedekle(kid) {
      try {
        const s = this.depo(), ham = s && s.getItem(this.onek + kid);
        if (ham) { s.setItem(this.onek + kid + ":yedek", ham); return true; }
      } catch (e) { /* bellek yedeğine düş */ }
      if (this.bellek[kid]) { this.bellek[kid + ":yedek"] = JSON.parse(JSON.stringify(this.bellek[kid])); return true; }
      return false;
    }
  }

  // Faz 2 için bekler; bu sürümde kullanılmaz.
  class RestApiAdapter {
    constructor(taban, jeton) { this.taban = taban; this.jeton = jeton; }
    available() { return false; }
    async load() { throw new Error("RestApiAdapter Faz 2'de etkinleşecek"); }
    async save() { return false; }
    async clear() { /* Faz 2 */ }
    async yedekle() { return false; }
  }

  class SessionManager {
    constructor(adapter, kimlik) {
      this.adapter = adapter;
      this.kimlik = kimlik || { kullanici: "mehmet-eren" };
      this.data = bos();
      this.persisted = true;
      this.saltOkur = false; // bilinmeyen gelecek sürüm: yazma yok
      this.uyari = "";
    }
    async init() {
      let ham = null;
      try { ham = await this.adapter.load(this.kimlik.kullanici); } catch (e) { this.uyari = "Kayıt okunamadı."; }
      if (ham) {
        const g = goc(ham);
        if (g.durum === "tamam") this.data = g.veri;
        else if (g.durum === "yeni") { this.data = tamamla(Object.assign(bos(), ham)); this.saltOkur = true; this.uyari = "Kayıt daha yeni bir sürümden. Bu sürüm yalnızca okuyor; hiçbir şey değiştirilmeyecek."; }
        else this.uyari = "Kayıt bozuk görünüyor; dokunulmadı.";
      }
      if (this.adapter.available && !this.adapter.available()) this.persisted = false;
      return this;
    }
    async kaydet() {
      if (this.saltOkur) return false;
      try { this.persisted = await this.adapter.save(this.kimlik.kullanici, this.data); } catch (e) { this.persisted = false; }
      return this.persisted;
    }

    kutu(anahtar) { return this.data.kutular[anahtar] || null; }
    // Bir cevabı tek seferde işler: kutu durumu, istatistik, iz.
    async cevapKaydet(k, yeniKutu) {
      const d = this.data;
      if (yeniKutu) d.kutular[k.anahtar] = yeniKutu;
      const s = (d.istatistik[k.konu_id] = d.istatistik[k.konu_id] || { t: 0, c: 0, ipucu: 0 });
      s.t++; if (k.ok) s.c++; s.ipucu += k.ipucu || 0;
      this.izEkle(Object.assign({ ts: Date.now() }, k));
      return this.kaydet();
    }
    izEkle(kayit) {
      this.data.iz.unshift(kayit); // en yeni başta
      if (this.data.iz.length > IZ_SINIRI) this.data.iz.length = IZ_SINIRI;
    }

    not(id) { return this.data.notlar[id] || ""; }
    async notKaydet(id, metin) {
      metin = String(metin).slice(0, NOT_SINIRI);
      if (metin.trim()) this.data.notlar[id] = metin; else delete this.data.notlar[id];
      return this.kaydet();
    }

    dakikaEkle(dk, gun) {
      const g = gun || yerelGun();
      this.data.dakika[g] = Math.round(((this.data.dakika[g] || 0) + dk) * 100) / 100;
    }

    acikEkle(soruId, kayit) {
      const l = (this.data.acik[soruId] = this.data.acik[soruId] || []);
      l.push(Object.assign({ ts: Date.now(), metin: "", isaretler: [], puan: 0, veli_onay: false }, kayit));
      return this.kaydet();
    }
    acikGuncelle(soruId, i, alanlar) {
      const k = (this.data.acik[soruId] || [])[i];
      if (!k) return false;
      Object.assign(k, alanlar);
      return this.kaydet();
    }

    ayar(k) { return this.data.ayarlar[k]; }
    ayarYaz(k, v) { this.data.ayarlar[k] = v; return this.kaydet(); }

    // Ayarlar (tema, PIN) kalır; ilerleme gider.
    async sifirla() {
      const ayarlar = this.data.ayarlar;
      this.data = bos();
      this.data.ayarlar = ayarlar;
      this.saltOkur = false;
      await this.adapter.clear(this.kimlik.kullanici);
      return this.kaydet();
    }

    disaAktar() {
      return { ad: "barbaros9_" + yerelGun() + ".json", metin: JSON.stringify(this.data, null, 2) };
    }
    indir() {
      if (typeof document === "undefined") return false;
      const x = this.disaAktar();
      const url = URL.createObjectURL(new Blob([x.metin], { type: "application/json" }));
      const a = document.createElement("a");
      a.href = url; a.download = x.ad;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      return true;
    }

    // Doğrula, yedekle, yaz. Herhangi bir adım başarısızsa mevcut veri olduğu gibi kalır.
    async iceAktar(metin) {
      let ham;
      try { ham = JSON.parse(metin); } catch (e) { return { ok: false, hata: "Dosya okunamadı (JSON değil). Mevcut ilerleme olduğu gibi duruyor." }; }
      if (nesne(ham) && Number.isInteger(ham.v) && ham.v > SURUM) return { ok: false, hata: "Bu dosya daha yeni bir sürümden. Önce paneli güncelle. Mevcut ilerleme olduğu gibi duruyor." };
      const hata = dogrula(ham);
      if (hata) return { ok: false, hata: hata + " Mevcut ilerleme olduğu gibi duruyor." };
      const g = goc(ham);
      if (g.durum !== "tamam") return { ok: false, hata: "Dosya sürümü tanınmadı. Mevcut ilerleme olduğu gibi duruyor." };
      g.veri.iz = g.veri.iz.slice(0, IZ_SINIRI);
      const onceki = this.data, oncekiSalt = this.saltOkur;
      try { await this.adapter.yedekle(this.kimlik.kullanici); } catch (e) { /* yedek yoksa bellekte kalır */ }
      this.data = g.veri; this.saltOkur = false;
      const yazildi = await this.kaydet();
      if (!yazildi && this.adapter.available && this.adapter.available()) { this.data = onceki; this.saltOkur = oncekiSalt; return { ok: false, hata: "Yazılamadı. Mevcut ilerleme olduğu gibi duruyor." }; }
      return { ok: true, kalici: yazildi };
    }
  }

  B9.oturum = { SURUM, GOCLER, bos, goc, dogrula, tamamla, yerelGun, LocalStorageAdapter, RestApiAdapter, SessionManager };
})();
