# Doğruluk denetimi, tur 2: matematik-u3-k1 (9.3.1) parametrik üreteçleri

Tarih: 2026-10-31 · Denetçi: doğruluk denetçisi (salt okur)
Kapsam: `panel/motor/uretecler/matematik.js` satır 2507-3191 (12 `mat-u3-*` üreteci), güncel örnekler `scratchpad/u3k1_uretec_ornekleri.txt` (her üreteçten tohum 0-5, 72 örnek), `panel/motor/soru.js` (insa, şık sayısı), `tools/uretec_test.mjs` (güncel hâli), hata_turu sözlüğü `.claude/skills/soru-yazim-kurallari/SKILL.md`.
Önceki rapor: `denetim/dogruluk_matematik_u3k1_uretec.md` (K1-K5).

## Özet

| Düzey | Sayı |
|---|---|
| KRİTİK (yanlış bilgi / yanlış anahtar) | 0 |
| ÖNEMLİ (kaynaksız / müfredat dışı) | 0 |
| KÜÇÜK | 5 |

72 örneğin hepsini yeniden ve bağımsız olarak çözdüm. Doğru şık her örnekte doğru ve tek. Görünen her çeldirici, açıklamasındaki hatalı yoldan gerçekten o değeri veriyor. İkinci savunulabilir doğru şık yok. Önceki K1-K5'in hepsi kapandı.

## 1. Örneklerin çözümü (tohum 0-5)

| Üreteç | Sonuç | Elle doğrulanan noktalar |
|---|---|---|
| ic-aci | 6/6 | t0 yelken: 90 + 20, cevap 70; 110 (A + B), 20 (ikizkenar sanma, B), 160 (180 − B, "90° unutulmuş"). t4 yelken: cevap 25; 155, 115, 65. t1 60 / t2 85 / t3 100 / t5 75: A + B, A (ikizkenar), 180 − B hepsi tutuyor. |
| dis-aci-toplam | 6/6 | e3 = 360 − e1 − e2: 65, 105, 145, 115, 65, 115. Yeni 180 − e1 (= A) şıkkı: 45, 85, 95, 95, 40, 40. Hepsi görünüyor, pozitif, doğrudan ve C'den farklı. |
| aci-x | 6/6 | t0 dış 10x + 40 = 360, x = 32, cevap 133; ezber 72 (x = 14); okuma 47. t1 85; işaret 69 (x = 32). t2 68; işaret 76 (x = 19), ezber 140 (x = 35). t3 88; işaret 148 (x = 46). t4 82; işaret 78, ezber 133. t5 85; işaret 103, ezber 139. |
| dis-aci | 6/6 | A + B: 65, 105, 145, 115, 65, 115. C, A + C, B + C, \|A − B\| değerleri tutuyor. |
| dis-aci-ters | 6/6 | B: 20, 20, 50, 20, 25, 75. 2E − 180: t1 30, t2 110, t3 50, t5 50 (E − m(ACB) yolu). E + A: t0 110, t4 105, t5 155. 180 − A ve C tutuyor. |
| dis-aci-x | 6/6 | x: 16, 13, 38, 14, 24, 30. E − Q (80, 39, 76, 56, 120, 150), x3 işaret (28, 33, 8, 34, 40, 32), x4 (8, 27, 82, 11), x5 (t4 30, t5 145) hepsi formülden doğru. |
| esitsizlik-aralik | 6/6 | 3<x<7, 7<x<11, 4<x<14, 6<x<10, 3<x<13, 3<x<23. ≤, 0 < x < s, b < x < s, d < x < b şıkları tutuyor. |
| esitsizlik-tamsayi | 6/6 | t0 13 (21, 6, 14); t1 en büyük 23 (11 = n, 13 = d + 1, 24); t2 16 (17, 9 = n, 11 = b − 1); t3 14 (15, 13 = n, 2 = d + 1); t4 en küçük 10 (9, 24, 1); t5 15 (16, 11, 7). |
| aci-kenar | 6/6 | Açı → kenar (t0) ve kenar → açı (t1-t5) doğru. Her örnekte üçgen eşitsizliği sağlanıyor (7 + 12 > 15, 8 + 11 > 15, 3 + 10 > 11, 3 + 5 > 6, 3 + 9 > 11). |
| aci-kenar-hesap | 6/6 | Üçüncü açılar 30, 30, 65, 90, 40, 40. t0, t1 (U en küçük) ve t3 (U en büyük): eksik_adim şıkkı yok, 3 şık kalıyor. t2 ve t4'te (U ortanca) eksik_adim şıkkı doğru sırayı veriyor. |
| aci-kenar-x | 6/6 | x = 15, 40, 17, 23, 21, 15; açılar (30,50,100), (85,75,20), (61,68,51), (33,82,65), (82,73,25), (70,20,90). t3'te "sabit sayılara göre" şıkkı, t4'te "katsayıya göre" şıkkı doğru kuruluyor. |
| aralik-daraltma | 6/6 | 2, 9, 6, 2, 6, 9. Açı bilgisi kullanılmamış, aci_kenar_eslesme (kd), n + 1, k − 1 değerleri tutuyor. |

