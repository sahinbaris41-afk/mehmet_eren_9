# Pedagoji denetimi: 9. sınıf Matematik, Ünite 2, K3 (9.2.3), tur 3 (son tur)

Denetçi: pedagoji-denetcisi (salt okur). İçerik dosyası değiştirilmedi.
Kapsam: `dersler/matematik/konular/matematik-u2-k3.json` (surum 3, 13 bölüm, 14 flashcard), `dersler/matematik/sorular/matematik-u2-k3.json` (surum 3, 18 soru). Önceki tur: `denetim/pedagoji_matematik_u2k3_tur2.md`. Tarih: 2026-10-30.

## KARAR: DÜZELTİLMELİ (hafif)

YÜKSEK bulgu yok. Tur 2'nin 17 bulgusundan 13'ü kapandı, 4'ü kısmen açık. Yeni ORTA bulgu 3 tane, hepsi küçük metin düzeltmesi:
1. b6 `basit` 13 maddeden 17 maddeye çıktı ve hâlâ üç fikir taşıyor (P2-20).
2. b6'daki "Eşitsizliğin yönü:" etiketi b4'ün terimiyle çakışıyor (P2-21).
3. s008 kartta öğretilmeyen "değişen maliyet" modeli istiyor ve "maliyet" kartta "gider" ile aynı tanımlı (P2-22).

Bunlar düzelirse karar TEMİZ olur. Matematik yeniden kontrol edildi: s008 (79 ve 80 için gelir/gider), s010 (4 ve 1 saat), s012, s015, s018 ve rubrik toplamları (s016 10, s017 15, s018 15) doğru.

