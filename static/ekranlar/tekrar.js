/* Tekrar Kutusu: bugünün tarihli Leitner listesi. */
(function () {
  "use strict";
  const B9 = window.B9;

  function render(kok, params) {
    const O = B9.ortak, el = O.el;
    const tum = O.bekleyenler(), liste = B9.tekrar.bugunListesi(O.oturum().data.kutular, O.ogeler(), window.TAKVIM, B9.tekrar.bugun());
    const n = parseInt((params.sorgu || {}).n, 10);
    const secili = (n > 0 ? liste.slice(0, n) : liste).filter(x => O.ogeBul(x.anahtar));
    if (!secili.length) {
      kok.replaceChildren(el("h2", {}, "Tekrar Kutusu"), el("div", { class: "empty", style: "margin-top:1rem" },
        "Bugün tekrar bekleyen soru yok. Yeni bir konuya bakabilir ya da alıştırma yapabilirsin. Yanlış yaptığın sorular yarın buraya gelir.",
        el("div", { class: "row", style: "margin-top:.8rem" }, el("a", { class: "btn primary", href: "#/ana" }, "Ana ekrana dön"))));
      return;
    }
    const baslat = () => O.turBaslat(kok, {
      baslik: "Tekrar Kutusu", geri: "#/ana", degisti: () => B9.uyg.kpiGuncelle(),
      kuyruk: secili.map(x => ({ oge: O.ogeBul(x.anahtar), derinlik: 0 })),
      yeniTur: () => B9.uyg.yenile(),
    });
    kok.replaceChildren(
      el("h2", {}, "Tekrar Kutusu"),
      el("p", { class: "lead" }, secili.length + " soru bugün için hazır." + (tum.length > liste.length ? " " + (tum.length - liste.length) + " soru yarına kaldı." : "")),
      el("ul", { class: "res-list" }, secili.map(x => el("li", {}, el("span", {}, O.konuAdi(x.konu_id)),
        el("span", {}, x.sinav ? el("span", { class: "chip bad" }, "yazılıya " + x.gunKala + " gün") : null, " ", el("span", { class: "chip rem" }, "kutu " + x.kutu))))),
      el("div", { class: "row", style: "margin-top:1rem" }, el("button", { class: "btn primary", type: "button", onclick: baslat }, "Tekrara başla")));
  }
  B9.ekranlar.tekrar = { baslik: "Tekrar Kutusu", render };
})();
