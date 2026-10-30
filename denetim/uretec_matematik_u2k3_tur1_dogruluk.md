# Üreteç denetimi · Matematik 9.2.3 Doğrusal denklem ve eşitsizlik problemleri · Tur 1 · Doğruluk (2026-10-31)

Denetçi: dogruluk-denetcisi (salt okur).
Denetlenen: `panel/motor/uretecler/matematik.js` satır 1893–2472 (12 kayıt, önek `mat-u2-problem-`). Ortak yardımcılar: `tam` (15), `pt` (19), `sayiYaz` (20), `kesirYaz` (22), `dogruYaz` (946), `esitD`/`ayikla`/`tekilSay` (953–955), `yonelme` (961), `sagA`/`solA`/`SONSUZ_AC` (1433–1435), `tara` (49).
Kanıt: ana oturumun 300 tohum taraması (`scratchpad/uretec_tarama_u2k3.md`) ve `denetim/uretec_ornekleri_u2k3.md`.
Yöntem: Her kaydın doğru cevabı ve `kontrol` fonksiyonu kod okumasıyla doğrulandı. Her yanlış şıkkın `deger` formülü adı verilen hata yolundan yeniden türetildi. Taramadaki örnekler elle yeniden hesaplandı. Kabuk aracı olmadığı için yeni tohum taraması yapılmadı.

## 1. Doğru cevap ve kontrol

| Kayıt | Doğru cevap | Kontrol bağımsız mı | Karar |
|---|---|---|---|
| denklem-kolay / denklem | artan: x = (m − b)/a; azalan: x = (b − m)/a; m > 0 korunuyor | Evet. x = 0…5000 arasında modeli tek tek dener | DOĞRU |
| esitsizlik-kolay / esitsizlik | a < 0 ise `TERS[op]`; uç k; `sagA`/`solA` ∞ yanında ")" ya da "(" koyar. a = −1'de "−1 ile çarpılır" | Evet. `tara`, 0,5 adımlı ızgara | DOĞRU |
| tamsayi-kolay / tamsayi / tamsayi-kesir | kâr: ⌊F/m⌋ + 1; zarar: ⌈F/m⌉ − 1. Sınır tam sayıysa B + 1 / B − 1, kesirse doğru yöne yuvarlanıyor. k(x) = px − (F + ux), kartla aynı ("Kâr = Gelir − Gider") | Evet. x birer artırılıp kârın işaretinin değiştiği yer aranıyor | DOĞRU |
| kesim | `tarifeKur`: lo.b = hi.b + (hi.a − lo.a)·x ⇒ iki ücret x'te eşit; a1 ≠ a2; x ∈ xH, yani pozitif tam sayı; Y = lo.a·x + lo.b | Evet. Eşit ücretin yeri taranıyor | DOĞRU |
| ucuz | A(x) < B(x) ⇔ N < d·x. Alo ⇒ "x'ten uzun", değilse "x'ten kısa"; x hariç | Evet. 0…3000 arasında A'nın ucuz olduğu x'ler toplanıyor | DOĞRU |
| tolerans-kolay / tolerans | [c − d, c + d], ≤ ise kapalı, < ise açık uç. Yüzde birlik tam sayılarla tutulup bir kez 100'e bölünüyor. Biçim "[119,5, 120,5], yani 119,5 ≤ x ≤ 120,5" | Evet. Yarım yüzdelik adımla tarıyor | DOĞRU |
| tolerans-ters | orta nokta (P + Q)/2, tolerans (Q − P)/2, uçlar dâhilse ≤ | Evet. İki uca eşit uzaklıktaki noktayı arıyor | DOĞRU |

Yeniden hesaplanan örnekler (tarama dosyası): denklem t0 (a = 20, b = 400, m = 320 ⇒ x = 4; 80, 16, 36, −4); tamsayi-kolay t0 (p = 10, F = 380 ⇒ B = 38, n = 39; k(37) = −10, k(38) = 0); kesim t0 (75 = (lo.b + hi.b)/4, 200 = N, 300 = Y); ucuz t0 (A(75) = 230, B(75) = 205 ⇒ x* = 50, Y = 180); ucuz t5 (A(15) = 520 < B(15) = 565); tolerans t0/t1; tolerans-ters t0 (|x + 2| ≤ 2 ⇒ [−4, 0]). Hepsi DOĞRU. **Doğru cevapta KRİTİK bulgu yok.**

## 2. Yanlış şıklar (özet)