## Yöntem
- İki dosya baştan sona okundu (kart: b1–b13, flashcard, sik_hatalar, dogrula; banka: s001–s018). Grep: kesişim, yarı uzunluk, tepe, simetri, dahil (â'sız), kritik, olgu, kavramsal, nitel, dikkatsiz.
- Cümle uzunluğu ÖRNEKLEMEYLE bakıldı (b6, b10, b11, b12, b13 `basit`; s008, s010, s012 bağlam ve açıklamaları). Tam sayım yok. Madde sayıları ve jeton sayıları elle sayıldı.
- Panelde görsel yerleşim görülmedi. Etiketlerin (ör. "Kâr modeli üç adımda kurulur.") panelde kalın ya da ayrı satır görünüp görünmediği bilinmiyor; JSON'da düz metin.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Cümle > 20 kelime (kart basit, banka kök/ipucu/açıklama) | 0 (örneklem). s010 uzun açıklama kısaldı | 0 | GEÇER |
| Ortalama cümle uzunluğu (örneklem) | ~9-11 | ≤ 12 | GEÇER (örneklem) |
| Paragraf ≤ 3 cümle | Kart 0 ihlal. s008 bağlam 3 cümle (tur 2: 5) | 0 | GEÇER |
| Bölüm başına tek fikir | b6 17 madde, 3 fikir; b10 14 madde; b12 11 madde, 2 alt fikir | tek | KISMEN (P2-20, P2-23, P3-23) |
| Kuraldan önce somut örnek | 13/13 `ornek` var | 13/13 | GEÇER |
| Yerel bağlam oranı | Kart 12/13. Banka 9/14 yerel (%64), günlük dahil 11/14 | ≥ %50 | GEÇER |
| Soyut kelime (basit) | 0 | 0 | GEÇER |
| Terim ilk geçişte kalın + tanım | Tanımlı: gelir, gider, maliyet, kâr, zarar, sapma, tolerans, parçalı gösterim, orta nokta, boş küme (∅ tanımlı). Çakışma: "maliyet" (P2-22) ve "eşitsizliğin yönü" (P2-21) | hepsi | KISMEN |
| Kontrol sorusu sayısı | 3,2,3,2,3,3,3,2,3,3,3,3,2 | 2-3 | GEÇER |
| Kontrol sorusu zorluk 1 | b10 Q3 parçalı + işaret çevirme hâlâ üst sınırda | hepsi | SINIRDA (P3-15) |
| İpucu 1. basamak cevap vermiyor | İhlal 0 | 0 | GEÇER |
| İpucu 2. yöntem, sonucu vermez | İhlal 0 (b6 Q2, Q3 düzeldi) | 0 | GEÇER |
| İpucu 3. ilk adım, sonucu yazmaz | Sonuç yazan yok. Bir adım kalan örnekler: b13 Q1 (−1 ≥ 2), b2 Q1, b4 Q1, b11 Q1 | 0 | SINIRDA (P3-25, DÜŞÜK) |
| Zorluk dağılımı | 8 / 7 / 3 = %44 / %39 / %17 (hedef 50/35/15) | ± 10 puan | GEÇER (sapma 6/4/2) |
| Yanlış cevap dili | Azarlama, "dikkatsiz", "basit bir hata" yok. Açıklamalar kişisiz | 0 | GEÇER |
| Matematik çözümü: numaralı, tek işlem | Kart tamam. Banka: tur 2'de bölünen adımlar tek işlem; kontrol adımları (tablo) hâlâ çok işlemli | tek işlem | KISMEN (P3-24) |
| Kart ↔ banka dili | "kesim noktası" tek ad (isim olarak). "orta nokta", "tolerans" aynı anlamda. "yarı uzunluk" kalktı | aynı dil | GEÇER |
| Yasak terim ("tepe noktası", "simetri ekseni") | 0 | 0 | GEÇER |
| "dâhil" yazımı | Tek biçim (`dahil` aramasında 0 sonuç) | tek | GEÇER |

## 1. Tur 2 bulguları: kapandı mı?

| Kod | Önem | Durum | Gerekçe |
|---|---|---|---|
| P1-11 s008 gelir/kâr çelişkisi | ORTA | KAPANDI | Yeni bağlam: 12 TL satış, 7 TL maliyet, 400 TL sabit gider. 3 cümle. "Kâr" ve "gelir" çelişmiyor. Yeni sorun: P2-22, P3-21 |
| P1-12 b10 `basit` yoğun | ORTA | KISMEN | "İkinci yol (parçalı gösterim)" etiketi eklendi. Madde sayısı 14, jeton sayısı ~205 (tur 2: ~200); kelime azalmadı. Bkz. P2-23 |
| P2-10 b12 `∅` ve ikinci fikir | ORTA | KAPANDI | `basit[2]`: "Çözüm kümesi **boş küme**dir: hiç elemanı olmayan küme. Boş küme ∅ ile yazılır." `terimler` var. Q3 artık k > 0 (`= 3`) yokluyor; Q2 k = 0, Q1 < 0. `x < −2 ya da x > 8` örneği `kitap`'a gitti. Kalan: P3-23 |
| P2-11 "yarı uzunluk" | ORTA | KAPANDI | Grep: yalnız dogrula notunda ("kaldırıldı"). b11 `basit[1]` "Tolerans (b10), orta noktadan uca uzaklıktır" |
| P2-12 ipucu merdiveni | DÜŞÜK | KAPANDI | b6 Q2 hint 2: "45 çözümde değilse ... solundaki tam sayılara bak". b6 Q3 hint 2: "Gelir gidere eşitken kâr var mı?". b12 Q3 hint 3 sonucu yazmıyor. Kalan: P3-25 |
| P2-13 s015 ve kontrol adımları | ORTA | KISMEN | s015 b13 ile aynı granülasyonda (14 adım, aynı sıra). Kontrol adımları çok işlemli: P3-24 |
| P2-14 s010 açıklamaları | DÜŞÜK | KAPANDI | "6 saatten kısa": "6 < x satırı x > 6 demektir; 4 saatte A 21 000 TL, B 19 000 TL ister, B ucuzdur." Gerçek dışı "27 000 saat" gitti; yerine "Her kiralama süresinde" (1 saatte A 12 000, B 7000). Matematik doğru |
| P2-15 s012 zorluk | DÜŞÜK | KAPANDI | zorluk 2. Dağılım 8/7/3 |
| P2-16 b6 üç fikir | ORTA | KISMEN | Numaralama tek dizi (1–10) oldu ve başlıklı maddeler eklendi; ama 13 → 17 madde ve hâlâ üç fikir. Bkz. P2-20 |
| P3-11 okuma notu sırası | DÜŞÜK | KAPANDI | b10 `basit[1]` not, ilk ondalık aralık `basit[5]`'ten önce. Not b10'da tek kez |
| P3-12 s017 "kesişim" | DÜŞÜK | KAPANDI | `puanlama_notu`: "kesim noktasından sonraki sırayı ... kesim noktasının soluna". Grep: "kesişim" yalnız dogrula notunda |
| P3-13 b6 Q3 soyut | DÜŞÜK | KAPANDI | "Bir büfede gelir 12x TL, gider 300 TL. Kâr için hangi eşitsizlik yazılır?" Somut |
| P3-14 b8 "Kontrol" etiketi | DÜŞÜK | KAPANDI | `basit[8]` artık "Grafikte:" diye başlıyor, kontrol etiketi yok |
| P3-15 b10 Q3 | DÜŞÜK | AÇIK | Q3 hâlâ parçalı + işaret çevirme. P2-23 uygulanmazsa kalır |

Tur 1'den kısmen açık kalanlar: P1-09 (ondalık not sırası) KAPANDI. P2-02 (tek işlem) KISMEN, P3-24'te. P2-06 (bağlamlı sorular) KAPANDI. P3-05 = P3-15, AÇIK. P3-06 (bulduğunu kontrol et alıştırması b4, b5, b8'de yok) KABUL.

## 2. İstenen özel değerlendirmeler

### 2.1 b12: kural ve ∅ net mi, örnek kuraldan önce mi?
- Sıra: `ornek` (tekne/iskele: 4 m, 1 m, 0 m, "−3 m uzakta denebilir mi?") bölümün başında. Sonra `basit[0]` "Uzaklık hiç eksi olmaz" bu örneğe dayanıyor. Örnek kuraldan ÖNCE geliyor.
- `|f(x)| = k` genel kuralı `basit[9]`'da, yani `= 5` ve `= −2` sayısal örneklerinden (`basit[6-8]`) SONRA. `< 0` ve `≥ 0` sonuçları ise önce açıklamayla verilip (`basit[2-3]`), yerine koyarak denemesi en sonda (`basit[10]`). Bu kabul edilebilir; küçük eksik P3-23'te.
- `∅` ve "boş küme" tanımı net: bold, tek cümlelik tanım, sembol ve `terimler` kaydı var. `ℝ` ayrıca tanımlı değil ("bütün gerçek sayılar" diye açıklanıyor); 9.1'den tanıdık, kabul.
- Kontrol soruları üç durumu yokluyor (`< 0`, `= 0`, `= 3`). `≥ 0` ve `> 0` ve `k < 0` kontrol sorusunda yok; yazılı soruda `≥ 0` var. Kabul.

### 2.2 b10: "İkinci yol" ayrımı yükü hafifletti mi?
- Hafifletti MI: kısmen. Etiket Mehmet Eren'e "burada yeni bir yol başlıyor" diyor ve numaralama 1-2-3, sonra 1-6 diye ayrışıyor. Bu işe yarıyor.
- Hafifletmedi: madde sayısı 14, jeton sayısı ~205 (el sayımı, semboller dâhil). Tur 2'de ~200 idi. "Kelime azaldı" ifadesi doğrulanamadı. Aynı ekranda hâlâ ondalık, okuma notu, kısa yol, kontrol ve altı adımlık parçalı yol var.
- Asimetri: ilk yol "Kısa yol:", ikincisi "İkinci yol". "Birinci yol (kısa)" ile simetri kurulursa ayrım daha belirgin olur.
- Okuma notu: tek kez (`basit[1]`), ilk ondalık aralıktan (`basit[5]`) önce. Doğru yerde. Notta örnek yok; "119,5 tek bir sayıdır" yeterli.

### 2.3 b6: başlıklı maddeler taranabilir mi, tek fikir mi?
- Taranabilir: kısmen. Başlıklar: "Kâr modeli üç adımda kurulur.", "Eşitsizliğin yönü:", "Tam sayı kuralı:", "Ters yön, zarar:", "Kontrol:". Hepsi düz metin; kalın ya da ayrı satır değil. Numaralar 1–10 kesintisiz, bu önceki "iki kez 1-3" sorununu çözdü.
- Tek fikir: HAYIR. Kâr modeli + kâr şartı + tam sayı kuralı + zarar (5, 6, 7'nin aynası olan 8, 9, 10). 17 madde, tur 2'den 4 fazla. Her madde kısa ama sayı arttı. Bkz. P2-20.
- Etiket çakışması: P2-21.

### 2.4 Terim birliği
| Terim | Kart | Banka | Sonuç |
|---|---|---|---|
| kesim noktası | b8 bold + `terimler`; b9, b13, flashcard 8-9 | s009 ve s010 çözüm "kesim noktası"; s017 `puanlama_notu` düzeldi | TUTARLI. "kesişir/kesişiyor" yalnız fiil (b8 kitap, b10 kitap, b13 kitap, s011 bağlam, s015 adım 14); terim değil, kabul |
| orta nokta | b11 bold + `terimler`; flashcard 11 | s012 hint ve çözüm | TUTARLI |
| tolerans | b10 bold + `terimler`; b11 `basit[1]` "orta noktadan uca uzaklık"; flashcard 11 | s012 çözüm adım 3 "Tolerans (orta noktadan uca uzaklık)" | TUTARLI. Eksik: b11'de "orta nokta = hedef ölçü" bağı yok (P3-26) |
| gider / maliyet | b6: "gidere maliyet de denir" | s008: "bir simidin maliyeti 7 TL", "sabit gider 400 TL" | ÇAKIŞIYOR (P2-22) |
| eşitsizliğin yönü | b4 `terimler`: işaretin eksi sayıyla dönmesi | b6 `basit[6]` etiketi başka anlamda | ÇAKIŞIYOR (P2-21) |

### 2.5 Banka s008, s010, s012, s015
- **s008 okunur mu?** Evet. Bağlam 3 cümle, en uzunu 15 kelime. Çeldiriciler: 80 (`aralik_uc`, öğretici: 960 = 960, kâr 0); 21 (`isaret_hatasi`: 12x − 400 + 7x < 0 → 19x < 400 → 21, açıklama doğru); 33 (400 ÷ 12 ≈ 33, maliyeti hiç saymamak) açıklaması yarım yanlış teşhis veriyor (P3-21). Çözüm 15 adım; okunur ama uzun (P3-24).
- **s010**: "Her kiralama süresinde" çeldiricisi öğretici ve gerçek hata modelini (sabit ücreti hesaba katmamak) yakalıyor. Açıklamalar ≤ 20 kelime. Çözümün 8-9. adımları dört işlemli (P3-24).
- **s012 zorluk 2**: uygun. Ondalık aritmetik (249,6 + 250,4) + dört çeldirici, b11'in tam sayılı kontrol sorularından daha ağır. Hint 3 işlemi veriyor, sonucu vermiyor.
- **s015 ↔ b13**: adım sırası aynı: içi sıfır yapan sayı, `x ≥` parçası, "x çıkar", "ekle", şart, `x <` parçası, "x ekle", "ekle", "böl", şart, kontrol, grafik. Tutarlı. Sıra tersine çevrilmiş (b13: önce atılan kök, s015: önce kabul edilen) ve bu aktarmayı güçlendiriyor.

### 2.6 İpucu merdiveni kart + banka
Her yerde 3 basamak. 1. basamak hiçbir yerde cevap vermiyor. 2. basamak yöntem veriyor, sonucu yazmıyor. 3. basamak ilk adımı sayıyla yapıyor, sonucu yazmıyor. Tek zayıf nokta: kalan tek adım çok küçük olan 3. basamaklar (b13 Q1: "−1 ≥ 2 ... doğru olup olmadığına bak"; b2 Q1: "2x = 40 oldu"; b11 Q1: "6 + 14 = 20. Şimdi 2'ye böl"). DÜŞÜK, P3-25.

### 2.7 Zorluk dağılımı
8/7/3 = %44 / %39 / %17. Hedefe uzaklık 6, 4, 2 puan; tolerans 10 puan. KABUL EDİLEBİLİR. Bir zorluk-2 sorusunu zorluk 1'e çekmek gerekmez; açık uçlu s016 zorluk 2 olarak kalabilir.

## 3. Yeni bulgular

Öncelik: önce anlamayı engelleyenler, sonra pedagoji, sonra biçim.

### P1: anlamayı engelleyenler
Yok.

### P2: pedagojik kalite

**P2-20 · ORTA · `konular` b6 `basit[0-16]`**
Sorun. 17 madde (tur 2: 13). Kâr modeli, kâr şartı, tam sayı kuralı ve zarar aynası (`basit[12-15]` = `basit[7-9]` yapısının tekrarı) tek ekranda. Tek fikir ilkesi yine ihlal: bölüm başlığı bile "Kâr, zarar ve tam sayı cevap" üç şey söylüyor. Etiketler düz metin olduğundan taramaya yardımcı olması panelin onları nasıl çizdiğine bağlı.
Öneri. (a) b6'yı ikiye böl: b6 "Kâr nasıl kurulur" (gelir, gider, kâr, kâr şartı; 1-7 adım), b6b "Tam sayı cevap: en az / en çok" (36 örneğiyle ">" ve "<" yan yana). (b) Bölünmeyecekse zarar aynasını (`basit[12-15]`) tek maddeye indir: "Zarar için k(x) < 0 kur; aynı adımlar x < 36 verir, en çok 35." ve kalan adımları flashcard 6'ya bırak. Başlıkları `**kalın**` yap.

**P2-21 · ORTA · `konular` b6 `basit[6]`**
Alıntı. "Eşitsizliğin yönü: kâr etmek k(x) > 0 demektir. Zarar etmek k(x) < 0 demektir."
Sorun. b4'te "**Eşitsizliğin yönü**" kalın terimdir: eksi sayıyla çarpınca/bölünce dönen işaret (`terimler` kaydı var). b6'da aynı söz başka şeyi, "kâr mı zarar mı" işaretini anlatıyor. Mehmet Eren için iki anlam.
Öneri. Etiketi "Kâr şartı:" yap ya da "Kâr mı zarar mı?". `basit[6]`: "Kâr etmek k(x) > 0 demektir. Zarar etmek k(x) < 0 demektir."

**P2-22 · ORTA · `sorular` s008 ↔ `konular` b6**
Sorun. (1) s008 gideri x'e bağlı kuruyor: gider = 400 + 7x (değişen maliyet). Kart b6 `basit`'te gider sabit (360 TL), değişen maliyet yalnız kitap katmanında (`m(x) = 300 000 + 1300x`). Yeni beceri kartta yok; hint 3 ("sabit gidere x simidin maliyetini ekle") bunu taşıyor. (2) b6 "gidere **maliyet** de denir" diyor. s008'de "maliyet" 7 TL (birim), "gider" 400 TL (sabit). Öğrenci "gider = maliyet = 400 mü, 7 mi?" diye takılır. Çözüm adım 2 "Gider (harcanan para): 400 + 7x" doğru ama kart tanımıyla çelişmiyor gibi görünüp öğrenciyi yönlendirmiyor.
Öneri. b6 `basit[0]`'a kısa bir madde ekle: "Gider iki parçadan olabilir: sabit gider ve her ürünün maliyeti. Toplam gider = sabit gider + maliyet · x." ya da bunu b6b'ye taşı. Alternatif: s008 bağlamında "her simidin hazırlık maliyeti" yerine "bir simidin üretim maliyeti" yaz ve sabit olana "sabit gider" de, kartta da bu ikiliyi kullan. Zorluk 2 olduğu için soru kalabilir.

**P2-23 · ORTA (kabul edilebilir) · `konular` b10 `basit`**
Sorun. Bkz. 2.2. Etiket yük hafifletmedi (14 madde, ~205 jeton).
Öneri. En küçük çözüm: "Kısa yol:" → "Birinci yol (kısa yol):" ve `basit[6]` kontrol maddesini ikinci yoldan SONRA taşı (sıra: birinci yol → ikinci yol → tek ortak kontrol). Ya da parçalı yolu (`basit[7-13]`) `kitap`'a taşı ve Q3'ü kısa yolun sağlamasına çevir (P3-15 de kapanır). Bu karar panelde süre ölçülmeden verilemez; öncelik bu kartın kullanıcıyla denenmesi.

### P3: biçim

**P3-21 · DÜŞÜK · `sorular` s008 seçenek "33" açıklaması**
Alıntı. "Kasaya giren 12 TL gelirdir, kâr değildir; her simidin 7 TL maliyeti de gidere eklenir."
Sorun. 33 = 400 ÷ 12'den gelir (maliyeti hiç saymamak). İlk yarım ("gelir, kâr değildir") eski sürümün teşhisi; bu hatayı açıklamıyor.
Öneri. "400 TL yalnız gelirle karşılaştırılmış; her simidin 7 TL maliyeti de gidere girer."

**P3-22 · DÜŞÜK · `konular` b11 `basit[1]`, b13 `basit[1]`**
"Tolerans (b10)" ve "b10'daki parçalı gösterimdir". `b10` iç kimlik; öğrenci böyle adlandırmaz. Öneri: "Tolerans (önceki bölümdeki hata payı)" ve "Bu, önceki bölümdeki parçalı gösterimdir". Panel `b10`'u başlık olarak gösteriyorsa kabul.

**P3-23 · DÜŞÜK · `konular` b12 `basit[9]` ve `yazilida.puan_ipucu`**
- `basit[9]` ("Kural: ...") 3 cümle ve `|f(x)| = k` genel biçimiyle soyut; `puan_ipucu` bunu kelimesi kelimesine tekrarlıyor. Öneri: `basit[9]`'u `|x − 3|` örnekli tut ("|x − 3| = k: k < 0 çözüm yok, k = 0 tek kök, k > 0 iki kök"), genel `f(x)` biçimini `kitap`'a bırak. `puan_ipucu`'nu kısa özetle ("Sağdaki sayıya bak: eksi → ∅, sıfır → tek kök, artı → iki kök") yenile.
- `< 0` ve `≥ 0` iddialarının sayıyla sınanması yalnız en sonda (`basit[10]`). Başa bir deneme eklenebilir: "x = 0 dene: |0 − 3| = 3, eksi değil."

**P3-24 · DÜŞÜK · çok işlemli kontrol adımları**
- s010 adım 8-9: her biri 4 işlem (iki firma × iki işlem). s011 adım 6-7: 4 değer. s016 adım 7-8, 9. s017 adım 13-14: 4 işlem. s001 adım 6: "60 + 25 + 25 = 110".
- s008: 15 adım; zorluk 2 çoktan seçmeli için en uzun çözümlerden biri (s015 14, s017 15 zorluk 3). Kontrol 10-15 altı adım.
- Öneri: kontrolü "a) A için, b) B için" diye iki adıma böl (s010, s017), s008'de 79 için tek satıra indir ("948 − 953 = −5, zarar var") ya da kontrolü yalnız 79 ve 80 için iki adımda ver. Zorunlu değil; kabul edilebilir.

**P3-25 · DÜŞÜK · 3. basamakta bir adım kalan ipuçları**
b13 Q1 hint 3 ("−1 ≥ 2 ... doğru olup olmadığına bak") cevabı pratikte veriyor. b13 Q2 aynı anda iki iş istiyor (şart + yerine koyma); cevap iki parçalı. Öneri: b13 Q1 hint 3: "Şartı sayıyla yaz: −1, 2'den büyük ya da eşit mi?"; b13 Q2'yi ikiye böl ya da sorudan "Yerine koyarak da kontrol et"i kaldır.

**P3-26 · DÜŞÜK · `konular` b11 `basit[1]`**
"Orta nokta = b10'daki hedef ölçü" bağı yok; s012 hint 1 bunu yapıyor ama kartta yok. Öneri: "Boru örneğinde 120 hedefti; aralığın ortası hep hedeftir."

## Doğrulanan, değişiklik gerekmeyen noktalar
- "kesim noktası" isim olarak tek; "kesişim" yok.
- "yarı uzunluk", "tepe noktası", "simetri ekseni": 0.
- "dâhil": tek biçim.
- Azarlama ve 2. tekil kişi kalıbı yok.
- Rubrik toplamları s016 10, s017 15, s018 15.
- Kontrol sorusu sayısı her bölümde 2-3.
- Flashcard 11 ve 14 b10, b11 ile aynı dil ("tolerans d", "orta nokta c").

## Ölçülemeyen ya da örnekleme yapılan ölçütler
- Ortalama cümle uzunluğu: örneklem; tam sayım yok.
- b10 ve b6 okuma süresi (5 dakika): jeton sayısına dayalı tahmin; gerçek süre ölçülmedi.
- Panel görünümü: başlıklı maddelerin kalın ya da ayrı satır olarak görünüp görünmediği, `baglam` alanında satır sonu, görülmedi.
- Çeldirici teşhislerinin öğretici gücü pedagojik muhakemeye dayanıyor; öğrencinin gerçek hata dağılımı bilinmiyor.
- Kitap sayfa numaraları yeniden doğrulanmadı (dogrula #29 kapalı).
