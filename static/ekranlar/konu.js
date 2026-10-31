/* Konu anlatımı: bölümler, 3 katman sekmesi, örnek önce, terimler, kontrol soruları, flashcard, not, kaynak. */
(function () {
  "use strict";
  const B9 = window.B9;
  const KATMANLAR = [["basit", "Basit"], ["kitap", "Kitap dili"], ["yazilida", "Yazılıda böyle sorulur"]];

  function paragraf(O, metin) {
    return O.el("div", { class: "parag" }, O.el("div", {}, O.el("p", {}, O.kalin(metin))), O.sesliOku(metin));
  }

  function katmanIcerik(O, b, anahtar) {
    const { el, kalin } = O, k = b.katmanlar;
    if (anahtar === "yazilida") {
      const y = k.yazilida;
      return el("div", {},
        el("p", {}, el("b", {}, "Soru kalıbı: "), kalin(y.kalip)),
        el("div", { class: "ornek" }, el("b", {}, "Örnek soru"), el("p", {}, kalin(y.ornek_soru))),
        el("div", {}, el("b", {}, "Örnek cevap"), el("ol", {}, (y.ornek_cevap || []).map(a => el("li", {}, kalin(String(a).replace(/^\d+\.\s*/, "")))))),
        y.puan_ipucu ? el("p", { class: "muted" }, "💡 ", kalin(y.puan_ipucu)) : null);
    }
    return el("div", {}, (k[anahtar] || []).map(p => paragraf(O, p)));
  }

  function bolumKur(O, b, no) {
    const { el, kalin } = O;
    const panel = el("div", { role: "tabpanel", tabindex: "0" });
    const sekmeler = KATMANLAR.map(([a, ad]) => el("button", { class: "tab", type: "button", role: "tab", "aria-selected": "false", id: "sekme-" + b.id + "-" + a }, ad));
    const sec = a => {
      sekmeler.forEach((s, i) => s.setAttribute("aria-selected", String(KATMANLAR[i][0] === a)));
      panel.replaceChildren(katmanIcerik(O, b, a));
      panel.setAttribute("aria-labelledby", "sekme-" + b.id + "-" + a);
    };
    sekmeler.forEach((s, i) => {
      s.addEventListener("click", () => sec(KATMANLAR[i][0]));
      s.addEventListener("keydown", e => {
        const j = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : -1;
        if (j >= 0 && j < sekmeler.length) { e.preventDefault(); sekmeler[j].focus(); sekmeler[j].click(); }
      });
    });
    sec("basit");

    const terimler = (b.terimler || []).length
      ? el("div", {}, el("h3", {}, "Terimler"), el("dl", { class: "terimler" }, b.terimler.flatMap(t => [el("dt", {}, t.terim), el("dd", {}, kalin(t.tanim))])))
      : null;

    const kontrol = (b.kontrol_sorulari || []).length
      ? el("div", { class: "stack" }, el("h3", {}, "Kontrol soruları"), b.kontrol_sorulari.map((q, i) => {
          const m = O.ipucuMerdiveni(q.ipuclari || []);
          const cevap = el("div", { class: "model-cevap", hidden: true, "aria-live": "polite" }, el("b", {}, "Cevap: "), kalin(q.cevap),
            q.yanlis_aciklama ? el("p", { class: "muted" }, "Farklı bulduysan: ", kalin(q.yanlis_aciklama)) : null);
          const g = el("button", { class: "btn primary", type: "button", onclick: () => { cevap.hidden = false; g.disabled = true; m.kapat(); O.bildir("Cevap açıldı."); } }, "Cevabı göster");
          return el("div", { class: "kontrol" }, el("p", { style: "margin:0" }, el("b", {}, (i + 1) + ". "), kalin(q.soru)), m.node, el("div", { class: "row" }, g), cevap);
        }))
      : null;

    return el("section", { class: "bolum", "aria-labelledby": "bolum-" + b.id },
      el("div", {}, el("span", { class: "eyebrow" }, "Bölüm " + no + " · " + (b.sure_dk || 5) + " dk"), el("h2", { id: "bolum-" + b.id }, b.baslik)),
      b.ornek ? el("div", { class: "ornek" }, el("span", { class: "eyebrow" }, "Önce bir örnek · " + (b.ornek.baglam || "")), paragraf(O, b.ornek.metin)) : null,
      el("div", { class: "tabs", role: "tablist", "aria-label": "Anlatım katmanı" }, sekmeler), panel, terimler, kontrol);
  }

  function render(kok, params) {
    const O = B9.ortak, el = O.el, os = O.oturum();
    const k = O.konuBul(params.id);
    if (!k || !k.kart) { kok.replaceChildren(el("div", { class: "empty" }, "Bu konunun anlatımı henüz hazır değil. ", el("a", { href: "#/ana" }, "Ana ekrana dön"))); return; }
    const c = k.kart;

    const ayarDugme = (ad, anahtar) => {
      const b = el("button", { class: "btn", type: "button", "aria-pressed": String(!!os.ayar(anahtar)) }, ad);
      b.addEventListener("click", () => { const y = !os.ayar(anahtar); os.ayarYaz(anahtar, y); b.setAttribute("aria-pressed", String(y)); B9.uyg.ayarUygula(); });
      return b;
    };
    const kaynakKutu = el("div", { class: "kaynak" }, el("b", {}, "Kaynak: "), O.kaynakMetni(c),
      (c.dogrula || []).length ? el("div", {}, c.dogrula.map(d => el("div", {}, "⚠ ", d))) : null);

    kok.replaceChildren(
      el("div", { class: "quiz-top" }, el("a", { class: "btn", href: "#/ders/" + k.ders.ders }, "← " + k.ders.ad), el("span", { class: "spacer" }),
        ayarDugme("Büyük yazı", "buyuk_yazi"), ayarDugme("Odak modu", "odak")),
      el("div", {}, el("div", { class: "eyebrow" }, k.unite.ad + " · " + (c.ogrenme_ciktilari || []).map(x => x.kod).join(", ")),
        el("h1", { style: "font-family:var(--f-display);font-size:1.9rem;margin:.2rem 0" }, c.baslik),
        el("p", { class: "lead" }, "Her bölüm kısa. Önce örnek, sonra kural, sonra kontrol soruları.")),
      el("div", { class: "stack", style: "margin-top:1rem" }, c.bolumler.map((b, i) => bolumKur(O, b, i + 1)),
        (c.flashcard || []).length ? el("section", { class: "bolum" }, el("h2", {}, "Bilgi kartları"),
          el("div", { class: "flash" }, c.flashcard.map(f => el("details", {}, el("summary", {}, O.kalin(f.on)), el("p", {}, O.kalin(f.arka)))))) : null,
        kaynakKutu,
        el("div", { class: "row" }, el("a", { class: "btn primary", href: "#/alistirma/" + k.konu.id }, "Alıştırmaya geç"))),
      O.notAlani(k.konu.id, c.baslik));
  }
  B9.ekranlar.konu = { baslik: "Konu anlatımı", render };
})();
