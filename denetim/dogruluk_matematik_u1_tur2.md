# Doğruluk denetimi · Matematik Ünite 1 · k1–k4 · Tur 2

- Tarih: 2026-10-26 · Denetçi: dogruluk-denetcisi (salt okur, içerik dosyalarına dokunulmadı)
- Denetlenen: `dersler/matematik/konular/matematik-u1-k1..k4.json`, `dersler/matematik/sorular/matematik-u1-k1..k4.json`
- Dayanak: tur 1 raporları (`dogruluk_matematik_u1_k1k2_tur1.md`, `dogruluk_matematik_u1_k3k4_tur1.md`), `pdf_teyit_u1.md`, kitap metni s0013–s0081, güncel `soru-yazim-kurallari/SKILL.md` sözlüğü.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | — |
| ÖNEMLİ | 11 | D2-01 … D2-11 (hepsi `hata_turu`: özgül etiket genel etikete indirilmiş ya da yanlış özgül etiket) |
| KÜÇÜK | 6 | D2-12 … D2-17 |

- Tur 1'in 6 ÖNEMLİ bulgusunun 6'sı giderildi.
- Cevap anahtarında sorun yok. 64 sorunun 64'ü bağımsız çözüldü: işaretli şıklar, cevaplar, kabul_edilenler ve rubrik toplamları doğru, ikinci savunulabilir doğru şık yok.
- Yeni ve değişen kart içeriklerinin hepsi çözüldü ve kitapla karşılaştırıldı. Bilgi hatası yok.
- Sözlükte olmayan etiket kalmadı. Kullanılan bütün `hata_turu` değerleri güncel sözlükte var.
- Kalan sorun şu: güncel sözlüğe yeni özgül etiketler eklendi, ama k3 (ve birkaç başka yer) hâlâ `kavram_karisikligi` kullanıyor. Bu hâliyle panelin hata istatistiği bu yanılgıları ayırt edemez.

---

## 1. Tur 1 izleme tablosu

### k1 + k2 (D1-xx)

| id | Düzey | Durum | Kanıt |
|---|---|---|---|
| D1-01 | ÖNEMLİ | GİDERİLDİ | k1 `s008.kaynak.kitap` = "s.20-21" |
| D1-02 | ÖNEMLİ | GİDERİLDİ | k1 kart `b4.katmanlar.kitap[2]` önerilen metinle aynı ("cebirsel doğrulama … (s.18)"); `s009.kaynak.kitap` = "s.16-18"; `s009.dogrula` = [] |
| D1-03 | KÜÇÜK | GİDERİLDİ | `b2.kontrol_sorulari[0].ipuclari[1]` artık "hep aynı sonucu bulursun" diyor; "aynı sayı" yanılgısı kalktı |
| D1-04 | KÜÇÜK | GİDERİLDİ | `b1.terimler[0..1]` ("aşağıda, büyük yazılan" / "sağ üstte, küçük yazılan") |
| D1-05 | KÜÇÜK | GİDERİLDİ | `b3.basit[3]`, `b3.terimler[0]`, flashcard[4], `s004` açıklamaları ve `cozum_adimlari[0]` "1 ≤ \|a\| < 10" |
| D1-06 | KÜÇÜK | GİDERİLDİ | Yeni `b8.katmanlar.kitap[0]`: 1,75 kaba tahmin, gerçek değer 1,732… |
| D1-07 | KÜÇÜK | GİDERİLDİ | `s012.secenekler[3]` = "7³ : 4"; doğru şık "7^(3/4)" |
| D1-08 | KÜÇÜK | GİDERİLDİ | `s019.secenekler[3].hata_turu` = `kare_farki_karistirma`, üst diziye de eklendi |
| D1-09 | KÜÇÜK | GİDERİLDİ | `s023.kabul_edilenler` = ["√2/2"]; `rubrik[4]`: 1/√2 yazımı 1 puan |
| D1-10 | KÜÇÜK | GİDERİLDİ | k1 s016/s018 "s.27-28", s009 "s.16-18", s004 "s.22-23"; k2 s001 "s.43-44", s010 "s.48, 54" |
| D1-11 | KÜÇÜK | GİDERİLDİ | k2 `b3.basit[3]` ve `b3.yazilida.ornek_cevap[3]` dolu nokta / boş daire |
| D1-12 | KÜÇÜK | GİDERİLDİ | k2 `sik_hatalar[0].hata_turu` = `aralik_uc` |
| D1-13 | KÜÇÜK | GİDERİLDİ | k2 `s014.baglam` kaynak makinesi 120 A ± 15 A oldu (önerilen bağlam) |
| D1-14 | KÜÇÜK | GİDERİLDİ | k2 sorularının hepsinde `dogrula` = [] |
| D1-15 | KÜÇÜK | GİDERİLMEDİ | `docs/dogrula.md` içinde 9.1.1–9.1.4 satırı yok (bkz. D2-12) |
| D1-16 | KÜÇÜK | GİDERİLDİ | k1 `s006.rubrik[0]` genel not olarak ayrıldı (bkz. D2-17) |

