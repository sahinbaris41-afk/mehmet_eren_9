# Pedagoji denetimi: 9. sınıf Matematik, Ünite 3, K1 (9.3.1 üçgende açı ve kenar), tur 1

Denetçi: pedagoji-denetcisi (salt okur). Hiçbir içerik dosyası değiştirilmedi.
Kapsam: `dersler/matematik/konular/matematik-u3-k1.json` (10 bölüm, 11 flashcard, 9 sık hata), `dersler/matematik/sorular/matematik-u3-k1.json` (19 soru). Biçim referansı: `denetim/pedagoji_matematik_u2k3_tur1.md`. Tarih: 2026-10-31.

## KARAR: DÜZELTİLMELİ

Gerekçe. Matematik doğru: tüm kart çözümleri ve s001-s019 cevapları elle yeniden hesaplandı, hata yok. Kontrol omurgası 10/10 bölümde ve 19/19 soruda var. Zorluk dağılımı eşik içinde. Yasak soyut kelime ve "dahil" yazımı sorunu yok. Düzeltilmesi gerekenler:
1. Kart–banka dil ve beceri boşluğu: `m(BAC)` ve `|AB|` gösterimleri basit katmanda hiç tanımlı değil, ama bankanın s003'ten itibaren hepsi bu dille yazılı. Kart "A açısı" diyor, banka `m(BAC)` diyor.
2. Kart b10, bankanın iki zorluk-3 sorusunun (s016, s018) asıl becerisi olan "açı bilgisiyle aralığı daraltma"yı basit katmanda öğretmiyor.
3. s019'un dış açı ispatı için kartta numaralı ispat modeli yok. Metin-şekil sorunu: ispatta "soldaki/sağdaki" yönü ve b5 örneğindeki hangi köşenin hangi açı olduğu belli değil.
4. Üç bölümde iki ana fikir (b3, b8, b9/b10). Bazı Kontrol adımları gerçek "başka yol" değil (s002, s012). Üç çeldirici açıklaması yanlış teşhis ya da öğrenciyi 2. tekil kişiyle suçluyor.

