# Üreteç denetimi · Matematik Ünite 1 · Tur 1 (2026-10-26)

Denetçi: dogruluk-denetcisi (salt okur) + pedagoji-denetcisi ölçütleri.
Denetlenen: `panel/motor/uretecler/matematik.js` (878 satır, 12 üreteç). Örnekler: `denetim/uretec_ornekleri_u1.md`. Kartlar: `dersler/matematik/konular/matematik-u1-k1..k4.json`. Teyit: `denetim/pdf_teyit_u1.md`, kitap metni s.50–54.
Not: `kare_acilim` → `kare_dagitma` yeniden adlandırması bulgu sayılmadı.

Yöntem: Her üretecin parametre uzayı koddan çıkarıldı. Her yanlış şık formülü doğru cevapla cebirsel olarak karşılaştırıldı ("hangi parametrede eşit olur?"). Örnek tohumlar bu çıkarımları doğrulamak için kullanıldı.

Motor davranışı: `panel/motor/soru.js` satır 30–31 havuzu tekilleştiriyor. **Doğru cevapla metni birebir aynı** olan yanlışları da atıyor (`gorulen = new Set([g.dogru])`). Bu yüzden iki ayrı tür var:
- **Değerce eşit, metni farklı** (ör. `√80` ile `4√5`): filtreden geçer. Öğrenci **iki doğru şık** görür. Gerçek yayın engelidir.
- **Metni birebir aynı**: öğrenciye ulaşmaz. Ancak görevdeki kurala göre KRİTİK sayıldı: havuz sözleşmesini bozuyor ve havuzu daraltıyor.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 5 | U1-01, U1-02 (değerce eşit, öğrenci iki doğru görür) · U1-03, U1-04, U1-05 (metni eşit, motor filtreliyor) |
| ÖNEMLİ | 10 | U1-06 … U1-15 |
| KÜÇÜK | 8 | U1-16 … U1-23 |

Hiçbir üreteçte **doğru şık yanlış hesaplanmamış**. 12 üretecin hepsinde `dogru` metni, parametre uzayının tamamında matematiksel olarak doğru. Kontrol edilen sınır vakaları:
- sıfır ve negatif üs, a⁰ = 1, a¹ = a;
- tam kare kök içi (m = 1), ∛ ile √ ayrımı, en büyük tam küp çarpan (32 = 8·4, 243 = 27·9);
- b = 1 eşleniği, payda 1 (`oranYaz`);
- boş kesişim, tek nokta {x₂}, uç teması, sonsuz uçlar;
- c = 0 için |x| ≤ d, dış bölge;
- 0 ∈ ℕ (`uyeMi` p ≥ 0, kitap s.39 ile uyumlu);
- ℚ′ çarpımında √p·√(pk²) = pk;
- 5+ basamakta boşluklu gruplama (10 609).

Sorunların hepsi **çeldirici havuzunda**, etiketlerde, gösterimde ve anlatım dilinde.

---

## KRİTİK

### U1-01 · mat-u1-ussun-ussu · değerce eşit çeldirici (iki doğru şık)
- **Konum:** `gen`, satır 150 (`m >= 1 && n >= 2 && !k` dalı).
- **Örnek:** Hedefli parametre a = 2, m = 1, n = 2, k = 0 (olasılık ≈ 1/288). 300 tohumda çıkmamış olabilir. Test yalnız metni karşılaştırdığı için bunu yakalamaz.
- **Sorun:** Kök (2¹)². Doğru şık `2²`. Çeldirici `tam(2¹ · 2)` = `4`. İkisi de 4'e eşit, metinleri farklı. Motor filtresi geçiriyor, öğrenci iki doğru şık görür. Eşitlik koşulu aᵐ·n = aᵐⁿ. Verilen aralıkta yalnız (a, m, n) = (2, 1, 2) bunu sağlar.
- **ÖNERİLEN DÜZELTME:**
  ```js
  if (m >= 1 && n >= 2 && !k && Math.pow(a, m) * n !== Math.pow(a, m * n)) yanlislar.push(...)
  ```
  Kalıcı çözüm: üslü üreteçlere ortak bir değer süzgeci ekle. Her yanlışı `[taban, üs]` olarak üret. `taban^üs` değeri `a^e` değerine eşitse çeldiriciyi atma, yani havuza almama. BigInt kesirle karşılaştır. `usSay` ve `carpUs` zaten var.

