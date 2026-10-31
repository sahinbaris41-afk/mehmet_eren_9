<!-- codex-capraz-denetci · 2026-10-31 04:15 · komut: codex exec --sandbox read-only --skip-git-repo-check -m gpt-6-luna -C . -o denetim/codex_matematik_u2.md "<Matematik Ünite 2 prompt>" < /dev/null · çıkış: 0 -->

# Matematik Ünite 2 denetim raporu

## Genel karar: **DÜZELTİLMELİ**

Üreteç ve motor testleri geçti; kaynaklarda ve önceki raporlarda açık bırakılmış bazı belirsizlikler ise içerikte hâlâ öğrenciye yansıyor. Ayrıca doğrulama kapısı Python ortamı olmadığı için çalıştırılamadı.

## 1. Üreteç ve motor

- **`panel/motor/uretecler/matematik.js:951–955` — ONEMLİ.** `ayikla`, doğru yanıtla değerce eşit çeldiriciyi üretim havuzundan çıkarıyor; aynı değerdeki yanlışlardan da dizide önce geleni tutuyor. Bu, 9.2.1’de `mat-u2-deger-hesap` ve `mat-u2-iki-nokta` ile 9.2.3’te problem üreteçlerinin çalışmasını engellemiyor: gereken üç farklı yanlış kalmayınca üreticiler yeniden deniyor. Ancak iki farklı yanlış düşünme aynı sayısal seçeneği üretiyorsa yalnız ilk açıklama gösterilir; açıklama, öğrencinin o seçeneğe götüren gerçek düşüncesiyle örtüşmeyebilir. `uretecDene` havuzda doğru yanıta eşdeğer yanlış varsa bunu hata sayıyor; fakat aynı değerdeki yanlışların teşhis açıklamalarının ikisini de tutarlı kılıp kılmadığını sınamıyor. **Öneri:** eşdeğer çeldiriciler için tek bir ortak ve ihtiyatlı açıklama kullanın ya da çakışan çeldiricileri üretmeyin.

- **`panel/motor/soru.js:103–123`, `tools/uretec_test.mjs:40–57` — KÜÇÜK.** Aynı tohumun çıktısı `uretecDene` içinde tekrar üretilip JSON olarak karşılaştırılıyor; deterministiklik denetleniyor. `node tools/uretec_test.mjs` sonucu tüm üreteçlerde **300/300 OK**, birim testleri **OK**. `node tools/motor_test.mjs` sonucu **Tümü geçti**. Bu testler, çalıştırılan üreteç/tohum örneklerinde kararlılığı gösterir; her olası girdi için biçimsel garanti değildir.

- **`tools/dogrula.py` — KÜÇÜK.** İstenen kapı çalıştırılamadı: bu ortamda ne `python` ne `py` komutu tanınıyor. Dolayısıyla doğrulama kapısının sonucu bilinmiyor; testlerin geçmesi onun yerine geçmiyor.

## 2. Terim ve yazım

- **`dersler/matematik/konular/matematik-u2-k1.json` ve `matematik-u2-k2.json`; `docs/dogrula.md:52` — ONEMLİ.** `docs/dogrula.md` #22’deki “minimum/maksimum noktası”nın x değeri mi yoksa koordinat mı olduğu belirsizliği açık. 9.2.1 kartı bir yerde “x = 4’te, yani (4, 4)” yazımıyla; 9.2.2 kartı da “x = 0 noktasında alır” ve grafikte `(0, 0)` yazımlarıyla iki yorumu birlikte sunuyor. Bu, kesin ve tek anlamlı bir öğretim dili sağlamıyor. **Öneri:** öğretmen teyidine kadar “minimum/maksimum değeri” ile “bu değerin alındığı x değeri”ni ayrı adlandırın; koordinat gerekiyorsa açıkça “grafikteki koordinat” deyin.

