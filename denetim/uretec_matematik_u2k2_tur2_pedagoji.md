# Üreteç denetimi · Matematik 9.2.2 Mutlak değer fonksiyonu · Tur 2 · Pedagoji

Denetçi: pedagoji-denetcisi. Düzeltme yapılmadı.
Kapsam: `panel/motor/uretecler/matematik.js` "9.2.2" bölümü, 8 kayıt (minmax 2, minmax-kolay 1, goruntu 2, sifir 2, sifir-yok 1, artan-azalan 2, kapali-aralik 3, kapali-min-ic 2; sayılar zorluk).
Kanıt: scratchpad `uretec_tarama_u2k2_tur2.md` (300 tohum; her kayıt için tüm benzersiz yanlış şık şablonları: 52+13+42+26+14+22+19+6, hepsi okundu; 10 ters V tam örneği; 4 tersane örneği), `denetim/uretec_ornekleri_u2k2.md` (28 örnek, ipucu ve çözüm), üreteç kaynak kodu (satır 1401-1854), kart `matematik-u2-k2.json`.
Panel notu uygulandı: yanlış cevaptan sonra "Doğru cevap" ve çözüm görünüyor, yeniden deneme yeni sayılarla gelir; açıklamada doğru sonucun kısaca geçmesi sızıntı sayılmadı.

## KARAR: DÜZELTİLMELİ

Tur 1'in 15 bulgusunun 12'si kapandı, 3'ü kısmen açık. Dil, kök uzunluğu, yasak terim ve azarlama temiz. Yeni kayıtlarda bir YÜKSEK sorun var: `sifir-yok` kaydında doğru cevap her zaman aynı ("Sıfırı yoktur") ve şıklar arasındaki tek sözcüklü seçenek o; soru hesaplanmadan çözülebiliyor. İpucu merdiveninde 3. basamak bazı tohumlarda cevabı veriyor. Geri kalanı okunurluk ve biçim.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Yasak terim (tepe, simetri, grafik "köşe", katla, kol, sabit terim) | 0/300 tohum; kaynakta 9.2.2 bölümünde yalnız "köşeli parantez" (parantez anlamı, uygun) | 0 | GEÇER |
| Kök cümle uzunluğu | en uzun 13 kelime (tersane bağlamı cümleleri 11-13) | ≤ 20 | GEÇER |
| Açıklama uzunluğu | 1-2 cümle; en uzun 3 cümle: tek_sifir şablonu | tek cümlelik neden | GEÇER, DÜŞÜK (U2P-24) |
| Azarlama dili | yok (edilgen: "çözülmüş", "alınmış") | yok | GEÇER |
| Cevap sızıntısı (açıklamada) | var ama panel akışı gereği sayılmadı | 0 | GEÇER (U2P-01 kapandı) |
| Doğru teşhis, çakışma örnekleri (tohum 4 ve 70) | 2/2 doğru ("Yalnız uçlar karşılaştırılmış") | 0 yanlış teşhis | GEÇER (U2P-02 kapandı) |
| Okunurluk kalıpları | "yani 3, x ekseninin", f(0) kalıbı, "x uç değerleri de alabilir" | okunur | DÜZELTİLMELİ (U2P-20, 21, 22) |
| İpucu merdiveni | 1. basamak 8/8 kayıtta cevap vermiyor; 2. basamakta sabit sayılı örnek sızdırıyor (sifir, sifir-yok); 3. basamak 4 durumda cevabı veriyor | 3. basamak cevap değil | DÜZELTİLMELİ (U2P-17, 18) |
| Çözüm adımları | b = 0 ara adımı var, 8 adımdan kısası yok; tablo satırı hesapsız; birkaç iki işlemli adım | adım başına tek işlem | DÜZELTİLMELİ, ORTA-DÜŞÜK (U2P-19, 28) |
| Yerel bağlam | yalnız kapali-aralik Vmaks (≈ %20 tohum); diğer 7 kayıt sembolik | ≥ %50 | Üreteç için DÜŞÜK (U2P-13 açık) |
| Zorluk etiketi | 1×2 (kolay, sifir-yok), 2×5, 3×1 | uygun | GEÇER, DÜŞÜK (U2P-27) |

