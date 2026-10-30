# Doğruluk denetimi · matematik-u2-k3 (9.2.3) · tur 2

Tarih: 2026-10-30 · Denetçi: dogruluk-denetcisi (salt okur; denetlenen dosyalarda düzeltme yapılmadı)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u2-k3.json` (surum 2): 13 bölüm, 14 flashcard, 11 sik_hatalar, `dogrula` dizisi.
- Soru bankası `dersler/matematik/sorular/matematik-u2-k3.json` (surum 2): s001–s018. Zorluk dağılımı 9/6/3.
- `dersler/matematik/harita.json` ve `harita_duzeltme.json` (u2-k3).
- `docs/dogrula.md` #13, #23, #29, #30, #31, #32.
- `.claude/skills/soru-yazim-kurallari/SKILL.md` hata_turu sözlüğü.

Kaynaklar:
- Kitap s0136, s0150, s0151, s0152 (satır 40–42), s0153 (satır 21), s0146 (satır 26–30), s0165 (satır 35–52).
- Program s0054, satır 20–50.
- Tur 1 raporu, s.159 ve s.154 teyitleri için.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | — |
| ÖNEMLİ | 2 | D2-01, D2-02 |
| KÜÇÜK | 7 | D2-03 … D2-09 |

- **Tur 1:** D1-01 … D1-11 bulgularının 11'i de kapandı (bkz. §1).
- **Cevap anahtarı:** 18 sorunun hepsi yeniden çözüldü ve hepsi doğru. Çoktan seçmelilerde ikinci savunulabilir doğru yok. Çeldiricilerin hepsi, adı verilen hatalı yoldan gerçekten çıkıyor.
- **Rubrik toplamları:**
  - s016: 2+2+2+2+2 = 10.
  - s017: 2+2+2+2+2+2+3 = 15.
  - s018: 2+2+2+2+2+2+3 = 15.
  - Kontrol adımı puanları s016'da 2, s017'de 3, s018'de 3. Bu değerler #32 ile aynı.
- **Kartın yeni ve değişen matematiği** hepsiyle doğru: b6, b7, b10, b11, b12, b13.
- **Aralık yazımı:**
  - ";" ayırıcı yok.
  - Ondalık uçlu aralıkların hepsinin yanında "a ≤ x ≤ b" biçimi var. İstisna yalnız `kaynak` alanları ve kartın `dogrula` bilgi notu; bunlar meta veri olduğu için kabul edildi.
- **Yazım:** "dahil" (şapkasız) yok.
- **Yasak terimler:** "tepe noktası" ve "simetri ekseni" yok.
- **"üzerinde":** Yalnız kitaptan alınan "grafik üzerinde gösteriniz" ifadesinde geçiyor. Bu kullanımda anlam açık.
- **Müfredat:** Program s.54 satır 23–25 bütün biçimleri sayıyor. İleri sınıf konusu yok.
- **Telif:** Uzun birebir alıntı yok.
- **Panel:** `panel/data/matematik.js` yeni içeriği taşıyor (mısır arabası, 9000 TL vinç, 351,2 mm grep ile bulundu). Ayrıntılı panel denetimi yapılmadı.

KARAR: **DÜZELTİLMELİ.** KRİTİK bulgu yok, yayın engeli yok. İki ÖNEMLİ bulgu düzeltilmeli.

---

## 1. Tur 1 bulgularının durumu

| Kod | Önem | Durum | Kanıt |
|---|---|---|---|
| D1-01 | ÖNEMLİ | KAPANDI | Kart `dogrula[0]` artık bilgi notu: "#29 kapandı (2026-10-30)" |
| D1-02 | ÖNEMLİ | KAPANDI | s017 `puanlama_notu` şöyle diyor: "hangi doğrunun altta olduğunu ters okuyup kesişimden sonraki sırayı (A ucuz) kesişimin soluna taşımıştır ya da 1200 < 6x satırını 'x < 200' diye okumuştur". Gerekçe mantıksal olarak doğru. |
| D1-03 | KÜÇÜK | KAPANDI | s012 ve s013 `kaynak.program`: "s.54: \|f(x)\| ≤ g(x), g sabit; kitap s.152". Kart `kaynak[1].sayfa` ve b10 kitap[4] de aynı açıklamayı yapıyor. |
| D1-04 | KÜÇÜK | KAPANDI | b7 kitap[0]: "g'nin grafiği x ekseninin kendisidir". b9 kitap[4], b10 kitap[3] ve s018 `puanlama_notu`: "altında kaldığı ya da ona değdiği". s018 `cevap` alanında "üzerinde" yok. |
| D1-05 | KÜÇÜK | KAPANDI | #30'un "Nerede" sütunu b9 ve s017'yi gösteriyor; teyit kaynağında "karekodu (s.202), s.165 soru 11 ç" var |
| D1-06 | KÜÇÜK | KAPANDI | s011 bağlamında artık x = 2 değerleri yok; bu değerler çözüm adımı 6'ya taşındı. (−∞, 5) çeldiricisi `esitsizlik_yonu` olarak etiketlendi. Açıklaması: "−6x < −30'da … yön çevrilmemiş". Yön çevrilmezse gerçekten x < 5 çıkıyor. |
| D1-07 | KÜÇÜK | KAPANDI | s004 bağlamı "kitaptaki asansör alıştırmasından uyarlanmıştır" diye başlıyor. Kontrol adımı x = 10 (380 ≤ 720) ve x = 25 (830 > 720) ile yapılıyor; kitap alıştırmasının cevabı (21) artık sızmıyor. |
| D1-08 | KÜÇÜK | KAPANDI | b7 artık buz deposu örneği, 0 ≤ x ≤ 10. f(5) = 4 °C değeri bağlam içinde anlamlı. |
| D1-09 | KÜÇÜK | KAPANDI | SKILL.md satır 126: "sıfırın ya da kökün". s018 `puanlama_notu`: "x < 350 parçasında −x + 350 yerine x − 350 yazan öğrenci (parçada işaret hatası)…" |
| D1-10 | KÜÇÜK | KAPANDI | Flashcard 8 ve b8 terimi: "x'i f(x) = g(x)'in kökü, y'si o andaki ortak değerdir". dogrula.md #31 satırındaki ayrım düzeltildi ("sorulacaktı. Kitap görseli:"). |
| D1-11 | KÜÇÜK | KAPANDI | s016 kök b ve kart b4: "yakıt almadan yol alabileceği süre" |

## 2. Yeni ve değişen içeriğin bağımsız hesabı

### Kart

| Bölüm | Benim hesabım | Karar |
|---|---|---|
| b6 mısır arabası | k(x) = 10x − 360. Kâr için 10x > 360 → x > 36 → en az 37; zarar için x < 36 → en çok 35. k(36) = 0, k(37) = 10, k(35) = −10. Kontrol soruları: 12x − 300; x < 45 → 44; g(x) > m(x). Kermes: 15x − 600 > 0 → x > 40 → 41; k(40) = 0, k(41) = 15. | DOĞRU |
| b6 ve kitap s.150 | Kitapta m(x) = 300 000 + 1300x, g(x) = 2500x, 300 000 = 1200x → 250 var. Kitap ayrıca şunu yazıyor: "x  250 için g(x)  m(x) olur ve buna göre fabrikanın kâr etmesi için en az 251" (satır 18; ">" glifleri metin dökümünde bozuk). g(x) > m(x) ⇔ g(x) − m(x) > 0 eşdeğerliği doğru. Kart b6'nın sayıları s008'den farklı (10x − 360 ile 5x − 400). | DOĞRU (tırnak işareti için bkz. D2-04) |
| b7 buz deposu | 2x − 6 = 0 → x = 3. f(0) = −6, f(5) = 4. 0 ≤ x ≤ 10 için çözüm [0, 3). Cebirle yapılan kontrol aynı sonucu veriyor. Kontrol sorusu: f(4) = 2. Yazılı: −3x + 12 ≥ 0 → (−∞, 4]; f(1) = 9, f(6) = −6. | DOĞRU |
| b7 ve program s.54 | Program satır 34–36 "f(x) < 0 … f(x) < g(x) … özel bir hâli (g(x) = 0)" diyor. Satır 31–32 "x = − b/a kök değerine göre ayrılmış bir işaret tablosu" diyor. Kart bu iki noktayla aynı. | DOĞRU |
| b10 parçalı çözüm | x ≥ 120: x − 120 ≤ 0,5 → x ≤ 120,5. x < 120: −x + 120 ≤ 0,5 → −x ≤ −119,5 → x ≥ 119,5. Sonuç [119,5, 120,5], yani 119,5 ≤ x ≤ 120,5. Kontrol sorusu 3: −x + 10 ≤ 2 → −x ≤ −8 → x ≥ 8. Cıvata: [39,8, 40,2]; h(40,5) = 0,5. | DOĞRU |
| b11 ters yol | [118, 122]: (118 + 122) ÷ 2 = 120, (122 − 118) ÷ 2 = 2 → \|x − 120\| ≤ 2. Yanlış yazım ≤ 4 gerçekten [116, 124] verir. Rulman: 60 ve 0,05. Tahmin oyunu: 1350 ± 50 → 1300–1400 (s.152 satır 40: "en çok 50 gram eksik ya da 50 gram fazla"). Kontrol soruları: 10; \|x − 10\| ≤ 4; \|x − 25\| ≤ 10 → 15 ve 35, doğrusu 5. Pim: 30 ve 4 → [26, 34]. | DOĞRU |
| b12 tekne/iskele | Uzaklıklar 4, 1, 0. \|x − 3\| = 5 → {−2, 8}. \|x − 3\| < 5 → (−2, 8). \|x − 3\| > 5 → x < −2 ya da x > 8. Yazılı: ∅, ℝ, {3}, {−3, 5}. Kontrol soruları: yok, 5, {−1, 5}. | DOĞRU (puan_ipucu için bkz. D2-02) |
| b13 şart kontrolü | x ≥ 2 parçasında x = −1 çıkıyor, şartı sağlamıyor, atılıyor. x < 2 parçasında x = 1 çıkıyor, kabul. −1 için \|−3\| = 3 ≠ −3. V ile 2x − 1 tek noktada kesişiyor. Yazılı: \|x − 4\| = x − 2 → {3}. Kontrol sorusu: \|x − 6\| = x − 2'de x = 4 kabul. | DOĞRU |
| Flashcard 1–14 | Hepsi doğru | DOĞRU |
| sik_hatalar | Matematik olarak doğru | DOĞRU (ifade için bkz. D2-05) |

### Banka

| Soru | Benim çözümüm | Karar |
|---|---|---|
| s003 | 240 − 15x = 90 → x = 10. Model kontrolü: f(0) = 240, f(1) = 225. | DOĞRU |
| s004 | Doğru koşul 30x + 80 ≤ 720. Kontrol: x = 10 → 380, x = 25 → 830. Çeldiriciler <, ≥ ve 80x + 30 hepsi yanlış. | DOĞRU |
| s008 | k(x) = 5x − 400 < 0 → x < 80 → 79. Çeldiriciler 80, 81 ve 395 gerçek hatalardan çıkıyor. | Anahtar DOĞRU. Kavram dili için bkz. D2-01. |
| s010 | 3000x + 9000 < 4000x + 3000 → 6000 < 1000x → x > 6. A(6) = B(6) = 27 000. x = 4: 21 000 ve 19 000. x = 8: 33 000 ve 35 000. Çeldiriciler: kısa süre (kesisim_taraf), "6 ve daha uzun" (uç), "27 000 saat" (x ile y'yi karıştırma). | DOĞRU |
| s011 | −6x < −30 → x > 5. Yön çevrilmezse x < 5 çıkıyor, bu (−∞, 5) çeldiricisini veriyor. Değerler: f(2) = 36, g(2) = 18; f(10) = 20, g(10) = 50. | DOĞRU |
| s015 | Sonuç {6}. x = 4 şartı sağlamadığı için atılıyor; −x − 3 yazılırsa 2 çıkıyor; 3 denklemi sağlamıyor. Zorluk 3: parçalama, iki parçada çözüm ve şart kontrolü olmak üzere üç basamak var; uygun. | DOĞRU |
| s016 | [0, 12]. f(12) = 96, f(13) = 64. Model kontrolü: f(0) = 480, f(1) = 448. | DOĞRU |
| s017 | x = 200, ortak ücret 6000 TL. Kısaltılmış kökün c şıkkı "uzaklıkları" soruyor; cevap x > 200. Tablo: 4200 ve 3600, 7800 ve 8400. `kesisim_taraf` gerekçesi doğru. | DOĞRU |
| s018 | [348,5, 351,5]. c: h(348,2) = 1,8, ret; h(351,2) = 1,2, kabul. ç: h(348,5) = h(351,5) = 1,5, kabul; h(352) = 2, ret. Rubrik toplamı 15. | DOĞRU (etiket için bkz. D2-06) |
| Diğerleri | s001, s002, s005, s006, s007, s009, s012, s013, s014: tur 1 sonucu korunuyor, yeniden kontrol edildi | DOĞRU |

**Kart b11 ile banka s012 arasında sızıntı yok.** Bağlamlar aynı (tersane sac levha), ama sayılar farklı: kartta [118, 122] → 120 ve 2, s012'de [249,6, 250,4] → 250 ve 0,4. Kartın "tam uzunluk yazma" uyarısı yöntemi öğretiyor; s012'nin cevabını vermiyor.

---

## 3. Yeni bulgular

### D2-01 · ÖNEMLİ · s008: "Gelir: 5x TL" ifadesi bağlamla ve kartın gelir tanımıyla çelişiyor
- **Yer:** `sorular/matematik-u2-k3.json` → s008 `cozum_adimlari[0]`. Bağlamdaki "Kâr = Gelir − Gider ile bulunur" cümlesi de etkileniyor.
- **İddia:** "1. Gelir: 5x TL. Gider: 400 TL."
- **Sorun:**
  - Bağlam 5 TL'yi şöyle tanımlıyor: "simidin kendi maliyeti çıktıktan sonra her simitten 5 TL **kâr**".
  - Kart b6'ya göre gelir, "satıştan kasaya giren para"dır.
  - 5x bu tanıma göre gelir değildir; simit maliyeti düşüldükten sonra kalan tutardır.
  - k(x) = 5x − 400 ve cevap 79 doğru. Yanlış olan, öğretilen kavram adı.
  - Kart ile bankayı birlikte çalışan öğrenci "gelir" kavramını iki farklı anlamda görür.
- **Karar:** YANLIŞ (kavram etiketi).
- **Öneri (iki yoldan biri):**
  - (a) Adım 1'i şöyle yaz: "Her simitten kalan 5 TL; x simitten 5x TL. Sabit gider 400 TL." Bağlamdaki "Kâr = Gelir − Gider ile bulunur" cümlesini çıkar.
  - (b) Bağlamı gelir/gider ayrımıyla yeniden kur. Örnek: "simit 12 TL'ye satılıyor, bir simidin maliyeti 7 TL". Bu durumda Gelir = 12x, Gider = 400 + 7x, k(x) = 5x − 400 olur ve cevap aynı kalır.

### D2-02 · ÖNEMLİ · Kart b12 `puan_ipucu` kuralı eksik; aynı sorunun a ve b şıklarında yanlış yönlendiriyor
- **Yer:** `konular/matematik-u2-k3.json` → b12 `katmanlar.yazilida.puan_ipucu`.
- **İddia:** "Önce sağdaki sayıya bak: eksiyse '=' ve '<' için çözüm yok, 0 ise tek kök, artıysa iki kök vardır."
- **Sorun:**
  - Kuraldaki "0 ise tek kök" yalnız "=" için geçerli.
  - Aynı örnek sorunun a şıkkı \|2x − 6\| < 0'dır. Burada sağdaki sayı 0'dır, ama çözüm ∅'dir, tek kök değildir.
  - b şıkkı \|2x − 6\| ≥ 0'dır. Burada da sağdaki sayı 0'dır, ama çözüm ℝ'dir.
  - İpucunu harfiyen uygulayan öğrenci a'da {3} yazar. Öğrenci profili kısa kurala güvenir; bu yüzden risk yüksek.
- **Karar:** YANLIŞ YÖNLENDİREN KURAL. Cümle kendi içinde yanlış değil, ama kapsamı belirtilmemiş.
- **Öneri:** "'=' için sağdaki sayıya bak: eksiyse çözüm yok, 0 ise tek kök, artıysa iki kök. '< 0' hiçbir x için sağlanmaz; '≥ 0' her x için sağlanır."

### D2-03 · KÜÇÜK · Kart ile banka arasında terim tutarsızlığı
- **Kesim noktası:** Kart tek terim olarak "kesim noktası"nı kullanıyor (`dogrula[9]` bilgi notu). Bankada başka adlar da geçiyor:
  - s015 çözüm adımı 8: "tek kesişim".
  - s017 `puanlama_notu`: "kesişimden sonraki sırayı … kesişimin soluna".
  - s017 kök ç: "eşit ücret noktasının iki yanından".
- **Orta nokta ve yarı uzunluk:** Kart b11 "orta nokta" ve "yarı uzunluk" terimlerini öğretiyor. s012 ise "Merkez: (249,6 + 250,4) ÷ 2" ve "Merkezden uca uzaklık" diyor.
- **Öneri:**
  - s015: "tek kesim noktası" yaz.
  - s017 ç: "kesim noktasının (200 km) iki yanından" yaz. Puanlama notunda "kesim noktasından sonraki … kesim noktasının soluna" yaz.
  - s012 çözüm adımları ve ipuçları: "orta nokta" ve "yarı uzunluk" kullan. Bir yerde "(merkez)" diye eşanlamını ver.

### D2-04 · KÜÇÜK · b6'daki tırnaklı ifade kitapta birebir geçmiyor
- **Yer:** b6 kitap[1] ve kart `dogrula[4]`: "Kitap kârı 'gelirin maliyetten büyük olması' diye kullanır (s.150)".
- **Kitap s.150 satır 18:** "x  250 için g(x)  m(x) olur ve buna göre fabrikanın kâr etmesi için en az 251 adet…"
- **Değerlendirme:** Anlam doğru, ama tırnak işareti ifadeyi kitaptan birebir alıntı gibi gösteriyor.
- **Karar:** DOĞRU (içerik) / BİÇİM.
- **Öneri:** Tırnakları kaldır: "Kitap kârı, gelirin maliyetten büyük olduğu durum (g(x) > m(x)) olarak kullanır (s.150)."

### D2-05 · KÜÇÜK · sik_hatalar `kesisim_taraf` açıklamasında kaynaksız sıklık iddiası, sözcük çakışması ve sözlük dışı kapsam
- **Yer:** kart `sik_hatalar[5]`: "Çoğu zaman kök neden 600 < 4x satırını x < 150 diye okumaktır". Aynı kapsam s010 (6 < x → "x < 6") ve s017 `puanlama_notu` için de geçerli.
- **Sorunlar:**
  - (1) "Çoğu zaman" bir sıklık iddiasıdır ve kaynağı yok.
  - (2) Bu konuda "kök" bir matematik terimidir (denklem kökü). "Kök neden" ifadesi öğrenciyi şaşırtabilir.
  - (3) SKILL.md satır 130'daki `kesisim_taraf` tanımı yalnız "üst/alt sırasını ters okumak ya da öbür yana taşımak" diyor. "a < x satırını x < a diye okumak" bu tanımda yok.
- **Öneri:**
  - Cümleyi şöyle yaz: "Bir başka yol: 600 < 4x satırını x < 150 diye okumak; 600 < 4x, x > 150 demektir."
  - Ana ajan SKILL.md'deki tanıma "ya da 'a < x' satırını 'x < a' diye okuyup tarafı şaşırmak" ekleyebilir. Ya da bu okuma hatası s010 ve s017'de `esitsizlik_yonu` olarak anılabilir.

### D2-06 · KÜÇÜK · s018'de `mutlak_tam_uzunluk` etiketi zayıf
- **Yer:** s018 `hata_turu` ve `puanlama_notu`: "\|x − 350\| ≤ 3 yazan (aralığın tam uzunluğunu kullanan) öğrenci…"
- **Sorun:** Kök sapmayı doğrudan veriyor ("en fazla 1,5 mm"); öğrenciye bir aralık verilmiyor. Öğrencinin 3'e ulaşması için önce aralığı kurup uzunluğunu alması gerekir. Bu hata, sözlükteki tanımla ("d yerine aralığın tam uzunluğunu yazmak") gerçekçi biçimde yakalanmıyor. s012 bu hatayı zaten doğru bağlamda ölçüyor.
- **Öneri:** Etiketi s018'den kaldır ve puanlama notundaki ≤ 3 cümlesini sil. Ya da c/ç şıklarından birini "verilen kabul aralığından" kurulacak biçime getir.

### D2-07 · KÜÇÜK · b8'de kitap içeriği numarayla anılıyor; kartın kendi bilgi notuyla çelişiyor
- **Yer:** b8 kitap[3]: "(Uygulama 11, s.141-142)".
- **Kartın kuralı:** Kart `dogrula[8]`: "Kitaptaki örnek ve uygulamalar numarasıyla değil adıyla anılır".
- **Öneri:** "Kitabın iki depo uygulamasında … (s.141-142)" yaz. s011 kaynağı da bu adı kullanıyor.

### D2-08 · KÜÇÜK · b5'in kitap katmanında ondalık okuma notu iki kez yazılmış
- **Yer:** b5 kitap[1] ("Okuma notu: ondalık sayıda virgül…") ve kitap[3] ("Kitap ondalık sayılı uçları virgül ve boşlukla ayırır…").
- **Sorun:** Aynı bilgi iki kez veriliyor. "Ekranda tek fikir" kuralı açısından fazlalık var; matematik doğru.
- **Öneri:** kitap[1]'deki "Okuma notu" cümlesini sil; kitap[3] kalsın. Ya da tersini yap.

### D2-09 · KÜÇÜK · `docs/dogrula.md` #13, #23 ve #30 güncel değil (bkz. §4)

---

## 4. DOĞRULA maddeleri

| # | Durum | Değerlendirme |
|---|---|---|
| 13 | Açık; satırda "9.2.2, 9.2.3" yazıyor | **9.2.3 kısmı artık kapanabilir.** harita.json u2-k3 → `kitap` 136–160, `eslesme_puani` 1.0, `duzeltme` kaynağı s0136 ve s0170. Haritanın `dogrula` alanında "kitap sayfası içindekilerden eşlenemedi" maddesi artık yok. Satırdan 9.2.3 çıkarılmalı, ya da "9.2.3 [x] 2026-10-30 harita_duzeltme.json" notu düşülmeli. 9.2.2 bu turun kapsamı dışında. |
| 23 | Açık, içerik güncel | "Nerede" sütununda `konular/matematik-u2-k2.json` var, ama `konular/matematik-u2-k3.json` yok. Kart `dogrula[2]` #23'e atıf yapıyor. Sütuna kart eklenmeli. |
| 29 | Kapalı | Kartta bilgi notu olarak duruyor; tutarlı. |
| 30 | Açık | "Nerede" sütunu (b9, s017) ve teyit kaynağı güncel. **Ancak metin s017 için artık tam doğru değil.** s017 c şıkkı "en az kaç km" diye sormuyor; "A'nın daha ekonomik olduğu uzaklıkları" soruyor. Buna rağmen #30, s017 için hâlâ geçerli: `cevap` alanında "(tam sayı km için en az 201 km)" yazıyor, `kabul_edilenler` alanında "en az 201 km" var ve rubrik bu cevaba tam puan veriyor. Sürekli km'de "en az 201 km" cevabı (200, 201) aralığını dışarıda bırakır; bu cevabın tam puan alıp almayacağı öğretmen kararıdır. Öneri: #30 metnine "s017 kökü 'en az kaç' sormuyor; rubrik ve kabul_edilenler 'en az 201 km'yi tam puan sayıyor" eklensin. Kart b9'daki `puan_ipucu` ("201") ve `dogrula[1]` maddeleri güncel. |
| 31 | Kapalı | Grep temiz: ";" ayırıcı yok. Satırdaki biçim hatası düzeltilmiş. |
| 32 | Açık, güncel | Rubrik toplamları (10, 15, 15) ve kontrol puanları (2, 3, 3) dosyayla aynı. "s017'de 'x > 200' ile 'en az 201 km' ikisi de tam puan" ifadesi rubrikle aynı. |

`dogrula` alanlarının `docs/dogrula.md` karşılıkları:
- s016, s017 ve s018 → #32 (var).
- s017 → #30 (var).
- Kart → #29 (bilgi notu), #30 ve #23 (var).

## 5. Kontrol edilemeyenler
- **s.165 soru 11 ç'nin kitap cevabı:** Cevap anahtarı karekodda (dış bağlantı); yerel metinde yok.
- **s.150 satır 18:** "x > 250 için g(x) > m(x)" ifadesinde ">" glifleri metin dökümünde bozuk. Anlam bağlamdan ("kâr etmesi için en az 251") kesin.
- **Panel:** `panel/data/matematik.js` ile JSON'un alan alan eşitliği denetlenmedi; yalnız yeni içerikten üç dizgi grep ile bulundu. Panelin `.case .stem` için `pre-line` görünümü tarayıcıda göz kontrolüyle denetlenmedi.
