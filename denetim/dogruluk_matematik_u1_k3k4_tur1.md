# Doğruluk denetimi · Matematik Ünite 1 · k3 + k4 · Tur 1 (2026-10-26)

Denetçi: dogruluk-denetcisi (salt okur). İçerik dosyalarına dokunulmadı.

**Denetlenen dosyalar**
- `dersler/matematik/konular/matematik-u1-k3.json` (9.1.3, 5 bölüm)
- `dersler/matematik/konular/matematik-u1-k4.json` (9.1.4, 6 bölüm)
- `dersler/matematik/sorular/matematik-u1-k3.json` (12 soru)
- `dersler/matematik/sorular/matematik-u1-k4.json` (15 soru)

**Karşılaştırma kaynakları:** ders kitabı metni s0057–s0081, `denetim/pdf_teyit_u1.md` (kesin kabul edildi), program s0044, s0047, s0048, ortak sınav 2025-26 sabah ve öğle s0004.

**Yöntem:** 27 sorunun hepsi bağımsız çözüldü. Her soruda işaretli şık, `cevap`, `kabul_edilenler`, rubrik toplamı, çeldirici ile `hata_turu` uyumu ve `kaynak` sayfası kontrol edildi.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK (yanlış bilgi, yanlış anahtar, iki doğru şık) | 0 | — |
| ÖNEMLİ (kaynaksız, kapsam dışı, yanlış kaynak, hatalı çeldirici) | 4 | D1-K01, D1-K02, D1-K03, D1-K04 |
| KÜÇÜK | 11 | D1-K05 … D1-K15 |

**Cevap anahtarı sonucu:** 27 sorunun 27'sinde anahtar doğru. Hiçbir çoktan seçmeli soruda ikinci savunulabilir doğru şık yok. Bütün rubrik toplamları `puan` ile tutuyor:
- k3 s008: 4+4+3+4 = 15
- k3 s010: 3+3+2+2 = 10
- k3 s011: 3+5+2+3+2 = 15
- k3 s012: 2+2+3+3 = 10
- k4 s007: 2·5 = 10
- k4 s011: 4+3+3+2+3 = 15
- k4 s015: 4+3+2+3+3 = 15

Kontrol hesapları:
- k3 s008: 7/24 ≈ 0,2917 ve 0,3 değerleri 0,25 ile 0,333 arasında.
- k4 s011: 22² − 20² = 84.
- k4 s015: 36 − 18 = 18.
- k4 s012: 156,25 − 56,25 = 100.

**Kapsam:** Programın dışına çıkan içerik yok. 9.1.4'te yalnızca üç özdeşlik, ortak çarpan ve a·b = 0 kullanılmış (program s0048). k3 s011'deki 3'ün katları kümesi programda 9.1.2 örneği olarak geçiyor (s0047: "3'ün katı olan doğal sayılar").

**Telif:** Kitaptan 1–2 cümleyi aşan birebir alıntı bulunmadı.

---

## Bulgular

### D1-K01 · ÖNEMLİ · Doğal sayılar tanımı 0'ı dışarıda bırakıyor ve kendi içinde tutarsız
- **Dosya ve yol:**
  - `konular/matematik-u1-k3.json` → `bolumler[0].terimler[1].tanim`: "Saymada kullandığımız 1, 2, 3 gibi sayıların kümesi; N ile gösterilir."
  - aynı dosya → `bolumler[0].kontrol_sorulari[0].ipuclari[2]`: "6 sayma sayısıdır, kümesinin harfi N."
  - `sorular/matematik-u1-k3.json` → `sorular[0].ipuclari[2]`: "Saymada kullandığımız 0, 1, 2, 3, ... sayılarının…"
- **Sorun:**
  - Kart doğal sayıları sayma sayılarıyla (1, 2, 3, …) eşitliyor. Soru ise 0'ı ℕ'ye katıyor. İki dosya birbiriyle çelişiyor.
  - Türkiye müfredatında ℕ = {0, 1, 2, …}'dir. "Sayma sayıları" ayrı bir kümedir (ℕ⁺).
  - Kitabın 1.3 sayfalarında tanım yok, yalnızca harfler var (s.59: "Doğal sayılar ( N ), tam sayılar (Z )…"). Soru kendi `dogrula` alanında bu varsayımı zaten not etmiş.
