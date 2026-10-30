# DOĞRULA Listesi

Emin olunmayan her bilgi buraya yazılır. Teyit edilince satır `[x]` olur ve kaynağı eklenir.
Konu düzeyindeki ayrıntılı işaretler `dersler/<ders>/harita.json` içinde her konunun `dogrula` alanındadır.

## Okuldan / veliden alınacaklar (en yüksek öncelik)

| # | Bilgi | Nerede kullanılıyor | Nasıl teyit edilir | Durum |
|---|---|---|---|---|
| 1 | 9. sınıf Matematik ortak yazılısı 6 Ocak 2027 Çarşamba | takvim, vizyon, CLAUDE.md | ÖDSGM resmî takvim PDF'i (`kaynaklar/meb/ortak_sinav/2026_2027_ulke_geneli_ortak_yazili_takvimi.pdf`) | [x] 2026-10-26 |
| 2 | Barbaros Anadolu Lisesi okul yazılı tarihleri | `docs/takvim.md`, `tools/harita_uret.py` `SINIRLAR` | Okul duyurusu, e-Okul | [ ] |
| 3 | Okulun 1. yazılılarda seçtiği KSDT senaryosu (ders başına) | Yazılı Provası | Ders öğretmeni / zümre kararı | [ ] |
| 4 | Seçmeli dersler (7 saat), 2. yabancı dil, birinci yabancı dilin İngilizce olduğu, Görsel Sanatlar mı Müzik mi | `docs/dersler.md` | e-Okul ders programı | [ ] |
| 5 | Öğretmenin geçmiş yazılıları ve defter | Kaynak önceliği 1 | `kaynaklar/gecmis_yazililar`, `kaynaklar/defter` klasörlerine fotoğraf/PDF | [ ] **klasörler boş** |
| 6 | Dönem puanı hesabı: sınav ve performans puanları tek tek mi, grup ortalaması olarak mı ortalanıyor | `docs/olcme_kurallari.md` §7, Veli Paneli | e-Okul not çizelgesi / okul idaresi | [ ] |

## MEB'den beklenenler

| # | Bilgi | Ne zaman | Durum |
|---|---|---|---|
| 7 | 9. sınıf Matematik 1D2Y (6 Ocak) ülke geneli konu-soru dağılım tablosu ve kılavuzu | Sınavdan önce ÖDSGM yayımlayacak | [ ] Haritada ilgili konular `ulke_geneli: true` + DOĞRULA. 9.2.1–9.4.1 plan haftasına göre tahmini |
| 8 | 9. sınıf TDE 2D1Y (7 Nisan) ülke geneli konu-soru dağılım tablosu | Sınavdan önce | [ ] |
| 9 | 2. dönem KSDT'leri (tüm dersler) | Şubat 2027 civarı | [ ] 2. dönem `yazili` alanları şimdilik plan haftasından tahmin |

## Kaynaklarda belirsiz kalanlar

| # | Bilgi | Not | Durum |
|---|---|---|---|
| 10 | Din Kültürü taslak yıllık planı | tymm'de yok. Harita yalnızca 1. dönem KSDT konularını içeriyor, hafta bilgisi yok. 2. dönem konuları eksik | [ ] |
| 11 | Sağlık Bilgisi ve Trafik Kültürü: hangi program uygulanıyor | Çizelge 2018 programını (TTK 43) gösteriyor, tymm'de 2026 programı ve ders kitabı var. Harita kitabın içindekilerinden kuruldu; kod ve hafta yok | [ ] |
| 12 | Din Kültürü öğretim programı karar numarası | Çizelge PDF'inin 10. sayfasında satır kesik okundu | [ ] |
| 13 | Ders kitabı sayfa aralıkları | İçindekiler eşleşmesiyle otomatik çıkarıldı. Eşleşmeyen ya da zayıf olanlar konu `dogrula` alanında. Özellikle Matematik 9.2.2, 9.2.3 (kitap metninde harfler bölünmüş: "F onksiyon") | [ ] |
| 14 | Yazılı dönemi sınırları (1D1Y ≤ 8. hafta, 1D2Y ≤ 16, 2D1Y ≤ 25) | MEB çalışma takvimi + ülke geneli tarihlerinden varsayım; okul takvimi gelince güncellenecek | [ ] |