- **Doğruya eşitlik:** Bütün olası eşitlikler `ayikla` ile eleniyor. Örnekler: esitsizlikte k = 0 iken eksik_adim = doğru; tolerans-kolayda C = D atlanıyor; kesim y modunda A.a = 1 iken eksik_adim = okuma_hatasi, öndeki kalıyor.
- **Yanlışlar arası çakışma:** Görülen çakışmalar (denklem azalanda ax = b/a − x, kesimde A.a = 1) seyrek. Öndeki şık en olası hatayı anlatıyor.
- **Özel (a), egim_kesisim_karistirma:** Değer (m − a)/b. Bu, f(x) = bx + a = m modelinin, yani a ile b yer değiştirince kurulan modelin çözümü. Hata yolu ile değer tutarlı. Doğru cevap da bozulmuyor (x yine [xH0, xH1] aralığında, m = ax + b). Dağılım etkisi U3D-04'te.
- **Özel (b), azalan denklemde iki isaret_hatasi:** −x şıkkı ile açıklaması tutarlı. (b + m)/a şıkkının açıklaması kendi değeriyle çelişiyor: U3D-01.
- **Özel (c), ucuz:** kesisim_taraf şıkkı kesim noktasının öbür yanı (kısa ↔ uzun). Açıklamadaki örnek nokta da o yanda (Alo'da solT, değilse sagT), sözlük tanımıyla uyumlu. okuma_hatasi ("Y'den kısa") yalnız Y > x iken çıkıyor, yani doğru kümenin üst kümesi oluyor ve [x, Y) aralığı yanlış. İkinci doğru şık oluşmuyor. aralik_uc ("x ve daha uzun/kısa") eşitlik noktasını içerdiği için yanlış.
- **tamsayi:** aralik_uc (sınırın kendisi ya da yanlış yuvarlama), esitsizlik_yonu (öbür yan), kavram_karisikligi (ux unutulmuş: px > F), isaret_hatasi ((p + u)x > F), eksik_adim (F). Hepsi kendi yolundan bu değeri veriyor. kAc metinleri değerle tutarlı.
- **kesim:** x modu: Y (okuma), (lo.b + hi.b)/d (isaret), N/(lo.a + hi.a) (islem), N (eksik). y modu: bunların A'ya konmuş hâli ve A.a·x. Hepsi tutarlı.
- **tolerans:** 2d, ters uç, (−∞, c + d], [−c − d, −c + d], [d − c, d + c], [−d, d]. Hepsi adı verilen hatayı veriyor. ∞ yanında köşeli parantez yok.
- **tolerans-ters:** 2d, ters işaret (</≤), c ↔ d, ≥/>, −c. Tutarlı.

## 3. Bulgular

### U3D-01 · ÖNEMLİ · mat-u2-problem-denklem (azalan) · satır 1969 · açıklama gösterilen değerle çelişiyor
- **Şık:** (b + m)/a, `isaret_hatasi`. Açıklama: "Karşıya geçen b çıkarılır, eklenmez: −ax = m − b olmalı."
- **Sorun:** Açıklamadaki hata yolu (−ax = m + b) x = −(m + b)/a verir, yani eksi sayı. Gösterilen ise artı (b + m)/a. Örnek, tarama t0: a = 20, b = 400, m = 320. −20x = 720 ⇒ x = −36, ama şık "36". Bu değere tek hatayla götüren yol şu: b − ax = m'den ax = b − m yazılacakken m karşıya işareti değişmeden geçmiş, ax = b + m alınmış. Aynı soruda öteki isaret_hatasi şıkkı (−x, "eksi eksiye bölününce artı") de var. Bu yüzden 36'yı seçen öğrenciye anlatılan yol, onun yaptığı yol değil.
- **ÖNERİLEN DÜZELTME:**
  ```js
  ...(pozTam(isr) ? [y(tam(isr), "isaret_hatasi", "Karşıya geçerken işaret değişir: " + dogruYaz(a, 0) + " = " + b + " − " + m + " olmalı; burada " + b + " + " + m + " alınmış.", isr)] : []),
  ```

### U3D-02 · ÖNEMLİ · mat-u2-problem-esitsizlik (a < 0) · satır 2037 · eksik_adim şıkkının yönü hata yoluyla uyuşmuyor
- **Şık:** `yariAralik(opx, c − b)`. Açıklama: "−6x > 18 ara sonuçtur; iki taraf −6'ya bölünür." (tarama t9, şık (−∞, 18)).
- **Sorun:** Ara sonuçta kalan öğrenci henüz bölmediği için yönü de çevirmemiştir. −6x > 18'i "x > 18" diye okur ve (18, ∞) yazar. Gösterilen (−∞, 18) için hem yönü çevirmek hem bölmeyi atlamak gerekir. Bu tek bir hata yolu değil. a > 0'da sorun yok (op = opx).
- **ÖNERİLEN DÜZELTME:** `yd(yariAralik(op, c - b), "eksik_adim", …)`. Açıklama aynı kalır. Doğruyla çakışma olmaz, çünkü a < 0'da yönler farklı. k = 0'da yonu şıkkıyla çakışır, ama sıra gereği yonu kalır.

### U3D-03 · KÜÇÜK · mat-u2-problem-esitsizlik · satır 2035–2036 · biçim tutarsızlığı
- b > 0 dalı `tam(c)` kullanıyor ("5x ≥ −5 − 20"), b < 0 dalı `pt(c)` ("3x ≤ (−18) + 3"). İkisi de doğru, ama aynı şablonda iki farklı yazım var.
- **Öneri:** İki dalda da `tam(c)` kullan (çözüm satırı `tasi` da parantezsiz yazıyor).

### U3D-04 · KÜÇÜK · mat-u2-problem-denklem-kolay · satır 1947–1951, 1975 · egimIste kurulumunun dağılım etkisi
- egimIste dalında x adımsız seçiliyor (`rint`). Ayrıca b | a(x − 1) şartı aranıyor, bu yüzden egm = 1 + a(x − 1)/b çoğunlukla 2 ya da 3 çıkıyor (tarama t1, t2, t12: "2"). Bu dalda x adım ızgarasının dışında (5'in ya da 10'un katı değil). Öteki yarıda x hep ızgarada.
- Doğru cevap bozulmuyor ve değer gerçekten a ↔ b yer değiştirme hatasından geliyor. Ama sonuç olarak cevabı 40–60 olan bir soruda "2" şıkkı bariz biçimde eleniyor, çeldirici zayıf kalıyor.
- **Öneri:** İçerik açısından zorunlu değil. Pedagoji turunda değerlendirilsin. İstenirse egm ≥ 5 şartı eklenebilir.

### U3D-05 · KÜÇÜK · mat-u2-problem-ucuz · satır 2287–2288 · okumaVar yorumu
- Y = hi.a·x + hi.b > x her zaman (hi.b ≥ 40). Bu yüzden `okumaVar` Alo'da hiç doğru olmuyor, yani okuma_hatasi şıkkı yalnız A'nın pahalı-birimli olduğu sorularda çıkıyor. Davranış doğru, ikinci doğru şık oluşmuyor. Ancak yorum iki durumu da mümkünmüş gibi anlatıyor.
- **Öneri:** Yoruma "Alo'da Y > x olduğundan bu şık çıkmaz" notu eklensin. Kod değişikliği gerekmez.

## 4. Kontrol listesi (görevdeki 8 madde)
1. **Doğru cevap / kontrol:** 12 kayıtta da doğru. Kontroller formülü kopyalamıyor, tarama yapıyor.
2. **Çeldirici yolları:** U3D-01 ve U3D-02 dışında hepsi tutarlı. Sıra teşhis önceliğine uygun.
3. **Özel (a), (b), (c):** (a) doğru, dağılım notu U3D-04'te. (b) U3D-01. (c) temiz.
4. **Tamsayı:** Tam sınırda ">" için sınır + 1, "<" için sınır − 1. Kesirde ⌊⌋ + 1 / ⌈⌉ − 1. Kâr modeli kartla aynı.
5. **Eşitsizlik:** a < 0 ve a = −1'de yön değişiyor. k = 0'da ipucu ara satırı gizliyor, eksik_adim eleniyor. ∞ yanında köşeli parantez yalnız `sonsuz_koseli` çeldiricisinde var.
6. **Tolerans:** Uçlar ve açık/kapalı doğru. Ondalık biçim "[a, b], yani a ≤ x ≤ b" (";" yok). Ters yolda orta nokta ve tolerans doğru.
7. **Kesim noktası:** a1 ≠ a2, x pozitif tam sayı. x ve y modlarının çeldiricileri tutarlı.
8. **Etiketler ve terimler:** Etiketler sözlükteki tanımlarla uyumlu (`kesisim_taraf`, `egim_kesisim_karistirma`, `mutlak_tam_uzunluk` dâhil). Terimler "kesim noktası", "orta nokta", "tolerans", "dâhil" kartla aynı. Yasak terim yok (tarama ve kod). Görünen bütün eksiler `EKSI`/U+2212. "−0" yok: değerler tam sayı 0 olarak basılıyor ve C ≠ D şartı var.

## Kontrol edilemeyenler
- Yeni tohum taraması yapılmadı (kabuk yok). Çakışma ve dağılım çıkarımları kod okumasından ve taramadaki örneklerden geliyor.
- Kitap sayfaları (s.136–166) bu turda açılmadı. Model ve terimler 3 tur denetlenmiş konu kartıyla karşılaştırıldı.

## Özet
KRİTİK 0 · ÖNEMLİ 2 (U3D-01, U3D-02) · KÜÇÜK 3 (U3D-03 … U3D-05).

KARAR: DÜZELTİLMELİ