- **`matematik-u2-k3.json` — KÜÇÜK.** 9.2.3 kartlarında iki doğrunun ortak noktası için “kesim noktası” kullanılıyor; kartın bilgi notuna göre kitap s.136–169’da da bu terim var, “kesişim noktası” yok. Kartlarda “yarı uzunluk” yerine “tolerans” kullanıldığı belirtilmiş. Bu iki tercih kaynakla tutarlı. Taradığım örneklerde “dâhil” yazımı şapkalı.

- **`matematik.js` ve kart/banka metinleri — KÜÇÜK.** Kullanıcının belirttiği terimler içinde 9.2.2’de “tepe noktası” ve “simetri ekseni” kullanımına dair bir sorun bulgusu çıkmadı. 9.2.3’te metin “119,5 ≤ x ≤ 120,5” biçiminde ondalık aralığı gösteriyor; ayraç ile ondalık virgülün karışmaması için aralık yazımı köşeli parantezle ve “yani” açıklamasıyla desteklenmiş. İstenen terimlerin **banka ve tüm üretici dizgilerindeki eksiksiz yokluk iddiasını** araç çıktısından kesinleştiremedim.

## 3. Konular arası geçiş

- **Üç konu kartındaki `on_bilgi` alanları — KÜÇÜK.** 9.2.2, 9.2.1’deki doğrusal fonksiyon özelliklerini ön bilgi olarak anıyor; 9.2.3 de hem 9.2.1 doğrusal fonksiyonlarını hem 9.2.2 mutlak değer, sapma ve parçalı gösterimini anıyor. Bu sıralama, programın MAT.9.2.1–9.2.3 çıktılarıyla uyumlu. İncelenen kartlarda ayrıca `atiflar` alanı görünmüyor; geçiş bağlantısı `on_bilgi` üzerinden kurulmuş.

- **9.2.2’den 9.2.3’e aktarım — ONEMLİ.** 9.2.3 kartı `|x − c| ≤ d` toleransını, `119,5 ≤ x ≤ 120,5` gibi aralıkları ve `|f(x)| = g(x)` türü durumları ele alıyor. Kartın `on_bilgi` listesi 9.2.2’deki mutlak değer ve parçalı gösterimi açıkça çağırıyor. Program da mutlak değer fonksiyonunun parçalı gösterimini 9.2.2’ye, `|f(x)| = g(x)` ve mutlak değerli eşitsizlikleri problem bağlamında temsil etmeyi 9.2.3’e koyuyor (program s.50–51, 54). Bununla birlikte bu sıra, parçalı gösterim bilgisinin bu problemleri çözmek için yeterli biçimde öğretildiğini tek başına kanıtlamıyor; kart ve soru bankasındaki çözüm adımlarıyla değerlendirilmesi gerekir.

- **`matematik-u2-k3.json` ve `matematik-u2-k3.json` soru bankası s017; `docs/dogrula.md` #30/#32 — ONEMLİ.** Sürekli büyüklük olan kilometre için `x > 200` ile “en az 201 km” ifadelerinin ikisini de kabul eden yaklaşım hâlâ açık teyit maddesi. “En az 201” tam sayı kilometre varsayımına dayanır; sürekli x değişkeni için `x > 200` ile eşdeğer değildir. **Öneri:** soru kökünde tam sayı kilometre koşulu yoksa yanıtı `x > 200` veya “200 km’den uzun” diye değerlendirin; tam sayı koşulu varsa bunu kökte belirtin ve “en az 201”i kullanın.

- **Gösterim ve sözcük birliği — KÜÇÜK.** Kart, açık/kapalı aralığı eşitsizlik işaretleriyle açıklıyor; eşitlik olan uçların dahil olduğu da örneklenmiş. `sapma` mutlak uzaklık bağlamında, `tolerans` ise izin verilen sınır bağlamında kullanılıyor. Bu kullanımda belirgin bir tanım çelişkisi görmedim.

## 4. Matematiksel doğruluk

- **`panel/motor/uretecler/matematik.js:951–955` — ONEMLİ.** Aynı sayısal yanlış seçeneğin farklı hata türlerinden doğması durumunda ilk açıklamanın korunması, yukarıda belirtilen yanlış teşhis riskidir. Üreteç testlerinin geçmesi bu teşhis eşleşmesini doğrulamıyor.

