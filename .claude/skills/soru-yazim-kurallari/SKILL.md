---
name: soru-yazim-kurallari
description: "Soru yazarken ya da denetlerken kullan. MEB \"Bağlam Temelli Çoktan Seçmeli Soru Yazım Kılavuzu\"ndan (TYMM) çıkarılmış kurallar, soru JSON şeması, açık uçlu soru ve rubrik yazımı, gerçek öğrenci hatasından çeldirici üretimi ve hata_turu sözlüğü."
---

# Soru Yazım Kuralları

Kaynak: `kaynaklar/meb/ortak_sinav/kilavuz/tymm_coktan_secmeli_soru_yazim_kilavuzu.pdf`, metni `.../metin/.../s0015-s0024.txt` (kılavuz s. 15–24). Ortak sınav örnekleri: `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/`.

## Soru şeması (`dersler/<ders>/sorular/<konu_id>.json` → `sorular[]`)

```jsonc
{
  "id": "matematik-u1-k1-s007",
  "konu_id": "matematik-u1-k1",
  "ogrenme_ciktisi": "9.1.1", "surec": "b",
  "tip": "coktan",                 // coktan | acik | dogru_yanlis | bosluk | eslestirme
  "zorluk": 1,                     // 1 kolay, 2 orta, 3 sınav seviyesi
  "puan": 10,                      // sınav kâğıdında kullanılırsa
  "baglam": "Gölcük'teki bir tersanede ...",   // yoksa null; varsa işlevsel olmalı
  "kok": "Buna göre vincin 3 saat sonra kaldırdığı yük kaç tondur?",
  "secenekler": [                  // coktan: 4; dogru_yanlis: yok; eslestirme: "sol"/"sag" listeleri
    { "metin": "16", "dogru": true },
    { "metin": "8",  "dogru": false, "hata_turu": "us_eksik",   "aciklama": "2'yi 3 değil 2 kez çarptın." },
    { "metin": "6",  "dogru": false, "hata_turu": "us_carpma",  "aciklama": "2³ ile 2·3 aynı değil." },
    { "metin": "12", "dogru": false, "hata_turu": "baslangic_unutma", "aciklama": "Başlangıçtaki 2 tonu da çarpmalısın." }
  ],
  "cevap": "16",                   // acik/bosluk: örnek doğru cevap
  "kabul_edilenler": ["16 ton", "2⁴"],
  "ipuclari": ["Her saat yük kaç katına çıkıyor?", "3 saat = 3 kez 2 ile çarp.", "Başlangıç 2 ton: 2 · 2 · 2 · 2 = ?"],
  "cozum_adimlari": ["1. Başlangıç yükü 2 ton.", "2. Her saat ×2: 3 saatte 2³ = 8 katı.", "3. 2 · 8 = 16 ton."],
  "rubrik": null,                  // acik için zorunlu: [{ "olcut": "...", "puan": 4 }]
  "hata_turu": ["us_carpma", "us_eksik"],   // bu sorunun yakaladığı hatalar
  "kaynak": { "kitap": "matematik-1kitap s.18", "ogrenme_ciktisi": "9.1.1" },
  "dogrula": []
}
```

## Kılavuzdan kurallar (TYMM)
**Bağlam**
1. Bağlam işlevsel olmalı. Öğrenci metni okumadan, yalnız ön bilgiyle cevaplayabiliyorsa soru yeniden yazılır (s. 16).
2. Günlük hayattan, herkesin erişebileceği bağlamlar: okul, park, doğa, alışveriş. Golf, borsa gibi belli grubun bildiği konular yasak (s. 16, 21).
3. Zorlama kurgu yok. "Ayşe markete gitti, 3 × 2 + 5 ekmek aldı" kötü; birim fiyat karşılaştırma iyi (s. 21).
4. Bütün bilgi metinde hazır verilip okuduğunu anlamaya dönüşmemeli. Alan bilgisi gerekmeli (s. 21).
5. Bağlam tarafsız: kültür, cinsiyet, bölge, din, ideoloji açısından ön yargısız (s. 18).

**Bilişsel yük**

6. Çözüme hizmet etmeyen görsel, ayrıntı ve uzun cümle yok. Soru disiplini ölçer, okuma hızını değil (s. 18).
7. Anlatım bozukluğu ve iki anlamlı ifade yok (s. 18).

**Soru kökü**

