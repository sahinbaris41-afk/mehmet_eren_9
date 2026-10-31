# Pedagoji denetimi: 9. sınıf Matematik, Ünite 3, K1 (9.3.1), tur 3

Denetçi: pedagoji-denetcisi (salt okur). İçerik dosyası değiştirilmedi. Tarih: 2026-10-31.
Kapsam: `dersler/matematik/konular/matematik-u3-k1.json` (surum 3: 11 bölüm, 31 kontrol sorusu, 12 flashcard) ve `dersler/matematik/sorular/matematik-u3-k1.json` (surum 3: 19 soru). Önceki: `denetim/pedagoji_matematik_u3k1_tur2.md`, `denetim/dogruluk_matematik_u3k1_tur2.md`.

## KARAR: GEÇER

Tur 2'nin tek YÜKSEK bulgusu (P1-11, b10 aşırı yük) kapandı. 6 ORTA bulgunun 6'sı kapandı. 7 DÜŞÜK bulgudan 6'sı kapandı, 1'i (P3-11) kısmen. Yeni YÜKSEK ya da ORTA bulgu yok. Yeni bulguların hepsi DÜŞÜK ve biçimsel (N3-01..N3-06); yayın engeli değil, bir sonraki içerik dokunuşunda toplu düzeltilebilir.

