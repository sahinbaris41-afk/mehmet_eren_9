# Doğruluk denetimi · Matematik Ünite 1 · k1–k4 · Tur 3 (son tur)

- Tarih: 2026-10-27 · Denetçi: dogruluk-denetcisi (salt okur; içerik dosyalarına dokunulmadı)
- Kapsam (dar): D2-01…D2-17 izleme + pedagoji tur 2 (P2) düzeltmeleriyle değişen içerik + `hata_turu` sözlük kontrolü. Değişmeyen içerik yeniden çözülmedi.
- Dayanak: `dogruluk_matematik_u1_tur2.md`, `pedagoji_matematik_u1_tur2.md`, `pdf_teyit_u1.md`, kitap s0068 (önerme tanımı), `soru-yazim-kurallari/SKILL.md` sözlüğü, `docs/dogrula.md`.

## Özet

| Düzey | Sayı |
|---|---|
| KRİTİK | 0 |
| ÖNEMLİ | 0 |
| KÜÇÜK | 2 (D3-01, D3-02) |

- Tur 2'nin 11 ÖNEMLİ bulgusunun 11'i giderildi.
- Değişen içeriğin hepsi bağımsız çözüldü. Cevap, şık, tanım ve matematik hatası yok.
- Sorulardaki ve kartlardaki bütün `hata_turu` değerleri sözlükte var.

---

## 1. D2 izleme tablosu

| id | Düzey | Durum | Kanıt |
|---|---|---|---|
| D2-01 | ÖNEMLİ | GİDERİLDİ | k3 s001: seçenekler `eksi_sayi_kume_disi`, `kume_kapsama`, `kume_kapsama`; üst dizi `["eksi_sayi_kume_disi","kume_kapsama"]` |
| D2-02 | ÖNEMLİ | GİDERİLDİ | k3 s003 `["eksi_sayi_kume_disi"]` |
| D2-03 | ÖNEMLİ | GİDERİLDİ | k3 s005 `["esitsizlik_yonu"]` |
| D2-04 | ÖNEMLİ | GİDERİLDİ | k3 s007: [0] ve [1] `tek_ornekle_ispat`, [3] `irrasyonel_carpim`; üst dizi ikisini içeriyor |
| D2-05 | ÖNEMLİ | GİDERİLDİ | k3 s010 `["irrasyonel_carpim","uyan_ornek_vermek","eksik_adim"]` |
| D2-06 | ÖNEMLİ | GİDERİLDİ | k3 s011 `["tek_ornekle_ispat","uyan_ornek_vermek","eksik_adim"]` |
| D2-07 | ÖNEMLİ | GİDERİLDİ | k3 s012 `["uyan_ornek_vermek","eksi_sayi_kume_disi","eksik_adim"]` |
| D2-08 | ÖNEMLİ | GİDERİLDİ | k3 kart `sik_hatalar`: uyan_ornek_vermek, tek_ornekle_ispat, eksi_sayi_kume_disi, irrasyonel_carpim, eksik_adim |
| D2-09 | ÖNEMLİ | GİDERİLDİ | k1 s009 `["tek_ornekle_ispat"]` |
| D2-10 | ÖNEMLİ | GİDERİLDİ | k2 s006 `secenekler[2]` = `esitsizlik_yonu`; üst dizi `["aralik_uc","sonsuz_koseli","esitsizlik_yonu"]` |
| D2-11 | ÖNEMLİ | GİDERİLDİ | k4 s009 `secenekler[1]` = `kare_dagitma`, üst dizi `["kare_dagitma","isaret_hatasi","islem_hatasi"]`; s010 `["kare_dagitma"]`. k4 s012 ve k1 s019'daki `kare_farki_karistirma` doğru yerde kaldı |
| D2-12 | KÜÇÜK | GİDERİLDİ | `docs/dogrula.md` "Matematik Ünite 1" bölümü, #15–#20 |
| D2-13 | KÜÇÜK | GİDERİLDİ | `docs/dogrula.md` #15 rubrik satırı (sayı hatası için bkz. D3-01) |
| D2-14 | KÜÇÜK | GİDERİLDİ | 8 dosyanın 8'i de `surum: 3` |
| D2-15 | KÜÇÜK | GİDERİLMEDİ (yayın engeli değil) | k4 `b5.kitap[0]` hâlâ "Önce verilen ve istenen yazılır". Not: Kartlar artık **hüküm** sözcüğünü "cümlenin verdiği karar" anlamında tanımlıyor. Kitabın ispat kalıbındaki "Hüküm:" etiketi (s.61, s.73) ispatlanacak sonucu gösteriyor. Etiket eklenirse "Hüküm (ispatlanacak sonuç)" diye açıklanmalı, yoksa iki kullanım karışır |
| D2-16 | KÜÇÜK | GİDERİLDİ | k3 `flashcard[4].arka`: "…ℤ'de 1 ÷ 2 ∉ ℤ, ℚ ve ℝ'de 0'a bölünemez." Matematik doğru. Kitapla uyumlu (s.65: bölmede hiçbiri kapalı değil) |
| D2-17 | KÜÇÜK | GİDERİLDİ | k1 s006: not `puanlama_notu` alanına taşındı. Rubrik 3+3+3+3+3 = 15, 0 puanlı madde yok. `tools/` altında alan beyaz listesi bulunmadı. `python tools/dogrula.py`'nin bu şema dışı alanı kabul ettiğini ana ajan çalıştırarak teyit etmeli (denetçide Bash yok) |

