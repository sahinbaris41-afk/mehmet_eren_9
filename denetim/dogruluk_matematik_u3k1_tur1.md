# Doğruluk denetimi · matematik-u3-k1 (9.3.1 Üçgende açı ve kenarla ilgili özellikler ve bu özellikler arasındaki ilişkiler) · tur 1

Tarih: 2026-10-31 · Denetçi: dogruluk-denetcisi (salt okur, dosyalarda düzeltme yapılmadı)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u3-k1.json` (surum 1): 10 bölüm, 28 kontrol sorusu (b1 2, b2 3, b3 3, b4 2, b5–b10 3'er), 11 flashcard, 9 sik_hatalar, `dogrula` dizisi.
- Soru bankası `dersler/matematik/sorular/matematik-u3-k1.json` (surum 1): s001–s019.
- `docs/dogrula.md` #33, #34, #35, #36.

Karşılaştırılan kaynaklar:
- Kitap (`matematik-9sinif-ders-kitabi-1kitap_…`): s0172, s0173, s0174, s0176, s0179, s0181, s0184, s0185, s0186, s0187, s0188, s0190, s0194, s0197 okundu ya da tarandı. s.190 ve s.194–195 için #33 ve #35'teki PDF teyidi esas alındı.
- Program (`matematik-dersi_…`): s0057 satır 11 (genelleme), s0058 satır 22 ve 38; Pisagor için s0061 satır 34–35 ve s0065 satır 35–47.
- `.claude/skills/soru-yazim-kurallari/SKILL.md` hata_turu sözlüğü (satır 87–138).
- `dersler/matematik/harita.json` (9.3.1, 9.4.4).

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | — |
| ÖNEMLİ | 1 | D1-01 |
| KÜÇÜK | 6 | D1-02 … D1-07 |

- **Cevap anahtarı:** 19 sorunun hepsini kendim çözdüm ve hepsi doğru çıktı. Hiçbir çoktan seçmelide ikinci savunulabilir doğru yok. Her soruda çeldiricilerin değerleri birbirinden farklı. Adı verilen hatalı yol uygulandığında her çeldirici gerçekten o şıkkı veriyor; tek istisna s011'deki bir açıklama (D1-01).
- **Kontrol adımı:** 19 sorunun hepsinde ayrı numaralı "Kontrol (…)" adımı var. Bu adımlardaki hesapların hepsi doğru.
- **Rubrik toplamları:** s017'de 2+2+2+2+2 = 10, s018'de 3+3+2+2+2+3 = 15, s019'da 2+2+2+2+2+2+3 = 15. Kontrol puanları sırasıyla 2, 3 ve 3; bunlar #36 ile aynı.
- **Kart matematiği:** Bütün örnekleri, aralıkları, tam sayı sayımlarını ve yazılıda çözümlerini elle yeniden hesapladım; hepsi tuttu.
- **Yazım:** Şapkasız "dahil" yok. Aralıklarda ";" yok. "tepe açısı" ve "taban açısı" yalnız ikizkenar bağlamında geçiyor. "Hipotenüs" ve "Pisagor" öğrenciye görünen metinde yok; yalnız kitap katmanında "işlenmez" notu var ve s012'nin `dogrula` alanında yazar notu olarak geçiyor (D1-04).
- **Müfredat:** İleri sınıf konusu yok. Dik üçgen yalnız iki yerde geçiyor: dar açıların toplamı 90° ve "dik açı en büyük açıdır, karşısındaki kenar en uzundur". İkincisi iç açılar toplamından ve açı-kenar bağıntısından türetiliyor; program s.57 genellemesiyle de uyumlu.
- **Telif:** Kitaptan yalnız tek cümlelik teorem ifadeleri alıntılanmış (s.174, 177, 178). Uzun birebir alıntı yok.
- **Kurgusal bağlamlar:** Gerçek kurum, ölçü ya da istatistik iddiası yok. Gölcük, Kocaeli ve rıhtım geçen bağlamların hepsi "(sayılar kurgusaldır)" etiketini taşıyor.

KARAR: **DÜZELTİLMELİ** (KRİTİK yok, yayın engeli yok. Bir ÖNEMLİ açıklama hatası düzeltilmeli.)

---

## 1. Kartın bağımsız doğrulaması

| Bölüm | Kontrol | Karar |
|---|---|---|
| b1 | Yöndeş ve iç ters açı eşitliği; 3x + 10 = 70 → x = 20; 180 − 130 = 50. s.173 satır 4: "“ters”, “iç ters”, “dış ters”, “yöndeş”"; satır 22–23 (Beren, paralel çiziyor). s.172 satır 7 (tek paralel) | DOĞRU |
| b2 | Paralel çizerek yapılan ispatta iç ters açılar ve doğru açı kullanılıyor. s.174 satır 32: "Teorem: Üçgenin iç açılarının ölçüleri toplamı 180° dir." 60°, 190° (üçgen olmaz) | DOĞRU |
| b3 | 90 + 35 + 55 = 180; 6x = 180 → 30, 60, 90; vinç sorusu x = 25 → 60, 70, 50; 50°, 45°, iki dik açı. s.176 satır 29–32: "mO = 49°", "41°" | DOĞRU |
| b4 | 3·180 − 180 = 360; 130 + 120 + 110 = 360; 9x + 45 = 360 → x = 35 → dış açılar 140, 125, 95; iç açılar 40, 55, 85. s.184 satır 37–38 | DOĞRU |
| b5 | 40 + 75 = 115; x = 35 → 55, 60, 65; 100 − 45 = 55; Ali hatası. s.184 satır 39–41 (paralel doğruyla ya da iç açılar toplamıyla ispat) | DOĞRU |
| b6 | Çatı (180 − 110)/2 = 35; vinç 52 → 76; 70°, 50°, 120°. s.181 satır 30–41: \|AB\| = \|AC\|, 50° → 65°, x = 65 − 50 = 15 | DOĞRU |
| b7 | x = 20 → 60, 50, 70 → b < a < c; kontrol soruları BC, 80°, \|BC\| = \|AC\|. s.174 satır 19–21: "açı-kenar bağıntısı … büyük açı karşısında büyük kenar"; program s.57 satır 11 | DOĞRU |
| b8 | Dik/geniş açı en büyük açıdır (öbür iki açının toplamı ≤ 90°). 9, 14, 11 → m(BAC) > m(ABC) > m(ACB). s.185 satır 7–13: 5, 8, 4√2 → m(B) > m(A) > m(C). s.190 satır 18–19: "Bu ifadenin tersi de doğrudur." | DOĞRU |
| b9 | 3 + 4 < 9; 5 + 6 > 10; 4 + 6 = 10 → üçgen olmaz; 6, 10, 15 için üç eşitsizlik ve 5 < 6 < 25. s.186 satır 6–9 (çubuklar 7, 5, 4, 2, 2). s.190: \|b − c\| < a < b + c (#33 PDF teyidi) | DOĞRU |
| b10 | 4 < x < 14 → 9 tam sayı; 8, 12 ve m(ABC) > m(BAC) → x > 12 → 12 < x < 20 → 7 tam sayı. s.187 satır 13–14 (7 km, 11 km) ve 4 < x < 18; s.188 satır 8–11: 2 < x < 14, 5 < x < 14; s.197 satır 26 (12 m, 20 m), satır 33–34 ("en büyük tam sayı") | DOĞRU |
| Flashcard 1–11 | Matematik olarak hepsi doğru | DOĞRU |
| sik_hatalar 1–9 | Hepsi doğru; etiketlerin tanımları sözlükle uyumlu (ucgen_esitsizligi_atlama için D1-06'ya bakın) | DOĞRU |

## 2. Soru bankası (bağımsız çözüm)

| Soru | Benim çözümüm | Anahtar | Çeldiriciler (hatalı yol → değer) | Karar |
|---|---|---|---|---|
| s001 | 2x + 10 = 70 → 30° | ✓ | 2x = 80 → 40; 2x + 10 = 110 → 50; 2x = 60 → 60 | DOĞRU |
| s002 | Yanlış (doğrulama ispat değildir) | ✓ | — | DOĞRU |
| s003 | İç ters açılar (koordinatla kontrol ettim: x ile B açısı AB'nin iki ayrı yanında, paralellerin arasında) | ✓ | yöndeş; doğru açı; ispatlanacak sonuç | DOĞRU |
| s004 | 180 − 128 = 52° | ✓ | 128 (toplam); 180 − 38 = 142; 360 − 128 = 232 | DOĞRU |
| s005 | 12x = 360 → 150° | ✓ | 30 (x); 12x = 180 → 75; 12x = 540 → 225 | DOĞRU |
| s006 | 46 + 72 = 118° | ✓ | 62 + 72 = 134; 62; 72 − 46 = 26 | DOĞRU |
| s007 | x = 25 → 65, 60, 55 → 65° | ✓ | 25; 6x = 210 → 85, 90, 65 → 90; 6x = 330 → 125, 150, 85 → 150 | DOĞRU |
| s008 | (180 − 44)/2 = 68° | ✓ | 44; A = C = 44 → 92; 136 | DOĞRU (etiket D1-05) |
| s009 | 180 − 112 = 68 → 180 − 136 = 44° | ✓ | 68; 112/2 = 56; 136 | DOĞRU (etiket D1-05) |
| s010 | C = 68 → \|BC\| > \|AB\| > \|AC\| | ✓ | C en küçük sanılır → a > b > c; ters sıra; her açı kendi köşesinden çıkan kenarla eşlenir (A→AB, C→AC, B→BC) | DOĞRU |
| s011 | 5 (A), 7 (C), 9 (B) → m(BAC) < m(ACB) < m(ABC) | ✓ | ters sıra ✓; A ile C yer değiştiriyor ✓; "ilk harf" açıklaması bu şıkkı vermiyor (D1-01) | DOĞRU (açıklama YANLIŞ) |
| s012 | Geniş açı A'da → BC en uzun → BC > 8; BC < 14 → şıklardan yalnız 12. 12² = 144 > 100, A gerçekten geniş açı | ✓ | 7 < 8; 8 = AC → B açısı = A açısı, iki geniş açı olur; 15 > 14 | DOĞRU (D1-03) |
| s013 | 7 + 8 = 15 > 14 | ✓ | 3 + 5 = 8; 4 + 6 < 11; 6 + 6 < 13 | DOĞRU (etiket D1-06) |
| s014 | (3, 4, 6) ve (4, 6, 9) → 2 | ✓ | (3, 6, 9) eklenir → 3; dördü birden → 4; (4, 6, 9) atlanır → 1 | DOĞRU (etiket D1-06) |
| s015 | 5 < x < 17 → 6 … 16 → 11 | ✓ | 17 − 5 = 12; uçlar dâhil → 13; yalnız x < 17 → 1 … 16 = 16 | DOĞRU |
| s016 | 3 < x < 21; C açısının karşısı AB = x, B açısının karşısı AC = 9 → x > 9 → 10 … 20 → 11 | ✓ | x > 12 → 13 … 20 = 8; açı kullanılmaz → 4 … 20 = 17; 9 dâhil → 12 | DOĞRU |
| s017 | x = 40 → 85, 60, 35 (ACD 145) → \|BC\| > \|AC\| > \|AB\| | ✓ | rubrik 10, Kontrol 2 | DOĞRU |
| s018 | 5 < x < 23; A açısının karşısı x, C açısının karşısı 9 → x < 9 → 6, 7, 8; x = 8 → m(ABC) > m(ACB) > m(BAC) | ✓ | rubrik 15, Kontrol 3 | DOĞRU |
| s019 | İspat (iç açılar + doğru açı); x = 30 → ACD 140, m(ACB) = 40, 75 + 65 = 140 | ✓ | rubrik 15, Kontrol 3. Paralel doğruyla ispat seçeneği s.184 satır 39–41 ile uyumlu | DOĞRU |

### Özel kontroller
- **s016:** Tek doğru cevap var: 11. Açı şartı ters çevrilirse (m(ABC) > m(ACB)) x < 9 olur, 3 < x < 9 → 4 … 8, yani 5 tam sayı çıkar. 5 şıklarda yok, bu yüzden belirsizlik oluşmuyor. Kitaptaki Alıştırma 8'in kendi verisi (\|BC\| = 11, \|AC\| = 8, m(BAC) > m(ACB) → 3 < x < 11 → 7 tam sayı) de şıklarda yok, yani soru kitaptan kopya değil. Kaynakta yazan "sayılar ve açı çifti değiştirilerek uyarlandı" doğru.
- **s012:** Kapsam içindeki iki kural (BC > 8 ve BC < 14) dört şıktan yalnız 12'yi bırakıyor. Doğru şık gerçekten geniş açı veriyor; bunu yazar notu 144 > 100 ile gösteriyor. Öğrenciden kapsam dışı bilgi istenmiyor. Uyarı: Bu iki şart gerekli ama yeterli değil (D1-03).
- **s015, s016, s018 ve b10 sayımları:** Uçlar her yerde hariç tutulmuş. Hepsini n = üst − alt − 1 formülüyle yeniden saydım: 9, 7, 11, 11, 3. Hepsi doğru.

---

## 3. Bulgular

### D1-01 · ÖNEMLİ · s011, 3. seçenek açıklaması
- **Dosya ve yol:** `sorular/matematik-u3-k1.json` → `matematik-u3-k1-s011.secenekler[2].aciklama`
- **İddia:** "Her kenar kendi ilk harfindeki köşeyle eşlenmiş, BC'nin karşısı B değil, A köşesidir."
- **Sorun:** Şık "m(ABC) < m(BAC) < m(ACB)". Kenar sırası BC < AB < AC; bu şıkkı veren eşleme BC→B, AB→A, AC→C. AC'nin ilk harfi A olduğu hâlde C'ye eşlenmiş. "İlk harf" kuralı uygulansaydı AB ile AC ikisi de A'ya düşerdi ve bir sıralama çıkmazdı. Öğrenciye gösterilen hata yolu, şıkkı gerçekten üretmiyor.
- **Karar:** YANLIŞ (açıklama). Anahtar ve etiket (aci_kenar_eslesme) doğru.
- **Öneri:** Açıklamayı şöyle yaz: "Her kenar kendi uçlarındaki bir köşeyle eşlenmiş (BC→B, AB→A, AC→C). Karşı köşe, kenarda geçmeyen harftir: BC'nin karşısı A'dır."

### D1-02 · KÜÇÜK · Kart `dogrula` dizisinde #33 ve #35 "açık" görünüyor
- **Dosya ve yol:** `konular/matematik-u3-k1.json` → `dogrula[0]`, `dogrula[2]`
- **Sorun:** `docs/dogrula.md` satır 68 ve 70'te #33 ve #35, 2026-10-31 tarihli PDF teyidiyle kapatılmış ([x]). Kart ise ikisini hâlâ "açık" yazıyor ve "PDF ile teyit edilmeli" diyor. #35 metni ayrıca "s.195 soru 2 ve s.194 alıştırma 8 yönü okunamadı; kart yazmaz" diyor, oysa yönler artık teyitli: m(BAC) > m(ACB); \|AB\| = \|AC\|, \|BC\| > \|AB\|.
- **Öneri:** İki maddeyi "kapandı (PDF s.190 / s.194–195 teyitli)" olarak güncelle. b10 kitap katmanında Alıştırma 8'in yönü isteğe bağlı olarak yazılabilir.

### D1-03 · KÜÇÜK · s012 4. adım: şartların yeterli olduğu izlenimi
- **Dosya ve yol:** `sorular/matematik-u3-k1.json` → `s012.cozum_adimlari[3]`
- **Sorun:** "\|BC\| 8 ile 14 arasında olmalıdır" ifadesi gerekli şartı söylüyor ve doğru. Ancak m(BAC) > 90° için gerçek şart \|BC\| > 10'dur (9.4.4 bilgisi). Örneğin BC = 9 bu adımın şartını sağlar ama A geniş açı olmaz. Seçeneklerde 9 ya da 10 olmadığı için anahtar etkilenmiyor. Ama soru üreteçlerine "kaç tam sayı" türünde bir sayım varyantı olarak girerse cevap yanlış olur.
- **Öneri:** Adımı şöyle değiştir: "Bu iki şart gereklidir; seçeneklerden yalnız 12 ikisini de sağlar." Üreteçlere not düş: geniş açı şartıyla tam sayı sayımı sorulmamalı, yalnız uygun şıklı seçme sorusu kullanılmalı.

### D1-04 · KÜÇÜK · s012 `dogrula` yazar notunda Pisagor eşitsizliği
- **Dosya ve yol:** `sorular/matematik-u3-k1.json` → `s012.dogrula[0]`
- **Sorun:** Notta "12² = 144 > 6² + 8² = 100" yazıyor. Bu, program s.65 satır 45–47'deki MAT.9.4.4 sonucudur ("Geniş açılı bir üçgende geniş açının karşısındaki kenar uzunluğunun karesi … büyüktür"). Not "öğrenciye gösterilmez" diye işaretlenmiş. Panelin `dogrula` alanını göstermediği burada teyit edilmedi.
- **Öneri:** Panelin `dogrula` alanını ekrana basmadığını teyit et. Notu "9.4.4 bilgisi, yazar kontrolü" diye etiketle.

### D1-05 · KÜÇÜK · "Yanlış eşit açı çifti" hatası iki soruda farklı etiketlenmiş
- **Dosya ve yol:** `s008.secenekler[2]` (92°, `aci_kenar_eslesme`) ve `s009.secenekler[2]` (56°, `kavram_karisikligi`)
- **Sorun:** İki şıkta da hata yolu aynı: ikizkenarda eşit açıları yanlış çiftte sanmak (A = C ya da A = B). Biri `aci_kenar_eslesme`, öbürü `kavram_karisikligi` etiketi almış. Sözlükteki `aci_kenar_eslesme` tanımı "karşısında olmayan kenar/açı ile eşlemek"; bu tanım iki durumu da kapsıyor.
- **Öneri:** s009'daki 56° şıkkını `aci_kenar_eslesme` yap. Böylece istatistikler tutarlı olur.

### D1-06 · KÜÇÜK · `ucgen_esitsizligi_atlama` açı bilgisi olmayan sorularda kullanılmış
- **Dosya ve yol:** `s013.secenekler[2]` (4, 6, 11) ve `s014.secenekler[2]` (4); kart `sik_hatalar[5]` ikinci cümle
- **Sorun:** Sözlük tanımı (SKILL satır 133) "yalnız açı bilgisini kullanıp üçgen eşitsizliğini kontrol etmemek". s013 ve s014'te açı bilgisi yok; buradaki hata "en uzun kenarı test etmemek ya da hiç test etmemek". Etiket, tanımın dar okumasına uymuyor. Ayrıca s013'teki "6, 6, 13" şıkkının `kavram_karisikligi` etiketi zayıf. Bu etiket "iki benzer kavramı karıştırmak" anlamına geliyor; şıkta ise ikizkenarlık üçgen eşitsizliği kontrolünün yerine konmuş.
- **Öneri:** SKILL tanımını genişlet: "üçgen eşitsizliğini kontrol etmeden kenar ya da üçgen kabul etmek (yalnız açı bilgisine, eşit kenara ya da tek eşitsizliğe güvenmek)". Bu, ana ajanın işi. Alternatif olarak iki şıkkı `eksik_adim` olarak yeniden etiketle.

### D1-07 · KÜÇÜK · Kontrol sorusu sayısı
- **Sorun:** Görev tanımında 27 kontrol sorusu deniyor, kartta 28 var (b1 2, b4 2, öteki 8 bölüm 3'er). İçerik açısından sorun yok; ilerleme ya da commit notunda sayı 28 olarak yazılmalı.

---

## 4. docs/dogrula.md maddeleri

- **#33:** Kapalı ([x], PDF s.190). Kart doğru. Kartın `dogrula[0]` alanı güncellenmeli (D1-02).
- **#34 (açık):** Program teyidinin yarısı artık yapılabilir. Yeni programda Pisagor **MAT.9.4.4**'te ("Tales, Öklid ve Pisagor teoremlerini ispatlayabilme", program s.61 satır 34–35; harita.json satır 539–540). Geniş açılı üçgende kenar karesi sonucu da 9.4.4 açıklamasında (s.65 satır 45–47). Bu yüzden 9.3.1 kartının Pisagor içermemesi doğru. Eski "MAT.9.5.4" ifadesi yeni sürüm için "MAT.9.4.4" olarak düzeltilmeli. Maddenin kapanması için geriye yalnız öğretmen teyidi kalıyor: 9.3.1 yazılısında dik üçgenden ne bekleniyor? Ayrıca 9.4.4 hangi yazılıda (harita)?
- **#35:** Kapalı ([x]). Kartın `dogrula[2]` alanı güncellenmeli (D1-02).
- **#36 (açık):** Rubrik toplamları ve Kontrol puanları maddeyle aynı (10/15/15; 2/3/3). Kapanması için ders öğretmeninin örnek rubriği görüp kısmi puanı ve Kontrol puanını onaylaması gerekiyor. Bu ajanın kapatabileceği bir şey değil.

## 5. Kontrol edilemeyenler
- Kitap s.179 (uçurtma 110°), s.182 (7. Örnek 125°) ve s.180–181 merdiven örneği metin dökümünde şekle bağlı. Bunlar için #35'teki PDF teyidi esas alındı; ayrıca görsel bakılmadı.
- Panelin `dogrula` alanını ekrana basıp basmadığı (D1-04) kontrol edilmedi.
- Üreteçler (`panel/motor/uretecler/*.js`) bu turun kapsamında değildi.

## 6. docs/dogrula.md'ye önerilen yeni ya da değişen maddeler (ana ajan yazar)
1. #34 metninde "Pisagor eski 2024-25 tablosunda MAT.9.5.4" ifadesine şu eklenmeli: "yeni programda MAT.9.4.4 (program s.61, s.65); program teyidi tamam, yalnız öğretmen teyidi bekliyor".
2. Yeni madde (isteğe bağlı): `ucgen_esitsizligi_atlama` tanımının açı bilgisi olmayan çubuk ve üçlü sorularını da kapsayacak biçimde genişletilmesi (D1-06). Bu bir SKILL kararı.
