# Üreteç denetimi · Matematik 9.2.2 Mutlak değer fonksiyonu · Tur 2 · Doğruluk (2026-10-30)

Denetçi: dogruluk-denetcisi (salt okur).
Denetlenen: `panel/motor/uretecler/matematik.js` satır 1400–1853. 8 kayıt: `mat-u2-mutlak-minmax` (2), `-minmax-kolay` (1), `-goruntu` (2), `-sifir` (2), `-sifir-yok` (1), `-artan-azalan` (2), `-kapali-aralik` (3), `-kapali-min-ic` (2). Ortak `ayikla`/`tekilSay` (953–955). Motor: `panel/motor/soru.js` `insa` (34–55).
Kanıt: ana oturumun 300 tohum taraması (`scratchpad/uretec_tarama_u2k2_tur2.md`) ve `denetim/uretec_ornekleri_u2k2.md`. Kitap karşılaştırması tur 1'deki gibi (s.126–127, 134). Matematik içeriği değişmediği için kitap yeniden açılmadı.

## 1. Tur 1 bulgularının durumu

| Kod | Önem | Durum | Kanıt |
|---|---|---|---|
| U2D-01 | ÖNEMLİ | **KAPANDI** | `ayikla` (954) artık değerce önce gelen yanlışı bırakıyor. `insa` karıştırmadan önce elenecek değer kalmıyor, açıklama tohuma bağlı değil. Ayrıntı §2. |
| U2D-02 | ÖNEMLİ | **KAPANDI** | 1812: `k − min(L, R)` → `eksik_adim`, "Yalnız uçlar karşılaştırılmış. İçi 0 olan x = h noktası da aralıktadır…". Dizide ilk sırada. |
| U2D-03 | ÖNEMLİ | **KAPANDI** | 1614: `isaret_hatasi`, "\|x + 3\| = −3 yerine \|x + 3\| = 3 çözülmüş; eksi işareti kaybolmuş." `f(x0 + dd)` = ±2K, tohum 0/1/6 elle doğrulandı (−6, 10, −6). |
| U2D-04 | KÜÇÜK | **KAPANDI** | 1746–1762: hedef {120, 150, 180, 200, 250} mm, L, R ∈ [1, 6] (ctx) → hedef açık aralığın içinde; "En büyük sapma yoktur." + `maksimum_varlik`; okuma_hatasi bağlam dili ("182 mm parçanın boyudur; soru sapmayı istiyor"). |
| U2D-05 | KÜÇÜK | **KAPANDI** | "dışarıdaki sayıdan gelir" metni kaldırıldı. x0 şıkkı artık "Soru x'i değil, f'nin değerini istiyor" diyor, c = 0'da da doğru. |
| U2D-06 | KÜÇÜK | **KAPANDI** | 1463: "f(0) = −3, grafiğin y eksenini kestiği noktanın y'sidir; …". Virgül var, nokta/sayı ayrımı doğru. "y'sidir" doğru ek; aynı dosyada "o noktanın y'si" (1449) ile tutarlı. |
| U2D-07 | KÜÇÜK | **KAPANDI** | `icSifirAdim` (1422): a = 1, b = 0 iken "Mutlak değerin içi x; içi 0 yapan x: x = 0." Kapalı (1799, 1801, 1824), artan-azalan (1708), minmax (1500), görüntü (1566), sıfır "bir" (1641) bunu kullanıyor. tek_sifir metni (1605) artık tekrar içermiyor (tarama tohum 1: "\|x\| = 5 ise x, 0'a 5 birim uzaktadır … Unutulan sıfır x = −5."). |
| U2D-08 | KÜÇÜK | **KAPANDI** | 1449–1450 ikisi de `maksimum_varlik`. Görüntü V dalı (1539) `esitsizlik_yonu`, ters V dalı `eksi_mutlak_karistirma`. |
| U2D-09 | KÜÇÜK | **KAPANDI** | 1609: "Önünde eksi var ama maksimum değer, yani 3, x ekseninin üstündedir; ters V aşağı inerken x eksenini keser." Virgüller yerinde, koşul kipi yok. Matematik doğru (ters V'de c = E > 0). |
| U2D-10 | KÜÇÜK | **KAPANDI (9.2.2)** | 1799 "aralığa dâhildir"; 9.2.2 bölümünde "dahil" kalmadı. 9.2.1'deki 1082 ve 1113 duruyor: U2D-13. |

## 2. U2D-01 ayrıntı: `ayikla` ve çakışmalarda gösterilen açıklama

Kod (954):
```js
const ayikla = (ys, d) => ys.filter((v, i) => !esitD(v.deger, d) && (v.deger == null || ys.findIndex(w => esitD(w.deger, v.deger)) === i));
```
- Doğruya eşit olan elenir. Kalan her değer için yalnız dizideki ilk yanlış kalır. Önde doğruya eşit bir w olsa bile v de doğruya eşit olacağından zaten elenir, yan etki yok.
- `deger == null` olan şık korunur (9.2.2'de yok; 9.2.1'de de bütün şıklar `deger` taşıyor).
- `insa` metin tekilleştirmesi: 9.2.2'de metin ↔ değer birebir (`tam(v)`, `zYaz/zKey`, görüntü/artan-azalanda değer = metin). Aynı metin farklı değer durumu yok. Böylece gösterilen açıklama yalnız dizi sırasına bağlı.

### Ters V (Tmaks) yeniden hesap, yeni sıra: [k − min (eksik_adim), k − max (kavram), k + max (eksi_mutlak), h (okuma), YOK]

| Tohum | f, tanım | f(p), f(q) | k−min / k−max / k+max / h | Çakışma → kalan | Karar |
|---|---|---|---|---|---|
| 4 | −\|x\| + 1, [−1, 2] | 0, −1 | 0 / −1 / 3 / 0 | 0: eksik_adim kalır, okuma düşer | DOĞRU (0 = f(−1), büyük uç) |
| 20 | −\|x\| + 5, [−2, 3] | 3, 2 | 3 / 2 / 8 / 0 | yok | DOĞRU |
| 30 | −\|x − 5\| + 3, [4, 6] | 2, 2 | 2 / 2 / 4 / 5 | 2: eksik_adim kalır | DOĞRU (L = R) |
| 36 | −\|x − 6\| + 2, [5, 11] | 1, −3 | 1 / −3 / 7 / 6 | yok | DOĞRU |
| 41 | −\|x − 2\| + 5, [−1, 7] | 2, 0 | 2 / 0 / 10 / 2 | 2: eksik_adim kalır | DOĞRU (2 = f(−1)) |
| 43 | −\|x + 1\| + 4, [−2, 0] | 3, 3 | 3 / 3 / 5 / −1 | 3: eksik_adim | DOĞRU |
| 44 | −\|x + 2\|, [−7, 2] | −5, −4 | −4 / −5 / 5 / −2 | yok | DOĞRU |
| 48 | −\|x − 2\| + 2, [1, 5] | 1, −1 | 1 / −1 / 5 / 2 | h = d, elenir | DOĞRU |
| 64 | −\|x − 1\| + 5, [−1, 6] | 3, 0 | 3 / 0 / 10 / 1 | yok | DOĞRU |
| 67 | −\|x − 1\| + 5, [−2, 3] | 2, 3 | 3 / 2 / 8 / 1 | yok | DOĞRU |
| 69 | −\|x\| + 7, [−5, 5] | 2, 2 | 2 / 2 / 12 / 0 | 2: eksik_adim | DOĞRU |
| 70 | −\|x + 1\| + 2, [−4, 4] | −1, −3 | −1 / −3 / 7 / −1 | −1: eksik_adim kalır | DOĞRU (−1 = f(−4)) |

Taramadaki 12 dökümün hepsi bu tabloyla birebir aynı. Tur 1'deki 3 yanlış teşhis (4, 41, 70) artık `eksik_adim` ile, yani en olası hatayla gösteriliyor. Diğer Tmaks çakışmaları: h = k − max → kavram ("uçlardaki küçük değer", doğru); h = k + max → eksi_mutlak (doğru). L, R ≥ 1 olduğundan hiçbir yanlış k'ye eşit olamaz.

### Diğer kayıtlarda çakışma → gösterilen açıklama (kod okuması)

| Kayıt / mod | Çakışma | Kalan | Değerle çelişki? |
|---|---|---|---|
| minmax deger | x0 = 0 | 0 eksik_adim | Yok |
| minmax deger | x0 = −c | x0 kavram | Yok (iki metin de doğru) |
| minmax deger | f0 = −c, f0 = 0, f0 = x0 | önce gelen (oteleme / eksik / kavram) | Yok |
| minmax x | −x0 = c | carpim | Yok |
| minmax x | c = 0 | c kavram ("0, minimum değerdir (y)") | Yok |
| minmax x | c = −b (= a·x0) | c kavram, eksik_adim düşer | Yok, ama öncelik tutarsız: U2D-11 |
| görüntü | x0 = 0 / x0 = −c | eksik / oteleme | Yok |
| sıfır iki | {−x0 ± dd} = {a(x0 ± dd)} | ancak a = 1'de, o zaman eksik şık yok | Çakışma imkânsız |
| sıfır bir | x0 = 0 | [0], [0, 0], [−b] elenir → 2 şık → `continue` | "0 ve 0" çıkmaz |
| sıfır yok | — | {x0 ± dd}, {x0 − dd}, {x0} hep farklı | Çakışma imkânsız |
| artan-azalan | c = −x0 / c = −b | carpim / eksik | Yok |
| kapalı Vmaks | min(L,R) = 0 (h uçta), xs = 0 | 0 kavram | Yok |
| kapalı Vmaks | xs = min(L,R) | eksik | Yok |
| kapalı Vmin dis | xm = 0 | 0 kavram ("x = h aralığın dışındadır") | Yok |
| kapalı min-ic | h = min(dp, dq) | h okuma | Yok |

Sonuç: Bir açıklamanın gösterildiği şıkkın değeriyle çeliştiği durum kalmadı. Her kalan metin, o değeri gerçekten üreten bir hatayı ya da doğru bir genel bilgiyi anlatıyor.

## 3. Ayrılan kayıtlar

- **minmax / minmax-kolay:** `minmaxGen(kolay)` + ortak `minmaxKontrol`. Kolay: mod "deger", s = 1, a = 1. Ana kayıt 1443'te `mod === "deger" && s > 0 && a === 1` durumunu `continue` ile atlıyor; kolay alt türü üretmez. Kolay'da c = 0 ve x0 > 0 iken f0 = x0 çakışır, 2 şık kalır, `continue`; x0 = 0 ve c = 0 iken de `continue`. Sonsuz döngü riski yok (c ≠ 0 olasılığı %85). DOĞRU.
- **sifir / sifir-yok:** `sifirGen(turlar)` + ortak `sifirKontrol`. Ana kayıt `["iki", "iki", "bir"]`, "yok" üretmez. sifir-yok: E = −K, c = V ? K : −K. Şıklar: isaret_hatasi {x0 ± dd}, mutlak_eksi {x0 − dd} (ax + b = −K ⇒ x = x0 − dd, doğru), kavram {x0} (f(x0) = c; V'de üstte, ters V'de altta, doğru). Çözüm adımları iki işaret dalında da doğru (ör. "İki tarafa 3 eklenir: −\|x + 3\| = 3." → "İki taraf −1 ile çarpılır: \|x + 3\| = −3."). DOĞRU.
- **kapali-aralik / kapali-min-ic:** `kapaliGen(modlar, yerler)` + ortak `kapaliKontrol` (params.mod = "Vmin" taşınıyor). Ana kayıt Vmin'i yalnız "dis" ile üretir; "ic"/"uc" yalnız min-ic'te. DOĞRU.
- **min-ic, x0 uçta (yer "uc"):** p = h ya da q = h, n ∈ [2, 6]. d = 0. min(dp, dq) = 0 = d, elenir. Kalan: "Minimum değer yoktur." (maksimum_varlik), n = maks (kavram, "uçlardaki büyük değer, yani maksimum"), h (okuma). h = 0 ya da h = n ise 2 şık → `continue`. Çözüm: "h, [p, q] aralığının ucudur; aralığa dâhildir." → "f(h) = \|0\| = 0" → "Minimum değer 0 olur ve x = h noktasında alınır." Cevap ve çeldiriciler DOĞRU.

## 4. Etiketler (SKILL.md sözlüğü)

| Etiket | Kullanım | Sözlük | Karar |
|---|---|---|---|
| `eksik_adim` | Tmaks uçlardaki büyük değer (1812) | "çözümü yarıda bırakmak" | UYUMLU: iç nokta adımı atlanmış |
| `isaret_hatasi` | sıfır yok, {x0 ± dd} (1614) | "negatif işareti kaybetmek" | UYUMLU, birebir |
| `maksimum_varlik` | "Maksimum değer yoktur." (kapalı Vmaks, Tmaks), "En büyük sapma yoktur." | "kapalı aralıkta 'maksimum yok' demek" | UYUMLU |
| `maksimum_varlik` | "Minimum değer yoktur." (ℝ'de V 1449, kapalı Vmin 1786), "Maksimum değer yoktur." (ℝ'de ters V 1450) | Tanım yalnız maksimumu ve yalnız "V'de maksimum aramak" yönünü anlatıyor | Anlamca yakın, sözlük dar: U2D-12 |
| `esitsizlik_yonu` | görüntü V (−∞, c] (1539), artan-azalan V ters aralık (1686) | "eşitsizliği ters yazmak" | UYUMLU (görüntüde birebir; artan-azalanda x ≥ x0 ↔ x ≤ x0) |

## 5. Tersane bağlamı

- Hedef h ∈ {120, 150, 180, 200, 250} mm, L, R ∈ [1, 6] (ctx'te alt sınır 1) → p < h < q, hedef aralığın içinde. Sapma ≤ 6 mm ≤ %5. Örnekler: [178, 182], [174, 184], [116, 121], [147, 156]: hepsi doğru, cevaplar 2, 6, 4, 6 elle doğrulandı.
- "En büyük sapma yoktur.": f sürekli, tanım kümesi kapalı aralık, maksimum vardır. Şık gerçekten yanlış; açıklama ("uçlar dâhil; en büyük sapma uçlardan birinde vardır") doğru. Tur 1'de uyarılan "üst sınır yok" ifadesine kaçılmamış. DOĞRU.
- Birimler: kök "kaç mm'dir", baglam "x mm'dir", şıklar yalın sayı, okuma şıkkı "182 mm parçanın boyudur", kavram şıkkı "0 mm en küçük sapmadır, parça tam 180 mm iken", çözüm sonu "En büyük sapma 2 mm olur." DOĞRU.
- Bağlamdaki "\|x − 180\|" U+2212 (dosyada ASCII "\|x - " geçmiyor).

## 6. Dil ve gösterim

- "dâhil/dâhildir": 9.2.2'de tutarlı (1431, 1537, 1756, 1765, 1794, 1799).
- "f(0) = …, grafiğin y eksenini kestiği noktanın y'sidir" ve "maksimum değer, yani 3, x ekseninin üstündedir": doğru.
- Eksi işaretleri: kullanıcıya giden dizgilerde hep `EKSI`/U+2212. Grep'teki ASCII "-" eşleşmelerinin hepsi kod ifadesi (`-x0`, `-b`, `-c`). "−0": `mKur` (`|| 0`), `tam` ve `String(-0) === "0"` sayesinde ne şıkta ne `zKey`'de çıkıyor.
- ℝ, "∞ yanında normal parantez", kapalı uçlarda "[ ]": doğru. sonsuz_koseli şıkları ("[−∞, 0]") bilerek yanlış.
- Ekler: "2'ye, 3'e, −2'ye, −3'e bölünür", "0'a 5 birim", "mm'dir", "noktasında/noktalarında": doğru.

## 7. 9.2.1'e etkisi (kod okuması)

Yeni `ayikla` çakışmada artık rastgele değil, dizideki ilk açıklamayı gösteriyor. Değerlendirme:

- **mat-u2-deger-hesap, değer modu** (sıra: isaret −ac + b, islem a + c + b, kavram c + b, eksik ac, isaret ac − b). Olası çakışmalar: a = −1 iken −ac + b = c + b → isaret_hatasi kalır ("−1 · c" işaretini kaybetmek; kavram metninden daha isabetli). b = 2ac → isaret kalır, eksik düşer. ac = b → isaret (çarpım) kalır, isaret (sabit) düşer. −ac = a + c cebirsel olarak imkânsız ((a+1)(c+1) = 1 ⇒ a = c = −2, `|c| = |a|` ile dışlanmış). Gösterilen her metin o değeri gerçekten üreten bir hatayı ya da doğru bir genel kuralı söylüyor.
- **deger-hesap, ters mod** (sıra: isaret −x0, eksik a·x0, okuma ad + b, isaret (d + b)/a, islem (d − ab)/a). a = −1 iken −x0 = a·x0 → isaret_hatasi kalır ("(d − b) : (−1) işleminde işaretler farklı; sonuç eksi"), doğru teşhis. eksik = okuma çakışmasında eksik kalır; değer gerçekten d − b. Çelişki yok.
- **mat-u2-iki-nokta** (sıra: isaret (−a, …), eksik (dy, …), isaret (a, −b), egim (b, a), kavram (a, y1)). (−a, y1 + a·x1) = (b, a) ancak b = −a ve x1 = 1'de; isaret kalır, egim düşer. İki süreç de aynı fonksiyonu verir. (dy, …) = (b, a) → eksik kalır, değer gerçekten bölünmemiş eğimle kurulmuş doğru. (a, −b) = (a, y1) → isaret kalır, doğru. (b, a) = (a, y1) yalnız x1 = 0'da, o zaman kavram şıkkı eklenmiyor.
- **mat-u2-sifir-isaret, mat-u2-baglam-model**: çakışmada kalan metinlerin hepsi o değeri üreten süreci anlatıyor.

Sonuç: `ayikla` değişikliği 9.2.1'de yanlış teşhis üretmiyor. Önceki rastgele seçime göre ya aynı ya daha isabetli (a = −1 durumu).

## 8. Yasak terimler

Tarama: 8 kaydın hiçbirinde "tepe", "simetri", "katla" ya da grafik anlamında "köşe" yok. Kodda "köşeli parantez" (1537) serbest. 707'deki "katla" 9.1 bölümünde bir yorum satırı ("ortak katla", EKOK anlamında), kapsam dışı. 1403 yorum satırı. TEMİZ.

## 9. Yeni bulgular

### U2D-11 · KÜÇÜK · mat-u2-mutlak-minmax (mod "x") · satır 1466–1471 · çakışma önceliği diğer üreteçlerle tutarsız
- **Durum:** c = −b (= a·x0) olduğunda `c` (kavram_karisikligi, 1468) dizide önde, `−b` (eksik_adim, 1471, `push` ile sona ekleniyor) düşer. artan-azalan'da aynı çakışma için yorum (1690) "önce işlem hatası teşhisi kalır" diyor ve eksik_adim öne konmuş. Benzer biçimde x0 = −c çakışmasında görüntü oteleme_yonu'nu (1542 yorumu), minmax `deger` ise kavram_karisikligi'ni (x0) bırakıyor.
- **Etki:** Doğruluk sorunu değil; iki metin de değerle uyumlu. Örnek: a = 2, x0 = 1, c = 2: f(x) = |2x − 2| + 2, şık "2" → "2, minimum değerdir (y)…" gösterilir; öğrenci büyük olasılıkla "2x = 2"de durmuştur.
- **Öneri:** `−b` şıkkını koşullu yayılma ile `c` şıkkından önceye al:
  ```js
  ys = [
    y(tam(-x0), "carpim_sifir_isaret", isaretAc(a, b), -x0),
    ...(a !== 1 ? [y(tam(-b), "eksik_adim", dogruYaz(a, 0) + " = " + tam(-b) + " ara sonuçtur; iki taraf " + yonelme(a) + " bölünür.", -b)] : []),
    y(tam(c), "kavram_karisikligi", …),
    y("0", "okuma_hatasi", …),
  ];
  ```
  x0 = −c için tek bir kural seçilmeli (görüntü ile minmax `deger` aynı yönde); hangisinin seçileceği pedagojik karar, doğruluğu etkilemez.

### U2D-12 · KÜÇÜK · `.claude/skills/soru-yazim-kurallari/SKILL.md` satır 129 · `maksimum_varlik` tanımı dar
- **Durum:** Tanım "ℝ'de V'nin maksimumunu aramak ya da kapalı aralıkta 'maksimum yok' demek". Üreteçler etiketi ayrıca "Minimum değer yoktur." (ℝ'de V, kapalı Vmin) ve ℝ'de ters V için "Maksimum değer yoktur." şıklarında kullanıyor. Hata türü aynı (en büyük/en küçük değerin varlığını karıştırmak), ama sözlük metni bunu kapsamıyor.
- **Öneri (sözlükte, üreteçte değil):** `maksimum_varlik` | "en büyük ya da en küçük değerin varlığını karıştırmak: ℝ'de V'nin maksimumunu aramak, var olan minimum/maksimuma 'yoktur' demek ya da kapalı aralıkta 'maksimum yok' demek".

### U2D-13 · KÜÇÜK · 9.2.1 `mat-u2-sifir-isaret` · satır 1082, 1113 · "dahil"
- Tur 1 U2D-10 notunun 9.2.1 kısmı açık kaldı. 1082 "dahil değildir", 1113 "dahil." / "dahil değil." Dosyanın geri kalanı "dâhil". Öneri: üçünü "dâhil" yap. Bu turun kapsamı dışında ama aynı dosyada.

## Kontrol edilemeyenler
- Kabuk yok, tohum taraması yeniden koşulmadı. Taramadaki 12 Tmaks dökümü ve 4 bağlamlı örnek elle yeniden hesaplandı; diğer kayıtlar kod okuması ve taramadaki şablon örnekleriyle denetlendi.
- `denetim/uretec_ornekleri_u2k2.md` (28 örnek) ayrıca satır satır okunmadı; tarama 300 tohumu kapsıyor.
- 9.2.1 çakışma sayıları (37/300, 14/300) doğrulanmadı; değerlendirme cebirsel çakışma koşullarından yapıldı.

## Özet
KRİTİK 0 · ÖNEMLİ 0 · KÜÇÜK 3 (U2D-11, U2D-12, U2D-13).
Tur 1: U2D-01 … U2D-10 kapandı (U2D-10'un 9.2.1 kısmı U2D-13 olarak taşındı).

KARAR: TEMİZ (KÜÇÜK öneriler yayını engellemez)