8. Çift olumsuz yok ("...olmadığı söylenemez"). Olumsuz kök tek olur ve **değildir** kalın yazılır (s. 22).
9. "Sizce" gibi öznel kök yok. "Metne göre / yazara göre" (s. 22).
10. Bilgi kökte değil bağlamda. Kök yalnızca soruyu sorar (s. 22).
11. Aynı bağlamdaki sorular birbirine bağlı değil. "Önceki soruda bulduğunuz..." yasak (s. 22).

**Seçenek ve çeldirici**

12. "Hepsi", "Hiçbiri", "A ve B" yok (s. 22).
13. Bariz yanlış dolgu seçenek yok. Çeldirici, konuyu **eksik ya da yanlış öğrenmiş** öğrencinin düşeceği yanılgıdan gelir (s. 23).
14. Doğru şık uzunluk ve ayrıntı bakımından öne çıkmaz. Seçenekler kelime sayısı ve yapı olarak benzer (s. 23).
15. Metindeki cümle seçenekte aynen tekrarlanmaz; anlamca özdeşi yazılır (s. 23).

## Açık uçlu soru ve rubrik (ortak sınav biçimi)
- Kök eylemle biter: "...işlemlerinizi göstererek bulunuz", "...açıklayınız", "...yazınız", "...karşıt örnek vererek gösteriniz".
- Puan kökte parantez içinde: "(15 puan)".
- Rubrik, cevabın **parçalarına** puan dağıtır (ÖDSGM TDE 2025-26 örneği):
  - Deyim anlamı 4 + cümlede kullanma 2, iki deyim için toplam 12.
  - Şiirin yapısı: ölçü 2, nazım birimi 2, kafiye türü 3 + 3, kafiye düzeni 2.
- Rubrikte "**... anlamına gelen ifadeler**" kabul edilir: öğrencinin kendi cümlesi.
- Matematikte rubrik: doğru kurulum (model/denklem), ara adımlar, doğru sonuç ve birim. Sonuç yanlış ama yol doğruysa kısmi puan alır.
- Yazma görevlerinde (TDE son soru, 20–24 puan) kurallar maddelenir: "en az 10 cümle", "başlık koyunuz". Rubrik içerik, düzen, dil ve yazım kurallarına puan dağıtır. `DOĞRULA:` ÖDSGM'nin yazma rubriği kitapçıkta yok.

## Çeldirici üretimi
1. Konu kartındaki `sik_hatalar` listesinden ve panel hata kayıtlarından başla.
2. Her çeldirici = doğru çözümü **tek bir hatayla** bozmak. Hatayı `hata_turu` ile adlandır.
3. Hesapta çeldiriciyi hatalı yolu gerçekten uygulayarak bul (formül unutmuş öğrenci ne bulur?).
4. İki çeldirici aynı sayıya çıkıyorsa birini değiştir. Doğru cevaba eşit çıkan çeldirici hata değil.

## hata_turu sözlüğü (genişletilebilir; yeni etiketi buraya ekle)
| Etiket | Anlam |
|---|---|
| `islem_hatasi` | dört işlem / hesap hatası |
| `isaret_hatasi` | negatif işareti kaybetmek |
| `us_carpma` | üssü tabanla çarpmak (2³ = 6) |
| `us_eksik` | üssü bir eksik/fazla uygulamak |
| `taban_carpma` | aynı tabanlı çarpımda tabanları da çarpmak ((a·a)^(m+n)) |
| `sifir_us` | a⁰'ı 0 sanmak |
| `kok_toplama` | √a + √b = √(a+b) sanmak |
| `aralik_uc` | açık/kapalı aralık ucunu karıştırmak |
| `birim_cevirme` | birim dönüşümü yapmamak |
| `kavram_karisikligi` | iki benzer kavramı karıştırmak (skaler/vektörel, iklim/hava durumu) |
| `ezber_karisikligi` | sıralama/isim/tarih karıştırmak |
| `okuma_hatasi` | soruda istenenin dışında bir şeyi bulmak |
| `eksik_adim` | çözümü yarıda bırakmak (ara sonucu cevap sanmak) |
| `yazim_kurali` | TDE: büyük harf, bitişik/ayrı yazım |
| `anlam_yuzeysel` | TDE: metni yüzeysel/kelimesi kelimesine yorumlamak |

## Ek: Mehmet Eren için
- Zorluk 1 sorularda bağlam ≤ 2 cümle, tek adım.
- Zorluk 3 ortak sınav biçiminde: bağlam + çok adımlı + açık uçlu.
- Yanlış cevap açıklaması tek cümle, suçlamasız, ipucuna yönlendirir.
