/* Ana ekran: sayaçlar, "Bugünün 20 dakikası", ders kartları. */
(function () {
  "use strict";
  const B9 = window.B9, O = () => B9.ortak;

  function yeniKonu() {
    const os = O().oturum();
    return O().konular().find(x => (x.kart || x.sorular.length) && !os.data.istatistik[x.konu.id]) || null;
  }

  function render(kok) {
    const { el, bekleyenler, tarihTr } = O();
    const bg = B9.tekrar.bugun();
    const os = O().oturum();

    const sinavlar = ((window.TAKVIM && window.TAKVIM.sinavlar) || []).map(s => ({ s, kala: B9.tekrar.gunFarki(bg, s.tarih) })).filter(x => x.kala >= 0).sort((a, b) => a.kala - b.kala);
    const sayac = sinavlar.length
      ? el("div", { class: "sayaclar" }, sinavlar.map(({ s, kala }) => el("div", { class: "sayac" },
          el("span", { class: "eyebrow" }, s.ad), el("b", {}, kala === 0 ? "Bugün" : kala + " gün"), el("span", { class: "muted" }, tarihTr(s.tarih)))))
      : el("div", { class: "empty" }, "Takvimde yaklaşan yazılı görünmüyor.");

    const bek = bekleyenler(), yeni = yeniKonu();
    const sonKonu = (os.data.iz[0] && os.data.iz[0].konu_id) || (yeni && yeni.konu.id);
    const parca = (sure, baslik, aciklama, href, etiket, kapali) => el("li", {},
      el("div", {}, el("b", {}, sure + " dk · " + baslik), el("div", { class: "muted" }, aciklama)),
      kapali ? el("span", { class: "chip rem" }, "şimdilik yok") : el("a", { class: "btn primary", href }, etiket));
    const bugun20 = el("div", { class: "dakika-kart" },
      el("h2", {}, "Bugünün 20 dakikası"),
      el("p", { class: "lead" }, "Üç küçük parça. Hepsi bitince bugünlük tamam."),
      el("ul", { class: "parcalar" },
        parca(5, "Tekrar", bek.length ? bek.length + " soru tekrar bekliyor." : "Bekleyen tekrar yok, güzel.", "#/tekrar?n=5", "Başla", !bek.length),
        parca(10, "Yeni konu", yeni ? O().konuAdi(yeni.konu.id) : "Bütün konuları gördün.", yeni ? "#/konu/" + yeni.konu.id : "#/ana", "Anlatıma geç", !yeni),
        parca(5, "3 soru", sonKonu ? O().konuAdi(sonKonu) + " konusundan." : "Önce bir konu seç.", "#/alistirma/" + sonKonu + "?n=3", "Soruları çöz", !sonKonu)));

    const dersKartlari = O().dersler().length
      ? el("div", { class: "modules" }, O().dersler().map(d => {
          const og = O().ogeler().filter(o => o.ders === d.ders), c = O().kutuSayilari(og);
          const konuSay = d.harita.uniteler.reduce((a, u) => a + u.konular.length, 0);
          return el("div", { class: "mod" },
            el("h3", {}, el("a", { href: "#/ders/" + d.ders, style: "color:inherit" }, d.ad)),
            el("p", {}, "Haftada " + d.haftalik_saat + " saat · " + konuSay + " konu"),
            O().kutuCubugu(c),
            el("small", {}, "Kutu 5'te: " + c[5] + " · tekrar bekleyen: " + og.filter(o => bek.some(b => b.anahtar === o.anahtar)).length + " · yeni: " + c[0]),
            el("div", { class: "row" },
              el("a", { class: "btn", href: "#/ders/" + d.ders }, "Konular"),
              el("a", { class: "btn", href: "#/yazili/" + d.ders }, "Yazılı provası"),
              el("a", { class: "btn", href: "#/ortak/" + d.ders }, "Ortak sınav")));
        }))
      : el("div", { class: "empty" }, "Henüz ders içeriği yüklenmedi.");

    kok.replaceChildren(
      el("section", {}, el("div", { class: "sec-head" }, el("h2", {}, "Yazılıya kalan gün")), sayac),
      el("section", {}, bugun20),
      el("section", {}, el("div", { class: "sec-head" }, el("h2", {}, "Derslerim")), dersKartlari));
  }
  B9.ekranlar.ana = { baslik: "Ana ekran", render };
})();
