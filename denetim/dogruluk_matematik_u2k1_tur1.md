# Doğruluk denetimi · matematik-u2-k1 (9.2.1 Doğrusal fonksiyonlar) · tur 1

Tarih: 2026-10-27 · Denetçi: dogruluk-denetcisi (salt okur)

Denetlenen:
- Konu kartı `dersler/matematik/konular/matematik-u2-k1.json` (10 bölüm, 24 kontrol sorusu, 10 yazılı örneği, 8 flashcard)
- Soru bankası `dersler/matematik/sorular/matematik-u2-k1.json` (20 soru)
- Üreteçler `panel/motor/uretecler/matematik.js` satır 945–1365: `mat-u2-deger-hesap`, `mat-u2-sifir-isaret`, `mat-u2-iki-nokta`, `mat-u2-artan-azalan`, `mat-u2-baglam-model` + döküm `denetim/uretec_ornekleri_u2k1.md`

Karşılaştırma: kitap s0092–s0119 (okunan: 92–103, 105, 106, 108–110, 113, 115–119), `denetim/pdf_teyit_u1.md` Ünite 2 bölümü, program s.50–53, `dersler/matematik/harita.json`, `docs/dogrula.md`.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | Yanlış bilgi ya da yanlış anahtar yok. |
| ÖNEMLİ | 2 | D1-01 (kitaba yanlış atıf), D1-02 (programdaki r ile öteleme kartta yok) |
| KÜÇÜK | 9 | D1-03 … D1-11 |

Bağımsız çözüm sonucu:
- **Soru bankası:** 20 sorunun 20'sinin anahtarı doğru.
- **Rubrikler:** s008 = 10, s010 = 10, s013 = 15, s019 = 15. Hepsi kökteki puanla tutuyor.
- **Çoktan seçmeliler:** Çoktan seçmelilerde ikinci savunulabilir doğru yok.
- **Konu kartı:** Kontrol sorularının, yazılı örneklerinin ve flashcard'ların hepsi doğru.
- **Üreteçler:** Beş üreteçte parametre uzayının tamamında tek doğru şık çıkıyor; ayrıntı aşağıdaki "Üreteç taraması" bölümünde. Matematik hatası bulunmadı.

---

## Üreteç taraması (akıl yürütme özeti)

| Üreteç | Riskli parametre | Sonuç |
|---|---|---|
| deger-hesap (deger) | a < 0, c < 0, b = 0, a = −1 (−ac + b = c + b çakışması), a = c = 2 (a + c = ac) | Çakışan değerler `ayikla`/`tekilSay` ile eleniyor. İşaret çeldiricisi yalnız negatif çarpanda üretiliyor. Doğru. |
| deger-hesap (ters) | x0 = 0, b = 0, a = −1, kesirli yanlış yollar ((d+b)/a, (d−ab)/a) | Doğru tamsayı. Kesir çeldiricilerinin değeri p/q, metni sadeleştirilmiş. Doğru. D1-07 yalnız pedagojik. |
| sifir-isaret | a < 0 (yön), b = 0 (sıfır 0, "TUM" çeldiricisi), kesirli sıfır (5/3), \|a\| = 1 (ters bölme çeldiricisi yok), a² = b² (−a/b = −b/a elenir), açık/kapalı uç | `sag = (a > 0) === pozIste` dört işaret durumunda da doğru. kontrol() ızgarası ±20\|a\|, \|−b\| ≤ 12'yi kapsıyor. Doğru. |
| iki-nokta | Δx = 1 (eksik_adim yok), x1 = 0, b = 0, a = ±1 | İki noktadan doğru tek. Çeldiriciler aynı noktadan geçen tutarlı doğrular. Doğru. |
| artan-azalan | sabit c = 0, "önde" yazım (b ± ax), a(x − r) + k yazımı | Tuzakların hepsi istenen türün tersinde. Kanon `a\|g(0)` aynı fonksiyonun iki yazımını eliyor. Doğru. |
| baglam-model | A = k (taksi_ucret ve taksi_km'de çeldirici = doğru), x0 = T/2 (bos_x), L = 0, okunaksız kesir | Hepsi eleniyor ya da yeniden çekiliyor. Bağlam değerleri tamsayı sonuç veriyor. Doğru. D1-06 dil/pedagoji. |

---

## Bulgular

### D1-01 · ÖNEMLİ · Kitaba yanlış sıra atfı
- **Yer:** `konular/matematik-u2-k1.json` → `bolumler[8]` (b9) → `katmanlar.yazilida.puan_ipucu`
- **İddia:** "Kitabın taksi-benzin örneği (s.105-106) aynı sırayla çözülür: önce sıfır, sonra tanım ve görüntü kümesi."
- **Kitap karşılığı:** s.105–106, 2. Örnek. Sıra a) değişkenler, b) tanım ve görüntü kümesi, c) grafik/eğim, ç) sıfır. Tanım kümesi [0, 60] yolculuk süresinden bulunuyor, sıfırdan değil. Sıfır (200 dk.) en sonda çözülüyor ve tanım kümesinin dışında kalıyor.
- **Karar:** YANLIŞ (kitapta olmayan bir sıra kitabınmış gibi sunulmuş).
- **ÖNERİLEN DÜZELTME:** "Kitabın taksi-benzin örneğinde (s.105-106) sıfır, 'benzin ne zaman biter' sorusunun cevabıdır. Bu örnekte önce tanım ve görüntü kümesi, sonra sıfır bulunur. Depo örneğinde ise tanım kümesinin sağ ucunu sıfır verir."