## Yöntem ve sınırlar
- İki dosya baştan sona okundu (konu kartı 1152 satır, banka 1290 satır).
- Grep: sadeleş, atınca, doğrusal, m(A), m(B), m(C), Pisagor, hipotenüs, olgu, kavramsal, bağlamında, nitelik, süreç bileşeni, dikkatsiz, "basit bir hata", şapkasız "dahil", paylaştırdın: iki dosyada 0 isabet. (Desene eklenen "ispatla" yalnız meşru ispat sözcüklerinde eşleşti.)
- Kelime sayımı ELLE, boşlukla ayrılan her parça (sayı ve simge dâhil) bir birim sayılarak yapıldı. Hata payı ±%10. Sayılar tahmin değil, tek tek sayımdır; ama otomatik sayaç kullanılmadı.
- Cümle uzunluğu örneklemi: kart basit katmanı b2, b3, b5, b6, b7, b8, b9, b10, b11 (b10 ve b11 tam, öbürleri taramalı); kitap katmanı b1-b11 taramalı; banka bağlam, kök, çeldirici açıklamaları ve çözüm adımları hepsi.
- Ölçülemeyen: panelde gerçek görünüm ve okuma süresi; kitap sayfa numaralarının doğruluğu; üreteçler ve `panel/data/matematik.js`.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Ortalama cümle (basit) | ~10 kelime (b10: 215 birim / ~21 cümle; b11: 194 / ~19) | ≤ 12 | GEÇER |
| Cümle > 20 kelime (basit) | Sözcük olarak 0. Simge sayılırsa 2 sınırda: b10 basit[7] (21 birim, 9 sayılık liste), b10 basit[9] (24 birim, 3 eşitsizlik zinciri) | 0 | GEÇER (N3-03 not) |
| Kitap katmanı uzun cümle | Taranan 11 bölümde yalnız b9 kitap[1] formül cümlesi (~36 birim, 27'si formül). Tur 2'deki b8, b5, b10 örnekleri bölünmüş | ≤ 20 | GEÇER (N3-03) |
| Paragraf ≤ 3 cümle | Kart basit 0 ihlal. Banka: s016 ipucu 2 dört cümle (N3-02) | 0 | GEÇER (1 küçük istisna) |
| Bölüm başına tek fikir | b10 yalnız "aralık", b11 yalnız "açıyla daralt". b8: ters kural + geniş açı sonucu (aynı fikrin parçası) | tek | GEÇER |
| 5 dk (kelime) | b10 basit ~215 + örnek ~38 + 3 soru; b11 basit ~194 + örnek ~39 + 3 soru; b2 ~200, b5 ~190 | ~5 dk | GEÇER |
| Kuraldan önce somut örnek | 11/11 (`ornek` alanı kuraldan önce). Tek istisna: b3 basit[5] kuralı örneksiz tek cümle (N3-04) | 11/11 | GEÇER |
| Yerel bağlam (kart) | 11/11 yerel ya da günlük (tersane 3, deniz 3, Gölcük 2, okul 2, futbol 1) | ≥ %50 | GEÇER |
| Yerel bağlam (banka) | 11/19 = %58 (s004, 006, 008, 009, 010, 011, 013, 014, 015, 017, 018) | ≥ %50 | GEÇER |
| Soyut kelime | 0 | 0 | GEÇER |
| Terim kalın + tanım | Yeni: geniş açı (b8, `terimler`'de), kesişim (b11, `terimler`'de) kalın ve tanımlı. b10 `terimler` boş; "dâhil" tanımsız ama gündelik sözcük (N3-05) | hepsi | GEÇER |
| Kontrol sorusu sayısı | 2,3,3,2,3,3,3,3,3,3,3 = 31 | 2-3 | GEÇER |
| Kontrol sorusu zorluk 1 | b3 Q2 ve b8 Q2-Q3 artık basit'te öğretilene dayanıyor | hepsi | GEÇER |
| İpucu 1. basamak cevap vermiyor | Hepsinde yön gösteriyor | 0 | GEÇER |
| İpucu 3. basamak sonuç/şık vermiyor | b7 Q1 ve s011 düzeldi. Kalan: 5 yerde yarım sonuç (N3-01) | 0 | GEÇER (DÜŞÜK) |
| Açık uçlu ipucu tüm şıkları kapsıyor | s017 ç, s018 d, s019 ç kapsanıyor | hepsi | GEÇER |
| Zorluk dağılımı | 9/7/3 = %47/%37/%16 | %50/35/15 ± 10 | GEÇER |
| Yanlış cevap dili | Azarlama yok, 2. tekil yok. Kart `yanlis_aciklama` 31/31 ve banka çeldirici açıklamaları tek cümle | kişisiz, tek cümle | GEÇER |
| Matematik çözümü | Numaralı, adım başına tek işlem. Kontrol adımları ayrı numaralı | tek işlem | GEÇER |
| Kart ↔ banka dil | bumba, güverte, geniş açı, m(ABC), \|AB\|, çıkar, kesişim, doğru açı, karşı kenar: aynı | aynı | GEÇER (§3) |

## 1. Tur 2 bulgularının durumu

| Kod | Tur 2 sorun | Durum | Kanıt |
|---|---|---|---|
| P1-11 | b10 iki fikir, ~380 kelime, kontrol soruları açıyla daraltmayı yoklamıyor | KAPANDI | b10 (basit 10 madde, ~215 birim) yalnız aralık + tam sayı sayımı; Q1 aralık, Q2 tam sayı, Q3 uç dâhil mi. b11 (10 madde, ~194 birim) yalnız açıyla daraltma; Q1 küçük açı kuralı, Q2 kesişim, Q3 açı → karşı kenar eşlemesi. Numaralama her bölümde 1'den başlıyor. s015 → b10, s016/s018 → "b10, b11" |
| P2-11 | b3 Q2, b8 Q2-Q3, s012 basit'te öğretilmeyeni soruyor | KAPANDI | b8 basit[5]: "90°'den büyük açıya **geniş açı** denir. Üçgende 90° ya da daha büyük bir açı varsa öbür iki açı küçük kalır. En büyük açı odur; karşısındaki kenar en uzun kenardır." `terimler`'de geniş açı var. b3 basit[5]: "Açılar x'li verilirse üçünü topla, 180°'e eşitle ve x'i bul." s012 ipucu 2 bu cümleyi aynen kullanıyor. Kalıntı: N3-04 |
| P2-12 | b5 ispat 3. satır sıkışık; "atınca / sadeleştir / çıkar"; m(A) gösterimi; s019 rubrik gerekçesi kartta yok | KAPANDI | b5 basit[5-9]: 4 numaralı satır, hepsi m(BAC), m(ABC), m(ACB), m(ACD). Satır 3 yalnız eşitleme ("İki toplam da 180°'dir; o hâlde birbirine eşittir"), satır 4 yalnız çıkarma ("İki yandan m(ACB)'yi çıkar"). s019: ipucu 2 "iki eşitliği birleştirmenin yolunu düşün", çözüm 5 "İki yandan m(ACB)'yi çıkar", rubrik 5 "iki yandan m(ACB)'yi çıkararak", rubrik 6 "iki toplam da 180° olduğu için birbirine eşittir". Grep: sadeleş, atınca, doğrusal, m(A) 0 isabet. Kart satır 3 ve s019 çözüm 3 söz söze aynı. Küçük pürüz: rubrik 6 "ortak açı" diyor, kartta bu söz yok (N3-06) |
| P2-13 | Gösterim okutulmuyor; b6'da \|AB\| = \|AC\| yok | KAPANDI | b2 Q3: "m(ABC) hangi köşedeki açının ölçüsüdür?" (cevap B, 3 basamaklı merdiven). b6 basit[0]: "\|AB\| = \|AC\| yazılırsa AB ve AC kenarları eşit uzunluktadır." |
| P2-14 | b8 kitap[6] "Pisagor" geliştirici notu | KAPANDI | Eski madde yok. b8 kitap[2] yerine: "Sonuç iç açılar toplamından ve açı-kenar bağıntısından çıkar; başka kural gerekmez." Pisagor, hipotenüs iki dosyada 0 isabet |
| P2-15 | 3. basamak seçeneği eliyor (b7 Q1, s011) | KAPANDI | b7 Q1 h3: "AB'de A var mı? AC'de var mı? BC'de var mı? Her biri için yaz." s011 h3: "Kenarları küçükten büyüğe, harfleriyle yaz: \|BC\|, \|AB\|, \|AC\|. Her birinin karşı köşesini sırayla bul." İkisi de sonucu ya da şıkkı vermiyor. b8 Q1 h3 artık "BC = 8" demiyor |
| P2-16 | Fark sınırında "neden 9" yok | KAPANDI | b10 basit[2]: "Bilinen iki kenardan uzun olanı seç; kısa olan için eşitsizlik hep doğrudur. Uzun olan 9 km; ... 9 < 5 + x." b11 aynı yolu izliyor |
| P3-11 | 3. basamak sonucu neredeyse veriyor | KISMEN | Düzelenler: b1 Q1, b4, b6 Q1-Q3, b9 Q1-Q3, s001, s002 ("6 üçgenle hepsi arasındaki farkı yaz."), s009 h1, s019 h2. Kalan 5 yerde yarım sonuç: N3-01 |
| P3-12 | Uzun cümle, "tek cümle" ihlali | KAPANDI (bir yeni küçük: N3-02) | s016 ipucu 2 bölündü (kısa cümleler). s006 134° açıklaması: "62° dış açıya komşu olduğu için toplanmaz, toplanacaklar 46° ve 72°'dir." (13 kelime). s011 şık 3 tek cümle (~16). s003 çözüm 5 ve 6 ayrıldı |
| P3-13 | bumba/güverte kartta ve bankada farklı tanım | KAPANDI | b3 ornek ve s004 aynı: "bumba (yelkenin altındaki, direğe bağlı yatay çubuk)", "güverteye (teknenin üst döşemesi)" |
| P3-14 | s017 "pergel vinç" | KAPANDI | s017: "Gölcük'teki bir tersanede bir vinç çalışıyor." |
| P3-15 | b2 "ikisi" belirsiz | KAPANDI | b2 basit[3]: "Kartta ikisini de kullanacağız: 'A açısı' ve m(BAC)." |
| P3-16 | Kitap katmanı uzun cümleler | KAPANDI | b8, b5, b10 kitap cümleleri bölünmüş (b8 kitap[0] 18 kelime, b5 kitap[2] 3 kısa cümle, b10 kitap[0] 14+16). Kalan: yalnız b9 kitap[1] formül cümlesi (N3-03) |
| P3-17 | s019 puanlama adaleti, "doğrusal" | KAPANDI | Rubrikte "B, C, D doğrusal" yok; "doğru açı" kullanılıyor. Seçme/kurulum ayrımı `puanlama_notu`'nda: "Dış açı seçimi yanlışsa ama kurulum seçilen açıyla tutarlıysa kurulum puanı verilir." |
| D2-01 | Pisagor/hipotenüs öğrenciye görünen metinde | KAPANDI | `kitap` ve `dogrula` alanlarında 0 isabet; dogrula[1] "dik üçgende kenar bağıntıları" diyor |
| D2-02 | bumba "direk" diye tanımlı | KAPANDI | Bkz. P3-13 |
| D2-03 | docs #34 flashcard numarası | KAPANDI | `docs/dogrula.md` #34 satırında "flashcard 7" yazıyor. Satır 52'deki "flashcard 6" ayrı bir madde, bu turda incelenmedi |

## 2. Özel sorulara cevaplar

**b10 ve b11 tek fikir mi?** Evet.
- b10: "x için iki sınır koy, kesişimini yaz, tam sayıları say." Açı bilgisi hiç geçmiyor. Kontrol 1-2 sınırı ve içeriden bir değeri deniyor.
- b11: "Aralık hazır; açı bilgisinden bir sınır daha çıkar, kesişimini al." Toplam/fark adımları 2 madde, geri kalan 8 madde açıya ayrılmış. Plan cümlesi ("Önce üçgen eşitsizliği, sonra açı") ekranda yol haritası veriyor.

**5 dakika sınırı (kelime):** Evet.

| Bölüm | basit (birim) | ornek | kontrol soruları | Not |
|---|---|---|---|---|
| b10 (tur 2: ~380) | ~215 | ~38 | 3 | 10 madde, madde başına ort. ~21 birim, kelime olarak ~12 |
| b11 | ~194 | ~39 | 3 | 10 madde, ort. ~19 birim |
| b2 (karşılaştırma) | ~200 | ~35 | 3 | tur 2 ile aynı sınıf |

Her iki bölüm de b2 ve b5 ile aynı hacimde. Tur 2'deki 380'in yaklaşık yarısı.

**b11 kontrol soruları açıyla daraltma becerisini yokluyor mu?** Evet, üç ayrı parçayı yokluyor ve hepsi zorluk 1.

| Soru | Yokladığı parça |
|---|---|
| Q1: küçük açının karşısındaki kenar büyük mü, küçük mü? | Kural yönü (makas benzetmesiyle, 3 basamaklı) |
| Q2: 4 < x < 16 ve x < 10, ortak aralık? | Kesişim (alt sınır birinci şarttan, üst sınır ikinciden) |
| Q3: B açısı A'dan küçük; \|AC\| ile \|BC\|'den hangisi kısa? | Açı karşılaştırmasını kenar karşılaştırmasına çevirme (x < 10'un kaynağı) |

Üç parçanın birleşimi (kenarlar + açı → daraltılmış aralık) kart içinde tek soruda yok; bu birleşik beceri zorluk 3 olan s016 ve s018'de ölçülüyor. Zorluk 1 kuralı gereği kontrol sorusuna birleşik soru koymak doğru olmaz. Eksik sayılmaz. Öneri gerekmiyor.

**b5 ispat ↔ s019 ↔ rubrik: aynı dil mi?** Evet. Kullanılan sözcükler her üçünde: "iç açılar toplamı", "doğru açı oluşturur", "iki toplam da 180°'dir; o hâlde birbirine eşittir", "iki yandan m(ACB)'yi çıkar". "Sadeleştir", "atınca", "doğrusal", m(A) hiçbir yerde yok. Tek fark: rubrik 6 "ortak açı" diyor, kart demiyor (N3-06).

**3. basamak ipuçları sonucu ya da şıkkı veriyor mu?**
- b7 Q1 h3 ve s011 h3: HAYIR, düzeltildi. İkisi de öğrenciden yazmasını/bulmasını istiyor.
- s019 h3 yalnız birinci eşitliği yazıyor, ispatın geri kalanını vermiyor. s017 h3 denklemi kuruyor, çözmüyor. s018 h3 farkı veriyor, toplamı ve aralığı bırakıyor.
- Yarım sonuç veren 5 yer: N3-01.

**Kart–banka terim tutarlılığı:**

| Terim | Kart | Banka | Durum |
|---|---|---|---|
| bumba, güverte | b3 ornek | s004 | Aynı tanım |
| geniş açı | b8 basit[5], terimler | s012 (ipucu 2 kart cümlesini aynen alıyor, şık açıklamaları) | Tutarlı |
| m(ABC), m(BAC), \|AB\| | b2 terimler | s003, s006, s008-s012, s017-s019 | Tutarlı. Kartta m(A) kalmadı |
| çıkar (eşitlik işlemi) | b1, b3, b5, b10 | tüm çözüm adımları | Tek sözcük |
| kesişim | b11 terimler | s016 çözüm 6, s018 çözüm 6 | Tutarlı. s015 kullanmıyor (b10'a bağlı, doğru) |
| karşı kenar / karşısındaki | b7 terimler | s010, s011, s016-s018 | Tutarlı |
| doğru açı | b1 terimler | s003, s009, s019 | Tutarlı |
| tepe/taban açısı | b6 | s008, s009 | Tutarlı |

**Yeni sorun var mı?** Uzun cümle, 3 cümleyi aşan paragraf, tanımsız terim, yerel bağlam ve zorluk dağılımı bakımından yeni ORTA/YÜKSEK sorun yok. Altı DÜŞÜK not aşağıda.

## 3. Yeni bulgular

Hepsi DÜŞÜK. Öncelik: anlamayı etkileyenden biçime.

**N3-01 · DÜŞÜK · 3. basamak yarım sonuç veriyor (5 yer)**
- `konular` b3 `kontrol_sorulari[2].ipuclari[2]`: "90° + 90° = 180°; şimdi 180° − 180° işlemini yap." Cevap "0° kalır" neredeyse tam görünüyor.
- b7 `kontrol_sorulari[2].ipuclari[2]`: "A'nın karşısı BC; şimdi B'nin karşısını yaz." Cevabın yarısı (BC) veriliyor.
- b10 Q1 h3: "Fark 8 − 3 = 5; şimdi toplamı bul ve aralığı yaz." Alt sınır veriliyor.
- b10 Q2 h3: "4'ten büyük ilk tam sayı 5; şimdi 9'dan küçük son tam sayıyı bul." Cevabın ilk sayısı veriliyor.
- b11 Q2 h3: "Alt sınır yalnız birinci şartta var: 4. Şimdi üst sınırları, 16 ile 10'u karşılaştır." Cevabın yarısı (4) veriliyor.
Hepsi "üçüncü basamak ilk adımı yapar" kuralına uyuyor ve cevabın tamamını vermiyor. Sınırda olanlar b3 Q3 ve b7 Q3. Öneri (isteğe bağlı): b3 Q3 h3 "İki dik açıyı topla, sonucu 180°'den çıkar; kalanı yaz." b7 Q3 h3 "A'nın karşısına bak, B'nin karşısına bak; ikisini de yaz." b10 Q2 h3 "4'ün hemen sağındaki tam sayıdan başla, 9'a gelince dur; yaz."

**N3-02 · DÜŞÜK · `sorular` s016 `ipuclari[1]` dört cümle**
"Önce üçgen eşitsizliğiyle aralığı yaz. Sonra iki açının karşı kenarlarını bul. Büyük açı karşısında büyük kenar kuralını uygula. En son iki şartın kesişimini al." Paragraf kuralı ≤ 3 cümle. Öneri: iki cümleye indir, ör. "Önce üçgen eşitsizliğiyle aralığı yaz. Sonra açıların karşı kenarlarına bak ve iki şartın kesişimini al."

**N3-03 · DÜŞÜK · simge yoğun cümleler**
- b10 basit[7]: "Uzunluğun tam sayı olması istenirse 4 ile 14 arasındaki tam sayılar alınır: 5, 6, 7, 8, 9, 10, 11, 12, 13." (21 birim, 12 sözcük + 9 sayı.)
- b10 basit[9] Kontrol 2: üç eşitsizlik zinciri tek cümlede (24 birim).
- b9 `kitap[1]` ikinci cümle: üç çift eşitsizlik formülü (~36 birim, 27'si formül).
Sözcük sayısı eşiğin altında, ama öğrenci için okuma yükü. Öneri: b10 basit[9]'u iki cümleye böl ("x = 10 dene. 5 + 9 = 14 > 10 ve 5 + 10 = 15 > 9; 9 + 10 = 19 > 5 de sağlanıyor."); b9 kitap formüllerini üç ayrı satıra aç.

**N3-04 · DÜŞÜK · `konular` b3 basit[5] örneksiz kural**
"Açılar x'li verilirse üçünü topla, 180°'e eşitle ve x'i bul." Kural cümlesi, hemen yanında örnek yok (örnek yalnız kitap[3-8]'de ve yazılıda). Q2 (x, x, 2x) bu cümlenin ardından geliyor. "Önce örnek, sonra kural" ilkesi bu cümlede eksik. Öneri: cümleye kısa bir örnek ekle: "Örnek: x + x + 2x = 180°, yani 4x = 180°." Böylece Q2 ipucu 3 de kopyalanmış olmaz.

**N3-05 · DÜŞÜK · "dâhil" tanımsız, b10 `terimler` boş**
b10 basit[6]: "Sınırlar dâhil değildir." ve Q2/Q3 "dâhil mi" diyor. Sözcük sınıf düzeyinde bilinir ama 9.2.3'te "x ≤ ..." ile çalışmış bir öğrenci için bile "dâhil = aralığa girer" tanımı faydalı. Öneri: basit[6] "Sınırlar dâhil değildir, yani aralığa girmez."

**N3-06 · DÜŞÜK · `sorular` s019 rubrik 6 "ortak açı"**
Rubrik: "iki toplam da 180° olduğu için birbirine eşittir, ortak açı iki yandan çıkarılır". Kart ve çözüm "ortak açı" demiyor; yalnız `kitap[1]`'de var. Öneri: rubrikte "m(ACB)'yi iki yandan çıkarma" yaz ya da b5 basit[9]'a "(ortak açı)" ekle.

## 4. Korunacak iyi uygulamalar
- b10 ve b11 bölünmesi: b11 Q3 ve s016-s018 arasında doğal merdiven var (parça → birleşik).
- b11 Kontrol 1: "x = 10 dene... A ve B'deki açılar eşit çıkar; ama B açısı küçük verilmişti." Hem sınır hem açı mantığı.
- b5 dört satırlık ispat ile s019 çözümü ve rubriği birebir eşleşiyor.
- b7 Q1 ve s011 h3 artık "yaz" ve "bul" fiilleriyle öğrenciyi çalıştırıyor.
- Çeldirici açıklamaları kişisiz, tek cümle, hataya göre etiketli; azarlama yok.
- Yerel bağlam oranı kartta %100, bankada %58; b11 halı saha örneği futbol bağlamını da kullanıyor.

## 5. Bittiğinde özet
- Rapor: `C:\projeler\mehmet_eren_9\denetim\pedagoji_matematik_u3k1_tur3.md`. Karar: GEÇER (yeni bulgular yalnız DÜŞÜK).
- Ölçülemeyen/örneklem: kelime sayımları elle (±%10); kart basit katmanı b10, b11 tam, öbürleri tarama; panel görünümü ve okuma süresi ölçülmedi; kitap sayfa doğruluğu ve üreteçler denetlenmedi.
