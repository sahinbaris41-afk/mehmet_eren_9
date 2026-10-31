/* Alıştırma: konunun üreteç ve statik soruları, %50/%35/%15 zorluk, ipucu merdiveni, pekiştirme. */
(function () {
  "use strict";
  const B9 = window.B9;

  function render(kok, params) {
    const O = B9.ortak, el = O.el;
    const k = O.konuBul(params.id);
    if (!k) { kok.replaceChildren(el("div", { class: "empty" }, "Bu konu bulunamadı. ", el("a", { href: "#/ana" }, "Ana ekrana dön"))); return; }
    const n = Math.max(1, Math.min(10, parseInt((params.sorgu || {}).n, 10) || 6));
    const kuyruk = O.turKuyrugu(k.konu.id, n);
    const ac = O.acikSorular(k.konu.id)[0];
    if (ac && n >= 5) kuyruk.push({ acik: B9.soru.statikten(ac, B9.rastgele.yeniTohum()), derinlik: 0 });
    O.turBaslat(kok, {
      baslik: "Alıştırma · " + O.konuAdi(k.konu.id), geri: "#/ders/" + k.ders.ders, ders: k.ders.ders,
      kuyruk, degisti: () => B9.uyg.kpiGuncelle(), yeniTur: () => B9.uyg.yenile(),
    });
  }
  B9.ekranlar.alistirma = { baslik: "Alıştırma", render };
})();
