// Örnek üreteç: aynı tabanlı üslü ifadelerin çarpımı. Gerçek ders üreteçleri bu kalıba uyar.
(function () {
  const G = typeof window !== "undefined" ? window : globalThis;
  const ust = n => G.B9.rastgele.ust(n);
  const us = (a, k) => a + ust(k);

  (G.URETECLER = G.URETECLER || []).push({
    id: "ornek-uslu-carpma", konu_id: "ornek-u1-k1", ogrenme_ciktisi: "9.1.1", zorluk: 1,
    kaynak: { kitap: "örnek", sayfa: null },
    gen(r) {
      const { pick, rint } = G.B9.rastgele;
      const a = pick(r, [2, 3, 5, 10]);
      const baglamli = r() < 0.5;
      // Sınırın iki yanı: bağlamsız soruda üs 0 ve 1 de çıkar; bağlamda "a⁰ kutu" garip olacağından üs ≥ 1.
      const m = baglamli ? rint(r, 1, 3) : pick(r, [0, 1, 1, 2, 3, 4]);
      const n = baglamli ? rint(r, 1, 4) : pick(r, [1, 2, 3, 4, 5]);
      const s = m + n;
      const ifade = us(a, m) + " · " + us(a, n);

      let baglam = null, kok = ifade + " işleminin sonucu aşağıdakilerden hangisidir?";
      if (baglamli) {
        const yer = pick(r, ["Gölcük'teki", "İzmit'teki", "Gebze'deki", "Karamürsel'deki"]);
        baglam = yer + " bir tersane deposunda " + us(a, m) + " koli var. Her kolide " + us(a, n) + " cıvata bulunuyor.";
        kok = "Depodaki toplam cıvata sayısı aşağıdakilerden hangisidir?";
      }

      const yanlislar = [
        { metin: us(a, m * n), hata_turu: "us_carpma", aciklama: "Üsleri çarptın; aynı tabanlı sayılar çarpılırken üsler toplanır." },
        { metin: us(a * a, s), hata_turu: "taban_carpma", aciklama: "Tabanları da çarptın; taban aynı kalır, yalnızca üsler toplanır." },
        { metin: us(a, s - 1), hata_turu: "us_eksik", aciklama: "Üs toplamını bir eksik yazdın; " + m + " + " + n + " işlemini yeniden say." },
        { metin: us(a, s + 1), hata_turu: "us_eksik", aciklama: "Üs toplamını bir fazla yazdın; " + m + " + " + n + " işlemini yeniden say." },
      ];
      if (m === 0) yanlislar.unshift({ metin: "0", hata_turu: "sifir_us", aciklama: us(a, 0) + " sıfır değil 1'dir; 1 ile çarpmak sayıyı değiştirmez." });

      const cozum = ["1. İki çarpanın tabanı aynı: " + a + "."];
      if (m === 0) cozum.push("2. " + us(a, 0) + " = 1 olduğundan sonuç " + us(a, n) + " olarak kalır.");
      cozum.push((cozum.length + 1) + ". Taban aynı kalır, üsler toplanır: " + m + " + " + n + " = " + s + ".");
      cozum.push((cozum.length + 1) + ". Sonuç: " + us(a, s) + ".");

      return {
        params: { a, m, n }, baglam, kok, dogru: us(a, s), yanlislar,
        ipuclari: [
          "İki sayının tabanına bak: tabanlar aynı mı?",
          "Aynı tabanlı üslü sayılar çarpılırken taban aynı kalır, üsler toplanır: aᵐ · aⁿ = aᵐ⁺ⁿ.",
          "Taban " + a + " olarak kalır. Şimdi üsleri topla: " + m + " + " + n + " = ?",
        ],
        cozum,
      };
    },
    kontrol({ a, m, n }) {
      // Çarpanları tek tek yaz ve say; formül (m + n) kopyalanmaz.
      const carpanlar = [];
      for (let i = 0; i < m; i++) carpanlar.push(a);
      for (let i = 0; i < n; i++) carpanlar.push(a);
      return a + G.B9.rastgele.ust(carpanlar.length);
    },
  });
})();
