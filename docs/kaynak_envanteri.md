# Kaynak Envanteri

Son güncelleme: 2026-10-26. Bu oturumda indirilen her dosya, URL'si ve indirme tarihi aşağıda.
Bulunamayanlar "BULUNAMADI" diye ayrıca listelendi; tahmini URL yazılmadı.

Toplam: ~1,2 GB. PDF/xlsx/zip dosyaları büyük olduğu için git'e eklenmemeli; URL'lerden yeniden indirilebilir.

## 0. BULUNAMADI / İNDİRİLEMEDİ

| Aranan | Durum | Nerede arandı |
|---|---|---|
| `kaynaklar/gecmis_yazililar`, `kaynaklar/defter`, `kaynaklar/ogrenci` | **BOŞ** — öğretmen soru tipi/puanlama analizi yapılamadı | yerel klasörler |
| Din Kültürü ve Ahlak Bilgisi 9 destekleme / zenginleştirme kitabı | **BULUNAMADI** | tymm API `GetFarklilastirmaBySinifDers` (dersId 13) boş döndü |
| İngilizce 9 destekleme / zenginleştirme kitabı | **BULUNAMADI** | tymm API (dersId 39) boş döndü |
| Beden Eğitimi, Görsel Sanatlar, Müzik 9 öğrenci ders kitabı | **BULUNAMADI** — tymm'de yalnızca öğretmen kılavuz kitabı var (indirildi) | tymm API |
| Din Kültürü taslak yıllık planı (2026-27) | **BULUNAMADI** | tymm.meb.gov.tr/taslak-cerceve-planlari/ortaogretim listesinde yok |
| Sağlık Bilgisi ve Trafik Kültürü taslak yıllık planı | **BULUNAMADI** | aynı liste |
| Sağlık Bilgisi, Beden, Görsel, Müzik 1. dönem KSDT | **YAYIMLANMADI** — uygulamalı dersler için tablo yayımlanmıyor; Sağlık için de tablo yok | ÖDSGM icerik/1724 |
| 9. sınıf Matematik 1D2Y (6 Ocak 2027) ülke geneli KSDT ve kılavuz | **HENÜZ YAYIMLANMADI** — "sınav öncesi kılavuzla birlikte yayımlanacak" | KSDT dosyası notu, meb.gov.tr haber 41870 |
| 9. sınıf TDE 2D1Y (7 Nisan 2027) ülke geneli KSDT | **HENÜZ YAYIMLANMADI** | aynı |
| TYMM "Performans Gelişim Çerçevesi" (`tymm.meb.gov.tr/upload/kilavuz/performans-gelisim-cercevesi.pdf`) | **İNDİRİLEMEDİ** — sunucu HTTP 500 | tymm ana sayfa bağlantısı |
| tymm'de açık uçlu soru yazım kılavuzu | **BULUNAMADI** — sitede yalnızca "Çoktan Seçmeli Soru Yazım Kılavuzu" var (indirildi) | tymm ana sayfa, kılavuz bağlantıları |
| Ayrı "puanlama ölçütleri" belgesi (ülke geneli sınavlar) | **BULUNAMADI** ayrı belge olarak — puanlar cevap anahtarlı kitapçığın içinde, soru ve alt madde bazında | ÖDSGM ve il ÖDM duyuruları |
| 2025-2026 ortak yazılı sınav kılavuzu (16 Mart 2026) | **BULUNAMADI** — arama sonucunda adı geçti, dosya URL'si bu oturumda tespit edilemedi | web araması |
| 2025-2026 9. sınıf Matematik 1. dönem dışındaki ülke geneli sınavlar | Yok — 2025-26'da 9. sınıf Matematik yalnızca 6 Kasım 2025'te ülke geneli yapıldı | meb.gov.tr haber 38285 |

## 1. Öğretim programları, ders kitapları, destekleme/zenginleştirme (tymm.meb.gov.tr)

Liste kaynağı: tymm.meb.gov.tr API'si (`/Ders/GetDerslerBySinif`, `/Kitap/GetDersKitaplariBySinifDers`, `/Kitap/GetFarklilastirmaBySinifDers`; 9. sınıf = sinifId 11, Ortaöğretim = kademe 3). Kitap sayfası URL'si → sayfadaki `data-pdf` bağlantısı.

