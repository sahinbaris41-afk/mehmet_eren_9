/* Kılavuz: <dialog> içeriği, öğrenci ve veli bölümleri ayrı. B9.ekranlar.kilavuz.render(kok) diyalog gövdesini doldurur. */
(function () {
  "use strict";
  const B9 = window.B9;

  function render(kok) {
    const el = B9.ortak.el;
    const bolum = (baslik, maddeler) => el("section", {}, el("h3", {}, baslik), el("ul", {}, maddeler.map(m => el("li", {}, B9.ortak.kalin(m)))));
    kok.replaceChildren(
      el("p", { class: "eyebrow", style: "margin-top:1rem" }, "Öğrenci için"),
      bolum("Her gün 20 dakika", ["Ana ekranda **Bugünün 20 dakikası** var: 5 dk tekrar, 10 dk yeni konu, 5 dk 3 soru.", "Her parçanın düğmesi seni doğru ekrana götürür."]),
      bolum("Konu anlatımı", ["Her bölümde önce bir örnek var, sonra kural.", "Üç sekme: **Basit**, **Kitap dili**, **Yazılıda böyle sorulur**.", "🔊 Sesli oku düğmesi cihazında Türkçe ses varsa görünür.", "Büyük yazı ve Odak modu üstteki düğmelerle açılır."]),
      bolum("Alıştırma", ["Soruyu cevaplamadan önce **İpucu** alabilirsin. Üç basamak var; ipucuyla doğru yaparsan kutu aynı kalır.", "Yanlışta nedenini görürsün ve aynı türden yeni sayılarla bir soru gelir.", "Klavyede A-D ya da 1-4 ile cevap verebilirsin; yazı kutusundayken kısayollar kapalıdır."]),
      bolum("Tekrar Kutusu", ["Yanlış yaptığın sorular kutu 1'e düşer ve ertesi gün tekrar gelir.", "Doğru bildikçe kutu büyür: 1, 2, 4, 7, 14 gün sonra tekrar sorulur."]),
      bolum("Provalar", ["**Yazılı** ve **Ortak sınav** provaları 7 soru, 40 dakikadır.", "Yazdırıp kâğıda yazabilirsin. Süre bitince cevabını göster, ölçütleri kendin işaretle."]),
      bolum("Notlar", ["Her konunun altında **Kendi cümlemle** notu var; yazdıkça kendiliğinden kaydolur."]),
      el("p", { class: "eyebrow", style: "margin-top:1.5rem" }, "Veli için"),
      bolum("Veli Paneli", ["İlk girişte 4 haneli PIN belirlenir. Bu bir güvenlik önlemi değil, öğrenci ve veli ekranını ayırır.", "Son 7 gün çalışma süresi, ders bazında doğruluk, en çok yapılan hatalar ve zayıf konular görünür.", "Açık uçlu cevapları **Onayla** düğmesiyle onaylayabilirsiniz."]),
      bolum("Yedek", ["İlerleme yalnızca bu cihazın tarayıcısında saklanır; tarayıcı verisi silinirse gider.", "Haftada bir **JSON olarak dışa aktar** ile yedek alın. **İçe aktar** önce mevcut kaydı yedekler, bozuk dosya hiçbir şeyi silmez.", "**İlerlemeyi sıfırla** iki aşamalıdır."]));
  }
  B9.ekranlar.kilavuz = { baslik: "Kılavuz", render };
})();
