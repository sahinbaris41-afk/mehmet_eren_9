// TEST İÇERİĞİ: panelin uçtan uca denenmesi içindir. Gerçek ders içeriği değildir.
(window.DERSLER = window.DERSLER || []).push({
  v: 1, ders: "ornek", ad: "Örnek Ders (test)", haftalik_saat: 2,
  harita: {
    uniteler: [{
      id: "ornek-u1", ad: "Üslü Sayılar (test)",
      konular: [{
        id: "ornek-u1-k1", ad: "Aynı tabanlı üslü sayılarla çarpma", yazili: ["1D1Y"],
        ogrenme_ciktilari: [{ kod: "9.1.1", metin: "Gerçek sayıların üslü ve köklü gösterimleriyle yapılan işlemlere dair muhakeme yapabilme" }],
      }],
    }],
  },
  konular: {
    "ornek-u1-k1": {
      id: "ornek-u1-k1", ders: "ornek", baslik: "Üslü Sayıları Çarpma",
      harita_adi: "Aynı tabanlı üslü sayılarla çarpma",
      ogrenme_ciktilari: [{ kod: "9.1.1", metin: "Gerçek sayıların üslü ve köklü gösterimleriyle yapılan işlemlere dair muhakeme yapabilme" }],
      yazili: ["1D1Y"],
      kaynak: [
        { tur: "ders_kitabi", dosya: "kaynaklar/meb/matematik/metin/matematik-9sinif-ders-kitabi-1kitap_20261006_102913_502/", sayfa: "13-36" },
        { tur: "program", kod: "9.1.1", surec: [] },
      ],
      on_bilgi: [],
      bolumler: [
        {
          id: "b1", baslik: "Üs ne demek?", sure_dk: 5,
          ornek: { baglam: "tersane", metin: "Gölcük'teki tersanede bir vinç denemesi yapılıyor. Başlangıçta 1 ton yük var ve her saat yük 2 katına çıkıyor. 3 saat sonra yük 2 · 2 · 2 = 8 ton oluyor." },
          katmanlar: {
            basit: [
              "Aynı sayıyı tekrar tekrar çarpıyoruz. Bunu kısa yazmanın yolu **üs**.",
              "2 · 2 · 2 yerine 2³ yazarız. Küçük 3, kaç kez çarptığımızı söyler.",
            ],
            kitap: [
              "Bir sayının kendisiyle tekrarlı çarpımı **üslü ifade** ile gösterilir. Çarpılan sayıya **taban**, çarpım sayısına üs denir.",
            ],
            yazilida: {
              kalip: "Verilen çarpımı üslü ifade olarak yazınız.",
              ornek_soru: "5 · 5 · 5 · 5 ifadesini üslü ifade olarak yazınız.",
              ornek_cevap: ["1. 5 sayısı 4 kez çarpılmış.", "2. Taban 5, üs 4.", "3. Cevap: 5⁴"],
              puan_ipucu: "Ortak sınavda “işlemlerinizi göstererek” denir; adımlar puan alır.",
            },
          },
          terimler: [
            { terim: "üs", tanim: "Bir sayının kendisiyle kaç kez çarpıldığını gösteren küçük sayı." },
            { terim: "üslü ifade", tanim: "Tekrarlı çarpımı kısa yazmanın yolu, örneğin 2³." },
            { terim: "taban", tanim: "Tekrar tekrar çarpılan sayı; 2³ içinde 2." },
          ],
          kontrol_sorulari: [
            { soru: "3 · 3 · 3 · 3 · 3 çarpımı üslü ifade olarak nasıl yazılır?", cevap: "3⁵", ipuclari: ["Kaç tane 3 yazılı, say.", "Sayıların adedi üs olur, 3 taban kalır.", "5 tane 3 var: taban 3, üs 5."], yanlis_aciklama: "Çarpma işaretlerini değil, 3'leri sayıyoruz." },
            { soru: "2⁴ ifadesi kaç tane 2'nin çarpımıdır?", cevap: "4 tane", ipuclari: ["Küçük sayı neyi söylüyor?", "Üs, tabanın kaç kez çarpıldığını söyler.", "Üs 4 ise 2 · 2 · 2 · 2 yazılır."], yanlis_aciklama: "Üs, çarpılan sayının adedidir; sonuç değil." },
          ],
        },
        {
          id: "b2", baslik: "Aynı tabanlı çarpma", sure_dk: 5,
          ornek: { baglam: "tersane", metin: "Tersane deposunda 2² koli var; her kolide 2³ cıvata bulunuyor. Toplam (2 · 2) · (2 · 2 · 2) = 2⁵ = 32 cıvata eder." },
          katmanlar: {
            basit: [
              "Taban aynıysa çarparken taban aynı kalır. Üsleri toplarız.",
              "2² · 2³ = 2⁵, çünkü 2 + 3 = 5 tane 2 çarpılıyor.",
            ],
            kitap: [
              "**Aynı tabanlı** üslü ifadeler çarpılırken taban korunur ve üsler toplanır: aᵐ · aⁿ = aᵐ⁺ⁿ.",
            ],
            yazilida: {
              kalip: "Aşağıdaki çarpımı işlemlerinizi göstererek tek bir üslü ifade olarak yazınız.",
              ornek_soru: "3² · 3⁴ çarpımını işlemlerinizi göstererek tek bir üslü ifade olarak yazınız.",
              ornek_cevap: ["1. Tabanlar aynı: 3.", "2. Üsler toplanır: 2 + 4 = 6.", "3. Cevap: 3⁶"],
              puan_ipucu: "Önce “tabanlar aynı” cümlesini yazmak puan getirir.",
            },
          },
          terimler: [{ terim: "aynı tabanlı", tanim: "Tabanı aynı olan üslü ifadeler; örneğin 2² ve 2³." }],
          kontrol_sorulari: [
            { soru: "2³ · 2² işleminin sonucu 2'nin kaçıncı kuvvetidir?", cevap: "5. kuvveti: 2⁵", ipuclari: ["Tabanlar aynı mı?", "Aynı tabanda üsler toplanır.", "Taban 2 kalır. Üsler: 3 + 2 = ?"], yanlis_aciklama: "Üsleri çarpmıyoruz, topluyoruz." },
            { soru: "4⁵ · 4³ ifadesinin üssü kaçtır?", cevap: "8", ipuclari: ["Tabanlar aynı: 4.", "Üsleri topla.", "5 + 3 = ?"], yanlis_aciklama: "Üsler toplanır: 5 + 3." },
          ],
        },
      ],
      flashcard: [
        { on: "2⁵ ne demek?", arka: "2 sayısının 5 kez kendisiyle çarpımı: 2 · 2 · 2 · 2 · 2 = 32." },
        { on: "Üslü ifadede taban hangisidir?", arka: "Tekrar tekrar çarpılan sayı. 7³ içinde 7." },
        { on: "aᵐ · aⁿ = ?", arka: "aᵐ⁺ⁿ: taban aynı kalır, üsler toplanır." },
        { on: "2³ ile 2 · 3 aynı mı?", arka: "Hayır. 2³ = 8, 2 · 3 = 6." },
      ],
      sik_hatalar: [
        { hata_turu: "us_carpma", aciklama: "2³ · 2² işleminde üsleri çarpıp 2⁶ bulmak" },
        { hata_turu: "taban_carpma", aciklama: "Tabanları da çarpıp 4⁵ gibi bir sonuç yazmak" },
      ],
      dogrula: ["Örnek test içeriğidir; dogruluk-denetcisi'nden geçmedi."],
      surum: 1,
      uretim: { ajan: "panel-gelistirici", tarih: "2026-10-26" },
    },
  },
  sorular: {
    "ornek-u1-k1": [
      {
        id: "ornek-u1-k1-s001", konu_id: "ornek-u1-k1", ogrenme_ciktisi: "9.1.1", tip: "coktan", zorluk: 1, puan: 10,
        baglam: "Gölcük'teki bir tersane deposunda 3² koli var. Her kolide 3³ cıvata bulunuyor.",
        kok: "Depodaki toplam cıvata sayısı aşağıdakilerden hangisidir?",
        secenekler: [
          { metin: "3⁵", dogru: true },
          { metin: "3⁶", dogru: false, hata_turu: "us_carpma", aciklama: "Üsleri çarptın; aynı tabanda üsler toplanır." },
          { metin: "9⁵", dogru: false, hata_turu: "taban_carpma", aciklama: "Tabanları da çarptın; taban aynı kalır." },
          { metin: "3⁴", dogru: false, hata_turu: "us_eksik", aciklama: "Üs toplamını bir eksik yazdın; 2 + 3'ü yeniden say." },
        ],
        cevap: "3⁵", kabul_edilenler: [],
        ipuclari: ["Koli sayısı ile kolideki cıvata sayısı çarpılır; tabanlara bak.", "Taban aynı olduğunda üsler toplanır.", "Taban 3 kalır. Üsler: 2 + 3 = ?"],
        cozum_adimlari: ["1. Toplam = 3² · 3³.", "2. Tabanlar aynı: 3.", "3. Üsler toplanır: 2 + 3 = 5, sonuç 3⁵."],
        rubrik: null, hata_turu: ["us_carpma", "taban_carpma"],
        kaynak: { kitap: "matematik-9sinif-ders-kitabi-1kitap s.13-36", ogrenme_ciktisi: "9.1.1" }, dogrula: [],
      },
      {
        id: "ornek-u1-k1-s002", konu_id: "ornek-u1-k1", ogrenme_ciktisi: "9.1.1", tip: "acik", zorluk: 3, puan: 10,
        baglam: null,
        kok: "2⁵ · 2³ çarpımını işlemlerinizi göstererek tek bir üslü ifade olarak yazınız ve değerini bulunuz. (10 puan)",
        cevap: "2⁸ = 256", kabul_edilenler: [],
        ipuclari: ["Tabanlara bak: aynı mı?", "Aynı tabanda üsler toplanır.", "Üsler: 5 + 3 = 8. Şimdi 2⁸ değerini hesapla."],
        cozum_adimlari: ["1. Tabanlar aynı: 2.", "2. Üsler toplanır: 5 + 3 = 8.", "3. 2⁵ · 2³ = 2⁸.", "4. 2⁸ = 256."],
        rubrik: [
          { olcut: "Tabanların aynı olduğunu belirtir", puan: 2 },
          { olcut: "Üsleri doğru toplar (5 + 3 = 8)", puan: 3 },
          { olcut: "Tek üslü ifade yazar: 2⁸", puan: 2 },
          { olcut: "Değeri doğru bulur: 256", puan: 3 },
        ],
        hata_turu: ["us_carpma"],
        kaynak: { kitap: "matematik-9sinif-ders-kitabi-1kitap s.13-36", ogrenme_ciktisi: "9.1.1" }, dogrula: [],
      },
      {
        id: "ornek-u1-k1-s003", konu_id: "ornek-u1-k1", ogrenme_ciktisi: "9.1.1", tip: "dogru_yanlis", zorluk: 1, puan: 5,
        baglam: null, kok: "“2³ · 2² = 2⁶” eşitliği doğrudur.",
        cevap: false, kabul_edilenler: [],
        ipuclari: ["Tabanlar aynı mı?", "Aynı tabanda üsler toplanır.", "3 + 2 kaç eder? Bunu 6 ile karşılaştır."],
        cozum_adimlari: ["1. Tabanlar aynı: 2.", "2. Üsler toplanır: 3 + 2 = 5.", "3. 2³ · 2² = 2⁵; 2⁶ değil, eşitlik yanlış."],
        rubrik: null, hata_turu: ["us_carpma"],
        kaynak: { kitap: "matematik-9sinif-ders-kitabi-1kitap s.13-36", ogrenme_ciktisi: "9.1.1" }, dogrula: [],
      },
      {
        id: "ornek-u1-k1-s004", konu_id: "ornek-u1-k1", ogrenme_ciktisi: "9.1.1", tip: "bosluk", zorluk: 2, puan: 5,
        baglam: null, kok: "7⁴ · 7⁶ = 7^□ eşitliğinde □ yerine hangi sayı gelir?",
        cevap: "10", kabul_edilenler: ["10."],
        ipuclari: ["Tabanlar aynı: 7.", "Üsler toplanır.", "4 + 6 = ?"],
        cozum_adimlari: ["1. Tabanlar aynı: 7.", "2. Üsler toplanır: 4 + 6 = 10.", "3. 7⁴ · 7⁶ = 7¹⁰."],
        rubrik: null, hata_turu: ["us_carpma"],
        kaynak: { kitap: "matematik-9sinif-ders-kitabi-1kitap s.13-36", ogrenme_ciktisi: "9.1.1" }, dogrula: [],
      },
    ],
  },
});