## Yöntem
- İki dosya baştan sona okundu.
- Yasak kelime taraması Grep ile yapıldı (olgu, kavramsal, bağlamında, nitelik, süreç bileşeni, dikkatsiz, "basit bir hata", "dahil"): 0 ihlal. "dâhil" şapkalı yazım tutarlı.
- Cümle uzunluğu ORNEKLEMEYLE sayıldı: b3, b4, b5, b7, b9, b10 `basit`, s004, s009, s014, s017, s018 bağlam ve `cozum_adimlari`. Simge parçaları (x, =, +) kelime sayıldı. Tam sayım yapılmadı.
- Paragraf cümle sayısı: kartta `basit` ve `ornek` maddeleri tek tek, bankada `cozum_adimlari` Kontrol adımları tek tek bakıldı.
- Zorluk dağılımı ve kontrol sorusu sayısı tam sayıldı. Kitap sayfa içerikleri kaynağa karşı bu turda doğrulanmadı.
- Düzeltme notu: İstek metni 27 kontrol sorusu diyor. Grep sayımı 28 (b1 2, b2 3, b3 3, b4 2, b5 3, b6 3, b7 3, b8 3, b9 3, b10 3). Fark tabloyu etkilemiyor.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Cümle > 20 kelime | Kart `basit`: 0. Banka Kontrol adımları: s015 adım 6 (~31 simge), s014 adım 7 (~22), s018 adım 12-13 sınırda | 0 | EKSİK (P2-07) |
| Ortalama cümle uzunluğu (örneklem) | ~9-12 | ≤ 12 | GEÇER (örneklem) |
| Paragraf ≤ 3 cümle | Kart 0 ihlal. Banka: s018 adım 12 (4 cümle), s016 adım 9 (3 cümle, uzun) | 0 | KISMEN (P2-07) |
| Bölüm başına tek fikir | Madde sayısı 5,5,8,6,7,5,8,8,7,9. İki fikir: b3, b8, b9, b10; yoğun: b4 | tek | EKSİK (P1-04, P2-03) |
| Kuraldan önce somut örnek | 10/10 `ornek` var. b4'te örnek kuralı (360°) kural tanımlanmadan sezdiriyor, kabul. b8 örneği köşe adı vermiyor | 10/10 | KISMEN (P2-02) |
| Yerel bağlam oranı | Kart: gölcük 2, deniz 3, tersane 3, okul 2 (10/10 yerel ya da günlük). Banka: 5/19 yerel (%26; bağlamı olan 16 sorunun %31'i), "Gölcük" ya da "Kocaeli" geçen soru yok | ≥ %50 | KART GEÇER, BANKA EKSİK (P2-08) |
| Soyut kelime (basit) | 0 | 0 | GEÇER |
| Terim ilk geçişte kalın + tanım | Kalın ve tanımlı: köşe, iç açı, dış açı, komşu olmayan iç açı, tepe/taban açısı, üçgen eşitsizliği, geniş açı, doğru açı. Tanımsız: `m(BAC)`, `|AB|`, bumba, güverte, kanıt | hepsi | EKSİK (P1-01, P2-01) |
| Kontrol sorusu sayısı | 2,3,3,2,3,3,3,3,3,3 | 2-3 | GEÇER |
| Kontrol sorusu zorluk 1 | b5 Q3, b2 Q2 (hata/ispat yorumu) sınırda | hepsi | SINIRDA (P3-02) |
| İpucu: 1. basamak cevap vermiyor | s002 hint 1 cevabı sezdiriyor. b8 Q3 hint 3 neredeyse cevap | 0 | EKSİK (P2-05) |
| İpucu: 3. basamak cevap değil | 2 adımlık küçük sorularda geriye tek işlem kalıyor (b2 Q1, s001, s009) | 0 | SINIRDA (P3-01) |
| Açık uçlu ipucu c/ç kapsıyor | s017: ç yok; s018: d yok; s019: b ve ç yok | hepsi | EKSİK (P3-04) |
| Zorluk dağılımı (banka) | 9 / 7 / 3 = %47 / %37 / %16 | %50/35/15 ± 10 | GEÇER |
| Yanlış cevap dili | Azarlama yok. 2. tekil: s009 şık 56° ("paylaştırdın") | azarlamasız, kişisiz | GEÇER (P3-03) |
| Matematik çözümü: numaralı, tek işlem | Banka ve yazılıda numaralı. Kontrol adımlarında 3-5 işlem tek satırda | tek işlem | EKSİK (P2-07) |
| Kart ↔ banka dil | Kart basit "A açısı", banka `m(BAC)`. Kart a/b/c, banka `|BC|`. "kanıt"/"ispat" karışık | aynı dil | EKSİK (P1-01, P3-05) |
| "dâhil" yazımı, aralıklarda ";" | Tek biçim "dâhil". Aralıklar "5 < x < 9" biçiminde, ";" yok | tek biçim | GEÇER |

## Kontrol omurgası değerlendirmesi

Kart: 10/10 bölümde "Kontrol:" satırı var. Banka: 19/19 çözümde "Kontrol" adımı var.

| Bölüm | Kontrol türü | Başka yol mu? | Elle uygulanabilir mi? |
|---|---|---|---|
| b1 | Kâğıda Z çizip açıölçerle ölçme | Evet (ölçme) | Evet. En iyi örnek |
| b2 | Açıölçerle üç açıyı toplama | Evet | Evet. "179 ya da 181 bulursan ölçü hatası" iyi |
| b3 | Üç açıyı toplama | Hayır, aynı kuralın tersi | Evet. Yerine koyma niteliğinde, kabul |
| b4 | 50, 60, 70 örneğiyle iki kural | Evet | Evet. Yazılıda iki kural kontrolü çok iyi |
| b5 | Yol 1 ile Yol 2 aynı sonuç, iç + dış = 180° | Evet | Evet. En iyi örnek |
| b6 | Toplam 180° + eşleme | Kısmen. "Eşleme doğru" yeniden okuma | Evet |
| b7 | Harf kuralı ("karşı kenarda o köşenin harfi geçmez") + cetvelle ölçme | Evet | Harf kuralı evet, çizim zor (80°-60°-40°) |
| b8 | Üçgeni çizip ölçme | Evet | 12, 10, 7 dm çizilemez. Cm'ye çevrilmeli (P3-06) |
| b9 | Pergelle yay kesişimi | Evet (çizilebilirlik) | Evet, ama pergel ve cetvel gerekir |
| b10 | Sınır değeri ve içeriden değer | Evet | Evet. En iyi örnek, b10 Kontrol 1-2 |

Banka. Güçlü: s004 (açı toplamı + dar açılar 90°), s005 (iki kural), s006 (başka yoldan 180° − 118°), s009 (dış açı kuralıyla geri yerine koyma), s014 (çizim fikri), s015-s016-s018 (sınır ve iç değer). Zayıf: s002 adım 6 (kontrol değil, aynı sonucu tekrar eder, bkz. P2-04), s012 adım 5 (yalnız gerekli şartları sınar, bkz. P2-01), s003 (ölçerek kontrol 50° örneği, kabul ama yalnız eşitliği sınar). s008 ve s010-s011'in "eşleme doğru" kontrolü yeniden okumadır, ama toplam 180° ile birlikte yeterli.

Kullanıcının sorusu: "Mehmet Eren için uygulanabilir mi?" Evet büyük çoğunlukla. Zorlayanlar: b7/b8 çizim, s015 ve s016'nın tek satırda 4-5 işlemli Kontrol adımı.

## Bulgular

Öncelik: P1 anlamayı ve doğru öğrenmeyi engelleyenler, P2 pedagojik kalite, P3 biçim.

### P1: anlamayı engelleyenler

**P1-01 · YÜKSEK · `konular` b2 `kitap[1]`, b7 `basit[0,5]`, tüm `terimler`; `sorular` s003-s019**
Alıntı (kart). b2 basit hep "A açısı, B açısı". `m(BAC)` yalnız `b2.kitap[1]`'de anlatılıyor, kalın değil ve `terimler` listesinde yok. `|BC|` ilk kez `b7.basit[5]` ("A → a = |BC|") içinde tanımsız geçiyor. `b7.basit[0]` "uzunluğu a ile gösterilir" diyor.
Sorun. Banka s003'ten itibaren hep `m(ABC)`, `|AB|` ile yazılı. Öğrenci "kitap" katmanını hiç açmazsa gösterimi hiç görmez. `|AB|` kartın hiçbir katmanında tanımlı değil. Üç ayrı kenar adı (a, b, c; `|BC|`; "BC kenarı") de b7'de bir arada.
Öneri. b2 basit'e iki madde ekle: "**m(BAC)**, köşesi A olan açının ölçüsüdür; ortadaki harf köşedir." ve b7 basit'e: "**|BC|**, B ile C arasındaki kenarın uzunluğudur." Bu iki gösterimi `terimler`'e ekle. a, b, c'yi yalnız b7'de ve yalnız "kenar adı" olarak tut. Bankada a > c > b biçimindeki `kabul_edilenler` kalabilir.

**P1-02 · YÜKSEK · `konular` b10 `basit` (hepsi), `kitap[2]`; `sorular` s016, s018**
Sorun. s016 ve s018 (zorluk 3, toplam 15 puanın büyük kısmı) "açı bilgisiyle üçgen eşitsizliği aralığını daraltma" becerisine dayanıyor. Kartın basit katmanı bunu hiç öğretmiyor. Yalnız `kitap[2]` ("Açı bilgisi aralığı daraltabilir") ve `yazilida.ornek_cevap` adım 4-6 öğretiyor. `basit[8]` ortak kenarı ve "kesişim"i, bankada hiç kullanılmayan başka bir durumla (iki üçgen) tanıtıyor. b10 `kontrol_sorulari` açı bilgisini yoklamıyor. Ayrıca "fark" sınırı (`9 − 5 = 4`) kuralı sebepsiz veriyor.
Öneri. basit[8]'i `kitap` katmanına taşı. Yerine somut, numaralı bir daraltma örneği koy: "Gölcük iskelesi, şamandıra ve barınak üçgeninde iskeledeki açı barınaktaki açıdan küçük. 1. Üçgen eşitsizliği: 4 < x < 14. 2. Küçük açı karşısında küçük kenar: x < 9. 3. Kesişim: 4 < x < 9." Kontrol soruları arasına "x < 9 ve 4 < x < 14'ün kesişimi nedir?" tipinde bir soru ekle. "Fark" sınırı için tek cümlelik sebep ver: "9 < 5 + x olmalı, buradan x > 4." (Fark kuralını üçüncü eşitsizlikten türet.)

**P1-03 · YÜKSEK · `sorular` s019 (a); `konular` b5 `basit[4]`, `yazilida`**
Sorun. s019 a) 6 puanlık dış açı teoremi ispatı soruyor. Kartta ispat yalnız b5 basit[4] içinde tek cümle ("İki eşitlikten komşu iç açıyı çıkarınca…"). b2'de 180° ispatı için numaralı örnek var, dış açı için yok. b5 `yazilida` ispat değil sayısal soru. Zayıf öğrenci için sıfırdan ispat yazmak zor, rubrik de "gerekçesiyle" diyor.
Öneri. b5 basit'e üç satırlık numaralı ispat ekle: "1. İç açılar: m(BAC) + m(ABC) + m(ACB) = 180°. 2. Doğru açı: m(ACB) + m(ACD) = 180°. 3. İkisinde de m(ACB) var; çıkarınca m(ACD) = m(BAC) + m(ABC)." s019'a `kaynak` olarak bu satırları bağla.