| Ders | Dosya | Boyut | İndirme | URL |
|---|---|---|---|---|
| tde | `kaynaklar/meb/tde/turk-dili-ve-edebiyati-dersi_20260819_143230_512.pdf` | 2.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/turk-dili-ve-edebiyati-dersi_20260819_143230_512.pdf |
| tde | `kaynaklar/meb/tde/turk-dili-ve-edebiyati-9sinif-ders-kitabi_20261006_100252_162.pdf` | 11.3 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/turk-dili-ve-edebiyati-9sinif-ders-kitabi_20261006_100252_162.pdf |
| tde | `kaynaklar/meb/tde/destekleme-9-edebiyat-2.pdf` | 17.8 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/destekleme-9-edebiyat-2.pdf |
| tde | `kaynaklar/meb/tde/zenginlestirme-9-edebiyat-2.pdf` | 15.1 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/zenginlestirme-9-edebiyat-2.pdf |
| matematik | `kaynaklar/meb/matematik/matematik-dersi_20260819_143102_154.pdf` | 5.1 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/matematik-dersi_20260819_143102_154.pdf |
| matematik | `kaynaklar/meb/matematik/matematik-9sinif-ders-kitabi-1kitap_20261006_102913_502.pdf` | 27.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/matematik-9sinif-ders-kitabi-1kitap_20261006_102913_502.pdf |
| matematik | `kaynaklar/meb/matematik/matematik-9sinif-ders-kitabi-2kitap_20261006_104711_394.pdf` | 18.8 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/matematik-9sinif-ders-kitabi-2kitap_20261006_104711_394.pdf |
| matematik | `kaynaklar/meb/matematik/destekleme-9-matematik-2.pdf` | 21.2 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/destekleme-9-matematik-2.pdf |
| matematik | `kaynaklar/meb/matematik/zenginlestirme-9-matematik-2.pdf` | 16.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/zenginlestirme-9-matematik-2.pdf |
| fizik | `kaynaklar/meb/fizik/fizik-dersi_20260819_142915_270.pdf` | 2.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/fizik-dersi_20260819_142915_270.pdf |
| fizik | `kaynaklar/meb/fizik/fizik-dersi-9sinif-ders-kitabi_20261006_194425_076.pdf` | 51.5 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/fizik-dersi-9sinif-ders-kitabi_20261006_194425_076.pdf |
| fizik | `kaynaklar/meb/fizik/destekleme-9-fizik-2.pdf` | 19.2 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/destekleme-9-fizik-2.pdf |
| fizik | `kaynaklar/meb/fizik/zenginlestirme-9-fizik-2.pdf` | 27.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/zenginlestirme-9-fizik-2.pdf |
| kimya | `kaynaklar/meb/kimya/kimya-dersi_20260819_143012_862.pdf` | 3.0 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/kimya-dersi_20260819_143012_862.pdf |
| kimya | `kaynaklar/meb/kimya/kimya-9sinif-ders-kitabi_20260908_105401_982.pdf` | 167.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/kimya-9sinif-ders-kitabi_20260908_105401_982.pdf |
| kimya | `kaynaklar/meb/kimya/destekleme-9-kimya-2.pdf` | 16.5 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/destekleme-9-kimya-2.pdf |
| kimya | `kaynaklar/meb/kimya/zenginlestirme-9-kimya-2.pdf` | 16.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/zenginlestirme-9-kimya-2.pdf |
| biyoloji | `kaynaklar/meb/biyoloji/biyoloji-dersi_20260819_142444_074.pdf` | 3.7 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/biyoloji-dersi_20260819_142444_074.pdf |
| biyoloji | `kaynaklar/meb/biyoloji/biyoloji-dersi-9sinif-ders-kitabi_20261006_220008_456.pdf` | 94.2 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/biyoloji-dersi-9sinif-ders-kitabi_20261006_220008_456.pdf |
| biyoloji | `kaynaklar/meb/biyoloji/destekleme-9-biyoloji-2.pdf` | 23.3 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/destekleme-9-biyoloji-2.pdf |
| biyoloji | `kaynaklar/meb/biyoloji/zenginlestirme-9-biyoloji-2.pdf` | 14.7 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/zenginlestirme-9-biyoloji-2.pdf |
| tarih | `kaynaklar/meb/tarih/tarih-dersi_20260819_143303_057.pdf` | 2.6 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/tarih-dersi_20260819_143303_057.pdf |
| tarih | `kaynaklar/meb/tarih/tarih-9sinif-ders-kitabi_20261006_121514_240.pdf` | 56.8 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/tarih-9sinif-ders-kitabi_20261006_121514_240.pdf |
| tarih | `kaynaklar/meb/tarih/destekleme-9-tarih-2.pdf` | 38.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/destekleme-9-tarih-2.pdf |
| tarih | `kaynaklar/meb/tarih/zenginlestirme-9-tarih-2.pdf` | 27.6 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/zenginlestirme-9-tarih-2.pdf |
| cografya | `kaynaklar/meb/cografya/cografya-dersi_20260819_142604_415.pdf` | 3.1 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/cografya-dersi_20260819_142604_415.pdf |
| cografya | `kaynaklar/meb/cografya/cografya-dersi-9sinif-ders-kitabi_20260907_201524_569.pdf` | 95.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/cografya-dersi-9sinif-ders-kitabi_20260907_201524_569.pdf |
| cografya | `kaynaklar/meb/cografya/destekleme-9-cografya-2.pdf` | 38.8 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/destekleme-9-cografya-2.pdf |
| cografya | `kaynaklar/meb/cografya/zenginlestirme-9-cografya-2.pdf` | 29.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/zenginlestirme-9-cografya-2.pdf |
| din | `kaynaklar/meb/din/din-kulturu-ve-ahlak-bilgisi-dersi_20260819_142709_568.pdf` | 2.3 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/din-kulturu-ve-ahlak-bilgisi-dersi_20260819_142709_568.pdf |
| din | `kaynaklar/meb/din/din-kulturu-ve-ahlak-bilgisi-9sinif-ders-kitabi_20261003_185509_939.pdf` | 12.3 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/din-kulturu-ve-ahlak-bilgisi-9sinif-ders-kitabi_20261003_185509_939.pdf |
| ingilizce | `kaynaklar/meb/ingilizce/ingilizce_9_12_ogretim_programi.pdf` | 7.4 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/ingilizce_9_12_ogretim_programi.pdf |
| ingilizce | `kaynaklar/meb/ingilizce/ingilizce-dersi-9sinif-calisma-kitabi_20261013_172611_034.pdf` | 9.7 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/ingilizce-dersi-9sinif-calisma-kitabi_20261013_172611_034.pdf |
| ingilizce | `kaynaklar/meb/ingilizce/ingilizce-dersi-9-sinif-ders-kitabi.pdf` | 144.4 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/ingilizce-dersi-9-sinif-ders-kitabi.pdf |
| ingilizce | `kaynaklar/meb/ingilizce/ingilizce-dersi-9sinif-ogretmen-kilavuz-kitabi_20261013_174157_354.pdf` | 4.6 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/ingilizce-dersi-9sinif-ogretmen-kilavuz-kitabi_20261013_174157_354.pdf |
| beden | `kaynaklar/meb/beden/beden-egitimi-ve-spor-dersi_20260907_192825_148.pdf` | 2.8 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/beden-egitimi-ve-spor-dersi_20260907_192825_148.pdf |
| beden | `kaynaklar/meb/beden/beden-egitimi-ve-spor-dersi-9sinif-ogretmen-kilavuz-kitabi_20261006_090734_787.pdf` | 6.7 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/beden-egitimi-ve-spor-dersi-9sinif-ogretmen-kilavuz-kitabi_20261006_090734_787.pdf |
| gorsel | `kaynaklar/meb/gorsel/gorsel-sanatlar-ogretim-programi.pdf` | 2.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/gorsel-sanatlar-ogretim-programi.pdf |
| gorsel | `kaynaklar/meb/gorsel/gorsel-sanatlar-dersi-9sinif-ogretmen-kilavuz-kitabi_20261002_234913_977.pdf` | 22.0 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/gorsel-sanatlar-dersi-9sinif-ogretmen-kilavuz-kitabi_20261002_234913_977.pdf |
| muzik | `kaynaklar/meb/muzik/muzik-dersi-ogretim-programi.pdf` | 2.6 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/muzik-dersi-ogretim-programi.pdf |
| muzik | `kaynaklar/meb/muzik/muzik-dersi-9sinif-ogretmen-kilavuz-kitabi_20260930_183933_988.pdf` | 18.4 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/muzik-dersi-9sinif-ogretmen-kilavuz-kitabi_20260930_183933_988.pdf |
| saglik | `kaynaklar/meb/saglik/saglik-bilgisi-ve-trafik-kulturu-dersi_20260908_183434_364.pdf` | 1.9 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/saglik-bilgisi-ve-trafik-kulturu-dersi_20260908_183434_364.pdf |
| saglik | `kaynaklar/meb/saglik/saglik-bilgisi-ve-trafik-kulturu-dersi_20260930_134542_199.pdf` | 53.8 MB | 2026-10-26 | https://tymm.meb.gov.tr/assets/pdf/saglik-bilgisi-ve-trafik-kulturu-dersi_20260930_134542_199.pdf |