## 2. Yeni öğeler

- **ic-aci, yelken (güverteye dik, 90°):** Bağlam "direk güverteye dik (90°)" ve "bumba yatay çubuk" diyor. Çözüm 1. adımda "direk ile bumba arasındaki açı 90°" sonucuna geçiyor. Sayısal olarak tutarlı. Ara gerekçe yazılmamış, bkz. Y2.
- **ic-aci, "ikizkenar sanma":** Değer dik kipte B, öbür kipte A. Bu açı C'ye eşit çıkarsa (gerçekten ikizkenar) `ayri` örneği yeniden çekiyor. Böylece şık hiçbir zaman doğruya eşit olmuyor. kavram_karisikligi (genel üçgen ile ikizkenar üçgen) sözlükle uyumlu.
- **dis-aci-toplam, 180 − e1 = A:** Her tohumda pozitif (A ≥ 20). Doğrudan her zaman farklı: A = e3 olması için A + C = 180 gerekir, bu da B = 0 demektir. e1 + e2'den her zaman farklı (o şık 180°'den büyük). C ile çakışırsa `ayri` yeniden çekiyor. okuma_hatasi uygun. Açıklama metni için bkz. Y3.
- **dis-aci-ters, 2E − 180:** E − m(ACB) = E − (180 − E). Yalnız 2E > 180 iken ekleniyor; dis_aci_komsu tanımıyla ("komşu iç açıyı katmak") uyumlu. Doğru.
- **aci-kenar-hesap, çakışmada düşürülen şık:** U en küçükse yanlış sıra doğru sırayla aynı çıkar. U en büyükse sıra döngüsel kayar ve UC2 kaydırmasıyla aynı olur; bunu t3'te elle doğruladım. İki durumda da şık eklenmiyor. Kalan üç şık (UC1, UC2, ters) her köşede birbirinden ve doğrudan farklı. soru.js `insa` 3 yanlış seçiyor ve selftest 4 şık bekliyor (satır 47 ve 112). Her yolda en az 3 yanlış kalıyor, sayı tamam.
- **aci-kenar-x:** Katsayıya ya da sabite göre sıralama doğruyla veya başka şıkla çakışırsa, ya da kendi içinde tekrar varsa şık eklenmiyor; yine en az 3 yanlış kalıyor. Örnek atılmadığı için önceki dağılım yanlılığı da gitti.
- **Deniz bağlamları:** `ikiKenar(r, deniz)` ile a ∈ [2, 4], b ∈ [a + 1, 5], yani kenarlar 2-5 km arasında (esitsizlik-aralik iskele/şamandıra/barınak, esitsizlik-tamsayi iskele/şamandıra/fener). deniz + enb kipinde de `ayri` sağlanabiliyor (a = 3 ya da 4); sonsuz döngü riski yok.
- **Köy bağlamı:** "Kocaeli'de A, B ve C köyleri ... düz çizgi uzaklıkları şöyle:" ile başlıyor. `includes("köyler")` "köyleri" sözcüğünü yakalıyor, cm km'ye çevriliyor. Birim karışıklığı yok.

## 3. Kontrol satırları