### D1-02 · ÖNEMLİ · Programdaki x ekseni ötelemesi (r) kartta işlenmiyor
- **Yer:** kart `bolumler[7]` (b8). Ayrıca `dogrula[0]`.
- **İddia:** Kart r'li biçimi yalnız parantez açarak işliyor. DOĞRULA maddesi bunu "öğretmen istiyor mu" sorusuna bağlıyor.
- **Program karşılığı:** s.52, MAT.9.2.1 uygulamaları. "f(x) = x ... grafik temsili üzerinde gerçekleştirilecek dönüşümler yoluyla g(x) = a ∙ f(x ± r) ± k ... Dönüşümler yapılırken k ve r değerlerinin her ikisinin veya birinin 0 olduğu durumlar aşamalı olarak ele alınır." Süreç bileşeni c (s.50): "grafik veya cebirsel temsili üzerinde yapılan işlemlerle diğer doğrusal fonksiyonlara dönüştürür."
- **Kitap karşılığı:** s.115 yalnız y ekseni boyunca ötelemeyi kural olarak veriyor. s.108'de g(x) = 130x − 260 için "x eksenini (2, 0)'da keser; B aracı 2 saat sonra yola çıktı" yorumu var. Bu örtük bir sağa ötelemedir ama kural olarak yazılmamış.
- **Karar:** Kapsam eksik. Kart yanlış bilgi vermiyor. Ancak r ile dönüşüm programda açıkça istenen bir süreç.
  - Bağlantılı durum: `mat-u2-artan-azalan` üreteci şıklarda a(x − r) + k biçimini kullanıyor ve "Parantez içindeki sayı ötelemeyi gösterir" diyor.
  - Kartta bu öteleme anlatılmadığı için öğrenci bu açıklamanın dayanağını kartta bulamaz.
- **ÖNERİLEN DÜZELTME:**
  - b8'e tek paragraf eklenir: "f(x − r) grafiği f'nin r birim sağa, f(x + r) grafiği r birim sola ötelenmiş hâlidir."
  - Kaynağı "program s.52" yazılır. Kitapta açık kural olmadığı DOĞRULA ile not edilir.
  - Örnek: g(x) = 130(x − 2), s.108, "B aracı 2 saat sonra yola çıktı".
  - `dogrula[0]` metni şöyle değişir: "Kapsam program s.52 ile teyitli. Kitapta x ekseni ötelemesi için açık kural yok (s.115 yalnız y ekseni)."
  - Sözlükteki `oteleme_yonu` etiketi zaten "f(x − r)'yi sola" hatasını tanımlıyor. Bu etiket kartın `sik_hatalar` listesine de eklenebilir.

### D1-03 · KÜÇÜK · sik_hatalar'da özgül olmayan hata_turu
- **Yer:** kart `sik_hatalar[3]` ve `sik_hatalar[4]`. İkisi de `kavram_karisikligi`.
- **İddia:** "b'yi eğim sanmak" ve "tanım kümesi ile görüntü kümesini karıştırmak".
- **Sözlük karşılığı:** Bu iki hata için özgül etiketler var: `egim_kesisim_karistirma` ve `tanim_goruntu_karistirma`. Soru bankası da bunları kullanıyor (s004, s012, s019).
- **Karar:** Sözlük tutarsızlığı.
- **ÖNERİLEN DÜZELTME:** `sik_hatalar[3].hata_turu` = `egim_kesisim_karistirma`; `sik_hatalar[4].hata_turu` = `tanim_goruntu_karistirma`.

