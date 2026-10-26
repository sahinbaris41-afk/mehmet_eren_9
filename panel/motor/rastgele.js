// B9.rastgele: tohumlu rastgelelik. Aynı tohum aynı soruyu verir; hatalı bir soru tohumuyla yeniden üretilebilir.
(function () {
  const G = typeof window !== "undefined" ? window : globalThis;
  G.B9 = G.B9 || {};

  let sayac = 0;
  const UST = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻", "+": "⁺" };

  function rng(tohum) {
    let a = tohum >>> 0;
    return function () { // mulberry32
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Aynı milisaniyede iki çağrı farklı tohum alsın diye sayaç karıştırılır.
  const yeniTohum = () => (Date.now() ^ Math.imul(++sayac, 0x9E3779B1)) >>> 0;
  const rint = (r, a, b) => a + Math.floor(r() * (b - a + 1));
  const pick = (r, dizi) => dizi[Math.floor(r() * dizi.length)];
  function shuffle(r, dizi) {
    const k = dizi.slice();
    for (let i = k.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [k[i], k[j]] = [k[j], k[i]]; }
    return k;
  }
  const sayi = x => Number(x).toLocaleString("tr-TR", { maximumFractionDigits: 4 });
  const ust = n => String(n).split("").map(c => UST[c] || c).join("");

  G.B9.rastgele = {
    rng, yeniTohum, pick, rint, shuffle, sayi, ust,
    ISIMLER: ["Mehmet", "Eren", "Elif", "Zeynep", "Yusuf", "Ayşe", "Emir", "Defne", "Kerem", "Ece"],
    YERLER: ["Gölcük", "Değirmendere", "İzmit", "Karamürsel", "Başiskele", "Gebze", "Kartepe", "Derince"],
    BAGLAMLAR: ["tersane", "deniz", "futbol", "okul", "market"],
  };
})();