### U1-02 · mat-u1-kok-toplama · değerce eşit `√S` çeldiricisi (iki doğru şık)
- **Konum:** `gen`, satır 325.
- **Örnek:** Tohum 11 {"Ns":[80,45,45],"ss":[1,-1,1]}. Doğru şık `4√5`. Çeldirici `√80` = 4√5.
- **Sorun:** S = Σ sᵢNᵢ = m·Σ sᵢpᵢ². Σ sᵢpᵢ² = C² olduğunda √S = C√m olur, yani doğru cevabın sadeleşmemiş hâli. Üç terimli +,−,+ dizisinde (p₂ − p₁)(p₂ − p₃) = 0 iken bu her zaman olur (p₂ = p₁ ya da p₂ = p₃).
- **ÖNERİLEN DÜZELTME:**
  ```js
  if (S > 0 && S !== C * C * m) yanlislar.push(y("√" + S, ...))
  ```
  Ayrıca U1-16'daki tekrar eden terim düzeltmesi bu durumu büyük ölçüde ortadan kaldırır.

### U1-03 · mat-u1-uslu-carpma-bolme · doğruya metnen eşit çeldiriciler
- **Konum:** `gen`, satır 94–104.
- **Örnek:** Tohum 3 (a = 7, m = −3, n = 1, p = −2, e = 0): `taban_carpma` "1" = doğru "1".
- **Sorun:** Eşitlik koşulları:
  - `taban_carpma` usS(a², e): e = 0 iken.
  - `isaret_hatasi` m + n + p: p = 0 iken.
  - `us_carpma` m·n − p: m = n = 0 ya da m = n = 2 iken.
  - `isaret_hatasi` |m| + |n| − |p|: işaretlerin sonucu değiştirmediği durumlarda. Ör. m = −1, n = 2, p = −1 → ikisi de 2.
- **Etki:** Motor bunları siliyor, öğrenciye ulaşmıyor. Ancak havuz 3 geçerli çeldiricinin altına inebilir. Açıklama da yanlış hatayı anlatırdı.
- **ÖNERİLEN DÜZELTME:** Her `y(usS(a, X), …)` çağrısından önce `X !== e` koşulunu ekle. Taban çarpma için `e !== 0` ekle. Kısa yol: `return` öncesinde
  ```js
  yanlislar = yanlislar.filter(w => w.metin !== usS(a, e))
  ```
  Ardından havuzda en az 3 tekil eleman kaldığını `uretecDene` içinde assert et.

### U1-04 · mat-u1-ussun-ussu · doğruya metnen eşit çeldiriciler
- **Konum:** `gen`, satır 141–149.
- **Örnek:**
  - Tohum 0 (m = −2, n = −1): `isaret_hatasi` `3²` = doğru `3²`.
  - Tohum 1 (e = 0): `taban_carpma` "1" = doğru.
  - Tohum 3 (n = 0): `isaret_hatasi` "1" = doğru.
- **Sorun:** Eşitlik koşulları:
  - `isaret_hatasi` |m·n| + k: m·n ≥ 0 olduğunda her zaman (iki üs de negatifse ya da biri 0 ise).
  - `taban_carpma`: e = 0 iken.
  - `us_carpma` m + n + k: m = n = 2 ya da m = n = 0 iken.
  - `islem_hatasi` mⁿ + k: m = n = 2 iken.
  - `us_carpma` m·n·k: m·n·k = m·n + k iken (ör. m = 1, n = 2, k = 2).
- **ÖNERİLEN DÜZELTME:** U1-03 ile aynı süzgeç. `isaret_hatasi` dalının koşulu `m * n < 0` olmalı. "İşaret kaybı" ancak çarpım negatifse sonucu değiştirir.

