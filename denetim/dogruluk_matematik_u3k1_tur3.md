# Doğruluk denetimi · matematik-u3-k1 (9.3.1) · tur 3

Tarih: 2026-10-31 · Denetçi: dogruluk-denetcisi (salt okur; dosyalarda düzeltme yapılmadı)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u3-k1.json` (surum 3). Kartta 11 bölüm, 31 kontrol sorusu (b1 2, b4 2, öteki dokuz bölüm 3'er), 12 flashcard, 9 sik_hatalar ve 11 `dogrula` maddesi var. Dosya baştan yazıldığı için 1–1152. satırların hepsini okudum. Kopyalama kaybı ya da sessiz kayma bulmadım.
- Soru bankası `dersler/matematik/sorular/matematik-u3-k1.json` (surum 3, 19 soru). Zorluk dağılımı 9/7/3; kendim saydım.
- `docs/dogrula.md` #33–#36 ve `panel/ekranlar/konu.js:74`.

Kaynaklar: kitap s0187, s0188, s0196 ve s0197 (yeni ve taşınan atıflar için yeniden okundu). Tur 1 ve tur 2'deki kitap ve program karşılaştırmaları geçerli.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | — |
| ÖNEMLİ | 0 | — |
| KÜÇÜK | 2 | D3-01, D3-02 |

- D2-01, D2-02 ve D2-03: **üçü de kapandı** (bkz. §1).
- 19 sorunun anahtarını ve 51 çeldiricinin her birini yeniden kendim çözdüm. Hepsi doğru. Hiçbir çoktan seçmeli soruda ikinci savunulabilir doğru yok.
- Rubrik toplamları: s017 10 (2 × 5), s018 15 (3 + 3 + 2 + 2 + 2 + 3), s019 15 (15 ölçüt × 1; a 6, b 2, c 4, ç 3). Kontrol puanları s017'de 2, s018'de 3, s019'da 3. Bunlar #36 ile aynı, yani korunmuş.
- Kartın on bir bölümündeki bütün sayısal örnekleri yeniden hesapladım; hepsi doğru.
- "Pisagor" ve "hipotenüs" sözcükleri kartta ve bankada hiçbir yerde geçmiyor (dogrula alanları dâhil; grep ile teyit ettim).

KARAR: **TEMİZ.** KRİTİK ve ÖNEMLİ bulgu yok, yayın engeli yok. İki KÜÇÜK bulgu yalnız kaynak sayfası paylaşımı ve docs kaydıyla ilgili; içerik doğruluğunu etkilemiyor.

---

## 1. Tur 2 bulgularının durumu

| Kod | Durum | Kanıt |
|---|---|---|
| D2-01 (Pisagor/hipotenüs öğrenciye görünür) | KAPANDI | b8 `katmanlar.kitap[2]`: "Dik ya da geniş açının karşısındaki kenar, üçgenin en uzun kenarıdır. Kitap bunu ayrı bir kural olarak yazmaz…". `dogrula[1]` maddesi "dik üçgende kenar bağıntıları (MAT.9.4.4)" diyor. Eski `dogrula[5]` maddesindeki "Hipotenüs" cümlesi çıkarılmış. s012 `dogrula` alanında da iki sözcük yok. Sistemik kısım açık: panel kartın bütün dogrula maddelerini gösteriyor (`konu.js:74`), "Öğretmene sorulacak" (`dogrula[1]`) ve "Kullanıcının önerdiği akışla karşılaştırma" (`dogrula[8]`) gibi yazar notları hâlâ öğrenciye görünüyor. Bu bir ana ajan kararı (tur 2 §7 madde 2); bu turun bulgusu sayılmadı. |
| D2-02 (bumba "direk" diye tanımlanmış) | KAPANDI | b3 `ornek.metin`: "güverteye (teknenin üst döşemesi)… bumba (yelkenin altındaki, direğe bağlı yatay çubuk)". s004 bağlamında aynı iki ifade birebir geçiyor. |
| D2-03 (#34 eski flashcard numarası) | KAPANDI | docs satır 69, Nerede sütunu: "(b3, b8 basit ve kitap katmanı ve 3. kontrol sorusu, flashcard 7)". `flashcard[6]` dik üçgen kartı; doğru. |

## 2. Kart: bağımsız hesap (bütün bölümler)

| Yer | Hesap | Karar |
|---|---|---|
| b1 | Kontrol soruları 180 − 130 = 50 ve 65. Yazılıda 3x + 10 = 70 → x = 20; 60 + 10 = 70. | DOĞRU |
| b2 | m(BAC) ve \|AB\| tanımları ile paralel ispat adımları doğru. Kontrol soruları: 60°, "hayır", B. | DOĞRU |
| b3 | Yelkenli: 90 + 65 = 155, 180 − 155 = 25. Kitap katmanında 6x = 180 → 30, 60, 90. Yazılıda 6x + 30 = 180 → x = 25; 60 + 70 + 50 = 180. Kontrol soruları: 50°, 45°, hayır. | DOĞRU |
| b4 | 3 · 180 − 180 = 360; 130 + 120 + 110 = 360. Yazılıda 9x + 45 = 360 → x = 35; dış açılar 140, 125, 95 (toplam 360), iç açılar 40, 55, 85 (toplam 180). Kontrol soruları: 115°, 110°. | DOĞRU |
| b5 örnek | 180 − 115 = 65 → 115; 40 + 75 = 115. | DOĞRU |
| **b5 yeni 4 satırlık ispat** | (1) m(BAC) + m(ABC) + m(ACB) = 180. (2) m(ACB) + m(ACD) = 180 (doğru açı). (3) İki sol taraf da 180 olduğundan birbirine eşittir. (4) m(ACB) iki yandan çıkınca m(BAC) + m(ABC) = m(ACD). Mantıkta boşluk yok. Adımlar kitap s.178'deki ispat tablosunun sırasını izliyor (iç açılar toplamı, doğru açı, birleştirme, ortak açıyı çıkarma). 2. kontrol sorusu artık "ikinci satır" diyor ve gerekçe olarak doğru açıyı istiyor; numaralı satırla uyumlu. | DOĞRU |
| b5 yazılıda | 3x + 10 = 115 → x = 35; 55, 60, 65 → toplam 180. 1. kontrol sorusu: 100 − 45 = 55. | DOĞRU |
| b6 | 180 − 110 = 70 → 35; 60. Yazılıda 180 − 104 = 76. Kontrol soruları: 70°, 50°, 120°. | DOĞRU |
| b7 | Rıhtım (80, 60, 40) → a > b > c. Yazılıda 6x + 60 = 180 → x = 20; 60, 50, 70 → b < a < c. | DOĞRU |
| b8 | Sac: 12 > 10 > 7, karşı köşeler B, A, C → m(ABC) > m(BAC) > m(ACB). Yazılıda 14 > 11 > 9 → m(BAC) > m(ABC) > m(ACB). Kontrol soruları: A, 100°'nin karşısı, 90°'nin karşısı. | DOĞRU |
| b9 | 3 + 4 = 7 < 9; 5 + 6 = 11 > 10. Yazılıda 4 + 6 = 10 (üçgen olmaz); 16 > 15, 21 > 10, 25 > 6; 5 < 6 < 25. Kontrol soruları: hayır, hayır, evet. | DOĞRU |
| **b10 basit** | 9 < 5 + x → x > 4; x < 14 → 4 < x < 14. Tam sayılar 5…13, yani 9 tane. Kontrol: x = 14 dışarıda; x = 10'da üç eşitsizlik de sağlanıyor. | DOĞRU |
| **b10 yazılıda** | 15 < 6 + x → x > 9; x < 21 → 9 < x < 21. Tam sayılar 10…20, yani 11 tane; en büyüğü 20. Kontrol satırları doğru. | DOĞRU |
| **b10 kitap** | 10. Örnek 7 ve 11 km → 4 < x < 18 (s.187 ile aynı). Vinç 12 m ve 20 m, soru 8b (s.197: "AC = 12 m, CB = 20 m … en büyük tam sayı değeri") ile aynı. | DOĞRU |
| b10 kontrol soruları | 5 < x < 11; tam sayılar 5, 6, 7, 8; 4 + 10 = 14 olduğu için hayır. | DOĞRU |
| **b11 basit (halı saha)** | \|AB\| = 6, \|BC\| = 10, \|AC\| = x. Toplam sınırı x < 16, fark sınırı x > 4. B'nin karşısı AC = x, A'nın karşısı BC = 10. m(B) < m(A) → x < 10. Kesişim 4 < x < 10 → 5…9, yani 5 tane. x = 10'da A ve B'deki açılar eşit olur; 10'un dışlanması doğru. x = 7 içeride. | DOĞRU |
| **b11 kitap** | 11. Örnek (s.188): ABC'de 8 − 6 = 2 ve 8 + 6 = 14; ADC'de 13 − 8 = 5 ve 13 + 8 = 21; kesişim 5 < x < 14. Kitapla aynı. Alıştırma 8: m(BAC) > m(ACB) → \|BC\| = 11 > \|AB\|; 11 − 8 = 3 < \|AB\| < 19; kesişim 3 < \|AB\| < 11 (#35 PDF teyidiyle aynı). s.196 soru 4: m(ACB) > m(BAC), \|BC\| = 230, \|AC\| = 130 → 100 < \|AB\| < 360, açı şartıyla \|AB\| > 230. "Aynı fikir" iddiası doğru. | DOĞRU |
| **b11 yazılıda** | 12 < 8 + x → x > 4; x < 20. B'nin karşısı AC = x, A'nın karşısı BC = 12; m(ABC) > m(BAC) → x > 12. Kesişim 12 < x < 20 → 13…19, yani 7 tane. Kontrol satırları doğru. | DOĞRU |
| b11 terim ve kontrol soruları | "kesişim" terimindeki örnek (4 < x < 16 ile x < 10 → 4 < x < 10) doğru. Kontrol soruları: küçük açının karşısı küçük kenar; 4 < x < 10; \|AC\|. | DOĞRU |
| Flashcard 1–12, sik_hatalar 1–9 | Flashcard 11 (4 < x < 14) doğru. sik_hatalar 6'daki örnek (x > 12, x < 20) b11 yazılıda örneğiyle tutarlı. | DOĞRU |

**Kaynak paylaşımı:** b10 "187-188 (10. Örnek, 7.-8. Sıra Sizde), 197 (ölçme 8b)", b11 "188 (11. Örnek), 194 (alıştırma 8), 196 (ölçme 4)". Her iki bölümün kitap katmanındaki atıflar kendi `kitap_sayfa` alanıyla örtüşüyor. 8. Sıra Sizde ise b11'e ait (D3-01).

## 3. Banka: bağımsız çözüm ve çeldirici kontrolü

| Soru | Benim çözümüm | Çeldiriciler (hatalı yolla yeniden hesap) | Karar |
|---|---|---|---|
| s001 | 2x + 10 = 70 → 30° | 40: (70 + 10)/2. 50: 2x + 10 = 110. 60: 2'ye bölünmemiş. | DOĞRU |
| s002 | Yanlış | — | DOĞRU |
| s003 | İç ters açılar | Yöndeş, doğru açı ve döngüsel gerekçe gerçekten yanlış. | DOĞRU |
| s004 | 180 − 128 = 52° | 128 = 90 + 38. 142 = 180 − 38. 232 = 360 − 128. | DOĞRU |
| s005 | 12x = 360 → 150° | 30 = x. 75: 12x = 180 → 5 · 15. 225: 12x = 540 → 5 · 45. | DOĞRU |
| s006 | 46 + 72 = 118° | 134 = 62 + 72. 62 = iç açı. 26 = 72 − 46. | DOĞRU |
| s007 | x = 25 → 65, 60, 55 → 65° | 25 = x. 90: 6x = 210 → 85, 90, 65. 150: 6x = 330 → 125, 150, 85. | DOĞRU |
| s008 | 136/2 = 68° | 44 = tepe açısı. 92: A = C = 44 alınınca. 136 = iki taban açısı. | DOĞRU |
| s009 | C = 68 → A = 44° | 68 = taban açısı. 56 = 112/2. 136 = 68 + 68. | DOĞRU |
| s010 | C = 68 → \|BC\| > \|AB\| > \|AC\| | Üç yanlış sıralama, açıklamalarındaki yanlış eşlemeyi veriyor. | DOĞRU |
| s011 | 5 < 7 < 9 → m(BAC) < m(ACB) < m(ABC) | Ters sıra; BC→B, AB→A, AC→C eşlemesi; A ile C yer değiştirmiş. | DOĞRU |
| s012 | 8 < \|BC\| < 14 → 12 | 7 < 8; 8'de A ve B açıları eşit olur (iki geniş açı olamaz); 15 > 14. | DOĞRU |
| s013 | 7-8-14 | 3 + 5 = 8; 4 + 6 = 10 < 11; 6 + 6 = 12 < 13. | DOĞRU |
| s014 | (3, 4, 6) ve (4, 6, 9) → 2 | 1: (4, 6, 9) atlanmış. 3: (3, 6, 9) eklenmiş. 4: hepsi sayılmış. | DOĞRU |
| s015 | 5 < x < 17 → 11 | 12 = 17 − 5. 13: uçlar dâhil. 16: yalnız x < 17. | DOĞRU |
| s016 | 3 < x < 21 ve x > 9 → 10…20, yani 11 | 8: x > 12 → 13…20. 17: açı yok → 4…20. 12: 9 dâhil. | DOĞRU |
| s017 | 4x − 15 = 3x + 25 → x = 40; 85, 60, 35; \|BC\| > \|AC\| > \|AB\| | Rubrik 10, Kontrol 2. | DOĞRU |
| s018 | 5 < x < 23; A'nın karşısı x, C'nin karşısı 9 → x < 9 → 6, 7, 8; x = 8 için 14 > 9 > 8 → m(ABC) > m(ACB) > m(BAC) | Rubrik 15, Kontrol (d) 3. | DOĞRU |
| s019 | a) şıkkındaki 4 satır b5 ile birebir aynı ve doğru. 2x = 60 → x = 30; 140, 40; 75 + 65 = 140. | Rubrik 15, Kontrol (ç) 3. | DOĞRU |

**Tutarlılık kontrolleri:**
- `kaynak.kart` alanları: s015 "b10" (yalnız fark ve toplam), s016 "b10, b11" (aralık ve açıyla daraltma), s018 "b8, b9, b10, b11". Üçü de içerikle uyumlu. Öteki 16 sorunun kart eşlemesi de doğru bölümü gösteriyor.
- s012 2. ipucu ile b8 basit katmanının son paragrafı: "Üçgende 90° ya da daha büyük bir açı varsa öbür iki açı küçük kalır. En büyük açı odur; karşısındaki kenar en uzun kenardır." İki cümle **birebir aynı**. s012 ipucunda bunlara ek olarak üçgen eşitsizliği cümlesi var.
- s019 a) cevabı ve rubriği, b5'teki yeni 4 satırlık ispatla aynı yolu izliyor.

## 4. Bulgular

### D3-01 · KÜÇÜK · 8. Sıra Sizde b10'a atanmış, içeriği b11'in konusu
- **Dosya ve yol:** `konular/matematik-u3-k1.json` → `bolumler[9].kaynak.kitap_sayfa`: "187-188 (10. Örnek, 7.-8. Sıra Sizde), 197 (ölçme 8b)"; `bolumler[10].kaynak.kitap_sayfa`: "188 (11. Örnek), 194 (alıştırma 8), 196 (ölçme 4)".
- **Kitap karşılığı:** s0188, 8. Sıra Sizde: "ABC ve BCD üçgen, AB = 3 birim, AC = 10 birim, BD = 7 birim ve DC = 4 birim olduğuna göre BC'nun … alabileceği tam sayı değerlerinin toplamını bulunuz." Bu, ortak kenarda iki aralığın kesişimini isteyen bir soru: 7 < BC < 13 ve 3 < BC < 11, kesişim 7 < BC < 11. Yani 11. Örnek ile aynı fikir; o da b11'de. 7. Sıra Sizde (makarna, CD = 16) ise b10'un konusu olan tek üçgende aralık sorusu.
- **Karar:** BELİRSİZ değil, atama hatalı. İçerik doğruluğunu etkilemiyor.
- **Öneri:** b10'da "187-188 (10. Örnek, 7. Sıra Sizde), 197 (ölçme 8b)" yaz. b11'de "188 (11. Örnek, 8. Sıra Sizde), 194 (alıştırma 8), 196 (ölçme 4)" yaz. İsteğe bağlı: s.197 soru 8c ("ACB açısının ölçüsü BAC açısının ölçüsünden büyük değerler almaya başladığında…") da açıyla daraltma fikrini kullanıyor; b11'e eklenebilir.

### D3-02 · KÜÇÜK · docs/dogrula.md #35 (ve #33) "Nerede" sütununda b11 yok
- **Dosya ve yol:** `docs/dogrula.md` satır 70 (#35), Nerede sütunu: "(b3, b5, b6, b8, b10 kitap katmanları)". Satır 68 (#33): "(b9, b10, terim 'üçgen eşitsizliği')".
- **Sorun:** #35'in teyit ettiği 11. Örnek (5 < x < 14) ve Alıştırma 8 (3 < \|AB\| < 11) sonuçları surum 3'te b10'dan b11'in kitap katmanına taşındı. Fark yolu (#33) da b11'in basit, kitap ve yazılıda katmanlarında kullanılıyor.
- **Öneri (ana ajan yazar):** #35 Nerede sütununu "(b3, b5, b6, b8, b10, b11 kitap katmanları)" yap. #33 Nerede sütununa "b11" ekle.

## 5. docs/dogrula.md ve kart dogrula notları

- **#34:** "Nerede" sütunu güncel (D2-03 kapandı). Docs metninde "Pisagor" ve "hipotenüs" geçiyor, ama bu dosya öğrenciye gösterilmiyor; sorun değil. Kart `dogrula[1]` maddesi aynı içeriği terim kullanmadan veriyor.
- **#36:** Güncel. Toplamlar 10/15/15, Kontrol puanları 2/3/3; banka ile aynı. Madde açık kalmalı (öğretmen teyidi bekleniyor).
- **#33 ve #35:** İçerikleri güncel, kart `dogrula[0]` ve `dogrula[2]` ile aynı. Yer sütunları için D3-02'ye bakın.
- **Kart `dogrula[6]`:** "makasa benzetme (b7, b11)" ve "fark sınırının 9 < 5 + x eşitsizliğinden türetilmesi (b10)" ifadeleri yeni bölüm yapısıyla uyumlu.
- **Kart `dogrula[9]`:** "halı saha oyuncuları" kurgusal, "vinç (12 m, 20 m)" kitaptan; s.197 ile aynı.

## 6. Kontrol edilemeyenler
- s.196 soru 4'teki açı karşılaştırması metin dökümünde bozuk ("mmACBB AC>"). Okuma m(ACB) > m(BAC) yönünde ve kart yön yazmadığı için sonucu etkilemiyor. PDF görseline bakmadım.
- Şekle bağlı kitap örneklerinde #35'teki PDF teyidini esas aldım.
- Üreteçler (`panel/motor/uretecler/*.js`) ve `panel/data/matematik.js` paketi bu turun kapsamında değildi; kontrol etmedim. s012 üreteç notunun ("tam sayı sayımı sorulmaz") üreteçlere uygulanıp uygulanmadığı da bu yüzden kontrol edilmedi.
- `python tools/dogrula.py` çalıştırılmadı (salt okur denetçi).

## 7. docs/dogrula.md'ye önerilen değişiklik (ana ajan yazar)
1. #35 Nerede: b11 ekle. #33 Nerede: b11 ekle (D3-02).
2. Tur 2'den açık (D2-01'in sistemik kısmı): kart `dogrula` alanının olduğu gibi öğrenciye gösterilmesi; "Bilgi notu" ve yazar notlarının ("Öğretmene sorulacak", "Kullanıcının önerdiği akış") gizlenmesi kararı. Bu karar bütün dersleri etkiliyor.

KARAR: **TEMİZ**