### k3 + k4 (D1-Kxx)

| id | Düzey | Durum | Kanıt |
|---|---|---|---|
| D1-K01 | ÖNEMLİ | GİDERİLDİ | k3 kart `b1.terimler[1]` "0, 1, 2, 3, …"; `b1.kitap[1]` kitap s.39 ℕ = {x \| x ≥ 0, x ∈ ℤ}; `s001.ipuclari[2]` "0, 1, 2, 3, …". Kart ile soru artık tutarlı |
| D1-K02 | ÖNEMLİ | GİDERİLDİ | k4 `s002.kok` "eşitsizliğinin değili"; flashcard[1] "x < 4 ifadesinin değili"; `b1.yazilida` sayısal önermeler (7 > 3, −2 ∈ ℕ); `b4.yazilida` ∀x ∈ ℝ, x > 3; `b1.kitap[3]` "'x > 3' tek başına önerme değildir" |
| D1-K03 | ÖNEMLİ | GİDERİLDİ | k4 `b8.katmanlar.kitap[1]`: ⇐ yönü yutan elemandan, ⇒ yönü ayrı söyleniyor. `kitap[0]` kitabın s.78 cümlesini aktarıyor |
| D1-K04 | ÖNEMLİ | GİDERİLDİ | k4 `s009.secenekler[2]` ("4x² − 12x − 9") artık `isaret_hatasi`. Kart `sik_hatalar[1]` (`fark_karesi_isaret`) sözlük anlamıyla yazıldı (orta terim +2ab); son terim hatası ayrı satır (`isaret_hatasi`) |
| D1-K05 | KÜÇÜK | GİDERİLDİ | k3 `b5.kitap[1]` Örnek 20 (√3 · √12 = 6), `kitap[2]` √2 · √2 |
| D1-K06 | KÜÇÜK | GİDERİLDİ | k3 kart ve sorularında ℕ, ℤ, ℚ, ℝ, ℚ′ |
| D1-K07 | KÜÇÜK | KISMEN | Etiketler sözlüğe eklendi, ama k3'te `kavram_karisikligi`'ye indirildi; `sembol_eksik` → `eksik_adim` oldu (uygun). Özgül etiketlerin geri getirilmesi: D2-01 … D2-08 |
| D1-K08 | KÜÇÜK | GİDERİLDİ | k3 `s008.rubrik[1]` ondalık yolu kapsıyor; kökte "işlemlerinizi yazarak gösteriniz" |
| D1-K09 | KÜÇÜK | GİDERİLDİ | k3 s009 "s.59, s.66 (Alıştırma 1b)"; k4 s007 "s.72-73", s014 "s.72, 76, 78", s013 "s.76, s.79 Örnek 24; program s.48" |
| D1-K10 | KÜÇÜK | GİDERİLDİ | k3 `b5.yazilida.puan_ipucu` "Son cümleyi yazmak cevabı tamamlar; ÖDSGM'nin örnek cevabında da var" |
| D1-K11 | KÜÇÜK | GİDERİLDİ | k3 `b1.terimler[3]` a/b (b ≠ 0); `terimler[5]` "a/b biçiminde yazılamayan" |
| D1-K12 | KÜÇÜK | GİDERİLDİ | k4 `b5.kitap[0]` "cebirsel ispat"; `b6.kitap[4]` "Kitapta ayrı tanımı verilmez; …" (bkz. D2-15) |
| D1-K13 | KÜÇÜK | GİDERİLDİ | k3 `b1.ornek.metin` "kenarı 1 metre olan kare bir sacın köşegeni" |
| D1-K14 | KÜÇÜK | GİDERİLDİ | k4 `b4.kitap[0]` ve `terimler[1]` "ya da (⊻)" |
| D1-K15 | KÜÇÜK | GİDERİLMEDİ | `docs/dogrula.md` değişmemiş (bkz. D2-12) |

---

## 2. Yeni ve değişen içeriğin yeniden doğrulanması (bağımsız çözüm)

