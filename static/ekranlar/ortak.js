/* Ortak Sınav Provası: yazili.js'deki iskeleti ortak sınav biçimiyle (7 soru, 40 dk, 100 puan) kullanır. */
(function () {
  "use strict";
  const B9 = window.B9;
  B9.ekranlar.ortak = { baslik: "Ortak Sınav Provası", render: B9.provaEkrani({ rota: "ortak", ad: "Ortak Sınav Provası", ortak: true, aciklama: "Ülke geneli ortak yazılının biçiminde deneme. Hangi dersten çalışalım?" }) };
})();
