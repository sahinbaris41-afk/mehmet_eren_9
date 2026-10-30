# Üreteç denetimi · Matematik 9.2.2 Mutlak değer fonksiyonu · Tur 1 · Doğruluk (2026-10-30)

Denetçi: dogruluk-denetcisi (salt okur).
Denetlenen: `panel/motor/uretecler/matematik.js` satır 1399–1805 (5 üreteç: `mat-u2-mutlak-minmax`, `mat-u2-mutlak-goruntu`, `mat-u2-mutlak-sifir`, `mat-u2-mutlak-artan-azalan`, `mat-u2-mutlak-kapali-aralik`). Ortak yardımcılar: `tam`, `kesirYaz`, `dogruYaz` (946), `ayikla`/`tekilSay` (953–954), `yonelme` (960). Motor: `panel/motor/soru.js` (`esitDeger` 27, `insa` 34–55, `uretecDene` 103).
Kanıt: `denetim/uretec_ornekleri_u2k2.md` (29 örnek) ve ana oturumun 300 tohum taraması (`scratchpad/uretec_tarama_u2k2.md`).
Kitap: `kaynaklar/meb/matematik/metin/matematik-9sinif-ders-kitabi-1kitap_.../s0126, s0127, s0131, s0132, s0134`.

Yöntem: Her yanlış şıkkın koşulu ve `deger` formülü doğru cevapla ve diğer yanlışlarla cebirsel olarak karşılaştırıldı. Kapalı aralık ters V dökümündeki 12 örnek elle yeniden hesaplandı. Kitaptaki nitel özellik listesi (s.134) ve sapma örneği (s.126–127) ile karşılaştırıldı. Kabuk aracı olmadığı için yeni tohum taraması yapılmadı.

Motor notu: `insa` (soru.js 39–44) yanlışları **önce karıştırır, sonra** değere göre tekilleştirir. İki yanlış aynı değerdeyse hangisinin açıklamasının kalacağı tohuma bağlı, rastgeledir. Bu, U2D-01'in kökenidir.

## 1. Matematik doğruluğu (doğru şık)