### U1-05 · mat-u1-ozdeslik-hesap (carpim) · b = 2'de metnen eşit çeldirici
- **Konum:** `gen`, satır 789.
- **Örnek:** b4 = 2, ör. 62 · 58. Çeldirici t² − 2·2 = t² − 4, doğru cevapla aynı.
- **Sorun:** "b'nin karesini almadın" çeldiricisi b = 2'de doğru cevaba eşit oluyor (2·2 = 2²). Motor siliyor, ama açıklama anlamsız: "b² = 2² = 4".
- **ÖNERİLEN DÜZELTME:**
  ```js
  if (b4 !== 2) yanlislar.push(y(tam(t2 - 2 * b4), ...))
  ```
  Alternatif: b4 aralığını `pick(r, [1, 3, 4])` yap.

---

## ÖNEMLİ

### U1-06 · Gösterim kitapla uyumsuz: R, N, Z, Q′
- **Konum:**
  - `mat-u1-aralik-mutlak`, satır 534, 538, 586: `"x ∈ R"`.
  - `mat-u1-kapalilik-karsit`, satır 683 `KUME_AD` ve `onermeYaz`, `ipuclari`, `cozum`: `N`, `Z`, `Q′`.
- **Örnek:** Aralık-mutlak tohum 0, 1, 2. Kapalılık tohum 0, 1, 7: "1 − 6 = −5 ∉ N".
- **Sorun:** Kitap ℝ, ℕ, ℤ, ℚ′ kullanıyor (s.39, s.54, s.65; `pdf_teyit_u1.md`). Öğrenci yazılıda kitabın sembolünü görecek.
- **ÖNERİLEN DÜZELTME:**
  - Üç kökte `"x ∈ R"` yerine `"x ∈ ℝ"` yaz.
  - Kapalılık üretecinde `S` iç anahtar olarak kalsın. Ekrana basılan her yerde sembol tablosu kullan:
    ```js
    const SEMBOL = { N: "ℕ", Z: "ℤ", "Q′": "ℚ′" };
    ```
  - `KUME_AD` değerlerini "Doğal sayılar kümesi (ℕ)" biçimine çevir.
  - `onermeYaz` içinde `o.S` yerine `SEMBOL[o.S]` kullan. İpucu 3 ve çözüm adımlarındaki `S` için de aynısını yap.
  - Kart `matematik-u1-k2.json` b5 `ornek_cevap[3]` da "x ∈ R" yazıyor. Kart düzeltme turuna not.

### U1-07 · hata_turu etiketleri sözlükle uyuşmuyor
Hata kayıtları ve zayıf konu analizi etikete göre çalıştığı için yanlış etiket, yanlış tekrar önerisi üretir. Sözlük: `.claude/skills/soru-yazim-kurallari/SKILL.md`.

| Satır | Üreteç | Çeldirici | Şu an | Olmalı |
|---|---|---|---|---|
| 94 | uslu-carpma-bolme | bölmede üsleri toplamak | `isaret_hatasi` | `us_kural_karisikligi` |
| 95 | uslu-carpma-bolme | çarpmada üsleri çarpmak | `us_carpma` (sözlükte: üssü tabanla çarpmak) | `us_kural_karisikligi` |
| 141 | ussun-ussu | üssün üssünde toplamak | `us_carpma` | `us_kural_karisikligi` |
| 146 | ussun-ussu | çarpmada üsleri çarpmak | `us_carpma` | `us_kural_karisikligi` |
| 148 | ussun-ussu | (aᵐ)ⁿ → a^(mⁿ) | `islem_hatasi` | `us_kural_karisikligi` |
| 206, 207 | bilimsel-gosterim | katsayı 1 ≤ \|a\| < 10 dışında | `kavram_karisikligi` | `bilimsel_katsayi` |
| 272 | kok-disi | k√m yerine k + √m | `kok_toplama` (sözlükte: √a + √b = √(a+b)) | `islem_hatasi` |
| 790, 815, 818 | ozdeslik-hesap | a² − b² ≠ (a − b)², (a + b)² | `kare_dagitma` | `kare_farki_karistirma` |
| 851 | alan-modeli | x − k = 0 → x = −k | `isaret_hatasi` | `carpim_sifir_isaret` |

**ÖNERİLEN DÜZELTME:** Tablodaki dizgileri değiştir. Açıklama metinleri doğru, onlara dokunma.

