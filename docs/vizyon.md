# Barbaros 9 · Mehmet Eren Çalışma Masası

## Vizyon

> Mehmet Eren her yazılıya öğretmenin soracağı soru tipini önceden görmüş ve kendi cümlesiyle cevaplayabilir olarak girer.

## Misyon

MEB resmi kaynaklarına dayalı, uydurma bilgi içermeyen, kısa adımlarla öğreten, hatayı tekrar kutusuna gönderip yeni sayılarla yeniden soran, veliye şeffaf ilerleme gösteren bir sistem.

## Kimin için

- **Öğrenci:** Mehmet Eren, Kocaeli Gölcük Barbaros Anadolu Lisesi, 9. sınıf, 2026–2027.
  Dersleri ve anlama kapasitesi ortalamanın biraz altında. Uzun metinde kopuyor.
- **Veli:** İlerlemeyi, zayıf konuları ve çalışma süresini görür.

## Modlar

| Mod | Ne yapar | Referanstaki karşılığı |
|---|---|---|
| **Konu Anlatımı** | Her konu 3 katmanda anlatılır: Basit anlatım → Kitap dili → "Yazılıda böyle sorulur". 5 dakikalık bölümlerin her birinden sonra 2–3 kolay kontrol sorusu gelir. | Kitaplık / flashcard |
| **Alıştırma** | Parametrik üreteçler her seferinde yeni sayılarla soru üretir. Dağılım %50 kolay, %35 orta, %15 sınav seviyesi. Her soruda 3 basamaklı ipucu merdiveni var. | Simülatör modu + `gen()` |
| **Yazılı Provası** | Okul yazılısının biçimi (öğretmenin geçmiş yazılılarından çıkarılır): soru sayısı, puanlar, süre. | Modül turu + sınav ölçütü |
| **Ortak Sınav Provası** | Açık uçlu sorular ve rubrik. Yazdırılabilir A4 çıktı. Öğrenci kağıda yazar, rubrikle puanlanır. | Yeni |
| **Tekrar Kutusu** | Yanlış yapılan konular Leitner kutu 1'e düşer ve yeni sayılarla yeniden sorulur. | Modül D |
| **Veli Paneli** | Çalışma süresi, doğruluk, ipucu kullanımı, tekrar bekleyen konular ve yazılılara geri sayım. JSON dışa/içe aktarma. | KPI + denetim izi |

## İlkeler

1. **Doğruluk önce:** Her bilgi kartında kaynak bulunur. Emin olunmayan bilgi `DOĞRULA:` etiketi alır ve `docs/dogrula.md` dosyasına yazılır.
2. **Kısa ve somut:** Bir ekranda tek fikir olur. Önce Gölcük'ten, tersaneden, denizden ya da futboldan bir örnek gelir, sonra kural.
3. **Hata öğretir:** Yanlış cevapta azarlama yok. Tek cümlelik neden ve ipucu verilir, sonra yeni sayılarla tekrar sorulur.
4. **Kendi cümlesiyle:** Öğrenci açık uçlu sorularda kendi cümlesini yazar. Not alanı konuya bağlı kalır.
5. **İnternetsiz:** `panel/index.html` çift tıklamayla açılır. İlerleme bu cihazda saklanır, JSON olarak yedeklenir.

## Kapsam dışı (şimdilik)

- Çok kullanıcılı sunucu, giriş sistemi (referanstaki `RestApiAdapter` faz 2 olarak hazır bekler).
- Ders kitabından uzun alıntı (telif).
- Otomatik açık uçlu cevap puanlama (rubrik öz-değerlendirme ile yapılır).

## Önemli tarihler

Ayrıntılı ve kaynaklı liste: `docs/takvim.md`.
- 9. sınıf Matematik ortak yazılı: **6 Ocak 2027 Çarşamba**. Gün düzeyinde teyit bekliyor; bkz. `takvim.md`.
- 9. sınıf Türk Dili ve Edebiyatı ortak yazılı: **7 Nisan 2027 Çarşamba**.