Örneklem: 300 tohumun tüm benzersiz şablonları okundu. Cümle sayımı 28 tam örnekte ve şablonlarda elle yapıldı; 300 tohumun hepsinde otomatik kelime sayımı yok.

---

## 1. Tur 1 bulguları: kapandı mı?

| Kod | Durum | Gerekçe |
|---|---|---|
| U2P-01 cevap sızıntısı | KAPANDI | Panel doğru cevabı zaten gösteriyor. Üstelik "sabit terim karşıya geçer" ve "x = 3 olur" gibi ezber/sonuç cümleleri gitti; artık "iki taraftan 4 çıkarılır" yöntemi söyleniyor. |
| U2P-02 çakışma teşhisi | KAPANDI | Tohum 4 `[0]` ve tohum 70 `[−1]` artık "Yalnız uçlar karşılaştırılmış. İçi 0 olan x = 0 noktası da aralıktadır; ters V'de en büyük değer bu noktada alınır." "olabilir" yerine "alınır". Teşhis uçlardaki değeri önceliyor (dizi sırası). Kalan: iki rol aynı sayıya düşünce yalnız biri yazılıyor (DÜŞÜK, kabul). |
| U2P-03 "3 x ekseninin" | KAPANDI, kalıntı | "iki yerde keser" ve koşullu cümle gitti. "maksimum değer, yani 3, x ekseninin üstündedir" hâlâ zor okunuyor (U2P-21). |
| U2P-04 döngüsel "yoktur" | KISMEN | minmax: "Önündeki eksi V'yi ters çevirir; grafiğin bir en üst noktası vardır, o noktanın y'si maksimum değerdir." ve "… en az 0 olur, bu yüzden V'nin bir en alt noktası vardır" iyi. Kapalı aralık Vmin "Minimum değer yoktur." hâlâ bulanık (U2P-20). |
| U2P-05 tek_sifir | KISMEN | Öz doğru ve kısa; ama 3 cümle ve "x + 3, 0'a 3 birim uzaktadır" özne belirsiz (U2P-24). |
| U2P-06 belirsiz ifade | KAPANDI | "sağ kol", "sabit terim", "ayrılır", "sınırlanır", "f bu x için hesaplanmaz", "Bu değer içi 0 iken" gitti. Kalan: "Soru azalan olduğu aralığı istiyor" tuhaf (U2P-23). |
| U2P-07 tersane | KAPANDI, kalıntı | "En büyük sapma yoktur.", bağlamlı 0 ve boy açıklamaları geldi; hedef artık aralığın içinde, sapma ≤ %5. Kalan: tek hikâye ve küçük biçim (U2P-26). |
| U2P-08 b = 0 adımı | KAPANDI | "Mutlak değerin içi x; içi 0 yapan x: x = 0." her yerde ve sonrasında ayrı adım. 8 karakterden kısa adım yok. |
| U2P-09 ipucu 2 özü veriyor | KISMEN | artan-azalan ve minmax düzeldi. sifir kaydında sabit sayılı örnek yeni sızıntı açtı (U2P-17). |
| U2P-10 ipucu 3 | KISMEN | "yazılır … çıkarılır: x = −4" biçimi geldi (iyi); ama bazı tohumlarda ilk adım cevabın kendisi (U2P-18). |
| U2P-11 Vmin ipucu 1 | KAPANDI | İpucu 1 artık "Önce x'in hangi aralıkta olduğuna bak: −2 ile 2 arası, uçlar dâhil." |
| U2P-12 çok işlemli adım | KISMEN | cozAdim ayrı satırlar üretiyor; kalan: minmax adım 2, görüntü adım 6, tablo, min-ic adım 4 (U2P-19, 28). |
| U2P-13 yerel bağlam | AÇIK | Hâlâ yalnız tersane Vmaks. DÜŞÜK, banka karşılıyor. |
| U2P-14 zorluk | KAPANDI | minmax-kolay ve sifir-yok zorluk 1 üretiyor; min-ic 2. Kalan: düz Vmaks 3'te (U2P-27). |
| U2P-15 artan-azalan | KISMEN | "Soru azalan … istiyor." eklendi; a < 0 cümlesi hâlâ alakasız hatalara yapışıyor (U2P-19). |