### U1-08 · mat-u1-arada-sayi · "paylar ve paydalar ayrı toplanır" çeldiricisi adı verilen hatadan çıkmıyor
- **Konum:** `gen`, satır 635.
- **Örnek:** Tohum 0: 1/3 ile 1/2 için `2/7`. Paylar ve paydalar toplanırsa 2/5 çıkar, 2/7 çıkmaz.
- **Sorun:** Kod paydaya `+ 2` ekliyor. Böylece aradaki bölmeyi (mediant) dışarı itiyor. Mediant 2/5 gerçekten iki sayının arasında olduğu için doğru sayılırdı, bu yüzden itilmiş. Ama ortaya çıkan sayı hiçbir öğrenci yolundan gelmiyor (SKILL "Çeldirici üretimi" 2–3). Tam sayı tipinde de anlamsız: 2 ile 3 için 5/4.
- **ÖNERİLEN DÜZELTME:** Hatalı yolu sonuna kadar uygula: payları ve paydaları ayrı topla, sonra ortalama için 2'ye böl.
  ```js
  [p1 + p2, 2 * (q1 + q2), "islem_hatasi", "Payları ve paydaları ayrı ayrı topladın; önce paydaları eşitle."]
  ```
  Bu değer dört tipin hepsinde aralığın dışında kalıyor:
  - birim: 1/(2d + 1) < 1/(d + 1);
  - ardışık pay: (2n + 1)/(4d) < n/d, çünkü n ≥ 1;
  - tam ve negatif tipler aynalı.

  `disarida` süzgeci zaten güvence.

### U1-09 · İpucu 3 cevabı doğrudan veriyor
- **mat-u1-ussun-ussu (k = 0), satır 158:**
  - Örnek: tohum 0, "İlk adım: −2 · (−1) = 2."
  - Sorun: k = 0 iken bu adım sonucun üssünün ta kendisi. Kalan iş yalnız "3²" yazmak.
  - Düzeltme: k = 0 ise ipucu 3'ü sonucu söylemeden yaz:
    ```js
    "Parantez içindeki üs " + tam(m) + ", dıştaki üs " + pt(n) + ". Bu ikisini çarp."
    ```
- **mat-u1-alan-modeli, satır 862:**
  - Örnek: tohum 0, "x² − 8x + 16 = 0, yani (x − 4)² = 0."
  - Sorun: Bu cümleden sonra cevap (x = 4) okunuyor.
  - Düzeltme: İpucu 3'ü denklemde bırak:
    ```js
    (f === 2 ? "Her terimi 2'ye böl: " : "") + "x² − " + 2*k + "x + " + k*k + " = 0. Bu bir (a − b)² açılımına benziyor mu?"
    ```
- **mat-u1-eslenik (d = 1), satır 398:**
  - Örnek: tohum 0 ve 3, "… = 3 − 2 = 1".
  - Sorun: Payda 1 çıkınca cevap c(√a + √b) olarak hemen okunuyor. Daha hafif bir durum.
  - Düzeltme: d === 1 iken ipucu 3'ü `"Paydayı çarp: (" + fark + ") · (" + top + ") = ?"` yap.

### U1-10 · 20 kelimeyi aşan bağlam cümleleri
Pedagoji eşiği: hiçbir cümle 20 kelimeyi aşmamalı.
- **mat-u1-aralik-kesisim-birlesim, satır 471:**
  - "Tersanede kullanılan K boyası … sürülebiliyor." 21 kelime (tohum 0 ve 7).
  - Düzeltme:
    ```js
    "Tersanede iki boya kullanılıyor. K boyası " + s1 + " °C ile " + s3 + " °C arasında sürülüyor. L boyası " + s2 + " °C ile " + s4 + " °C arasında sürülüyor. Uç sıcaklıklar da dâhil. K'nin aralığı A, L'nin aralığı B kümesidir."
    ```
- **mat-u1-alan-modeli, satır 847 (f = 2):**
  - "Kısa kenar uzunlukları x cm, uzun kenar uzunlukları ise sırasıyla … iki kart var." 24 kelime (tohum 0, 1, 2, 3, 7, 11).
  - Düzeltme:
    ```js
    "Mavi bir kart ve sarı bir kart var; ikisi de dikdörtgen. Mavi kartın kenarları x cm ve " + L + " cm. Sarı kartın kenarları x cm ve 2x cm. Mavi kartın alanı, sarı kartın alanından " + D + " cm² fazladır."
    ```