---

## 2. Değişen içeriğin bağımsız doğrulaması

### k4 s001 (yeni doğru şık): "Gölcük'ün sahili çok güzeldir."
- **Kitap tanımı (s.68):** "Kesin doğru ya da kesin yanlış bir hüküm bildiren ifadelere önerme denir."
- **Kök:** "Aşağıdakilerden hangisi bir önerme **değildir**?"
- **Şıkların tek tek çözümü:**

| Şık | Kesin mi? | Önerme mi? |
|---|---|---|
| "Gölcük'ün sahili çok güzeldir." | Hayır. "Çok güzel" kişiden kişiye değişen bir beğeni yargısı; herkesin kabul edeceği bir doğru/yanlış kararı yok | **Değil** |
| "2 + 2 = 5" | Kesin yanlış | Önerme |
| "(−1)² = 1" | Kesin doğru | Önerme |
| "Gölcük, Kocaeli'nin bir ilçesidir." | Kesin doğru (Kocaeli'nin ilçesi) | Önerme |

- **İkinci savunulabilir şık:** yok.
- **Tutarlılık:**
  - `cevap`, `cozum_adimlari[3]` ("kişiden kişiye değişen bir görüştür; kesin karar verilemez") ve bağlam ("kesin karar verilemeyen cümle") birbiriyle tutarlı.
  - Kart b1 örneğiyle ("Gölcük sahili en güzel sahildir… kişiye göre değişir") de tutarlı.
- **Karar:** DOĞRU.
- Bağlamın cevabı ele vermesi için bkz. D3-02.

### k4 s004 kökü
- **Kök:** "Çıkarmanın değişme özelliği vardır." önermesinin ∀a, b ∈ ℝ, a − b = b − a biçiminde yazılıp doğru mu yanlış mı olduğu soruluyor.
- **Çözüm:** a = 5, b = 3 → 2 ≠ −2. Tek karşıt örnek ∀ önermesini yanlış yapar. Cevap `false`.
- **Kitap:** s.74 (çıkarmada değişme yok).
- **İpuçları ve `hata_turu`:** ipuçları doğru; `hata_turu` `cikarma_degisme`.
- **Karar:** DOĞRU.

### Önerme / hüküm tanımları (P2-04)
- **Önerme:** k1 `b4.terimler`, k3 terimler ve k4 `b1.terimler` ile k4 `flashcard[0]` artık aynı: "Kesin doğru ya da kesin yanlış hüküm bildiren ifade." Kitap s.68 ile özdeş. Tek kısa tanım cümlesi olduğu için telif sorunu yok.
- **Hüküm:** "Bir cümlenin bir şey hakkında verdiği karar."
  - Kitap hükmü ayrıca tanımlamıyor; "hüküm bildirir" diye kullanıyor (s.68).
  - Sözlük anlamına (yargı, karar) uygun.
  - Karar: DOĞRU (kitapta karşılığı olmayan, kabul edilebilir açıklama).
- **Değil:** k4 `b1.basit[3]` ve terim: "doğruysa yanlış, yanlışsa doğru yapan yeni önerme; olumsuzu da denir." Kitap s.68 ("hükmü değiştirilerek elde edilen önerme… değili (olumsuzu)") ile uyumlu.
- **İşaret değilleri:** b1'deki > → ≤, < → ≥, = → ≠ Tablo 1.1 ile uyumlu.
- **k3 örneği:** "'Her gün rüzgâr eser' bir önermedir." Doğru; kesin yanlış bir ∀ önermesi, karşıt örnekle çürütülüyor.

### k4 b8 (x − 3)² adımları (P2-06)

| Adım | Kendi çözümüm | Karar |
|---|---|---|
| 6x = x² + 9 → x² − 6x + 9 = 0 | doğru taşıma | DOĞRU |
| x² = x · x, 9 = 3 · 3, 6x = 2 · x · 3 → a = x, b = 3 | (a − b)² = a² − 2ab + b² ile eşleşiyor | DOĞRU |
| (x − 3)(x − 3) = 0 → x = 3 | — | DOĞRU |
| Kontrol: mavi 18, sarı 9, fark 9 | 6 · 3 = 18, 3² = 9 | DOĞRU |
| kitap[0] a · b = 0 ⇔ a = 0 ∨ b = 0; kitap[1] iki yön ayrı | s.78 | DOĞRU |
| Yazılı: 16x = 2x² + 32 → 2(x² − 8x + 16) = 0 → (x − 4)² → x = 4 | 64 = 2 · 16 + 32 ✓ | DOĞRU |
| Kontroller: 5 / −1; 0 / 7; 4 | — | DOĞRU |

### k1 b6 küp kök paragrafı (P2-05)
- ∛16 = ∛(8 · 2) = 2∛2 doğru. Tam küp listesi 8, 27, 64, 125 doğru.
- Yeni `terimler`:
  - "tam küp": "kendisiyle üç kez çarpımı". Anlamı doğru; 2 · 2 · 2.
  - "kök dışına çıkarma": tanım doğru.
- Yazılı örnek (∛250 = 5∛2, ∛16 = 2∛2, parça ∛2 × 2∛2, çevre 6∛2 m) ile uyumlu.
- **Karar:** DOĞRU.

### k2 b6 Q3 (P2-08, yeni)
- "|x − 7| ≤ 3: orta nokta 7, uzaklık 3" doğru. Kartın kitap[0] kalıbı (|x − c| ≤ d) ile uyumlu.
- İpuçları doğru.
- **Karar:** DOĞRU.

### 3. ipuçları (P2-03, P2-14): hepsi tarandı, matematik kontrolü

| Yer | 3. ipucu | Karar |
|---|---|---|
| k3 s001 | Dört kümede −8 var mı | DOĞRU, cevabı söylemiyor |
| k3 s005 | Emre köprüsü | DOĞRU |
| k3 s009 | 4,6 ≤ 4,9 ve +0,2 | Bağlamla tutarlı (Can 4,6, Emre 4,9) |
| k4 s001 | "Hangisine herkes aynı cevabı vermez?" | DOĞRU |
| k4 s002 | Önce > işaretinin değilini yaz, sonra a = 5'e bak | DOĞRU |
| k4 b5 Q2 | 2·1, 2·2, 2·3 → sabit çarpan | DOĞRU |
| k4 b3 Q1–Q3 | Kontrol soruları | DOĞRU |
| k4 b8 Q1–Q3 | Kontrol soruları | DOĞRU |
| k1 s004 | 45 000 → 4,5: 4 basamak | DOĞRU |
| k1 s005 | 0,3 · 10⁴ = 3 · 10³ | DOĞRU |
| k1 s006 | 0,24 · 10⁶ = 24 · 10⁴; ipucu 2 "virgül sağa → üs 1 azalır" | DOĞRU |
| k1 s010 | 8⁴ = 2¹² | DOĞRU |
| k1 s011 | 4⁶ = 2¹² = 2² · 2¹⁰ | DOĞRU |
| k1 s013 | 27^(2/3) = ∛(27²) | DOĞRU |
| k1 s016 | √12 = 2√3 | DOĞRU |
| k1 s018 | √108 = 6√3 | DOĞRU |
| k1 s022 | 6,3² = 39,69 < 40 < 40,96 = 6,4² | DOĞRU |
| k1 s023 | (√6)² − (√2)² | DOĞRU |
| k1 b7 Q1–Q3 | √3 · √3 = 3 | DOĞRU |
| k2 s001 | [9, … | DOĞRU |
| k2 s005 | 2, 4 ∉ B; 6 ∈ B; cevap {6, 7, 10} | DOĞRU |
| k2 s007 | 11 ∈ B → [7, 11) | DOĞRU |
| k2 s008 | (14 + 22)/2 = 18 | DOĞRU |
| k2 s010 | −2 ∈ A → A′'de açık uç | DOĞRU |
| k2 s011 | 40 < x | DOĞRU |
| k2 s013 | 250 | DOĞRU |
| k2 s014 | 105 / 135 | DOĞRU |
| k4 s009 | (2x)² = 4x² | DOĞRU |
| k4 s011 | x · 2 = 2x | DOĞRU |
| k4 s013 | (√6)² = 6 | DOĞRU |
| k4 s014 | x ± 7 | DOĞRU |
| k4 s015 | Denklem kurma | DOĞRU |

İpuçlarında yanlış bilgi ya da soruyla çelişen sayı yok.

---

## 3. `hata_turu` sözlük kontrolü

Bütün `secenekler[].hata_turu` değerleri, üst `hata_turu` dizileri ve kart `sik_hatalar` değerleri (k1–k4 konular ve sorular) tarandı. Hepsi `soru-yazim-kurallari/SKILL.md` sözlüğünde var:

> islem_hatasi, isaret_hatasi, us_carpma, us_eksik, taban_carpma, sifir_us, kok_toplama, aralik_uc, sonsuz_koseli, kesisim_birlesim, fark_ucu, mutlak_tam_uzunluk, tamsayi_sanma, negatif_us, farkli_kuvvet_toplama, bilimsel_katsayi, parantez_isaret, esit_derece_unutma, us_kural_karisikligi, taban_donusum, kesirli_us_ters, kume_kapsama, uyan_ornek_vermek, tek_ornekle_ispat, irrasyonel_carpim, eksi_sayi_kume_disi, esitsizlik_yonu, kare_dagitma, fark_karesi_isaret, kare_farki_karistirma, cikarma_degisme, niceleyici_degil, degil_isaret, carpim_sifir_isaret, kavram_karisikligi, okuma_hatasi, eksik_adim

Eski ad (`kare_acilim`, `parantez_karisikligi`, `sembol_eksik`) kalmadı. Seçenek etiketleri üst dizilerde de var (kontrol edilen D2 soruları).

---

## 4. Yeni bulgular

### D3-01 · KÜÇÜK · `docs/dogrula.md` #15: rubrik soru sayısı yanlış
- **Yol:** `docs/dogrula.md`, satır #15: "Açık uçlu soruların rubrik puan dağılımı (12 soru: k1 s006, s018, s023; k2 s011–s014; k3 s008, s010–s012; k4 s007, s011, s015)"
- **Durum:**
  - Listede 3 + 4 + 4 + 3 = **14** soru var.
  - Bankadaki `tip: "acik"` sayısı da 14: k2 s011, s012, s013, s014 dördü de açık uçlu.
  - Liste doğru; "12" yanlış. Hata tur 2 raporumdan geliyor (k2 s011 ve s014 sayılmamıştı).
- **Öneri:** "12 soru" → "14 soru". (Denetçi `docs/` dosyasına yazamaz; ana ajan düzeltir.)

### D3-02 · KÜÇÜK · k4 s001: bağlam cevabın ölçütünü veriyor
- **Yol:** `sorular/matematik-u1-k4.json` → `sorular[id=…-s001].baglam`: "Öğretmen, doğru mu yanlış mı olduğuna kesin karar verilemeyen cümleyi soruyor."
- **Durum:**
  - Bilgi doğru, ama önerme tanımını bilmeyen öğrenci de bağlamı okuyarak doğru şıkkı bulabilir. Soru bu hâliyle "önerme" kavramını değil okumayı ölçüyor (SKILL kural 1 ve 4).
  - Cevap anahtarını etkilemez.
- **Öneri:** Bağlamı "Sınıfta dört cümle tahtaya yazılmış." olarak kısalt. Ölçüt zaten ipucu 2'de var.

---

## 5. Açık DOĞRULA listesi (`docs/dogrula.md`'de kayıtlı; öğretmen teyidi bekliyor)

| # | Madde | Durum |
|---|---|---|
| 15 | Ünite 1 açık uçlu rubrik puan dağılımları (14 soru; D3-01) | AÇIK |
| 16 | k1 s023: 1/√2 yazımına kısmi puan | AÇIK |
| 17 | x^(m/n) yazımının panelde okunurluğu ve yazılıda kabulü | AÇIK |
| 18 | ℚ'nun a/b (b ≠ 0) tanımı ünite sayfalarında açıkça yok | AÇIK |
| 19 | 9.1.3 yazılı kalıpları (ortak sınavda yalnız karşıt örnek görüldü) | AÇIK |
| 20 | k3 s011/s012: 0'a bölme karşıt örneğinin puanlanması | AÇIK |

Soru ve kart dosyalarındaki `dogrula` alanlarının hepsi boş. Açık maddeler `docs/dogrula.md`'de tutuluyor; bu tutarlı.

## Kontrol edilemeyenler
- `python tools/dogrula.py` çalıştırılamadı (denetçide Bash yok). `puanlama_notu` şema dışı alanı ve `surum` değişiklikleri için ana ajan çalıştırmalı.
- 3. ipuçları yalnız matematiksel doğruluk açısından tarandı. "Cevabı ele veriyor mu" sorusu pedagoji denetçisinin kapsamında.

KARAR: TEMİZ (KRİTİK 0, ÖNEMLİ 0, KÜÇÜK 2: D3-01, D3-02; yayın engeli yok)