Her PDF'in sayfa sayfa metni: aynı klasörde `metin/<dosya adı>/sNNNN.txt` (`tools/pdf_metin.py`).

## 2. MEB taslak yıllık planlar (tymm.meb.gov.tr/taslak-cerceve-planlari/ortaogretim)

| Ders | Arşiv | Boyut | İndirme | URL | İçerik |
|---|---|---|---|---|---|
| beden | `kaynaklar/yillik_plan/meb_taslak/beden-egitimi-ve-spor-dersi-taslak-yillik-planlar_20260827_123533_413.zip` | 70 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/beden-egitimi-ve-spor-dersi-taslak-yillik-planlar_20260827_123533_413.zip | 1 dosya, `kaynaklar/yillik_plan/meb_taslak/beden/` |
| biyoloji | `kaynaklar/yillik_plan/meb_taslak/biyoloji-dersi-taslak-yillik-planlar_20260831_190639_106.zip` | 135 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/biyoloji-dersi-taslak-yillik-planlar_20260831_190639_106.zip | 2 dosya, `kaynaklar/yillik_plan/meb_taslak/biyoloji/` |
| cografya | `kaynaklar/yillik_plan/meb_taslak/cografya-dersi-taslak-yillik-planlar_20260827_083607_902.zip` | 249 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/cografya-dersi-taslak-yillik-planlar_20260827_083607_902.zip | 3 dosya, `kaynaklar/yillik_plan/meb_taslak/cografya/` |
| fizik | `kaynaklar/yillik_plan/meb_taslak/fizik-dersi-taslak-yillik-planlar_20260827_083757_124.zip` | 203 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/fizik-dersi-taslak-yillik-planlar_20260827_083757_124.zip | 3 dosya, `kaynaklar/yillik_plan/meb_taslak/fizik/` |
| gorsel | `kaynaklar/yillik_plan/meb_taslak/gorsel-sanatlar-dersi-taslak-yillik-planlar_20260827_083808_000.zip` | 68 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/gorsel-sanatlar-dersi-taslak-yillik-planlar_20260827_083808_000.zip | 1 dosya, `kaynaklar/yillik_plan/meb_taslak/gorsel/` |
| ingilizce | `kaynaklar/yillik_plan/meb_taslak/ingilizce-dersi-taslak-yillik-planlar_20260827_111530_896.rar` | 507 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/ingilizce-dersi-taslak-yillik-planlar_20260827_111530_896.rar | 2 dosya, `kaynaklar/yillik_plan/meb_taslak/ingilizce/` |
| kimya | `kaynaklar/yillik_plan/meb_taslak/kimya-dersi-taslak-yillik-planlar_20260827_083820_533.zip` | 206 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/kimya-dersi-taslak-yillik-planlar_20260827_083820_533.zip | 3 dosya, `kaynaklar/yillik_plan/meb_taslak/kimya/` |
| matematik | `kaynaklar/yillik_plan/meb_taslak/matematik-dersi-taslak-yillik-planlar_20260827_083834_941.zip` | 180 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/matematik-dersi-taslak-yillik-planlar_20260827_083834_941.zip | 2 dosya, `kaynaklar/yillik_plan/meb_taslak/matematik/` |
| muzik | `kaynaklar/yillik_plan/meb_taslak/muzik-dersi-taslak-yillik-planlar_20260827_114915_360.zip` | 93 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/muzik-dersi-taslak-yillik-planlar_20260827_114915_360.zip | 4 dosya, `kaynaklar/yillik_plan/meb_taslak/muzik/` |
| tarih | `kaynaklar/yillik_plan/meb_taslak/tarih-dersi-taslak-yillik-planlar_20260827_083900_546.zip` | 204 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/tarih-dersi-taslak-yillik-planlar_20260827_083900_546.zip | 3 dosya, `kaynaklar/yillik_plan/meb_taslak/tarih/` |
| tde | `kaynaklar/yillik_plan/meb_taslak/turk-dili-ve-edebiyati-dersi-taslak-yillik-planlar_20260827_142401_066.zip` | 337 KB | 2026-10-26 | https://tymm.meb.gov.tr/assets/file/turk-dili-ve-edebiyati-dersi-taslak-yillik-planlar_20260827_142401_066.zip | 3 dosya, `kaynaklar/yillik_plan/meb_taslak/tde/` |

