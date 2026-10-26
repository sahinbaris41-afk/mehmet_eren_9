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
