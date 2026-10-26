---
name: maarif-kaynak-okuma
description: "Türkiye Yüzyılı Maarif Modeli kaynaklarını bulma ve okuma yolu. tymm.meb.gov.tr'de 9. sınıf öğretim programı, ders kitabı, destekleme/zenginleştirme kitabı ve taslak yıllık planı bulmak; ÖDSGM'den konu-soru dağılım tablosu ve ortak sınav kitapçığı almak; PDF indirip pypdf ile sayfa numaralı metne çevirmek; öğrenme çıktısı kodlarını (MAT.9.1.1, TDE2.2, ENG.9.3...) okumak gerektiğinde kullan."
---

# Maarif Kaynak Okuma

2026-10-26'da bu yollarla çalışıldı. Site değişirse önce sayfanın kendisine bak, URL tahmin etme.

## 1. tymm.meb.gov.tr (program ve kitaplar)

Listeler JavaScript ile dolduğu için doğrudan JSON uç noktaları kullanılır (GET):

| Amaç | Uç nokta |
|---|---|
| Sınıfın dersleri | `/Ders/GetDerslerBySinif?sinifId=11&kademe=3` |
| Ders kitapları | `/Kitap/GetDersKitaplariBySinifDers?sinifId=11&dersId=<id>&kademe=3` |
| Destekleme / zenginleştirme | `/Kitap/GetFarklilastirmaBySinifDers?sinifId=11&dersId=<id>&kademe=3` |
| Öğretim materyalleri | `/Kitap/GetOgretimMateryalleriBySinifDers?...` |

- `kademe=3` Ortaöğretim. `sinifId`: 10 hazırlık, **11 = 9. sınıf**, 12–14 = 10–12. sınıf, **17 = Ortaöğretim seçmeli** (Sağlık Bilgisi ve Trafik Kültürü burada, dersId 113).
- 9. sınıf ders id'leri: TDE 17, Matematik 18, Fizik 19, Kimya 20, Biyoloji 21, Coğrafya 22, Tarih 24, Din 13, İngilizce (9-12) 39, Beden 30, Görsel 28, Müzik 29.
- `GetDerslerBySinif` yanıtındaki `pdf` alanı programın PDF'idir: `https://tymm.meb.gov.tr/assets/pdf/<pdf>`.
- Kitap yanıtındaki `detailPath` (`/kitap/41/...`) sayfasında `data-pdf="/assets/pdf/....pdf"` bulunur. PDF URL'si odur.
- Taslak yıllık planlar: `https://tymm.meb.gov.tr/taslak-cerceve-planlari/ortaogretim` sayfasındaki `/assets/file/*.zip|rar` bağlantıları. Excel'de "9. SINIF" sayfası. Sütunlar: AY, HAFTA, DERS SAATİ, ÜNİTE/TEMA, KONU, ÖĞRENME ÇIKTILARI, SÜREÇ BİLEŞENLERİ...
- Soru yazım kılavuzu: `/upload/kilavuz/coktan-secmeli-soru-yazim-kilavuzu.pdf`.

## 2. ÖDSGM ve meb.gov.tr (ortak sınav)

- Duyurular `odsgm.meb.gov.tr/www/<başlık>/icerik/<no>`. Ekler sayfadaki `/meb_iys_dosyalar/...pdf` ya da `cdn.eba.gov.tr/yardimcikaynaklar/...` bağlantıları.
- KSDT bağlantıları `meb.ai/<kısa>` biçiminde. Gerçek adresi bulmak için: `curl -s -o /dev/null -w "%{redirect_url}" https://meb.ai/<kısa>`.
- Geçmiş kitapçıklar il ÖDM sayfalarında da listelenir (`<il>odm.meb.gov.tr`). Aynı `cdn.eba.gov.tr` dosyasına gider.
- TTKB çizelge listesi POST ile gelir: `ttkb.meb.gov.tr/www/icerik_listele_ajax.php` (`kategori=7`). Önce sayfayı çerezle aç, sonra `X-Requested-With: XMLHttpRequest` başlığıyla iste.
- Mevzuat: `mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=7&MevzuatNo=18812&MevzuatTertip=5` (Ortaöğretim Kurumları Yönetmeliği). MevzuatNo'yu meb.gov.tr/mevzuat listesinden doğrula.

## 3. İndirme ve metne çevirme

```bash
curl -sL -o kaynaklar/meb/<ders>/<dosya>.pdf "<url>"     # ya da PowerShell Invoke-WebRequest
python tools/pdf_metin.py kaynaklar/meb/<ders>           # metin/<dosya>/s0001.txt ...
```
- `sNNNN` = **PDF sayfa sırası**. Kitapta basılı sayfa numarası çoğunlukla her sayfanın ilk satırıdır. `tools/harita_uret.py` bu eşlemeyi kurar (`basili_*` ve `pdf_baslangic`).
- Bilinen metin bozulmaları: harf aralıkları ("F onksiyon", "Y AŞAM"), sekme ile ayrılmış kelimeler, üslerin düz yazılması ("108" = 10⁸). Alıntı ya da sayı kullanmadan önce PDF görselini kontrol et.
- Yeni dosyayı `docs/kaynak_envanteri.md` dosyasına ekle (dosya, boyut, tarih, URL).

## 4. Öğrenme çıktısı kodları

| Ders | Plan/program biçimi | KSDT biçimi | Not |
|---|---|---|---|
| Matematik | `9.1.1.` | `9.1.1.` | Tema.konu.çıktı |
| Fizik, Biyoloji, Tarih, Coğrafya, Din | `FİZ.9.1.1.`, `BİY.`, `TAR.`, `COĞ.`, `DKAB.` | aynı | |
| Kimya | planda `9.1.1.` | `KİM.9.1.1.` | Önek farkı: sayısal çekirdekle eşle |
| TDE | `TDE2.2` | `TDE2.2` | **Her temada tekrar eder**; tema numarasıyla birlikte anahtar yap (`TDE2.2|T1`). TDE1 = dinleme, TDE2 = okuma, TDE3 = konuşma, TDE4 = yazma |
| İngilizce | `ENG.9.3`, revizyonda `ENG.8.1.R3` | aynı | Tema = ünite |
| Beden, Görsel, Müzik | `BES.9.1.1`, `GS.9.1.1`, `MÜZ.9.1.1` | yok (uygulamalı) | |

- Çıktının altındaki `a) b) c)` maddeleri **süreç bileşenleridir**. Soru ve anlatım bunlara dağıtılır.
- Kod ayrıştırma ve eşleme kodu: `tools/harita_uret.py` (`ciktilari_ayir`, `kod_anahtari`).