---

## 2. Yeni bulgular (U2P-16 …)

### U2P-16 · YÜKSEK · `mat-u2-mutlak-sifir-yok`: doğru cevap hep aynı, şeklinden anlaşılıyor
Kaynak: `sifirGen(["yok"])`. Bu kayıtta doğru şık her zaman "Sıfırı yoktur". Diğer üç şık sayı listesi ("−6 ve 0", "Yalnız −6", "Yalnız −3"). Tek sözcüklü şık hep o. Üstelik `sifir` kaydında ("Sıfırı yoktur" her soruda çeldirici) ters kural işliyor: zorluk 2'de hiç doğru olmuyor, zorluk 1'de hep doğru.
Sorun: Mehmet Eren birkaç soruda "Sıfırı yoktur'u seç" kısayolunu öğrenir; soruyu çözmeden zorluk 1'i geçer, kavram (x ekseninin üstünde/altında) pekişmez. Yeniden deneme yeni sayılarla gelse de şık biçimi aynı.
Öneri: Kolay kayıt kısa yol yerine karışık olsun: `sifirGen(["yok", "bir", "bir"])` ya da zorluk 1 için `a = 1` ve `["yok", "bir", "iki"]`; böylece "Sıfırı yoktur" bazen çeldirici olur. Zorluk 1 kısıtı a = 1, b küçük sayı ile korunur.

### U2P-17 · ORTA · Sıfır ipucu 2: sabit örnek cevabı ele veriyor
Kayıt: `sifir`, `sifir-yok`. Metin (tüm tohumlarda aynı): "f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. |x| = 5 ise x = 5 ya da x = −5; |x| = 0 ise x = 0; |x| = −5 olamaz."
- sifir-yok: "|x| = −5 olamaz" sorunun özü (ipucu 3 "|x + 3| = −3" ile birlikte cevap ortada).
- Örnekteki 5, soru sayılarıyla çakışıyor. Örnek `sifir #1` (|x| − 5): cevap "−5 ve 5", ipucu 2 aynı sayıları yazıyor. `sifir-yok #1` (|x| + 5): ipucunun "|x| = −5" aynen soruda.
- İkinci cümle 24 parçadan (sembol dâhil) oluşuyor, üç ayrı kural tek cümlede.
Öneri: Örnek sayıyı K aralığının (en çok 12) dışından seç ve üç kuralı üç kısa cümle yap: "Örnek: |x| = 15 ise x = 15 ya da x = −15." / "|x| = 0 ise yalnız x = 0." / "Mutlak değer eksi bir sayıya eşit olamaz." Sızıntıyı azaltmak için sifir-yok'ta üçüncü cümleyi çıkar ve yalnız "Mutlak değerin alabileceği değerleri düşün." de.