**P1-04 · ORTA · `konular` b2 `basit[3]`, b5 `ornek`; `sorular` s006 (şekil tarifi)**
Sorun. Panel şekil göstermiyor. b2 basit[3] "Soldaki açı B açısıyla, sağdaki açı C açısıyla iç ters açıdır" diyor ama B'nin solda, C'nin sağda olduğunu söylemiyor. b5 `ornek`: "iki iç açısı 40° ve 75°… alt kenarı sağa uzatılıyor" hangi köşede dış açı oluştuğunu söylemiyor. Öğrenci çiziminde köşe sırası değişirse ispatı izleyemez.
Öneri. b2 basit[2]'ye: "A üstte, B sol altta, C sağ altta olsun." b3 gibi "d üzerinde A'nın B tarafındaki açı" dili (s003 doğru kullanıyor) kartta da kullanılsın. b5 örneğe: "Levhanın sol altındaki açı 40°, üstteki 75° olsun. Alt kenar sağ alt köşeden sağa uzatılıyor." s006-s009'daki "BC kenarı C'den D'ye uzatılıyor" tarifi anlaşılır, sorun yok.

### P2: pedagojik kalite

**P2-01 · ORTA · `sorular` s012 (`cozum_adimlari[3]`, `dogrula`); Pisagorsuz geniş açı**
Alıntı. "|BC| 8 ile 14 arasında olmalıdır. Seçeneklerde bu şartı yalnız 12 sağlar."
Sorun. Cümle doğru ama öğrenci "8 < |BC| < 14 olan her değer olur" sanabilir. Gerçekte geniş açı için |BC| > 10 gerekir (Pisagorsuz çözümde gösterilemez). Soru "olabilir" diyor; bu yüzden şıklarda 9 ya da 10 olmaması şans. Kontrol adımı (üçgen çizilebilir, 12 en uzun) yalnız gerekli şartları sınıyor, A açısının gerçekten geniş olduğunu sınamıyor. Gizli `dogrula` notu doğru, ama öğrenciye yansımıyor.
Öneri. Çözüm adım 4'ü şöyle yaz: "Şıklardan yalnız 12 bu şartları sağlar. (Bu şartlar gerekli şartlardır; her değer yeter demek değildir.)" Kök: "…aşağıdakilerden hangisi olabilir?" Anlaşılırlık: 8 ve 15 çeldiricileri iyi, 7 iyi. Zorluk 2 uygun.