## Matematik Ünite 1 (pilot, 2026-10-27)

| # | Bilgi | Nerede | Nasıl teyit edilir | Durum |
|---|---|---|---|---|
| 15 | Açık uçlu soruların rubrik puan dağılımı (14 soru: k1 s006, s018, s023; k2 s011–s014; k3 s008, s010–s012; k4 s007, s011, s015) bizim önerimiz; ÖDSGM cevap anahtarı kısmi puan vermiyor | `dersler/matematik/sorular/` | Ders öğretmeni | [ ] |
| 16 | k1 s023: 1/√2 yazan cevaba yarım puan kuralı | `sorular/matematik-u1-k1.json` | Ders öğretmeni | [ ] |
| 17 | Kesirli üslerin x^(m/n) yazımı: panelde okunurluk ve öğretmenin yazılıda kabulü (kitap üst simge kesir kullanıyor) | `konular/matematik-u1-k1.json` | Panelde göz kontrolü + öğretmen | [ ] |
| 18 | ℚ'nun a/b (b ≠ 0) tanımı ünite sayfalarında açıkça yok | `konular/matematik-u1-k3.json` | Ders kitabı önceki bölümler / öğretmen | [ ] |
| 19 | 9.1.3 yazılı kalıpları: ortak sınavda yalnız "karşıt örnekle çürütme" görüldü; diğer kalıplar kitap uygulamalarından türetildi | `konular/matematik-u1-k3.json` | Öğretmenin yazılıları | [ ] |
| 20 | k3 s011, s012: Karşıt örnek olarak 0'a bölme (3 ÷ 0 tanımsız) yazılırsa puanlama | `sorular/matematik-u1-k3.json` | Ders öğretmeni | [ ] |
| — | PDF görselinden kapatılan 17 madde (bilimsel gösterim, ⊆, ⊻, ℚ′, 0 ∈ ℕ, Tablo 1.1–1.3...) | `denetim/pdf_teyit_u1.md` | Ders kitabı PDF'i | [x] 2026-10-26 |

## Matematik Ünite 2 (2026-10-27)

