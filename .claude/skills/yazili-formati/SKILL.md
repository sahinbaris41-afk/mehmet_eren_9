---
name: yazili-formati
description: "Barbaros Anadolu Lisesi öğretmenlerinin okul yazılısı biçimi (soru sayısı, soru tipleri, puanlama, kâğıt düzeni). Yazılı provası üretirken ya da öğretmen profili güncellenirken kullan. kaynaklar/gecmis_yazililar'dan türetilir; veri yoksa ortak sınav formatına yönlendirir."
---

# Yazılı Formatı (okul)

## Durum: henüz veri yok

**`kaynaklar/gecmis_yazililar/` boş (2026-10-26).** Öğretmenlerin gerçek yazılı biçimi bilinmiyor.

**Şimdilik `ortak-sinav-formati` yeteneğini kullan.** Gerekçe: Ortaöğretim Kurumları Yönetmeliği 45/1-b ve 45/2 okul yazılılarının da ortak, KSDT'ye dayalı ve "cevaplarını öğrencinin oluşturduğu" yazılı yoklama olmasını istiyor (`docs/olcme_kurallari.md`).

Okula özgü farklar (veri gelene kadar varsayım; her biri DOĞRULA):
- Soru sayısı, seçilen KSDT senaryosuna eşit. Ör. 9. sınıf Matematik 1. yazılı: senaryolar 8 / 6 / 9 / 7 soru.
- Süre bir ders saati (40 dk). Yönetmelik 45/1-ç'ye göre zorunlu hâller dışında aşamaz.
- Başlıkta ÖDSGM yerine okul adı: "GÖLCÜK BARBAROS ANADOLU LİSESİ 2026-2027 EĞİTİM-ÖĞRETİM YILI 9. SINIFLAR ... DERSİ 1. DÖNEM 1. ORTAK YAZILI SINAVI".
- Cevap anahtarı ve puanlar sınav sonunda ilan edilir (45/1-b, 45/1-e).

## Veri gelince bu dosya nasıl güncellenir
1. `mufredat-analisti` ajanı `kaynaklar/gecmis_yazililar/` içindeki her dosyayı (fotoğraf dahil) okur ve `dersler/<ders>/ogretmen_profili.json` üretir.
2. Bu dosyadaki "Durum" bölümü silinir; her ders için şu tablo doldurulur:

| Ders | Öğretmen | Örnek sayısı | Soru sayısı | Süre | Tip dağılımı | Puanlama | Sevdiği kalıplar | Kaynak dosyalar |
|---|---|---|---|---|---|---|---|---|
| (ör.) Matematik | DOĞRULA | 2 | 10 | 40 dk | açık %70, boşluk %30 | adım puanı var | "en sade biçimde yazınız" | `kaynaklar/gecmis_yazililar/...` |

3. Kâğıt düzeni: başlık bloğu, ad/numara alanı, puan tablosu konumu, soru numaralandırma (1., 1), a)), cevap alanı tipi (boşluk/çizgi/kare). Fotoğraftan birebir tarif edilir.
4. Tek örnekten genelleme yapılmaz: `guven: "dusuk"` yazılır ve ortak sınav biçimiyle karıştırılarak kullanılır.

## Sınav simülatörü için kural
- `dersler/<ders>/ogretmen_profili.json` varsa ve `guven` en az `orta` ise o biçim kullanılır.
- Yoksa `ortak-sinav-formati` kullanılır ve kâğıdın altına şu not yazılır: "Okul yazılısı biçimi henüz bilinmiyor; MEB ortak sınav biçimi kullanıldı."