**P2-02 · ORTA · `konular` b8 `ornek`, `basit[1-3]`**
Sorun. Örnekte köşe adı yok (7, 10, 12 dm). Adım 2 ("Her kenarın karşı köşesini bul") sayıyla örneklenmiyor; soyut kalıyor. Bölümde iki ana fikir: (1) tersi (uzun kenar → büyük açı), (2) dik ve geniş açı → en büyük açı. 8 madde.
Öneri. Örneğe köşe adı ver: "|AB| = 7, |BC| = 10, |AC| = 12 dm". Adım 2'yi "AC = 12'nin karşısı B" biçiminde somutlaştır. Dik/geniş açı kısmını (basit[4-6]) ayrı kart ya da `kitap` katmanı yap. Kontrol: cetvelle 12 dm yerine "12, 10, 7 cm olarak çiz" de.

**P2-03 · ORTA · `konular` b3, b9, b10 (tek fikir)**
- b3: dik üçgen ve dar açı terimleri + bilinmeyenli açılar (x, 2x, 3x). İkinci fikir basit[5-7]. Öneri: x, 2x, 3x bölümünü `yazilida`'ya ya da b3'ün ikinci yarısına bırak.
- b9: toplam kuralı + fark formülü `|b − c| < a < b + c` + kısa yol. Mutlak değerli formül soyut. Öneri: formülü `kitap`'a taşı; basit'te yalnız "en uzun kenar" kısa yolu kalsın, fark kuralı b10'da somut sayıyla gelsin.
- b9 basit[1]: "Üçüncü çubuk tam 7 m olsaydı" yanlış okunuyor; örnekte 9 m'lik çubuk "üçüncü". Öneri: "9 m'lik çubuk yerine 7 m'lik olsaydı".