- **Karar:** YANLIŞ / tutarsız. Cevap anahtarını etkilemiyor.
- **Önerilen düzeltme:**
  - Kart terimi şöyle olsun: "doğal sayılar: 0, 1, 2, 3, … sayılarının kümesi; ℕ ile gösterilir."
  - Kart ipucu şöyle olsun: "6 bir doğal sayıdır: 6 ∈ ℕ."
  - s001 ipucu 3 şöyle olsun: "Doğal sayılar 0, 1, 2, 3, … diye gider. Bunların arasında −8 var mı, kontrol et." ("Saymada kullandığımız" ifadesini 0 ile birlikte kullanma.)

### D1-K02 · ÖNEMLİ · Serbest değişkenli eşitsizliğe "önerme" deniyor
- **Dosya ve yol:**
  - `konular/matematik-u1-k4.json` → `bolumler[0].katmanlar.yazilida.ornek_soru` ve `ornek_cevap` ("'x gerçek sayısı 3'ten büyüktür.' önermesini…", "Önerme: x ∈ ℝ, x > 3")
  - aynı dosya → `flashcard[1].on` ("x < 4 önermesinin değili")
  - `sorular/matematik-u1-k4.json` → `sorular[1].kok` ("a ∈ ℝ olmak üzere “a > 5” önermesinin değili")
- **Sorun:**
  - Kitabın tanımı (pdf_teyit, s.68): "Kesin doğru ya da kesin yanlış bir hüküm bildiren ifadelere önerme denir."
  - "x > 3" ifadesinin doğruluğu x'e bağlıdır, yani kesin bir hüküm bildirmez. Kartın kendi tanımıyla da çelişir ("kesin karar verilebilen ifade").
  - Kitap örnekleri ya sayısal ("5 + 4 = 9" gibi, s.68) ya da niceleyicilidir. s.73 Uygulama 23 tablosu: "∃x ∈ ℝ, x² < 0 → değili ∀x ∈ ℝ, x² ≥ 0".
  - İşaretin değili (> → ≤) doğru; sorun yalnızca adlandırmada. Ama aynı karttaki önerme tanımıyla çeliştiği için öğrenciyi yanıltır.
- **Karar:** Kavram hatası. Anahtar (a ≤ 5) değişmez.
- **Önerilen düzeltme** (anahtarı korur):
  - s002 kökü: "a ∈ ℝ olmak üzere “a > 5” eşitsizliğinin değili ______ biçiminde yazılır." ("önermesinin" yerine "eşitsizliğinin" ya da "ifadesinin")
  - Flashcard: "x < 4 ifadesinin değili nedir?"
  - Kart b1 yazılı kalıbı: önermeyi niceleyiciyle kur. Örnek: "'Her x gerçek sayısı 3'ten büyüktür.' → ∀x ∈ ℝ, x > 3 (yanlış). Değili: ∃x ∈ ℝ, x ≤ 3 (doğru)."
  - Ya da sayısal örnek kullan: "'7 > 3' → değili 7 ≤ 3".

### D1-K03 · ÖNEMLİ · "a·b = 0 ⇔ a = 0 ∨ b = 0, yutan elemandan çıkan bir sonuçtur" ifadesi yarı doğru ve kaynaksız
- **Dosya ve yol:** `konular/matematik-u1-k4.json` → `bolumler[5].katmanlar.kitap[0]`
- **Sorun:**
  - Yutan eleman (a·0 = 0) yalnızca ⇐ yönünü verir: çarpanlardan biri 0 ise çarpım 0'dır.
  - ⇒ yönü (çarpım 0 ise çarpanlardan biri 0) ters eleman ile ispatlanır: a ≠ 0 ise iki taraf 1/a ile çarpılır, b = 0 bulunur.
  - Kitapta böyle bir gerekçe cümlesi yok. Kitap yalnız şunu söylüyor (s.78 Örnek 23): "Çarpımın sonucu sıfırsa çarpılan iki ifadeden en az biri sıfıra eşit olur." Program (s0048) da ilişkiyi yalnızca önerme olarak veriyor.