### k1 kart (surum 2, 8 bölüm)
| Yer | Kendi çözümüm / kitap | Karar |
|---|---|---|
| b2 (yeni ayrılan bölüm) yazılı: 2⁻³ + 4⁰ − (−1)⁵ | 1/8 + 1 + 1 = 17/8 | DOĞRU. Kitap s.14: a⁰ = 1, a⁻ⁿ = 1/aⁿ |
| b2 kontroller: 5⁰, 2⁻¹ | 1; 1/2 | DOĞRU |
| b3 basit[2]: 0,4 · 10⁵ = 4 · 10⁴ | 40 000 = 40 000 | DOĞRU |
| b3 yazılı: 0,32 · 10⁶ + 48 · 10⁴ = K · 10⁵ | 3,2 + 4,8 = 8 → K = 8 | DOĞRU |
| b3 kontrol: 35 000 | 3,5 · 10⁴ | DOĞRU |
| b4 örnek: 64 : 4 = 16 = 2⁴ | 2⁶ : 2² = 2⁴ | DOĞRU |
| b4 yazılı: 2¹⁵ · 5¹² | 8 · 10¹² → 13 basamak | DOĞRU |
| b5 basit: 8^(2/3), yazılı 16^(3/4), ∛(5²) | 4; 8; 5^(2/3) | DOĞRU |
| b6 basit: ∛54 : ∛2, √2 · ∛3 | 3; ⁶√72 | DOĞRU |
| b6 yazılı: ∛250, ∛16, 5 parça | 5∛2, 2∛2; parça ∛2 × 2∛2; çevre 6∛2 m | DOĞRU |
| b7 (yeni) basit: 6/√3; (√5 − √2)(√5 + √2) | 2√3; 3 | DOĞRU. Kitap s.32 Uygulama 9 "Eşleniğini Bulma", s.33 "paydasını rasyonel sayı yapma" |
| b7 yazılı: 1/(√7 − √3) − √3/4 | (√7 + √3)/4 − √3/4 = √7/4 | DOĞRU |
| b7 kontroller | √6 + √2; 2; 2√3/3 | DOĞRU |
| b8 (yeni) örnek: √300 | 10√3 ≈ 17 m, çevre ≈ 68 m | DOĞRU |
| b8 basit: 1,7² = 2,89; 1,8² = 3,24; √3 1,7'ye daha yakın | 3 − 2,89 = 0,11 < 0,24; √3 = 1,732 | DOĞRU |
| b8 kitap[1]: arsa çiti maliyet problemi | Kitap s.34, 14. Örnek (1200 m² arazi, çit paneli) | DOĞRU |
| b8 yazılı: √75, √3 ≈ 1,7 | 5√3 ≈ 8,5; çevre ≈ 34 m | DOĞRU |
| b8 kontroller: √10, √20 | 3–4; 4–5 | DOĞRU |