**P2-04 · ORTA · `sorular` s002 `cozum_adimlari[5]`**
Alıntı. "Kontrol: Açıölçerle ölçümde 179° ya da 181° de okunabilir. Ölçüm kuralı destekler ama kesinliği ispat verir, bu da ifadenin yanlış olduğunu doğrular."
Sorun. Kontrol bağımsız bir yol değil, aynı sonucun tekrarı. Üstelik "179° okunabilir" cümlesi öğrenciye kuralın yanlış olabileceğini düşündürür. s002 hint 1 ("Kaç üçgen çizilebilir, düşün") cevabı veriyor (P2-05).
Öneri. Kontrol: "Ölçülmemiş yeni bir üçgen düşün (ör. 100°, 50°, 30°). Ölçmeden toplamı 180° bekleriz. İspat bunu garanti eder, 6 ölçüm etmez." Hint 1: "Dünyada kaç farklı üçgen var, öğrenci kaçını ölçtü?" yerine "Ölçmek ile her üçgen için gösterme arasında fark var mı?"

**P2-05 · ORTA · ipucu merdiveni: `sorular` s002, `konular` b8 Q3, b9 Q2**
- s002 hint 1: dogru_yanlis için cevabı sezdiriyor (bkz. P2-04).
- b8 Q3 hint 3: "Açıları 90°, 50° ve 40° olan bir dik üçgen düşün; en büyüğünü seç." Neredeyse cevap.
- b9 Q2 hint 2: "Eşitlik yetmez; toplam büyük olmalı." Hint 2 cevabın tuzağını söylüyor, hint 3 hesabı yaptırıyor.
Öneri. b8 Q3 hint 3'ü "Öbür iki açının toplamı 90°; bunlar 90°'den küçük mü, büyük mü?" yap. b9 Q2 hint 2'yi "Toplam ile en uzun kenar arasında üç durum var: küçük, eşit, büyük." yap, "eşitlik yetmez" cümlesini hint 3'ten sonraya bırak.

