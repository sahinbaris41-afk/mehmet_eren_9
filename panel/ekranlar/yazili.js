/* Yazılı Provası + Ortak Sınav Provası ortak iskeleti (B9.provaEkrani). A4 yazdırma, cevap anahtarı, geri sayım, açık uçlu öz-değerlendirme. */
(function () {
  "use strict";
  const B9 = window.B9;
  const ADET = 7, SURE_DK = 40;
  const UYARI = "Örnek içerik — gerçek sınav biçimini tam yansıtmıyor.";

  const dagit = n => (n === 7 ? [15, 15, 15, 15, 15, 15, 10] : Array.from({ length: n }, (_, i) => (i === n - 1 ? 100 - Math.floor(100 / n) * (n - 1) : Math.floor(100 / n))));

  // -> { sorular, kaynakSayisi, kapsamTahmini }
  function sorulariKur(ders, ortak) {
    const O = B9.ortak, R = B9.rastgele, S = B9.soru;
    let konular = O.konular().filter(x => x.ders.ders === ders.ders);
    let kapsamTahmini = false;
    if (ortak) {
      const sinav = ((window.TAKVIM && window.TAKVIM.sinavlar) || []).find(s => s.ders === ders.ders && s.tur === "ulke");
      const dar = sinav ? konular.filter(x => (x.konu.yazili || []).includes(sinav.yazili)) : [];
      if (dar.length) konular = dar; else kapsamTahmini = true;
    }
    const rng = R.rng(R.yeniTohum());
    const havuz = [];
    for (const x of konular) {
      for (const s of x.sorular) if (s.tip !== "eslestirme") havuz.push({ statik: s });
      for (const u of O.uretecler(x.konu.id)) havuz.push({ uretec: u });
    }
    const karisik = R.shuffle(rng, havuz).sort((a, b) => ((a.statik && a.statik.tip === "acik") ? 0 : 1) - ((b.statik && b.statik.tip === "acik") ? 0 : 1));
    const secilen = karisik.slice(0, ADET);
    const sorular = secilen.map(h => (h.statik ? S.statikten(h.statik, R.yeniTohum()) : S.uretecten(h.uretec, R.yeniTohum())));
    const uretecler = secilen.filter(h => h.uretec).map(h => h.uretec);
    // Üreteç varsa eksik soru yeni tohumla tamamlanır.
    for (let i = 0; sorular.length < ADET && uretecler.length && i < 20; i++) sorular.push(S.uretecten(uretecler[i % uretecler.length], R.yeniTohum()));
    sorular.sort((a, b) => (a.zorluk || 1) - (b.zorluk || 1));
    return { sorular, kaynakSayisi: secilen.length, kapsamTahmini };
  }

  const dogruMetin = s => (s.tip === "coktan" && s.secenekler[s.dogru_index] ? s.secenekler[s.dogru_index].metin : s.cevap);

  function kagitKur(O, ders, p, puanlar, cfg) {
    const { el, kalin } = O, n = p.sorular.length;
    const soruBlok = (s, i) => el("div", { class: "soru" },
      el("p", {}, el("b", {}, (i + 1) + ". "), s.baglam ? kalin(s.baglam + " ") : null, kalin(O.kokTemiz(s.kok)), " ", el("b", {}, "(" + puanlar[i] + " puan)")),
      s.tip === "coktan" ? el("ol", { type: "A", style: "margin:.2rem 0" }, s.secenekler.map(o => el("li", {}, kalin(o.metin)))) : null,
      el("div", { class: "bosluk", "aria-hidden": "true" }));
    const anahtarBlok = (s, i) => el("div", { class: "soru" },
      el("p", {}, el("b", {}, (i + 1) + ". soru (" + puanlar[i] + " puan): "), kalin(dogruMetin(s) != null ? dogruMetin(s) : "")),
      (s.cozum || []).length ? el("ol", {}, s.cozum.map(c => el("li", {}, kalin(String(c).replace(/^\d+\.\s*/, ""))))) : null,
      el("ul", {}, O.rubrikOf(s, puanlar[i]).map(r => el("li", {}, kalin(r.olcut), " (" + r.puan + " puan)"))));
    return el("div", { class: "kagit", id: "kagit" },
      el("div", { class: "baslik-blok" },
        el("div", { class: "not" }, "PROVA — resmî sınav değildir"),
        el("h2", {}, "2026-2027 EĞİTİM VE ÖĞRETİM YILI"),
        el("div", {}, "I. DÖNEM YAZILI SINAVI (PROVA)" + (cfg.ortak ? " · ORTAK SINAV BİÇİMİ" : "")),
        el("h3", {}, ders.ad.toUpperCase() + " · 9. SINIF")),
      el("div", { class: "kimlik" }, el("div", {}, "Adı ve Soyadı: ", el("span", {})), el("div", {}, "Sınıfı / Şubesi: ", el("span", {})), el("div", {}, "Numarası: ", el("span", {})), el("div", {}, "Aldığı Puan: [      ]")),
      p.kapsamTahmini ? el("div", { class: "uyari-ornek" }, "Kapsam tahmindir.") : null,
      cfg.uyari ? el("div", { class: "uyari-ornek" }, cfg.uyari) : null,
      el("div", { class: "not" }, el("b", {}, "ÖĞRENCİLERİN DİKKATİNE! "), "Bu kitapçıkta " + n + " soru vardır, süre " + SURE_DK + " dakikadır. Cevaplarını soruların altındaki boşluğa yaz. Sınav 100 puan üzerinden değerlendirilir. İşlemlerini göstermen puan kazandırır."),
      p.sorular.map(soruBlok),
      el("div", { class: "not", style: "text-align:center" }, "SINAV BİTTİ. CEVAPLARINIZI KONTROL EDİNİZ. · PROVA — resmî sınav değildir"),
      el("div", { class: "anahtar-sayfa print-only" }, el("h2", {}, "Cevap anahtarı · " + ders.ad), el("div", { class: "not" }, "PROVA — resmî sınav değildir"), p.sorular.map(anahtarBlok)));
  }

  function provaEkrani(cfg) {
    return function render(kok, params) {
      const O = B9.ortak, el = O.el;
      if (!params.id) {
        kok.replaceChildren(el("h2", {}, cfg.ad), el("p", { class: "lead" }, cfg.aciklama),
          O.dersler().length ? el("div", { class: "row", style: "margin-top:1rem" }, O.dersler().map(d => el("a", { class: "btn primary", href: "#/" + cfg.rota + "/" + d.ders }, d.ad))) : el("div", { class: "empty" }, "Henüz ders içeriği yok."));
        return;
      }
      const ders = O.dersBul(params.id);
      if (!ders) { kok.replaceChildren(el("div", { class: "empty" }, "Bu ders bulunamadı. ", el("a", { href: "#/" + cfg.rota }, "Ders seç"))); return; }

      const p = sorulariKur(ders, cfg.ortak);
      if (!p.sorular.length) { kok.replaceChildren(el("div", { class: "empty" }, "Bu ders için henüz prova sorusu yok.")); return; }
      const puanlar = dagit(p.sorular.length);
      const uyari = p.sorular.length < ADET || p.kaynakSayisi < ADET ? UYARI : null;
      const kagit = kagitKur(O, ders, p, puanlar, { ortak: cfg.ortak, uyari });

      let kalan = SURE_DK * 60, akiyor = false, zaman = null, bitti = false;
      const sayac = el("div", { class: "geri-sayim", role: "timer", "aria-label": "Kalan süre" });
      const bas = el("button", { class: "btn primary", type: "button" });
      const goruntule = () => { sayac.textContent = String(Math.floor(kalan / 60)).padStart(2, "0") + ":" + String(kalan % 60).padStart(2, "0"); bas.textContent = akiyor ? "Duraklat" : kalan === SURE_DK * 60 ? "Süreyi başlat" : "Devam"; };
      const durdur = () => { akiyor = false; clearInterval(zaman); zaman = null; };
      const degerlendirme = el("section", { class: "no-print stack", hidden: true });
      const bitir = () => {
        if (bitti) return;
        bitti = true; durdur(); goruntule(); bas.disabled = true;
        const toplam = el("b", { "aria-live": "polite" }, "0 / 100");
        const alinan = p.sorular.map(() => 0);
        degerlendirme.replaceChildren(el("h2", {}, "Kendini değerlendir"),
          el("p", { class: "lead" }, "Cevabını göster, ölçütleri tek tek işaretle. Puan kendiliğinden hesaplanır."),
          el("div", { class: "stack" }, p.sorular.map((s, i) => O.acikBilesen(s, { puan: puanlar[i], ders: ders.ders, degisti: pn => { alinan[i] = pn; toplam.textContent = alinan.reduce((a, b) => a + b, 0) + " / 100"; } }))),
          el("p", {}, "Toplam puanın: ", toplam));
        degerlendirme.hidden = false;
        O.bildir("Süre bitti. Şimdi cevaplarını kendin değerlendirebilirsin.");
        degerlendirme.scrollIntoView({ block: "start" });
      };
      bas.addEventListener("click", () => {
        if (bitti) return;
        if (akiyor) { durdur(); goruntule(); return; }
        akiyor = true;
        zaman = setInterval(() => {
          kalan--; goruntule();
          if (kalan === 300) O.bildir("5 dakika kaldı.");
          if (kalan === 60) O.bildir("1 dakika kaldı.");
          if (kalan <= 0) bitir();
        }, 1000);
        goruntule();
      });
      O.temizleyiciler.push(durdur);
      goruntule();

      kok.replaceChildren(
        el("div", { class: "no-print stack" },
          el("div", { class: "sec-head" }, el("div", {}, el("h2", {}, cfg.ad + " · " + ders.ad), el("p", { class: "lead" }, p.sorular.length + " soru · " + SURE_DK + " dakika · 100 puan")),
            el("a", { class: "btn", href: "#/" + cfg.rota }, "Ders değiştir")),
          uyari ? el("div", { class: "kaynak", role: "note" }, "⚠ " + uyari) : null,
          p.kapsamTahmini ? el("div", { class: "kaynak" }, "Kapsam tahmindir; konular ortak sınav listesiyle eşleşmedi.") : null,
          el("div", { class: "row" }, sayac, bas,
            el("button", { class: "btn", type: "button", onclick: () => window.print() }, "🖨 Yazdır (A4)"),
            el("button", { class: "btn", type: "button", onclick: bitir }, "Süreyi bitir, değerlendir")),
          el("p", { class: "muted" }, "Yazdırınca önce sınav kâğıdı, ayrı sayfada cevap anahtarı çıkar. Kâğıda yazıp sonra buradan puanlayabilirsin.")),
        kagit, degerlendirme);
    };
  }
  B9.provaEkrani = provaEkrani;
  B9.ekranlar.yazili = { baslik: "Yazılı Provası", render: provaEkrani({ rota: "yazili", ad: "Yazılı Provası", ortak: false, aciklama: "Okul yazılısına benzer bir deneme. Hangi dersten çalışalım?" }) };
})();