- **Karar:** YANLIŞ (eksik gerekçe) ve KAYNAKSIZ.
- **Önerilen düzeltme:** İkinci cümleyi sil ya da şöyle değiştir: "Çarpanlardan biri 0 ise çarpım 0'dır (yutan eleman). Tersine, çarpım 0 ise çarpanlardan en az biri 0'dır (kitap s.78, Örnek 23)."

### D1-K04 · ÖNEMLİ · `fark_karesi_isaret` etiketi sözlükteki anlamıyla kullanılmıyor
- **Dosya ve yol:**
  - `sorular/matematik-u1-k4.json` → `sorular[8].secenekler[2]` ("4x² − 12x − 9", `hata_turu: fark_karesi_isaret`)
  - `konular/matematik-u1-k4.json` → `sik_hatalar[1]` ("(a − b)² = a² − 2ab − b² yazmak; son terim her zaman artıdır.")
- **Sorun:**
  - Sözlükteki tanım (`soru-yazim-kurallari/SKILL.md`): `fark_karesi_isaret` = "(a − b)²'de **orta terimin** işaretini + yazmak".
  - Bu çeldiricideki hata ise son terimin (b²) işaretini − yazmak.
  - Açıklama metni doğru ama etiket başka bir hatayı sayıyor. Panelin hata istatistiği yanlış dağılır.
- **Karar:** Çeldirici etiketi uyumsuz.
- **Önerilen düzeltme:** İki yoldan biri seçilmeli.
  - (a) Sözlüğe yeni etiket ekle: `kare_son_terim_isaret`, anlamı "(a ± b)²'de b² terimini − yazmak". Bu iki yerde onu kullan.
  - (b) Çeldiriciyi sözlükteki anlama uydur: seçenek "4x² + 12x + 9" olsun, açıklama "Farkın karesinde orta terim −2ab'dir, işaret eksi kalır." olsun. Kart `sik_hatalar[1]` metni de sözlükle uyumlu yazılsın.

### D1-K05 · KÜÇÜK · Kitap katmanında kitabın örneği yerine kartın kendi örneği "kitap" olarak sunuluyor
- **Yol:** `konular/matematik-u1-k3.json` → `bolumler[4].katmanlar.kitap[1]` ("Örnek: √2 ∈ Q' ama √2 · √2 = 2…")
- **Kitap karşılığı:** s.65 Örnek 20 (pdf_teyit): √3, √12 ∈ ℚ′ için √3 · √12 = √36 = 6 ∉ ℚ′. Kartın √2 örneği matematikçe doğru, ama kitap katmanında kitabınkiymiş gibi duruyor.
- **Öneri:** "Kitaptaki Örnek 20: √3 · √12 = √36 = 6 ve 6 ∉ ℚ′. √2 · √2 = 2 de aynı işi görür." Böylece iki örnek de verilmiş olur.

### D1-K06 · KÜÇÜK · Küme sembolleri tutarsız
- **Yol:**
  - k3 kartının tamamı ve k3 sorularının çoğu düz harf kullanıyor: N, Z, Q, R, Q'.
  - k4 kartı ve k4 soruları ℕ, ℝ kullanıyor.