**P2-06 · ORTA · `sorular` s013 şık "6 cm, 6 cm, 13 cm" (`kavram_karisikligi`), s003 şık 3 (`okuma_hatasi`), s010 şık 4 (`aci_kenar_eslesme`), s015 şık 16**
Sorun (yeni etiketler dahil teşhis).
- s013, 6-6-13: "İki kenar eşit diye ikizkenar üçgen olmaz" yanlış teşhis. Öğrenci muhtemelen yalnız 6 + 13 > 6 gibi kısa-uzun çiftlerini sınamış ya da eşit kenarı "üçgen işareti" sanmıştır. Etiket `ucgen_esitsizligi_atlama` olmalı. Öneri: "Üçgen için iki kısa kenarın toplamı en uzundan büyük olmalı: 6 + 6 = 12, 13'ten küçük."
- s013, 4-6-11: "En uzun kenar test edilmemiş" belirsiz. Öneri: "4 + 6 = 10, 11'den küçük; kısa kenarlar en uzun kenara yetişmez."
- s003, doğru açı şıkkı `okuma_hatasi`: aslında gerekçe karışıklığı. Öneri: `kavram_karisikligi` ya da `ezber_karisikligi`.
- s010, şık 4: "Her açı o köşeden çıkan bir kenarla eşlenmiş" doğru ama ad vermiyor. Öneri: "72° A'da; A'dan çıkan AB'yi en uzun yazmışsın. En uzun kenar A'ya değmeyen BC'dir."
- s015, şık 16: açıklama iyi, etiket `eksik_adim` yerine `ucgen_esitsizligi_atlama` olabilir (alt sınır unutulmuş).
- s006, şık 134°: etiket `dis_aci_komsu` doğru, ama açıklamada sayı yok. Öneri: "62° + 72° = 134° yapılmış; 62°, dış açıya komşu."
- `dis_aci_komsu` (s006 şık 134°, kart b5 Q3) ve `aci_kenar_eslesme` (s008 şık 92°, s011 şık 3 ve 4, s016 şık 8) gerçek öğrenci hatasını doğru yakalıyor ve öğretici; s011'in iki şıkkı ayrı eşleme hatalarını ayırt ediyor, çok iyi.

**P2-07 · ORTA · `sorular` Kontrol adımları (s014, s015, s016, s018): uzun cümle ve çok işlem**
Alıntı. s015 adım 6: "x = 5 için 5 + 6 = 11 > 11 doğru değil, x = 17 için 6 + 11 = 17 > 17 doğru değil, iki sınır da üçgen oluşturmaz." (~31 simge, tek cümle). s018 adım 12: dört cümle. s014 adım 7: ilk cümle ~22 simge.
Sorun. "Adım başına tek işlem" ve "cümle ≤ 20" ölçütleri Kontrol adımlarında bozuluyor. Kontrol adımının asıl okuyucusu zayıf öğrenci.
Öneri. Her Kontrol'ü ayrı numaralı alt adımlara böl (Kontrol 1: sınır, Kontrol 2: içeriden değer). s015 için: "6. Kontrol 1: x = 5 dene. 5 + 6 = 11, 11 > 11 değil. 5 çözümde yok. 7. Kontrol 2: x = 6 dene. 6 + 6 = 12 > 11. 6 çözümde."

**P2-08 · ORTA · `sorular` yerel bağlam oranı**
Sorun. 19 sorunun yalnız 5'i yerel (s004 yelkenli, s009 rıhtım, s014 tersane, s017 tersane vinç, s018 liman). Hiçbirinde "Gölcük" ya da "Kocaeli" adı yok. Bağlamlı 16 sorunun %31'i. Eşik %50.
Öneri. Üç sembolik soruya yerel çerçeve ekle: s010 ("Kocaeli'de üç köy…"), s011 ("Gölcük'te üç direk…"), s015 ("iskele ile şamandıra arası 6 ve 11 km"). Böylece 8/19 (%42); s008 ("Gölcük'te çatı") ile %47 ve s006 ile %53.

**P2-09 · ORTA · bağlamlı sorular: okunabilirlik, gerçekçilik, şekil kurulabilirliği**