## 3. Ortak sınav belgeleri

| Dosya | Boyut | İndirme | URL | Not |
|---|---|---|---|---|
| `kaynaklar/meb/ortak_sinav/2026_2027_ulke_geneli_ortak_yazili_takvimi.pdf` | 1 sayfa | 2026-10-26 | https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_09/6aa2d6b17db57454479127_Ulke_Geneli_Ortak_Yaz%C4%B1l%C4%B1_S%C4%B1nav_Takvimi.pdf | ÖDSGM resmî takvim |
| `kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem/edebiyat2.xlsx` | 27 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/edebiyat2.xlsx | 2026-27 1. dönem KSDT (ÖDSGM sayfası icerik/1724 → meb.ai kısa bağlantısı) |
| `kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem/matematik2.xlsx` | 21 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/matematik2.xlsx | 2026-27 1. dönem KSDT (ÖDSGM sayfası icerik/1724 → meb.ai kısa bağlantısı) |
| `kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem/fizik2.xlsx` | 20 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/fizik2.xlsx | 2026-27 1. dönem KSDT (ÖDSGM sayfası icerik/1724 → meb.ai kısa bağlantısı) |
| `kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem/kimya4.xlsx` | 22 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/kimya4.xlsx | 2026-27 1. dönem KSDT (ÖDSGM sayfası icerik/1724 → meb.ai kısa bağlantısı) |
| `kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem/biyoloji3_4.xlsx` | 20 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/biyoloji3_4.xlsx | 2026-27 1. dönem KSDT (ÖDSGM sayfası icerik/1724 → meb.ai kısa bağlantısı) |
| `kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem/tarih3.xlsx` | 18 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/tarih3.xlsx | 2026-27 1. dönem KSDT (ÖDSGM sayfası icerik/1724 → meb.ai kısa bağlantısı) |
| `kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem/cografya4.xlsx` | 26 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/cografya4.xlsx | 2026-27 1. dönem KSDT (ÖDSGM sayfası icerik/1724 → meb.ai kısa bağlantısı) |
| `kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem/dkab_lise2.xlsx` | 19 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/dkab_lise2.xlsx | 2026-27 1. dönem KSDT (ÖDSGM sayfası icerik/1724 → meb.ai kısa bağlantısı) |
| `kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem/ingilizce_lise2.xlsx` | 23 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2026/09/KSDT/ingilizce_lise2.xlsx | 2026-27 1. dönem KSDT (ÖDSGM sayfası icerik/1724 → meb.ai kısa bağlantısı) |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2025_2026/9_mat_1D1Y_2025-11-06_sabah.pdf` | 278 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2025/11/ortaksinav/9S_Mat_2_Don_1_Yaz_sabah_cevap.pdf | soru kitapçığı + cevap anahtarı |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2025_2026/9_mat_1D1Y_2025-11-06_ogle.pdf` | 393 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2025/11/ortaksinav/9S_Mat_2_Don_1_Yazi_ogle_cevap.pdf | soru kitapçığı + cevap anahtarı |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2025_2026/9_tde_2D2Y_2026-06-03_sabah.pdf` | 293 KB | 2026-10-26 | https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_06/6a2026b16ad59026457102_9S_TDE_2_Donem_2_Yazili_Sabah_Cevap.pdf | soru kitapçığı + cevap anahtarı |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2025_2026/9_tde_2D2Y_2026-06-03_ogle.pdf` | 294 KB | 2026-10-26 | https://odsgm.meb.gov.tr/meb_iys_dosyalar/2026_06/6a202708aa765243043911_9S_TDE_2_Donem_2_Yazili_%C3%96gle_Cevap.pdf | soru kitapçığı + cevap anahtarı |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2025_2026/9_mat_1D1Y_konu_soru_dagilim.pdf` | 518 KB | 2026-10-26 | https://vanodm.meb.gov.tr/meb_iys_dosyalar/2025_10/17132115_17110316_9.sinifmatematik.pdf | ülke geneli sınavın KSDT'si |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2024_2025/9_mat_2D1Y_sabah.pdf` | 1.1 MB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2025/03/ortaksinav/9S_Matematik_2_Donem_1_Yazili_MEB_SABAH_cevap.pdf | soru kitapçığı + cevap anahtarı |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2024_2025/9_mat_2D1Y_ogle.pdf` | 1.1 MB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2025/03/ortaksinav/9S_Matematik_2_Donem_1_Yazili_MEB_OGLE_cevap.pdf | soru kitapçığı + cevap anahtarı |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2024_2025/9_tde_2D1Y_sabah.pdf` | 424 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2025/03/ortaksinav/9S_Edebiyat_2_Donem_1_Yazili_MEB_SABAH_cevap.pdf | soru kitapçığı + cevap anahtarı |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2024_2025/9_tde_2D1Y_ogle.pdf` | 412 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2025/03/ortaksinav/9S_Edebiyat_2_Donem_1_Yazili_MEB_OGLE%20_cevap.pdf | soru kitapçığı + cevap anahtarı |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2024_2025/ortak_sinav_ders_kitabi_karsilastirma.pdf` | 4.3 MB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2025/03/ortaksinav/OrtakSinav-DersKitabiKarsilastirma.pdf | ortak sınav soruları ile ders kitabı etkinlik karşılaştırması |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2024_2025/9_mat_2D1Y_konu_soru_dagilim.pdf` | 584 KB | 2026-10-26 | https://tokatodm.meb.gov.tr/meb_iys_dosyalar/2025_03/06133111_ulkegeneli9mat.pdf | ülke geneli sınavın KSDT'si |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2024_2025/9_tde_2D1Y_konu_soru_dagilim.pdf` | 575 KB | 2026-10-26 | https://tokatodm.meb.gov.tr/meb_iys_dosyalar/2025_03/06133111_ulkegeneli9tde.pdf | ülke geneli sınavın KSDT'si |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2023_2024_eski_program/9_tde_1D2Y_sabah.pdf` | 488 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2023/12/ortakyazili/sorukitapcik/9td1.pdf | eski program (TYMM öncesi), çoktan seçmeli |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2023_2024_eski_program/9_tde_1D2Y_ogle.pdf` | 489 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2023/12/ortakyazili/sorukitapcik/9td2.pdf | eski program (TYMM öncesi), çoktan seçmeli |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2023_2024_eski_program/9_mat_anadolu_1D2Y_sabah.pdf` | 887 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2023/12/ortakyazili/sorukitapcik/9ma1.pdf | eski program (TYMM öncesi), çoktan seçmeli |
| `kaynaklar/meb/ortak_sinav/gecmis_sinavlar/2023_2024_eski_program/9_mat_anadolu_1D2Y_ogle.pdf` | 934 KB | 2026-10-26 | https://cdn.eba.gov.tr/yardimcikaynaklar/2023/12/ortakyazili/sorukitapcik/9ma2.pdf | eski program (TYMM öncesi), çoktan seçmeli |
| `kaynaklar/meb/ortak_sinav/kilavuz/tymm_coktan_secmeli_soru_yazim_kilavuzu.pdf` | 10.0 MB | 2026-10-26 | https://tymm.meb.gov.tr/upload/kilavuz/coktan-secmeli-soru-yazim-kilavuzu.pdf |  |
| `kaynaklar/meb/ortak_sinav/kilavuz/tymm_performans_gelisim_cercevesi.pdf` | — | — | https://tymm.meb.gov.tr/upload/kilavuz/performans-gelisim-cercevesi.pdf | **İNDİRİLEMEDİ** (sunucu HTTP 500 döndü, 2026-10-26) |

## 4. Mevzuat ve ders çizelgesi

| Dosya | İndirme | URL |
|---|---|---|
| `kaynaklar/meb/ders_cizelgesi/anadolu_fen_sosyal_lisesi_hdc_2025.pdf` | 2026-10-26 | https://ttkb.meb.gov.tr/meb_iys_dosyalar/2025_05/20144001_202505.pdf |
| `kaynaklar/mevzuat/ortaogretim_kurumlari_yonetmeligi_18812.txt` (HTML'den metne çevrildi) | 2026-10-26 | https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18812&MevzuatTur=7&MevzuatTertip=5 (metin: `/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=7&MevzuatNo=18812&MevzuatTertip=5`) |
