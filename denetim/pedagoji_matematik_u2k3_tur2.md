# Pedagoji denetimi: 9. sınıf Matematik, Ünite 2, K3 (9.2.3), tur 2

Denetçi: pedagoji-denetcisi (salt okur). İçerik dosyası değiştirilmedi.
Kapsam: `dersler/matematik/konular/matematik-u2-k3.json` (surum 2, 13 bölüm, 14 flashcard), `dersler/matematik/sorular/matematik-u2-k3.json` (surum 2, 18 soru). Tur 1: `denetim/pedagoji_matematik_u2k3_tur1.md`. Tarih: 2026-10-30.
Not: dogrula #29 PDF görseliyle KAPALI. Tur 1'deki "#29 açık" ifadesi yanlıştı.

## KARAR: DÜZELTİLMELİ (hafif)

Tur 1'in 10 P1 bulgusunun 9'u kapandı, 1'i kısmen (ondalık okuma notunun sırası). P2 ve P3 bulgularının çoğu kapandı. YÜKSEK önemde yeni bulgu yok. Üç ORTA bulgu kaldı: s008 gelir/kâr dili kartla çelişiyor, b10 `basit` katmanı yoğun, b6 üç fikir taşıyor. Matematik elle yeniden hesaplandı: b1–b13 örnekleri, kontrol soruları, s001–s018 cevapları ve rubrik toplamları (10/15/15) doğru.

