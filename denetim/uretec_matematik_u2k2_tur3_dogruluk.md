# Üreteç denetimi · Matematik 9.2.2 Mutlak değer fonksiyonu · Tur 3 (son) · Doğruluk (2026-10-30)

Denetçi: dogruluk-denetcisi (salt okur).
Denetlenen: `panel/motor/uretecler/matematik.js` satır 1400–1887 (8 kayıt), ortak `ayikla`/`tekilSay` (953–955), `tools/uretec_test.mjs` satır 23–34 (yeni kontroller).
Kanıt: `scratchpad/uretec_tarama_u2k2_tur3.md` (300 tohum), `denetim/uretec_ornekleri_u2k2.md` (30 örnek). Kitap karşılaştırması tur 1'deki gibi (s.126–127, 134). Matematik kuralları değişmediği için kitap yeniden açılmadı.

## 1. Önceki bulguların durumu

| Kod | Önem | Durum | Kanıt |
|---|---|---|---|
| U2D-11 | KÜÇÜK | **KAPANDI** (kapalı Vmaks hariç, bkz. U2D-14) | minmax "x" (1471–1476): `−b` eksik_adim artık `c` kavramdan önce. minmax "deger" (1461–1468): sıra 0 eksik, −c oteleme, x0 kavram, yok, f0 okuma; x0 = −c iken oteleme kalır, görüntü (1563–1567) ile aynı yönde. Kural 1460'ta yazılı. |
| U2D-12 | KÜÇÜK | **KAPANDI** | SKILL.md 129: `maksimum_varlik` artık "en büyük ya da en küçük değerin varlığını karıştırmak … var olan minimum/maksimum için 'yoktur' demek …". 1453–1454, 1789, 1820, 1850 kullanımlarının hepsini kapsıyor. |
| U2D-13 | KÜÇÜK | **KAPANDI (matematik.js)** | Dosyada kullanıcıya giden "dahil" kalmadı. Grep'te kalan 459/612–621 eşleşmeleri değişken adı (`dahil`). Soru bankası ve panel verisinde duruyor: U2D-17. |
| U2D-01 … U2D-10 | — | Kapalı kaldı (regresyon yok) | §3. |

## 2. Odak maddeleri

