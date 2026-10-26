// B9.soru: üreteçten ya da statik sorudan ekranların kullandığı tek Soru nesnesini kurar ve cevabı denetler.
(function () {
  const G = typeof window !== "undefined" ? window : globalThis;
  G.B9 = G.B9 || {};
  const R = () => G.B9.rastgele; // yükleme sırasından bağımsız kalsın diye çağrı anında okunur
  const BOZUK = ["undefined", "NaN", "Infinity", "[object"];

  // Türkçe büyük/küçük harf: İ→i, I→ı; boşluk sadeleşir.
  const normal = m => String(m == null ? "" : m).replace(/İ/g, "i").replace(/I/g, "ı").toLowerCase().replace(/\s+/g, " ").trim();

  function dyBool(x) {
    if (typeof x === "boolean") return x;
    const n = normal(x);
    if (n === "d" || n === "doğru" || n === "true") return true;
    if (n === "y" || n === "yanlış" || n === "false") return false;
    return null;
  }

  function temel(kaynak, tohum) {
    return {
      tohum, konu_id: kaynak.konu_id, zorluk: kaynak.zorluk || 1,
      ogrenme_ciktisi: kaynak.ogrenme_ciktisi || null, kaynak: kaynak.kaynak || null,
    };
  }

  // Referanstaki buildQuestion: yanlışları tekilleştir, doğruyu çıkar, 3 yanlış seç, karıştır.
  function insa(uretec, tohum) {
    const r = R().rng(tohum);
    const g = uretec.gen(r);
    const gorulen = new Set([g.dogru]);
    const havuz = R().shuffle(r, g.yanlislar).filter(y => !gorulen.has(y.metin) && gorulen.add(y.metin));
    const secenekler = R().shuffle(r, [
      { metin: g.dogru, dogru: true, hata_turu: null, aciklama: null },
      ...havuz.slice(0, 3).map(y => ({ metin: y.metin, dogru: false, hata_turu: y.hata_turu || null, aciklama: y.aciklama || null })),
    ]);
    const soru = Object.assign(temel(uretec, tohum), {
      anahtar: "uretec:" + uretec.id, soru_id: uretec.id + "#" + tohum, uretec_id: uretec.id, tip: "coktan",
      baglam: g.baglam || null, kok: g.kok, secenekler, dogru_index: secenekler.findIndex(s => s.dogru),
      cevap: g.dogru, kabul_edilenler: [], ipuclari: g.ipuclari, cozum: g.cozum, rubrik: null, puan: null, hata_turu: [],
    });
    return { soru, g };
  }

  const uretecten = (uretec, tohum) => insa(uretec, tohum).soru;

  function statikten(s, tohum) {
    let secenekler = s.secenekler || [], dogru_index = null;
    if (s.tip === "coktan") {
      secenekler = R().shuffle(R().rng(tohum), secenekler.map(o => ({
        metin: o.metin, dogru: !!o.dogru, hata_turu: o.dogru ? null : o.hata_turu || null, aciklama: o.dogru ? null : o.aciklama || null,
      })));
      dogru_index = secenekler.findIndex(o => o.dogru);
    }
    return Object.assign(temel(s, tohum), {
      anahtar: "konu:" + s.konu_id, soru_id: s.id, uretec_id: null, tip: s.tip,
      baglam: s.baglam || null, kok: s.kok, secenekler, dogru_index,
      cevap: s.cevap != null ? s.cevap : null, kabul_edilenler: s.kabul_edilenler || [],
      ipuclari: s.ipuclari || [], cozum: s.cozum_adimlari || s.cozum || [], rubrik: s.rubrik || null,
      puan: s.puan != null ? s.puan : null, hata_turu: s.hata_turu || [],
    });
  }

  // coktan: index; dogru_yanlis: boolean ya da "D"/"Y"; bosluk: metin; eslestirme: dizi; acik: öz değerlendirme ekranda.
  function kontrol(soru, secim) {
    const yanlis = (aciklama) => ({ dogru: false, hata_turu: soru.hata_turu[0] || null, aciklama: aciklama || null });
    switch (soru.tip) {
      case "coktan": {
        const s = soru.secenekler[secim];
        if (!s) return { dogru: false, hata_turu: null, aciklama: null };
        return { dogru: s.dogru, hata_turu: s.hata_turu, aciklama: s.aciklama };
      }
      case "dogru_yanlis":
        return dyBool(secim) !== null && dyBool(secim) === dyBool(soru.cevap) ? { dogru: true, hata_turu: null, aciklama: null } : yanlis();
      case "bosluk": {
        const kabul = [soru.cevap, ...soru.kabul_edilenler].filter(k => k != null).map(normal);
        return kabul.includes(normal(secim)) ? { dogru: true, hata_turu: null, aciklama: null } : yanlis();
      }
      case "eslestirme": {
        const b = soru.cevap || [];
        const ok = Array.isArray(secim) && secim.length === b.length && b.every((x, i) => String(x) === String(secim[i]));
        return ok ? { dogru: true, hata_turu: null, aciklama: null } : yanlis();
      }
      default:
        return { dogru: null, hata_turu: null, aciklama: null };
    }
  }

  const ipucu = (soru, n) => (soru.ipuclari || [])[Math.min(Math.max(n | 0, 1), 3) - 1] || null;

  function uretecDene(uretec, adet) {
    const hatalar = [];
    for (let t = 0; t < adet; t++) {
      const hata = m => hatalar.push({ tohum: t, mesaj: uretec.id + " tohum " + t + ": " + m });
      try {
        const { soru, g } = insa(uretec, t);
        const metinler = soru.secenekler.map(s => s.metin);
        if (metinler.length !== 4) hata("şık sayısı " + metinler.length);
        if (new Set(metinler).size !== metinler.length) hata("aynı şık var: " + metinler.join(" | "));
        if (soru.secenekler.filter(s => s.dogru).length !== 1) hata("doğru şık sayısı 1 değil");
        if (metinler[soru.dogru_index] !== g.dogru) hata("dogru_index yanlış");
        const beklenen = uretec.kontrol(g.params);
        if (beklenen !== g.dogru) hata("kontrol " + beklenen + " ≠ dogru " + g.dogru);
        if (!g.ipuclari || g.ipuclari.length !== 3) hata("ipucu sayısı 3 değil");
        if (!g.cozum || g.cozum.length < 2) hata("çözüm adımı < 2");
        const metin = [soru.kok, soru.baglam || "", ...metinler, ...g.ipuclari, ...g.cozum].join("\n");
        BOZUK.forEach(b => { if (metin.includes(b)) hata("metinde " + b); });
        if (JSON.stringify(uretecten(uretec, t)) !== JSON.stringify(soru)) hata("aynı tohum farklı soru verdi");
      } catch (e) {
        hata("istisna: " + e.message);
      }
    }
    return { ok: hatalar.length === 0, hatalar };
  }

  G.B9.soru = { uretecten, statikten, uretecDene, kontrol, ipucu, normal };
})();