## Yöntem
- İki dosya baştan sona okundu. Grep taramaları: tepe, simetri, nitel, olgu, kavramsal, kritik, "dahil" (â'sız), kişi kalıpları (-dın/-din...), "kesişim", "ekonomik".
- Cümle uzunluğu ÖRNEKLEMEYLE sayıldı (b6, b10, b11, b12, b13 `basit`; s008, s010, s012, s016–s018 bağlam, kök, ipucu ve açıklama). Tam sayım yok.
- Paragraf, kontrol sorusu sayısı, zorluk dağılımı ve rubrik toplamları tam sayıldı.
- Panelde görsel yerleşim görülmedi. Yalnız `panel/stil.css:155` `.stem { white-space: pre-line }` doğrulandı. Bu kural yalnız `.stem` için geçerli. `baglam` alanının satır sonu işlenip işlenmediği bilinmiyor.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Cümle > 20 kelime (kart basit, banka kök/ipucu) | 0. Banka açıklamasında 1: s010 `kesisim_taraf` (~30 kelime, P2-14) | 0 | GEÇER (1 açıklama sınırı aşıyor) |
| Ortalama cümle uzunluğu (örneklem) | ~9-11 | ≤ 12 | GEÇER (örneklem) |
| Paragraf ≤ 3 cümle | Kart: 0 ihlal. Banka: s008 bağlam 5 cümle | 0 | KISMEN (P1-11) |
| Bölüm başına tek fikir | b6 (3 fikir), b12 (2 fikir), b10 (yoğun, tek fikir), b5 (11 madde) | tek | KISMEN (P1-12, P2-10, P2-16) |
| Kuraldan önce somut örnek | 13/13 `ornek` var. b12 ve b13 ön örneği iyi. b8 örneği artık soru soruyor | 13/13 | GEÇER |
| Yerel bağlam oranı | Kart: 12/13 yerel ya da günlük (gölcük 3, kocaeli 1, tersane 5, deniz 2, okul 1; kitap 1). Banka: 9/18 açıkça yerel (bağlamlı 14'ün %64'ü) | ≥ %50 | GEÇER |
| Soyut kelime (basit) | 0 | 0 | GEÇER |
| Terim ilk geçişte kalın + tanım | Tanımlı: katsayı, gelir, gider, maliyet, kâr, zarar, sapma, tolerans, orta nokta, yarı uzunluk, ekonomik, parçalı gösterim. Tanımsız: `∅` (b12) | hepsi | KISMEN (P2-10, P2-11) |
| Kontrol sorusu sayısı | 3,2,3,3,3,3,3,2,3,3,3,3,2 | 2-3 | GEÇER |
| Kontrol sorusu zorluk 1 | b10 Q3 (parçalı, işaret çevirme) ve b5 Q1 üst sınırda | hepsi | SINIRDA (P3-15) |
| İpucu: 1. basamak cevap vermiyor | İhlal 0 (tur 1: kart 3, banka 2) | 0 | GEÇER |
| İpucu: 2. yöntem, sonucu vermez | b6 Q2 ve Q3 hint 2 sınırda (P2-12) | 0 | SINIRDA |
| İpucu: 3. ilk adım, sonucu yazmaz | Sonuç yazan yok. b6 Q2, b12 Q3, b13 Q1 hint 3 cevaba çok yakın (P2-12) | 0 | SINIRDA |
| Açık uçlu ipucu c/ç kapsıyor | s016, s017, s018: evet | hepsi | GEÇER |
| Zorluk dağılımı (banka) | 9 / 6 / 3 = %50 / %33 / %17 | %50/35/15 ± 10 | GEÇER |
| Yanlış cevap dili | Azarlama ve 2. tekil kalıp 0 (tur 1: banka 8). Kart ve banka açıklamaları kişisiz | 0 | GEÇER |
| Matematik çözümü: numaralı, tek işlem | Kart basit ve yazılı: numaralı, adım adım. Banka: s015 adım 2 ve 4, birkaç kontrol adımı çok işlemli | tek işlem | KISMEN (P2-13) |
| Kart ↔ banka dil | "kesim noktası" tek biçim (kart). "ekonomik = daha ucuz" tanımlı. Banka `puanlama_notu` 2 "kesişim" | aynı dil | GEÇER (P3-12) |
| Yasak terim | 0 | 0 | GEÇER |
| "dâhil" yazımı | Tek biçim | tek | GEÇER |

## 1. Tur 1 bulguları: kapandı mı?

| Kod | Önem | Durum | Gerekçe |
|---|---|---|---|
| P1-01 s018 ç "başka yol" değil | YÜKSEK | KAPANDI | ç artık "iki uç + aralık dışından bir değer" istiyor. Rubrik 1'er puan, toplam 3. Yerine koyma, b'deki cebirden bağımsız bir yol. 352 değeri yönü ters yazan öğrenciyi yakalıyor. |
| P1-02 s011 yanlış teşhis | YÜKSEK | KAPANDI | `(−∞, 5)` seçeneği `esitsizlik_yonu`. Açıklama "−6x < −30'da ... yön çevrilmemiş" diyor. Bağlam x = 2 verisini vermiyor. |
| P1-03 kart–banka boşluğu | YÜKSEK | KAPANDI | Bkz. bölüm 3. s008 için b6, s012 için b11, s018 b için b10 parçalı yol var. Kalan sorun dil uyumsuzluğu (P1-11). |
| P1-04 eski b10 iki fikir | YÜKSEK | KAPANDI | b12 (kolay hâller) ve b13 (`|f(x)| = g(x)`) olarak ayrıldı. b13 numaralı ve tek işlemli. b12'de tekne/iskele ön örneği var. b12'de yeni bir fikir kayması kaldı (P2-10). |
| P1-05 b6 (eski) soyut g(x)=0, grafik tekrarı | ORTA | KAPANDI | Yeni b7 `basit` katmanında g(x) = 0 yok (yalnız `kitap`'ta). Kontrol artık "cebirle (tablodan başka yol)". Q3 sayısal: f(4)'ün işareti. |
| P1-06 b8 örnek soru yok, numarasız zincir, 3 yol | ORTA | KAPANDI | Ön örnek "Kaç dakikada iki fatura eşit olur?" sorusuyla bitiyor. Adımlar numaralı. Eğim kısayolu ve f ≥ g `kitap`'a taşındı. "6 < x = x > 6" b9 `basit`'te var. Kalan: P3-14. |
| P1-07 b5 içeriden değer yok | ORTA | KAPANDI | Kontrol 1 uç, Kontrol 2 içeriden (f(5) = 40), Kontrol 3 dışarıdan (f(12) = 68). Tam sayı kuralı b6'ya taşındı. |
| P1-08 terim ve dil | ORTA | KAPANDI | katsayı (b1), gelir/gider/maliyet/kâr/zarar (b6), sapma ve tolerans (b10), ekonomik (b9) tanımlı. "Kritik nokta" yerine "sınır sayısında (uçta)" yazılmış. Kart içinde tek terim "kesim noktası". Kalan: P3-12, P2-11. |
| P1-09 ondalık aralık yazımı | ORTA | KISMEN | Eşitsizlik biçimi her ondalık aralığın yanında (b10, flashcard, s012, s013, s018). Okuma notu var (b10 `basit[5]`, b5 `kitap[1]`). Kalan: not ilk kullanımdan sonra geliyor (P3-11). |
| P1-10 s016/s018 ipucu c/ç | ORTA | KAPANDI | s016 hint 2 ve s018 hint 2 kontrolü kapsıyor. s016 hint 3 f(x)'i yazmıyor. |
| P2-01 ipucu ihlalleri | ORTA | KAPANDI | b3 Q3, b8/b9 Q3, s009, s014, s004 düzeltildi. Kalan: P2-12. |
| P2-02 numaralı tek işlem | ORTA | KISMEN | Kart tamam. Banka: s010 ve s011 kontrol adımları bölündü. s015 adım 2 ve 4 ile s001/s004/s005/s006/s008 kontrol adımları çok işlemli (P2-13). |
| P2-03 2. tekil kişi | DÜŞÜK | KAPANDI | Bankada "-dın/-din" kalıbı 0. |
| P2-04 `kesisim_taraf` | ORTA | KAPANDI | s010 açıklaması "6 < x" okumasını ve 4 saatlik kontrolü veriyor. Kart b9'da bu okuma öğretiliyor. "3300 saat" çeldiricisi değişti. Kalan: P2-14. |
| P2-05 zorluk dağılımı | ORTA | KAPANDI | s015 zorluk 3. Dağılım 9/6/3. |
| P2-06 bağlamlı sorular | ORTA | KISMEN | s016, s017 kökü ayrı satırda. s010 fiyatları gerçekçi. s008'de yeni çelişki (P1-11). |
| P2-07 b4 / b3 | DÜŞÜK | KAPANDI | b4: önce depo gerekçesi, sonra 2 < 3. b3: "en" olanlar ve olmayanlar iki ayrı madde. |
| P2-08 s017 c ve s018 b kök–rubrik | ORTA | KAPANDI | s017 c kökü "uzaklıkları bulunuz". s018 b kökünde "parçalı" şartı yok. Rubrik iki yolu da kabul ediyor. |
| P3-01 | DÜŞÜK | KAPANDI | b9 yazılı soru kendi kendine yetiyor. |
| P3-02 | DÜŞÜK | KAPANDI | b4 `ornek.baglam` = "kitap". |
| P3-03 | DÜŞÜK | KAPANDI | s007: "fonksiyon azalan olduğu için". |
| P3-04 | DÜŞÜK | KAPANDI | "nitel" kartta 0. |
| P3-05 | DÜŞÜK | KABUL / AÇIK | b10 Q3 hâlâ üst sınırda (P3-15). |
| P3-06 | DÜŞÜK | KISMEN | "Bulduğunu kontrol et" alıştırması b2 Q2, b11 Q3, b13 Q1-Q2'de var. b4, b5, b8'de yok. Kabul edilebilir. |

## 2. İstenen özel değerlendirmeler

### 2.1 Yeni b6, b11, b12, b13

| Ölçüt | b6 kâr/zarar | b11 ters yol | b12 kolay hâller | b13 `|f(x)| = g(x)` |
|---|---|---|---|---|
| Önce somut örnek | Evet (mısır arabası) | Evet (118-122 levha) | Evet (tekne/iskele) | Evet (tahta, Ali) |
| Paragraf ≤ 3 cümle | Evet. `basit[11]` 2 cümle ama 3 işlem | Evet | Evet | Evet |
| Ekranda tek fikir | HAYIR: kâr modeli + yön + tam sayı (P2-16) | Evet. Terim yükü fazla (P2-11) | KISMEN: "eksi olmaz" + `= k, < k, > k` (P2-10) | Evet |
| 3 katman | Evet | Evet | Evet | Evet |
| Kontrol sorusu 2-3, zorluk 1 | 3. Q3 soyut `g(x) > m(x)` (P3-13) | 3 | 3 | 2. Q2 iki iş istiyor |
| İpucu 1. yön, 2. yöntem, 3. ilk adım | Q1 uygun. Q2 hint 2 neredeyse cevap. Q3 hint 2 ">"yı veriyor | Üçü de uygun | Q3 hint 3 iki kökü yönlendiriyor | Q1 hint 3 cevaba yakın |
| Numaralı tek işlemli adım | 2 liste de 1-2-3. `basit[11]` tek satırda 3 işlem | Evet | Evet | Evet |

Ayrıntı:
- **b6.** Tek ekranda 13 madde var. Numaralama iki kez 1-3'e dönüyor. Tam sayı kuralı ("`>` çıkarsa ilk büyük tam sayı") ayrı bir fikir.
- **b11.** Ders akışı iyi: örnek, orta nokta, yarı uzunluk, genel kural, uyarı ("sağdaki sayı tam uzunluk değil"), geri dönüş kontrolü. Kontrol gerçekten "başka yol".
- **b12.** İlk 5 madde "uzaklık eksi olmaz" fikrini işliyor ve iyi. Son 4 madde (`= 5`, `< 5`, `> 5`) yeni bir fikir. Bu kısım `kontrol_sorulari` tarafından neredeyse hiç yoklanmıyor.
- **b13.** En güçlü yeni bölüm. Ali'nin −1 ve 1 bulması merak uyandırıyor. Ön örnekte ilk parça atılıyor, s015'te ikinci parça atılıyor; bu aktarmayı güçlendiriyor.

### 2.2 b10 `basit` katmanı (14 madde): bölünmeli mi?

Karar: **bölme gerekmez, ama bir sadeleştirme önerilir (ORTA, P1-12).**
- Sayım: ~200 kelime, 14 madde. Altı numaralı parçalı adım aynı kalıpla tekrarlanıyor, bu yüzden okuma süresi maddeden daha az.
- Fikir tek: "aynı eşitsizlik iki yoldan çözülür". Parçalı yol aynı zamanda b10'un "başka yolla kontrol" omurgası.
- Risk: Mehmet Eren aynı ekranda ondalık sayı, okuma notu, kısa yol, 6 adımlık parçalı yol ve yerine koymayı görüyor.
- Öneri: parçalı yolu (`basit[6-12]`) "İkinci yol" etiketiyle ayır. Panelde ayrı sekme ya da açılır kutu yapılabiliyorsa oraya koy. Yapılamıyorsa 5 dakikalık anlatıma ve Q1-Q2'ye kısa yolu bırak; parçalı yolu `kitap`'a ve Q3'e ver. Bu durumda Q3'ün zorluk 1 üst sınırı da rahatlar. Bölme yalnız ölçülen süre 5 dakikayı aşarsa gerekir.
- Dikkat: s018 hint 2 ve b13 parçalı çözüme dayanıyor. Parçalı yol `kitap`'a taşınırsa b13 ve 9.2.2 hatırlatması bunu yine karşılar.

### 2.3 Kontrol omurgası

| Yer | Değerlendirme |
|---|---|
| b5 | UYGUN. Uç, içeriden, dışarıdan. "Yönü ters yazan bu iki denemede yakalanır" cümlesi doğru: (10, ∞) yazan, f(5) = 40 < 60 ile çelişir. |
| b7 (eski b6) | UYGUN. Tablo ile cebir iki ayrı yol. Grafik tekrarı kontrolden çıktı. |
| s003 | UYGUN. Adım 5 yerine koyma, adım 6 modeli sınıyor (f(0), f(1)). |
| s016 | UYGUN. Adım 7-8 uç ve dış değer, adım 9 modeli sınıyor. Rubrikte yalnız c puanlanıyor (2/10, %20). |
| s018 ç | "Başka yol" olarak YETERLİ. Cebir (b) ile kontrol (ç) bağımsız. 352 değeri yönü ters yazanı yakalıyor. İçeriden değer yok ama gerekli değil. Rubrik 7 ölçüt: 2+2+2+2+2+2+3 = 15. |
| s017 ç | UYGUN. Kesim noktasının iki yanı, rubrikte 3/15. |

### 2.4 Kart–banka boşluğu

| Soru | Beceri | Kartta karşılığı | Durum |
|---|---|---|---|
| s008 | "x < 80 → en çok 79", zarar | b6 `basit[10-11]`, flashcard 6, kontrol Q2 | KAPANDI. Dil sorunu: P1-11 |
| s012 | Aralıktan `|x − c| ≤ d` | b11 tamamı, flashcard 11, b11 Q1-Q3 | KAPANDI |
| s018 b | Parçalı çözüm | b10 `basit[6-12]`, b13 | KAPANDI |
| s015 | Parça şartıyla kök eleme | b13 | KAPANDI (b13'te ters sonuç, aktarma iyi) |

**s012 zorluk 1 mi 2 mi?** Öneri: **2** (P2-15, DÜŞÜK).
- s012 yeni bir yönü (ters yol) ve ondalık aritmetiği (249,6 + 250,4 ÷ 2) birleştiriyor. Öğrenci 4 farklı hata biçimine karşı seçim yapıyor: tam uzunluk (0,8), `<`, `≥`.
- b11 kontrol soruları tam sayılı ([6, 14]) ve zorluk 1. s012 ondalık, çoktan seçmeli ve çeldirici tuzaklı; bu s006 (zorluk 2) ile aynı yükte.
- Dağılım etkisi: 9/6/3 yerine 8/7/3 = %44 / %39 / %17. Üçü de tolerans içinde (50±10, 35±10, 15±10). Hedefe 6 puan uzaklaşıyor, sınır ihlali yok.
- Alternatif: zorluk 1'de kalacaksa uçları tam sayı yap (ör. [248, 252]) ve b11 Q1-Q2 ile aynı yükü koru.

### 2.5 Bağlamlı sorular: okunabilirlik ve gerçekçilik

| Soru | Okunabilirlik | Gerçekçilik | Not |
|---|---|---|---|
| s008 simit | `baglam` 5 cümle. Kâr/gider/zarar ayrı cümlelerde | "Simidin kendi maliyeti çıktıktan sonra her simitten 5 TL kâr" ile "Gelir: 5x" çelişiyor | P1-11 (ORTA) |
| s010 vinç | 2 cümle, kısa | A 9000 + 3000/saat, B 3000 + 4000/saat. Kesim 6 saat, 27 000 TL. Gerçekçi | İyi |
| s012 sac | 2 cümle, her iki biçim var | 250 cm ± 0,4 cm makul | İyi |
| s016 tır | Kök a), b), c) ayrı satır (`\n`) | 480 L, 32 L/saat, 96 L rezerv makul | İyi |
| s017 nakliye | Kök a), b), c), ç ayrı satır, her biri tek cümle | 18-24 TL/km, 200 km makul | İyi |
| s018 çubuk | Kök ayrı satır, 4 şık | 350 mm ± 1,5 mm makul | İyi |