- **Kitap karşılığı:** Kitap ℚ′ kullanıyor (pdf_teyit s.65).
- **Öneri:** k3 kartında ve k3 sorularında hepsini ℕ, ℤ, ℚ, ℝ, ℚ′ yap. Düz kesme işareti (') yerine üs işareti (′) kullan.

### D1-K07 · KÜÇÜK · Sözlükte olmayan `hata_turu` etiketleri
- **Yol:**
  - k3 s001: `kume_kapsama`
  - k3 s005: `esitsizlik_yonu`
  - k3 s007, s010, s011, s012 ve k3 kartı `sik_hatalar`: `uyan_ornek_vermek`, `tek_ornekle_ispat`, `eksi_sayi_kume_disi`, `irrasyonel_carpim`, `sembol_eksik`
- **Sorun:** SKILL.md sözlüğü genişletilebilir, ama yeni etiketin oraya eklenmesi gerekiyor.
- **Öneri:** Bu yedi etiketi tanımlarıyla birlikte `soru-yazim-kurallari/SKILL.md` sözlüğüne ekle. s005'te `esitsizlik_yonu` yerine anlamı daha yakın olan `kavram_karisikligi` de kullanılabilir.

### D1-K08 · KÜÇÜK · k3 s008 rubriği ondalık yolu dışarıda bırakıyor, kökte anlatım tekrarı var
- **Yol:** `sorular/matematik-u1-k3.json` → `sorular[7].rubrik[1]` ve `kok`
- **Sorun:**
  - Rubriğin 1. ölçütü "doğru sonuca götüren tüm yollar kabul edilir" diyor. 2. ölçüt ise yalnızca "paydaları eşitleyip" yapılan işlemi puanlıyor. Öğrenci 0,25 < 0,3 < 0,333… yoluyla giderse 4 puanı nereden alacağı belli değil.
  - Kökte "işlemlerinizi göstererek gösteriniz" yazıyor; aynı fiil iki kez geçiyor.
- **Öneri:**
  - 2. ölçüt: "Seçilen yolda işlemleri doğru yapma (payda eşitleme ya da ondalık gösterime çevirme)."
  - Kök: "…arasında olduğunu işlemlerinizi yazarak gösteriniz."

### D1-K09 · KÜÇÜK · Kaynak sayfası daha kesin yazılabilir
- k3 s009 → `kaynak.kitap`: "s.59" yerine "s.59, s.66 (Alıştırma 1b)". Soru, kitabın s.66'daki "ikişer saniye geç tamamlasaydı sıralama değişir miydi?" sorusunun uyarlaması.
- k4 s007 → "s.72" yerine "s.72–73". s.73 Uygulama 23 tablosundaki örnek satır bu önermenin kendisi: "∃x ∈ ℝ, x² < 0 → ∀x ∈ ℝ, x² ≥ 0".
- k4 s014 → "s.72" yerine "s.72, 76, 78":
  - a·b = 0 sözel hâli s.72'de,
  - a² − b² özdeşliği s.76'da,
  - "çarpımın sonucu sıfırsa…" cümlesi s.78 Örnek 23'te.
- k4 s013 → "s.77" belirsiz. s.77 metninde köklü bir kare farkı görünmüyor. "s.76 (özdeşlik), s.79 Örnek 24 (köklü uygulama), program s0048" yazılması önerilir. Böylece s013'ün `dogrula` maddesi de kapanır.

### D1-K10 · KÜÇÜK · Puan ipucunda puanlama anahtarının söylemediği bir zorunluluk var
- **Yol:** `konular/matematik-u1-k3.json` → `bolumler[4].katmanlar.yazilida.puan_ipucu` ("son cümleyi mutlaka yaz")
- **Kaynak:** 2025-26 sabah sınavı s0004, 6. soru: "a, b ∈ N olmak üzere a – b ∉ N olduğunun gösterildiği tüm cevaplar doğrudur." Sonuç cümlesi yalnızca "Örnek cevap" içinde geçiyor; puan şartı olarak yazılmamış.
- **Öneri:** "Son cümleyi yazmak cevabı tamamlar; ÖDSGM'nin örnek cevabında var."

### D1-K11 · KÜÇÜK · Rasyonel ve irrasyonel sayı tanımları belirsiz
- **Yol:** `konular/matematik-u1-k3.json` → `bolumler[0].terimler[3]` ve `[5]` ("Kesir şeklinde yazılabilen…")
- **Sorun:** √2/2 de "kesir şeklinde" yazılmış bir sayı, ama rasyonel değil.
- **Öneri:**
  - "a ve b tam sayı, b ≠ 0 olmak üzere a/b biçiminde yazılabilen sayılar; ℚ."
  - İrrasyonel için: "Bu biçimde yazılamayan gerçek sayılar; ℚ′."

### D1-K12 · KÜÇÜK · k4 kartında iki terim kaynaksız ya da gevşek tanımlanmış
- **İspat:** `bolumler[2].katmanlar.kitap[3]` ispatı "harflerle göstermek" diye tanımlıyor. Kitap "cebirsel ispat" diyor (s.73 Örnek 22, s.74 Sıra Sizde 16).
  - **Öneri:** "Bir önermenin her durumda doğru olduğunu harflerle (genel olarak) göstermeye **cebirsel ispat** denir."
- **Açılım:** `bolumler[3].katmanlar.kitap[4]` açılımı "çarpımdan toplama çevirmek" diye tanımlıyor. Kitapta böyle bir tanım yok; kelime yalnızca s.78'de "farkının karesinin açılımıdır" diye kullanılıyor.
  - **Öneri:** Cümlenin başına "Kitapta tanımı verilmez; " ekle ya da tanımı terimler listesinde bırakıp kitap katmanından çıkar.

### D1-K13 · KÜÇÜK · Örnekte köşegen için gereken bilgi eksik
- **Yol:** `konular/matematik-u1-k3.json` → `bolumler[0].ornek.metin` ("kare bir sacın köşegeni ise √2 metre geliyor")
- **Öneri:** "kenarı 1 metre olan kare bir sacın köşegeni √2 metredir."

### D1-K14 · KÜÇÜK · "ya da" bağlacının sembolü (⊻) kartta eksik
- **Yol:** `konular/matematik-u1-k4.json` → `bolumler[2].katmanlar.kitap[0]` ve `terimler[1]`
- **Kitap karşılığı:** pdf_teyit Tablo 1.2 (s.72): "⊻ ya da".
- **Öneri:** "…ya da (⊻), ise (⇒), ancak ve ancak (⇔)."

### D1-K15 · KÜÇÜK · Konuya özel DOĞRULA maddeleri `docs/dogrula.md` dosyasında yok (kontrol 7)
- **Durum:** `docs/dogrula.md` içinde 9.1.3 ya da 9.1.4'e ait satır yok. Yalnızca 13. madde var ve o da sayfa aralıklarının genel notu.
- **Öneri:** Aşağıdaki "AÇIK KALAN DOĞRULA" listesindeki maddeler ana ajan tarafından `docs/dogrula.md` dosyasına eklensin. Denetçi o dosyaya yazamaz.

---

## Sorulara göre durum (bağımsız çözüm)

| Soru | Benim cevabım | Anahtar | Not |
|---|---|---|---|
| k3 s001 | N | ✓ | D1-K01 (ipucu 3) |
| k3 s002 | Doğru | ✓ | s.63 maddeleri |
| k3 s003 | Yanlış (ℤ çıkarmaya göre kapalı) | ✓ | |
| k3 s004 | karşıt örnek | ✓ | s.63 |
| k3 s005 | ≤ | ✓ | "<" doğru olarak kabul edilmemiş, yerinde |
| k3 s006 | 37/2 | ✓ | Çeldiriciler 37, 1/2 ve 55/2 (18 + 19/2) gerçekten bu hatalardan çıkıyor |
| k3 s007 | ℚ çarpmaya göre kapalı | ✓ | Tek doğru şık |
| k3 s008 | 7/24 | ✓ | D1-K08 |
| k3 s009 | a ≤ b ⇒ a + c ≤ b + c | ✓ | D1-K09 |
| k3 s010 | √2·√2 = 2 ∉ ℚ′ | ✓ | |
| k3 s011 | 3(a + b) ∈ B; 3 ÷ 6 = 1/2 ∉ B | ✓ | |
| k3 s012 | Emre; 1 ÷ 2 ∉ ℤ | ✓ | |
| k4 s001 | "en güzel sahil" | ✓ | |
| k4 s002 | a ≤ 5 | ✓ | D1-K02 |
| k4 s003 | dağılma | ✓ | |
| k4 s004 | Yanlış | ✓ | |
| k4 s005 | −3/2 | ✓ | |
| k4 s006 | ∃x ∈ ℝ, x + 0 ≠ x | ✓ | Tek doğru şık; niceleyici ve işaret değilleri doğru |
| k4 s007 | ∀x ∈ ℝ, x² ≥ 0 / ∃x ∈ ℝ, x² < 0; doğru / yanlış | ✓ | |
| k4 s008 | x² + 10x + 25 | ✓ | |
| k4 s009 | 4x² − 12x + 9 | ✓ | D1-K04 |
| k4 s010 | Yanlış | ✓ | |
| k4 s011 | x² + 4x + 4; x = 20 | ✓ | |
| k4 s012 | 100 | ✓ | Çeldiriciler 25, 20 ve 212,5 doğru hesaplanmış |
| k4 s013 | 2 | ✓ | D1-K09 |
| k4 s014 | ±7 | ✓ | `us_carpma` etiketi (x² = 2x) sözlükle uyumlu |
| k4 s015 | x = 3 | ✓ | Ortak sınav öğle 7. soru kalıbıyla uyumlu ((x − 3)² = 0) |

Kart içi kontrol soruları ve yazılı örnek cevapları da çözüldü; hepsi doğru:
- 5/12 sayısı 1/3 ile 1/2 arasında.
- 25·47 + 25·53 = 2500.
- 101² − 99² = 400.
- 6x = x² + 9 → x = 3. Sağlama: 18 − 9 = 9.
- 16x = 2x² + 32 → x = 4. Sağlama: 64 − 32 = 32.

## KAPANABİLİR DOĞRULA

| Dosya → yol | Madde | Kapatan kaynak |
|---|---|---|
| sorular k3 → `sorular[6].dogrula[0]` (s007) | "Q çarpmaya göre kapalı" görselden teyit edilmeli | pdf_teyit, kapalılık görseli (s.65): çarpma için ℕ, ℤ, ℚ, ℝ. **KAPANABİLİR** |
| sorular k3 → `sorular[9].dogrula[0]` (s010) | Q' sembolü ve √3·√12 = 6 | pdf_teyit: ℚ′ ve Örnek 20 (s.65). **KAPANABİLİR** (metinde Q' → ℚ′ düzeltmesiyle birlikte, bkz. D1-K06) |
| sorular k4 → `sorular[5].dogrula[0]` (s006) | Değil alınırken "x ∈ ℝ" kısmı aynen kalır mı? | pdf_teyit Tablo 1.1 ve 1.2'deki sembol eşlemesiyle s.73'teki bozuk satır okunabiliyor: Uygulama 23 örnek satırı "∃x ∈ ℝ, x² < 0" → değili "∀x ∈ ℝ, x² ≥ 0". "x ∈ ℝ" aynen kalıyor. **KAPANABİLİR** |
| konular k3 → `dogrula[1]` | Bölmeye göre kapalı olmamanın nedeni (sıfıra bölme) s.65'te yazmıyor | pdf_teyit: "Bölmenin nedeni (sıfıra bölme) kitapta yazmıyor". **Kitapla ilgili kısmı KAPANABİLİR.** "Öğretmene sorulmalı" kısmı açık kalır; madde bu biçimde yeniden yazılmalı |
| sorular k4 → `sorular[6].dogrula[0]` (s007) | x² ≥ 0 kuralı 9.1.4 sayfalarında ayrı kural olarak yok | **Kısmen.** s.73 tablosu ∀x ∈ ℝ, x² ≥ 0 önermesini doğru önerme olarak kullanıyor (yukarıdaki eşlemeyle), ama ayrı bir kural cümlesi yok. Kaynak "s.72–73" yapılırsa kapanabilir |

**AÇIK KALAN DOĞRULA** (`docs/dogrula.md` dosyasına eklenmeli):
- k3 kartı `dogrula[0]`: ℕ, ℤ, ℚ, ℝ tanımları 1.3 sayfalarında yok. Yalnızca ℚ′ sembolü teyitli.
- k3 kartı `dogrula[2]`.
- k3 s001: 0 ∈ ℕ varsayımı (bkz. D1-K01).
- k3 s008, s010[1], s011[1], s012: rubrik puan dağılımları bizim önerimiz.
- k3 s011[0] ve s012: sıfıra bölme cevabının nasıl puanlanacağı.
- k4 kartı `dogrula[0]` (harita sayfa aralığı), `dogrula[1]` (birim / etkisiz eleman adı), `dogrula[2]` ("çarpanlarına ayırma" programda var, s0048; kitapta başlık yok).
- k4 s013: kaynak sayfası. D1-K09 uygulanırsa kapanır.

---

KARAR: DÜZELTİLMELİ (KRİTİK 0, ÖNEMLİ 4, KÜÇÜK 11)
