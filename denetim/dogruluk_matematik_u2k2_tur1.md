# Doğruluk denetimi · matematik-u2-k2 (9.2.2 Mutlak değer fonksiyonu ve nitel özellikleri) · tur 1

Tarih: 2026-10-30 · Denetçi: dogruluk-denetcisi (salt okur)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u2-k2.json` (surum 1): 10 bölüm, kontrol soruları, 8 flashcard, 9 sik_hatalar, `dogrula` dizisi.
- Soru bankası `dersler/matematik/sorular/matematik-u2-k2.json` (surum 1): s001–s018.
- `docs/dogrula.md` #23, #25, #26, #27, #28.

Karşılaştırılan kaynaklar:
- Kitap (`matematik-9sinif-ders-kitabi-1kitap_…`): s0120–s0135 baştan sona okundu.
- Program (`matematik-dersi_…`): s0050 (satır 36–48), s0051 (anahtar kavramlar), s0054 (satır 3–19).
- Ortak sınav 2025-26 1D1Y sabah s0003 (lastik basıncı sorusu).
- `.claude/skills/soru-yazim-kurallari/SKILL.md` hata_turu sözlüğü (satır 83–129).

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 1 | D1-01 |
| ÖNEMLİ | 1 | D1-02 |
| KÜÇÜK | 6 | D1-03 … D1-08 |

- **Cevap anahtarı:** 18 sorunun hepsi bağımsız çözüldü. Hepsi doğru. Çoktan seçmelilerde ikinci savunulabilir doğru yok. Çeldiriciler değerce birbirinden farklı.
- **Rubrik toplamları:** s015 = 10, s016 = 15, s017 = 15, s018 = 15. Hepsi `puan` ile tutuyor.
- **Kart matematiği:** Bütün tablolar, sıfırlar, aralıklar, min/maks değerleri ve yazılıda çözümleri elle yeniden hesaplandı ve tuttu. Tek istisna D1-01'deki genelleme.
- **Telif:** Kitaptan uzun birebir alıntı yok.

KARAR: **DÜZELTİLMELİ**

---

## 1. Kartın bağımsız doğrulaması

| Bölüm | Kontrol | Karar |
|---|---|---|
| b1 | \|−3\| = 3, tablo −2…2 → 2,1,0,1,2; bağımlı/bağımsız değişken (s.121 satır 9–10: "k doğrusunda karşılık geldiği sayılar bağımsız değişken… mesafesi bağımlı değişken"). Yazılıda g(−4) = 4, g(2,5) = 2,5. Program s.50 satır 39 "f(x) = x … ile n(x) = ± \|x\|" | DOĞRU |
| b2 | (−2, −2) → (−2, 2); s.129 satır 41–43 "f nin işaretinin negatif olduğu kısmın x eksenine göre yansımasının alınmasıyla"; s.124 satır 32 "parçalı gösterimli fonksiyonlar olduğu görülür" | DOĞRU (ad sorunu D1-02) |
| b3 | Görüntü [0, ∞), sıfır 0, işaret; s.123 satır 22–24 ("g … x < 0 ve x > 0 için pozitif"); s.122 Tablo 2 satırları | DOĞRU |
| b4 | (−∞, 0] azalan, [0, ∞) artan (s.134, #26 PDF teyitli); min 0, maks yok, bire bir değil (s.134 satır 17–18) | DOĞRU |
| b5 | h tablosu −2,−1,0,−1,−2; görüntü (−∞, 0]; maks 0; (−∞, 0] artan, [0, ∞) azalan (s.134 satır 22, 34, 36); s.130 satır 3 yansıma | DOĞRU |
| b6 | \|x\| ve −\|x\| parçalı gösterimi s.124 satır 34–42 ile aynı; \|x − 4\|: g(1) = 3, g(6) = 2; program s.54 satır 16–17 "iki farklı doğrusal fonksiyonun … tek bir cebirsel temsille" | DOĞRU |
| b7 | \|2x − 6\|: sıfır 3, tablo 4,2,0,2,4, (0, −6) → (0, 6); program s.54 satır 11–12 "t(x) = ± \|ax + b\| … sıfırı ile grafik temsili arasındaki ilişki"; mama örneği s.131 satır 29–31 | DOĞRU (ad sorunu D1-02) |
| b8 | \|x − 20\|; yazılıda [18, 22] → görüntü [0, 2], maks 2 (x = 18, 22), min 0 (x = 20); sıcaklık örneği s.127 satır 9–14 "[16, 24]", "g(x) = \| x − 20 \|" | DOĞRU (ifade D1-05) |
| b9 | \|x − 2\| ± 3, −\|x − 2\| + 3 tepe/öteleme; h(x) = \|2x − 4\| + 1 → (2, 1), h(0) = 5; s.130 satır 15–19 (b < c ise ordinat negatif) | DOĞRU |
| b10 | \|x − 3\| − 2: min −2, sıfırlar 1 ve 5, (1, 5)'te −; \|2x − 2\| − 4: [−4, ∞), sıfırlar −1, 3; kontrol soruları 2, ±4, (−∞, 6]; s.132 satır 9–12 (0, 5/2) ve (5/2, 8)'de ayrı ayrı bire bir | Hesaplar DOĞRU, `basit[4]` YANLIŞ (D1-01) |
| Flashcard 1–8 | Hepsi s.134 ve s.130 ile tutarlı | DOĞRU (ad sorunu D1-02) |
| sik_hatalar | 9 madde; `tek_sifir` açıklaması YANLIŞ genelleme (D1-01) | |

## 2. Soru bankası (bağımsız çözüm)

| Soru | Benim çözümüm | Anahtar | Çeldiriciler | Karar |
|---|---|---|---|---|
| s001 | 6 + 4 = 10 | 10 | — | DOĞRU |
| s002 | Görüntü [0, ∞) ≠ ℝ → Y | false | — | DOĞRU |
| s003 | x − 5 = 0 → 5 | 5 | −5, 0, "−5 ve 5": hepsi yanlış, farklı | DOĞRU |
| s004 | (−3, \|−3\|) = (−3, 3) | (−3, 3) | (3, −3), (3, 3), (−3, −3): hepsi yanlış | DOĞRU |
| s005 | −\|x\| ≤ 0, h(0) = 0 → D | true | — | DOĞRU |
| s006 | +4 dışarıda → 4 birim yukarı | ✓ | aşağı, sağa, yansıma+yukarı: hepsi yanlış | DOĞRU (etiket D1-03) |
| s007 | \|6 − 12\| = 6 | 6 | — | DOĞRU |
| s008 | x < 0: −x; x ≥ 0: x (s.124) | ✓ | −\|x\|, −x, x: hepsi \|x\|'ten farklı | DOĞRU |
| s009 | g(−3) = g(3) = 3 → bire bir değil → Y | false | — | DOĞRU. Bağlam: konumlar ve uzaklık tanımı tutarlı; gerçek kurum/istatistik iddiası yok |
| s010 | u(1) = 3; \|x − 4\| = 3 → 7 ya da 1 (Ali) → 7; 7 ∈ [0, 10] | 7 | 3, 5, 4: u(3) = 1, u(5) = 1, u(4) = 0; hiçbiri 3 değil | DOĞRU. Bağlam satır satır tutarlı; "farklı yer" koşulu x = 1'i doğru dışlıyor |
| s011 | x = −3, min −2 | ✓ | (3, −2), (−3, 2), (−2, −3): hepsi yanlış | DOĞRU |
| s012 | \|x − 1\| = 3 → 4, −2 | −2 ve 4 | "Yalnız 4", "2 ve −4", "Yalnız 1": g(2) = −2, g(−4) = 2, g(1) = −3 | DOĞRU |
| s013 | x = 3; [3, ∞) | [3, ∞) | (−∞, 3] azalan; [−3, ∞) değil; [6, ∞) artan ama "en geniş" değil | DOĞRU; tek doğru |
| s014 | h(x) ≤ 5 → (−∞, 5] → Y | false | — | DOĞRU |
| s015 | x = 4; −2x + 8 / 2x − 8; g(1) = g(7) = 6; bire bir değil | ✓ | Rubrik 2+2+2+2+2 = 10 | DOĞRU |
| s016 | g(x) = \|x − 20\|; [17, 23]; [0, 3]; sıfır 20; min 0 (20), maks 3 (17, 23); g(18,5) = g(21,5) = 1,5 | ✓ | Rubrik 2+2+2+1+2+2+2+2 = 15 | DOĞRU (D1-06, D1-03). Kitabın s.126–127 5. Örnek'iyle birebir paralel |
| s017 | g = \|2x − 4\| − 2; [−2, ∞); sıfırlar 1, 3 (aralık kontrolü tutuyor); (−∞, 2] azalan, [2, ∞) artan; min −2, maks yok | ✓ | Rubrik 2+2+2+3+2+2+2 = 15 | DOĞRU |
| s018 | v = 15 km/sa; f(t) = \|15t − 30\|, [0, 4]; f(1) = f(3) = 15; min 0 (t = 2), maks 30 (t = 0, 4); [0, 2] azalan, [2, 4] artan | ✓ | Rubrik 2+2+2+2+1+2+2+2 = 15 | DOĞRU (D1-07) |

Puanlama notları matematik olarak doğru: s015'te x = 4'ün hangi satıra yazıldığı fark etmez (iki satır da 0). s017'de ucu açık (−∞, 2) / (2, ∞) yazımı da artan/azalanlık için doğrudur. s018'de 0 ≤ t < 2 / 2 ≤ t ≤ 4 parçalı yazımı eşdeğerdir.

---

## Bulgular

### D1-01 · KRİTİK · "Tepe üstteyse sıfır yok, alttaysa iki sıfır" kuralı ters V için yanlış
- **Yer:**
  - Kart `bolumler[9].katmanlar.basit[4]` (b10): "Tepe x ekseninin üstündeyse, örneğin \|x − 3\| + 2'de, sıfır yoktur. Tepe tam x ekseni üzerindeyse tek sıfır vardır."
  - Kart `sik_hatalar[7]` (`tek_sifir`): "Tepe x ekseninin altındaysa iki sıfır vardır."
- **Sorun:** Bu kural yalnız yukarı açık V (+\|ax + b\| ± c) için doğru. b10'un konusu ±\|ax + b\| ± c ve aynı bölümün kontrol sorusu 3 −\|x\| + 6'dır. −\|x\| + 6'nın tepesi (0, 6) x ekseninin üstündedir ama iki sıfırı vardır (−6 ve 6). −\|x\| − 1'in tepesi altta ama sıfırı yoktur. Öğrenci kuralı genel okursa yanlış sonuca varır.
- **Kitap karşılığı:** s.130 satır 39–44: k(x) = −\|ax + b\| + c ve m(x) = −\|ax + b\| − c, h = −\|ax + b\| grafiğinden ötelenir; ters V'de durum terstir.
- **Karar:** YANLIŞ (eksik koşul).
- **Önerilen düzeltme:**
  - b10 `basit[4]`: "V yukarı açıksa (\|…\| + c): en alt nokta x ekseninin üstündeyse sıfır yok, altındaysa iki sıfır var. Ters V'de (−\|…\| + c) tersi: en üst nokta x ekseninin üstündeyse iki sıfır, altındaysa sıfır yok. Nokta tam x ekseni üzerindeyse tek sıfır."
  - `sik_hatalar[7]`: "… V yukarı açıkken en alt nokta x ekseninin altındaysa iki sıfır vardır."

### D1-02 · ÖNEMLİ · Kartta "tepe noktası" ve "simetri ekseni" (kullanıcı kısıtı #25; kitap ve programda yok)
- **Kitap/program karşılığı:**
  - Kitap s.122, 123, 126, 128, 129 ve 135 tablolarında satır adları "Maksimum Noktası" ve "Minimum Noktası". s.134 satır 17: "Fonksiyon minimum değerini x = −b/a noktasında alır"; satır 34: "maksimum değerini x = −b/a noktasında alır".
  - Program s.51 satır 11, anahtar kavramlar: "maksimum-minimum noktaları". "Simetri ekseni" 9.2.2 çıktısında da (s.50 satır 36–48), açıklamasında da (s.54) geçmiyor.
- **Karar:** KAYNAKSIZ ad. "Simetri ekseni" 9.2.2 kapsamında yok, ileri sınıf (parabol) dili. Soru bankasında hiç geçmiyor (grep ile teyit), sorun yalnız kartta.
- **Geçtiği her yer ve önerilen karşılık** (V = yukarı açık, Λ = ters V):

| Yer | Metin | Önerilen |
|---|---|---|
| b2 `basit[3]` | "Bu kartta V'nin köşesine **tepe noktası** diyoruz." | "V'nin köşesi (0, 0)'dır. Fonksiyon en küçük değerini burada alır; kitap buna **minimum noktası** der." |
| b2 `basit[4]` | "…Bu çizgiye **simetri ekseni** denir. Örnek: g(−3) = g(3) = 3." | Cümleyi sil; yerine "0'ın iki yanında eşit uzaklıktaki x'ler aynı değeri verir: g(−3) = g(3) = 3." |
| b2 `kitap[2]` | "… 'minimum noktası' ya da 'maksimum noktası' diye anar (s.134)." | Kalır; atfı "(s.122 Tablo 2, s.134)" yap. "tepe noktası adını kullanmaz" cümlesi kart adı kaldırılınca gereksizleşir |
| b2 `terimler[1]` | "tepe noktası" | "minimum noktası: fonksiyonun en küçük değerini aldığı nokta; \|x\| için x = 0" |
| b2 `terimler[2]` | "simetri ekseni" ("dik çizgi" ifadesi de belirsiz) | Terimi sil |
| b2 `kontrol_sorulari[1]` soru + ipucu[0] | "…grafiğinin tepe noktası hangi noktadır?" / "Tepe noktası V'nin köşesidir." | "…fonksiyonu minimum değerini hangi x değerinde alır?" cevap "x = 0"; ipucu "Minimum noktası V'nin köşesidir." |
| b2 `kontrol_sorulari[2]` (soru, 3 ipucu) | "simetri ekseni hangisidir?" / "tepe noktasından dik olarak geçer" / "Tepe noktası (0, 0)…" | Soruyu değiştir: "g(−4) ile g(4) eşit midir? Neden?" (bire birlik bağı, s.134 satır 18) |
| b5 `basit[1]` | "tepe noktası yine (0, 0)'dır ama bu kez en üst noktadır" | "köşe yine (0, 0)'dır; bu kez **maksimum noktası**dır" |
| b5 `kontrol_sorulari[1].ipuclari[0]` | "en üst noktası tepe noktasıdır" | "en üst noktası maksimum noktasıdır" |
| b7 `basit[2]` | "V oluşur ve tepe noktası (3, 0) olur" | "V oluşur; köşesi (3, 0), yani minimum noktası x = 3" |
| b7 `basit[4]` | "doğrunun sıfırı, V'nin tepesidir… tepe noktası (x, 0) olur" | "doğrunun sıfırı, V'nin köşesidir; fonksiyon minimum değerini bu x'te alır" |
| b7 `yazilida.ornek_cevap[4]` | "(3, 0) aynı zamanda tepe noktasıdır" | "(3, 0) aynı zamanda minimum noktasıdır" |
| b7 `kontrol_sorulari[0]` soru + ipucu[0] | "\|x − 5\| grafiğinin tepe noktası…" / "Tepe noktası, mutlak değerin…" | "\|x − 5\| minimum değerini hangi x'te alır?" cevap 5 |
| b9 `basit[0]`, `basit[1]`, `basit[3]` | "Tepe noktası (2, 0)'dan (2, 3)'e çıkar", "Tepe noktası (2, −3)", "−\|x − 2\| + 3'ün tepe noktası (2, 3)" | "Köşe (en alt nokta) …", "Köşe (2, −3)", "maksimum noktası x = 2, maksimum değer 3" |
| b9 `yazilida.ornek_soru`, `ornek_cevap[1]`, `ornek_cevap[3]` | "Tepe noktasını … bulunuz", "tepe noktası (2, 0)", "Tepe noktası (2, 1) olur" | "Minimum değerini ve alındığı x değerini …", "köşe (2, 0)", "Minimum değer 1, x = 2'de" |
| b9 `kontrol_sorulari[0]` soru + ipucu[0]; `[2]` soru + ipucu[0] + `yanlis_aciklama` ("+5 tepeyi…") | | "En küçük değeri kaçtır?" (cevap 4) / "En büyük değeri kaçtır?" (cevap 5); "tepeyi" → "en üst noktayı" |
| b10 `basit[0]` | "tepe noktası (3, −2)'dir" | "minimum noktası x = 3, minimum değer −2" |
| b10 `basit[4]` | "Tepe x ekseninin üstündeyse…" | D1-01 metni ("en alt nokta / en üst nokta") |
| b10 `kitap[2]` | "tepe noktasının iki yanında ayrı ayrı bire birdir" | "x = 5/2'nin iki yanında ayrı ayrı bire birdir (s.132)" |
| b10 `yazilida.ornek_cevap[0]` | "Tepe noktası (1, −4)'tür." | "Minimum değer −4, x = 1'de." |
| flashcard 6 | "\|ax + b\| grafiğinin tepe noktası nerededir?" | "\|ax + b\| minimum değerini nerede alır?" arka: "İçi sıfır olan yerde, x = −b/a'da; minimum değer 0 (s.134)." |
| flashcard 8 | "Tepe noktasının iki yanında…" | "x = −b/a'nın iki yanında…" |
| sik_hatalar[3] `tepe_isaret` | "tepe noktasını (−2, 0) sanmak … tepe (2, 0)" | Etiketi sözlükteki `carpim_sifir_isaret` yap (aynı hata: x − 2 = 0 → −2); metin "minimum noktasını x = −2 sanmak" |
| `dogrula[0]` | #25 maddesi | Düzeltmeden sonra "Kart 'minimum/maksimum noktası' adını kullanıyor (s.122, s.134; program s.51)" diye güncellenir; #25 kapanabilir |

- **Not:** #22 (nokta x mi, (x, f(x)) mi) açık. Kitap s.127 satır 42 "maksimum değerini 16 ve 24 noktalarında" ve s.134 "x = −b/a noktasında" diye x değerini nokta sayıyor. Önerilen metinler bu yüzden "x = … 'da alır" kalıbını kullanıyor; #22 ile çelişmez.

### D1-03 · KÜÇÜK · Yeni hata_turu etiketleri sözlükte yok; ikisi yer yer anlamca uyumsuz
- **Sözlükte olmayanlar** (SKILL.md satır 83–129): `mutlak_eksi`, `parcali_isaret`, `yansima_kapsam`, `eksi_mutlak_karistirma`, `tek_sifir`, `sifir_aralik_kontrol`, `maksimum_arama` ve ayrıca kartta `tepe_isaret`.
- **Uyumlu olanlar:** `mutlak_eksi` (s001, s007), `parcali_isaret` (s008 şık 2, s015), `yansima_kapsam` (s008 şık 3: bütün y = x'i yansıtınca −x çıkar), `tek_sifir` (s012 "Yalnız 4"), `eksi_mutlak_karistirma` (s005, s014).
- **Uyumsuz olanlar:**
  - `maksimum_arama` (kart tanımı: "ℝ'de maksimum değer yoktur, |x|'in en büyük değerini aramak"). s016 ve s018'de tanım kümesi kapalı aralık ve maksimum **vardır**. Buradaki olası hata tersidir: "maksimum yok" demek. s017'de (ℝ) uyumlu.
  - `eksi_mutlak_karistirma` s006 şık 4'te ("x eksenine göre yansıyıp 4 birim yukarı çıkar"). Hata −\|x\| ile \|−x\|'i karıştırmak değil, yansıma yokken yansıma eklemek.
  - `sifir_aralik_kontrol` s017'de: iki aday sıfır da kendi aralığına uyuyor. Bu hata yanlış cevap üretmiyor, etiket yakalayacak bir şey bulamıyor.
  - `tepe_isaret` sözlükteki `carpim_sifir_isaret` ile aynı hata.
- **Önerilen düzeltme:**
  - Sözlüğe ekle: `mutlak_eksi` (\|−a\|'yı −a sanmak), `parcali_isaret` (parçalı gösterimde −x'i hep negatif sanmak / satırları ters yazmak), `yansima_kapsam` (\|ax + b\|'de doğrunun tamamını yansıtmak), `eksi_mutlak_karistirma` (−\|x\| ile \|−x\|'i karıştırmak), `tek_sifir` (\|…\| = k'da yalnız bir çözüm almak), `sifir_aralik_kontrol` (parçalı çözümde kökün kendi aralığına uyduğunu denetlememek), `maksimum_varlik` (maksimum/minimum varlığını tanım kümesine bakmadan belirlemek).
  - `maksimum_arama` yerine `maksimum_varlik` kullan (s016, s017, s018, sik_hatalar[8]); tanım hem "ℝ'de maksimum arar" hem "kapalı aralıkta maksimum yok der" durumunu kapsar.
  - s006 şık 4: `kavram_karisikligi`.
  - s017: `sifir_aralik_kontrol` çıkarılabilir ya da bırakılabilir (yanlışlık değil).
  - `tepe_isaret` → `carpim_sifir_isaret`.

### D1-04 · KÜÇÜK · Kartın `dogrula[1]` maddesi ve dogrula.md #27 gövdesi eskimiş
- **Yer:** kart `dogrula[1]`: "…PDF görselinden teyit edilmeli (docs/dogrula.md #26)." #26 2026-10-30'da kapandı.
- dogrula.md #27 gövdesi "s.134 PDF görseli açılamadı" diyor ama durum sütunu "[x] … PDF s.134 görseli" diyor. Kendi içinde çelişkili.
- **Önerilen düzeltme:** Kart `dogrula[1]` "Bilgi notu: s.134 artan/azalan uçları PDF görseliyle teyit edildi (#26, kapalı)." olur. #27 gövdesinin ilk cümlesi tarihçe olarak işaretlenir ya da kısaltılır (ajan yazamaz; ana ajana).

### D1-05 · KÜÇÜK · b8 `basit[4]` "−|ax + b|'de hepsi ters döner"
- **Sorun:** Tanım kümesi, sıfır ve bire bir olmama değişmez (s.134 satır 21, 23, 35). Ters dönen görüntü kümesi, min/maks ve artan/azalandır.
- **Önerilen düzeltme:** "−|ax + b|'de sıfır aynı kalır ama görüntü kümesi, en büyük/en küçük ve artan/azalan ters döner."

### D1-06 · KÜÇÜK · s016 tanım kümesi: listedeki 5 ölçüm mü, bütün kalınlıklar mı?
- **Yer:** s016 `baglam` + `kok` a).
- **Sorun:** Bağlam 5 ölçüm veriyor; öğrenci {17; 18,5; 20; 21,5; 23} yazabilir. Anahtar [17, 23]. Kitabın 5. Örnek'i (s.126–127) de aynı kurguda [16, 24] alıyor; yani anahtar kitapla uyumlu, ama kök bunu açık söylemiyor.
- **Önerilen düzeltme:** Köke "g fonksiyonu, levha kalınlığının alabileceği bütün değerler için tanımlıdır." cümlesi ekle; ya da `puanlama_notu`na "Yalnız ölçülen 5 değeri yazan öğrenciye bu ölçütten puan verilmez" ekle.

### D1-07 · KÜÇÜK · s018 kaynak etiketi ve bir yazım hatası
- `kaynak.kitap`: "s.133 (Alıştırma 2, kurye)". Kurye sorusu Alıştırmalar'da değil; "5. Sıra Sizde" başlığı s.132 satır 13'te, 2. soru s.133 satır 3–9'da. Öneri: "s.132–133 (5. Sıra Sizde, 2. soru, kurye)".
- `cozum_adimlari[9]`: "…t = 0 ve t = 4'te alınır; tekne iskeledir." → "tekne iskeleded".
  - Doğrusu: "tekne iskeledir" yerine **"tekne iskelededir"**.

### D1-08 · KÜÇÜK · b2 `kitap[2]` atfı
- "…'minimum noktası' ya da 'maksimum noktası' diye anar (s.134)." s.134 bu adları değil "x = −b/a noktasında alır" kalıbını kullanıyor; ad olarak tablo satırlarında (s.122, 123, 126) geçiyor. D1-02 düzeltmesiyle birlikte atıf "(s.122, s.134)" yapılır.

---

## Diğer kontroller

- **Müfredat dışı:** "Simetri ekseni" dışında (D1-02) 9.2.2 kapsamını aşan kavram yok. Yansıma, öteleme, parçalı gösterim program s.50 a–c ve s.54 ile örtüşüyor.
- **Kaynaksız iddia / gerçek kurum-istatistik:** Bağlamlar (iskele, sahil yolu, büfe, tersane levhası, tur teknesi, kepçe, vinç) kurgusal ve genel; gerçek kurum, kişi ya da istatistik iddiası yok. b8 `puan_ipucu`ndaki lastik basıncı atfı 1D1Y sabah s0003 satır 15–21 ile teyitli ("\|x – 32\| ≤ 3"). b4 `puan_ipucu`ndaki u2-k1 sabit fonksiyon atfı u2-k1 kartında var.
- **Program atıfları:** b1 `kitap[2]` (s.50 satır 39), b6 `kitap[1]` (s.54 satır 16–17), b7 `kitap[1]` (s.54 satır 11–12) teyitli.
- **DOĞRULA maddeleri:** Kartın `dogrula[0]` → #25, `[1]` → #26, `[2]` → #23; s015–s018 `dogrula` → #28. Hepsinin dogrula.md'de karşılığı var.

## Açık DOĞRULA maddeleri ve kapatma önerisi

| Madde | Durum | Kapatmak için |
|---|---|---|
| #23 1D2Y dağılım tablosu | Açık | ÖDSGM kılavuzu yayımlanınca. Değişiklik gerekmez. |
| #25 tepe noktası / simetri ekseni | Açık | Öğretmen teyidine gerek kalmadan kapatılabilir: D1-02 tablosu uygulanırsa kart kitabın ve programın adını ("minimum/maksimum noktası", program s.51) kullanır. Öğretmen derste "tepe" diyorsa sonradan bilgi notu olarak eklenir. |
| #26, #27 s.134 parantezleri | Kapalı | #27 gövdesindeki "açılamadı" cümlesi güncellenmeli (D1-04). |
| #28 rubrik puan dağılımı | Açık | İki yol: (1) öğretmene s016/s017/s018 rubriklerinden biri gösterilip kısmi puan alışkanlığı sorulur; (2) madde "bilgi notu" olarak kapatılır ve panelde rubriğin "öz değerlendirme önerisi, resmî anahtar değildir" diye gösterildiği teyit edilir. ÖDSGM 1D1Y anahtarı (s0003) yalnız tam çözüm veriyor, kısmi puan tablosu yok; bu yüzden resmî kaynakla kapatılamaz. |

## Kontrol edilemeyenler
- s.134 parçalı gösterim satırlarındaki eşitsizlik glifleri (satır 10–11, 27–28) metinde bozuk. #26 teyidi artan/azalan aralıklarını kapsıyor. Kartın b6 `kitap[2]`'deki "x < −b/a için −ax − b, x ≥ −b/a için ax + b" yazımı matematik olarak doğru; x = −b/a'da iki satır da 0 verdiği için uç seçimi sonucu değiştirmez.
- Panel verisi (`panel/data/matematik.js`) ve u2-k2 üreteçleri bu turda kapsam dışı.

---

KARAR: DÜZELTİLMELİ (KRİTİK 1, ÖNEMLİ 1, KÜÇÜK 6)
