# Doğruluk denetimi · matematik-u2-k2 (9.2.2 Mutlak değer fonksiyonu ve nitel özellikleri) · tur 3 (son tur)

Tarih: 2026-10-30 · Denetçi: dogruluk-denetcisi (salt okur)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u2-k2.json` (surum 3): 14 bölüm (b1–b14), 13 flashcard, 9 sik_hatalar, `dogrula` dizisi (5 madde).
- Soru bankası `dersler/matematik/sorular/matematik-u2-k2.json` (surum 3): s001–s020. Odak: s016, s019, s020; bütün `hata_turu` etiketleri (grep).
- `.claude/skills/soru-yazim-kurallari/SKILL.md` hata_turu sözlüğü (satır 83–136).
- `docs/dogrula.md` #22, #23, #28.

Karşılaştırılan kaynaklar:
- Kitap (`matematik-9sinif-ders-kitabi-1kitap_…`): s0130, s0131, s0132, s0133, s0135 bu turda yeniden okundu; s0120–s0135'te "nokta", "Noktası", "+ c / − c" grep.
- Program (`matematik-dersi_…`): s0050 satır 36, 41, 44, 46–47 (grep).

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | — |
| ÖNEMLİ | 0 | — |
| KÜÇÜK | 4 | D3-01, D3-02, D3-03, D3-04 |

- **Tur 2 bulguları:** 9 bulgudan 8'i KAPANDI; D2-08 KISMEN (D3-03'e taşındı). D2-03'ün kalıntısı D3-01.
- **Cevap anahtarı:** s016, s019, s020 bağımsız çözüldü, hepsi doğru. s020'de tek doğru şık var.
- **Rubrik:** s016 = 3+1+1+1+2 = 8, s019 = 2+2+1+2 = 7. İkisi de `puan` ve kökteki puanla aynı.
- **Kart matematiği:** b1, b6, b7, b10, b11, b12, b13, b14'teki bütün sayılar yeniden hesaplandı ve tuttu.
- **hata_turu:** Kart ve bankadaki 18 etiketin hepsi sözlükte var. Tanımlar, kullanıldıkları yerle uyumlu.
- **Yasak adlar ve birim:** "tepe", "simetri", "köşe", "katla", "ağırlık" iki dosyada da yok (grep 0 eşleşme). Bankada gram için hep "kütle" kullanılıyor.
- **Telif:** Uzun alıntı yok. s020 `kaynak` ve b2 `kitap[3]`te birer kısa yan cümle var.

KARAR: **TEMİZ** (KRİTİK 0, ÖNEMLİ 0). Dört KÜÇÜK bulgu yayını engellemiyor; düzeltilmeleri önerilir.

---

## 1. Tur 2 bulgularının durumu

| Bulgu | Durum | Kanıt |
|---|---|---|
| D2-01 b9 mama atfı | **KAPANDI** | b9 `kitap[2]` artık "|ax + b| ± c ve −|ax + b| ± c için aynı satırlı nitel özellik tablosu (s.128-129)". s.128 satır 9, 37 ve s.129 satır 3, 28 ile aynı. b9 `kaynak.kitap_sayfa` "125, 128-129, 134". Mama örneği yalnız b14 `kitap[2]`de kaldı. Orada iddia bire birlikle sınırlı ve doğru: s.132 satır 9–12'ye göre h, (0, 5/2) ve (5/2, 8)'de bire birdir. Tanım kümesinin (0, 8) olduğu s.131 satır 28'de geçiyor. |
| D2-02 "sınırlı aralıkta uçlarda" | **KAPANDI** | b10 `basit[2]` ve kontrol ipucu[0] "V yukarı açık ve aralık kapalıysa" diyor. flashcard 11 aynı. `sik_hatalar[8]` "kapalı aralıksa maksimum vardır. V yukarı açıksa uçlarda; ters V'de içteki nokta da kontrol edilir" diyor. s019 adım 3, ipucu 2 ve `puanlama_notu` "kapalı aralık ve V yukarı açık" diyor. Ters V karşı örneği (b10 `basit[9–10]`, flashcard 12) eklendi ve doğru. |
| D2-03 "minimum noktası = (x, y)" kesin tanımı | **KAPANDI** (kalıntı D3-01) | b2 `basit[3]`, b2/b5 `terimler`, b4 `basit[3]` ve flashcard 7 artık iki yazımı birlikte veriyor: "x = 0 noktasında alır; grafikte bu nokta (0, 0)". b2 `kitap[3]` kitabın "x = −b/a noktasında" (s.134 satır 17) ve "16 ve 24 noktalarında" (s.127 satır 42) yazımlarını gösteriyor. s020 kökü "en alt noktasının koordinatları" oldu. Kalıntı: b5 ve b8'de "Kitap buna/ona maksimum noktası der" (D3-01). |
| D2-04 b2 `kitap[2]` tablo | **KAPANDI** | "Tablolar boştur; bu satırları öğrenci doldurur." s.122 satır 11–12, s.126, s.128 ile uyumlu. |
| D2-05 s019 puanlama notu | **KAPANDI** | Not artık iki durumu ayırıyor: s(117)/s(123) hesabı (1 puan) için kökteki ölçümler kullanılmalı; bire birlik gerekçesinde (2 puan) başka doğru bir çift de kabul edilir. |
| D2-06 s016/s019 sızıntısı | **KAPANDI** | s019 artık ayrı bir senaryo: simit, 120 g, [112, 128]. s016 a)'nın cevabı (|x − 250|) hiçbir yerde verilmiyor. Kart b10'daki yazılı örneği levhaya geçti (20 mm, [18, 22]). Ekmek senaryosu kartta yok. Kalan kalıp benzerliği için 3. bölüme bak. |
| D2-07 kütle/ağırlık | **KAPANDI** | Grep: "ağırlık" 0. "kütle" s016 (satır 773–788) ve s019'da (satır 844–880) kullanılıyor. Kart b11'de "tartılan 47 kg" nötr. |
| D2-08 #28 metni | **KISMEN** | Puanlar güncel (s016 8, s019 7). Ama "birlikte 15" ifadesi kaldı; iki soru artık ayrı senaryo (D3-03). |
| D1-03 hata_turu sözlüğü | **KAPANDI** | SKILL.md satır 123–129'da `mutlak_eksi`, `eksi_mutlak_karistirma`, `parcali_isaret`, `sifir_aralik_kontrol`, `yansima_kapsam`, `tek_sifir`, `maksimum_varlik` var. Ayrıntı 4. bölümde. |

## 2. Kartın yeni ve değişen bölümleri (bağımsız doğrulama)

| Bölüm | Kontrol | Karar |
|---|---|---|
| b1 | "Formül = cebirsel temsil" doğru; s.131 satır 14 ve s.133 satır 8 "cebirsel temsil"i bu anlamda kullanıyor. Sapma: \|118 − 120\| = 2 ✓. `terimler` cebirsel temsil için "g(x) = \|x − 120\|", sapma için "118 → 2 cm" veriyor; b11 ile tutarlı. | DOĞRU |
| b6 | \|x\|: x < 0 → −x, x ≥ 0 → x. −\|x\|: x < 0 → x, x ≥ 0 → −x ✓. h(−4) = −4, h(3) = −3 ✓. Cevap adımı 2–3: "x < 0 iken \|x\| = −x; h = −(−x) = x" ✓. Doğrudan kontrol (puan_ipucu) −\|−4\| = −4 ✓. | DOĞRU |
| b7 | \|x − 4\|: x < 4 → −x + 4, x ≥ 4 → x − 4; \|1 − 4\| = 3 = −1 + 4 ✓. \|x + 3\|: x < −3 → −x − 3, x ≥ −3 → x + 3; g(−5) = 2, g(1) = 4 ✓. Kontrol: \|x − 6\|, satırlar x = 6'da ayrılıyor, x ≥ 6 satırı x − 6 ✓. `kitap[0]` s.134 "a > 0 iken" ✓. | DOĞRU |
| b10 | [18, 22]: 2, 0, 2 → maks 2, min 0, görüntü kümesi [0, 2] ✓. [17, 21]: 3 ve 1 → maks 3 (x = 17) ✓. Kontrol [15, 22]: 5 ve 2 → 5 (x = 15) ✓. Ters V: −\|x\| + 4, [−2, 3] aralığında uçlar −2 + 4 = 2 ve −3 + 4 = 1, x = 0'da 4 → maks 4 (x = 0) ✓. Kural "V yukarı açık ve aralık kapalıysa" diyor; koşullar tam. `kitap[0–1]` s.127 satır 39–43 ✓. | DOĞRU |
| b11 | \|x − 120\|, \|123 − 120\| = 3 ✓. Halat: hedef 75, g(x) = \|x − 75\|, [70, 80]; g(72) = 3 (3 m kısa), g(79) = 4 (4 m uzun) ✓. Kontroller: \|x − 30\| ✓, \|47 − 50\| = 3 ✓. `kitap[2]` araştırma ödevi s.133 satır 15–20 (tablo, cebirsel temsil, uygun tanım aralığı) ✓. | DOĞRU |
| b12 | 8 ÷ 2 = 4; 8 − 4t / 4t − 8 → f(t) = \|4t − 8\|; f(2) = 0; [0, 4]; f(0) = f(4) = 8 ✓. Adım 7–10 doğru. Kontrol f(1) = 4 ✓. Dalış teknesi \|12t − 12\|, [0, 2], f(1) = 0, f(0) = f(2) = 12, f(0,5) = 6 ✓. `kitap[0–1]` s.133 satır 3–9 ✓. | DOĞRU |
| b13 | Yazım: "\|ax + b\| + c, c işaretiyle". c > 0 yukarı, c < 0 aşağı ✓. −\|x − 2\| + 3: maks 3 (x = 2) ✓. h = \|2x − 4\| + 1: min 1 (x = 2), h(0) = 5 ✓. `kitap[0]` "orada c pozitif (s.130)": s.130 satır 13'te "(a, b, c ∈ ℝ⁺)", satır 39'da "(c ∈ ℝ⁺)" ✓. `kitap[1]`, program s.50 satır 36 ve 41'deki "m(x) = ±\|ax ± b\| ± c, c ∈ ℝ" ile aynı ✓. "Kitabın \|ax + b\| − c yazımı = kartta işareti eksi olan c" eşleştirmesi doğru. Kitap c'yi pozitif alıp işareti ayrı yazıyor; kart işareti c'nin içine katıyor; ikisi aynı fonksiyon kümesini veriyor. `kitap[3]` (b < c → y kesimi eksi): s.130 satır 17–19 ✓; y kesimi \|b\| − c = b − c olduğu için matematik de doğru. | DOĞRU |
| b14 | \|x − 3\| − 2: min −2 (x = 3), [−2, ∞), sıfırlar 1 ve 5, (1, 5)'te − ✓. V üçlüsü: \|x\| + 3 → min 3, sıfır yok; \|x\| → bir sıfır (0); \|x\| − 3 → ±3 ✓. Ters V üçlüsü: −\|x\| − 3 → maks −3, sıfır yok; −\|x\| → bir sıfır (0); −\|x\| + 3 → ±3 ✓. Genel kural iki yönde de doğru (a ≠ 0). "\|ax + b\| + c'nin minimum değeri c; −\|ax + b\| + c'nin maksimum değeri c" doğru (a ≠ 0 iken içi 0 yapılabilir). Kontrol −\|x\| − 2: maks −2 < 0 → sıfır yok ✓. \|2x − 2\| − 4: x = 1, [−4, ∞), sıfırlar −1 ve 3, satır kontrolü ✓. İşaret gösterimi b13 ile tutarlı ("c, b13'teki gibi işaretiyle alınır"); flashcard 8, 13 ve `sik_hatalar[5]` de aynı yazımı kullanıyor. `kitap[1]` s.135 Alıştırma 2 (satır 25–30, "Sıfırlarını") ✓. | DOĞRU |
| Flashcard 1–13 | Hepsi matematik olarak doğru. Flashcard 12: −\|x\| + 4, [−2, 3] → 4 ✓. Flashcard 13 iki üçlü ✓. | DOĞRU |

**"x = 0 noktasında alır; grafikte bu nokta (0, 0)" kalıbı.** Bu kalıp b2, b4, b5 `terimler`, b8, b9 ve flashcard 6–7'de kullanılıyor. Kitapla çelişmiyor: kitap s.134 satır 17/34'te "x = −b/a noktasında", s.127 satır 42'de "16 ve 24 noktalarında" diyor; kart bu yazımı veriyor ve grafikteki yeri ayrıca söylüyor. #22 ile de uyumlu, çünkü iki yazım birlikte öğretiliyor. Tek kalıntı, kitaba (x, y) adlandırmasının mal edilmesi (D3-01).

## 3. Soru bankası (bağımsız çözüm)

| Soru | Benim çözümüm | Anahtar | Karar |
|---|---|---|---|
| s016 | s(x) = \|x − 250\|; s(240) = 10, s(250) = 0, s(260) = 10; s sürekli olduğu için görüntü kümesi [0, 10]. Sıfır 250: "tam 250 g iken sapma yok". Rubrik 3+1+1+1+2 = 8 = `puan` = kökteki "(8 puan)". `puanlama_notu` (açık parantez, {0, 10}, tam sayı) `aralik_uc` ve `tamsayi_sanma` ile uyumlu. | ✓ | DOĞRU |
| s019 | \|x − 120\| ≥ 0 → min 0 (x = 120). Kapalı aralık ve V yukarı açık: s(112) = s(128) = 8 → maks 8 (x = 112 ve 128). s(117) = s(123) = 3 → bire bir değil. Rubrik 2+2+1+2 = 7 = `puan`. Zorluk 2 içeriğe uygun (tek adımlı hesaplar). | ✓ | DOĞRU |
| s020 | x − 5 = 0 → x = 5, f(5) = 2 → en alt nokta (5, 2). "2" yalnız değer: `kavram_karisikligi` (değer/nokta) uyumlu. "(5, 0)" +2'yi unutmak: `eksik_adim` (ara sonucu cevap sanmak) uyumlu. "(−5, 2)" işaret: `carpim_sifir_isaret` (sözlük örneği x − 3 = 0 → −3) uyumlu. İkinci savunulabilir doğru şık yok. Kök "koordinatları" dediği için #22 hangi yönde kapanırsa kapansın anahtar değişmiyor. | (5, 2) | DOĞRU (`dogrula` metni D3-04) |

**Sızıntı kontrolü:**
- **s016 ↔ s019:** Doğrudan cevap sızıntısı yok; senaryo, hedef, aralık ve sayılar farklı. s019 bağlamındaki "s(x) = \|x − 120\|", s016 a)'daki kalıbı (\|ölçülen − hedef\|) örnekliyor. Ama bu kalıbı kart b11 zaten açıkça öğretiyor; bu bilerek yapılmış bir benzerlik, bulgu sayılmadı. Panel ikisini aynı oturumda arka arkaya gösterirse s019'u s016'dan sonra sunmak yeterli.
- **Kart b1/b11 (\|x − 120\| cm, 118 ve 123) ↔ s019 (\|x − 120\| g, [112, 128], 117 ve 123):** Cevap sızıntısı yok. Kart [110, 130] aralığında maksimum hesaplamıyor; s019 a)'nın sayısı (8) kartta geçmiyor. Aynı formülün iki farklı birimle kullanılması (cm ve g) bir karışıklık riski taşıyor ama bu risk düşük ve matematik hatası yok. İstenirse s019'un hedefi 100 g, aralığı [92, 108] yapılabilir (isteğe bağlı, bulgu değil).
- **Kart ↔ banka diğer:** Kart b10 yazılı örneği (levha [18, 22]) s019 ile aynı soru tipinde ama sayılar farklı. Bunun amacı alıştırma; sızıntı değil.

## 4. hata_turu sözlüğü

Kart `sik_hatalar` ve bankadaki bütün etiketler: `mutlak_eksi`, `parcali_isaret`, `yansima_kapsam`, `carpim_sifir_isaret`, `eksi_mutlak_karistirma`, `oteleme_yonu`, `sifir_aralik_kontrol`, `tek_sifir`, `maksimum_varlik`, `tanim_goruntu_karistirma`, `okuma_hatasi`, `kavram_karisikligi`, `isaret_hatasi`, `eksik_adim`, `esitsizlik_yonu`, `aralik_uc`, `tamsayi_sanma`, `sonsuz_koseli`. Toplam 18 etiket; hepsi SKILL.md satır 86–134'te var.

Yeni 7 tanım, kullanıldıkları yerle şöyle eşleşiyor:
- `mutlak_eksi` (\|−3\| = −3): kart `sik_hatalar[0]` ve banka satır 34, 319 ile aynı.
- `eksi_mutlak_karistirma` (−\|x\| / \|−x\|): `sik_hatalar[4]` ile aynı.
- `parcali_isaret` (−x'i hep eksi sanmak): `sik_hatalar[1]` ve b6 `basit[2]` ile aynı.
- `sifir_aralik_kontrol`: `sik_hatalar[6]` ile kelimesi kelimesine aynı. Bankada artık kullanılmıyor; bu sorun değil.
- `yansima_kapsam`: `sik_hatalar[2]` ile aynı.
- `tek_sifir`: Sözlük örneği yalnız V durumunu (\|x\| − 4) veriyor. Kart `sik_hatalar[7]` ters V'yi de kapsıyor. Kart sözlüğün kapsamını genişletiyor ama onunla çelişmiyor; uyumlu.
- `maksimum_varlik` ("ℝ'de V'nin maksimumunu aramak ya da kapalı aralıkta 'maksimum yok' demek"): `sik_hatalar[8]` ile s019 `puanlama_notu` ve rubrik ile aynı.

`carpim_sifir_isaret` adı çarpımı ima ediyor ama sözlük örneği (x − 3 = 0 → x = −3) tek çarpanlı durumu da kapsıyor. Bu yüzden s020 ve `sik_hatalar[3]`te kullanılması uygun.

---

## Bulgular

### D3-01 · KÜÇÜK · b5 ve b8: "Kitap buna/ona maksimum noktası der" (D2-03 kalıntısı)
- **Yerler:**
  - kart `bolumler[4].katmanlar.basit[1]` (b5): "V ters döner; en üst nokta (0, 0) olur. Kitap buna **maksimum noktası** der."
  - kart `bolumler[7].katmanlar.basit[5]` (b8): "… aynı nokta en üst nokta olur. Kitap ona maksimum noktası der." Burada "aynı nokta", `basit[4]`teki (3, 0)'ı gösteriyor.
  - Daha hafif: b2 `basit[3]`: "grafikte bu nokta (0, 0)'dır. Kitap bu yere **minimum noktası** der." "Bu yer" hem x = 0'ı hem (0, 0)'ı gösterebilir.
- **Kitap karşılığı:** Kitap "Maksimum Noktası / Minimum Noktası" adını yalnız boş tablo satırı olarak kullanıyor (s.122 satır 11–12, s.123, 126, 128, 129, 135 satır 21–22). Metinde "nokta" sözünü x değeri için kullanıyor: "maksimum değerini x = −b/a noktasında alır" (s.134 satır 34), "16 ve 24 noktalarında" (s.127 satır 42). Kitap hiçbir yerde grafikteki (0, 0) ya da (3, 0) ikilisine "maksimum noktası" demiyor.
- **Karar:** KAYNAKSIZ atıf. Kartın kendi b2 `kitap[3]` maddesiyle ve #22'nin "açık" durumuyla gerilim yaratıyor. Matematik doğru, s020'nin anahtarı etkilenmiyor.
- **Öneri:**
  - b5: "… en üst nokta (0, 0) olur. −|x| en büyük değerini x = 0 noktasında alır; kitabın tablosunda bu satırın adı **maksimum noktası**dır."
  - b8: "Önünde eksi varsa, yani −|2x − 6|'da, aynı yer en üst nokta olur: maksimum değer 0, x = 3 noktasında alınır."
  - b2: "Kitap bu x'e de 'nokta' der ve tablosunda **minimum noktası** satırına yazdırır."

### D3-02 · KÜÇÜK · docs/dogrula.md #22 metni eskimiş
- **Şu anki metin:** "kart (b2, b4, b5 terimleri, flashcard 7) ve s020 (x, y) ikilisi kullanıyor".
- **Sorun:** Surum 3'te kart iki yazımı birlikte veriyor. s020 kökü artık "minimum noktası" demiyor, "grafiğin en alt noktasının koordinatları" diyor. Bu yüzden #22 s020'yi etkilemiyor. Kartın `dogrula[0]` maddesi de "b2, b4, b5, b8, flashcard 6-7" diyor; iki metin uyuşmuyor.
- **Öneri (ana ajan yazar):** "9.2.2'de kitap s.127 ve s.134'te x değerini 'nokta' sayıyor. Kart iki yazımı birlikte öğretiyor: 'x = 0 noktasında alır; grafikte (0, 0)' (b2, b4, b5, b8, flashcard 6–7). s020 kökü 'en alt noktanın koordinatları' olduğu için anahtar bu teyitten bağımsız. Öğretmenin yazılıda 'minimum noktası' ile hangisini beklediği soruluyor."

### D3-03 · KÜÇÜK · docs/dogrula.md #28 "birlikte 15" (D2-08 devamı)
- **Şu anki metin:** "s016 8 + s019 7, birlikte 15".
- **Sorun:** Surum 3'te s016 (ekmek, 250 g) ile s019 (simit, 120 g) ayrı senaryolar; birlikte tek 15 puanlık soru oluşturmuyorlar.
- **Öneri:** "(s015 10; s016 8; s019 7; s017, s018 15 puan)".

### D3-04 · KÜÇÜK · s020 `dogrula`: "… beklediği açık" ifadesi iki anlama geliyor
- **Yer:** banka `matematik-u2-k2-s020.dogrula[0]`: "Öğretmenin 'minimum noktası' ile x değerini mi (x, y) ikilisini mi beklediği açık (docs/dogrula.md #22)."
- **Sorun:** Türkçede "açık" sözü "belli, net" diye okunabilir; kastedilen ise "teyit bekliyor". Bu metin öğrenciye gösterilmiyor ama kayıt olarak ters anlam taşıyor.
- **Öneri:** "… beklediği henüz teyit edilmedi (docs/dogrula.md #22, açık madde)."

---

## Diğer kontroller

- **Müfredat dışı:** Yok. Ters V kapalı aralık örneği (b10) ve ters V sıfır üçlüsü (b14) program s.50 satır 44'teki "m(x) = ±|ax ± b| ± c … nitel özellikler" kapsamında.
- **Kaynaksız terim (bulgu değil, not):** b7 `basit[0]` ve `terimler[0]`daki "**ayırma yeri**" kitapta yok. Kart bunu "diyelim" diye kendi adı olarak sunuyor ve matematik doğru. Kitabın karşılığı "x = −b/a" ya da "içini sıfır yapan x". İstenirse terim tanımına "(kitapta bu ad yok; kitap x = −b/a yazar)" eklenebilir.
- **Kaynaksız iddia / gerçek kurum:** Bağlamlar (boru, halat, levha, kepçe, vinç, römorkör, dalış teknesi, fırın) kurgusal. Kart `dogrula[3]` bunu söylüyor. Gerçek kurum, kişi ya da istatistik yok.
- **DOĞRULA:** Kart `dogrula[0]` → #22, `dogrula[1]` → #23. s015–s019 → #28. Hepsinin dogrula.md'de karşılığı var. #23'ün metni güncel: dosya kapsamı `konular/matematik-u2-k2.json` ve `sorular/matematik-u2-*.json`, 1D1Y lastik basıncı notu kartla aynı. #22 ve #28 için D3-02 ve D3-03'e bak.
- **Telif:** b2 `kitap[3]` iki kısa tırnaklı yan cümle içeriyor (s.134, s.127). s020 `kaynak`ta bir yan cümle var. Sınırın içinde.

## Kontrol edilemeyenler
- s001–s015, s017, s018 bu turda yalnız `hata_turu` etiketleri için grep'lendi. Cevapları tur 2'de çözülmüştü; surum 3'te değişmedikleri varsayıldı.
- Kitap s.120–s.129 ve s.134 bu turda tam okunmadı. Yalnız grep'le ("nokta", "Noktası", "+ c / − c") ve tur 1–2 okumasıyla karşılaştırıldı.
- Panel verisi (`panel/data/matematik.js`), u2-k2 üreteçleri ve s016/s019'un panelde aynı oturumda gösterilip gösterilmediği kapsam dışı.

---

KARAR: TEMİZ (KRİTİK 0, ÖNEMLİ 0, KÜÇÜK 4). Yayın engeli yok.
