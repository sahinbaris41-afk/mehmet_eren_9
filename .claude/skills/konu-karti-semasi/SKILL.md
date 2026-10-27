---
name: konu-karti-semasi
description: "Konu kartının (dersler/<ders>/konular/<konu_id>.json) JSON şeması, alan kuralları ve iyi/kötü örnek. Konu anlatımı yazarken, denetlerken ya da panelde kart gösterirken kullan."
---

# Konu Kartı Şeması

Bir kart = haritadaki bir konu (`konu_id` = `harita.json` içindeki `id`). Kart 5 dakikalık **bölümlerden** oluşur. Her bölümün 3 katmanı vardır.

## Şema

```jsonc
{
  "id": "matematik-u1-k1",                 // harita konu id'si, dosya adıyla aynı
  "ders": "matematik",
  "baslik": "Üslü Sayılarla İşlemler",      // öğrenciye görünen kısa ad (≤ 6 kelime)
  "harita_adi": "Gerçek Sayıların Üslü ve Köklü Gösterimleri ile Yapılan İşlemler",
  "ogrenme_ciktilari": [{ "kod": "9.1.1", "metin": "..." }],
  "yazili": ["1D1Y"],                       // haritadan kopya
  "kaynak": [                               // en az 1 kitap + 1 program
    { "tur": "ders_kitabi", "dosya": "kaynaklar/meb/matematik/metin/matematik-9sinif-ders-kitabi-1kitap_.../", "sayfa": "13-20" },
    { "tur": "program", "kod": "9.1.1", "surec": ["a", "b"] }
  ],
  "on_bilgi": ["8. sınıf üslü ifadeler"],   // yoksa []
  "bolumler": [
    {
      "id": "b1",
      "baslik": "Üs ne demek?",             // tek fikir
      "sure_dk": 5,
      "ornek": {                            // kuraldan ÖNCE gösterilir
        "baglam": "tersane",                // gölcük|kocaeli|tersane|deniz|futbol|okul|market|ev
        "metin": "Tersanede bir vinç her saat yükünü 2 katına çıkarıyor..."
      },
      "katmanlar": {
        "basit": ["≤ 3 cümlelik paragraf", "..."],
        "kitap": ["Ders kitabındaki tanımın öğrenci diliyle yeniden yazılmışı, **terim** kalın"],
        "yazilida": {
          "kalip": "Verilen ifadeyi üslü biçimde yazınız.",
          "ornek_soru": "2 · 2 · 2 · 2 ifadesini üslü biçimde yazınız.",
          "ornek_cevap": ["1. 2 sayısı 4 kez çarpılmış.", "2. Taban 2, üs 4.", "3. Cevap: 2⁴"],
          "puan_ipucu": "Ortak sınavda 'işlemlerinizi göstererek' denir; adımlar puan alır."
        }
      },
      "terimler": [{ "terim": "üs", "tanim": "Bir sayının kendisiyle kaç kez çarpıldığını gösteren küçük sayı." }],
      "kontrol_sorulari": [                 // 2-3 adet, hepsi kolay
        {
          "soru": "3 · 3 · 3 kaç tane 3'ün çarpımı?",
          "cevap": "3 tane",
          "ipuclari": ["Kaç tane 3 yazılı, say.", "Her '·' bir çarpma.", "3 · 3 · 3 → 1., 2., 3. sayı."],
          "yanlis_aciklama": "Çarpma işaretlerini değil, sayıları sayıyoruz."
        }
      ]
    }
  ],
  "flashcard": [{ "on": "2⁵ ne demek?", "arka": "2 sayısının 5 kez kendisiyle çarpımı: 2·2·2·2·2 = 32" }],
  "sik_hatalar": [{ "hata_turu": "us_carpma", "aciklama": "2³ = 6 sanmak (2·3)" }],
  "dogrula": [],                            // emin olunmayanlar; docs/dogrula.md'ye de yazılır
  "surum": 1,
  "uretim": { "ajan": "konu-anlatici", "tarih": "2026-10-26" }
}
```

## Alan kuralları
- **Metin biçimi:** düz metin. Yalnızca `**kalın**` işaretlemesi var. HTML, Markdown başlık ve bağlantı yok. Üs ve alt indis için Unicode (²³⁴, ₂).
- **basit:** paragraf ≤ 3 cümle, cümle ≤ ~15 kelime. Soyut kelime yok. "Yani..." ile somut örneğe bağlanır.
- **kitap:** ders kitabının dili ve terimleri, ama kitaptan cümle kopyalanmaz.
- **yazilida:** haritadaki yazılı türüne uygun. Ortak sınav ise açık uçlu, "işlemlerinizi göstererek".
- **terimler:** bölümde ilk kez kalın yazılan her terim burada tanımlı. Tanım tek cümle ve basit.
- **kontrol_sorulari:** zorluk 1. Cevap bölümden çıkarılabilir. 3 basamaklı ipucu.
- **flashcard:** konu başına 4–8. Ön yüz soru, arka yüz ≤ 2 cümle.
- **bolumler:** öğrenme çıktısının süreç bileşenlerine (a, b, c) dağıtılır. Bir konu genelde 2–6 bölüm. Tek fikir kuralı gerektirirse daha fazla olabilir: geniş konularda en çok 11 (pilot: 9.1.1 10 bölüm, 9.1.4 8 bölüm; 9.2.1 11 bölüm). "Tek fikir" sınırı bölüm sayısı sınırından önce gelir.

## Kötü örnek → neden

```json
"basit": ["Gerçek sayıların üslü gösterimi, bir gerçek sayının kendisiyle tekrarlı çarpımının kısaltılmış ifadesi olup tabanın üs kadar çarpılmasıyla elde edilen değeri temsil eder ve bu bağlamda işlem özellikleri..."]
```
- Tek cümle 30+ kelime. "bağlamında", "temsil eder" soyut. Örnek yok, kural önce. Terim kalın değil.

## İyi örnek

```json
"ornek": { "baglam": "futbol", "metin": "Gölcükspor'un taraftar grubu her hafta mesajı 3 kişiye iletiyor. 1. hafta 3, 2. hafta 3·3 = 9 kişi duyuyor." },
"basit": [
  "Aynı sayıyı tekrar tekrar çarpıyoruz. Bunu kısa yazmanın yolu **üs**.",
  "3 · 3 yerine 3² yazarız. Küçük 2, kaç kez çarptığımızı söyler."
]
```
- Önce yerel ve somut örnek, sonra kural. İki kısa paragraf, terim kalın ve tanımlı.