| Soru | Cümle ≤ 20 | Gerçekçi mi | Şekil metinden kurulur mu | Not |
|---|---|---|---|---|
| s004 yelkenli | Evet (en uzun ~15) | Evet | Evet. Direk dik, bumba dik, halat uçtan uca. | "bumba", "güverte" tanımsız (P3-05). Dar açılar toplamı 90° kontrolü çok iyi |
| s009 rıhtım halatları | Evet (~16) | Evet | Çoğunlukla. "Teknenin kenarı BC, C'den D'ye uzatılınca" belirsiz: tekne kenarı fiziksel olarak uzatılmaz | Öneri: "BC doğrusu C'den D'ye doğru uzatılıyor." Çeldirici 56° iyi, ama "paylaştırdın" (P3-03) |
| s014 çelik çubuklar | Adım 7 sınırda | Evet. 3-9 m kaynak çubukları makul | Evet. Üçlüleri liste halinde veriyor | Çok iyi. "kaç farklı üçgen" zor değil. Şıklar sırasız (2, 3, 4, 1): küçükten büyüğe sırala |
| s017 pergel vinç | Evet (~14) | "pergel vinç" günlük dilde yok; öğrenci yanlış hayal edebilir | Evet. AB kol, AC halat, BC zemin açık | Öneri: "Tersanedeki bir vincin" (pergel sözcüğünü at). c şıkkındaki "zemin > halat > vinç kolu" nesne adları sıralamayı kolaylaştırıyor, ç harfi doğru |
| s018 rıhtım | Evet (~13) | Kısmen: "m(BAC) < m(ACB)" fiziksel bir sebep değil, yapay şart | Evet. A, B direk, C halka | Öneri: "A direğindeki açı, C halkasındaki açıdan küçük." Hint 1 iyi |

Dengesi: bağlam yerel ve evrensel (tersane/liman/yelkenli) olarak yeterli; zorlama yok. s017'de "çelik halat" ve "vinç kolu" öğrencinin tanıdığı nesneler.

**P2-10 · ORTA · `sorular` s019 b) "değerlendiriniz" ve rubrik adaleti**
Sorun.
- b) "Deniz'in sözünü değerlendiriniz." 9. sınıf, ortalama altı öğrenci için fiil belirsiz. Rubrik "ölçümün doğrulama olduğunu" bekliyor; öğrenci "değerlendirmek"i "notlamak" sanabilir. Öneri: "Deniz'in sözü doğru mu? Nedenini yazınız."
- a) ispat dili. Rubrik `(2+2+2)`; `puanlama_notu` "Gerekçesi yazılmayan eşitlik için ilgili ölçütün puanı verilmez" diyor. Doğru eşitliği yazıp gerekçeyi unutan öğrenci 0 alır; ölçütün 2 puanı eşitlik 1 + gerekçe 1 olarak bölünmeli. Kısmi puan adaleti için rubriği buna uyarla.
- Kontrol (ç) 3 puan: "iki kontrol 3, biri 2" ağırlık: ilk kontrol 2, ikinci kontrol 1. Adil (20% ağırlık), ama puanlama notunda "iki kontrolün her biri en az 1 puan" açıkça yazılsın.
- s017 2/10, s018 3/15, s019 3/15: üçünde de Kontrol payı %20, kitap Kontrol Noktası ve program "doğrulama" vurgusuyla uyumlu. Aşırı değil. Ağırlık makul. s018 d) 3 alt parça (x = 9 sınırı, x = 5 sınırı, x = 8 üç eşitsizlik) ayrı 1 puan olması adil.

### P3: biçim ve küçük düzeltmeler

**P3-01 · DÜŞÜK · 3. basamak çok küçük sorularda cevabı bırakıyor**
b2 Q1 ("50° + 70° = 120° oldu; şimdi bunu 180°'den çıkar"), s001 ("2x + 10° = 70° yaz. İki taraftan 10° çıkar."), s009 (ilk işlem). İki-üç adımlık soruda ilk adımı yapmak geriye tek işlem bırakıyor. Kural gereği (3. basamak ilk adımı yapar) kabul edilebilir; öneri: ilk adımı yap, ama sonucu yazma ("50° + 70° işlemini yap; sonra 180°'den çıkar").

**P3-02 · DÜŞÜK · kontrol sorusu zorluk 1**
b5 Q3 (Ali'nin hatası), b2 Q2 (Efe'nin deneyi) metin cevap ve yorum istiyor; "kolay kontrol" için hafif ağır. Kabul edilebilir, ama b5 Q3 için cevap şablonu ver: "Ali ... açısını toplamış; oysa ... köşesindekiler toplanmalı."

**P3-03 · DÜŞÜK · yanlış cevap dili (kişisiz)**
s009 şık 56°: "112°'yi A ve B arasında eşit paylaştırdın, eşit olan açılar A ile B değil, B ile C'dir." 2. tekil, suçlayıcı değil ama kişisiz değil. Öneri: "112° A ve B arasında eşit paylaştırılmış; eşit olan açılar A ile B değil, B ile C'dir." Başka 2. tekil suçlama yok; azarlama yok.