### U2P-18 · ORTA · İpucu 3 bazı tohumlarda cevabın kendisi
Ölçüt: "3. basamak bile cevabın kendisi değil."
- `minmax` x modu, a = 1 (örnek #6): "İlk adım: x − 2 = 0 yazılır. İki tarafa 2 eklenir: x = 2." Doğru şık "2". Ders sorusu: hangi x? Cevap ipucu 3'te.
  Öneri: x modunda a = 1 iken ipucu 3'ü "İlk adım: x − 2 = 0 yazılır. x'i yalnız bırakmak için iki tarafa ne yaparsın?" yap; olmazsa a = 1 için "içi 0 yap: x − 2 = 0" ile bitir.
- `kapali-aralik` Vmaks, sol uç değeri ≥ sağ uç değeri iken (L ≥ R, tohumların ≈ %50'si; örnek #0: L = R = 2): "İlk adım: f(178) = |178 − 180| = 2." Sonuç 2 = cevap.
  Öneri: ipucu 3'te küçük uçtaki değeri göster, eşitse "f(178) = |178 − 180|" ile dur ve sonucu yazma.
- `sifir-yok`: "İlk adım: −|x + 3| − 3 = 0 ⇒ |x + 3| = −3." (U2P-17 ile birlikte cevap.)
  Öneri: "İlk adım: −|x + 3| − 3 = 0 yazılır. İki tarafa 3 eklenir: −|x + 3| = 3." (−1 ile çarpmayı öğrenciye bırak).
- `goruntu` V, c = 0 (tohumların ≈ %9'u): "Dışarıda sayı yok, f(x) = |2x + 12|." Pratikte [0, ∞). Düşük etki, bilgi.

### U2P-19 · ORTA · Artan-azalan: "Tablo" adımı hesapsız, a < 0 cümlesi alakasız
- Çözüm: "3. Tablo: x = −5, −4, −3 için f(x) = 0, 1, 0." Üç hesap tek satırda, işlem gösterilmemiş; Mehmet Eren "0, 1, 0" nereden geldi göremez. "Tek adımda tek iş" ihlali.
  Öneri: üç satır: "f(−5) = −|−5 + 4| + 1 = 0." / "f(−4) = −|0| + 1 = 1." / "f(−3) = −|−3 + 4| + 1 = 0." Ya da "x = −5 için: f(−5) = 0; x = −4 için …" ile en azından işlem yaz.
- `esitsizlik_yonu` şablonu a < 0 olunca üçüncü cümleyi taşıyor: "Bu aralıkta x büyürken f büyür; f burada artandır. Soru azalan olduğu aralığı istiyor. |−2x − 8| = |2x + 8| olduğundan grafik yine V biçimindedir." Üçüncü cümle öğrencinin hatasıyla ilgisiz (yön karıştırmış). Kartta "|−x| = |x|" yok denecek kadar az geçiyor.
  Öneri: üçüncü cümleyi sil ya da yalnız `kavram_karisikligi`/çözümün ilk adımına koy.

### U2P-20 · ORTA · Kapalı aralık "Minimum değer yoktur." şablonu bulanık
Kayıt: `kapali-aralik` Vmin, `kapali-min-ic`. Metin: "|x + 1| hiç eksi olmaz ve x uç değerleri de alabilir; en küçük değer bir noktada gerçekten alınır."
Sorun: "x uç değerleri de alabilir" yarım (x'in uç değerleri anlamı). İkinci yarısı "gerçekten" ile döngüsel. Hatayı (kapalı aralıkta en küçük değer yok sanılması) açıklamıyor. Vmaks ve Tmaks'taki şablonlar bunu daha iyi söylüyor.
Öneri: "Kapalı aralıkta uçlar dahildir. |x + 1| bu aralıkta en küçük değerine ulaşır; minimum değer vardır."

### U2P-21 · ORTA-DÜŞÜK · "yani 3, x ekseninin üstündedir" okunuş
Kayıtlar: `sifir` (eksi_mutlak_karistirma ve kavram_karisikligi), `sifir-yok` (kavram_karisikligi, çözüm adımı 5). Üç virgülü art arda: "Önünde eksi var ama maksimum değer, yani 3, x ekseninin üstündedir; ters V aşağı inerken x eksenini keser." Virgül koyunca "3 x" çarpımı gitti, ama "3, x" öğrenciye sayı listesi gibi gelebilir (özellikle "3, x ekseninin" 7. sınıf notasyonunda). Sayıdan sonra hâl eki kuralı nedeniyle "3'tür" yazılamıyor (kod yorumu).
Öneri (ek gerektirmez): "Maksimum değer: 3. Bu değer x ekseninin üstündedir." İkinci cümle: "Ters V iki yanda aşağı iner ve x eksenini keser." ("aşağı inerken" kalıbı da gider.) Aynı kalıp: "Minimum değer: −5. Bu değer x ekseninin altındadır. V yukarı açık olduğu için x eksenini keser."

### U2P-22 · DÜŞÜK · f(0) şablonu ağır
`minmax`, `minmax-kolay` (okuma_hatasi): "f(0) = 1, grafiğin y eksenini kestiği noktanın y'sidir; minimum değer içi 0 olan x için bulunur." Zincirleme isim tamlaması ("grafiğin y eksenini kestiği noktanın y'si"). Zorluk 1 kayıtta özellikle ağır. İkinci yarıdaki "x için bulunur" belirsiz.
Öneri: "f(0) = 1, grafiğin y eksenini kestiği yerin değeridir. Minimum değer, içi 0 olan x'te bulunur."

### U2P-23 · DÜŞÜK · Küçük dil
- "Soru azalan olduğu aralığı istiyor." → "Soru f'nin azalan olduğu aralığı istiyor."
- "dâhil" şapkalı; kart "dahil" yazıyor (satır 803, 821, 877). Aynı sözcük iki yazım. Öneri: "dahil" ya da kartın kullandığı "içine alır / içindedir". "uçlar dâhil" ipucunda "uçlar da dahil" olarak yaz.
- "[ℝ] ℝ tanım kümesidir." iyi. "[(−∞, 0)] … bu uçta köşeli parantez kullanılır." iyi.
- "İki durumda da iki taraftan 3 çıkarılır." (carpim_sifir_isaret, iki sıfır): art arda "iki" okunmayı bozuyor → "Her iki durumda da sayı karşı tarafa geçerken işaret değişmeli; iki tarafa …". Öneri: "Her durumda iki taraftan 3 çıkarılır."
- "Bu, uçlardaki büyük değerdir" (kapalı): "Bu" neye işaret ediyor belirsiz. → "Seçtiğin sayı uçlardaki büyük değerdir, yani maksimumdur."

### U2P-24 · DÜŞÜK · `tek_sifir` şablonu 3 cümle
"Yalnız bir durum çözülmüş. |x + 3| = 3 ise x + 3, 0'a 3 birim uzaktadır ve bu uzaklık iki yönde ölçülür. Unutulan sıfır x = −6." İkinci cümle 17 kelime; "x + 3 … uzaktadır" öznesiz, "uzaklık iki yönde ölçülür" soyut. Kart "mutlak değer = uzaklık" fikrini veriyor, ama bu cümle kartın tersane/boru diliyle uyumsuz.
Öneri: "Yalnız bir durum çözülmüş. İçi 3 de olabilir, −3 de. Unutulan sıfır: x = −6." Uzaklık anlatımı ders kartında kalsın.

### U2P-25 · DÜŞÜK · `minmax-kolay`: zorluk 1 için çözüm yolu uzun
Örnek #0'ın çözümü 6 adım, ipucu 2 "İçi 0 yapan x'i bul, sonra f'yi bu x'te hesapla." Oysa zorluk 1'in öğrettiği şey "|…| en az 0, o hâlde f'nin en küçüğü c": ilk iki satır yeter. x0 dolambacı zorluk 1'e fazla.
Öneri: kolay için ipucu 2: "|x + 6| en az 0 olur. Sondaki −5 ile birlikte düşün." (sonucu söylemez) ve çözüm: 1. |x + 6| ≥ 0; 2. En küçük değeri 0'dır; 3. f = 0 − 5 = −5; 4. kontrol: x = −6 iken f(−6) = −5. Kayıt ayrı olduğu için bu mümkün. Soru kurgusu ve zorluk ataması (yalnız minimum, a = 1, önde eksi yok) Mehmet Eren için uygun; "Minimum değer yoktur" çeldiricisi de makul.

### U2P-26 · DÜŞÜK · Tersane bağlamı
Okunurluk iyi; "Gölcük'teki bir tersanede kesilen çelik parçaların boyu 180 mm olmalıdır." doğal, kartla tutarlı (sapma = hedefe uzaklık). Küçük notlar:
- "182 mm parçanın boyudur; soru sapmayı istiyor." ilk okuyuşta "182 mm parça" sanılıyor. → "182 mm, parçanın boyudur; soru sapmayı istiyor." (ya da "Parçanın boyu 182 mm; soru sapmayı istiyor.")
- "0 mm en küçük sapmadır, parça tam 180 mm iken." tamam. "En büyük sapma yoktur." gerçek hayatta öğrencinin seçeceği bir şık değil (yapay). Kabul; ters çevrilirse "Sapmanın bir üst sınırı yoktur." daha doğal.
- "uçlardan birinde vardır" L = R iken iki uçta da; DÜŞÜK.
- Her tohumda aynı hikâye kalıbı; ikinci bir bağlam (boru, kesim) yok (U2P-13).
- "Yalnız bir uç hesaplanmış" (eksik_adim) yanlış teşhis olabilir: küçük uç değerini alan öğrenci "büyüğünü seçmeyi" de atlayabilir. Öneri: "Uçlardaki iki değerden küçüğü seçilmiş; en büyük değer istenir."

### U2P-27 · DÜŞÜK · Zorluk atamaları
- `kapali-min-ic` zorluk 2: uygun. Uç durumu da 2'de kalsın: x0 uçtaysa "iki ucu karşılaştır" yöntemi de doğru sonuç verir; yani uç durumu iç durumdan kolay. Kartta x0'ın uçta olduğu örnek yok; ama "uçlar dahil" cümlesi bu durumu kapsıyor, "uç dahil mi?" sorusunu doğrudan sınıyor. 3'e almak gerekmez. Dikkat: "Minimum değer yoktur" çeldiricisi uç durumunda anlamlı (uç dahil değil sanılırsa) ve doğru teşhis ediyor.
- `kapali-aralik` zorluk 3 içinde düz Vmaks (tersanesiz, tohumların ≈ %30'u, örnek #8: f: [0, 6], |x − 2|) kartın birebir örneği ve iki hesaplık; zorluk 2 düzeyi. Zorluk 3'ü ters V, dış x0'lı Vmin ve tersane Vmaks taşıyor. Öneri: düz Vmaks'ı `kapali-min-ic` kardeşine (zorluk 2) kaydır ya da zorluk 3 kaydında yalnız bağlamlı Vmaks bırak.
- `sifir-yok` zorluk 1: çözüm 5-6 adım ve ters V'de −1 ile çarpma var (≈ %40); zorluk 1'in üst sınırı. Mevcut hâliyle kabul; U2P-16 düzelince ters V'siz (s = 1) başlatmak daha güvenli.

### U2P-28 · DÜŞÜK · Hâlâ iki işlemli adımlar ve telegrafik satır
- minmax adım 2: "Önünde eksi var: −|x + 4| ≤ 0 olur; en büyük değeri 0'dır." (iki bilgi)
- görüntü adım 6: "f(−6) = −|0| = 0; yani 0 değeri alınır."
- min-ic adım 4: "f(−1) = |0| = 0; |x + 1| hiç eksi olmaz."
- Tersane: "Büyüğü alınır: maksimum değer 2 olur ve x = 178 ve x = 182 noktalarında alınır." tek adımda iki bilgi.
- "Mutlak değerin içi x; içi 0 yapan x: x = 0." tek satırda tanım + sonuç. İki adım olsun: "Mutlak değerin içi x'tir." / "İçi 0 olsun diye x = 0 alınır." (Mevcut hâli kabul edilebilir; U2P-08 kapandı.)

### U2P-29 · DÜŞÜK · Hint 2 yöntemi bütünüyle veriyor (kabul edilebilir)
`goruntu` V ipucu 2 ("Sonra iki tarafa sondaki +6 sayısını ekle.") ve Vmaks/Tmaks ipucu 2 yöntemin tamamını söylüyor. Sonuç yok, merdiven düzgün. Not için.

---

## 3. İstenen odaklar: özet cevaplar

1. Tur 1 U2P-01…15: bölüm 1 tablosunda. Kapandı: 01, 02, 03, 06, 07, 08, 11, 14. Kısmen: 04, 05, 09, 10, 12, 15. Açık: 13.
2. Yeni kayıtlar:
   - `minmax-kolay`: kurgu ve zorluk 1 uygun (U2P-25: çözüm/ipucu sadeleşmeli, f(0) açıklaması ağır U2P-22).
   - `sifir-yok`: kurgu "tek durum" olduğu için hile açık, YÜKSEK (U2P-16).
   - `kapali-min-ic`: zorluk 2 doğru, uç durumu orada kalsın (U2P-27).
3. İpucu merdiveni: 1. basamak 8/8 temiz. 2. basamak: sifir/sifir-yok sızdırıyor (U2P-17). 3. basamak: minmax x (a = 1), kapali Vmaks (L ≥ R), sifir-yok (U2P-18). Yeni üçünde: minmax-kolay temiz (1 yön, 2 yöntem, 3 "x + 6 = 0 yazılır. İki taraftan 6 çıkarılır: x = −6." ilk adım); kapali-min-ic temiz (3. basamak x0'ı bulup "aralıkta mı bak" diyor, sonucu vermiyor); sifir-yok 2 ve 3 sızdırıyor.
4. Yanlış şıklar: tarama dosyasındaki tüm şablonlar okundu. Azarlama yok, tek cümlelik neden büyük ölçüde sağlanıyor (tek_sifir 3 cümle). Teşhis doğruluğu: ters V çakışmaları (tohum 4, 70) doğru. Belirsiz "Bu" zamiri (U2P-23), "x uç değerleri de alabilir" (U2P-20), "f(0)…y'sidir" (U2P-22).
5. Tersane: akıcı ve gerçekçi (U2P-26 küçük notlar). "dâhildir" okunur ama kartla yazım farkı var (U2P-23). "f(0) …" kalıbı ve "maksimum değer, yani 3, x ekseninin üstündedir" okunmuyor, değişmeli (U2P-21, 22).
6. Çözüm adımları: "Mutlak değerin içi x; içi 0 yapan x: x = 0." yeterli ve kabul; Tablo satırı eksik (U2P-19).
7. Yasak terimler: 9.2.2 bölümünde yok (kaynak taraması ve 300 tohum).

## En önemli 3 düzeltme
1. U2P-16: `sifir-yok` kaydını karışık yap (en az "bir" ve "yok" karışımı) ki "Sıfırı yoktur" bazen yanlış olsun.
2. U2P-17 ve U2P-18: sıfır ipucu 2'deki sabit `|x| = 5` örneğini kaldır/değiştir; ipucu 3'te sonucu yazma (minmax x a = 1, kapali Vmaks, sifir-yok).
3. U2P-21 ve U2P-20: "maksimum değer, yani 3, x ekseninin …" ve "x uç değerleri de alabilir" kalıplarını yeniden yaz.

## Ölçülemeyen ya da örneklenen
- 300 tohumun tüm sorularında otomatik kelime sayımı yok; 28 tam örnek ve tüm benzersiz şablon elle sayıldı.
- Zorluk dağılımı bankada (%50/%35/%15) bu turda ölçülmedi.
- Yeniden deneme mantığı (`geriBildirimKur`) kodda okunmadı; kullanıcı notuna güvenildi.
- Oranlar (L ≥ R ≈ %50, düz Vmaks ≈ %30, tersane ≈ %20) üreteç kodundaki olasılıklardan türetildi, 300 tohumda sayılmadı.