### U1-11 · mat-u1-aralik-kesisim-birlesim · çözüm adımları somut değil, boş küme gerekçesiz
- **Konum:** `gen` `cozum`, satır 506–511.
- **Örnek:** Tohum 1, 2, 3: Sonuç ∅. Adım 2 "büyük sol uç ile küçük sağ uç alınır" diyor ama değerleri yazmıyor. Neden boş olduğunu da söylemiyor. Adım 3 ("Uç sayının … durumuna bakılır") hiçbir işlem yapmıyor.
- **Sorun:** "Numaralı adım, adım başına tek işlem" kuralı biçimsel olarak var, içerikte yok. Mehmet Eren en çok ∅ ve {x₂} vakalarında takılır.
- **ÖNERİLEN DÜZELTME:** Adımları hesaplanmış değerlerle kur.
  - ∩ için `L = max(A.l, B.l)`, `Rr = min(A.r, B.r)`:
    - "2. Büyük sol uç " + ucYaz(L) + ", küçük sağ uç " + ucYaz(Rr) + "."
    - `sonuc.length === 0 && L > Rr`: "3. Sol uç sağ uçtan büyük; iki aralığın ortak sayısı yok."
    - `L === Rr`: "3. " + tam(L) + " " + (ortak ? "iki aralıkta da dâhil; ortak tek sayı budur." : "aralıklardan birinde dâhil değil; ortak sayı yok.")
    - Diğer: "3. " + tam(L) + (li ? " dâhil" : " dâhil değil") + ", " + tam(Rr) + (ri ? " dâhil." : " dâhil değil.")
  - ∪ için aynı kalıp, min/max ters.

### U1-12 · mat-u1-aralik-mutlak · gerçek dışı bağlam değerleri
- **Konum:** `gen`, satır 528 ve 535–537.
- **Örnek:** c = rint(−6, 30), d = rint(1, 6). Bağlam koşulu yalnız a > 0. Şu cümleler üretilebiliyor:
  - "bir buzdolabının iç sıcaklığı en az 19 °C, en fazla 23 °C"
  - "lastik basıncı en az 2 psi, en fazla 4 psi"
- **Sorun:** Buzdolabı 19–23 °C ve lastik 2–4 psi gerçek dışı. TYMM kılavuzu "zorlama kurgu yok" diyor (SKILL kural 3). Ayrıca öğrenciye yanlış dünya bilgisi veriyor.
- **ÖNERİLEN DÜZELTME:** Bağlama göre c ve d aralığı seç. Bağlam dalında c ve d'yi yeniden üret:
  - lastik: c ∈ [30, 34], d ∈ [1, 3] psi (kart b5 kontrol sorusu [30, 34] psi ile uyumlu);
  - sac levha: c ∈ [3, 20], d ∈ [1, 2] mm;
  - buzdolabı: c ∈ [4, 6], d ∈ [1, 2] °C.

  Örnek: `const [nesne, birim, cAr, dAr] = pick(...)`, sonra `a`, `b`, `I` yeniden hesaplanır.

### U1-13 · mat-u1-ozdeslik-hesap · ipucu 1 matematiksel olarak yanlış ifade
- **Konum:** satır 772.
- **Örnek:** Tohum 0 "19 sayısını 10'un katına yakın iki sayının farkı olarak yaz."; tohum 7 "toplamı".
- **Sorun:** 19 = 20 − 1 ayrışımında yalnız 20, 10'un katı. 1 "10'un katına yakın" bir sayı değil. Cümle öğrenciyi 19 = 30 − 11 gibi anlamsız ayrışımlara yöneltebilir.
- **ÖNERİLEN DÜZELTME:**
  ```js
  x + " sayısını 10'un bir katı ile küçük bir sayının " + (art ? "toplamı" : "farkı") + " olarak yaz."
  ```

