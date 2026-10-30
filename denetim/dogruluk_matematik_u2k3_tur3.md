# Doğruluk denetimi · matematik-u2-k3 (9.2.3) · tur 3 (son tur)

Tarih: 2026-10-30 · Denetçi: dogruluk-denetcisi (salt okur; denetlenen dosyalarda düzeltme yapılmadı)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u2-k3.json` (surum 3): 13 bölüm, 14 flashcard, 11 sik_hatalar, 10 `dogrula` maddesi. Dosya baştan yazıldığı için 1369 satırın hepsi okundu.
- Soru bankası `dersler/matematik/sorular/matematik-u2-k3.json` (surum 3): s001–s018, zorluk 8/7/3 (sayıldı: 1 → s001–s005, s007, s013, s014; 2 → s006, s008–s012, s016; 3 → s015, s017, s018).
- `docs/dogrula.md` #13, #23, #29–#32; `.claude/skills/soru-yazim-kurallari/SKILL.md` hata_turu sözlüğü.
- `panel/data/matematik.js`: yalnız surum 3 dizgileri grep ile arandı (4 dizgi, 6 eşleşme).

Kaynaklar:
- Kitap s0136–s0169 (grep: "kesim noktas", "kesişim noktas", "tolerans"), s0152 (satır 36–42), s0153 (satır 16–22), s0158 (satır 4–6, 30–37).
- Program s0045 (satır 45–50), s0054 (satır 24–25).

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | — |
| ÖNEMLİ | 0 | — |
| KÜÇÜK | 3 | D3-01, D3-02, D3-03 |

- **Tur 2:** D2-01 … D2-09 bulgularının 9'u da kapandı (bkz. §1).
- **Cevap anahtarı:** 18 sorunun hepsi yeniden çözüldü ve hepsi doğru. Çoktan seçmelilerde ikinci savunulabilir doğru yok.
- **Rubrik toplamları:** s016 = 10; s017 = 2·6 + 3 = 15; s018 = 2·6 + 3 = 15. Kontrol puanları 2, 3 ve 3; bu değerler #32 ile aynı.
- **Kart bozulma taraması:**
  - 13 bölümün hepsinde `kaynak` alanı (kitap_sayfa, program_sayfa, surec) var.
  - 34 kontrol sorusunun hepsinde 3 ipucu ve `yanlis_aciklama` var.
  - Flashcard sayısı 14.
  - Terimler tam. Yalnız b13 boş; b13 yeni terim getirmediği için bu kabul edilebilir.
  - Bölüm içi atıflar doğru: b11 → "Tolerans (b10)", b13 → "b10'daki parçalı gösterim", kart kaynak[2] → "b10 ve b11".
  - Kopyalama sırasında kayıp ya da bozulma bulunmadı.
- **Terim birliği:**
  - Grep sonucunda iki dosyada da "kesişim", "yarı uzunluk", "merkez", "eşit ücret noktası" ve "dahil" geçmiyor. Tek istisna kartın `dogrula[9]` bilgi notu; bu not adlarını anmaya izinli.
  - "tepe noktası" ve "simetri ekseni" de yok.
  - Aralık içinde ";" yok. ";" yalnız `kaynak.program` düz yazısında geçiyor.
  - "üzerinde" yalnız kitaptan alınan "grafik üzerinde gösteriniz" ifadesinde ve b7'deki "0 °C" bağlamında geçiyor. Bu ikisinde sorun yok.
- **Kitap sayımı teyidi:**
  - "kesim noktası" s.136–169'da 7 kez geçiyor: s.136, s.142 (2 kez), s.144, s.146, s.158, s.165.
  - "kesişim noktası" hiç geçmiyor.
  - "tolerans" kitabın tamamında 4 kez geçiyor (s.135'te 1, s.153'te 3). `dogrula[9]` "kitapta 4 kez" dediği için doğru.

KARAR: **TEMİZ.** KRİTİK ve ÖNEMLİ bulgu yok, yayın engeli yok. Üç KÜÇÜK bulgu isteğe bağlı düzeltmedir.

---

## 1. Tur 2 bulgularının durumu

| Kod | Önem | Durum | Kanıt |
|---|---|---|---|
| D2-01 | ÖNEMLİ | KAPANDI | s008 bağlamı (b) yolunu izliyor: satış 12 TL, birim maliyet 7 TL, sabit gider 400 TL. Çözüm adımları: Gelir 12x, Gider 400 + 7x, k(x) = 5x − 400. Kartın gelir tanımıyla ("kasaya giren para") uyumlu. |
| D2-02 | ÖNEMLİ | KAPANDI | b12 `puan_ipucu`, basit[9] ve flashcard 12 kuralı "\|f(x)\| = k" ile sınırlıyor. "< 0 → ∅" ve "≥ 0 → ℝ" ayrı cümlelerde. Kuralı harfiyen uygulayan öğrenci a, b ve c şıklarının hepsinde doğru sonuca ulaşır. |
| D2-03 | KÜÇÜK | KAPANDI | s015 adım 14: "Tek kesim noktası". s017 kök ç ve `puanlama_notu`: "kesim noktasının iki yanından … kesim noktasından sonraki … kesim noktasının soluna". s012 "orta nokta" ve "tolerans (orta noktadan uca uzaklık)" diyor; "merkez" yok. |
| D2-04 | KÜÇÜK | KAPANDI | b6 kitap[1] ve `dogrula[4]` tırnaksız: "Kitap kârı, gelirin maliyetten büyük olduğu durum olarak kullanır…" |
| D2-05 | KÜÇÜK | KAPANDI | `sik_hatalar[5]`: "Bu hataya bir okuma yanlışı da götürebilir: 600 < 4x satırını x < 150 diye okumak." "Çoğu zaman" ve "kök neden" ifadeleri çıkmış. SKILL.md satır 130'a "'a < x' satırını 'x < a' diye okumak" eklenmiş. |
| D2-06 | KÜÇÜK | KAPANDI | s018 `hata_turu` alanı artık [aralik_uc, esitsizlik_yonu, parcali_isaret]. "≤ 3" cümlesi `puanlama_notu`ndan silinmiş. |
| D2-07 | KÜÇÜK | KAPANDI | b8 kitap[3]: "Kitabın iki depo uygulamasında … (s.141-142)". Kartta "Uygulama N" ya da "Örnek N" geçmiyor (grep). |
| D2-08 | KÜÇÜK | KAPANDI | b5'in kitap katmanında okuma notu tek kez geçiyor (kitap[1]). kitap[3] artık rulman yazımı. |
| D2-09 | KÜÇÜK | KAPANDI | Ayrıntı §4'te. |

## 2. Yeni ve değişen içeriğin bağımsız hesabı

### Kart

| Bölüm | Benim hesabım | Karar |
|---|---|---|
| b12 kural | \|f(x)\| = k: k < 0 ise kök yok; k = 0 ise tek kök (f(x) = 0); k > 0 ise iki kök (f doğrusal ve a ≠ 0 iken f(x) = ±k). \|f(x)\| < 0 → ∅. \|f(x)\| ≥ 0 → ℝ. \|f(x)\| ≤ 0 ⇔ \|f(x)\| = 0 ⇔ f(x) = 0. \|x − 3\| ≤ 0 → {3}. \|x − 3\| > 0 → ℝ \ {3}, yani "3 hariç her x". \|x − 3\| = −2 → ∅. \|x − 3\| = 5 → {−2, 8}. \|x − 3\| < 5 → (−2, 8). \|x − 3\| > 5 → x < −2 ya da x > 8. | DOĞRU |
| b12 yazılı | a) \|2x − 6\| < 0 → ∅. b) \|2x − 6\| ≥ 0 → ℝ. c) 2x − 6 = 0 → {3}. ç) \|x − 1\| = 4 → 1 ± 4 → {−3, 5}. Kontroller: \|−4\| = \|4\| = 4 ve \|0\| = 0. | DOĞRU |
| b12 "boş küme" | Tanım "hiç elemanı olmayan küme; ∅" doğru. Program s.45 satır 45'te "boş küme" anahtar kavram, satır 49'da ∅ sembolü olarak geçiyor; bu sayfa 9.1'in (Tema 1, sayılar ve kümeler) tablosu. Atıf doğru. Program s.54 satır 24–25'teki sayım ("\|f(x)\| < 0, \|f(x)\| > 0, \|f(x)\| = 0, \|f(x)\| < k, \|f(x)\| > k, \|f(x)\| = k (k∈ℝ)") b12 kitap[1] ile birebir aynı. | DOĞRU |
| b10 kısa yol | 120 ± 0,5 → [119,5, 120,5]. h(120,5) = 0,5 ≤ 0,5. h(121) = 1 > 0,5. | DOĞRU |
| b10 ikinci yol | x ≥ 120: x − 120 ≤ 0,5 → x ≤ 120,5. x < 120: −x + 120 ≤ 0,5 → −x ≤ −119,5 → x ≥ 119,5. Birleşim 119,5 ≤ x ≤ 120,5; kısa yolla aynı. Cıvata: [39,8, 40,2]; h(40,5) = 0,5 > 0,2. Kontrol sorusu 3: −x ≤ −8 → x ≥ 8. | DOĞRU |
| b6 | k(x) = 10x − 360. Kâr: x > 36 → en az 37. Zarar: x < 36 → en çok 35. k(36) = 0, k(37) = 10, k(35) = −10. Kermes: 15x − 600 > 0 → x > 40 → 41; k(40) = 0, k(41) = 15. Kitap s.150 (m(x) = 300 000 + 1300x, g(x) = 2500x, 250, 251) doğru aktarılmış. | DOĞRU |
| b11 | [118, 122] → c = 240 ÷ 2 = 120, d = 4 ÷ 2 = 2. Hatalı ≤ 4 yazımı gerçekten [116, 124] verir. Rulman: (59,95 + 60,05) ÷ 2 = 60 ve 0,10 ÷ 2 = 0,05. Tahmin oyunu: s.152 satır 40–42 "en çok 50 gram eksik ya da 50 gram fazla … 1350 gram" → [1300, 1400], orta nokta 1350, tolerans 50. Pim: 30 ve 4 → [26, 34]. Kontrol soruları: 10; \|x − 10\| ≤ 4; 25 ± 10 → 15 ile 35, doğrusu 5. | DOĞRU |
| b13 | x ≥ 2: x − 2 = 2x − 1 → x = −1, şartı sağlamıyor, atılır. x < 2: −x + 2 = 2x − 1 → 3 = 3x → x = 1, kabul. −1 için sol taraf \|−3\| = 3, sağ taraf −3. Yazılı: \|x − 4\| = x − 2; x ≥ 4 parçasında −4 = −2 çelişki çıkıyor; x < 4 parçasında x = 3, kabul. Kontrol: 1 = 1. Kitap s.158 satır 6 (−2/5 şartı sağlamaz) ve satır 30 ((4, 11)) aktarımı doğru. Kontrol sorusu: \|4 − 6\| = 2 = 4 − 2. | DOĞRU |
| Diğer bölümler (b1–b5, b7–b9) | Bütün sayılar yeniden hesaplandı: b4 (t ≤ 100; 15 saat), b5 ([0, 10); [0, 10]), b7 ([0, 3); (−∞, 4]), b8 ((60, 220); (200, 2000)), b9 (x > 150; x > 200; A(300) = 2400 < 2600). Isıtma sistemi: g(10) = e(10) = 73 000; g(15) = 81 000, e(15) = 99 000; 36 000 = 3600x. | DOĞRU |
| Flashcard 1–14, sik_hatalar 1–11 | Matematik doğru | DOĞRU |

### Banka

| Soru | Benim çözümüm | Karar |
|---|---|---|
| s008 | Gelir 12x. Gider 400 + 7x. k(x) = 5x − 400 < 0 → x < 80 → 79. Kontrol: k(79) = 948 − 953 = −5; k(80) = 960 − 960 = 0. **Çeldiriciler:** 80 → k = 0, zarar yok (aralik_uc). 33 → 12x < 400 → x < 33,3 → 33 (12'yi kâr sanıp birim maliyeti unutmak; kavram_karisikligi). 21 → 12x − 400 + 7x = 19x − 400 < 0 → x < 21,05 → 21 (parantez açarken işaret; isaret_hatasi). Dört değer birbirinden farklı. "En çok" sorulduğu için ikinci doğru şık yok. | DOĞRU |
| s010 | 3000x + 9000 < 4000x + 3000 → 6000 < 1000x → x > 6. A(6) = B(6) = 27 000. **Yeni şık "Her kiralama süresinde":** A(1) = 12 000 > B(1) = 7000 (x = 4'te de 21 000 > 19 000). Şık yanlış, ikinci doğru riski yok. Etiket kavram_karisikligi: düşük saat ücretini her durumda ucuzluk sanmak; makul. kesisim_taraf açıklaması ("6 < x satırı x > 6 demektir; 4 saatte … B ucuzdur") SKILL.md satır 130'un yeni tanımıyla uyumlu. | DOĞRU |
| s012 | (249,6 + 250,4) ÷ 2 = 250. Tolerans 250,4 − 250 = 0,4. "≤ 0,8" çeldiricisi tam uzunluk, "< 0,4" uç hatası, "≥ 0,4" yön hatası. Orta nokta ve tolerans dili kartla aynı. Zorluk 2 uygun (iki ara hesap ve bir işaret seçimi). | DOĞRU |
| s015 | x ≥ 3: x − 3 = 2x − 9 → x = 6, kabul. x < 3: −x + 3 = 2x − 9 → 12 = 3x → x = 4, şartı sağlamıyor. −x − 3 yazılırsa 6 = 3x → 2 çıkıyor ({2, 6}). 3: \|0\| = 0 ≠ −3. 14 adımın sırası kart b13 yazılısıyla aynı: içi sıfır yapan sayı, x ≥ parçası ve şartı, x < parçası ve şartı, çözüm kümesi, iki yerine koyma, grafik. | DOĞRU |
| s016 | [0, 12]. f(12) = 96, f(13) = 64. Rubrik toplamı 10. | DOĞRU |
| s017 | x = 200, ortak ücret 6000 TL, x > 200. Tablo: 4200 ve 3600; 7800 ve 8400. Rubrik toplamı 15. "1200 < 6x satırını 'x < 200' diye okumak" gerekçesi doğru. | DOĞRU |
| s018 | [348,5, 351,5]. h(348,2) = 1,8 → ret. h(351,2) = 1,2 → kabul. Uçlar 1,5 → kabul. h(352) = 2 → ret. Puanlama notundaki yön cümlesi "−x ≤ −348,5 satırında yönü çevirmeden x ≤ 348,5" doğru: çevrilmeyen yön gerçekten x ≤ 348,5 verir, doğrusu x ≥ 348,5. Rubrik toplamı 15. | DOĞRU |
| Bölünen adımlar | s001 (f(2) = 110 = 60 + 25 + 25), s002 (119,2; 118,4), s004 (380; 830), s005 (−25 → x ≤ 5; 15; 10; 40), s006 (27 → 9; 35; 23), s007 (−8 → 4; 8; −2; x < 4), s009 (120 = 10x → 12 → 340; B(12) = 340; çeldiriciler 460 ve 205 hata yolundan çıkıyor), s011 (−6x < −30 → x > 5; 20 ve 50; 36 ve 18), s012, s013 (59,95 ve 60,05; 0,1 > 0,05), s014 (6; 0). Bölme sırasında adım kaybı ya da sayı hatası yok. | DOĞRU |

## 3. Yeni bulgular

### D3-01 · KÜÇÜK · s013 `hata_turu` alanında `mutlak_tam_uzunluk` zayıf etiket
- **Yer:** `sorular/matematik-u2-k3.json` → s013 `hata_turu` ["aralik_uc", "mutlak_tam_uzunluk"].
- **Sorun:**
  - Soruda eşitsizlik hazır veriliyor: \|60 − x\| ≤ 0,05. Öğrenciden aralıktan d yazması istenmiyor.
  - Bu yüzden "d yerine aralığın tam uzunluğunu yazmak" hatası (SKILL.md satır 97) burada oluşamaz.
  - Bu, tur 2'de s018 için kapatılan D2-06 ile aynı gerekçe.
- **Öneri:** Etiketi s013'ten kaldır. Bu hata zaten s012'de doğru bağlamda ölçülüyor.

### D3-02 · KÜÇÜK · SKILL.md `kesisim_taraf` tanımında "kesişim" sözcüğü kalmış
- **Yer:** `.claude/skills/soru-yazim-kurallari/SKILL.md` satır 130: "iki doğrunun kesişiminden sonra … kesişimin bir yanındaki".
- **Sorun:**
  - Öğrenciye görünen metin değil.
  - Ancak soru yazan ajan bu tanımı açıklama metnine kopyalarsa, kart ve bankadaki "yalnız kesim noktası" kuralı bozulur.
- **Öneri:** "kesim noktasından sonra … kesim noktasının bir yanındaki" yaz. Kod adı (`kesisim_taraf`) aynı kalsın. Bu dosya ana ajanın sorumluluğundadır.

### D3-03 · KÜÇÜK · b12 ve b13'te aynı kitap cümlesi tekrarlanıyor
- **Yer:**
  - b12 kitap[4]: "Kitap \|f(x)\| < g(x) gibi biçimleri tabloyla verilen fonksiyonlarla da çalıştırır (s.156)."
  - b13 kitap[3]: "Kitap \|f(x)\| = g(x) ve \|f(x)\| < g(x) gibi biçimleri tabloyla verilen fonksiyonlarla da çalıştırır (s.156)."
- **Sorun:**
  - Matematik doğru.
  - b12'nin konusu sabit sağ taraf (k). g(x) biçimi b13'ün konusu olduğu için cümle b12'de yersiz.
- **Öneri:** b12 kitap[4]'ü sil; b13'teki kalsın.

## 4. DOĞRULA maddeleri

| # | Durum | Değerlendirme |
|---|---|---|
| 13 | Açık, güncel | Satırda "Matematik 9.2.2 (s.120–135) ve 9.2.3 (s.136–160) harita_duzeltme.json ile elle eşlendi (2026-10-30)" notu var. Başka derslerde eşleşmeyen sayfalar kaldığı için satırın açık kalması doğru. D2-09'un #13 kısmı kapandı. |
| 23 | Açık, güncel | "Nerede" sütununa `konular/matematik-u2-k3.json` eklenmiş. Kart `dogrula[2]` ile tutarlı. |
| 29 | Kapalı | Kartta bilgi notu olarak duruyor (`dogrula[0]`); tutarlı. |
| 30 | Açık, güncel | Tur 2'nin önerdiği cümle eklenmiş: "s017 kökü artık 'en az kaç' sormuyor; ama rubrik ve kabul_edilenler 'en az 201 km'yi tam puan sayıyor". Kart `dogrula[1]`, b9 `puan_ipucu` ve s017 `dogrula[0]` ile tutarlı. |
| 31 | Kapalı | Aralık içinde ";" yok (grep). |
| 32 | Açık, güncel | Rubrik toplamları (10, 15, 15) ve kontrol puanları (2, 3, 3) dosyayla aynı. |

**Yeni DOĞRULA maddesi:** Gerekmiyor. Bu turda kaynakla çelişen ya da teyit isteyen yeni iddia çıkmadı.

## 5. Kontrol edilemeyenler
- **s.165 soru 11 ç'nin kitap cevabı:** Cevap anahtarı karekodda; yerel metinde yok (#30 açık).
- **s.154–155 parçalı çözüm satırları:** Metin dökümünde glifler bozuk. Kartın aktardığı sonuç ([59,95, 60,05]) #29'daki PDF görseli teyidine dayanıyor; bu turda görsel yeniden açılmadı.
- **Panel:** `panel/data/matematik.js` ile JSON alan alan karşılaştırılmadı. Yalnız surum 3'e özgü 4 dizgi grep ile bulundu: s008 "bir simidin maliyeti 7 TL", s010 "Her kiralama süresinde", b12 "Hiç elemanı olmayan küme" ve b10 "İkinci yol (**parçalı").