### k1 sorular (değişenler)
s004 açıklamaları ve çözümü; s006 rubrik (3·5 = 15 + 0'lık genel not); s008, s009 (D/Y, Yanlış); s012 (7^(3/4), "7³ : 4" çeldiricisi `kavram_karisikligi` ile uyumlu); s016 ve s018 kaynakları; s019 etiketi; s023 (√2/2, rubrik 4+3+3+3+2 = 15). Hepsi DOĞRU. Değişmeyen sorular hızlıca yeniden kontrol edildi, tur 1 sonuçları geçerli.

### k2 kart
| Yer | Kendi çözümüm / kitap | Karar |
|---|---|---|
| b1 (yeni) s(A), ∈/∉, listeleme ve ortak özellik | Kitap s.39 ve s.41 sembol tablosu, "Kümelerde her eleman bir kez yazılır" (s.41) | DOĞRU |
| b1 kitap[1] T = {x \| x tek rakam}, s(T) | {1, 3, 5, 7, 9} → 5 (kitap s.39 tablosu) | DOĞRU |
| b1 yazılı: 10'dan küçük çift doğal sayılar | {0, 2, 4, 6, 8}, s(A) = 5; 0 ∈ ℕ (s.39) | DOĞRU |
| b1 kontroller | 5; Yanlış (7 ∉); 9 ∉ B | DOĞRU |
| b2 (yeni) örnek A = {1..5}, B = {4, 5, 6, 8} | ∩ {4, 5}; ∪ {1, 2, 3, 4, 5, 6, 8}; A \ B {1, 2, 3} | DOĞRU |
| b2 kitap: ⊆, ∅ | s.39 tablosu (alt küme, boş küme), s.41 "eşit veya alt küme" → ⊆ (pdf_teyit) | DOĞRU |
| b2 yazılı: A = {2, 4, 6, 8}, B = {1, 2, 3, 4} | ∩ {2, 4}; ∪ {1, 2, 3, 4, 6, 8}; A \ B {6, 8} | DOĞRU |
| b2 kontroller | {2, 3}; {1, 2, 3, 4}; {1} | DOĞRU |
| b3 "açık aralık", "yarı açık aralık" | Kitap s.42 "açık aralık", s.44 "yarı açık aralık" | DOĞRU |
| b3 basit[3] ve yazılı (5, 30] | dolu/boş uç s.54 (pdf_teyit) | DOĞRU |
| b5 kitap: evrensel küme ℝ, A′ = (−∞, 8) ∪ (16, ∞) | s.41, s.54 | DOĞRU |

### k2 sorular
s014 (yeni bağlam): \|x − 120\| > 15 → (−∞, 105) ∪ (135, ∞); rubrik 4+2+4 = 10. DOĞRU. Diğer 13 soru tur 1'deki gibi DOĞRU; `dogrula` alanları boşaltılmış.

### k3 kart
| Yer | Kendi çözümüm / kitap | Karar |
|---|---|---|
| b1 kitap[0] Babil tableti 1,4142 | s.57 madde 3 | DOĞRU |
| b1 kitap[1] ℕ = {x \| x ≥ 0, x ∈ ℤ} | s.39 tablosu | DOĞRU |
| b1 yazılı: −8 için ℕ yetmez | −8 ∉ ℕ, −8 ∈ ℤ | DOĞRU |
| b2 kitap[0] ℕ, ℤ, ℚ, ℝ sıralı | s.62, s.63 "sıralı kümelerdir" | DOĞRU |
| b2 kitap[2] a ≤ b, c ≤ 0 → a·c ≥ b·c | s.59 tablosu 7. satır | DOĞRU |
| b2 kitap[3] 1/a > 1/b ve aⁿ < bⁿ | pdf_teyit s.59 | DOĞRU |
| b2 yazılı: C < A, B ≤ C | B ≤ C < A → B < A | DOĞRU |
| b3 kitap[2] ortalama ile ispat | s.61, 19. Örnek (hipotez, hüküm, 4 adım) | DOĞRU |
| b3 yazılı: 1/3 ile 1/2 | 5/12; 4/12 < 5/12 < 6/12 | DOĞRU |
| b4 yazılı: ℤ bölmede | 3 ÷ 4 = 3/4 ∉ ℤ | DOĞRU |
| b5 kitap[0] "aksine örnek verme yöntemi" | s.65 | DOĞRU |
| b5 kitap[3] çift tam sayılar, 2 ÷ 6 = 1/3 | s.65, 21. Örnek (a = 1, b = 3) | DOĞRU |
| b5 yazılı: 2 − 9 = −7 ∉ ℕ | — | DOĞRU |

### k3 sorular
s001 (ℕ), s003 (Yanlış), s005 (≤), s006 (37/2; 55/2 = 18 + 19/2 ✓), s007 (ℚ çarpmada kapalı), s008 (7/24; 0,3 ∈ (0,25; 0,333…); rubrik 4+4+3+4 = 15), s009 (a + c; yeni süreler 4,8 < 5,1 < 5,5), s010 (rubrik 3+3+2+2 = 10), s011 (3(a + b); 3 ÷ 6 = 1/2 ∉ B; rubrik 3+5+2+3+2 = 15), s012 (Emre; rubrik 2+2+3+3 = 10). Hepsi DOĞRU. Çeldirici açıklamaları doğru; sorun yalnız etiketlerde (D2-01 … D2-08).

### k4 kart (surum 2, 8 bölüm)
| Yer | Kendi çözümüm / kitap | Karar |
|---|---|---|
| b1 kontrol "5 + 4 = 10" | Önerme, yanlış | DOĞRU |
| b1 yazılı 7 > 3 / −2 ∈ ℕ | doğru → değili 7 ≤ 3 yanlış; yanlış → değili −2 ∉ ℕ doğru | DOĞRU. "değili (olumsuzu)" s.68 |
| b2 dağılma, 3 · 35; 25 · 100; 4 · 13 | 105; 2500; 52 | DOĞRU. s.74 "Çarpma işleminin toplama işlemi üzerine dağılma özelliği" |
| b2 kitap[2] çıkarma/bölmede değişme ve birleşme yok | s.74 madde | DOĞRU |
| b3 (yeni) birim, ters, yutan eleman | s.74: birim 0 ve 1, yutan 0, "toplama, çıkarma ve bölme işlemlerinin yutan elemanı yoktur", çıkarma/bölmede birim ve ters yok; "etkisiz eleman" s.69, s.71 | DOĞRU |
| b3 yazılı a) b) c) ve kontroller | birim (1); 4 = −4'ün tersi; yutan (0); −5 | DOĞRU |
| b4 yazılı ∀x ∈ ℝ, x > 3 | yanlış; değili ∃x ∈ ℝ, x ≤ 3 doğru (x = 0) | DOĞRU |
| b4 kontrol "her oyuncu gol attı" değili | "bazı (en az bir) oyuncular gol atmadı" | DOĞRU |
| b5 (yeni) (2a)² = 2 · (2a²) | çift | DOĞRU (kitabın 22. Örneği tek sayıyla; kart çift sayıyı seçmiş, kopya değil). Terim notu: D2-15 |
| b6 13² = 169; 7² − 3² = 40; (10 − 3)² = 49; (x − 5)² | 100 + 60 + 9; 4 · 10; 100 − 60 + 9; x² − 10x + 25 | DOĞRU |
| b6 yazılı (x + 4)²; kontroller (x + 2)², 25 − x² | x² + 8x + 16; x² + 4x + 4; (5 − x)(5 + x) | DOĞRU |
| b7 12,5² − 7,5²; 101² − 99²; 9² − 1²; (√7 − 2)(√7 + 2); (√5 − 1)(√5 + 1) | 100; 400; 80; 3; 4 | DOĞRU. Karesel bahçe s.78, tuval s.79 |
| b8 6x = x² + 9; 16x = 2x² + 32 | x = 3; x = 4 (sağlamalar tutuyor) | DOĞRU |
| b8 kontroller | 5 veya −1; 0 veya 7; 4 | DOĞRU |