- **esitsizlik-aralik:** Üst sınır satırı "x = s için k1 + k2 = s > s doğru değil". Alt sınır satırı "x = d için a + d = b > b doğru değil"; bağlayıcı eşitsizlik (a + x > b) doğru seçilmiş. İki satır da sınırın aralıkta olmadığını doğru söylüyor. İç değer d + 1 (kısa kenara eşitse d + 2) her zaman d < x < s içinde, çünkü s − d = 2a ≥ 4. 6 örnekteki sayıları tek tek kontrol ettim (ör. t2: d + 1 = 5 = a, bu yüzden x = 6; 14 > 6, 15 > 5, 11 > 9). Artık durum için bkz. Y1.
- **ucgenKontrol:** Üç satır k1 + k2 > x, k1 + x > k2, k2 + x > k1; toplamlar doğru hesaplanıyor (tamsayi, aralik, daraltma örneklerinin hepsi).
- **Açı toplamı satırları:** 72 örnekte 180 ve 360 toplamları doğru. Dış açılar toplamı satırları (dis-aci-toplam 6, aci-x t0) 360 tutuyor. dis-aci'deki doğru açı satırları (m(ACD) + m(ACB) = 180) tutuyor.
- **aralik-daraltma:** Açı satırı "x = k olsaydı iki açı eşit çıkardı". Test değeri lo + 1 her zaman kesişim içinde.

## 4. Test değişikliği (`tools/uretec_test.mjs`)

Git diff çalıştırılamadı (Bash aracı yok), bu yüzden dosyanın güncel hâlini okudum (satır 39-71).
- 3. ipucu sızıntı döngüsü artık `mat-u3-` için de çalışıyor (satır 53). Uç kontrolü `son` değerinden ° işaretini sıyırıyor (`/°$/`). Cümle ortası için `sizinti` derece işaretli cevabı (ör. "65°") `SAYI_SINIR` ile arıyor; böylece "180°" içindeki "80°" yanlış alarm vermiyor. Metin cevaplarda (aralık, sıralama) `includes(g.dogru)` var.
- Yasak sözcük döngüsü (satır 66-71) bağlam, kök, ipuçları, çözüm ve yanlış metin/açıklamalarını tarıyor.
- Açıklar için bkz. Y4 ve Y5. Bugünkü 12 ipucu-3 şablonunu elle kontrol ettim, hiçbiri cevabı söylemiyor. Bu açıklar şu an gizli kalan riskler, gerçek bir sızıntı değil.

## 5. K1-K5 durumu

| Bulgu | Durum | Not |
|---|---|---|
| K1 "uzun kenardan kısa olmalı" açıklaması | KAPANDI | esitsizlik-aralik satır 2854 ve tamsayi satır 2904 yeni cümle; değerler (d < x < b, b − 1) inançla örtüşüyor. |
| K2 180°'nin üstündeki çeldiriciler | KAPANDI | dis-aci-toplam'da 540 − e1 − e2 yerine 180 − e1 geldi. ic-aci'deki 360 − A − B kalktı; ic-aci'nin bütün şıkları 180°'nin altında. dis-aci-toplam'da yalnız e1 + e2 hep 180°'nin üstünde, bu kabul edilebilir. |
| K3 hesaplanan açı hiç en küçük değil | KAPANDI | Yeniden çekme yok; t0, t1, t3 U'nun en küçük/en büyük olduğu örnekler. aci-kenar-x'te de örnek atılmıyor. |
| K4 esitsizlik-aralik kontrol satırı | KAPANDI | Alt sınır satırı eklendi, test değeri d + 1. Küçük artık durum: Y1. |
| K5 deniz km ölçeği | KAPANDI | 2-5 km. |