### U1-14 · mat-u1-ozdeslik-hesap (kareler_farki_ondalik) · bağlamdan işleme geçiş adımı yok
- **Konum:** satır 825–828.
- **Örnek:** Okul bahçesi ve havuz bağlamı. Çözüm doğrudan "1. 12,5² − 8,5² = …" ile başlıyor.
- **Sorun:** Bağlamlı soruda asıl beceri modeli kurmak: çim alanı = bahçe − havuz. Bu adım çözümde de ipuçlarında da yok. İpucu 1 ("İki karenin farkı var") modeli hazır veriyor.
- **ÖNERİLEN DÜZELTME:** `baglam` varken:
  - çözüme önce şu adımı ekle, sonraki adımları yeniden numarala:
    ```js
    "1. Çim alanı = bahçenin alanı − havuzun alanı = " + sayiYaz(x) + "² − " + sayiYaz(z) + "²."
    ```
  - ipucu 1'i değiştir: "Çim, bahçeden havuz çıkınca kalan yere ekilecek. Alanları nasıl yazarsın?"

### U1-15 · mat-u1-arada-sayi · çözüm adımında iki işlem
- **Konum:** satır 649 (ve aynı metni kullanan ipucu 3, satır 646).
- **Örnek:** Tohum 0: "1. 1/3 + 1/2 = 5/6."
- **Sorun:** Bu adımda paydaları eşitleme ve toplama tek satırda. Adım başına tek işlem kuralı bozuluyor. Mehmet Eren için kesir toplama ayrı bir beceri.
- **ÖNERİLEN DÜZELTME:** `q1 !== q2` ise önce ayrı bir adım ekle:
  ```js
  "1. Paydaları eşitle: " + x + " = " + (p1*q2) + "/" + (q1*q2) + ", " + z + " = " + (p2*q1) + "/" + (q1*q2) + "."
  ```
  Ardından toplama ve 2'ye bölme gelsin.

---

## KÜÇÜK

### U1-16 · mat-u1-kok-toplama · aynı kök hem + hem − ile geliyor
- **Örnek:** Tohum 11, "√80 − √45 + √45".
- **Sorun:** Terimler birbirini götürüyor, soru anlamsızlaşıyor. U1-02'nin de kaynağı bu.
- **Düzeltme:** Satır 318'den sonra şu durumu yeniden çek: aynı `ps[i]` değeri hem +1 hem −1 işaretiyle geliyorsa. Kısa yol: üç terimde `ps` değerlerini farklı seç (`shuffle([1..5]).slice(0, adet)`).

### U1-17 · Kökte gereksiz "¹" yazımı
- **Örnek:** "7⁻³ · 7¹ : 7³" (uslu tohum 1), "(5¹)² · 5⁴" (ussun tohum 11).
- **Sorun:** Yorum satırı (28) bunun bilinçli olduğunu söylüyor. Mehmet Eren için ¹ kuralı görünür kılıyor. Ancak `(5¹)²` iç içe üst simgeyle okunması zor.
- **Düzeltme:** `ussun-ussu` içinde m = 1'i aday listesinden çıkar (`[-2, -1, 0, 2, 3]`). Bu U1-01'i de kökten kapatır. `uslu-carpma-bolme`'de bırakılabilir.

### U1-18 · mat-u1-uslu-carpma-bolme · çözümün son adımı şıkla aynı biçimde değil
- **Örnek:** e = 1 iken çözüm "Sonuç: 5¹.", şık ise "5". Kaynak satır 118.
- **Düzeltme:**
  ```js
  "4. Sonuç: " + usY(a, e) + (e === 0 ? " = 1" : e === 1 ? " = " + a : "") + "."
  ```

### U1-19 · mat-u1-bilimsel-gosterim · p = 0 iken gereksiz adım
- **Örnek:** p = 0 iken kök yalnız "0,013" olur. Çözüm adım 3 "−2 + 0 = −2" yazar.
- **Düzeltme:** `p === 0` ise 3. adımı atla ve sonucu 3. adım yap.

### U1-20 · mat-u1-kapalilik-karsit · açıklamadaki kesir şıkla uyuşmuyor
- **Örnek:** Tohum 11: şık "(3/2) ÷ 1", açıklama "6/4 bu kümenin elemanı değil". Kaynak satır 709.
- **Düzeltme:** Açıklamada `a + "/" + b` yerine `kesirYaz(a, b)` kullan.

