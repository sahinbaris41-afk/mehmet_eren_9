# Doğruluk denetimi · matematik-u2-k2 (9.2.2 Mutlak değer fonksiyonu ve nitel özellikleri) · tur 2

Tarih: 2026-10-30 · Denetçi: dogruluk-denetcisi (salt okur)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u2-k2.json` (surum 2): 13 bölüm (b1–b13), 11 flashcard, 9 sik_hatalar, `dogrula` dizisi.
- Soru bankası `dersler/matematik/sorular/matematik-u2-k2.json` (surum 2): s001–s020 (20 soru).
- `docs/dogrula.md` #22, #25, #26, #27, #28.
- `.claude/skills/soru-yazim-kurallari/SKILL.md` hata_turu sözlüğü (grep).

Karşılaştırılan kaynaklar:
- Kitap (`matematik-9sinif-ders-kitabi-1kitap_…`): s0122, s0126–s0135 bu turda yeniden okundu (tur 1'de s0120–s0135 tamamı okunmuştu).
- Program (`matematik-dersi_…`): s0050 satır 36–48.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | — |
| ÖNEMLİ | 3 | D2-01, D2-02, D2-03 |
| KÜÇÜK | 6 | D2-04 … D2-08, D1-03 (devam) |

- **Cevap anahtarı:** 20 sorunun hepsi bağımsız çözüldü, hepsi doğru. s020'de tek doğru şık var, çeldiriciler değerce farklı.
- **Rubrik toplamları:** s015 = 10, s016 = 3+2+1+2 = 8, s019 = 2+2+1+2 = 7 (s016 + s019 = 15), s017 = 15, s018 = 15. Hepsi `puan` ile tutuyor.
- **Kart matematiği:** b9, b10, b11, b13'ün bütün sayıları, tabloları, çözüm adımları elle yeniden hesaplandı ve tuttu. Sorunlar matematik hesabında değil, iki genellemede ve bir kitap atfında.
- **Yasak adlar:** "tepe", "simetri", "köşe" kart ve bankada **hiç yok** (grep, büyük/küçük harf, 0 eşleşme).
- **Telif:** Kitaptan uzun birebir alıntı yok. s020 `kaynak`taki tırnaklı alıntı tek yan cümle.

KARAR: **DÜZELTİLMELİ** (KRİTİK yok; yayın engeli yok)

---

## 1. Tur 1 bulgularının durumu

| Bulgu | Durum | Kanıt |
|---|---|---|
| D1-01 sıfır sayısı kuralı | **KAPANDI** | b13 `basit[4]`, `basit[5]`: \|…\| + c için c > 0 → yok, c = 0 → bir, c < 0 → iki; −\|…\| + c için tersi. Örnekler doğru: −\|x\| + 6 → ±6; −\|x\| − 1 → sıfır yok; \|x\| − 4 → ±4 (kontrol 2); \|x − 3\| − 2 → 1, 5 ve \|x − 3\| + 2 → min 2 (kontrol 1). İşaretli c yazımı program s.50 satır 41 "c ∈ ℝ" ile uyumlu. `sik_hatalar[7]` (`tek_sifir`) iki durumu da veriyor. Açık kalan durum yok. |
| D1-02 tepe / simetri ekseni | **KAPANDI** | Grep 0 eşleşme. #25 kapalı. |
| D1-03 hata_turu sözlüğü | **KISMEN** | s006 şık 4 → `kavram_karisikligi` ✓, `maksimum_arama` → `maksimum_varlik` ✓, `tepe_isaret` → `carpim_sifir_isaret` ✓, s017'den `sifir_aralik_kontrol` çıkarıldı ✓. Ama SKILL.md sözlüğünde `mutlak_eksi`, `parcali_isaret`, `yansima_kapsam`, `eksi_mutlak_karistirma`, `tek_sifir`, `sifir_aralik_kontrol`, `maksimum_varlik` hâlâ yok (grep). Ana ajana. |
| D1-04 dogrula[1] / #27 | **KAPANDI** | Kartta #26 atfı yok; #27 gövdesi PyMuPDF teyidini anlatıyor. |
| D1-05 b8 "hepsi ters döner" | **KAPANDI** | b8 `basit[4]`: "Değişmeyenler: tanım kümesi ℝ, sıfır 20 ve bire bir olmama." Doğru (s.134 satır 21, 23, 35). |
| D1-06 s016 tanım kümesi | **KAPANDI** | s016 `kok`: "240 g ile 260 g arasındaki bütün değerleri alabilir … [240, 260] kapalı aralığıdır." |
| D1-07 s018 kaynak / yazım | **KAPANDI** | `kaynak.kitap` "5. Sıra Sizde (2. soru), s.132–133" doğru (başlık s.132 satır 13, soru s.133 satır 3–9). Adım 14 "tekne iskelededir" doğru. |
| D1-08 b2 `kitap[2]` atfı | **KISMEN** | Atıf "(s.122, s.134)" oldu; ama cümle kitabın tabloyu doldurduğunu söylüyor (D2-04). |

## 2. Kartın yeni ve değişen bölümleri (bağımsız doğrulama)

| Bölüm | Kontrol | Karar |
|---|---|---|
| b2 | Yalnız x < 0 kısmı (x ekseninin altı) yansıtılıyor, üst kısım kalıyor (`basit[0–2]`, `ornek_cevap[2–3]`, kontrol 3, flashcard 2). s.129 satır 41–43 "f nin işaretinin negatif olduğu kısmın x eksenine göre yansıması" ile uyumlu, kendi içinde tutarlı. (−2, −2) → (−2, 2), (−5, −5) → (−5, 5) | DOĞRU (`kitap[2]` D2-04; terim D2-03) |
| b4 | (−∞, 0] azalan, [0, ∞) artan; min değer 0 (x = 0), maks yok; bire bir değil | DOĞRU (`basit[3]` D2-03) |
| b6 | \|x − 4\|: x < 4 → −x + 4, x ≥ 4 → x − 4; \|1 − 4\| = 3 = −1 + 4 ✓. \|x + 3\|: x < −3 → −x − 3, x ≥ −3 → x + 3; g(−5) = 2, g(1) = 4 ✓. `kitap[2]` "a > 0 iken" s.134 satır 7 ile aynı | DOĞRU |
| b8 | \|x + 2\|: [0, ∞), sıfır −2, (−∞, −2] azalan, [−2, ∞) artan, min 0 (x = −2), maks yok; g(−3) = g(−1) = 1 ✓. `kitap[2]` s.128–129 Tablo 1–2 satırları ✓ | DOĞRU |
| b9 | [18, 22]: g(18) = g(22) = 2, g(20) = 0 ✓. [17, 21]: 3 ve 1 → maks 3 (x = 17) ✓. Kontrol [15, 22] → 5 (x = 15) ✓. ℝ'de maks yok ✓. `basit[1]` "V yukarı açıksa en büyük değer uçlardan birindedir": **doğru ve yeterli** (yukarı açık V, kapalı aralıkta en büyük değeri her zaman bir uçta alır). Ters V için kart bu cümlede iddiada bulunmuyor. `kitap[0–1]` s.126–127 ile aynı | Hesaplar DOĞRU; `kitap[2]` YANLIŞ atıf (D2-01); kontrol ipucu ve sik_hatalar genellemesi (D2-02) |
| b10 | \|118 − 120\| = 2, \|123 − 120\| = 3; \|x − 30\|; \|47 − 50\| = 3; ekmek: \|x − 250\|, [240, 260], g(244) = g(256) = 6 ✓. `kitap[0]` s.127 satır 12–14, `kitap[1]` s.127 satır 9–12, `kitap[2]` s.133 satır 13–20 ✓ | DOĞRU (D2-07) |
| b11 | Hız 8 ÷ 2 = 4; gidiş 8 − 4t, dönüş 4t − 8, f(t) = \|4t − 8\|; f(2) = 0; [0, 4]; f(0) = f(4) = 8 (rıhtım) ✓. Kontrol f(1) = 4 ("4 km gidilmiş, 4 km kalmış") ✓; t = 2 ✓. Dalış teknesi: 12 km/sa, \|12t − 12\|, [0, 2], f(1) = 0, f(0) = f(2) = 12; f(0,5) = 6 ✓. `kitap[0–1]` s.133 satır 3–9 (5 km, 20 dk, mola yok, cebirsel temsil + grafik) ✓; `kitap[2]` program s.50 satır 44–48 ✓ | DOĞRU |
| b12 | (2, 0) → (2, 3) / (2, −3); −\|x − 2\| + 3 maks (2, 3); h = \|2x − 4\| + 1: (2, 1), h(0) = 5 ✓. `kitap[2]` s.130 satır 17–19 ✓ | DOĞRU |
| b13 | \|x − 3\| − 2: min −2 (x = 3), [−2, ∞), sıfırlar 1, 5, (1, 5)'te − ✓; kepçe x = 1, 3, 5 değerleri tutuyor. \|2x − 2\| − 4: x = 1, [−4, ∞), sıfırlar −1, 3, kontrol g(3) = g(−1) = 0 ✓. `kitap[1]` s.135 satır 25–30 ✓; `kitap[2]` s.132 satır 9–12 ✓ | DOĞRU (D1-01 kapandı) |
| Flashcard 1–11 | Hepsi matematik olarak doğru | DOĞRU (flashcard 7 D2-03) |

## 3. Soru bankası (odak sorular, bağımsız çözüm)

| Soru | Benim çözümüm | Anahtar | Karar |
|---|---|---|---|
| s012 | \|x − 1\| = 3 → 4, −2; adımlar 1–6 doğru, kontroller g(4) = g(−2) = 0 | −2 ve 4 | DOĞRU |
| s013 | 2x = 6 → 3; tablo x = 2, 3, 4, 5 → 2, 0, 2, 4 ✓ | [3, ∞) | DOĞRU |
| s015 | x = 4; −2x + 8 / 2x − 8; g(1) = g(7) = 6; rubrik 10 | ✓ | DOĞRU |
| s016 | s(x) = \|x − 250\|; s(240) = s(260) = 10, s(250) = 0 → [0, 10]; sıfır 250, anlam doğru. Tanım kümesi kökte açık. Rubrik 3+2+1+2 = 8 | ✓ | DOĞRU (D2-06, D2-07) |
| s019 | min 0 (x = 250), maks 10 (x = 240, 260); s(245) = s(255) = 5 → bire bir değil. Rubrik 2+2+1+2 = 7 | ✓ | DOĞRU (gerekçe D2-02, puanlama D2-05) |
| s017 | Adım 10 "−(2x − 4) = 2, yani 2x − 4 = −2" ✓; 1 ve 3 kendi aralığında ✓; rubrik 15 | ✓ | DOĞRU |
| s018 | 15 km/sa; gidiş 30 − 15t (0 ≤ t ≤ 2), dönüş 15t − 30 (2 ≤ t ≤ 4); f(1) = f(3) = 15; min 0 (t = 2), maks 30 (t = 0, 4); rubrik 15 | ✓ | DOĞRU |
| s020 | \|x − 5\| ≥ 0 → x = 5, f(5) = 2 → (5, 2). "2" yalnız değer (`eksik_adim` uyumlu), "(2, 5)" sıra hatası (`kavram_karisikligi` uyumlu), "(−5, 2)" işaret hatası (`carpim_sifir_isaret` uyumlu). #22 hangi yönde kapanırsa kapansın şıklar arasında ikinci doğru yok ("5" şıkta yok) | (5, 2) | DOĞRU (açıklama dili D2-03) |

---

## Bulgular

### D2-01 · ÖNEMLİ · b9 `kitap[2]`: mama örneği atfı yanlış
- **Yer:** kart `bolumler[8].katmanlar.kitap[2]` (b9): "Mama örneğinde (s.131-132) de x bir aralıkta tanımlıdır ve minimum, maksimum değerler istenir."
- **Kitap karşılığı:** s.131 satır 13–21: 6. Örnek'in soruları a) cebirsel temsil, b) grafik, c) azalan olduğu değerler, ç) bire birlik aralıkları. Minimum-maksimum sorulmuyor. Ayrıca tanım kümesi **açık** aralık: "h: ( 0, 8 )" (s.131 satır 28). Açık aralıkta h(x) = \|2x − 5\| + 3'ün maksimum değeri yoktur (14'e yaklaşır ama almaz). Min-maks s.132 "5. Sıra Sizde" 1c'de soruluyor, o da ℝ'de.
- **Karar:** YANLIŞ (kaynakta olmayan iddia). Üstelik bölümün "kapalı aralıkta maksimum vardır" fikrine karşı örnek oluşturuyor.
- **Öneri:** Cümleyi sil ya da şöyle yaz: "Alıştırmada (s.135) direnç örneği de bir aralıkta tanımlıdır; 680 ohm ±%5'te hata miktarı yine uçlarda en büyüktür." (Bu ikinci cümle kitapta çözülmüş değil; eklenirse kaynak "s.135 Alıştırma 1, kartın çözümü" diye yazılmalı.) En güvenlisi silmek. `kaynak.kitap_sayfa` "126-127, 131-132" → "126-127".

### D2-02 · ÖNEMLİ · "Sınırlı aralıkta en büyük değer uçlardadır" genellemesi eksik koşullu
- **Yerler:**
  - kart b9 `kontrol_sorulari[0].ipuclari[0]`: "Sınırlı aralıkta en büyük değer uçlardan birinde çıkar."
  - kart `sik_hatalar[8]` (`maksimum_varlik`): "Tersine, tanım kümesi kapalı aralıksa maksimum vardır ve uçlarda aranır."
  - banka s019 `cozum_adimlari[2]`: "Tanım kümesi sınırlıdır; en büyük sapma uçlardadır."
  - banka s019 `puanlama_notu`: "Tanım kümesi sınırlı olduğu için maksimum vardır; …"
- **Sorun:** İki ayrı eksik koşul.
  1. **Ters V:** −\|x\|'in [−1, 1]'deki en büyük değeri x = 0'da (iç nokta), uçlarda değil. b9 `basit[1]` doğru biçimde "V yukarı açıksa" diyor; ipucu ve sik_hatalar bu koşulu düşürmüş (D1-01 ile aynı tür hata).
  2. **Sınırlı ≠ kapalı:** Sınırlı ama açık aralıkta maksimum olmayabilir; kitabın kendi mama örneği (0, 8) buna örnek (D2-01). "Maksimum vardır" gerekçesi "sınırlı" değil "kapalı aralık (uçlar dahil)" olmalı. b9 `basit[0]` kapalı aralığı doğru tanımlıyor; s019 ve ipucu farklı sözcük kullanıyor.
- **Karar:** YANLIŞ genelleme (kartta ve bankada bu genellemenin yanlış sonuç verdiği bir soru yok; bu yüzden KRİTİK değil).
- **Öneri:**
  - b9 kontrol ipucu[0]: "V yukarı açık ve aralık kapalıysa en büyük değer uçlardan birinde çıkar."
  - `sik_hatalar[8]`: "… Tersine, tanım kümesi kapalı aralıksa maksimum vardır; V yukarı açıksa uçlarda aranır."
  - s019 adım 3: "Tanım kümesi kapalı aralıktır ve V yukarı açıktır; en büyük sapma uçlardadır."
  - s019 `puanlama_notu`: "Tanım kümesi kapalı aralık olduğu için maksimum vardır; …"

### D2-03 · ÖNEMLİ · "Minimum noktası (x, y) ikilisidir" kesin tanım olarak yazılmış; kitap x değerine de "nokta" diyor (#22 açık)
- **Yerler:** b2 `basit[3]` ve `terimler[1]` ("Minimum değer yalnız y'dir (0), minimum noktası ise (x, y) ikilisidir"); b4 `basit[3]` ("Dikkat: … minimum noktası ise (x, y) ikilisidir"); b5 `terimler[0]`; flashcard 7 ("Minimum noktası (x, y) ikilisidir"); banka s020 şık "2" `aciklama` ("minimum noktası … (x, y) olarak yazılır").
- **Kitap karşılığı:** s.127 satır 39–43: "ölçülen sıcaklık değerleri fonksiyonun maksimum ve minimum noktaları ile ilgilidir … maksimum değerini 16 ve 24 noktalarında aldığı"; s.134 satır 17 "minimum değerini x = −b/a noktasında alır", satır 34 aynı kalıp. Kitap hiçbir yerde "minimum noktası = (x, y)" tanımı vermiyor; tablolar (s.122, 126, 128, 129, 135) boş satır.
- **Karar:** KAYNAKSIZ kesin iddia. Kartın `dogrula[0]` maddesi belirsizliği kabul ediyor ama öğrenciye giden metinde (özellikle flashcard 7 ve b4 "Dikkat") etiket yok; öğrenci kitaptaki "x = −b/a noktasında" yazımını yanlış sanabilir. s020'nin anahtarı etkilenmiyor.
- **Öneri:** Kesin tanımı "iki yazımı da tanı" kalıbına çevir:
  - b4 `basit[3]` / flashcard 7 arka: "Minimum değer yalnız y'dir: 0. Kitap bu değerin alındığı x'e de 'nokta' der: 'x = 0 noktasında alır' (s.134). Grafikteki yeri (0, 0)'dır. Yazılıda ikisini birlikte yaz: 'x = 0'da alır, nokta (0, 0)'."
  - b2/b5 `terimler`: "… |x| için x = 0'da; grafikte (0, 0) noktası." "(x, y) ikilisidir" cümlesini çıkar.
  - s020: kökü "f(x) = |x − 5| + 2 grafiğinin en alt noktasının koordinatları hangisidir?" yap ya da şık "2" açıklamasını "2 minimum değerdir; soru, bu değerin alındığı x ile birlikte grafikteki noktayı istiyor." yap. Kart ve s020 `dogrula` (#22) maddeleri kalır.

### D2-04 · KÜÇÜK · b2 `kitap[2]`: "Kitap bu noktayı … satırına yazar"
- s.122 Tablo 2 (satır 5–14) ve s.126, 128, 129 tabloları boştur, öğrenci doldurur; s.134 tablo değil madde listesidir. Kitap (0, 0)'ı hiçbir satıra yazmıyor.
- **Öneri:** "Kitabın nitel özellik tablolarında 'Minimum Noktası' ve 'Maksimum Noktası' satırları vardır (s.122, 126, 128). Bu satırları sen doldurursun: |x| için minimum, −|x| için maksimum satırına gelir."

### D2-05 · KÜÇÜK · s019 `puanlama_notu`: "240 ve 260 ya da başka bir doğru çift de kabul edilir"
- Kök b) "Örnek ölçümlerdeki iki ekmeğin sapmalarını bulup" diyor ve rubrikte 1 puanlık ölçüt "s(245) = 5 ve s(255) = 5 bulma". Not, başka çifti kabul ediyor; hangi ölçüt için geçerli olduğu belirsiz.
- **Öneri:** "Bire birlik gerekçesinde (2 puanlık ölçüt) 240 ve 260 ya da başka doğru bir çift de kabul edilir; s(245), s(255) hesabı (1 puan) için örnek ölçümler kullanılmalıdır."

### D2-06 · KÜÇÜK · s019 bağlamı s016 a) cevabını veriyor; kart b10 yazılı örneği de aynı senaryo
- s019 `baglam`: "sapması s(x) = |x − 250| gramdır". s016 a) bunu soruyor (3 puan). İki soru 8 + 7 = 15 puanlık tek yazılı sorusu olarak birlikte gösterilirse cevap sızar.
- Kart b10 `yazilida` (fırın, 250 g, [240, 260], g(x) = |x − 250|) s016'nın a) şıkkının çözülmüş hâli; s016 bağımsız ölçme yapmıyor.
- **Öneri:** Panel ikisini birlikte gösteriyorsa s019 bağlamından formülü çıkar ("s016'daki s fonksiyonu" de) ya da s016 ve s019'u ayrı oturumlarda sun. Kart b10 örneğinde hedefi değiştir (ör. 500 g, [490, 510]).

### D2-07 · KÜÇÜK · "ağırlık … gram" / "kütle … gram" tutarsızlığı
- Kart b10 `yazilida`: "Tartılan ekmeğin **kütlesi** x gramdır". Banka s016, s019: "ağırlığı x gram", "Ekmeğin ağırlığı 240 g ile 260 g". Gram kütle birimidir; 9. sınıf fizikte ağırlık ile kütle ayrılır.
- **Öneri:** Bankada "ağırlık" → "kütle" (s016 bağlam, kök, cevap metni ve rubrik; s019 bağlam, cevap, rubrik, çözüm adımı 9 "245 ≠ 255 olduğu hâlde" zaten nötr).

### D2-08 · KÜÇÜK · docs/dogrula.md #28 metni eskimiş
- #28: "s015 10 puan; s016, s017, s018 15 puan". Surum 2'de s016 = 8, s019 = 7 (ikisi 15), s017 ve s018 = 15. Ajan yazamaz; ana ajana.

### D1-03 (devam) · KÜÇÜK · hata_turu sözlüğü
- Yukarıdaki tablo. Kart ve banka etiketleri anlamca uyumlu hâle geldi; eksik olan SKILL.md sözlüğüne 7 etiketin eklenmesi.

---

## Diğer kontroller

- **Kart–banka tutarlılığı:** Etiketler (`maksimum_varlik`, `carpim_sifir_isaret`, `tek_sifir`), gösterim (\|x − a\|, kapalı aralık [a, b], minimum noktası (x, y)) ve terimler (minimum/maksimum değer, sapma, sabit hız) iki dosyada aynı. Tek fark D2-07 (kütle/ağırlık).
- **Müfredat dışı:** Yok. Kapalı aralıkta uç değer hesabı kitabın 5. Örnek'inde (s.127) var; sapma kalıbı s.126–127 ve s.135 Alıştırma 1'de; gidiş-dönüş s.133 kurye sorusunda.
- **Kaynaksız iddia / gerçek kurum:** b9–b11 bağlamları (levha, boru, ekmek, römorkör, dalış teknesi) kurgusal; kart `dogrula[3]` bilgi notu bunu söylüyor. Gerçek kurum, kişi, istatistik yok.
- **DOĞRULA:** Kart `dogrula[0]` → #22 (açık, metni s020'yi de kapsıyor), `[1]` → #23; s015–s019 → #28. Hepsinin dogrula.md'de karşılığı var.

## Kontrol edilemeyenler
- b1, b3, b5, b7 tur 1'den beri değişmediği varsayılarak yalnız sayısal içerik yeniden kontrol edildi; kitap s.120, 121, 123–125 bu turda yeniden okunmadı (tur 1'de okunmuştu).
- Panel verisi (`panel/data/matematik.js`) ve u2-k2 üreteçleri kapsam dışı.
- s016/s019'un panelde birlikte mi gösterildiği bu dosyalardan anlaşılamıyor (D2-06 buna bağlı).

---

KARAR: DÜZELTİLMELİ (KRİTİK 0, ÖNEMLİ 3, KÜÇÜK 6). Yayın engeli yok.