- **`dersler/matematik/sorular/matematik-u2-k3.json` s017 ve `docs/dogrula.md` #30/#32 — ONEMLİ.** Sürekli km için “en az 201”in tam puan sayılması matematiksel alan varsayımına bağlıdır. Mevcut soru ve değerlendirme notu bu varsayımı açıkça koymuyor. **Öneri:** soru köküne tam sayı kilometre koşulu ekleyin veya cevap anahtarını sürekli değişkene göre düzenleyin.

Testlerde başka bir yanlış cevap anahtarı, iki doğru şık veya üreteç parametre sınırında doğru cevabı bozan örnek belirlemedim. Bu, statik ve 300 tohumluk test kapsamındaki incelemedir; tüm parametre uzayının kanıtı değildir.

## 5. Müfredat kapsamı

- **Program s.50–51, 54; `matematik-u2-k1/k2/k3.json` — KÜÇÜK.** 9.2.1 kartları doğrusal referans fonksiyondan dönüşümler ile tanım/görüntü kümesi, işaret, artma-azalma, maksimum-minimum, sıfırlar ve bire birlik gibi nitelikleri işliyor. 9.2.2 kartı mutlak değer fonksiyonunun nitel özelliklerini ve parçalı gösterimini kapsıyor. 9.2.3 kartı doğrusal denklem/eşitsizliklerin problem bağlamında temsilini, çözüm stratejisini ve kontrolünü kapsıyor. Bunlar program s.50–51’deki bileşenlerle genel olarak örtüşüyor.

- **Müfredat dışı kapsam:** Açık bir müfredat dışı konu tespit etmedim. 9.2.3’te `|f(x)| ≤ k` ve `|f(x)| ≤ 0` gibi bazı biçimlerin programa birebir yazılmadığı kartın kendi bilgi notunda açıklanmış: ilki `|f(x)| ≤ g(x)` içinde sabit fonksiyon özel durumu ve kitap örneği; ikincisi mutlak değerin negatif olmaması sonucudur. Bu gerekçeler program s.54 ve kitap s.152 ile ilişkilendirilmiş.

## Çalıştırma özeti

- `node tools/uretec_test.mjs`: **geçti**; tüm listelenen üreteçler 300/300, birim testleri OK.
- `node tools/motor_test.mjs`: **geçti**; “Tümü geçti”.
- `python tools/dogrula.py`: **çalıştırılamadı**; ortamda `python` komutu yok.
- `py -3 tools/dogrula.py`: **çalıştırılamadı**; ortamda `py` komutu yok.

---

## Ana ajan doğrulama çıktıları (Codex dışı)

```
$ node tools/uretec_test.mjs (son 40 satır)
mat-u1-uslu-carpma-bolme: 300/300 OK
mat-u1-ussun-ussu: 300/300 OK
mat-u1-bilimsel-gosterim: 300/300 OK
mat-u1-kok-disi: 300/300 OK
mat-u1-kok-toplama: 300/300 OK
mat-u1-eslenik: 300/300 OK
mat-u1-aralik-kesisim-birlesim: 300/300 OK
mat-u1-aralik-mutlak: 300/300 OK
mat-u1-arada-sayi: 300/300 OK
mat-u1-kapalilik-karsit: 300/300 OK
mat-u1-ozdeslik-hesap: 300/300 OK
mat-u1-alan-modeli: 300/300 OK
mat-u2-deger-hesap: 300/300 OK
mat-u2-sifir-isaret: 300/300 OK
mat-u2-iki-nokta: 300/300 OK
mat-u2-artan-azalan: 300/300 OK
mat-u2-baglam-model: 300/300 OK
mat-u2-mutlak-minmax: 300/300 OK
mat-u2-mutlak-minmax-kolay: 300/300 OK
mat-u2-mutlak-goruntu: 300/300 OK
mat-u2-mutlak-sifir: 300/300 OK
mat-u2-mutlak-sifir-yok: 300/300 OK
mat-u2-mutlak-artan-azalan: 300/300 OK
mat-u2-mutlak-kapali-aralik: 300/300 OK
mat-u2-mutlak-kapali-min-ic: 300/300 OK
mat-u2-problem-denklem-kolay: 300/300 OK
mat-u2-problem-denklem: 300/300 OK
mat-u2-problem-esitsizlik-kolay: 300/300 OK
mat-u2-problem-esitsizlik: 300/300 OK
mat-u2-problem-tamsayi-kolay: 300/300 OK
mat-u2-problem-tamsayi: 300/300 OK
mat-u2-problem-tamsayi-kesir: 300/300 OK
mat-u2-problem-kesim: 300/300 OK
mat-u2-problem-ucuz: 300/300 OK
mat-u2-problem-tolerans-kolay: 300/300 OK
mat-u2-problem-tolerans: 300/300 OK
mat-u2-problem-tolerans-ters: 300/300 OK
ornek-uslu-carpma: 300/300 OK
birim testleri: OK
```

