/* B9.tekrar: 5 kutulu tarihli Leitner. Saf fonksiyonlar, DOM yok. `bugun` her yerde parametre olarak verilebilir. */
(function () {
  "use strict";
  const G = typeof window !== "undefined" ? window : globalThis;
  const B9 = (G.B9 = G.B9 || {});

  const ARALIK = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 14 };
  const AGIRLIK = { 0: 3, 1: 4, 2: 2, 3: 1, 4: 1, 5: 0.5 };
  const MAX_DERINLIK = 2, GUNLUK_SINIR = 15, SINAV_GUN = 10;

  function bugun(d) {
    d = d || new Date();
    try {
      return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
    } catch (e) {
      const p = n => String(n).padStart(2, "0");
      return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
    }
  }
  const gunSayisi = g => { const [y, a, d] = g.split("-").map(Number); return Date.UTC(y, a - 1, d) / 86400000; };
  const gunEkle = (g, n) => new Date((gunSayisi(g) + n) * 86400000).toISOString().slice(0, 10);
  const gunFarki = (a, b) => gunSayisi(b) - gunSayisi(a); // b - a

  // -> { durum: yeni kutu kaydı, pekistirme: bir sonraki pekiştirme derinliği | null }
  function uygula(durum, cevap, bg) {
    bg = bg || bugun();
    const eski = durum || { kutu: 0, sonraki: null, son: null, seri: 0 };
    const derinlik = cevap.derinlik || 0, ipucu = cevap.ipucu || 0;
    if (!cevap.ok) {
      return {
        durum: { kutu: 1, sonraki: gunEkle(bg, ARALIK[1]), son: bg, seri: 0 },
        pekistirme: derinlik < MAX_DERINLIK ? derinlik + 1 : null,
      };
    }
    if (derinlik > 0) return { durum: Object.assign({}, eski, { son: bg }), pekistirme: null };
    // İpucuyla doğru kutuyu oynatmaz; yalnızca hiç görülmemiş öğe izlenmeye başlar (kutu 0 -> 1).
    const kutu = ipucu > 0 ? Math.max(1, eski.kutu) : Math.min(5, eski.kutu + 1);
    return {
      durum: { kutu, sonraki: gunEkle(bg, ARALIK[kutu]), son: bg, seri: ipucu > 0 ? 0 : (eski.seri || 0) + 1 },
      pekistirme: null,
    };
  }

  // Öğenin ders/yazılısına göre en yakın sınava kalan gün (0..SINAV_GUN) ya da null.
  function sinavaKalan(oge, takvim, bg) {
    let en = null;
    for (const s of (takvim && takvim.sinavlar) || []) {
      if (s.ders !== oge.ders) continue;
      if (oge.yazili && oge.yazili.length && s.yazili && !oge.yazili.includes(s.yazili)) continue;
      const k = gunFarki(bg, s.tarih);
      if (k >= 0 && k <= SINAV_GUN && (en === null || k < en)) en = k;
    }
    return en;
  }

  // Sınırsız, sıralı bekleyen liste. durum: { anahtar: {kutu, sonraki, ...} }, ogeler: [{anahtar, konu_id, ders, yazili}]
  function bekleyen(durum, ogeler, takvim, bg) {
    bg = bg || bugun();
    const aday = [];
    for (const o of ogeler) {
      const d = durum[o.anahtar];
      if (!d || d.kutu < 1) continue;
      const kalan = sinavaKalan(o, takvim, bg);
      const sinav = kalan !== null && d.kutu <= 3;
      if (d.sonraki <= bg || sinav) aday.push({ anahtar: o.anahtar, konu_id: o.konu_id, ders: o.ders, kutu: d.kutu, sonraki: d.sonraki, sinav, gunKala: kalan });
    }
    aday.sort((a, b) => (b.sinav - a.sinav) || (a.kutu - b.kutu) || (a.sonraki < b.sonraki ? -1 : a.sonraki > b.sonraki ? 1 : 0));
    // Art arda aynı konu gelmesin; başka seçenek kalmadıysa mecburen gelir.
    const sira = [];
    while (aday.length) {
      const son = sira.length ? sira[sira.length - 1].konu_id : null;
      const i = aday.findIndex(a => a.konu_id !== son);
      sira.push(aday.splice(i < 0 ? 0 : i, 1)[0]);
    }
    return sira;
  }
  const bugunListesi = (durum, ogeler, takvim, bg) => bekleyen(durum, ogeler, takvim, bg).slice(0, GUNLUK_SINIR);

  // Kutu ağırlıklı seçim; mümkünse önceki konudan farklı bir öğe verir.
  function agirlikliSec(ogeler, kutuAl, rng, oncekiKonu) {
    if (!ogeler.length) return null;
    const r = rng || Math.random;
    const havuz = ogeler.filter(o => o.konu_id !== oncekiKonu);
    const h = havuz.length ? havuz : ogeler;
    const w = o => AGIRLIK[kutuAl(o.anahtar)] ?? 1;
    let x = r() * h.reduce((t, o) => t + w(o), 0);
    for (const o of h) { x -= w(o); if (x < 0) return o; }
    return h[h.length - 1];
  }

  B9.tekrar = { ARALIK, AGIRLIK, MAX_DERINLIK, GUNLUK_SINIR, SINAV_GUN, bugun, gunEkle, gunFarki, uygula, sinavaKalan, bekleyen, bugunListesi, agirlikliSec };
})();
