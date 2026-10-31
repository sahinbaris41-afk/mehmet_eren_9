/* Veli Paneli: PIN (güvenlik değil, ekran ayrımı), son 7 gün, doğruluk, hatalar, zayıf konular, onaylar, yedek, sıfırlama. */
(function () {
  "use strict";
  const B9 = window.B9;
  let acik = false; // yalnızca bu sayfa yüklemesi boyunca

  function pinEkrani(kok, yeniMi, devam) {
    const O = B9.ortak, el = O.el, os = O.oturum();
    const girdi = el("input", { type: "password", inputmode: "numeric", pattern: "[0-9]{4}", maxlength: "4", id: "pin", autocomplete: "off", class: "metin-kutu", style: "min-height:48px;max-width:12rem" });
    const mesaj = el("p", { "aria-live": "polite", role: "status" });
    const tamam = async () => {
      const v = girdi.value.trim();
      if (!/^\d{4}$/.test(v)) { mesaj.textContent = "PIN 4 rakam olmalı."; return; }
      if (yeniMi) { await os.ayarYaz("veli_pin", v); acik = true; devam(); }
      else if (v === os.ayar("veli_pin")) { acik = true; devam(); }
      else mesaj.textContent = "PIN tutmadı, bir daha dene.";
    };
    girdi.addEventListener("keydown", e => { if (e.key === "Enter") tamam(); });
    kok.replaceChildren(el("div", { class: "stack", style: "max-width:28rem" },
      el("h2", {}, yeniMi ? "Veli PIN'i belirle" : "Veli Paneli"),
      el("p", { class: "lead" }, yeniMi ? "4 haneli bir PIN seç. Bundan sonra bu ekran PIN ile açılır." : "PIN'i gir."),
      el("label", { for: "pin" }, "4 haneli PIN"), girdi,
      el("div", { class: "row" }, el("button", { class: "btn primary", type: "button", onclick: tamam }, yeniMi ? "PIN'i kaydet" : "Aç")),
      mesaj,
      el("p", { class: "muted" }, "Bu bir güvenlik önlemi değil; öğrenci ekranı ile veli ekranını ayırır. PIN bu cihazda düz yazı olarak saklanır.")));
    girdi.focus();
  }

  function panel(kok) {
    const O = B9.ortak, el = O.el, os = O.oturum(), d = os.data;
    const bg = B9.tekrar.bugun();

    // Son 7 gün
    const gunler = Array.from({ length: 7 }, (_, i) => B9.tekrar.gunEkle(bg, i - 6));
    const maks = Math.max(20, ...gunler.map(g => d.dakika[g] || 0));
    const cubuk = el("div", { class: "cubuklar", role: "img", "aria-label": "Son 7 gün çalışma dakikaları: " + gunler.map(g => O.kisaGun(g) + " " + Math.round(d.dakika[g] || 0)).join(", ") },
      gunler.map(g => el("div", { class: "cubuk" }, el("i", { style: "height:" + Math.round(100 * (d.dakika[g] || 0) / maks) + "%" }), el("b", {}, Math.round(d.dakika[g] || 0)), el("span", {}, O.kisaGun(g)))));

    // Ders bazında doğruluk
    const dersStat = {};
    let ipucu = 0;
    for (const [kid, s] of Object.entries(d.istatistik)) {
      const k = O.konuBul(kid), dk = k ? k.ders.ders : "diğer";
      const a = (dersStat[dk] = dersStat[dk] || { t: 0, c: 0 });
      a.t += s.t; a.c += s.c; ipucu += s.ipucu || 0;
    }
    const dersSatirlari = Object.entries(dersStat).map(([dk, s]) => {
      const dd = O.dersBul(dk);
      return el("div", { class: "yatay" }, el("span", {}, dd ? dd.ad : dk), el("span", { class: "bar", role: "img", "aria-label": "Doğruluk " + O.yuzde(s.c, s.t) }, el("i", { class: "b5", style: "width:" + Math.round(100 * s.c / s.t) + "%" })), el("b", {}, O.yuzde(s.c, s.t)));
    });

    // Hata türleri
    const hs = {};
    for (const x of d.iz) if (!x.ok && x.hata_turu) hs[x.hata_turu] = (hs[x.hata_turu] || 0) + 1;
    const hatalar = Object.entries(hs).sort((a, b) => b[1] - a[1]).slice(0, 5);

    // Zayıf konular
    const zayif = Object.entries(d.istatistik).filter(([kid, s]) => s.t >= 3 && s.c / s.t < 0.6).map(([kid]) => kid);
    for (const [a, k] of Object.entries(d.kutular)) if (k.kutu === 1) { const o = O.ogeBul(a); if (o && !zayif.includes(o.konu_id)) zayif.push(o.konu_id); }

    // Onay bekleyen açık uçlu cevaplar
    const bekleyen = [];
    for (const [sid, liste] of Object.entries(d.acik)) liste.forEach((k, i) => { if (!k.veli_onay) bekleyen.push({ sid, i, k }); });
    const onayListe = bekleyen.length
      ? el("ul", { class: "res-list" }, bekleyen.slice(0, 20).map(({ sid, i, k }) => {
          const b = el("button", { class: "btn", type: "button" }, "Onayla");
          b.addEventListener("click", async () => { await os.acikGuncelle(sid, i, { veli_onay: true }); b.disabled = true; b.textContent = "Onaylandı"; O.bildir("Onaylandı."); });
          return el("li", {}, el("span", {}, (k.metin ? k.metin.slice(0, 80) : "(yazılı cevap yok)") + " · " + k.puan + " puan"), b);
        }))
      : el("div", { class: "empty" }, "Onay bekleyen cevap yok.");

    // Yedek ve sıfırlama
    const ileti = el("p", { "aria-live": "polite", role: "status" });
    const dosya = el("input", { type: "file", accept: "application/json,.json", id: "ice-aktar", class: "sr-only" });
    dosya.addEventListener("change", () => {
      const f = dosya.files && dosya.files[0];
      if (!f) return;
      const fr = new FileReader();
      fr.onload = async () => {
        const r = await os.iceAktar(String(fr.result));
        ileti.textContent = r.ok ? "İlerleme içe aktarıldı. Önceki kayıt yedeklendi." + (r.kalici ? "" : " (Bu cihazda kalıcı kayıt yok.)") : r.hata;
        if (r.ok) { B9.uyg.ayarUygula(); B9.uyg.kpiGuncelle(); setTimeout(() => B9.uyg.yenile(), 1200); }
      };
      fr.onerror = () => { ileti.textContent = "Dosya okunamadı. Mevcut ilerleme olduğu gibi duruyor."; };
      fr.readAsText(f);
      dosya.value = "";
    });
    const sifirKutu = el("div", { class: "row" });
    const sifirDugme = () => sifirKutu.replaceChildren(el("button", { class: "btn danger", type: "button", onclick: sorgu }, "İlerlemeyi sıfırla"));
    function sorgu() {
      const evet = el("button", { class: "btn danger", type: "button" }, "Evet, hepsini sil");
      evet.addEventListener("click", async () => { await os.sifirla(); B9.uyg.kpiGuncelle(); B9.uyg.yenile(); });
      sifirKutu.replaceChildren(el("span", { role: "alert" }, "Kutular, notlar, süre ve izler silinecek. Emin misin? Önce yedek almak iyi olur. "), evet, el("button", { class: "btn", type: "button", onclick: sifirDugme }, "Vazgeç"));
      evet.previousSibling && evet.focus();
    }
    sifirDugme();

    const toplamT = Object.values(d.istatistik).reduce((a, s) => a + s.t, 0);
    const birikmis = Math.max(0, O.bekleyenler().length - B9.tekrar.GUNLUK_SINIR);

    kok.replaceChildren(el("div", { class: "stack" },
      el("div", { class: "sec-head" }, el("h2", {}, "Veli Paneli"), el("div", { class: "row no-print" },
        el("button", { class: "btn", type: "button", onclick: () => window.print() }, "🖨 Yazdır"),
        el("button", { class: "btn", type: "button", onclick: () => { acik = false; B9.uyg.yenile(); } }, "Kilitle"))),
      el("div", { class: "sayaclar" },
        el("div", { class: "sayac" }, el("span", { class: "eyebrow" }, "Bugün"), el("b", {}, Math.round(d.dakika[bg] || 0) + " dk")),
        el("div", { class: "sayac" }, el("span", { class: "eyebrow" }, "Toplam soru"), el("b", {}, toplamT)),
        el("div", { class: "sayac" }, el("span", { class: "eyebrow" }, "İpucu kullanımı"), el("b", {}, ipucu)),
        el("div", { class: "sayac" }, el("span", { class: "eyebrow" }, "Birikmiş tekrar"), el("b", {}, birikmis))),
      el("section", {}, el("h3", {}, "Son 7 gün (dakika)"), cubuk),
      el("section", { class: "stack" }, el("h3", {}, "Ders bazında doğruluk"), dersSatirlari.length ? dersSatirlari : el("div", { class: "empty" }, "Henüz çözülen soru yok.")),
      el("section", {}, el("h3", {}, "En çok yapılan hata türleri"), hatalar.length
        ? el("div", { class: "tablo" }, el("table", {}, el("thead", {}, el("tr", {}, el("th", { scope: "col" }, "Hata türü"), el("th", { scope: "col" }, "Sayı"))), el("tbody", {}, hatalar.map(([h, n]) => el("tr", {}, el("td", {}, h), el("td", {}, n))))))
        : el("div", { class: "empty" }, "Kayıtlı hata yok.")),
      el("section", {}, el("h3", {}, "Zayıf konular"), zayif.length ? el("ul", {}, zayif.map(k => el("li", {}, O.konuAdi(k), " ", el("a", { href: "#/alistirma/" + k, class: "no-print" }, "çalış")))) : el("div", { class: "empty" }, "Şimdilik zayıf konu görünmüyor.")),
      el("section", { class: "no-print" }, el("h3", {}, "Veli onayı bekleyen açık uçlu cevaplar"), onayListe),
      el("section", { class: "no-print stack" }, el("h3", {}, "Yedek"),
        el("p", { class: "muted" }, "İlerleme bu cihazda saklanır. Haftada bir yedek almak iyi olur."),
        el("div", { class: "row" },
          el("button", { class: "btn primary", type: "button", onclick: () => { os.indir(); ileti.textContent = "Yedek indirildi."; } }, "JSON olarak dışa aktar"),
          el("label", { class: "btn", for: "ice-aktar", tabindex: "0", onkeydown: e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); dosya.click(); } } }, "JSON içe aktar")),
        dosya, ileti, sifirKutu)));
  }

  function render(kok) {
    const os = B9.ortak.oturum();
    const goster = () => panel(kok);
    if (acik) goster();
    else pinEkrani(kok, !os.ayar("veli_pin"), goster);
  }
  B9.ekranlar.veli = { baslik: "Veli Paneli", render };
})();