| # | Bilgi | Nerede | Nasıl teyit edilir | Durum |
|---|---|---|---|---|
| 21 | 9.2.1 x ekseni ötelemesi (g(x) = a·f(x − r) + k'de r): program s.52 kapsamda sayıyor; kitapta açık kural yok (s.115 yalnız y ekseni, s.108 örtük). Kart program kaynaklı öğretiyor | `konular/matematik-u2-k1.json` | Ders öğretmeni (yazılıda soruyor mu?) | [ ] |
| 22 | 9.2.1 "maksimum noktası" kitapta (s.96) x değeri mi, (x, f(x)) mi belirsiz; kart ikisini birlikte yazıyor. 9.2.2'de kitap s.127 ve s.134'te x değerini "nokta" sayıyor; kart iki yazımı birlikte öğretiyor: "x = 0 noktasında alır; grafikte (0, 0)" (b2, b4, b5, b8, flashcard 6–7). s020 kökü "en alt noktanın koordinatları" olduğu için anahtar bu teyitten bağımsız. Öğretmenin yazılıda "minimum noktası" ile hangisini beklediği soruluyor | `konular/matematik-u2-k1.json`, `konular/matematik-u2-k2.json`, `sorular/matematik-u2-k2.json` s020 | Ders öğretmeni — Öğretmen Teyidi Bekliyor | [ ] |
| 23 | 9.2.1–9.4.1: 6 Ocak ülke geneli sınavın konu-soru dağılım tablosu henüz yayımlanmadı; 15 puanlık kalıplar kitap alıştırmalarından uyarlandı (geçmiş ortak sınavlarda fonksiyon sorusu yok; 2025-26 1D1Y'deki mutlak değer sorusu 9.1 eşitsizliğidir) | `sorular/matematik-u2-*.json`, `konular/matematik-u2-k2.json` | ÖDSGM kılavuzu (sınav öncesi) | [ ] |
| 24 | 9.2.1 sabit fonksiyonun maksimum-minimum durumu kitapta (s.110) tartışmaya bırakılmış, cevabı yok; kart bu konuya girmiyor (bilgi notu) | `konular/matematik-u2-k1.json` | Gerekmez | [x] |
| 25 | 9.2.2 "tepe noktası" ve "simetri ekseni" adları kitabın 2.2 bölümünde (s.120-135) geçmiyor; kitap "minimum/maksimum noktası" der. Kart bu adları doğrusal fonksiyonla analoji için kullanıyor | `konular/matematik-u2-k2.json` (b2 ve sonrası) | Ders öğretmeni (derste hangi adı kullanıyor?) | [x] 2026-10-30 (kitap s.122, 126, 128, 134 ve program s.51 "minimum/maksimum noktası" der; kart ve banka bu adlara çevrildi, "simetri ekseni" kaldırıldı) |
| 26 | 9.2.2 s.134'teki artan/azalan aralıklarının uç parantezleri metin dökümünde bozuk; kart \|ax + b\| için (−∞, −b/a] azalan, [−b/a, ∞) artan yazdı | `konular/matematik-u2-k2.json` (b4, b5, b8) | Ders kitabı PDF'i s.134 | [x] 2026-10-30 (PDF s.134 görseli: (−∞, −b/a] azalan, [−b/a, ∞) artan; −\|ax+b\| için tersi) |
| 27 | 9.2.2 soru bankası: s.134 aralık gösterimi önce yazı tipi karşılaştırmasıyla okundu, sonra PyMuPDF görseliyle teyit edildi. Bozuk glifler, kitabın çözümü belli aralıklarıyla karşılaştırıldı: s.127 "[16, 24]", "[16, 20)", "[0, 4]" ve s.132 "(0, 5/2]" aynı yazı tipiyle basılmış. Bu karşılaştırmayla s.134 "(−∞, −b/a] azalan, [−b/a, ∞) artan" (−\|ax + b\| için tersi) okunuyor; dönüm noktasında köşeli parantez. Banka bu gösterimi kullanıyor; rubriklerde ucu açık yazım da kabul ediliyor, çoktan seçmelide yalnız biri şıkta | `sorular/matematik-u2-k2.json` s013, s017, s018 | PyMuPDF ile s.134 görseli (denetim/pdf_teyit_u1.md yöntemi) | [x] 2026-10-30 (PDF s.134 görseli: (−∞, −b/a] azalan, [−b/a, ∞) artan; −\|ax+b\| için tersi) |
| 28 | 9.2.2 açık uçlu soruların rubrik puan dağılımı (s015 10; s016 8; s019 7; s017, s018 15 puan) bizim önerimiz; ÖDSGM cevap anahtarı kısmi puan vermiyor | `sorular/matematik-u2-k2.json` | Ders öğretmeni — Öğretmen Teyidi Bekliyor: örnek rubrik gösterilip kısmi puan verip vermediği sorulacak | [ ] |

## Harita özet sayıları (2026-10-26, `python tools/harita_uret.py`)

| Ders | Konu | DOĞRULA'lı konu | Başlıca neden |
|---|---|---|---|
| TDE | 20 | 17 | Okuma dışı bölümler (yazma/konuşma) içindekilerde ayrı başlık değil. Ülke geneli 2D1Y tablosu yok |
| Matematik | 20 | 7 | Ülke geneli 1D2Y tablosu yok. 2 konunun kitap sayfası bulunamadı |
| Fizik | 20 | 3 | Az sayıda sayfa eşleşmesi |
| Kimya | 19 | 6 | Sayfa eşleşmesi zayıf |
| Biyoloji | 10 | 2 | Bilim etiği KSDT'de 0 soru (bilgi amaçlı) |
| Tarih | 13 | 7 | Sayfa eşleşmesi zayıf |
| Coğrafya | 20 | 6 | Sayfa eşleşmesi |
| Din Kültürü | 9 | 8 | Plan yok, sayfa eşleşmesi |
| İngilizce | 13 | 6 | Revision bölümleri aynı sayfaya eşlendi |
| Sağlık | 19 | 19 | Plan ve KSDT yok |
| Beden, Görsel, Müzik | 35 | 0 | Uygulamalı ders, yazılı kapsamı yok |