### 2.1 sifir-yok `["yok", "bir"]`, a = 1
- **"bir" senaryosu** (E = 0, c = 0): doğru "Yalnız x0". Şıklar: `[]` kavram ("Minimum/Maksimum değer: 0 … Bu yüzden x = x0 bir sıfırdır."), `[−x0]` carpim_sifir_isaret (`isaretAc`, ör. "x − 1 = 0 denkleminde iki tarafa 1 eklenir", doğru), `[−x0, x0]` kavram ("mutlak değeri 0 olan tek sayı 0'dır", doğru). a = 1 olduğundan eksik_adim yok. x0 = 0 iken `[−x0]` elenir, 2 şık kalır → `continue`; "0 ve 0" çıkmaz. x0 ≠ 0 iken üç anahtar (`Z`, `Z−x0`, `Z−|x0|,|x0|`) ve doğru `Zx0` hep farklı. DOĞRU.
- **"yok" senaryosu**: E = −dd, c = V ? dd : −dd. `{x0 ± dd}` isaret_hatasi: \|x + b\| = −dd yerine = dd çözülmüş → x0 ± dd, doğru. `f(x0 + dd) = s·dd + c = ±2dd`: tarama tohum 0 (−\|x + 3\| − 3, f(0) = −6), 7 (\|x − 5\| + 3, f(8) = 6), 14 (−\|x\| − 1, f(1) = −2) elle doğrulandı. `{x0 − dd}` mutlak_eksi ("x + 3 = −3" → −6; b = 0'da "x = −1"), `{x0}` kavram ("üstündedir"/"altındadır" yönü doğru). DOĞRU.
- Test (uretec_test.mjs 30–33): "Sıfırı yoktur" her soruda görünür (yok'ta doğru, bir'de şık) ve sayılı şık vardır. Kod okumasıyla doğru.

### 2.2 İpucu 2 örnek sayısı ve 3. ipucu yarım adımları
- `orn` (1666): 15/20/25'ten `[...z, a, b, c, E]` içinde mutlak değerce geçmeyen ilki. Sınırlar: \|b\| ≤ 15 (a = 3, x0 = ±5), \|c\|, \|E\| ≤ 12, sıfırlar ≤ 10. 15 yalnız \|b\| = 15'te düşer, 20 hep boştur; `undefined` olamaz, `continue` ölü kod ama zararsız. "\|x\| = 15 ise x = 15 ya da x = −15" doğru.
- `ilkAdimYari` (1426–1428): a = 1 "x − 3 = 0 yazılır. Şimdi x'i yalnız bırak: iki tarafa 3 ekle." · a ≠ 1, b ≠ 0 "3x − 9 = 0 yazılır. İki tarafa 9 eklenir: 3x = 9. Şimdi iki tarafı 3'e böl." · a ≠ 1, b = 0 "2x = 0 yazılır. Şimdi iki tarafı 2'ye böl." · \|x\| "İçi 0 olsun: x hangi sayı olmalı, düşün." Hepsi doğru, hiçbiri x0'ı yazmıyor.
- sifir 3. ipucu (1676–1678): c ≠ 0'da yalnız işlemi söyler, c = 0'da "içini 0 yapan x'i bul" / "−1 ile çarp". Sonuç yazılmıyor. DOĞRU.
- artan-azalan / kapalı Vmin / Tmaks `ilkAdim` x0'ı yazar ama cevap aralık ya da f değeri; kapalıda "Şimdi bu x'in … aralığında olup olmadığına bak." ile biter. Kapalı Vmaks: L ≠ R'de küçük ucun değeri (cevap değil), L = R'de yalnız "f(p) = \|p − h\| yazılır." DOĞRU.
- **Cevabı veren durum var:** c = 0 iken minmax-kolay ve görüntü. Bkz. U2D-15. Testin atladığı biçim: cevap cümlenin ortasında ekli ("0'dır") ya da eşitsizlik olarak ("−\|x + 6\| ≤ 0.") geçiyor; test yalnız son "="/":" sonrasına ve " " + dogru ile bitişe bakıyor.

### 2.3 Kapalı aralık
- **kapali-aralik (zorluk 3)**, `baglamli = true`: Vmaks hep tersane. L, R ∈ [1, 6], h ∈ {120, 150, 180, 200, 250} → hedef iç nokta, sapma ≤ 6 mm. d = max(L, R). Şıklar: "En büyük sapma yoktur." / 0 / min(L, R) / xs (≥ 114). min ≥ 1 olduğundan 0 ile çakışmaz; L = R'de min = d elenir, 3 şık kalır. Tarama tohum 0 ([179, 181] → 1), 7 ([179, 185] → 5), 8 ([176, 185] → 5), 9 ([244, 256] → 6) elle doğrulandı. 3. ipucu "f(179) = \|179 − 180\| = 1." küçük uç, doğru.
- Vmin "dis": d = min(dp, dq) = e, xm yakın uç; 0 kavram (xm = 0 çakışmasında kavram kalır, 1822 yorumu açık istisna). DOĞRU.
- Tmaks: 11 tam döküm (tohum 2, 3, 4, 5, 17, 20, 30, 31, 36, 38, 41, 43) yeniden hesaplandı; uç değerler, k ± min/max, sıra (eksik_adim önde) ve çözüm adımları doğru.
- **kapali-min-ic (zorluk 2)**, `["Vmin", "Vmin", "Vmaks"]`, düz Vmaks L, R ∈ [0, 6], L + R ≥ 2, h ∈ [−3, 8]: h uçta (L = 0 ya da R = 0) olabilir. d = max(L, R) doğru; "0 minimum değerdir; x = h noktasında alınır" h uçta iken de doğru (h tanım kümesinde). xs = d (h = 0) elenir, xs = 0 kavramla birleşir. Tarama tohum 2 (h = 7, q = 10) uyumlu. Sıra notu: U2D-14.
- `kapaliKontrol` 0,5 adımlı tarama, tam sayı uçlarda yeterli.

### 2.4 Artan-azalan tablo adımları, "üstünde/altında/üzerinde"
- `fSatir` (1726–1727): a = 1 "f(−5) = −\|−5 + 4\| + 1", a ≠ ±1 "\|2·(−5) + 8\|", a = −1 "\|−(−3) …\|", x = 0'da "\|0 + 8\|". `pt` negatifleri parantezliyor. Değer `f(x)` ile hesaplanıyor. \|a\| ≥ 1 olduğundan f(x0 ± 1) ≠ f(x0); "solunda f küçülür, sağında büyür" (V) / tersi (ters V) doğru.
- Kalıplar: iki-V "altındadır … keser" (c = −E < 0), iki-ters V "üstündedir … keser" (c = E > 0), yok-V "üstündedir" (c = dd > 0), yok-ters V "altındadır" (c = −dd < 0), bir "üzerindedir" (0). Hepsi doğru durumda. İfade notu: U2D-16.

### 2.5 Etiketler
Kullanılan 14 etiketin hepsi SKILL.md sözlüğünde (87, 93, 94, 112–114, 122–124, 128–129, 131, 133–134). `isaret_hatasi` (sıfır yok) birebir; `tek_sifir`, `mutlak_eksi`, `eksi_mutlak_karistirma` tanımlarıyla uyumlu. UYUMLU.

### 2.6 Yazım
- "dâhil" 9.2.2'de ve matematik.js'nin tamamında tutarlı (kullanıcı metni). Kartlar (`konular/*.json`) temiz.
- Kullanıcı dizgilerinde ASCII "-" yok; grep eşleşmeleri kod ifadesi. `tam(−0)` "0" verir, `mKur` `|| 0`; "−0" çıkmaz.
- Yasak terim: 300 tohumda hiçbir kayıtta yok. 707 "katla" EKOK yorum satırı, 1403 yorum.

## 3. Regresyon (tur 2'de TEMİZ olanlar)
`ayikla` değişmedi. Çakışma tablosu (tur 2 §2) yeni sıralarla yeniden tarandı:
- minmax "nokta": `Y`+c ve `P`+… anahtarları ayrık; (−x0, c) = (−b, c), (x0, 0) = (c, x0), (x0, −c) = (c, x0), (−b, c) = (c, x0) çakışmalarının hepsi x0 = 0 ya da c = 0 gerektirir ve o zaman ya doğruya eşit ya şık eklenmemiş. Çelişki yok.
- görüntü, artan-azalan, sifir "iki": sıralar tur 2 ile aynı ya da kurala uygun; tarama şablonlarında değerle çelişen açıklama yok.
- Tmaks ve tersane: §2.3. Değişmeyen bölümler (U2D-01…10 kapsamı) bozulmamış.

## 4. Yeni bulgular

### U2D-14 · KÜÇÜK · mat-u2-mutlak-kapali-min-ic (düz Vmaks) · satır 1790–1792 · çakışma sırası 1460 kuralına aykırı
- **Durum:** h uçta iken (L = 0 ya da R = 0) min(L, R) = 0 olur. `0` kavram_karisikligi (1790) dizide önde, `min` eksik_adim (1792) düşer. 1460'taki "tüm 9.2.2" kuralı işlem hatasının (eksik_adim) kavramdan önce kalmasını söylüyor.
- **Etki:** Doğruluk sorunu değil: "0 minimum değerdir; x = h noktasında alınır" h uçta iken de doğru. Yalnızca tutarlılık sorunu.
- **Öneri:** Ya `yv(Math.min(L, Rr), "eksik_adim", …)` satırını `yv(0, …)` satırının önüne al, ya da 1822'deki gibi bir yorumla istisnayı yaz ("h uçta iken 0 hem küçük uç hem minimum; kavram teşhisi kalır"). Kapsam yalnız kapali-min-ic (bağlamlıda L, R ≥ 1).

### U2D-15 · ÖNEMLİ · mat-u2-mutlak-minmax-kolay ve mat-u2-mutlak-goruntu · c = 0 · 3. ipucu cevabı veriyor
- **minmax-kolay** (1446 `c = r() < 0.15 ? 0 : …`, ipucu 1499–1500): c = 0 iken cevap 0. 3. ipucu: "İlk adım: \|x + 3\| ≥ 0 yazılır; bu ifadenin en küçük değeri 0'dır. Şimdi dışarıda sayı olmadığını hesaba kat." Cevap yazılmış; 2. ipucu da ("\|x + 3\| en az 0 olur. Dışarıda başka sayı var mı, bak.") neredeyse veriyor. Bu durum x0 < 0'da üretiliyor (x0 > 0'da f0 = x0 çakışması `continue`), kolay soruların yaklaşık %7'si.
- **görüntü** (1551, ipucu 1580): c = 0, ters V: "İlk adım: \|x + 6\| ≥ 0 yazılır. İki taraf −1 ile çarpılır: −\|x + 6\| ≤ 0." Bu f(x) ≤ 0, yani cevabın kendisi. Geriye yalnız parantez seçimi kalıyor. V'de "Dışarıda sayı yok, f(x) = \|x + 6\|." ile ilk cümle birleşince aynı sonuç çıkıyor. Örnek dosyada görünüyor (`uretec_ornekleri_u2k2.md` 139–149, `{"s":-1,"a":1,"b":6,"c":0}`).
- **Neden test yakalamıyor:** `uretec_test.mjs` 26–27 yalnız son "="/":" sonrasının cevaba eşitliğine ve " " + dogru ile bitişe bakıyor. Cevap "0'dır" gibi ekli ya da cümle ortasında, ya da aralık yerine eşitsizlik olarak geçince test geçiyor.
- **Neden ÖNEMLİ:** Yanlış bilgi yok. Ama 3. ipucunun cevabı vermemesi bu turun açık değişmezi ve testin güvence verdiği bir kural. Aynı dosyada 9.2.1 `mat-u2-deger-hesap` (985) c = 0'ı "3. ipucu cevabı verirdi" gerekçesiyle zaten dışlıyor.
- **Öneri:**
  - minmax-kolay: c'yi `kolay ? pick(r, C_H) : …` ile seç. c = 0 sınırı ana kayıtta (s < 0 ya da a > 1) korunuyor.
  - görüntü c = 0: 3. ipucunu yarıda bırak. V'de "İlk adım: \|…\| ≥ 0 yazılır. Şimdi bu eşitsizliği f(x) ile yaz." Ters V'de "İlk adım: \|…\| ≥ 0 yazılır. Şimdi iki tarafı −1 ile çarp; yöne dikkat." Ya da c = 0'ı görüntüde dışla.
  - Test: 9.2.2 için ek bir koşul. Doğru değer sayıysa 3. ipucunda "değeri <d>'" / "≤ <d>" / "≥ <d>" geçmesin. Görüntüde dogru aralığın ucu c iken "f(x) ≤/≥ c" biçimi yasak.

