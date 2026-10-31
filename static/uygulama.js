/* Yönlendirici, başlatma, selfCheck, tema, dakika sayacı. */
(function () {
  "use strict";
  const B9 = window.B9;
  const uyg = (B9.uyg = {});
  const MENU = [["ana", "Ana"], ["tekrar", "Tekrar Kutusu"], ["yazili", "Yazılı Provası"], ["ortak", "Ortak Sınav"], ["veli", "Veli"]];
  const ROTA_MENU = { ders: "ana", konu: "ana", alistirma: "ana" };
  const kok = () => document.getElementById("gorunum");

  function ayarUygula() {
    const os = uyg.oturum, tema = os.ayar("tema") || "sistem";
    const r = document.documentElement;
    if (tema === "acik") r.setAttribute("data-theme", "light");
    else if (tema === "koyu") r.setAttribute("data-theme", "dark");
    else r.removeAttribute("data-theme");
    document.getElementById("tema-sec").value = tema;
    document.body.classList.toggle("buyuk", !!os.ayar("buyuk_yazi"));
    document.body.classList.toggle("odak", !!os.ayar("odak"));
  }

  function kpiGuncelle() {
    const O = B9.ortak, os = uyg.oturum, st = Object.values(os.data.istatistik);
    const t = st.reduce((a, s) => a + s.t, 0), c = st.reduce((a, s) => a + s.c, 0);
    document.getElementById("k-dk").textContent = Math.round(os.data.dakika[B9.tekrar.bugun()] || 0);
    document.getElementById("k-dogruluk").textContent = O.yuzde(c, t);
    document.getElementById("k-tekrar").textContent = O.bekleyenler().length;
    const d = document.getElementById("depo-durum");
    d.className = os.persisted && !os.saltOkur ? "store-ok" : "store-warn";
    d.textContent = os.saltOkur ? "Kayıt salt okunur" : os.persisted ? "İlerleme bu cihazda saklanıyor" : "Tarayıcı kayda izin vermiyor; ilerleme sekme kapanınca silinir";
  }

  function menuKur(aktif) {
    const el = B9.ortak.el;
    document.getElementById("menu").replaceChildren(...MENU.map(([ad, etiket]) => el("a", { href: "#/" + ad, "aria-current": ad === aktif ? "page" : false }, etiket)));
  }

  function hashCoz() {
    const h = (location.hash || "#/ana").replace(/^#\/?/, "");
    const [yol, sorguMetin] = h.split("?");
    const parcalar = yol.split("/").filter(Boolean).map(decodeURIComponent);
    const sorgu = {};
    for (const kv of (sorguMetin || "").split("&")) { const [k, v] = kv.split("="); if (k) sorgu[k] = decodeURIComponent(v || ""); }
    return { ad: parcalar[0] || "ana", id: parcalar[1] || null, sorgu };
  }

  function yonlendir() {
    B9.ortak.ekranTemizle();
    const r = hashCoz();
    const ekran = B9.ekranlar[r.ad] || B9.ekranlar.ana;
    const ad = B9.ekranlar[r.ad] ? r.ad : "ana";
    menuKur(ROTA_MENU[ad] || ad);
    const k = kok();
    k.replaceChildren();
    try { ekran.render(k, r); }
    catch (e) {
      console.error(e);
      k.replaceChildren(B9.ortak.el("div", { class: "empty", role: "alert" }, "Bu ekran açılamadı: " + e.message, " ", B9.ortak.el("a", { href: "#/ana" }, "Ana ekrana dön")));
    }
    document.title = ekran.baslik + " · Barbaros 9";
    kpiGuncelle();
    window.scrollTo({ top: 0 });
    if (!k.contains(document.activeElement)) k.focus({ preventScroll: true });
  }

  /* ---------- selfCheck (panel-standardi madde 5) ---------- */
  function selfCheck() {
    const hatalar = [];
    const O = B9.ortak;
    for (const u of window.URETECLER || []) {
      const r = B9.soru.uretecDene(u, 50);
      if (!r.ok) hatalar.push("Üreteç " + u.id + ": " + r.hatalar.slice(0, 2).map(h => h.mesaj).join(" | ") + (r.hatalar.length > 2 ? " (+" + (r.hatalar.length - 2) + ")" : ""));
    }
    const konuIdler = new Set(O.konular().map(x => x.konu.id));
    for (const d of O.dersler()) {
      const ids = new Set(d.harita.uniteler.flatMap(u => u.konular.map(k => k.id)));
      for (const a of Object.keys(d.konular || {})) if (!ids.has(a)) hatalar.push(d.ders + ": konu kartı haritada yok: " + a);
      for (const a of Object.keys(d.sorular || {})) if (!ids.has(a)) hatalar.push(d.ders + ": soru listesi haritada yok: " + a);
      for (const [kid, liste] of Object.entries(d.sorular || {})) for (const s of liste) {
        if (s.tip === "coktan" && (!s.secenekler || s.secenekler.length !== 4 || s.secenekler.filter(o => o.dogru).length !== 1)) hatalar.push("Soru " + s.id + ": 4 şık ve tek doğru olmalı");
        if (s.tip === "acik" && (!s.rubrik || s.rubrik.reduce((a, r) => a + r.puan, 0) !== s.puan)) hatalar.push("Soru " + s.id + ": rubrik puanları toplamı puana eşit değil");
        if (s.ipuclari && s.ipuclari.length !== 3) hatalar.push("Soru " + s.id + ": 3 ipucu olmalı");
      }
    }
    for (const u of window.URETECLER || []) if (!konuIdler.has(u.konu_id)) hatalar.push("Üreteç " + u.id + ": konu_id haritada yok (" + u.konu_id + ")");
    return hatalar;
  }

  function uyariGoster() {
    const hatalar = selfCheck(), os = uyg.oturum, el = B9.ortak.el;
    const kutu = document.getElementById("uyari"), ic = document.getElementById("uyari-ic");
    const notlar = [];
    if (os.uyari) notlar.push(os.uyari);
    if (!os.persisted) notlar.push("Bu tarayıcıda kayıt kapalı görünüyor; ilerleme sekme kapanınca silinir. Veli ekranından JSON yedeği alabilirsiniz.");
    if (hatalar.length) { console.error("selfCheck:", hatalar); ic.replaceChildren(el("b", {}, "İçerik denetiminde sorun var:"), el("ul", {}, hatalar.slice(0, 8).map(h => el("li", {}, h)), hatalar.length > 8 ? el("li", {}, "…ve " + (hatalar.length - 8) + " tane daha") : null), el("div", {}, notlar.map(n => el("div", {}, n)))); kutu.className = ""; kutu.hidden = false; }
    else if (notlar.length) { ic.replaceChildren(...notlar.map(n => el("div", {}, n))); kutu.className = "bilgi"; kutu.hidden = false; }
    else kutu.hidden = true;
    return hatalar;
  }

  async function baslat() {
    const o = B9.oturum;
    uyg.oturum = new o.SessionManager(new o.LocalStorageAdapter("barbaros9:"), { kullanici: "mehmet-eren" });
    await uyg.oturum.init();
    uyg.ayarUygula = ayarUygula; uyg.kpiGuncelle = kpiGuncelle; uyg.yenile = yonlendir; uyg.selfCheck = uyariGoster;
    ayarUygula();

    document.getElementById("tema-sec").addEventListener("change", e => { uyg.oturum.ayarYaz("tema", e.target.value); ayarUygula(); });
    const dlg = document.getElementById("kilavuz");
    document.getElementById("btn-kilavuz").addEventListener("click", () => { B9.ekranlar.kilavuz.render(document.getElementById("kilavuz-ic")); dlg.showModal(); });
    document.getElementById("kilavuz-kapat").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

    window.addEventListener("hashchange", yonlendir);
    window.addEventListener("pagehide", () => uyg.oturum.kaydet());
    // Dakika sayacı: sekme görünürken yarım dakikalık adımlar
    setInterval(() => {
      if (document.hidden) return;
      uyg.oturum.dakikaEkle(0.5); uyg.oturum.kaydet(); kpiGuncelle();
    }, 30000);

    uyariGoster();
    yonlendir();
  }
  baslat().catch(e => { console.error(e); document.getElementById("gorunum").textContent = "Panel başlatılamadı: " + e.message; });
})();