### U1-21 · mat-u1-ozdeslik-hesap (fark_kare) · tipik çeldirici eksik, adım 3 iki işlem
- **Sorun:** Sözlükteki `fark_karesi_isaret` çeldiricisi (t² + 2tb + b²) yok. Adım 3 "400 − 40 + 1 = 361" iki işlem içeriyor.
- **Düzeltme:**
  - `!art` iken ekle:
    ```js
    y(tam(t2 + iki + b2), "fark_karesi_isaret", "(a − b)² açılımında ortadaki terim −2ab'dir.")
    ```
  - Adım 3'ü ikiye böl: "= 400 − 40 + 1" ve "= 361".

### U1-22 · mat-u1-aralik-kesisim-birlesim · iki parçalı birleşim hiç sorulmuyor
- **Sorun:** `ayrik` ve `bos_temas`'ın hangi = 2 durumunda op ∩'e zorlanıyor (satır 458, 460). Bu yüzden "A ∪ B = (… ) ∪ (…)" cevabı hiç üretilmiyor. Kitap s.45–49 bu durumu kapsıyor.
- **Düzeltme:** `ayrik` için `op = r() < 0.6 ? "∩" : "∪"`. ∪ dalında `kesisim_birlesim` çeldiricisi zaten "∅" üretiyor.

### U1-23 · Kaynak sayfa aralıkları kartla tam örtüşmüyor
Diğer üreteçlerin `kaynak.sayfa` alanı kart bölümleriyle tutarlı: 16-22, 26-32, 32-35, 61-63, 63-65, 74-79, 74-78.
- `mat-u1-bilimsel-gosterim` "22-23". Kart b2 "15-16, 22-23" diyor. Kitap s.22–23 tanımı veriyor, s.15–16 ise uzaklık kıyaslaması. Kabul edilebilir.
- `mat-u1-aralik-kesisim-birlesim` "45-49" ve `mat-u1-aralik-mutlak` "50-52". Kart b4 ve b5 s.54 özet tablosunu da veriyor. Mutlak gösterimin formülü (c = (a+b)/2, d = (b−a)/2) s.54'te.
- **Düzeltme:** Sırasıyla "45-49, 54" ve "50-52, 54".

---

## Kapsam kontrolü (bulgu yok)
- 9.1.1:
  - üs kuralları, bilimsel gösterim (1 ≤ |a| < 10, s.23), kök dışına çıkarma (√ ve ∛, ortak sınav 3. soru) kitap ve kart kapsamında;
  - benzer köklerle toplama, eşlenikle paydayı rasyonel yapma (ortak sınav 2. soru) kitap ve kart kapsamında.
- 9.1.2: kesişim/birleşim ve mutlak değerli gösterim kapsamda. Dış bölge (|x − c| > d) kitap s.50 soru 4'te ("ulaşamadığı … kümesi") ve s.51 örneğinde, kart b5'te de var.
- 9.1.3: iki sayı arasında rasyonel sayı (kart b3) ve karşıt örnekle kapalılık (kart b5, kitap s.65) kapsamda. 0 ∈ ℕ uygulaması kitapla tutarlı. `÷` sembolü kart b5 ile aynı.
- 9.1.4: yalnız (a ± b)² ve a² − b² kullanılıyor (kart b4, b5). (x − k)² = 0 denklemi kart b6 ve ortak sınav 7. soru kalıbında.
- Yanlış açıklamalarında azarlama ifadesi yok ("dikkatsizlik", "basit hata" geçmiyor). Hepsi tek cümle.
- `sonsuz_koseli` açıklamasındaki "∞ bir sayı değildir" kitapta yok, ama doğru bilgi. Kartta zaten DOĞRULA notu var.

## Kontrol edilemeyenler
- Örnek tohumlarla sınırlı olmayan çıkarımlar cebirsel. Değerce eşitliği bulan otomatik bir tarama yapılamadı (Bash yok). U1-01 ve U1-02 için önerilen ek test: `uretecDene` içinde her yanlış şıkkın sayısal değerini doğru cevabın değeriyle karşılaştıran bir assert.
- Kitap s.15–16 ve s.74–79 metni ayrıca açılmadı. Sayfa aralıkları kart `kaynak` alanlarıyla karşılaştırıldı.

KARAR: DÜZELTİLMELİ (KRİTİK 5, ÖNEMLİ 10, KÜÇÜK 8)