### D1-04 · KÜÇÜK · "a büyüdükçe dikleşir" negatif a'da yanlış okunabilir
- **Yer:** kart b7 `katmanlar.basit[2]` ve `terimler[0]` (eğim).
- **İddia:** "a büyüdükçe doğru dikleşir". Eğim tanımı: "Doğrunun ne kadar dik olduğunu gösteren sayı."
- **Kendi çözümüm:** a = −5'ten a = −1'e çıkınca a büyür ama doğru yatıklaşır. Diklik |a| ile artar. Eğimin işareti yönü verir (kitap s.115: "a > 0 ise eğim pozitif, a < 0 ise eğim negatif").
- **Karar:** Eksik ifade.
- **ÖNERİLEN DÜZELTME:**
  - `basit[2]`: "a'nın işaretini bir yana koyarsak, sayı büyüdükçe doğru dikleşir: 3x, x'ten daha diktir."
  - Terim tanımı: "x 1 artınca y'nin ne kadar değiştiğini gösteren sayı; g(x) = ax'te a'dır. Artıysa doğru yükselir, eksiyse iner."

### D1-05 · KÜÇÜK · Kitap katmanında kitapta olmayan cümle
- **Yer:** kart b2 `katmanlar.kitap[2]`.
- **İddia:** "f: ℝ → ℝ yazımında okun solu tanım kümesini, sağı fonksiyonun değer aldığı kümeyi gösterir."
- **Kitap karşılığı:** s.95 yalnız "f fonksiyonu, f: R→R biçiminde tanımlanabilir" diyor ve okun anlamını açıklamıyor.
- **Karar:** Matematik olarak DOĞRU. Ancak kitap katmanında kaynaksız duruyor.
- **ÖNERİLEN DÜZELTME:** Cümle `basit` katmanına taşınır. Ya da başına "Kısaca:" yazılıp sayfa atfı verilmez.

### D1-06 · KÜÇÜK · baglam-model / bos_x (L = 0): ek hatası ve bariz çeldirici
- **Yer:** `mat-u2-baglam-model`, matematik.js satır 1319–1322. L = 0 dalı, `x0 = T` (%40 olasılık). Bu dal `mod = "bos_x"` olan her tohumda çıkabilir.
- **İddia 1:** `rr + "'a bölmelisin"` → rr ∈ {15, 20, 25} için "15'a", "20'a", "25'a" çıkar. Doğrusu "15'e", "20'ye", "25'e". Yalnız "10'a" doğru.
- **İddia 2:** `yv(-T, "isaret_hatasi", …)` → "kaç dakikada boşalır" sorusunda "−40" şıkkı. Negatif süre bağlamda bariz yanlıştır; kılavuz kuralı 13'e aykırı.
- **Karar:** Dil hatası + zayıf çeldirici. Matematik doğru.
- **ÖNERİLEN DÜZELTME:**
  - Ek sorunu: `"Süreyi bulmak için " + V + " litreyi dakikada akan " + rr + " litreye bölmelisin, çıkarmamalısın."`. Ek "litre" sözcüğüne bağlanınca sorun kalmaz.
  - −T yerine gerçek bir yanılgı kullanılır: `yv(V / (2 * rr), "islem_hatasi", …)`. Ya da `L > 0` dalındaki gibi okunabilir bir yanlış seçilir.

### D1-07 · KÜÇÜK · deger-hesap (ters): pozitif bölende "işareti koru" çeldiricisi
- **Yer:** `mat-u2-deger-hesap`, satır 1007, `ek(kd(-(d - b), a), "isaret_hatasi", tam(a) + " ile bölerken işareti koru.")`.
- **Tohum örneği:** a = 3, b = 2, x0 = 2. Denklem 3x + 2 = 8 ⇒ 3x = 6. Çeldirici x = −2.
- **Kendi çözümüm:** Burada ne bölende ne bölünende eksi var. 6 : 3 = −2 hatası gerçek bir öğrenci yanılgısı değil. "3 ile bölerken işareti koru" açıklamasının da karşılığı yok.
- **Karar:** Bariz dolgu çeldirici. Kılavuz kuralı 13'e aykırı. Deger kipinde (satır 974) aynı koşul doğru kurulmuş.
- **ÖNERİLEN DÜZELTME:** Satır 1007'deki çeldirici yalnız `a < 0 || d - b < 0` iken eklenir. Eleman azalırsa `tekilSay` döngüsü zaten yeniden çeker.

