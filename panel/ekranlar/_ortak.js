/* Ekranların ortak bileşenleri: el(), kalın ayrıştırıcı, veri yardımcıları, ipucu merdiveni, soru turu, açık uçlu bileşen, sesli oku, not alanı. */
(function () {
  "use strict";
  const B9 = (window.B9 = window.B9 || {});
  B9.ekranlar = B9.ekranlar || {};
  const R = () => B9.rastgele, S = () => B9.soru, T = () => B9.tekrar;

  /* ---------- Güvenli DOM ---------- */
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "class") n.className = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat(Infinity)) if (k != null && k !== false) n.append(k instanceof Node ? k : document.createTextNode(String(k)));
    return n;
  }
  // **kalın** -> <b>; başka işaretleme yok.
  function kalin(metin) {
    return String(metin == null ? "" : metin).split(/\*\*(.+?)\*\*/g).map((p, i) => (i % 2 ? el("b", {}, p) : p));
  }
  const duz = m => String(m == null ? "" : m).replace(/\*\*/g, "");

  /* ---------- Oturum, veri ---------- */
  const oturum = () => B9.uyg.oturum;
  const dersler = () => window.DERSLER || [];

  function konular() {
    const out = [];
    for (const d of dersler()) for (const u of (d.harita && d.harita.uniteler) || []) for (const k of u.konular || [])
      out.push({ ders: d, unite: u, konu: k, kart: (d.konular || {})[k.id] || null, sorular: (d.sorular || {})[k.id] || [] });
    return out;
  }
  const konuBul = id => konular().find(x => x.konu.id === id) || null;
  const dersBul = id => dersler().find(d => d.ders === id) || null;
  const uretecler = konuId => (window.URETECLER || []).filter(u => u.konu_id === konuId);
  const konuAdi = id => { const k = konuBul(id); return k ? (k.kart && k.kart.baslik) || k.konu.ad : id; };

  // Tekrar takvimi öğeleri: konu bankası (açık uçlu hariç) + her üreteç.
  function ogeler() {
    const out = [];
    for (const x of konular()) {
      const st = x.sorular.filter(s => s.tip !== "acik" && s.tip !== "eslestirme");
      const base = { konu_id: x.konu.id, ders: x.ders.ders, yazili: x.konu.yazili || [] };
      if (st.length) out.push(Object.assign({ anahtar: "konu:" + x.konu.id, statikler: st }, base));
      for (const u of uretecler(x.konu.id)) out.push(Object.assign({ anahtar: "uretec:" + u.id, uretec: u }, base));
    }
    return out;
  }
  const ogeBul = anahtar => ogeler().find(o => o.anahtar === anahtar) || null;

  function kutuSayilari(liste) {
    const c = [0, 0, 0, 0, 0, 0];
    for (const o of liste) { const d = oturum().kutu(o.anahtar); c[d ? d.kutu : 0]++; }
    return c;
  }
  function kutuCubugu(c) {
    const t = Math.max(1, c.reduce((a, b) => a + b, 0));
    return el("span", { class: "bar", role: "img", "aria-label": "Kutu dağılımı: " + c.map((n, i) => (i ? "kutu " + i : "yeni") + " " + n).join(", ") },
      c.map((n, i) => (n ? el("i", { class: "b" + i, style: "width:" + (100 * n / t) + "%" }) : null)));
  }
  const bekleyenler = () => T().bekleyen(oturum().data.kutular, ogeler(), window.TAKVIM, T().bugun());

  function kaynakMetni(kart, soru) {
    const parca = [];
    for (const k of (kart && kart.kaynak) || []) {
      if (k.tur === "ders_kitabi") parca.push("Ders kitabı, sayfa " + (k.sayfa || "?"));
      else if (k.tur === "program") parca.push("Öğretim programı " + (k.kod || ""));
      else parca.push(k.tur || "kaynak");
    }
    if (soru && soru.kaynak && !parca.length) {
      if (soru.kaynak.kitap) parca.push(soru.kaynak.kitap + (soru.kaynak.sayfa ? " s." + soru.kaynak.sayfa : ""));
      if (soru.kaynak.ogrenme_ciktisi) parca.push("Program " + soru.kaynak.ogrenme_ciktisi);
    }
    return parca.length ? parca.join(" · ") : "Kaynak bilgisi yok.";
  }

  const tarihTr = g => new Date(g + "T12:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", weekday: "long" });
  const kisaGun = g => new Date(g + "T12:00:00").toLocaleDateString("tr-TR", { weekday: "short" });
  const yuzde = (c, t) => (t ? Math.round(100 * c / t) + "%" : "–");

  /* ---------- Bildirim, kısayol, temizlik ---------- */
  let canli = null;
  function bildir(mesaj) {
    if (!canli) { canli = el("div", { class: "sr-only", "aria-live": "polite", role: "status" }); document.body.append(canli); }
    canli.textContent = "";
    setTimeout(() => { canli.textContent = mesaj; }, 30);
  }
  const temizleyiciler = [];
  let kisayolFn = null;
  document.addEventListener("keydown", e => {
    if (!kisayolFn || e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.querySelector("dialog[open]")) return;
    if (e.target && e.target.closest && e.target.closest("textarea, input, select")) return;
    kisayolFn(e);
  });
  const kisayolKur = fn => { kisayolFn = fn; };
  function ekranTemizle() {
    kisayolFn = null;
    if (window.speechSynthesis) try { speechSynthesis.cancel(); } catch (e) { /* ses yok */ }
    while (temizleyiciler.length) { try { temizleyiciler.pop()(); } catch (e) { console.warn(e); } }
  }

  /* ---------- Sesli oku ---------- */
  const sesDugmeleri = new Set();
  const sesVar = () => { try { return !!window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined" && speechSynthesis.getVoices().some(v => /^tr/i.test(v.lang)); } catch (e) { return false; } };
  function sesiYenile() { const v = sesVar(); sesDugmeleri.forEach(b => { b.hidden = !v; }); }
  if (window.speechSynthesis && speechSynthesis.addEventListener) speechSynthesis.addEventListener("voiceschanged", sesiYenile);
  function sesliOku(metin) {
    const b = el("button", { class: "btn", type: "button", "aria-pressed": "false", "aria-label": "Sesli oku", hidden: !sesVar() }, "🔊 Sesli oku");
    sesDugmeleri.add(b);
    temizleyiciler.push(() => sesDugmeleri.delete(b));
    b.addEventListener("click", () => {
      if (!sesVar()) return;
      if (speechSynthesis.speaking) { speechSynthesis.cancel(); b.setAttribute("aria-pressed", "false"); return; }
      const u = new SpeechSynthesisUtterance(duz(Array.isArray(metin) ? metin.join(" ") : metin));
      u.lang = "tr-TR";
      const v = speechSynthesis.getVoices().find(x => /^tr/i.test(x.lang));
      if (v) u.voice = v;
      u.onend = u.onerror = () => b.setAttribute("aria-pressed", "false");
      b.setAttribute("aria-pressed", "true");
      speechSynthesis.speak(u);
    });
    return b;
  }

  /* ---------- İpucu merdiveni ---------- */
  function ipucuMerdiveni(ipuclari, sayiDegisti) {
    let n = 0;
    const liste = el("ul", { class: "hint-list", "aria-live": "polite" });
    const dugme = el("button", { class: "btn", type: "button" });
    const guncelle = () => {
      const t = ipuclari.length;
      dugme.textContent = n >= t ? "Tüm ipuçları açıldı" : "💡 İpucu " + (n + 1) + "/" + t;
      dugme.disabled = n >= t || !t;
    };
    dugme.addEventListener("click", () => {
      if (n >= ipuclari.length) return;
      liste.append(el("li", {}, el("b", {}, "İpucu " + (n + 1) + ": "), kalin(ipuclari[n])));
      n++; guncelle();
      if (sayiDegisti) sayiDegisti(n);
    });
    guncelle();
    return { node: el("div", { class: "hints" }, dugme, liste), kullanilan: () => n, kapat: () => { dugme.disabled = true; } };
  }

  /* ---------- Not alanı ---------- */
  function notAlani(anahtar, etiket) {
    const os = oturum();
    const ta = el("textarea", { id: "not-" + anahtar, maxlength: "5000", placeholder: "Bu konuyu kendi cümlenle yaz…" });
    const durum = el("small", { "aria-live": "polite" }, os.not(anahtar) ? "Kayıtlı not yüklendi" : "Henüz not yok");
    ta.value = os.not(anahtar);
    let zaman = null;
    const kaydet = async () => {
      clearTimeout(zaman); zaman = null;
      if (ta.value === os.not(anahtar)) return;
      const ok = await os.notKaydet(anahtar, ta.value);
      durum.textContent = ok ? "Kaydedildi" : "Bu cihazda kalıcı kayıt yok";
    };
    ta.addEventListener("input", () => { durum.textContent = "Yazılıyor…"; clearTimeout(zaman); zaman = setTimeout(kaydet, 600); });
    ta.addEventListener("blur", kaydet);
    temizleyiciler.push(kaydet);
    return el("div", { class: "notes" }, el("label", { for: ta.id }, el("span", {}, "📝 Kendi cümlemle · ", etiket || ""), durum), ta);
  }

  /* ---------- Açık uçlu bileşen ---------- */
  // Rubrik puanlarını soruya verilen puana oranlar; son ölçüt farkı alır.
  function olcekle(rubrik, puan) {
    if (!puan) return rubrik;
    const top = rubrik.reduce((a, r) => a + r.puan, 0);
    if (!top || top === puan) return rubrik;
    let kalan = puan;
    return rubrik.map((r, i) => { const p = i === rubrik.length - 1 ? kalan : Math.round(r.puan * puan / top); kalan -= p; return { olcut: r.olcut, puan: p }; });
  }
  function rubrikOf(soru, puan) {
    const ham = soru.rubrik && soru.rubrik.length ? soru.rubrik
      : [{ olcut: "İşlem adımlarım model çözümle uyuşuyor", puan: 2 }, { olcut: "Sonucum doğru", puan: 1 }];
    return olcekle(ham, puan || soru.puan || 0);
  }

  // Kökteki "(10 puan)" ifadesi, kâğıda verilen puanla çakışmasın diye atılır.
  const kokTemiz = k => String(k).replace(/\s*\(\d+\s*puan\)\s*$/, "");

  function acikBilesen(soru, cfg) {
    cfg = cfg || {};
    const os = oturum(), rub = rubrikOf(soru, cfg.puan);
    const maks = rub.reduce((a, r) => a + r.puan, 0);
    const ta = el("textarea", { class: "metin-kutu", id: "acik-" + soru.soru_id, "aria-label": "Cevabın", placeholder: "Cevabını kâğıda ya da buraya yaz…" });
    const sonuc = el("div", { class: "stack", hidden: true });
    const puanEl = el("b", { "aria-live": "polite" }, "0 / " + maks);
    let idx = -1;
    const isaret = rub.map(() => false);
    const durum = () => ({ metin: ta.value, isaretler: isaret.slice(), puan: rub.reduce((a, r, i) => a + (isaret[i] ? r.puan : 0), 0), veli_onay: onay.checked });
    const onay = el("input", { type: "checkbox", id: "onay-" + soru.soru_id });
    onay.addEventListener("change", () => { if (idx >= 0) os.acikGuncelle(soru.soru_id, idx, { veli_onay: onay.checked }); });
    const kutular = rub.map((r, i) => {
      const c = el("input", { type: "checkbox" });
      c.addEventListener("change", () => {
        isaret[i] = c.checked;
        const d = durum(); puanEl.textContent = d.puan + " / " + maks;
        if (idx >= 0) os.acikGuncelle(soru.soru_id, idx, { isaretler: d.isaretler, puan: d.puan });
        if (cfg.degisti) cfg.degisti(d.puan, maks);
      });
      return el("li", {}, el("label", {}, c, el("span", {}, kalin(r.olcut), " ", el("span", { class: "chip rem" }, r.puan + " puan"))));
    });
    const goster = el("button", { class: "btn primary", type: "button" }, "Cevabı göster");
    goster.addEventListener("click", async () => {
      sonuc.hidden = false; goster.disabled = true; ta.readOnly = true;
      await os.acikEkle(soru.soru_id, Object.assign(durum(), { ders: cfg.ders || null, konu_id: soru.konu_id }));
      idx = os.data.acik[soru.soru_id].length - 1;
      bildir("Model cevap ve ölçütler açıldı.");
    });
    sonuc.append(
      el("div", { class: "model-cevap" }, el("b", {}, "Model cevap: "), kalin(soru.cevap != null ? soru.cevap : ""),
        soru.cozum && soru.cozum.length ? el("ol", {}, soru.cozum.map(c => el("li", {}, kalin(String(c).replace(/^\d+\.\s*/, ""))))) : null),
      el("p", { class: "muted" }, "Her ölçüt için, cevabında varsa kutuyu işaretle."),
      el("ul", { class: "rubrik" }, kutular),
      el("p", {}, "Puanın: ", puanEl),
      el("label", { class: "onay", for: onay.id }, onay, "Veli onayladı"));
    return el("div", { class: "acik" },
      el("div", { class: "eyebrow" }, "Açık uçlu · " + maks + " puan"),
      soru.baglam ? el("p", {}, kalin(soru.baglam)) : null,
      el("p", { class: "stem" }, kalin(kokTemiz(soru.kok))),
      soru.tip === "coktan" ? el("ol", { type: "A" }, soru.secenekler.map(o => el("li", {}, kalin(o.metin)))) : null,
      ta, el("div", { class: "row" }, goster), sonuc);
  }

  /* ---------- Soru turu ---------- */
  const OVGU = ["Güzel!", "Tam isabet.", "Aferin, devam.", "Doğru, temiz çözüm.", "Süper gidiyorsun."];

  // Konunun tur kuyruğu: zorluk %50/%35/%15, aynı soru bir turda tekrar etmez.
  function turKuyrugu(konuId, n, rng) {
    rng = rng || Math.random;
    const havuz = [];
    for (const o of ogeler().filter(x => x.konu_id === konuId)) {
      if (o.uretec) havuz.push({ anahtar: o.anahtar, konu_id: konuId, oge: o, statik: null, zorluk: o.uretec.zorluk || 1 });
      else for (const s of o.statikler) havuz.push({ anahtar: o.anahtar, konu_id: konuId, oge: o, statik: s, zorluk: s.zorluk || 1 });
    }
    const kuyruk = [];
    let onceki = null;
    for (let i = 0; i < n && havuz.length; i++) {
      const x = rng(), hedef = x < 0.5 ? 1 : x < 0.85 ? 2 : 3;
      const en = Math.min(...havuz.map(h => Math.abs(h.zorluk - hedef)));
      const aday = havuz.filter(h => Math.abs(h.zorluk - hedef) === en);
      const sec = T().agirlikliSec(aday, a => { const d = oturum().kutu(a); return d ? d.kutu : 0; }, rng, onceki);
      kuyruk.push({ oge: sec.oge, statik: sec.statik, derinlik: 0 });
      onceki = sec.konu_id;
      if (sec.statik) havuz.splice(havuz.indexOf(sec), 1);
    }
    return kuyruk;
  }
  const acikSorular = konuId => { const k = konuBul(konuId); return k ? k.sorular.filter(s => s.tip === "acik") : []; };

  function turBaslat(kok, cfg) {
    const os = oturum();
    const st = { i: 0, kuyruk: cfg.kuyruk.slice(), sonuc: [], cevaplandi: false, ipucu: 0, t0: 0, soru: null, merdiven: null };
    const kopya = () => st.kuyruk.length;

    function soruKur(item) {
      if (item.acik) return item.acik;
      const o = item.oge;
      if (!item.tohum) item.tohum = R().yeniTohum();
      if (o.uretec) return S().uretecten(o.uretec, item.tohum);
      if (!item.statik) {
        const havuz = o.statikler.length > 1 && item.onceki ? o.statikler.filter(s => s.id !== item.onceki) : o.statikler;
        item.statik = R().pick(R().rng(item.tohum), havuz);
      }
      return S().statikten(item.statik, item.tohum);
    }

    function ust(item, soru) {
      const k = konuBul(soru.konu_id);
      const d = os.kutu(soru.anahtar);
      return el("div", {},
        el("div", { class: "quiz-top" },
          el("a", { class: "btn", href: cfg.geri || "#/ana" }, "← Geri"),
          el("span", { class: "eyebrow" }, cfg.baslik || ""),
          el("span", { class: "spacer" }),
          el("span", { class: "progress", "aria-live": "polite" }, "Soru " + (st.i + 1) + " / " + kopya())),
        el("div", { class: "eyebrow" }, (k ? konuAdi(soru.konu_id) : "") + (soru.tip === "acik" ? "" : " · Kutu " + (d ? d.kutu : "yeni")) + " ",
          item.derinlik ? el("span", { class: "chip rem" }, "Pekiştirme " + item.derinlik) : null));
    }

    function goster() {
      const item = st.kuyruk[st.i];
      const soru = st.soru = soruKur(item);
      st.cevaplandi = false; st.ipucu = 0; st.t0 = Date.now();
      const geriBildirim = el("div", { "aria-live": "polite", role: "status" });
      const sayfa = el("div", {}, ust(item, soru));

      if (soru.tip === "acik") {
        sayfa.append(acikBilesen(soru, { ders: cfg.ders }), el("div", { class: "actions row", style: "margin-top:1rem" }, sonrakiDugme()));
        sayfa.append(geriBildirim);
        kok.replaceChildren(sayfa); kisayolKur(null); return;
      }
      const merdiven = st.merdiven = ipucuMerdiveni(soru.ipuclari || [], n => { st.ipucu = n; });
      const kutuHedef = el("div", { class: "stack" });
      const secenekDugmeleri = [];
      let girdi = null;

      if (soru.tip === "coktan") {
        const ul = el("ul", { class: "options" }, soru.secenekler.map((o, i) => {
          const b = el("button", { class: "opt", type: "button", onclick: () => cevapla(i, i) }, el("span", { class: "key" }, "ABCD"[i]), el("span", {}, kalin(o.metin)));
          secenekDugmeleri.push(b);
          return el("li", {}, b);
        }));
        kutuHedef.append(ul);
      } else if (soru.tip === "dogru_yanlis") {
        const ul = el("ul", { class: "options" }, [[true, "D", "Doğru"], [false, "Y", "Yanlış"]].map(([v, k, m], i) => {
          const b = el("button", { class: "opt", type: "button", onclick: () => cevapla(v, i) }, el("span", { class: "key" }, k), el("span", {}, m));
          secenekDugmeleri.push(b);
          return el("li", {}, b);
        }));
        kutuHedef.append(ul);
      } else {
        girdi = el("input", { type: "text", "aria-label": "Cevabın", autocomplete: "off" });
        const g = el("button", { class: "btn primary", type: "button", onclick: () => cevapla(girdi.value, -1) }, "Cevapla");
        girdi.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); g.click(); } });
        secenekDugmeleri.push(g);
        kutuHedef.append(el("div", { class: "kontrol" }, girdi, g));
      }

      sayfa.append(el("article", { class: "case" },
        soru.baglam ? el("p", { class: "stem" }, kalin(soru.baglam)) : null,
        el("p", { class: "stem" }, el("b", {}, kalin(soru.kok))),
        kutuHedef, merdiven.node), geriBildirim);
      kok.replaceChildren(sayfa);
      (girdi || secenekDugmeleri[0]).focus({ preventScroll: true });
      window.scrollTo({ top: 0 });

      kisayolKur(e => {
        if (st.cevaplandi) { if (e.key === "Enter" || e.key === "ArrowRight") { const n = document.getElementById("btn-sonraki"); if (n) { e.preventDefault(); n.click(); } } return; }
        if (soru.tip === "bosluk") return;
        const k = e.key.toLowerCase();
        let idx = -1;
        if (soru.tip === "coktan") idx = "abcd".indexOf(k) >= 0 ? "abcd".indexOf(k) : "1234".indexOf(k);
        else idx = "dy".indexOf(k) >= 0 ? "dy".indexOf(k) : "12".indexOf(k);
        if (idx >= 0 && secenekDugmeleri[idx]) { e.preventDefault(); secenekDugmeleri[idx].click(); }
      });

      async function cevapla(secim, idx) {
        if (st.cevaplandi) return;
        if (soru.tip === "bosluk" && !String(secim).trim()) { bildir("Önce bir cevap yaz."); return; }
        st.cevaplandi = true;
        merdiven.kapat();
        const r = S().kontrol(soru, secim);
        const ok = !!r.dogru;
        if (soru.tip === "coktan") secenekDugmeleri.forEach((b, j) => { b.disabled = true; b.classList.add(j === soru.dogru_index ? "correct" : j === idx ? "wrong" : "dim"); });
        else if (soru.tip === "dogru_yanlis") secenekDugmeleri.forEach((b, j) => { b.disabled = true; const dy = j === 0; b.classList.add(dy === S().kontrol(soru, true).dogru ? "correct" : j === idx ? "wrong" : "dim"); });
        else { secenekDugmeleri.forEach(b => { b.disabled = true; }); girdi.readOnly = true; }

        const sonuc = T().uygula(os.kutu(soru.anahtar), { ok, ipucu: st.ipucu, derinlik: item.derinlik }, T().bugun());
        st.sonuc.push({ ok, derinlik: item.derinlik, konu_id: soru.konu_id, ipucu: st.ipucu });
        if (sonuc.pekistirme) st.kuyruk.splice(st.i + 1, 0, { oge: item.oge, derinlik: sonuc.pekistirme, onceki: soru.soru_id });
        await os.cevapKaydet({ anahtar: soru.anahtar, konu_id: soru.konu_id, ders: (konuBul(soru.konu_id) || { ders: {} }).ders.ders || null, tohum: soru.tohum, ok, derinlik: item.derinlik, ipucu: st.ipucu, hata_turu: r.hata_turu || null, sure_sn: Math.round((Date.now() - st.t0) / 1000) }, sonuc.durum);
        if (cfg.degisti) cfg.degisti();
        geriBildirim.replaceChildren(geriBildirimKur(soru, r, ok, sonuc, item, secim));
        const n = document.getElementById("btn-sonraki"); if (n) n.focus({ preventScroll: true });
        bildir(ok ? "Doğru." : "Bu sefer olmadı. Neden olduğuna bak.");
      }
    }

    const sonrakiDugme = () => el("button", { class: "btn primary", type: "button", id: "btn-sonraki", onclick: () => { st.i++; if (st.i >= st.kuyruk.length) ozet(); else goster(); } }, st.i + 1 >= st.kuyruk.length ? "Tur özetini gör" : "Sıradaki →");

    function geriBildirimKur(soru, r, ok, sonuc, item, secim) {
      const k = konuBul(soru.konu_id);
      const blok = [];
      if (!ok) {
        const dogruMetin = soru.tip === "coktan" ? soru.secenekler[soru.dogru_index].metin : soru.cevap;
        blok.push(el("div", { class: "fb-block" }, el("h3", {}, "Neden yanlış?"),
          el("p", {}, kalin(r.aciklama || "Bu seçenek sorunun istediğiyle uyuşmuyor. İpucuna ve çözüme birlikte bakalım.")),
          el("p", {}, "Doğru cevap: ", el("b", {}, kalin(typeof dogruMetin === "boolean" ? (dogruMetin ? "Doğru" : "Yanlış") : dogruMetin)))));
      }
      if (soru.cozum && soru.cozum.length) blok.push(el("div", { class: "fb-block" }, el("h3", {}, "Çözüm adımları"), el("ol", {}, soru.cozum.map(c => el("li", {}, kalin(String(c).replace(/^\d+\.\s*/, "")))))));
      if (!ok) blok.push(el("div", { class: "fb-block" }, el("details", { class: "law-mini" }, el("summary", {}, "📖 Kaynak kartı · " + konuAdi(soru.konu_id)), el("p", {}, kaynakMetni(k && k.kart, soru)))));
      const not = ok ? (item.derinlik ? "Pekiştirme doğru; kutu aynı kaldı." : st.ipucu ? "İpucuyla doğru. Kutu aynı kaldı, ipucusuz bir daha deneriz." : "Kutu " + sonuc.durum.kutu + " oldu. Sonraki tekrar: " + sonuc.durum.sonraki + ".")
        : sonuc.pekistirme ? "Konu kutu 1'e indi. Aynı türden yeni bir soru sırada." : "Konu kutu 1'e indi; yarın tekrar sorulacak.";
      return el("div", { class: "feedback" },
        el("div", { class: "verdict " + (ok ? "ok" : "bad") }, ok ? OVGU[Math.floor(Math.random() * OVGU.length)] : "Az kaldı, bir daha bakalım."),
        blok, el("div", { class: "fb-actions" }, el("small", {}, not), sonrakiDugme()));
    }

    function ozet() {
      kisayolKur(null);
      const ilk = st.sonuc.filter(x => x.derinlik === 0), dogru = ilk.filter(x => x.ok).length;
      const p = ilk.length ? Math.round(100 * dogru / ilk.length) : 0;
      kok.replaceChildren(el("div", { class: "summary" },
        el("div", { class: "eyebrow" }, (cfg.baslik || "Tur") + " · özet"),
        el("div", { class: "score" }, dogru + " / " + ilk.length),
        el("p", { class: "muted" }, "İlk denemede doğru. Pekiştirmeyle toplam " + st.sonuc.length + " soru çözdün. " + (p >= 70 ? "Çok iyi iş." : "Tekrarla pekişecek, devam.")),
        el("ul", { class: "res-list" }, st.sonuc.map(x => el("li", {}, el("span", {}, konuAdi(x.konu_id), " ", x.derinlik ? el("span", { class: "chip rem" }, "Pekiştirme " + x.derinlik) : null, x.ipucu ? el("span", { class: "chip rem" }, x.ipucu + " ipucu") : null),
          el("span", { class: "chip " + (x.ok ? "ok" : "bad") }, x.ok ? "DOĞRU" : "YANLIŞ")))),
        el("div", { class: "row", style: "margin-top:1.2rem" },
          cfg.yeniTur ? el("button", { class: "btn primary", type: "button", onclick: cfg.yeniTur }, "Yeni tur") : null,
          el("a", { class: "btn", href: cfg.geri || "#/ana" }, "Geri dön"))));
      if (cfg.bitti) cfg.bitti(st.sonuc);
      window.scrollTo({ top: 0 });
    }

    if (!st.kuyruk.length) { kok.replaceChildren(el("div", { class: "empty" }, "Bu konu için henüz soru yok.")); return; }
    goster();
  }

  B9.ortak = {
    el, kalin, duz, oturum, dersler, konular, konuBul, dersBul, uretecler, konuAdi, ogeler, ogeBul, kutuSayilari, kutuCubugu, bekleyenler,
    kaynakMetni, tarihTr, kisaGun, yuzde, bildir, temizleyiciler, kisayolKur, ekranTemizle,
    sesliOku, ipucuMerdiveni, notAlani, acikBilesen, olcekle, rubrikOf, kokTemiz, turKuyrugu, acikSorular, turBaslat,
  };
})();
