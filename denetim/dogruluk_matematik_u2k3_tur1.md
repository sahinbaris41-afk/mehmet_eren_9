# Doğruluk denetimi · matematik-u2-k3 (9.2.3 Doğrusal fonksiyonlarla ifade edilen denklem ve eşitsizlikler içeren problemler) · tur 1

Tarih: 2026-10-30 · Denetçi: dogruluk-denetcisi (salt okur, dosyalarda düzeltme yapılmadı)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u2-k3.json` (surum 1): 10 bölüm, kontrol soruları, 10 flashcard, 11 sik_hatalar, `dogrula` dizisi.
- Soru bankası `dersler/matematik/sorular/matematik-u2-k3.json` (surum 1): s001–s018.
- `docs/dogrula.md` #13, #23, #29, #30, #31, #32.

Karşılaştırılan kaynaklar:
- Kitap (`matematik-9sinif-ders-kitabi-1kitap_…`): s0136, s0138–s0142, s0145–s0146, s0148, s0150–s0159, s0163, s0165–s0166 okundu. Parantez glifleri için #29'daki PDF teyidi esas alındı.
- Program (`matematik-dersi_…`): s0050 satır 3–12, s0054 satır 20–50.
- `.claude/skills/soru-yazim-kurallari/SKILL.md` hata_turu sözlüğü (satır 83–137).
- `dersler/matematik/harita.json` (matematik-u2-k3).

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | — |
| ÖNEMLİ | 2 | D1-01, D1-02 |
| KÜÇÜK | 9 | D1-03 … D1-11 |

- **Cevap anahtarı:** 18 sorunun hepsini bağımsız çözdüm. Hepsi doğru. Çoktan seçmelilerin hiçbirinde ikinci savunulabilir doğru yok. Çeldiricilerin değerleri birbirinden farklı ve her biri, adı verilen hatalı yol gerçekten uygulandığında çıkıyor.
- **Kontrol adımı:** 18 sorunun hepsinde "Kontrol (…)" adımı var ve bu adımdaki hesaplar doğru.
- **Rubrik toplamları:** s016 2+2+2+2+2 = 10, s017 2+2+2+2+2+2+3 = 15, s018 2+2+2+2+2+2+3 = 15. Üçü de `puan` alanıyla tutuyor. Kontrol adımı puanları s016'da 2, s017'de 3, s018'de 3; bunlar #32'deki değerlerle aynı.
- **Kart matematiği:** Bütün örnekleri, tabloları, kesim noktalarını, aralıkları ve yazılıda çözümlerini elle yeniden hesapladım; hepsi tuttu.
- **#31 (ayırıcı):** Kartta ve bankada aralık içinde ";" yok. Grep deseni `[\[(][-−0-9,∞ ]*;[-−0-9,∞ ]*[\])]` hiç eşleşme döndürmedi. Ondalık uçlar kitap standardında, virgül + boşlukla yazılmış: [0, 38,4), [59,95, 60,05], [119,5, 120,5], [249,6, 250,4], [348,5, 351,5], [39,8, 40,2].
- **Yazım ve yasak terimler:** Şapkasız "dahil" yok. "tepe noktası" ve "simetri ekseni" geçmiyor.
- **Müfredat:** Mutlak değerli problemler programın 9.2.3 açıklamasında açıkça sayılıyor (program s.54 satır 24–25: "|f(x)| = g(x), |f(x)| ≥ g(x), |f(x)| ≤ g(x), |f(x)| < 0, |f(x)| > 0, |f(x)| = 0, |f(x)| < k, |f(x)| > k, |f(x)| = k (k∈ℝ) gibi"). Kitap da bunları 2.3 bölümünde işliyor (s.151–158). İleri sınıf konusu yok.
- **Telif:** Kitaptan 1–2 cümleden uzun birebir alıntı yok.
- **Kurgusal bağlamlar:** Bağlamlarda gerçek kurum adı, gerçek fiyat ya da istatistik iddiası yok. Kurgusal sayılar "(sayılar kurgusaldır)" ile işaretlenmiş. Tek istisna s004'tür ve sayılar kitaptandır (D1-07).

KARAR: **DÜZELTİLMELİ** (KRİTİK yok, yayın engeli yok. Yine de iki ÖNEMLİ bulgu düzeltilmeli.)

---

## 1. Kartın bağımsız doğrulaması

| Bölüm | Kontrol | Karar |
|---|---|---|
| b1 | f(10) = 2·10 + 150 = 170; deniz taksisi 15·6 + 40 = 130. Kitap s.136 satır 8–17: "120 litre su … f(t) = 120 – 0,8t". s.140 satır 4, 12: "22 cm … ayda 6 cm", "f(x) = 22 + 6x". s.145 satır 6: "g(x) = 57 000 + 1600x". Kontrol soruları: 50x + 300; f(0) = 150; azalıyor | DOĞRU |
| b2 | 600 − 30x = 360 → x = 8; kontrol sorusunda 600 − 960 = −360; tel sorusu 900 − 45x = 450 → x = 10. s.140 satır 13–15: "6x - 18 = 0 … x = 3". s.139 satır 6: mx + n = 0'ın çözüm kümesi {−n/m} | DOĞRU |
| b3 | Feribot sorusu: f(4) = 118 ≤ 120, f(5) = 143 > 120. Kitap s.159 satır 36–40 (asansör 720 kg), s.164 satır 35–37 ("320 miligramdan fazla"), s.165 soru 12 (tatil bütçesi) | DOĞRU |
| b4 | 120 − 0,8t ≥ 40 → t ≤ 100; t = 50 → 80, t = 150 → 0. Tır yakıtı: 600 − 30x ≥ 150 → x ≤ 15, f(16) = 120. Kontrol soruları x ≥ 5, x > −5. Tablo 2.2'de m < 0 için aralık ters tarafa geçiyor (#29 PDF teyidi) | DOĞRU |
| b5 | 20 + 4x < 60 → [0, 10); ≤ olsaydı [0, 10]. Tekne sorusu: 80 − 6x ≥ 20 → [0, 10], f(11) = 14. s.140 [0, 5); s.148 satır 19–24: 10,2 + 2x < 87 → x < 38,4 → [0, 38,4); s.150 satır 18: "en az 251" | DOĞRU |
| b6 | 2x − 6: sıfır 3, f(0) = −6, f(5) = 4 → [0, 3). Yazılıda: −3x + 12 ≥ 0 → (−∞, 4], f(1) = 9, f(6) = −6. s.140–141 8. örnek "(-∞, 2)"; program s.54 satır 34–38 | DOĞRU (ifade D1-04, bağlam D1-08) |
| b7 | 2x + 100 = 3x + 40 → (60, 220), B(60) = 220. Yazılıda: 4x + 1200 = 6x + 800 → (200, 2000). s.145–146: (10, 73 000), 36 000 = 3600x. s.150: 300 000 = 1200x → 250 | DOĞRU |
| b8 | 6x + 900 = 10x + 300 → x = 150, değer 1800. x = 100 → 1500 / 1300; x = 200 → 2100 / 2300. Yazılıda: A(300) = 2400 < B(300) = 2600. s.145: g(15) = 81 000, e(15) = 99 000. s.141 satır 33 (3. Problem, depolar) | DOĞRU |
| b9 | \|x − 120\| ≤ 0,5 → [119,5, 120,5]; cıvata → [39,8, 40,2]. s.153 satır 21 "60 mm ± 0,05 mm"; s.155 satır 40–43 kesim noktaları (60.05, 0.05) ve (59.95, 0.05); s.152 satır 40–42 "en çok 50 gram … 1350 gram"; s.163 satır 30–34 "180 ml … en fazla 5 ml" | DOĞRU (ifade D1-04) |
| b10 | \|x − 2\| = 2x − 1 → −1 atılır, {1}; \|x − 4\| = x − 2 → {3}. s.158 satır 4–8: −2/5 atılır, x = 4, kenar 11 cm; s.158 satır 30 "(4, 11)"; s.158 satır 36–37 kök-aralık kontrolü uyarısı | DOĞRU |
| Flashcard 1–10 | Matematik olarak hepsi doğru | DOĞRU (yazım D1-10) |
| sik_hatalar | 11 maddenin hepsi doğru; `kesisim_taraf` tanımı sözlükle aynı | DOĞRU |

## 2. Soru bankası (bağımsız çözüm)

| Soru | Benim çözümüm | Anahtar | Çeldiriciler (hatalı yol → değer) | Karar |
|---|---|---|---|---|
| s001 | 25x + 60 | ✓ | 60x + 25 (yer değiştirme), 85x (sabiti çarpma), 25x − 60 (işaret) | DOĞRU |
| s002 | −0,8 = dakikadaki değişim → sızan miktar | ✓ | başlangıç (120), bitiş anı (150 dk), eklenen (işaret) | DOĞRU |
| s003 | −15x = −150 → 10 | 10 | — | DOĞRU |
| s004 | 30x + 80 ≤ 720 | ✓ | <, ≥, 80x + 30: hepsi yanlış | DOĞRU (bağlam D1-07) |
| s005 | −5x ≥ −25 → x ≤ 5 | ✓ | x ≥ 5 (yön), x ≤ −11 (15 + 40 = 55 → −5x ≥ 55), x < 5 (uç) | DOĞRU |
| s006 | 3x < 27 → [0, 9) | ✓ | [0, 9], [9, ∞), (−∞, 9) | DOĞRU |
| s007 | x < 4 → ifade yanlış | false | — | DOĞRU |
| s008 | 5x − 400 < 0 → x < 80 → 79 | 79 | 80 (k = 0), 81 (k > 0 tarafı), 395 (400 − 5) | DOĞRU |
| s009 | 10x = 120 → x = 12 → 340 | 340 | 12 (x), 460 (160 + 40 → x = 20 → 460), 205 (40x = 120 → x = 3 → 205) | DOĞRU |
| s010 | 200x > 1200 → x > 6; 6 saatte ikisi de 3300 | ✓ | kısa (kesisim_taraf), ≥ 6 (uç), 3300 (y'yi okuma) | DOĞRU |
| s011 | −6x < −30 → x > 5 | (5, ∞) | (−∞, 5), [5, ∞), (30, ∞) | DOĞRU (açıklama D1-06) |
| s012 | merkez 250, d = 0,4 → ≤ | ✓ | 0,8 (tam uzunluk), <, ≥ | DOĞRU |
| s013 | 60 + 0,05 = 60,05 | 60,05 | — | DOĞRU |
| s014 | ∅ → ifade yanlış | false | — | DOĞRU |
| s015 | x ≥ 3: x = 6 ✓; x < 3: x = 4 ✗ → {6} | {6} | {4, 6} (şart), {2, 6} (−x − 3 → x = 2), {3} | DOĞRU (etiket D1-09) |
| s016 | f = 480 − 32x; x ≤ 12 → [0, 12]; f(12) = 96, f(13) = 64 | ✓ | rubrik 10 | DOĞRU (ifade D1-11) |
| s017 | x = 200, 6000 TL; x > 200 (en az 201); 100 → 4200 / 3600, 300 → 7800 / 8400 | ✓ | rubrik 15 | DOĞRU (puanlama notu D1-02) |
| s018 | [348,5, 351,5]; h(348,2) = 1,8 → ret, h(351,5) = 1,5 → kabul | ✓ | rubrik 15 | DOĞRU (ifade D1-04, etiket D1-09) |

### Bağlamlı sorular, satır satır
- **s008 (simit büfesi):** Kâr k(x) = 5x − 400 olarak doğru modellenmiş. "Zarar" k(x) < 0 demek: x < 80. Simit sayısı tam sayı, bu yüzden 79. k(79) = −5 ve k(80) = 0 doğru. 395 çeldiricisi (400 − 5) gerçekten bir işlem hatasından çıkıyor. Bağlam "kurgusal" diye işaretlenmiş.
- **s010 (vinç):** A(6) = 1800 + 1500 = 3300 ve B(6) = 3000 + 300 = 3300. Tablo değerleri: x = 4 için 2700 / 2300, x = 8 için 3900 / 4300. Hepsi doğru. Çeldirici açıklaması (6'dan önce B ucuz, sonra B'nin doğrusu üstte) doğru.
- **s016 (tır yakıtı):** Satır 1–8 doğru. −32'ye bölerken yön çevriliyor. [0, 12] aralığında 12 dâhil. Kontrol değerleri 96 ve 64 doğru. Puanlama notu tutarlı.
- **s017 (nakliye):** Satır 1–13 doğru. Kesim noktası (200, 6000). x > 200. Tablo kontrolü doğru. Puanlama notundaki etiket gerekçesi ters (D1-02).
- **s018 (kaynak çubuğu):** Satır 1–11 doğru. Parçalı çözümde x ≥ 350 için x ≤ 351,5. x < 350 için −x ≤ −348,5, buradan x ≥ 348,5. c şıkkı doğru. Kesim noktaları (348,5, 1,5) ve (351,5, 1,5).

### hata_turu ve `kesisim_taraf` eşlemesi
Sözlükteki tanım (SKILL.md satır 130): "iki doğrunun kesişiminden sonra hangi doğrunun üstte olduğunu ters okumak; kesişimin bir yanındaki üst/alt sırasını öbür yana da taşımak".
- **s010 "6 saatten kısa":** Tanımın ilk yarısına (ters okuma) uyuyor. Açıklama doğru.
- **s011 "(−∞, 5)":** Tanımın ilk yarısına uyuyor. Açıklama doğru ama dolaylı (D1-06).
- **s017 puanlama notu:** "'x < 200' yazan, yani kesişimden önceki sırayı kesişimden sonraya taşıyan" ifadesi mantıksal olarak ters. Kesişimden önceki sıra "B ucuz"dur; bu sıra sağa taşınırsa "A hiçbir zaman ucuz değil" sonucu çıkar, "x < 200" çıkmaz. "x < 200" yazan öğrenci, sağdaki sırayı ("A ucuz") sola taşımış ya da hangi doğrunun altta olduğunu ters okumuştur (D1-02).
- **Öteki etiketler:** Hepsi sözlükte var. Anlam olarak uyumlular. İki zayıf eşleme var (D1-09).

---

## 3. Bulgular

### D1-01 · ÖNEMLİ · Kartın `dogrula` dizisi #29'u hâlâ "açık" gösteriyor
- **Yer:** `konular/matematik-u2-k3.json` → `dogrula[0]`.
- **İddia:** "DOĞRULA (docs/dogrula.md #29, açık): … PDF görseli bu oturumda açılamadı (pdftoppm yok); gösterim PDF'ten teyit edilmeli."
- **Gerçek durum:** `docs/dogrula.md` satır 59'da #29 "[x] 2026-10-30" olarak kapalı. Kayıtta "PyMuPDF görseli: s.139 Tablo 2.2 … s.140 [0, 5); s.148 [0, 38,4); s.154 [59,95, 60,05]" yazıyor.
- **Karar:** YANLIŞ (DOĞRULA durumu güncel değil).
- **Öneri:** Maddeyi DOĞRULA'sız bir bilgi nota çevir: "Bilgi notu: #29 kapalı (2026-10-30, PyMuPDF): Tablo 2.2, [0, 5), [0, 38,4), [59,95, 60,05] kitapla aynı."

### D1-02 · ÖNEMLİ · s017 puanlama notunda `kesisim_taraf` gerekçesi ters
- **Yer:** `sorular/matematik-u2-k3.json` → s017 `puanlama_notu`, üçüncü cümle.
- **İddia:** "'x < 200' yazan, yani kesişimden önceki sırayı kesişimden sonraya taşıyan öğrenci…"
- **Doğrusu:** x < 200 bölgesinde B ucuzdur (x = 100 için A = 4200, B = 3600). "A, x < 200'de ucuz" diyen öğrenci kesişimden **sonraki** sırayı (A ucuz) kesişimden **önceye** taşımıştır. Puan kararı (yorum puanı verilmez) doğru; yanlış olan yalnız gerekçedir. Öğretmene ya da öğrenciye gösterilirse yanlış hata adı öğretir.
- **Karar:** YANLIŞ (açıklama).
- **Öneri:** "'x < 200' yazan, yani hangi doğrunun altta olduğunu ters okuyup kesişimden sonraki sırayı (A ucuz) kesişimin soluna taşıyan öğrenci…"

### D1-03 · KÜÇÜK · Program kaynak alanlarında "|f(x)| ≤ k" programda birebir geçmiyor
- **Yer:** s012 ve s013 `kaynak.program`; kart `kaynak[1].sayfa`.
- **Program s.54 satır 24:** "|f(x)| ≤ g(x), … |f(x)| < k, |f(x)| > k, |f(x)| = k (k∈ℝ) gibi". "|f(x)| ≤ k" kitapta geçiyor (s.152 Uygulama 15 başlığı; s.157 satır 23).
- **Karar:** BELİRSİZ. Kapsamda sayılır, çünkü programda "gibi" deniyor ve g sabit olabilir.
- **Öneri:** "(program s.54: |f(x)| ≤ g(x), g sabit; kitap s.152)" diye yaz.

### D1-04 · KÜÇÜK · "üzerinde" sözcüğünün iki anlamı var ("üstünde" ve "üstüne değen")
- **Yer:** b6 `katmanlar.kitap[0]`: "g doğrusu x ekseninin üzerindedir (s.136)". b9 `basit[8]`. s018 `cevap`, `cozum_adimlari[10]` ve rubrik ç: "y = 1,5 doğrusunun altında ya da üzerinde".
- **Kitap s.136 satır 31–32:** "g doğrusunun x ekseni üzerinde olduğuna dikkat ediniz". Kastedilen, g'nin x ekseninin kendisi olmasıdır.
- **Sorun:** Bu konuda "üstte" sözcüğü "daha büyük" anlamında kullanılıyor (b8). "Altında ya da üzerinde" ifadesi "altında ya da üstünde" diye okunursa her x çözüm sanılır. Öğrenci profili uzun metinde kopuyor; bu belirsizlik onun için risk.
- **Öneri:** b6'da "g'nin grafiği x ekseninin kendisidir" yaz. b9 ve s018'de "doğrunun altında kaldığı ya da ona değdiği x'ler" yaz.

### D1-05 · KÜÇÜK · Kitabın cevap anahtarı karekodu #30'u kapatabilir
- **Yer:** kart `dogrula[1]`, `docs/dogrula.md` #30.
- **Kanıt:** Kitap s.7 satır 37'de ve s.202 satır 43'te "Cevap Anahtarları Karekodu" var. Tema sonu s.165 soru 11 ç'nin cevabı ("en az kaç kilometre") orada olabilir. A = 2000 + 3x, B = 1500 + 5x; kesim x = 250.
- **Öneri:** #30'un "Teyit kaynağı" sütununa "kitap cevap anahtarı karekodu (s.202), s.165 soru 11 ç" eklensin. Ayrıca #30'un "Nerede" sütununda yalnız kart b8 var. Oraya `sorular/matematik-u2-k3.json` s017 de eklensin.

### D1-06 · KÜÇÜK · s011 (−∞, 5) çeldiricisinin açıklaması dolaylı
- **Yer:** s011 `secenekler[1].aciklama`.
- **Sorun:** Açıklama doğru, ama öğrencinin seçtiği bölgede ne olduğunu söylemiyor.
- **Öneri:** "(−∞, 5)'te f üstte: x = 2'de f(2) = 36 > g(2) = 18. Orası f(x) > g(x) bölgesi; f'nin altta kaldığı yer kesişimin sağıdır."

### D1-07 · KÜÇÜK · s004 bağlamı kitabın alıştırmasından alınmış ama işaretlenmemiş
- **Yer:** s004 `baglam`.
- **Kitap s.159 satır 36–40:** "asansörün yük taşıma kapasitesi 720 kg … ortalama kütlesi 30 kg … yetişkinin kütlesi 80 kg". Sayılar kitaptakiyle aynı. Bağlamda "Kitaptaki" ya da "(sayılar kurgusaldır)" ibaresi yok; s002 ve s013 kitap bağlamlarını işaretliyor. Ayrıca s004'ün kontrol adımı (21 / 22) kitap alıştırmasının 6. sorusunun cevabını veriyor.
- **Öneri:** Bağlamı "Kitaptaki asansör alıştırmasında…" diye başlat. Ya da sayıları değiştirip kurgusal bağlam yap.

### D1-08 · KÜÇÜK · b6 dalgıç örneğinde x > 3 bölgesinin bağlamda anlamı yok
- **Yer:** b6 `basit[2]`: "f(5) = 4, artı".
- **Sorun:** Model yalnız [0, 3] için anlamlı. f(5) = 4, dalgıcın suyun 4 m üstünde olması demek. İşaret tablosu için matematiksel olarak doğru, ama bağlamla çelişiyor.
- **Öneri:** "x = 5 dene (yalnız işaret için; model 3. dakikada biter)" diye not düş. Ya da işaret tablosunu bağlamsız f(x) = 2x − 6 için yap.

### D1-09 · KÜÇÜK · İki hata_turu etiketi zayıf eşlenmiş
- **s015 ve kart sik_hatalar `sifir_aralik_kontrol`:** Sözlükte (satır 126) "bulunan **sıfırın** kendi satırının aralığına" deniyor. s015'te kontrol edilen şey sıfır değil, denklemin kökü. Anlam yakın.
  - **Öneri:** Sözlük tanımını "sıfırın ya da kökün" diye genişlet (SKILL.md, ana ajan).
- **s018 `parcali_isaret`:** Bu etiket "x < 0 iken −x'i eksi sanmak" demek. Soruda bu hatayı yakalayan bir rubrik satırı ya da puanlama notu yok; x < 350 parçasındaki olası hata zaten `esitsizlik_yonu`.
  - **Öneri:** Etiketi kaldır. Ya da puanlama notuna "x < 350 parçasında −x + 350 yerine x − 350 yazan…" cümlesini ekle.

### D1-10 · KÜÇÜK · Yazım
- **Flashcard 6 `arka`:** "x'i f(x) = g(x)'in köküdür, y'si o andaki ortak değerdir" cümlesinin dizimi bozuk. Öneri: "x'i f(x) = g(x)'in kökü, y'si o andaki ortak değerdir."
- **`docs/dogrula.md` #31:** Satırda "panelde okunurluk  Kitap görseli" diye iki boşluk var ve iki cümle birbirine yapışmış. Bu satır kapalı, yalnız düzenleme gerekiyor.

### D1-11 · KÜÇÜK · "mola vermeden" ifadesi kısıtı tam anlatmıyor
- **Yer:** s016 `kok` b şıkkı; kart b4 `yazilida.ornek_soru`.
- **Sorun:** Kısıt yakıtla ilgili; mola (dinlenme) ile ilgisi yok. Öğrenci "mola"yı yorgunluk molası diye anlayabilir.
- **Öneri:** "yakıt almadan yol alabileceği süre" yaz.

---

## 4. DOĞRULA maddeleri

| # | Durum | Kapatmak için ne gerekir |
|---|---|---|
| 13 | Açık. 9.2.3 için `harita.json` → matematik-u2-k3 `kitap: null`, dogrula "kitap sayfası içindekilerden eşlenemedi" | Kitap s.136 satır 3–6'da "2.3. DOĞRUSAL FONKSİYONLARLA İFADE EDİLEBİLEN DENKLEM VE EŞİTSİZLİKLER…" başlığı var. Bölüm alıştırmaları s.159–160'ta bitiyor, tema sonu s.161'de başlıyor. Haritaya kitap 136–160 yazılırsa #13'ün 9.2.3 kısmı kapanır (ana ajan, `tools/harita_uret.py` düzeltmesi) |
| 23 | Açık | ÖDSGM 1D2Y konu-soru dağılım tablosu (sınav öncesi kılavuz). Başka yoldan kapanmaz |
| 29 | Kapalı (dogrula.md) | Kartta "açık" duruyor, D1-01 |
| 30 | Açık | (1) Ders öğretmeni ya da (2) kitap cevap anahtarı karekodu, s.165 soru 11 ç (D1-05). Satırın "Nerede" sütununa s017 eklensin |
| 31 | Kapalı | Kart ve banka uyumlu (grep temiz) |
| 32 | Açık | Ders öğretmenine s016, s017, s018 rubrikleri gösterilip kısmi puan ve kontrol puanı verip vermediği sorulmalı. ÖDSGM'nin yayımlanmış cevap anahtarları kısmi puan vermiyor; bu yüzden ÖDSGM kaynağıyla kapanmaz. #28 (9.2.2) ile aynı görüşmede sorulabilir |

`dogrula` alanlarındaki bütün maddelerin `docs/dogrula.md`'de karşılığı var: s016, s017, s018 → #32; s017 → #30; kart → #29, #30, #23.

## 5. Kontrol edilemeyenler
- **s.165 soru 11 ç'nin kitap cevabı:** Cevap anahtarı karekodla dış bağlantıda, yerel metinde yok.
- **s.156 Uygulama 16'daki f, g, h tablosu:** Metin dökümü bozuk. Kartın "tabloyla verilen fonksiyonlarla da çalıştırır" ifadesi genel olduğu için kabul edildi; fonksiyon kuralları teyit edilmedi.
- **Panel verisi (`panel/data/matematik.js`) ve üreteçler:** Kapsam dışı. Bu tur denetlenmedi.