### D1-08 · KÜÇÜK · Üreteçlerde özgül olmayan hata_turu
- **Yer:**
  - `mat-u2-iki-nokta` satır 1126: `yd(b, a, "kavram_karisikligi", "…a ile b'nin yerini karıştırdın.")`.
  - `mat-u2-artan-azalan` satır 1201: `[{std, a: −s·m, b: s·n}, "kavram_karisikligi", "Artan ya da azalan olmayı sabit terim değil, x'in katsayısı belirler."]`.
- **Sözlük karşılığı:** `egim_kesisim_karistirma`, "ax + b'de eğim (a) ile sabit terimi (b) karıştırmak". İki çeldirici de tam bu hatayı anlatıyor.
- **ÖNERİLEN DÜZELTME:** Her iki etiket `egim_kesisim_karistirma` yapılır.

### D1-09 · KÜÇÜK · 9.2.1 / 9.2.3 sınırı: eşitsizlik ve denklem kurgusu
- **Yer:**
  - `mat-u2-sifir-isaret` kökü (satır 1077): "g(x) > 0 eşitsizliğini sağlayan x değerlerinin kümesi".
  - `mat-u2-baglam-model` kipleri taksi_km, bos_x (L > 0) ve dolum_x: u(x) = U denklemini çözme.
- **Program karşılığı:**
  - Haritada 9.2.3 ("denklem ve eşitsizlikler içeren problem") ayrı konu: `matematik-u2-k3`, yalnız 1D2Y. u2-k1 ise 1D1Y'de de var.
  - 9.2.1 ise işareti şöyle anlatıyor: "x = −b/a noktasına göre ayrılmış işaret tablosu" (s.53). Kitap da aynı dili kullanıyor: "(n, ∞)'da pozitif" (s.115).
  - Diğer yandan "bir niceliğin değeri verildiğinde diğerinin değerini hesaplama" programın temel kabulü (s.52). Bu yüzden baglam-model kapsam dışı değil.
- **Karar:** İçerik doğru ve 9.2.1'e bağlanabilir. Yalnız kök dili 9.2.3'e kayıyor.
- **ÖNERİLEN DÜZELTME:** sifir-isaret kökü kitap diline çekilir: "g fonksiyonunun pozitif (> 0) / negatif / sıfır ya da pozitif (≥ 0) olduğu aralık hangisidir?". s015 zaten bu dili kullanıyor. baglam-model'e dokunmaya gerek yok. Yalnız u2-k3 üreteçleri yazılırken aynı kalıp tekrarlanmamalı.

### D1-10 · KÜÇÜK · Zorluk dağılımı
- **Yer:** soru bankası.
- **Durum:** Zorluk 1: 11 soru (%55). Zorluk 2: 6 soru (%30). Zorluk 3: 3 soru (%15).
- **Hedef:** CLAUDE.md kural 5'e göre %50 / %35 / %15.
- **ÖNERİLEN DÜZELTME:** Bir zorluk-1 doğru/yanlış sorusu (ör. s005 ya da s018) orta düzeye çıkarılır. Örneğin s018 "bire bir değildir, bir karşı örnekle gösteriniz" biçiminde açık uçlu yazılır.