**Müfredat:** `mat-u3` bloğunda Pisagor, hipotenüs, karekök, √, ², "kenar karesi" geçmiyor (grep: yalnız satır 2511 ve 2586'daki kod yorumları). "dik" yalnız "dik konumdadır" ve yorumdaki "dik üçgen" olarak geçiyor. Dik üçgene özgü bir kural kullanılmıyor.

## Bulgular

### KÜÇÜK

**Y1. esitsizlik-aralik: kenarlar {2, 3} iken iç test değeri yine bilinen kenara eşit**
- Yer: `mat-u3-esitsizlik-aralik` satır 2871. Örneklerde çıkmadı; koddan çıkarıldı.
- a = 2, b = 3 ise d = 1 ve d + 1 = 2 = a olur, bu yüzden x = d + 2 = 3 = b seçilir. Satırlar "x = 3 için 2 + 3 = 5 > 3" ve "2 + 3 = 5 > 3" olur; K4'teki görünüm geri gelir. Olasılık yaklaşık %3 (deniz kipinde 1/9).
- Benzer görünüm: esitsizlik-tamsayi enk kipinde b = 2a − 1 iken x = d + 1 = a olur (ör. 4 ve 7, x = 4): birinci ve üçüncü satır ikisi de "11 > 4".
- Karar: DOĞRU (matematik), anlatım zayıf.
- Öneri: d < v < s aralığında a'ya ve b'ye eşit olmayan ilk tam sayıyı seç ({2, 3} için 4).

**Y2. ic-aci yelken: 90°'nin gerekçesinde ara adım yazılmamış**
- Yer: `mat-u3-ic-aci` satır 2610 (t0, t4 çözüm 1. adım).
- "Direk güverteye dik konumda; direk ile bumba arasındaki açı 90°." Verilen dik açı direk ile güverte arasında. Bumba ile ilişki "bumba yatay, güverteyle aynı doğrultuda" bilgisinden çıkıyor ama bu yazılmamış. Zayıf okuyucu buradaki atlamayı görmeyebilir.
- Karar: DOĞRU, gerekçe eksik.
- Öneri: "Direk güverteye dik; bumba yatay, yani güverteyle aynı doğrultuda. Bu yüzden direk ile bumba arasındaki açı 90°."

**Y3. dis-aci-toplam: düz ABC kipinde çeldirici açıklaması "birinci/üçüncü köşe" diyor**
- Yer: `mat-u3-dis-aci-toplam` satır 2642-2643. Görüldüğü örnek: düz kip (bağlamsız) seçildiğinde. 6 örnekte düz kip yok, koddan çıkarıldı.
- Kökte "A köşesindeki dış açı ... C köşesindeki" yazıyor, açıklamada ise "birinci köşedeki iç açı", "üçüncü köşedeki iç açı". Değer doğru, adlandırma kökle uyuşmuyor.
- Karar: DOĞRU, metin tutarsız.
- Öneri: `T.bag` boşsa "A köşesindeki" ve "C köşesindeki" yaz.

**Y4. Test: mat-u3 sayı cevaplarında cümle ortasındaki "= d" sızıntısı yakalanmıyor**
- Yer: `tools/uretec_test.mjs` satır 34-38 ve 56.
- `sayiKalip` karakter sınıfı `[≤≥<>]` içinde "=" yok. "... = 65°. Şimdi ..." gibi cümle ortasındaki eşitlik yakalanmıyor. ° işareti olmadan "m(ACB) = 65 olur, şimdi ..." yazımı da kaçıyor; uç kontrolü yalnız son "=" sonrasının tamamı sayıysa çalışıyor.
- Karar: test açığı. Bugün sızıntı yok (12 şablon elle kontrol edildi).
- Öneri: mat-u3 için `new RegExp("=\\s*" + SAYI_SINIR + kacis(String(g.deger)) + "°?" + SAYI_SON)` kalıbını ekle.

**Y5. Test: yasak sözcük listesi karekök ve kare işaretlerini kapsamıyor**
- Yer: `tools/uretec_test.mjs` satır 69, `/Pisagor|hipotenüs|doğrusal|dahil/i`.
- Kodun başındaki yorum (satır 2511) "kenar karesi ve karekök yok" diyor, ama test bunu sınamıyor. Bugün metinlerde yok.
- Öneri: listeye `karekök|√|²` ekle.

### Gözlemler (bulgu değil)

- ic-aci yelken "90° unutulmuş" `okuma_hatasi` etiketli. Sözlükteki tanım "istenenin dışında bir şeyi bulmak"; bu durum daha çok verilen bilgiyi atlamak. Tur 1'de kabul edildi, isteğe bağlı.
- "Çıkarılır, eklenmez" işlem yönü hataları `isaret_hatasi` etiketli. Sözlükteki tanım "negatif işareti kaybetmek"; Ünite 2'den beri aynı kullanım, tutarlılık için dokunulmamalı.

## Kontrol edilemeyenler

- `git diff tools/uretec_test.mjs` alınamadı (Bash yok). Önceki sürümle satır satır fark çıkarılamadı; güncel kod denetlendi.
- Testler çalıştırılmadı. "300 tohum 12/12" sonucu çağıranın beyanıdır.
- Kitap sayfaları açılmadı. Bu tur üreteç mantığı denetimi; `kaynak.sayfa` alanları tur 1'den beri değişmedi.

## docs/dogrula.md için yeni madde

Yok.

## KARAR: TEMİZ

KRİTİK 0, ÖNEMLİ 0; yayın engeli yok. Y1-Y3 kısa metin ve seçim düzeltmeleridir. Y4-Y5 test sağlamlaştırmasıdır ve sonraki turda yapılabilir.