### k4 sorular
s002 (a ≤ 5; "5 ≥ a" kabulü doğru), s006 (kaynak güncel), s007 (rubrik 2·5 = 10), s009 (4x² − 12x + 9; "4x² − 6x + 9" 2'yi unutma ✓; "4x² − 12x − 9" son terim ✓), s011 (x = 20; 22² − 20² = 84; rubrik 15), s012 (100; 25 = 5², 20, 212,5 ✓), s013 (2), s014 (±7; 24,5 = 49/2 ✓), s015 (x = 3; rubrik 4+3+2+3+3 = 15). Hepsi DOĞRU.

---

## 3. Yeni bulgular

### ÖNEMLİ: `hata_turu` (panel hata istatistiği)

Güncel sözlükte özgül etiketler var. Aşağıdaki yerlerde açıklama metni özgül yanılgıyı anlatıyor, ama etiket genel kalmış ya da yanlış özgül etikete gitmiş.

#### D2-01 · ÖNEMLİ · k3 s001
- **Dosya ve yol:** `sorular/matematik-u1-k3.json` → `sorular[id=matematik-u1-k3-s001]`
- **Durum:** Üç çeldiricinin üçü de `kavram_karisikligi`.
  - "Tam sayılar (ℤ)" seçen öğrenci −8'in ℤ'de olmadığını sanıyor.
  - "ℚ" ve "ℝ" seçen öğrenci ℤ ⊆ ℚ ⊆ ℝ kapsamasını bilmiyor. Açıklamalar da tam bunu söylüyor: "−8/1 diye yazılabilir", "bütün tam sayıları da içerir".
- **Önerilen düzeltme:**
  - `secenekler[0].hata_turu` = `eksi_sayi_kume_disi`
  - `secenekler[2].hata_turu` = `kume_kapsama`
  - `secenekler[3].hata_turu` = `kume_kapsama`
  - Üst `hata_turu` = `["eksi_sayi_kume_disi", "kume_kapsama"]`

#### D2-02 · ÖNEMLİ · k3 s003 (D/Y)
- **Yol:** `sorular[id=matematik-u1-k3-s003].hata_turu`
- **Durum:** Ece eksi sonuç çıkınca ℤ'nin kapalı olmadığını sanıyor. Bu, sözlükteki `eksi_sayi_kume_disi` tanımının ta kendisi.
- **Önerilen düzeltme:** `["eksi_sayi_kume_disi"]`

#### D2-03 · ÖNEMLİ · k3 s005 (boşluk)
- **Yol:** `sorular[id=matematik-u1-k3-s005].hata_turu`
- **Durum:** Beklenen yanlış cevap "≥" (ters yön). Bunun sözlükteki karşılığı `esitsizlik_yonu`.
- **Önerilen düzeltme:** `["esitsizlik_yonu"]`

#### D2-04 · ÖNEMLİ · k3 s007
- **Yol:** `sorular[id=matematik-u1-k3-s007]`
- **Durum:**
  - `secenekler[0]` ve `[1]`: açıklamalar "9 − 5 = 4 gibi örnekler uyuyor ama…" ve "8 ÷ 2 = 4 uyuyor ama…" diyor. Öğrenci birkaç uyan örnekle kapalılığı kanıtlanmış sayıyor.
  - `secenekler[3]`: irrasyonel çarpımın hep irrasyonel olduğunu sanma.
- **Önerilen düzeltme:**
  - `secenekler[0].hata_turu` = `tek_ornekle_ispat`
  - `secenekler[1].hata_turu` = `tek_ornekle_ispat`
  - `secenekler[3].hata_turu` = `irrasyonel_carpim`
  - Üst `hata_turu` = `["tek_ornekle_ispat", "irrasyonel_carpim"]`

#### D2-05 · ÖNEMLİ · k3 s010 (açık uçlu)
- **Yol:** `sorular[id=matematik-u1-k3-s010].hata_turu` (şu an `["kavram_karisikligi", "eksik_adim"]`)
- **Durum:** Sorunun ölçtüğü yanılgılar iki tane: irrasyonel çarpım hep irrasyoneldir sanmak, ve karşıt örnek yerine uyan bir örnek vermek (√2 · √3 = √6 gibi).
- **Önerilen düzeltme:** `["irrasyonel_carpim", "uyan_ornek_vermek", "eksik_adim"]`

#### D2-06 · ÖNEMLİ · k3 s011 (açık uçlu)
- **Yol:** `sorular[id=matematik-u1-k3-s011].hata_turu`
- **Durum:**
  - a) şıkkında rubrik "yalnız sayısal örneklerle yetinen cevap bu puanı almaz" diyor. Bu `tek_ornekle_ispat` demek.
  - b) şıkkında uyan örnek riski var (6 ÷ 3 = 2 ∈ B).