**P3-04 · DÜŞÜK · açık uçlu ipuçları tüm şıkları kapsamıyor**
s017 hint'leri a) ve c)'yi kapsıyor, ç) kapsamıyor. s018 d) kapsamıyor. s019'da b) ve ç) kapsamıyor. Öneri: hint 3'ten sonra "Kontrol için:" tek satır ekle (kural gereği 3 basamak kalsın; hint 3'e ekle).

**P3-05 · DÜŞÜK · terimler**
- "köşe", "iç açı", "dış açı", "komşu olmayan iç açı", "üçgen eşitsizliği", "tepe açısı/taban açısı" (yalnız b6'da, ikizkenar bağlamında): kalın ve tanımlı. İyi.
- "bumba", "güverte", "pergel vinç" tanımsız (b3 ornek, s004, s017). Öneri: "bumba, yelkeni tutan yatay direk".
- b2 basit[1]: "kanıt" ve "ispat" birlikte geçiyor. Tek terim kullan.
- b1 basit[2]: "Kesen, iki paralelle aynı biçimde açılar yapar." belirsiz. Öneri: "Kesen, iki paralelde aynı yerde aynı ölçüde açılar oluşturur."
- b1 5 terim (doğru açı, paralel, kesen, yöndeş, iç ters) tek bölümde; yöndeş açı sonraki bölümlerde kullanılmıyor (yalnız s003 çeldiricisi). Öneri: yöndeş açıyı `kitap`'a taşı.
- `sik_hatalar` `aci_kenar_eslesme` açıklaması ("karşılıklı olmayan köşeler üzerinden eşlemek") okunaksız. Öneri: "Açıyı, o köşeden çıkan kenarla eşlemek. Doğrusu: karşı kenar o köşeye değmez."

**P3-06 · DÜŞÜK · kontrol uygulanabilirliği**
b8 Kontrol "Üçgeni cetvel ve açıölçerle çiz" 12, 10, 7 dm ile uygulanamaz; ölçek ver. b7 Kontrol 80°-60°-40° üçgeni çizmek zor; harf kuralı yeterli, çizimi "isteğe bağlı" yap. b9 Kontrol pergel gerektirir; pergel yoksa "7 m, 9 m çubuğu uç uca koy" yöntemi önerilebilir.

**P3-07 · DÜŞÜK · banka düzeni**
s010 `kabul_edilenler: ["a > c > b"]` çoktan seçmeli için gereksiz (şık metni değil, harf biçimi). s014 şık sırası 2-3-4-1: küçükten büyüğe 1-2-3-4 sırala. s010 ve s011 zorluk 1 etiketli ama üç adım + harf eşleme gerekiyor; zorluk 2 olabilir. Böylece dağılım 7/9/3 = %37/%47/%16, eşiğin dışına çıkar; zorluk 1'de kalacaksa hint 3 daha çok yardım etsin.

## En iyi uygulamalar (korunmalı)
- Kart: 10/10 bölümde yerel örnek önce, kural sonra. Kontrol yolları çoğunlukla gerçek ikinci yol (b1, b2, b4, b5, b10).
- b5 "Yol 1 / Yol 2" aynı sonuç, kuralı kendisi sezdiriyor. Çok iyi.
- Banka: her soruda Kontrol, s011 iki ayrı eşleme çeldiricisi, s014 çubuk kontrolü, s015 sınır ve içeriden değerler.
- Sayı tutarlılığı: s003-s019 elle doğrulandı, hata yok.

## Bittiğinde özet
- Rapor: `C:\projeler\mehmet_eren_9\denetim\pedagoji_matematik_u3k1_tur1.md`. Karar: DÜŞÜK sayıda YÜKSEK bulgu (P1-01, P1-02, P1-03) nedeniyle DÜZELTİLMELİ.
- Ölçülemeyen ya da örneklemeyle bakılan: ortalama cümle uzunluğu (örneklem), kitap sayfa doğruluğu (bu turda yok), panelde gerçek görünüm (şekil tarifi yalnız metinden değerlendirildi).
