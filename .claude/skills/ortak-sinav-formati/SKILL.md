---
name: ortak-sinav-formati
description: "MEB ülke geneli ortak yazılı sınavının (9. sınıf Matematik 6 Ocak 2027, TDE 7 Nisan 2027) kâğıt düzeni, soru sayısı, süre, puanlama ve cevap anahtarı biçimi. Ortak sınav provası üretirken ya da öğretmen verisi olmadığında yazılı provası biçimi gerektiğinde kullan. kaynaklar/meb/ortak_sinav altındaki gerçek kitapçıklardan türetildi."
---

# Ortak Sınav Formatı

Türetildiği dosyalar (`kaynaklar/meb/ortak_sinav/gecmis_sinavlar/`, metinleri `metin/` alt klasörlerinde):
- `2025_2026/9_mat_1D1Y_2025-11-06_{sabah,ogle}.pdf`: TYMM, ülke geneli
- `2025_2026/9_tde_2D2Y_2026-06-03_{sabah,ogle}.pdf`: TYMM, ülke geneli
- `2024_2025/9_{mat,tde}_2D1Y_{sabah,ogle}.pdf`: TYMM, ülke geneli
- `2023_2024_eski_program/`: **eski program, 20 çoktan seçmeli.** Biçim örneği olarak kullanılmaz.

## Sabitler (TYMM, 2024-25 ve 2025-26'da değişmedi)
| Özellik | Değer |
|---|---|
| Soru sayısı | **7** |
| Süre | **40 dakika** |
| Toplam | 100 puan |
| Soru türü | **açık uçlu** (veya açık uçlu + kısa cevaplı); cevaplar sorunun altındaki boşluğa |
| Oturum | sabah ve öğle oturumu ayrı kitapçık (aynı yapı, farklı sorular) |
| Kapsam | ÖDSGM'nin sınav öncesi yayımladığı konu-soru dağılım tablosu (KSDT) |

## Puan dağılımı örnekleri
- **Matematik:** 6 soru × 15 + 1 soru × 10. 10 puanlık soru kısa muhakeme ("karşıt örnek vererek gösteriniz").
- **TDE 2025-26:** 12, 12, 14, 12, 14, 12 + **yazma görevi 24**.
- **TDE 2024-25:** 12, 14, 14, 14, 12, 14 + **yazma görevi 20**.

## Kâğıt düzeni (sayfa 1)
```
T.C.
MİLLÎ EĞİTİM BAKANLIĞI
ÖLÇME, DEĞERLENDİRME VE SINAV HİZMETLERİ GENEL MÜDÜRLÜĞÜ
2026-2027 EĞİTİM VE ÖĞRETİM YILI
I. DÖNEM II. YAZILI SINAVI (ÜLKE GENELİ ORTAK)          [SABAH OTURUMU]
MATEMATİK · 9. SINIF

Adı ve Soyadı : ..........   Sınıfı / Şubesi : ..........   Öğrenci Numarası : ..........   Aldığı Puan [  ]

ÖĞRENCİLERİN DİKKATİNE!
1. Bu soru kitapçığında 7 soru bulunmaktadır ve sınav süresi 40 dakikadır.
2. Cevaplarınızı, soruların altında boş bırakılan yerlere yazınız.
3. Sınav 100 tam puan üzerinden değerlendirilecektir. 1, 2, 3, 4, 5 ve 7. sorular 15 puan; 6. soru 10 puan değerindedir.
```
- Sayfa başına 2–3 soru ve altında geniş cevap alanı. Üst bilgide "MATEMATİK 9", sayfa numarası.
- Son satır: "SINAV BİTTİ. CEVAPLARINIZI KONTROL EDİNİZ."
- **Prova kâğıdında** başlığa "PROVA — resmî sınav değildir" ekle. MEB/ÖDSGM logosu kullanma.

## Soru biçimi
- **Matematik:** her soru günlük hayat bağlamıyla başlar (tablo/şekil + 1–3 cümle). Kök "...işlemlerinizi göstererek bulunuz. (15 puan)". Tipik kalıplar:
  - Tablo verisinden üslü/bilimsel gösterimle hesap ("K · 10⁶ olduğuna göre K'yi bulunuz").
  - Köklü ifadeyi sadeleştirip geometrik ölçü hesaplama (çevre/alan).
  - Gerçek hayat aralıkları → küme/aralık gösterimi, kesişim/birleşim.
  - En az/en çok değer → mutlak değerli eşitsizlik (|x − 32| ≤ 3).
  - Önermeyi karşıt örnekle çürütme.
  - Alan eşitliğinden denklem kurma.
- **TDE:** metin/şiir/cümle verilir, ardından:
  - deyimin anlamı ve cümlede kullanımı,
  - yazım yanlışı bulma ve düzeltme,
  - metindeki sembol/kavramı ana düşünceye göre açıklama,
  - şiirin yapı unsurları (ölçü, nazım birimi, kafiye/redif, kafiye düzeni),
  - metin türünü belirleme ve gerekçe,
  - **son soru yönergeli yazma görevi** (ör. anı, en az 10 cümle, başlık).

## Cevap anahtarı biçimi (ayrı sayfa)
- Her soru için **çözüm adımları** ya da örnek cevap; kısmi puanlar parantezde:
  "Toz kondurmamak: 'bir şeyde kusur kabul etmemek' anlamına gelen ifadeler. (4 puan) / Cümle: ... (2 puan)".
- "...anlamına gelen ifadeler" ve "...olduğunun gösterildiği tüm cevaplar doğrudur" esnekliği.
- Yazma görevinin ayrıntılı rubriği kitapçıkta yok. `DOĞRULA:` ÖDSGM ayrı yönerge yayımlıyor mu, kontrol et; yoksa `soru-yazim-kurallari` yeteneğindeki yazma rubriğini kullan.

## Prova üretirken
1. Haritada `ortak_sinav.ulke_geneli == true` olan konuları al.
2. ÖDSGM tablosu yayımlanmışsa soru sayılarını oradan al. Yayımlanmamışsa (DOĞRULA) okul 1. yazılı KSDT'si + plan haftasıyla dağıt ve kâğıdın altına "kapsam tahminidir" yaz.
3. 7 soru: önce kolay bağlam, sonra zor; 10 puanlık soru muhakeme sorusu.
4. Sabah ve öğle oturumu gibi iki eşdeğer kâğıt üret (farklı sayılar/üreteç tohumu).