- **Önerilen düzeltme:** `["tek_ornekle_ispat", "uyan_ornek_vermek", "eksik_adim"]`

#### D2-07 · ÖNEMLİ · k3 s012 (açık uçlu)
- **Yol:** `sorular[id=matematik-u1-k3-s012].hata_turu`
- **Durum:**
  - İpucu 1 öğrencinin Deniz'in önermesini eksi sonuç yüzünden yanlış sanmasını hedefliyor (`eksi_sayi_kume_disi`).
  - a) şıkkında uyan örnek riski var.
- **Önerilen düzeltme:** `["uyan_ornek_vermek", "eksi_sayi_kume_disi", "eksik_adim"]`

#### D2-08 · ÖNEMLİ · k3 kartı `sik_hatalar`
- **Yol:** `konular/matematik-u1-k3.json` → `sik_hatalar[0..3]` (dördü de `kavram_karisikligi`)
- **Durum:** Açıklamaların her biri sözlükteki yeni etiketlerden birinin tanımıyla bire bir örtüşüyor. Panel hata eşleştirmesi kart ile soruları bu etiketlerle bağlar.
- **Önerilen düzeltme:**
  - `[0]` → `uyan_ornek_vermek`
  - `[1]` → `tek_ornekle_ispat`
  - `[2]` → `eksi_sayi_kume_disi`
  - `[3]` → `irrasyonel_carpim`
  - `[4]` `eksik_adim` olarak kalır.

#### D2-09 · ÖNEMLİ · k1 s009 (D/Y)
- **Yol:** `sorular/matematik-u1-k1.json` → `sorular[id=matematik-u1-k1-s009].hata_turu` = `["kavram_karisikligi"]`
- **Durum:** Deniz "tek denemeye bakarak önermenin her sayı için doğrulandığını" söylüyor. Bu, `tek_ornekle_ispat` tanımının kendisi.
- **Önerilen düzeltme:** `["tek_ornekle_ispat"]`

#### D2-10 · ÖNEMLİ · k2 s006
- **Yol:** `sorular/matematik-u1-k2.json` → `sorular[id=matematik-u1-k2-s006].secenekler[2]` ("x ≥ 2", `kavram_karisikligi`)
- **Durum:** Açıklama "işaretin yönü ters olmuş" diyor; bu `esitsizlik_yonu`.
- **Önerilen düzeltme:** `secenekler[2].hata_turu` = `esitsizlik_yonu`. Üst diziye de ekle: `["aralik_uc", "sonsuz_koseli", "esitsizlik_yonu"]`.