| Üreteç | Kontrol | Karar |
|---|---|---|
| minmax | s·\|ax + b\| + c: V'de min = c, ters V'de maks = c, x0 = −b/a noktasında. Kitap s.134: "Fonksiyon minimum değerini x = −b/a noktasında alır", "maksimum değeri yoktur". | DOĞRU |
| goruntu | V: [c, ∞), ters V: (−∞, c]. Kitap s.134: \|ax + b\| için [0, ∞), −\|ax + b\| için (−∞, 0]; öteleme c ekler. | DOĞRU |
| sifir | tur "iki": \|ax + b\| = E > 0 → x0 ± dd (E = a·dd). tur "yok": \|ax + b\| = −K. tur "bir": c = 0, tek sıfır x0. V ve ters V'de c işareti (c = V ? −E : E) doğru. x0 = 0 iken tur "bir" yeterli çeldirici bulamadığı için `continue` ile atlanıyor ("0 ve 0" şıkkı hiç ekrana çıkmaz). | DOĞRU |
| artan-azalan | Kitap s.134: \|ax + b\| için x ∈ (−∞, −b/a] azalan, x ∈ [−b/a, ∞) artan; −\|ax + b\| için tersi; a ∈ ℝ − {0}. Kod `sag = (istek === "artan") === V`, uç x0 kapalı. a < 0 da aynı sonucu veriyor (kitap a'nın işaretini ayırmıyor). | DOĞRU |
| kapali-aralik Vmaks | f(p) = L, f(q) = R, maks = max(L, R). Kitap s.127: g(x) = \|x − 20\|, [16, 24] → maksimum 4, "16 ve 24 noktalarında". Eşit uçlarda iki nokta yazılıyor. | DOĞRU |
| kapali-aralik Vmin | İçeride/uçta: 0; dışarıda e birim: en yakın uç, değer e. | DOĞRU |
| kapali-aralik Tmaks | p = h − L, q = h + R, L, R ≥ 1 → h her zaman **açık** aralığın içinde (p < h < q). Maks = k (x = h), uçlar k − L, k − R, min = k − max(L, R). | DOĞRU |

Tmaks 12 örneğin yeniden hesabı (tarama dosyası):

| Tohum | Tanım, f | f(p), f(q) | Maks (x) | k − min(L,R) | k − max(L,R) | k + max | h | Karar |
|---|---|---|---|---|---|---|---|---|
| 4 | [−1, 2], −\|x\| + 1 | 0, −1 | 1 (0) | 0 | −1 | 3 | 0 | DOĞRU; 0 çakışması (U2D-01) |
| 20 | [−2, 3], −\|x\| + 5 | 3, 2 | 5 (0) | 3 | 2 | 8 | 0 | DOĞRU |
| 30 | [4, 6], −\|x − 5\| + 3 | 2, 2 | 3 (5) | 2 | 2 | 4 | 5 | DOĞRU; L = R, 2 hem büyük hem küçük uç |
| 36 | [5, 11], −\|x − 6\| + 2 | 1, −3 | 2 (6) | 1 | −3 | 7 | 6 | DOĞRU |
| 41 | [−1, 7], −\|x − 2\| + 5 | 2, 0 | 5 (2) | 2 | 0 | 10 | 2 | DOĞRU; 2 çakışması (h = k − min), gösterilen maksimum_varlik |
| 43 | [−2, 0], −\|x + 1\| + 4 | 3, 3 | 4 (−1) | 3 | 3 | 5 | −1 | DOĞRU |
| 44 | [−7, 2], −\|x + 2\| | −5, −4 | 0 (−2) | −4 | −5 | 5 | −2 | DOĞRU |
| 48 | [1, 5], −\|x − 2\| + 2 | 1, −1 | 2 (2) | 1 | −1 | 5 | 2 | DOĞRU |
| 64 | [−1, 6], −\|x − 1\| + 5 | 3, 0 | 5 (1) | 3 | 0 | 10 | 1 | DOĞRU |
| 67 | [−2, 3], −\|x − 1\| + 5 | 2, 3 | 5 (1) | 3 | 2 | 8 | 1 | DOĞRU |
| 69 | [−5, 5], −\|x\| + 7 | 2, 2 | 7 (0) | 2 | 2 | 12 | 0 | DOĞRU |
| 70 | [−4, 4], −\|x + 1\| + 2 | −1, −3 | 2 (−1) | −1 | −3 | 7 | −1 | DOĞRU; −1 çakışması, gösterilen okuma_hatasi (U2D-01) |

Bütün çözüm adımlarındaki sayılar doğru. Tek doğru şık her üreteçte değer anahtarıyla ve `kontrol` (ızgara taraması, kuraldan bağımsız) ile güvencede. **KRİTİK bulgu yok.**

## 2. Yanlış şıkların cebirsel denetimi (özet)

- **Doğruya eşitlik:** Her olası eşitlik ya `ayikla` ile eleniyor ya da cebirsel olarak imkânsız. Elle denenen sınırlar: x0 = 0, c = 0, a = 1 ve b = 0, a < 0, L = R, h uçta, h dışarıda, k = 0. Ayrıca sifir/eksik_adim kümesi {a(x0 + dd), a(x0 − dd)} ile doğru {x0 ± dd} ve işaret hatası kümesi {−x0 ± dd} a ≥ 2 iken hiçbir parametrede eşit olmuyor.
- **−0:** `mKur` (`−a·x0 || 0`), `tam` (−0 → "0") ve `esitD(−0, 0)` (true) sayesinde hiçbir şıkta ya da adımda "−0" çıkmaz. Tablo değerleri s·0 + c = +0 verir.
- **Yanlışlar arası değer çakışması:** Aşağıdaki çakışmalar mümkün. Her birinde iki açıklama da matematikçe doğru. Ama hangisinin gösterileceği rastgele: U2D-01.

| Üreteç / mod | Çakışma koşulu | Açıklamalar |
|---|---|---|
| minmax deger | x0 = 0 (b = 0), c ≠ 0 | `x0` kavram_karisikligi ↔ `0` eksik_adim |
| minmax deger | x0 = −c | kavram_karisikligi ↔ oteleme_yonu |
| minmax deger | s\|b\| = −2c | oteleme_yonu ↔ okuma_hatasi (f(0)) |
| minmax x | c = −x0, c = −b ya da c = 0 | carpim_sifir_isaret / eksik_adim ↔ kavram_karisikligi; c = 0'da iki "0" aynı anlamda |
| goruntu | x0 = 0 ya da x0 = −c | kavram_karisikligi ↔ eksik_adim / oteleme_yonu |
| artan-azalan | c = −x0 ya da c = −b | carpim_sifir_isaret / eksik_adim ↔ kavram_karisikligi |
| kapali Vmaks | h uçta (min(L,R) = 0); x = 0 ucu | eksik_adim ↔ kavram_karisikligi; okuma_hatasi ↔ kavram_karisikligi |
| kapali Vmin | dp = dq; dışarıda en yakın uç 0 | kavram ↔ kavram; okuma_hatasi ↔ kavram ("x = h tanım kümesinde değil") |
| **kapali Tmaks** | h = k − min(L,R), h = k − max(L,R) ya da h = k + max(L,R) | maksimum_varlik / kavram / eksi_mutlak ↔ **okuma_hatasi** (tohum 4 ve 70'te okuma_hatasi gösteriliyor) |

## 3. Bulgular

### U2D-01 · ÖNEMLİ · tüm 5 üreteç (en sık kapali-aralik Tmaks) · değer çakışmasında gösterilen açıklama rastgele
- **Konum:** `soru.js` 39–44 (`shuffle` sonra tekilleştirme). Üreteç tarafı `ayikla` (matematik.js 953) yalnız doğruya eşit olanı eliyor. Tmaks dizisi 1771–1777.
- **Örnek:** Tohum 4, f: [−1, 2] → ℝ, f(x) = −|x| + 1. "0" şıkkı `okuma_hatasi` ile "x = 0, maksimum değerin alındığı x değeridir" diyor. Oysa 0 aynı zamanda büyük uç değeri f(−1). Uçları hesaplayıp 0'ı seçen öğrenciye yanlış teşhis gidiyor. Tohum 70 da aynı durumda: −1 = f(−4) = h.
- **Sıklık:** Tmaks'ta h ∈ [−3, 6], k ∈ [0, 8]. Üç çakışma koşulunun her biri yaklaşık 1/9 olasılıklı. Tmaks sorularının kabaca dörtte birinde çakışma var, 12 örnekte 3 (tohum 4, 41, 70).
- **Sorun:** Cevap anahtarı doğru, ama "tek cümlelik neden" kuralı yanlış nedeni söyleyebiliyor. Zorluk 3 (sınav seviyesi) soruda en olası hata ("ters V'de de maksimum uçtadır") yerine "x ile f'yi karıştırdın" deniyor.
- **ÖNERİLEN DÜZELTME:** Tekilleştirmeyi üretece al. Dizideki sıra öncelik olsun, ilk gelen kalsın. Tek satır, ortak yardımcıda:
  ```js
  // Doğruya eşit olanı ve daha önce gelen bir yanlışla aynı değerdekini eler; dizideki sıra teşhis önceliğidir.
  const ayikla = (ys, d) => ys.filter((v, i) => !esitD(v.deger, d) && (v.deger == null || ys.findIndex(w => esitD(w.deger, v.deger)) === i));
  ```
  Bundan sonra `insa` eleyecek bir şey bulmaz ve açıklama tohuma bağlı olmaz. Tmaks dizisinde `k − min(L, R)` zaten ilk sırada, değişiklik yeterli. Önerilen sıra değişiklikleri: minmax `deger` modunda `0` (eksik_adim) şıkkı `x0`'dan önce gelsin (b = 0 iken 0'ı seçen öğrenci büyük olasılıkla +c'yi unutmuştur). Vmin `dis` dalında "0" şıkkı `xm`'den önce gelsin. Not: `ayikla` 9.2.1 üreteçlerinde de kullanılıyor. Selftest yeniden koşulmalı. 9.2.1'de `deger`siz şık varsa `v.deger == null` koşulu onu korur.

### U2D-02 · ÖNEMLİ · mat-u2-mutlak-kapali-aralik (Tmaks) · satır 1772 · `maksimum_varlik` etiketi sözlükle uyuşmuyor
- **Şık:** `k − min(L, R)`, yani uçlardaki büyük değer. Açıklama: "Ters V'de en büyük değer uçta değil … olabilir."
- **Sorun:** SKILL sözlüğü: `maksimum_varlik` = "ℝ'de V'nin maksimumunu aramak ya da kapalı aralıkta 'maksimum yok' demek". Bu şıkta öğrenci maksimumun var olduğunu biliyor ama yalnız uçları karşılaştırıyor. Bu, iç noktayı atlamak, yani yarım çözüm. Vmaks'taki eşdeğer hata ("Yalnız bir uç hesaplanmış") `eksik_adim` ile etiketli. Ayrıca bu durumda h her zaman içeride ve maksimum gerçekten orada, "olabilir" demek gereksiz yere çekingen.
- **ÖNERİLEN DÜZELTME:**
  ```js
  yv(k - Math.min(L, Rr), "eksik_adim", "Yalnız uçlar karşılaştırılmış. İçi 0 olan x = " + tam(h) + " de aralıkta; ters V'de en büyük değer f(" + tam(h) + ") olur."),
  ```

### U2D-03 · ÖNEMLİ · mat-u2-mutlak-sifir (tur "yok") · satır 1594 · `sifir_aralik_kontrol` etiketi sözlükle uyuşmuyor
- **Şık:** {x0 − dd, x0 + dd}. Öğrenci |ax + b| = −K yerine |ax + b| = K çözmüş, yani eksiyi düşürmüş.
- **Sorun:** Sözlük: `sifir_aralik_kontrol` = "parçalı gösterimle bulunan sıfırın kendi satırının aralığına uyup uymadığını kontrol etmemek". Burada parçalı gösterim ya da satır aralığı yok. Hata eksi işaretini kaybetmek.
- **ÖNERİLEN DÜZELTME:** Etiketi `isaret_hatasi` yap ("negatif işareti kaybetmek"). Açıklama aynı kalabilir. Başına "−" + K "yerine " + K + " çözülmüş." eklenirse teşhis netleşir:
  ```js
  yz([x0 - dd, x0 + dd], "isaret_hatasi", "|" + ic + "| = " + tam(E) + " yerine |" + ic + "| = " + tam(-E) + " çözülmüş. Bu sayılar yerine konunca 0 çıkmaz: f(" + tam(x0 + dd) + ") = " + tam(f(x0 + dd)) + "."),
  ```

### U2D-04 · KÜÇÜK · mat-u2-mutlak-kapali-aralik (Vmaks, bağlamlı) · satır 1714–1725 · bağlam gerçekçiliği ve şık dili
- **Birim:** mm doğru, kök "kaç mm'dir" diye soruyor, sayısal şıklarda birim gerekmiyor. DOĞRU.
- **Gerçekçilik:** Hedef 12 mm, aralık [12, 18] gibi örneklerde sapma %50'ye çıkıyor. Ayrıca kesme işlemi levhanın kalınlığını belirlemez, boyunu belirler. Kitaptaki model (s.126–127) ortalama 20 °C'ye en çok 4 °C sapma, yani oransal olarak küçük bir sapma.
- **Öneri (bağlam):** Kalınlık yerine kesilen parçanın boyunu kullan, hedefi büyüt, sapma aynı tam sayılar kalsın:
  ```js
  h = ctx ? pick(r, [120, 150, 180, 200, 250]) : rint(r, -3, 8);
  baglam = "Gölcük'teki bir tersanede kesilen çelik parçaların boyu " + h + " mm olmalıdır. Bir makinenin kestiği parçanın boyu x mm'dir ve x, [" + p + ", " + q + "] kapalı aralığındadır. Hedeften sapma f(x) = |x − " + h + "| fonksiyonu ile hesaplanır.";
  ```
- **"Maksimum değer yoktur." şıkkı:** "Sapmanın bir üst sınırı yoktur" önerilmemeli. "Üst sınır yok" ile "maksimum yok" aynı şey değildir (sınırlı olup en büyük değere ulaşmayan fonksiyon vardır). Bu yüzden şıkkın matematik anlamı değişir. Bağlam diliyle ve aynı anlamla şunu öneriyorum: şık "En büyük sapma yoktur.", etiket `maksimum_varlik` kalır. Açıklama: "x uç değerleri de alabilir (kapalı aralık); en büyük sapma uçlardan birinde vardır."
- **okuma_hatasi şıkkı (x = q):** Bağlamlı soruda "x = 18, maksimum değerin alındığı x değeridir; soru f değerini istiyor" yerine "18 mm parçanın boyudur; soru sapmayı istiyor." daha anlaşılır. `ctx` ise bu metin kullanılsın.

### U2D-05 · KÜÇÜK · mat-u2-mutlak-minmax (deger) · satır 1445 · c = 0 iken "dışarıdaki sayıdan gelir"
- **Örnek:** f(x) = |2x − 6|, c = 0, şık "3". Açıklama "minimum değer dışarıdaki sayıdan gelir" diyor, ama dışarıda sayı yok.
- **ÖNERİLEN DÜZELTME:** `(c ? ad + " değer dışarıdaki sayıdan gelir." : ad + " değer |…|'nin en " + (V ? "küçük" : "büyük") + " değeri olan 0'dır.")`

### U2D-06 · KÜÇÜK · mat-u2-mutlak-minmax (deger) · satır 1453 · "f(0) = −3 grafiğin y eksenini kestiği yerdir"
- **Sorun:** f(0) bir sayı, kesişim ise (0, f(0)) noktası. Virgül de eksik.
- **ÖNERİLEN DÜZELTME:** `"f(0) = " + tam(f0) + ", grafiğin y eksenini kestiği noktanın y değeridir; " + ad + " değer içi 0 olan x için bulunur."`

### U2D-07 · KÜÇÜK · a = 1, b = 0 iken kısa adımlar (icDenk, satır 1411–1416) · gerekçe eksik
- **minmax çözüm 2:** "Bu değer içi 0 iken alınır: x = 0." DOĞRU ve yeterli, çünkü "içi 0" ifadesi gerekçeyi taşıyor.
- **kapali Tmaks/Vmin çözüm 1:** "1. x = 0; 0, [−1, 2] aralığının içindedir." Matematikçe DOĞRU, ama x = 0'ın nereden geldiği yazılmıyor. Diğer h değerlerinde "x − 5 = 0 ⇒ x = 5" denklemi gerekçeyi veriyor. **artan-azalan çözüm 1** de "1. x = 0." diye aynı durumda (tarama: 5 tohum).
- **sifir çözüm 2–3:** "x = 3." / "x = −3." DOĞRU. İç ifade x olduğu için iç denklemin kendisi bu.
- **sifir tek_sifir açıklaması (satır 1585), ic = "x" iken:** "x = −1 durumu da 0 verir; x = −1 değeri de bir sıfırdır." Aynı eşitlik iki kez geçiyor (tarama tohum 14).
- **ÖNERİLEN DÜZELTME:** Çözüm adımı 1'lerin başına "İçi 0 yapan x: " ekle (kapali 1757, 1760, 1762, 1784; artan-azalan 1673). Örnek: `"İçi 0 yapan x: " + icDenk(1, -h, 0) + "; " + …`. tek_sifir için `ic === "x" ? "x = " + tam(-E) + " de f'yi 0 yapar; o da bir sıfırdır." : …`.

### U2D-08 · KÜÇÜK · etiket tutarlılığı
- minmax 1446: "Minimum değer yoktur." (ℝ'de V) `kavram_karisikligi`. 1447: "Maksimum değer yoktur." (ℝ'de ters V) `eksi_mutlak_karistirma`. Kapalı aralıktaki aynı tür şıklar `maksimum_varlik` ile etiketli. Sözlükteki tanım ("maksimum değerin varlığını karıştırmak") bunlara daha doğrudan uyuyor. Öneri: ikisi de `maksimum_varlik` olsun. `eksi_mutlak_karistirma` kabul edilebilir bir ikinci okuma olarak bırakılabilir.
- goruntu 1521, V dalı: (−∞, c] şıkkı `eksi_mutlak_karistirma`, ama fonksiyonun önünde eksi yok. Hata f(x) ≥ c yerine f(x) ≤ c yazmak. Öneri: `V ? "esitsizlik_yonu" : "eksi_mutlak_karistirma"`.
- artan-azalan 1653 `esitsizlik_yonu`: aralığı ters yöne almak x ≥ x0 ile x ≤ x0'ı karıştırmaktır. Kabul edilebilir, değişiklik gerekmez.
- Diğer etiketler (`aralik_uc`, `sonsuz_koseli`, `tanim_goruntu_karistirma`, `oteleme_yonu`, `carpim_sifir_isaret`, `tek_sifir`, `mutlak_eksi`, `okuma_hatasi`, `eksik_adim`, `kavram_karisikligi`) sözlükte var ve şıkla uyumlu.

### U2D-09 · KÜÇÜK · mat-u2-mutlak-sifir (tur "iki", ters V) · satır 1589 · yazım
- **Metin:** "Önünde eksi var; maksimum değer 3 x ekseninin üstündeyse grafik x eksenini iki yerde keser." Virgül eksik ("3 x" yan yana okunuyor). Koşul kipi gereksiz, çünkü değer gerçekten üstte.
- **ÖNERİLEN DÜZELTME:** `"Önünde eksi var; maksimum değer " + tam(c) + ", x ekseninin üstünde. Grafik aşağı iner ve x eksenini iki yerde keser."`

### U2D-10 · KÜÇÜK · mat-u2-mutlak-kapali-aralik (Vmin) · satır 1760 · "dahildir"
- Dosyanın geri kalanı (459, 485, 505–541, 589–640) "dâhil" yazıyor. Öneri: "aralığa dâhildir". Not: 1081 ve 1112'de (9.2.1) de "dahil" var, aynı turda düzeltilebilir.

## 4. Kontrol listesi (görevdeki 8 madde)

1. **Çeldirici/doğru cebiri:** Doğruya eşitlik yok. Yanlışlar arası çakışma ve rastgele açıklama sorunu U2D-01'de.
2. **Tmaks:** 12 örnek doğru. h her zaman (p, q) içinde, çünkü L, R ≥ 1. Minimum çeldiricisi (k − max) doğru. Etiket sorunu U2D-02'de.
3. **Görüntü / sıfır / artan-azalan:** Kitap s.134 ile uyumlu. c = 0 sınırı tur "bir" ile karşılanıyor. a < 0 doğru.
4. **Tersane bağlamı:** U2D-04.
5. **a = 1, b = 0 adımları:** U2D-07.
6. **Yasak terimler:** Öğrenciye giden dizgilerde "tepe", "simetri", "katla" yok. "köşe" yalnız "köşeli parantez" (1519) anlamında geçiyor, bu serbest. Yorum satırları (1402, 707) kapsam dışı. Tarama da 5 üreteçte 0 buldu.
7. **hata_turu:** U2D-02, U2D-03 (ÖNEMLİ), U2D-08 (KÜÇÜK).
8. **Gösterim:** Bütün eksiler `EKSI`/U+2212 ("−∞" dahil). "−0" yok. "ℝ" doğru. Sonsuz yanında hep "(" ya da ")". Kapalı uçlar "[ ]". Ekler doğru: `yonelme` 2'ye, 3'e, 4'e, −2'ye, −3'e; "0'dır", "mm'dir", "fonksiyonunun", "noktasında".

## Kontrol edilemeyenler
- Yeni tohum taraması yapılmadı (kabuk yok). Çakışma sıklıkları (U2D-01) kod okumasından ve 12 Tmaks örneğinden çıkarıldı.
- `denetim/uretec_ornekleri_u2k2.md` yalnız taramayla karşılaştırmalı okundu. Tarama dosyası 300 tohumu kapsıyor.
- Ders kitabı s.128–129 ve 135 açılmadı. Kullanılan bütün özellikler s.134 özet listesinde var.

## Özet
KRİTİK 0 · ÖNEMLİ 3 (U2D-01, U2D-02, U2D-03) · KÜÇÜK 7 (U2D-04 … U2D-10).

KARAR: DÜZELTİLMELİ
