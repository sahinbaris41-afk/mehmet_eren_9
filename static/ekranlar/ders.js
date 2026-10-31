/* Ders ekranı: ünite ve konu listesi. */
(function () {
  "use strict";
  const B9 = window.B9;

  function render(kok, params) {
    const O = B9.ortak, el = O.el;
    const d = O.dersBul(params.id);
    if (!d) { kok.replaceChildren(el("div", { class: "empty" }, "Bu ders bulunamadı. ", el("a", { href: "#/ana" }, "Ana ekrana dön"))); return; }
    const bek = O.bekleyenler(), tum = O.ogeler();
    kok.replaceChildren(
      el("div", { class: "sec-head" }, el("div", {}, el("h2", {}, d.ad), el("p", { class: "lead" }, "Haftada " + d.haftalik_saat + " saat")),
        el("div", { class: "row" }, el("a", { class: "btn", href: "#/yazili/" + d.ders }, "Yazılı provası"), el("a", { class: "btn", href: "#/ortak/" + d.ders }, "Ortak sınav provası"))),
      el("div", { class: "stack" }, d.harita.uniteler.map(u => el("div", { class: "unite" },
        el("h3", {}, u.ad),
        u.konular.map(k => {
          const og = tum.filter(o => o.konu_id === k.id), c = O.kutuSayilari(og);
          const kart = (d.konular || {})[k.id];
          const beklenen = og.filter(o => bek.some(b => b.anahtar === o.anahtar)).length;
          const kod = (k.ogrenme_ciktilari || []).map(x => x.kod).join(", ");
          return el("div", { class: "konu-satir" },
            el("div", {}, el("b", {}, (kart && kart.baslik) || k.ad), " ", kod ? el("span", { class: "chip rem" }, kod) : null, " ",
              beklenen ? el("span", { class: "chip bad" }, beklenen + " tekrar") : null),
            og.length ? O.kutuCubugu(c) : null,
            el("div", { class: "row" },
              kart ? el("a", { class: "btn primary", href: "#/konu/" + k.id }, "Anlatım") : el("span", { class: "chip rem" }, "anlatım hazırlanıyor"),
              og.length ? el("a", { class: "btn", href: "#/alistirma/" + k.id }, "Alıştırma") : el("span", { class: "chip rem" }, "soru hazırlanıyor")));
        })))));
  }
  B9.ekranlar.ders = { baslik: "Ders", render };
})();