#### D2-11 · ÖNEMLİ · k4 s009 ve s010: `kare_farki_karistirma` yerine `kare_dagitma`
- **Yol:**
  - `sorular/matematik-u1-k4.json` → `sorular[id=…-s009].secenekler[1]` ("4x² − 9")
  - `sorular[id=…-s010].hata_turu`
- **Durum:**
  - Sözlük: `kare_dagitma` = "(a ± b)² = a² ± b² sanmak (orta terimi unutmak)". `kare_farki_karistirma` ise ters yöndeki hata: "a² − b²'yi (a − b)² sanmak".
  - s009'da öğrenci (2x − 3)²'yi (2x)² − 3² diye açıyor; açıklama da "ortadaki −2ab terimi eksik kaldı" diyor.
  - s010'daki önerme "(a − b)² = a² − b²". İkisi de `kare_dagitma`.
  - k4 s012'nin "25" çeldiricisi (a² − b² yerine (a − b)²) ve k1 s019 doğru etiketli. Onlara dokunma.
- **Önerilen düzeltme:**
  - s009 `secenekler[1].hata_turu` = `kare_dagitma`; üst dizi `["kare_dagitma", "isaret_hatasi", "islem_hatasi"]`
  - s010 `hata_turu` = `["kare_dagitma"]`

### KÜÇÜK

#### D2-12 · KÜÇÜK · `docs/dogrula.md`'de Ünite 1 satırı yok (D1-15 ve D1-K15'ten devreden)
- **Durum:** Dosya değişmemiş; 9.1.1–9.1.4 için satır yok.
- **Öneri:** Bölüm 4'teki "AÇIK" maddeleri ana ajan eklesin.

#### D2-13 · KÜÇÜK · Rubrik DOĞRULA'ları sessizce kaldırılmış
- **Yol:**
  - k1 s006, s018, s023
  - k2 s012, s013
  - k3 s008, s010, s011, s012
  - k4 s007, s011, s015
- **Durum:**
  - Tur 1'de bu rubriklerin puan dağılımı "ÖDSGM anahtarında yok, bizim önerimiz" diye açık bırakılmıştı.
  - Şimdi soru dosyalarındaki `dogrula` alanları boş ve `docs/dogrula.md`'ye de taşınmamış.
  - CLAUDE.md'ye göre emin olunmayan bilgi DOĞRULA'lı kalır.
- **Öneri:** `docs/dogrula.md`'ye tek satır ekle: "Ünite 1 açık uçlu rubriklerinin puan dağılımı (12 soru, liste) öneridir; öğretmenin kısmi puan alışkanlığı sorulmalı."

#### D2-14 · KÜÇÜK · k2 sürüm numarası artmamış
- **Yol:** `konular/matematik-u1-k2.json` → `surum` = 1 ve `sorular/matematik-u1-k2.json` → `surum` = 1
- **Durum:** İçerik değişti (yeni b1/b2, s014 bağlamı, dogrula temizliği), ama sürüm artmadı. Diğer üç konu surum 2.
- **Öneri:** İki dosyada da `"surum": 2`.

#### D2-15 · KÜÇÜK · k4 b5 kitabın terimlerini vermiyor
- **Yol:** `konular/matematik-u1-k4.json` → `bolumler[id=b5].katmanlar.kitap[0]` ("Önce verilen ve istenen yazılır") ve `yazilida.ornek_cevap[0]`
- **Kitap karşılığı:** s.73, 22. Örnek ve s.61, 19. Örnek: "**Hipotez:** x tek doğal sayıdır. **Hüküm:** x² tek sayıdır. **İspat:** …"
- **Öneri:** `kitap[0]` şöyle olsun: "… Kitap önce **hipotez**i (verilen) ve **hüküm**ü (istenen) yazar, sonra ispatı yapar." Yazılı örnek cevabına da "Hipotez: … Hüküm: …" etiketlerini ekle.

#### D2-16 · KÜÇÜK · k3 flashcard tek gerekçe veriyor
- **Yol:** `konular/matematik-u1-k3.json` → `flashcard[4].arka` ("Bölmede hiçbiri kapalı değil, çünkü 0'a bölme tanımsızdır.")
- **Durum:**
  - ℤ için asıl karşıt örnek 1 ÷ 2'dir (kartın b4 bölümü de böyle anlatıyor).
  - Sıfıra bölme gerekçesi kitapta yazmıyor (pdf_teyit).
  - Flashcard bunu tek neden gibi sunuyor.