### U2D-16 · KÜÇÜK · mat-u2-mutlak-sifir, -sifir-yok ("bir") · satır 1642 · "x ekseninin üzerindedir" belirsiz
- **Durum:** Şık açıklaması "Minimum değer: 0. Bu değer x ekseninin üzerindedir." Aynı kayıtlarda "üstündedir" "eksenin yukarısında" anlamında kullanılıyor. Günlük Türkçede "üzerinde" "yukarısında" diye de okunur; bu öğrenci için iki sözcük ayrımı zayıf. Kart (`konular/matematik-u2-k2.json` 1111, 1115, 1117) ve çözüm adımı (1664) "tam x ekseninin üzerinde" diyor.
- **Öneri:** 1642'de "Bu değer tam x ekseninin üzerindedir." Kartla birebir olur.

### U2D-17 · KÜÇÜK · 9.2.1 soru bankası · "dahil" (üreteç dışı, bilgi için)
- `dersler/matematik/sorular/matematik-u2-k1.json` 96, 119, 405, 411, 422, 424, 449, 460, 753 ve bunların derlenmiş kopyası `panel/data/matematik.js` (8502, 8525, 8811, 8817, 8828, 8830, 8855, 8866, 9159) "dahil" yazıyor. Kartlar ve üreteçler "dâhil".
- **Öneri:** Soru bankasında da "dâhil" yap, panel verisini yeniden üret, `python tools/dogrula.py` çalıştır.

## Kontrol edilemeyenler
- Kabuk yok; test ve tarama yeniden koşulmadı. 300/300 ve dogrula.py GEÇTİ sonucu ana ajandan alındı.
- U2D-15 sıklıkları (yaklaşık %7 kolay, görüntüde yaklaşık %15) olasılık hesabıyla tahmin edildi, sayılmadı.
- `uretec_ornekleri_u2k2.md` 30 örneğinden yalnız ipucu satırları ve görüntü #0 / kolay #0 tam okundu.

## Özet
KRİTİK 0 · ÖNEMLİ 1 (U2D-15) · KÜÇÜK 3 (U2D-14, U2D-16, U2D-17).
U2D-11, U2D-12 ve U2D-13 (matematik.js) kapandı. Tur 1–2 bulgularında regresyon yok. Doğru cevap, çeldirici değerleri ve hesaplar 8 kayıtta da doğru.

KARAR: DÜZELTİLMELİ (U2D-15). Yayın engeli yok (KRİTİK 0); U2D-15 iki satırlık bir düzeltme ve bir test koşulu ister.