### 2.6 `kesisim_taraf` ve `esitsizlik_yonu` çeldiricileri

- **s010** `6 saatten kısa`: açıklama öğretici (okuma + sayıyla kontrol). Cümlesi 30 kelime (P2-14).
- **s011** `(−∞, 5)`: artık gerçek hatayı (yönü çevirmemek) teşhis ediyor. Öğretici.
- **s017**: `puanlama_notu` iki kök nedeni (ters okuma, `1200 < 6x` okuması) birlikte söylüyor. Öğretmen yönünde yeterli.
- **b9 `sik_hatalar[5]`**: kök neden ("600 < 4x, x < 150 diye okunur") ile kartta karşılığı olan b9 `basit[5]` uyumlu.

### 2.7 Ondalık aralık okuma notu ve "a ≤ x ≤ b" biçimi

Yeterli, tek eksikle:
- Eşitsizlik biçimi (`119,5 ≤ x ≤ 120,5`) her ondalık aralığın hemen yanında: b10, flashcard 10, s012 bağlam, s013 çözüm, s018 çözüm ve rubrik.
- Koordinat çiftleri ("(59,95, 0,05)") kalktı. Bu kafa karışıklığının en büyük kaynağıydı.
- Eksik: not, `[119,5, 120,5]`'in ilk görüldüğü maddeden SONRA geliyor (P3-11).
- b5 `basit`'te ondalık aralık yok; not yalnız `kitap[1]`'de. Bu doğru.