- **Öneri:** "Bölmede hiçbiri kapalı değil: 1 ÷ 2 ∉ ℤ, üstelik 0'a bölme tanımsızdır."

#### D2-17 · KÜÇÜK · k1 s006: rubrikte 0 puanlı "genel not" maddesi
- **Yol:** `sorular/matematik-u1-k1.json` → `sorular[id=…-s006].rubrik[0]` (`"puan": 0`)
- **Durum:** Puan toplamı doğru (15), ama panel bu notu 0 puanlık bir ölçüt gibi gösterebilir.
- **Öneri:** Notu rubrik dışına al (ör. `cevap` ya da ayrı bir `rubrik_notu` alanı). Şema dışı alan istenmiyorsa olduğu gibi bırakılabilir.

---

## 4. DOĞRULA durumu

| Dosya → yol | Madde | Durum |
|---|---|---|
| k1 kart `dogrula[0]` | x^(m/n) yazımının panelde okunurluğu ve öğretmenin kabulü | **AÇIK** (öğretmen; panel testi) |
| k3 kart `dogrula[0]` | ℤ, ℚ, ℝ, ℚ′ tanımları 1.3'te yok | **KISMEN KAPANABİLİR.** Kitap s.39 ℤ'yi listeleme yöntemiyle veriyor. s.41 "ℝ; ℕ, ℤ, ℚ ve ℚ′ kümelerini kapsayan en geniş kümedir" diyor, ℚ′ sembolü s.40-41'de. Açık kalan tek nokta ℚ'nun a/b (b ≠ 0) tanımı (önceki sınıf bilgisi). Madde buna göre daraltılsın |
| k3 kart `dogrula[1]` | 2025-26 ortak sınavında yalnız karşıt örnek kalıbı görüldü; b1–b4 kalıpları türetme | **AÇIK** (bilgi notu; 1D2Y tablosu gelince gözden geçirilir) |
| k3 `s011.dogrula[0]` | b) şıkkında 0'a bölme cevabının puanlanması | **AÇIK** (öğretmen) |
| k3 `s012.dogrula[0]` | a) şıkkında 0'a bölme cevabının puanlanması | **AÇIK** (öğretmen). s011 ile tek satırda birleştirilebilir |
| k4 kart `dogrula[0]` | "birim" / "etkisiz" eleman adı | **KAPANABİLİR.** İki ad da kitapta var (s.69, s.71 "etkisiz eleman"; s.74 "birim eleman"). Kart ikisini birlikte veriyor; öğretmen hangisini kullanırsa kullansın kart doğru |
| k4 kart `dogrula[1]` | "Çarpanlarına ayırma" kitapta başlık değil | **KAPANABİLİR.** Program s0048'de var; kart kullanımı ortak çarpan ve üç özdeşlikle sınırlı, kapsam içinde. Bir kaynak notu yeterli |
| (silinmiş) rubrik dağılımları, 12 açık uçlu soru | Puan dağılımı öneri | **AÇIK.** `docs/dogrula.md`'ye tek satır (D2-13) |
| k1, k2 sorularındaki eski `dogrula` maddeleri | Tur 1'de kapanabilir listesindeydi | **KAPANDI** (alanlar boş; dayanakları tur 1 raporunda) |

`docs/dogrula.md`'ye eklenmesi gerekenler (ana ajan yazar):
1. k1: x^(m/n) okunurluğu ve öğretmen kabulü.
2. Ünite 1 rubrik puan dağılımları: k1 s006, s018, s023; k2 s012, s013; k3 s008, s010, s011, s012; k4 s007, s011, s015.
3. k3 s011/s012: 0'a bölme karşıt örneğinin puanlanması.
4. k3: ℚ'nun a/b tanımının ünite kitabında açıkça yer almaması (daraltılmış madde).

## Kontrol edilemeyenler
- Kitap metnindeki bozuk semboller yalnızca pdf_teyit ve okunabilir metinle karşılaştırıldı. Sayfa görseline yeniden bakılmadı.
- Panelin `hata_turu` istatistiğini nasıl topladığı kodda kontrol edilmedi. ÖNEMLİ derecesi görevdeki tanıma (özgül etiket geri gelmeli) dayanıyor.

KARAR: DÜZELTİLMELİ (KRİTİK 0, ÖNEMLİ 11, KÜÇÜK 6)
