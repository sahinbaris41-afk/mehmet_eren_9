# Doğruluk denetimi: matematik-u3-k1 (9.3.1) parametrik üreteçleri

Tarih: 2026-10-31 · Denetçi: doğruluk denetçisi (salt okur)
Kapsam: `panel/motor/uretecler/matematik.js` satır 2507-3180, 12 üreteç (`mat-u3-*`). Her üreteçten tohum 0-5, toplam 72 örnek çıktı (`scratchpad/u3k1_uretec_ornekleri.txt`).
Referans: kart `dersler/matematik/konular/matematik-u3-k1.json` (surum 3), banka `dersler/matematik/sorular/matematik-u3-k1.json`, hata_turu sözlüğü `.claude/skills/soru-yazim-kurallari/SKILL.md`.

## Özet

| Düzey | Sayı |
|---|---|
| KRİTİK (yanlış bilgi / yanlış anahtar) | 0 |
| ÖNEMLİ (kaynaksız / müfredat dışı) | 0 |
| KÜÇÜK | 5 |

72 örneğin hepsini bağımsız olarak çözdüm. Doğru şık her örnekte doğru ve tek. Çeldirici değerlerinin hepsi açıklamadaki hatalı yolu uygulayınca gerçekten o sayıyı veriyor (aşağıdaki K1'de anlatılan ince uyumsuzluk dışında). Hiçbir örnekte doğruya eşit ya da ikinci savunulabilir doğru şık yok. Kodda geçersiz üçgen üretebilen parametre yolu bulmadım.

## 1. Örnek çıktıların çözümü (tohum 0-5)

| Üreteç | Sonuç | Not |
|---|---|---|
| ic-aci | 6/6 doğru | Yelken bağlamı (tohum 0, 4): 90° direk-bumba açısı doğru kuruluyor; 180 − B = 160°/115° çeldiricisi "90° unutulmuş" yoluyla gerçekten çıkıyor. |
| dis-aci-toplam | 6/6 doğru | e3 = 360 − e1 − e2; 540 − e1 − e2 ve iç açı C çeldiricileri açıklamalarla tutarlı. |
| aci-x | 6/6 doğru | Örnek: t0 dış 10x + 40 = 360, x = 32, en büyük 133°. Ezber (toplam 180): x = 14, en büyük 72°. Tamam. t1 işaret: 5x = 200, x = 40 değil, hatalı 5x = 160 → x = 32 → 69°. Tamam. t2/t3/t4/t5 işaret ve 180/360 çeldiricilerini tek tek hesapladım (76, 148, 78/133, 103/139); hepsi tutuyor. |
| dis-aci | 6/6 doğru | A + C ve B + C, `dis_aci_komsu`; \|A − B\| kavram; C okuma. |
| dis-aci-ters | 6/6 doğru | E + A (toplama/çıkarma karışıklığı): t0 65 + 45 = 110, t4 105, t5 155. 2E − 180 = E − m(ACB) yolu (komşu açıyı toplamaya katmak): t1 30, t2 110, t3 50, t5 50. 180 − A = B + C. Hepsi tutuyor. |
| dis-aci-x | 6/6 doğru | x3 (işaret), x4 (ACD'yi iç açı sanmak, 180 − E), x5 (E = m(ABC) + m(ACB)) değerleri doğru: t0 28/8, t1 33/27, t2 8/82, t3 34/11, t4 40/30, t5 32/145. |
| esitsizlik-aralik | 6/6 doğru | d < x < s doğru; ≤ (aralik_uc), 0 < x < s, b < x < s (a çıkarılmamış) tutuyor. d < x < b için bkz. K1. |
| esitsizlik-tamsayi | 6/6 doğru | t0 13 (s − d = 14, s − 1 = 21, a − 1 = 6); t1 23; t2 16; t3 14; t4 en küçük 10 (d = 9, "1" yalnız toplam sınırı); t5 15. b − 1 için bkz. K1. |
| aci-kenar | 6/6 doğru | Açı→kenar (t0) ve kenar→açı (t1-t5) sıralamaları doğru. UC1/UC2 iki ayrı döngüsel kaydırma, her konumda karşı kenardan farklı; ters sıralı şık da her zaman farklı. Dört şık birbirinden ve doğrudan ayrı. |
| aci-kenar-hesap | 6/6 doğru | Üçüncü açılar doğru (60, 60, 65, 50, 40, 50). `eksik_adim` şıkkı t2/t3/t4/t5'te doğru sırayı veriyor. |
| aci-kenar-x | 6/6 doğru | x: 28, 33, 11, 25, 26, 19. Açılar (79,68,33), (23,101,56), (74,26,80), (95,60,25), (41,63,76), (28,106,46). Sıralamalar doğru; katsayı sırası çeldiricisi doğru kuruluyor. |
| aralik-daraltma | 6/6 doğru | t0 2 (5 < x < 8), t1 9, t2 6 (8 < x < 15), t3 2, t4 6, t5 9. aci_kenar_eslesme (komşu kenarla kıyas), aralik_uc (n + 1), ucgen_esitsizligi_atlama (k − 1) değerleri doğru. |

## 2. Parametre aralıkları ve kontrol fonksiyonları

- **Geçerli üçgen:** ic-aci, dis-aci-toplam, dis-aci, dis-aci-ters, ucAciUret: A, B 5'in katı ve 20°'den büyük ya da eşit, C = 180 − A − B ≥ 20. xUret: açılar [lo, hi] içinde, toplam T. dis-aci-x: iki iç açı ≥ 15, C ≥ 15. Açı ≤ 0 ya da toplam ≠ 180 çıkamaz.
- **Kenarlar:** ikiKenar a ∈ [2, 12], b ∈ [a + 1, min(a + 12, 20)], a ≠ b. aci-kenar kenar kipi: L > max(u), L ≤ u0 + u1 − 1, L ≤ 20, üç kenar farklı. aralik-daraltma: a ≠ b, n ≥ 2, büyük kipinde k > \|a − b\|. Eşitsizliği bozan kenar çıkamaz.
- **Köşe-karşı kenar eşlemesi:** KARSI = {A: BC, B: AC, C: AB}, KOSE tersi. aralik-daraltma'da B'nin karşısı AC = x, A'nın karşısı BC = b, C'nin karşısı AB = a: doğru.
- **Açık/kapalı uç:** Bütün doğru cevaplar açık aralık; tam sayı sayımları s − d − 1, en büyük s − 1, en küçük d + 1. Doğru.
- **Kontrol fonksiyonları:** Hepsi doğru cevabı formülden bağımsız bir yoldan hesaplıyor: deneme döngüsü, yarım adım taraması, harften karşı kenar bulma, 180 − C. Doğru şeyi sınıyorlar. **Sınır:** yalnız doğru cevabı sınıyorlar. Çeldiricilerin hatalı yolu ve hata_turu uyumu selftest kapsamında değil; o kısım bu denetimde elle doğrulandı.

## 3. "Kontrol:" satırları

- Açı toplamı satırları her örnekte doğru sayılarla basılıyor (ör. aci-x t0: 133 + 101 + 126 = 360, iç açılar 47 + 79 + 54 = 180).
- Sınır satırları doğru: esitsizlik-* "x = s için k1 + k2 = s > s doğru değil"; tamsayi enk "x = d için a + d = b > b doğru değil" (bağlayıcı eşitsizlik doğru seçilmiş); aralik-daraltma "x = k olsaydı iki açı eşit". Sınırların dâhil olmadığı her yerde doğru söyleniyor.
- Üçgen testi tamsayi'de s − 1 ya da d + 1 ile, aralik-daraltma'da lo + 1 ile yapılıyor; bunlar aralıktaki geçerli değerler. esitsizlik-aralik için bkz. K4.

## 4. Birim ve bağlam

- aci-kenar kenar kipinde köy bağlamı `cm → km` dönüşümüyle basılıyor; sac bağlamı cm. Aynı soruda birim karışıklığı yok. Çözüm satırları birimsiz sayılar kullanıyor.
- Ölçüler gerçekçi: halı saha 3-20 m, vinç 2-20 m, sac en çok 20 cm, köyler 3-20 km. Deniz bağlamındaki km ölçeği için bkz. K5.

## 5. Müfredat ve gösterim

- Kodda ve çıktılarda Pisagor, hipotenüs, karekök, kare yok; dar/geniş açıdan kenar sınırı çıkaran bir soru da yok. "dik üçgen" yalnız kod yorumunda geçiyor.
- Gösterim kartla aynı: m(BAC), \|AB\|, "x = 32°" yazımı (kart s.84, 273 aynı biçim), "toplam sınırı / fark sınırı / kesişim / dâhil değildir" (kart 889-1009).
- hata_turu etiketleri sözlükte var ve bankayla aynı kullanılıyor: 360/180 karışıklığı `ezber_karisikligi` (banka 201, 391), ters sıra `kavram_karisikligi` (banka 580, 636).
- kaynak.sayfa alanları kartın kitap_sayfa alanlarıyla tutarlı: ic-aci 175-176, 180-181 (kart 247); dis-aci-toplam 177, 178, 184 (345); dis-aci* 178-180, 184 (422); esitsizlik-tamsayi 187-188, 197 (876); aci-kenar* 174, 184-186, 190 (608, 705); aralik-daraltma 188, 194, 196 (960); esitsizlik-aralik 186-188, 197 (789 + 876 birleşimi).

## Bulgular

### KÜÇÜK

**K1. "Üçüncü kenar uzun olamaz" çeldiricisinde değer ile açıklama tam örtüşmüyor**
- Yer: `mat-u3-esitsizlik-aralik` d < x < b şıkkı (her tohum; ör. t0 "1 < x < 5", t5 "9 < x < 18"); `mat-u3-esitsizlik-tamsayi` enb kipi b − 1 şıkkı (t2 "11", t5 "11").
- İddia: açıklama "Üçüncü kenar bilinen kenarlardan uzun olabilir; üst sınır iki kenarın toplamıdır." Bu cümle "x > b olamaz", yani x ≤ b inancını düzeltiyor.
- Sorun: Bu inançla giden öğrenci x = b'yi de kabul eder; d < x ≤ b ve en büyük tam sayı b bulur. Şıktaki değerler (açık uç b, b − 1) ise "x, uzun kenardan **kısa** olmalı" inancına karşılık geliyor.
- Karar: DOĞRU (anahtar), açıklama BELİRSİZ.
- Öneri: Açıklamayı şöyle değiştir: "Üçüncü kenarın uzun kenardan kısa olması gerekmez; x, b'den büyük de olabilir. Üst sınır iki kenarın toplamıdır." Değerlere dokunma.

**K2. dis-aci-toplam'da çeldiricilerin ikisi her zaman 180°'nin üstünde**
- Yer: `mat-u3-dis-aci-toplam`, bütün tohumlar (t0: 295°, 245°; t2: 325°, 215°).
- e1 + e2 = 180 + C ve 540 − e1 − e2 = 180 + e3, ikisi de her zaman 180°'den büyük. Dış açının 180°'den küçük olduğunu bilen öğrenci bu iki şıkkı hemen eler; soru fiilen iki seçenekli kalır. ic-aci'de de 360 − A − B = 180 + C şıkkı her zaman 180°'nin üstünde (t0 250°, t1 240°).
- Karar: DOĞRU (bilgi), çeldirici gücü zayıf.
- Öneri: dis-aci-toplam'da birini 180°'nin altında kalan bir hatayla değiştir. Örnek: 180 − e1 = A, "birinci köşedeki iç açı bulunmuş" (okuma_hatasi). ayri() kontrolü korunur.

**K3. aci-kenar-hesap'ta hesaplanan açı hiçbir zaman en küçük açı değil**
- Yer: `mat-u3-aci-kenar-hesap`, satır 3058-3061.
- U en küçük açıysa `eks === dogru` olur, ayri() başarısız olur ve örnek yeniden çekilir. Bu yüzden üretilen hiçbir soruda verilmeyen açı en küçük değil. Öğrenci "hesaplanan açı en küçük olmaz" diye bir desen öğrenebilir. aci-kenar-x'te de benzer durum var: katsayı sırası hiçbir zaman doğru sıra değil.
- Karar: DOĞRU, dağılım yanlı.
- Öneri: U en küçükse yeniden çekmek yerine başka bir eksik_adim modeli kullan (ör. "U en büyük sayılmış").

**K4. esitsizlik-aralik "Kontrol:" satırı x = b ile yapılıyor; alt sınır hiç test edilmiyor**
- Yer: `mat-u3-esitsizlik-aralik` satır 2867-2868, bütün tohumlar. t0'daki satır: "x = 5 için 4 + 5 = 9 > 5, 4 + 5 = 9 > 5, 5 + 5 = 10 > 4".
- Test değeri bilinen kenarlardan birine eşit. Bu yüzden ilk iki eşitsizlik aynı görünüyor, ki bu zayıf okuyucuyu şaşırtır. "Kontrol, sınır" satırı da yalnız üst ucu (s) sınıyor; alt uç d için bir satır yok (tamsayi enk kipinde var).
- Karar: DOĞRU (matematik), anlatım zayıf.
- Öneri: Test değerini d + 1 yap (b'ye eşitse d + 2). Bir satır daha ekle: "x = d için a + d = b > b doğru değil; d aralıkta yok."

**K5. Deniz bağlamlarında km ölçeği gerçekçi olmayabilir**
- Yer: `mat-u3-esitsizlik-aralik` iskele/şamandıra/barınak (t0, t3, t4: 9-15 km); `mat-u3-esitsizlik-tamsayi` iskele/şamandıra/fener (en çok 20 km).
- "Gölcük açıklarında" iskeleden 15-20 km uzaktaki bir şamandıra körfez ölçeğine pek uymuyor. "(Sayılar kurgusaldır.)" notu var.
- Karar: BELİRSİZ.
- Öneri: Bu iki bağlamda kenarları 1-5 km'ye sınırla ya da birimi "yüz metre" yerine m kullanacak biçimde değiştir. İsteğe bağlı.

### Diğer gözlemler (bulgu değil)

- dis-aci-ters'te E + A çeldiricisi `kavram_karisikligi` etiketli. Açıklama hatalı işlemi sayıyla göstermiyor. "65° + 45° = 110° bulunmuş; bilinen iç açı dış açıdan çıkarılır" biçimi tek cümlelik geri bildirim kuralına daha iyi uyar. İsteğe bağlı.
- xUret'in son sabiti 5'in katı değil (−59°, −23°, +58°). Matematiksel sorun yok; yalnız görünüş.

## Kontrol edilemeyenler

- Kitap sayfa metinleri (`kaynaklar/meb/matematik/metin/...`) bu turda açılmadı. Sayfa tutarlılığı, surum 3 olarak denetimden geçmiş kartın kitap_sayfa alanlarına göre kontrol edildi.
- Panelin 4 çeldiriciden 3'ünü nasıl seçtiği incelenmedi. Örneklerde bazı çeldiriciler görünmüyor (ör. aci-x t0 işaret şıkkı); bunlar koddan hesaplanarak doğrulandı.

## docs/dogrula.md için yeni madde

Yok.

## KARAR: TEMİZ

Yayın engeli yok (KRİTİK 0, ÖNEMLİ 0). K1 ve K4 kısa metin düzeltmeleridir; K2 ve K3 çeldirici kalitesini iyileştirir. Bunlar sonraki turda yapılabilir.