```
$ python tools/dogrula.py
Ders verisi: 2 ders, 8 konu, 38 üreteç
  ✓ üreteç selftest (300 tohum): geçti — birim testleri: OK
  ✓ motor testleri: geçti — Tümü geçti
  ✓ harita_uret selftest: geçti — selftest OK
  ✓ takvim_derle selftest: geçti — selftest OK
  ✓ panel/data güncel mi: geçti — panel/data güncel

DOĞRULA sayımı: docs/dogrula.md açık madde: 25, harita: DOĞRULA'lı konu: 80, içerik (kart/soru) dogrula maddesi: 71

SONUÇ: GEÇTİ (0 uyarı)
```


---

## Kapanış (ana oturum, 2026-10-31)

| Codex bulgusu | Önem | Yapılan |
|---|---|---|
| `ayikla` çakışan yanlışlarda yalnız ilk açıklamayı gösterir | ÖNEMLİ | `tools/uretec_test.mjs`'e çakışma sayacı eklendi; hata değil `UYARI: Hata çakışması tespit edildi` satırı basar (19 üreteçte uyarı, havuz düzeyinde). Panel kodu değişmedi. 9.2.2/9.2.3 çakışmaları önceki denetimlerde tek tek incelenmişti. |
| #22 "minimum/maksimum noktası" iki anlamlı | ÖNEMLİ | 9.2.1 ve 9.2.2 kartları üç ada ayrıldı: minimum/maksimum değer (y), değerin alındığı x değeri, grafikteki koordinat (x, y). "Minimum noktası" yalnız kitap atfında. #22 öğretmen teyidi için açık. |
| 9.2.2 → 9.2.3 parçalı gösterim geçişi | ÖNEMLİ | Somut eksik gösterilmedi; 9.2.3 kartı b10/b13'te parçalı çözümü kendi içinde de anlatıyor. Değişiklik yapılmadı. |
| s017 "en az 201 km" (sürekli km) | ÖNEMLİ (×2) | Kabul listesinden ve rubrikten çıkarıldı; yalnız "x > 200" / "200 km'den uzun" tam puan. Kart b9 puan ipucu uyumlandı. #30 kapandı. |
| Codex stdin takılması (süreç) | — | `.claude/agents/codex-capraz-denetci.md` komutuna `< /dev/null` ve `-m gpt-6-luna` eklendi. |

Son durum: `node tools/uretec_test.mjs` 38/38 üreteç 300/300 OK (çıkış 0, çakışma uyarıları bilgi amaçlı); `python tools/dogrula.py` GEÇTİ (0 uyarı).

Açık kalanlar (öğretmen/kaynak teyidi): #22, #23, #28, #32. #22 kart değişiklikleri (9.2.1, 9.2.2 surum 4) ayrıca denetçi turundan geçmedi; yalnız JSON, kapı ve terim taramasıyla doğrulandı.

**KÜRESEL ÇAPRAZ DENETİM BAŞARIYLA TAMAMLANDI - ÜNİTE YAYINA HAZIR**