### 2.8 Terim, kişi ve yasak kelime taraması

| Konu | Sonuç |
|---|---|
| katsayı | b1 `basit[4]` + `terimler` |
| kâr / gelir / gider / maliyet / zarar | b6 `basit[0-1]` kalın, `terimler` tanımlı |
| sapma / tolerans | b10 kalın ve tanımlı |
| ekonomik → "daha ucuz" | b9 `basit[7]` kalın, `terimler` tanımlı |
| kesim noktası | Kartta tek biçim. Banka: s017 `puanlama_notu` 2 kez "kesişim" (P3-12) |
| kritik nokta | Kalktı. "Sınır sayısı (uç)" b3 ve b5 `terimler`'de eşleşiyor |
| kişi tutarlılığı | Kart ve banka açıklamaları kişisiz. "Bir arkadaşın ..." yalnız soru metninde (b2 Q2, b11 Q3) |
| dâhil | Tek yazım |
| tepe noktası / simetri ekseni | 0 |

## 3. Yeni bulgular

Öncelik: önce anlamayı engelleyenler (P1), sonra pedagoji (P2), sonra biçim (P3).

### P1: anlamayı engelleyenler

**P1-11 · ORTA · `sorular` s008 `baglam`**
Alıntı. "Büfe, simidin kendi maliyeti çıktıktan sonra her simitten 5 TL kâr ediyor. ... Günlük kâr k(x), Kâr = Gelir − Gider ile bulunur." Çözüm adımı 1: "Gelir: 5x TL. Gider: 400 TL."
Sorun. (1) 5 TL "kâr" olarak veriliyor, ama çözümde "gelir" oluyor. Kart b6 gelir = "kasaya giren para" diye öğretiyor. Öğrenci "5x" için "kâr mı gelir mi?" diye takılır. (2) `baglam` 5 cümle; kural 3'tür. (3) Kart b6 örneği (mısır: gelir 10x, gider 360) ile dil uyumsuz.
Öneri. Mısır örneğiyle aynı modele çevir: "Gölcük'teki bir simit büfesinin günlük gideri 1200 TL'dir. Her simit 15 TL'ye satılıyor. Günde x simit satılıyor (sayılar kurgusaldır). Kâr eksi çıkarsa büfe zarar eder." Çözüm: gelir 15x, kâr 15x − 1200 < 0, x < 80, cevap 79 değişmez. Çeldirici "395" (400'den 5 çıkarma) yerine "1185" (1200 − 15) yap. Alternatif: kâr/gelir kelimelerini "her simitten 5 TL net kazanç" diye değiştir ve çözümü ona göre yaz.

**P1-12 · ORTA · `konular` b10 `basit[0-13]`**
Sorun. 14 madde, ~200 kelime. Kısa yol, okuma notu, 6 adımlık parçalı yol ve yerine koyma tek ekranda. Karar gerekçesi bölüm 2.2'de.
Öneri. Parçalı yolu (`basit[6-12]`) "İkinci yol" olarak ayır ya da `kitap`'a taşı ve Q3'ü kısa yolun sağlamasına çevir. Bölme yalnız süre ölçümü 5 dakikayı aşarsa.

### P2: pedagojik kalite

**P2-10 · ORTA · `konular` b12 `basit[6-9]`, yazılı cevap**
Sorun. Bölüm başlığı "kolay hâller" ama son 4 madde (`|x − 3| = 5`, `< 5`, `> 5`) k > 0 durumu. Bu ikinci bir fikir ve `kontrol_sorulari` sadece Q3'te (`= 3`) yokluyor. "x < −2 ya da x > 8" örneksiz ve kontrolsüz kalıyor. Ayrıca `∅` (boş küme) ve `ℝ` yazılı cevapta tanımsız.
Öneri. `basit[6-9]`'u `kitap`'a al ya da Q3'ü `|x − 3| > 5` içeren bir yerine koyma sorusuna çevir. `basit[2]`'ye "çözüm yok (boş küme, ∅)" yaz.

**P2-11 · ORTA · `konular` b11 `terimler`, `basit[1]`**
Alıntı. "buna **orta nokta** denir ... buna **yarı uzunluk** denir."
Sorun. Aynı fikre üç ad var: "hedef ölçü", "izin verilen sapma", "yarı uzunluk". b10'da `tolerans` zaten tanımlı. "Yarı uzunluk" kitapta ve programda geçmeyen, kartın türettiği bir terim; `dogrula` notunda terimin kart tarafından uydurulduğu söylenmiyor.
Öneri. d için `tolerans` kullan ("yarı uzunluk" yerine). `terimler`'den "yarı uzunluk"u kaldır. Gerekirse `dogrula`'ya "ters yolda 'yarı uzunluk' kart terimidir" notu ekle.

**P2-12 · DÜŞÜK · ipucu merdiveni**
- b6 Q2 hint 2: "45'ten küçük tam sayıların en büyüğünü ara." Neredeyse cevap. Öneri: "45 çözümde değilse sayı doğrusunda 45'in solundaki sayılara bak."
- b6 Q3 hint 2: "Gelir maliyete eşitse kâr sıfırdır; bu kâr sayılmaz." Seçilecek işareti (`>`) veriyor. Öneri: "Gelir maliyete eşitken kâr var mı?"
- b6 Q2 hint 3 ve b13 Q1 hint 3 sonucu zaten söyler gibi.
- b12 Q3 hint 3: iki kök işlemini de veriyor. Öneri: yalnız sol kökü yaz, "sağ kökü bul" de.

**P2-13 · ORTA · `sorular` s015 `cozum_adimlari[1]`, `[3]`; kontrol adımları**
Sorun. s015 adım 2: "x − 3 = 2x − 9; iki taraftan x çıkar: −3 = x − 9, x = 6." 3 işlem. Adım 4: 4 işlem. Kart b13 aynı işi 4+4 ayrı adımda yapıyor, bankayla tutarsız. Kontrol adımları s001 (4), s004 (4), s005 (3), s006 (6), s008 (7), s012 (5): her satırda 2-3 değer birden.
Öneri. s015 adımlarını b13 ile aynı granülasyonda yaz (ilk önce s015, çünkü zorluk 3 ve öğrencinin en çok kopyalayıp öğreneceği çözüm). Diğer kontrol adımlarını "a) uç, b) dışarıdan" diye ayır; zorunlu değil.

**P2-14 · DÜŞÜK · `sorular` s010 seçenek açıklamaları**
- `6 saatten kısa` açıklaması tek cümle, ~30 kelime ve "sıra öncesine taşınmış" soyut. Öneri: "1000x > 6000 ... 6 < x, yani x > 6. 4 saatte A 21 000 TL, B 19 000 TL ister; B ucuz. Kısa kiralamada A ucuz değildir."
- `27 000 saatten uzun` seçeneği hâlâ gerçek dışı (yaklaşık 3 yıl). Öneri: "27 000 TL'den fazla ödemede".

**P2-15 · DÜŞÜK · `sorular` s012 `zorluk`**
Öneri: 1 → 2. Gerekçe ve dağılım etkisi bölüm 2.4'te.

**P2-16 · ORTA · `konular` b6 `basit`**
Sorun. 13 madde; "kâr modeli", "yön (en az / en çok)" ve "tam sayı kuralı" üç fikir. İki kez 1-2-3 numaralama ekranda kaybolma riski yaratıyor. `basit[11]` ("Ters yön: ...") 3 işlemi tek satırda veriyor.
Öneri. Tam sayı kuralını (`basit[9-11]`) ayrı bir bölüme (örn. b6b "Tam sayı cevap: en az / en çok") al. Ya da `basit[11]`'i üç kısa maddeye böl ve ikinci listeyi 4-5-6 diye devam ettir.

### P3: biçim

**P3-11 · DÜŞÜK · b10 `basit[4]` ve `[5]`**: Okuma notu `[119,5, 120,5]` yazıldıktan sonra geliyor. Notu `basit[3]`'ten önce ya da `basit[4]`'ün hemen önüne taşı.
**P3-12 · DÜŞÜK · s017 `puanlama_notu`**: "kesişimden sonraki sırayı", "kesişimin soluna". Kart "kesim noktası" diyor. "Kesim noktasından sonraki sırayı" yaz.
**P3-13 · DÜŞÜK · b6 Q3**: `g(x) > m(x)` harf düzeyinde, bağlamsız. Zorluk 1 için soyut. Öneri: "Gelir 12x, maliyet 300. Kâr için hangi eşitsizlik yazılır?"
**P3-14 · DÜŞÜK · b8 `basit[8]`**: "Grafikle kontrol: iki doğruyu çiz ..." çizim gerektirir, öğrencinin elle uygulayabileceği bir kontrol değil, anlatım. `kitap`'a al ya da "Kontrol" etiketini kaldır.
**P3-15 · DÜŞÜK · b10 Q3**: Parçalı çözüm + eksi işaret çevirme zorluk 1'in üst sınırında. P1-12 uygulanırsa kendiliğinden çözülür.

## Ölçülemeyen ya da örnekleme yapılan ölçütler
- Ortalama cümle uzunluğu: örneklem. Kesin sayım yok.
- b10 süre (5 dakika): kelime sayısına dayalı tahmin. Gerçek okuma süresi ölçülmedi.
- Panel görünümü: yalnız `.stem` kuralı doğrulandı. `baglam` alanında satır sonu ve şıkların ayrı satırda görünmesi panelde görülmedi.
- Öğrencinin gerçek hata dağılımı bilinmiyor. Çeldirici teşhisleri pedagojik muhakemeye dayanıyor.
- Kitap sayfa numaraları ve kitaptan türetilen aralıklar yeniden doğrulanmadı (dogrula #29 kapalı, PDF görseliyle teyitli).
