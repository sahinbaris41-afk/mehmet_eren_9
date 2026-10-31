# Doğruluk denetimi · matematik-u3-k1 (9.3.1) · tur 2

Tarih: 2026-10-31 · Denetçi: dogruluk-denetcisi (salt okur; dosyalarda düzeltme yapılmadı)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u3-k1.json` (surum 2). Kartta 10 bölüm, 28 kontrol sorusu (b1 2, b4 2, öteki bölümler 3'er), 12 flashcard, 9 sik_hatalar ve 11 `dogrula` maddesi var. Dosya baştan yazıldığı için bütün bölümleri satır satır okudum (satır 1–1078); kopyalama kaybı bulmadım.
- Soru bankası `dersler/matematik/sorular/matematik-u3-k1.json` (surum 2). 19 soru var; zorluk dağılımı 9/7/3 ve bağlamlı soru sayısı 11/19, ikisini de saydım ve doğruladım.
- `docs/dogrula.md` #33–#36; `.claude/skills/soru-yazim-kurallari/SKILL.md` satır 93 ve 132–138; `panel/ekranlar/konu.js:74`.

Kaynaklar: kitap s0173, s0176, s0195, s0197 (yeni atıflar için tarandı). Tur 1 kitap ve program karşılaştırmaları geçerli.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | — |
| ÖNEMLİ | 0 | — |
| KÜÇÜK | 3 | D2-01, D2-02, D2-03 |

- D1-01 … D1-07: **yedisi de kapandı.**
- 19 sorunun hepsini yeniden kendim çözdüm. Hepsinin anahtarı doğru. Hiçbir çoktan seçmeli soruda ikinci savunulabilir doğru yok. Her çeldirici, açıklamasındaki hatalı yolla gerçekten o değeri veriyor.
- Rubrik toplamlarını yeniden topladım: s017 10, s018 15, s019 15. Kontrol puanları s017'de 2, s018'de 3, s019'da 3; bunlar #36 ile aynı.
- Yazım taraması: şapkasız "dahil" yok. Aralık gösteriminde ";" yok; geçen ";" işaretleri cümle ayırıcı.
- "Pisagor" ve "hipotenüs" hiçbir yerde öğretilmiyor. Ancak öğrencinin gördüğü iki yerde bu sözcükler geçiyor (D2-01).

KARAR: **TEMİZ.** KRİTİK ve ÖNEMLİ bulgu yok, yayın engeli yok. Üç KÜÇÜK bulgu var; bunların düzeltilmesi önerilir ama yayını engellemez.

---

## 1. Tur 1 bulgularının durumu

| Kod | Durum | Kanıt |
|---|---|---|
| D1-01 (s011 3. şık açıklaması) | KAPANDI | `secenekler[2].aciklama`: "Her kenar kendi uçlarındaki bir köşeyle eşlenmiş (BC→B, AB→A, AC→C)…". Kenar sırası BC < AB < AC bu eşlemeyle m(ABC) < m(BAC) < m(ACB) verir; şıkla aynı. |
| D1-02 (kart dogrula #33/#35 "açık") | KAPANDI | `dogrula[0]` ve `dogrula[2]` "kapandı (2026-10-31)" diyor. Alıştırma 8 ve s.195 soru 2 yönleri doğru yazılmış. |
| D1-03 (s012 gerekli/yeterli) | KAPANDI | `cozum_adimlari[3]`: "Bu iki şart gereklidir; seçeneklerden yalnız 12 ikisini de sağlar." Üreteç notu `dogrula[0]` içinde. |
| D1-04 (s012 yazar notu) | KAPANDI | Not "9.4.4 bilgisi, öğrenciye gösterilmez" diye etiketlenmiş. Panelde `.dogrula` alanının tek kullanımı `konu.js:74`'te ve yalnız kartın dogrula alanını gösteriyor; soru bankasının dogrula alanı ekrana basılmıyor (grep ile teyit edildi). |
| D1-05 (s008/s009 etiket tutarlılığı) | KAPANDI | s009'daki 56° şıkkı artık `aci_kenar_eslesme`; s008'deki 92° şıkkıyla aynı etiket. |
| D1-06 (ucgen_esitsizligi_atlama tanımı) | KAPANDI | SKILL satır 133 genişletildi: "üç uzunluğun üçgen kurup kurmadığına bakmadan karar vermek ya da yalnız açı bilgisini kullanıp…". s013'teki 4-6-11 ve 6-6-13 şıkları ile s014'teki "4" şıkkı yeni tanıma uyuyor. |
| D1-07 (kontrol sorusu sayısı) | KAPANDI | Görev tanımı ve kart aynı sayıyı veriyor: 28. |

## 2. Yeni ve değişen içeriğin bağımsız hesabı

### Kart

| Yer | Hesap | Karar |
|---|---|---|
| b2 basit 4–5, terimler | m(BAC): B, A, C sırasıyla okunur ve köşe ortadaki harftir; değeri A açısının ölçüsüdür. \|AB\| = A ile B arasındaki kenarın uzunluğu. Program s.57 sembol listesiyle aynı. "m(BAC) = A açısının ölçüsü" tanım olarak doğru. | DOĞRU |
| b3 yelkenli | Direk güverteye dik, bumba yatay; aralarındaki açı 90°. 90 + 65 = 155; 180 − 155 = 25°. Kontrol: 90 + 65 + 25 = 180. | DOĞRU (terim notu D2-02) |
| b5 ispat (3 satır) | (1) m(A) + m(B) + m(C) = 180. (2) m(C) + dış = 180. İki sol taraf eşitlenip m(C) çıkarılınca dış = m(A) + m(B). Yol, kitap s.178'deki ispat tablosunun kısaltması; mantıkta boşluk yok. | DOĞRU |
| b5 yeni kontrol sorusu | 2. satırın gerekçesi doğru açıdır (C'deki iç açı ile dış açı B–C–D doğrusu üzerinde). Cevap ve yanlış açıklaması doğru. | DOĞRU |
| b5 örnek | 180 − 115 = 65 → 180 − 65 = 115; 40 + 75 = 115. Yazılıda: x = 35 → 55°, 60°, 65°. Kontrol sorusu 1: 100 − 45 = 55. | DOĞRU |
| b7 | x = 20 → 60°, 50°, 70° → b < a < c. Rıhtım örneğinde açılar 80°, 60°, 40° → a > b > c. Kontrol soruları doğru. | DOĞRU |
| b8 sac | Kenarlar 12 (AC) > 10 (BC) > 7 (AB). Karşı köşeler B, A, C → m(ABC) > m(BAC) > m(ACB). En büyük açı B'de. Üçgen eşitsizliği 7 + 10 = 17 > 12, üçgen kurulur. | DOĞRU |
| b8 yazılıda | 14 (BC) > 11 (AC) > 9 (AB) → m(BAC) > m(ABC) > m(ACB). | DOĞRU |
| b9 | 3 + 4 = 7 < 9; 5 + 6 = 11 > 10; 4 + 6 = 10 olduğu için üçgen olmaz. 6–10–15 üçlüsünde üç eşitsizlik de sağlanıyor; fark yoluyla 5 < 6 < 25. Pergel kontrolü doğru. Kontrol soruları: 2-3-7 hayır, 4-5-9 hayır, 6-7-8 evet. | DOĞRU |
| b10 fark sınırı | 9 < 5 + x → x > 4 ve x < 9 + 5 = 14 → 4 < x < 14. Aradaki tam sayılar 5 … 13, yani 9 tane. Kontrol: x = 14 sağlamıyor, x = 10 sağlıyor. | DOĞRU |
| b10 halı saha | \|AB\| = 6, \|BC\| = 10, \|AC\| = x. 10 < 6 + x → x > 4; x < 16. B açısının karşısı AC = x, A açısının karşısı BC = 10 (B ile A'ya değmeyen kenarlar; eşleme doğru). m(B) < m(A) → x < 10. Kesişim 4 < x < 10 → 5, 6, 7, 8, 9 (5 tane). Kontrol: x = 10'da \|AC\| = \|BC\| olur ve A ile B'deki açılar eşit çıkar; 10 dışlanmalı, dışlanmış. | DOĞRU |
| b10 yazılıda | 4 < x < 20. B açısının karşısı x, A açısının karşısı 12 → x > 12 → 12 < x < 20 → 13 … 19 (7 tane). | DOĞRU |
| b10 kitap | 7 ve 11 km için 4 < x < 18; 7 < 11 + x her pozitif x için doğru. Ortak kenarda 8 − 6 = 2 ve 8 + 6 = 14; 13 − 8 = 5 ve 13 + 8 = 21; kesişim 5 < x < 14. Alıştırma 8'de m(BAC) > m(ACB) → \|AB\| < 11, kesişim 3 < \|AB\| < 11. | DOĞRU |
| b10 yeni Q3 | x > 7 ile 3 < x < 13'ün kesişimi: alt sınır max(7, 3) = 7, üst sınır 13 → 7 < x < 13. | DOĞRU |
| Flashcard 1–12 | Yeni eklenen 2. kart (m(BAC), \|AB\|) b2 ile aynı tanımı veriyor. Ötekiler tur 1'deki gibi. | DOĞRU |
| sik_hatalar 1–9 | Etiketler sözlükle uyumlu. | DOĞRU |

### Banka

| Soru | Benim çözümüm | Değişiklik kontrolü | Karar |
|---|---|---|---|
| s001 | 30° | — | DOĞRU |
| s002 | Yanlış | Yeni Kontrol yolu (adım 6–7, ölçülmemiş yeni üçgen): 6 ölçüm yeni üçgeni kapsamıyor. Mantık doğru, sonuç aynı. | DOĞRU |
| s003 | İç ters açılar | 3. şık (doğru açı) `kavram_karisikligi`: iki benzer gerekçe kavramı karışıyor, sözlüğe uyuyor. 4. şık (döngüsel gerekçe) da aynı etikette; kabul edilebilir. | DOĞRU |
| s004 | 52° | Kontrol 5–6 bölünmüş: 90 + 38 + 52 = 180 ve 38 + 52 = 90. | DOĞRU |
| s005 | 150° | Kontrol 6–7: 90 + 120 + 150 = 360 ve 90 + 60 + 30 = 180. | DOĞRU |
| s006 | 118° | Kontrol 5–6: 62°, 46 + 72 + 62 = 180. | DOĞRU |
| s007 | 65° | 6x = 210 → 90°; 6x = 330 → 150°. | DOĞRU |
| s008 | 68° | Kontrol 6 (eşleme) doğru. | DOĞRU |
| s009 | 44° | 56° şıkkı `aci_kenar_eslesme` (D1-05). Kontrol 6–7: 44 + 68 = 112. | DOĞRU |
| s010 | \|BC\| > \|AB\| > \|AC\| | Kontrol 6–7 doğru. | DOĞRU |
| s011 | m(BAC) < m(ACB) < m(ABC) (kenarlar m cinsinden: 5, 7, 9) | Yeni açıklama doğru (D1-01). Kontrol 4: 5 + 7 = 12 > 9. | DOĞRU |
| s012 | 12 | Adım 4'te "gerekli şart" ifadesi var. Doğru şık için 144 > 100 olduğundan A gerçekten geniş açı. | DOĞRU |
| s013 | 7, 8, 14 | 6-6-13 şıkkı `ucgen_esitsizligi_atlama` (yeni tanımla uyumlu). Kontrol 5–6 doğru: 14 − 8 = 6 < 7 < 22. | DOĞRU |
| s014 | 2 | Şık sırası 1-2-3-4; doğru şık 2. sırada ve `cevap` "2". Çeldiriciler: (4, 6, 9) atlanırsa 1; (3, 6, 9) eklenirse 3; hepsi sayılırsa 4. Kontrol 7–8 doğru. | DOĞRU |
| s015 | 5 < x < 17 → 11 (km) | "12" şıkkı 17 − 5'ten, "13" uçlar sayılınca, "16" yalnız x < 17 kullanılınca çıkıyor. Kontrol 1–4: x = 5 ve x = 17 dışarıda, x = 6 ve x = 16 içeride. | DOĞRU |
| s016 | 11 | Kontrol 9–11 doğru. | DOĞRU |
| s017 | x = 40 → 85°, 60°, 35° → \|BC\| > \|AC\| > \|AB\| | Kontrol 14–16 doğru; rubrik 2 × 5 = 10. | DOĞRU |
| s018 | 5 < x < 23; A açısının karşısı BC = x, C açısının karşısı AB = 9; "A'daki açı C'dekinden küçük" → x < 9 → 6, 7, 8; x = 8 için 14 > 9 > 8 → m(ABC) > m(ACB) > m(BAC) | Bağlam cümlesi "A direğindeki açı, C halkasındaki açıdan küçüktür" m(BAC) < m(ACB) ile aynı anlamda. Kontrol 13–18 doğru; rubrik 3 + 3 + 2 + 2 + 2 + 3 = 15. | DOĞRU |
| s019 | x = 30 → m(ACD) = 140°, m(ACB) = 40°; 75 + 65 = 140 | Rubrik 15 ölçüt × 1 puan: a 6, b 2, c 4, ç 3 = 15. Kontrol puanı 3. Puanlama notundaki paralel yolla ispat da geçerli: C'den AB'ye paralel çizilince bir açı A ile iç ters, öbürü B ile yöndeş çıkar. | DOĞRU |

## 3. Tutarlılık ve yazım

- **Gösterim:** Kart ve banka m(BAC) ile \|AB\| gösterimini kullanıyor. b5'teki m(A) kısaltması yerinde tanımlanmış; bankada kullanılmıyor. s018 rubriğinde "B > C > A gösterimi kabul edilir" notu var. Sorun yok.
- **Birimler:** b8 sac cm, b8 yazılıda km, b10 iskele km, halı saha m, s011 m, s015 km. Her soru ve örnek kendi içinde tutarlı.
- **Yerel bağlamlar:** "Gölcük'teki bir tersane" (s006, s014, s017), "Kocaeli'deki bir liman" (s009, s015, s018) ve "Gölcük'te bir yelkenli/ev" belirsiz tanımlık kullanıyor. Hiçbirinde adı verilen kurum ya da gerçek ölçü iddiası yok ve hepsinde "(sayılar kurgusaldır)" var. b10'daki "Gölcük iskelesi" gerçek bir yer adı, ama uzaklıklar kurgusal diye işaretli ve kart dogrula notunda da açıklanmış. Kabul edilebilir.
- **Yazım:** "dâhil" her yerde şapkalı. Aralıklarda ";" yok.
- **Pisagor ve hipotenüs:** Hiçbir yerde öğretilmiyor. Öğrencinin gördüğü iki yerde sözcük olarak geçiyor (D2-01).

## 4. Bulgular

### D2-01 · KÜÇÜK · "Pisagor" ve "hipotenüs" öğrenciye görünen metinde geçiyor
- **Dosya ve yol:** `konular/matematik-u3-k1.json` → `bolumler[7].katmanlar.kitap[6]` (b8: "9.3.1 programında ve kitabın 3.1 bölümünde Pisagor bağıntısı işlenmez…"), `dogrula[1]` (#34: "Pisagor … hipotenüs …", "Öğretmene sorulacak: …") ve `dogrula[5]` ("'Hipotenüs' kitapta geçmez").
- **Sorun:** `panel/ekranlar/konu.js:74` kartın bütün `dogrula` maddelerini kaynak kutusunda "⚠" ile öğrenciye gösteriyor. Öğrenci tanımı verilmemiş iki terim görüyor (CLAUDE.md kural 8). Ayrıca "Öğretmene sorulacak" ve "Kullanıcının önerdiği akışla karşılaştırma" (`dogrula[8]`) gibi yazara yönelik notları da görüyor. İçerik yanlış değil, müfredat dışı konu da öğretilmiyor. Ancak #34'ün "kart bunları içermiyor" iddiası öğrencinin gözünden bakıldığında tam doğru değil. Aynı desen yayımlanmış U2 kartlarında da var (`Bilgi notu` maddeleri: u2-k1 1, u2-k2 4, u2-k3 10); yani sistemik bir durum.
- **Öneri:** b8'deki cümleyi kitap katmanından çıkar ya da "Bu bölümde dik üçgenin kenar uzunlukları arasındaki ilişki işlenmez" diye terim kullanmadan yaz. `dogrula[1]` maddesinde terimleri "dik üçgende kenar bağıntıları (MAT.9.4.4)" diye yaz. Kalıcı çözüm, ana ajan kararı olarak: panelde yalnız "DOĞRULA" ile başlayan maddeleri göster, "Bilgi notu" maddelerini gizle ya da yazar notlarını ayrı bir alana taşı.

### D2-02 · KÜÇÜK · b3'te bumba "direk" diye tanımlanıyor
- **Dosya ve yol:** `bolumler[2].ornek.metin`: "bumba (yelkenin alt kenarını tutan direk)"; aynı bölümde "Direk ile bumba arasındaki açı 90°".
- **Sorun:** Aynı örnekte "direk" sözcüğü iki ayrı parçayı karşılıyor. Uzun metinde kopan bir öğrenci açının hangi iki parça arasında olduğunu karıştırabilir. Banka s004 aynı nesneyi "yelkenin altındaki, direğe bağlı yatay çubuk" diye tanımlıyor. Kart ile bankada terim tutarsız. Benzer biçimde güverte kartta "teknenin üst zemini", s004'te "teknenin üst döşemesi" diye tanımlanmış.
- **Öneri:** Kartta "bumba (yelkenin alt kenarını tutan yatay çubuk)" yaz. Güverte tanımını iki dosyada aynı ifadeyle yaz.

### D2-03 · KÜÇÜK · docs/dogrula.md #34 eski flashcard numarasını gösteriyor
- **Dosya ve yol:** `docs/dogrula.md` satır 69, "Nerede" sütunu: "(b3, b8, flashcard 6)".
- **Sorun:** Surum 2'de 2. sıraya m(BAC)/\|AB\| kartı eklendi. Dik üçgen flashcard'ı artık 7. sırada (`flashcard[6]`). Ayrıca b8'in 3. kontrol sorusu da dik üçgen sonucunu kullanıyor.
- **Öneri:** Sütunu "(b3, b8 kitap katmanı ve 3. kontrol sorusu, flashcard 7)" olarak güncelle.

## 5. docs/dogrula.md ve kart dogrula notları

- **Kart dogrula[0] (#33) ve dogrula[2] (#35):** Güncel; docs'taki [x] kayıtlarıyla aynı.
- **Kart dogrula[1] (#34):** İçerik güncel: MAT.9.4.4, öğretmen teyidi bekleniyor ve sayım kısıtı yazılmış. Sözcük seçimi için D2-01'e bakın.
- **docs #34:** İçerik güncel (program teyidi tamam, öğretmen teyidi açık). Yer sütunu için D2-03'e bakın.
- **docs #36:** Güncel. Toplamlar 10/15/15, Kontrol puanları 2/3/3. s019'un yeni rubriği toplamı ve Kontrol puanını değiştirmiyor. Madde açık kalmalı (öğretmen teyidi).

## 6. Kontrol edilemeyenler
- Şekle bağlı kitap örnekleri için #35'teki PDF teyidini esas aldım; görsele yeniden bakmadım.
- Üreteçleri (`panel/motor/uretecler/*.js`) ve `panel/data/matematik.js` paketini kontrol etmedim; bu turun kapsamında değildi. s012 üreteç notunun üreteçlere uygulanıp uygulanmadığı da bu yüzden kontrol edilmedi.

## 7. docs/dogrula.md'ye önerilen değişiklik (ana ajan yazar)
1. #34 "Nerede" sütunu: "flashcard 6" yerine "flashcard 7, b8 kontrol sorusu 3" (D2-03).
2. İsteğe bağlı yeni madde: panelin kart `dogrula` alanını olduğu gibi öğrenciye göstermesi; "Bilgi notu" maddelerinin ve yazar notlarının öğrenciden gizlenmesi kararı (D2-01). Bu karar bütün dersleri etkiler.