### D1-11 · KÜÇÜK · Kartın DOĞRULA maddeleri docs/dogrula.md'de yok
- **Yer:** kart `dogrula[0..3]`.
- **Durum:** `docs/dogrula.md` içinde 9.2.1'e özgü satır yok. Yalnız satır 7 (1D2Y ülke geneli dağılım) dördüncü maddeyle örtüşüyor.
- **Karar:** CLAUDE.md "Doğruluk" kuralına aykırı (her DOĞRULA satırı docs/dogrula.md'ye eklenir).
- **ÖNERİLEN DÜZELTME:** Ana ajan aşağıdaki "docs/dogrula.md'ye eklenecekler" listesini ekler.

---

## Doğru bulunan ve kitapla eşleşen başlıca iddialar (kanıt)

| İddia (kart) | Kitap |
|---|---|
| Nitel özellikler listesi (b1, s.92) | s.92 satır 5–7 |
| Tanım/görüntü kümesi tanımı, sıfır tanımı (b2, b3, s.95) | s.95 |
| İşaret (−∞, 0) negatif, (0, ∞) pozitif; maks-min tanımı; artan/azalan ve bire bir tanımları (s.96) | s.96 |
| [1, 5] ve (1, 5) karşılaştırması (s.94) | s.94 + pdf_teyit_u1.md |
| a > 0 / a < 0 cebirsel gösterim (s.100); cebirsel genel, grafik somut (s.101); h(x) = −½x x eksenine yakın (s.101) | s.100–101 + pdf_teyit |
| Taksi f(x) = 17x + 30, eğim 17 = km ücreti (s.105) | s.105 |
| İki adımlı çizim, y ekseni ötelemesi; a > 0 / a < 0 işaret; sabit fonksiyon a = 0 (s.115) | s.115 |
| Sabit fonksiyon da doğrusal fonksiyondur (s.110); 100 GB 200 TL (s.113) | s.110, s.113 |
| Önerme tanımı (b9) | s.68 ("Kesin doğru ya da kesin yanlış bir hüküm bildiren ifadelere önerme denir") |
| Program atıfları (b3–b9 puan_ipucu, "program s.53") | s.53: işaret tablosu x = −b/a; ∀a > 0 önermesi; artanlık ve bire birlik ispatı; açık aralık yorumu; açılış ücretli taksi |

Soru kaynakları: s004 (s.116, psi lastik alıştırması uyarlaması), s008 (s.118 5f), s011 (s.98 m(x) = −2x), s017 (s.110 Sıra Sizde 3 benzeri), s020 (s.100–101). Hepsi konuyu taşıyor.

Telif: 1–2 cümleyi aşan birebir alıntı yok.

## Kontrol edilemeyenler
- s0104, s0107, s0111, s0112, s0114 okunmadı. Bu sayfalara doğrudan atıf yapan bir iddia yok.
- Kitap metni kesirleri bozuk veriyor (s.105 "x101 20-+" = −x/10 + 20, s.110 Sıra Sizde 3 ifadesi). Anlam bağlamdan çıkarıldı. s017'nin bu sayfaya "benzer" olması yeterli; birebir eşleşme iddia edilmiyor.

---

## KAPANABİLİR DOĞRULA

| Kart maddesi | Durum | Gerekçe |
|---|---|---|
| `dogrula[0]` x ekseni ötelemesi | **Kısmen kapanır** | Kapsam sorusu kapanır: program s.52 r dönüşümünü açıkça istiyor. Açık kalan kısım şu cümleyle yeniden yazılır: "kitapta açık kural yok (s.115 yalnız y ekseni; s.108 örtük g(x) = 130(x − 2))". Bkz. D1-02. |
| `dogrula[1]` maksimum noktası x mi, (x, f(x)) mi | Açık kalır | s.96 "bu değeri aldığı nokta" diyor. s.99 tablosu yalnız "Yok" yazıyor. s.106 "maksimum ve minimum noktalarını bulunuz" diyor ama çözüm yok. Metinden karar verilemiyor. Kartın ikisini birlikte yazması güvenli. |
| `dogrula[2]` sabit fonksiyonun maks-min durumu | **Kapanır** | s.110 soruyu cevapsız bırakıyor ("neler söylenebilir?"); kitap teyitli. Kart konuya girmiyor, risk yok. Not olarak tutulabilir. Kartta kullanılmıyor ama s.96 tanımına göre her değer hem maksimum hem minimum olur. |
| `dogrula[3]` geçmiş sınavda fonksiyon sorusu yok; 1D2Y dağılımı yok | Açık kalır | docs/dogrula.md satır 7 ile aynı. ÖDSGM yayımlayınca kapanır. |

## docs/dogrula.md'ye eklenecekler (ana ajana)
1. "9.2.1 x ekseni ötelemesi: program s.52 kapsamda sayıyor; ders kitabında açık kural yok (s.115 yalnız y ekseni, s.108 örtük). Kartta program kaynaklı anlatım; öğretmen defteriyle teyit."
2. "9.2.1 'maksimum noktası' kitapta (s.96) x değeri mi (x, f(x)) mi belirsiz; kart ikisini birlikte yazıyor."
3. "9.2.1 sabit fonksiyonun maks-min durumu kitapta (s.110) cevapsız; kart girmiyor." (bilgi notu, kapalı)

---

KARAR: DÜZELTİLMELİ (KRİTİK 0, ÖNEMLİ 2, KÜÇÜK 9)
