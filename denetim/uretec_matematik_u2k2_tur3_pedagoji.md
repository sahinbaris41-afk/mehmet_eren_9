# Üreteç denetimi · Matematik 9.2.2 Mutlak değer fonksiyonu · Tur 3 (son) · Pedagoji

Denetçi: pedagoji-denetcisi. Düzeltme yapılmadı.
Kapsam: `panel/motor/uretecler/matematik.js` "9.2.2" bölümü (satır 1401-1888), 8 kayıt.
Kanıt: scratchpad `uretec_tarama_u2k2_tur3.md` (300 tohum; her kayıt için tüm benzersiz yanlış şık şablonları, 10 ters V ve 4 tersane tam örneği), `denetim/uretec_ornekleri_u2k2.md` (30 örnek), üreteç kaynak kodu (minmaxGen, sifirGen, artan-azalan, kapaliGen), kart `matematik-u2-k2.json` (dil karşılaştırması için grep).
Panel notu uygulandı: yanlıştan sonra doğru cevap ve çözüm görünür; açıklamada sonucun geçmesi sızıntı sayılmadı. "dâhil" yazımı kullanıcı kararı, bulgu sayılmadı.

## KARAR: TEMİZ

Tur 2'nin tüm ORTA ve YÜKSEK bulguları (U2P-16…21) kapandı. Kalanlar DÜŞÜK: ipucu basamaklarında iki küçük tutarsızlık (artan-azalan a = 1, minmax-kolay ipucu 2/3 tekrarı) ve birkaç biçim notu. Hiçbiri anlamayı engellemiyor; isteğe bağlı.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Yasak terim (tepe, simetri, grafik "köşe", katla, kol, sabit terim) | 0/300 tohum; kaynakta 9.2.2 bölümünde yalnız "köşeli parantez" (parantez anlamı) | 0 | GEÇER |
| Kök cümle uzunluğu | en uzun 13 kelime (tersane cümleleri 11-13) | ≤ 20 | GEÇER |
| Açıklama uzunluğu | tüm şablonlar 1-2 cümle; tek_sifir artık tek cümle | tek cümlelik neden | GEÇER |
| Azarlama dili | yok (edilgen: "çözülmüş", "alınmış") | yok | GEÇER |
| Kartla aynı dil | "x ekseninin üstünde/altında/tam üzerinde", "en alt/üst nokta" kartla aynı (kart satır 1021, 1110-1112) | aynı | GEÇER |
| Doğru teşhis, çakışma | ters V çakışmaları 2/2 doğru; x0 = 0 durumunda "0 ve 0" şıkkı `tekilSay < 3` ile elenir (kodda doğrulandı) | 0 yanlış | GEÇER |
| İpucu 1 (yön) | 8/8 kayıtta cevap vermiyor | cevap yok | GEÇER |
| İpucu 2 (yöntem) | 8/8 yöntem; sifir ailesinde 15/20/25 örneği soruyla çakışmıyor | cevap yok | GEÇER (U2P-31 DÜŞÜK) |
| İpucu 3 (ilk adım) | 7/8 kayıtta sonuç yazılmıyor; artan-azalan a = 1 iken x0 yazılıyor | sonuç yok | GEÇER, DÜŞÜK (U2P-31) |
| Çözüm adımları | b = 0 ayrı adım; tablo satırları hesaplı; minmax ve görüntü adımları bölündü; kalan 2 iki bilgili satır | adım başına tek işlem | GEÇER, DÜŞÜK (U2P-33) |
| Yerel bağlam | yalnız kapali-aralik Vmaks (tersane, ≈ %11 tüm bölüm) | ≥ %50 | Üreteç için DÜŞÜK (U2P-13 açık) |
| Zorluk etiketi | 1×2, 2×4, 3×1... (minmax-kolay 1, sifir-yok 1, minmax 2, goruntu 2, sifir 2, artan-azalan 2, kapali-min-ic 2, kapali-aralik 3) | uygun | GEÇER |

Örneklem: 300 tohumun tüm benzersiz şablonları okundu (7 kayıt için hepsi, kapali-aralik dâhil). Cümle sayımı 30 tam örnekte ve şablonlarda elle yapıldı; 300 tohumun hepsinde otomatik kelime sayımı yok. Oranlar (c ≠ 0 ⇔ yok, a = 1 payı %25, h ∈ {1,2,3} payı) kod olasılıklarından türetildi, tohumda sayılmadı.

---

## 1. Tur 2 bulguları: kapandı mı?

| Kod | Durum | Gerekçe |
|---|---|---|
| U2P-16 sifir-yok hep aynı doğru | KAPANDI (kalıntı DÜŞÜK, U2P-30) | `sifirGen(["yok","bir"], true)`: doğru şık %50 "Sıfırı yoktur", %50 "Yalnız k". Şık biçimi (1 "yok", 2 "Yalnız", 1 "ve") her iki türde aynı; tek sözcüklü şık artık kısayol değil. |
| U2P-17 sifir ipucu 2 sabit örnek | KAPANDI | "|x| = 15 ise x = 15 ya da x = −15." Kod 15/20/25'ten soruyla çakışmayanı seçiyor (K ≤ 12, a = 1 iken b ≤ 5; sifir'de b = 15 olursa 20 gelir). Üç ayrı kural gitti, tek örnek + "Mutlak değer hiç eksi olmaz." kaldı. |
| U2P-18 ipucu 3 sonucu veriyor | KAPANDI (tek istisna U2P-31) | minmax x, a = 1: "Şimdi x'i yalnız bırak: iki tarafa 2 ekle." (sonuç yok). Tersane: "İlk adım: f(179) = |179 − 180| yazılır." (L = R). Farklı uçta küçük uç hesaplanıyor, cevap değil. sifir-yok: "…−|x + 3| − 3 = 0 yazılır. Şimdi … iki tarafa 3 ekle." |
| U2P-19 tablo hesapsız, a < 0 cümlesi | KAPANDI | "Solundan bir sayı: f(−5) = −|−5 + 4| + 1 = 0." / "İçi 0 iken: …" / "Sağından bir sayı: …" üç ayrı satır. esitsizlik_yonu şablonu 2 cümle, a < 0 cümlesi çözümün 1. adımına taşındı. |
| U2P-20 "x uç değerleri de alabilir" | KAPANDI | "Uçlar aralığa dâhildir; bu yüzden en küçük değer vardır ve hesaplanabilir." Okunur, tek cümle. (İsteğe bağlı: "…vardır" ile "uçlar dâhil" arasındaki bağ biraz zayıf, kabul.) |
| U2P-21 "yani 3, x ekseninin" | KAPANDI | "Maksimum değer: 3. Bu değer x ekseninin üstündedir. Ters V iki yanda aşağı iner ve x eksenini keser." Üç kısa cümle, kartla aynı sözcükler. |
| U2P-22 f(0) şablonu | KAPANDI | "f(0) hesaplanmış; maksimum değer, içi 0 olan x'te bulunur." Kısa, zincirleme isim tamlaması yok. |
| U2P-23 küçük dil | KAPANDI | "Soru f'nin azalan olduğu aralığı istiyor." / "Seçtiğin sayı uçlardaki büyük değerdir…" / "Her durumda iki taraftan 3 çıkarılır." Tek not: "Her durumda" için "durum" daha önce tanımlı değil (DÜŞÜK, U2P-34). |
| U2P-24 tek_sifir 3 cümle | KAPANDI | "Yalnız bir durum çözülmüş: içi 3 ya da −3 olabilir, unutulan sıfır x = −6." Tek cümle, 14 kelime. |
| U2P-25 minmax-kolay uzun yol | KAPANDI (kalıntı DÜŞÜK, U2P-32) | Kendi ipucu ve 5 adımlık çözümü var. İpucu 2 ile 3 tekrar ediyor. |
| U2P-26 tersane | KAPANDI | "181 mm, parçanın boyudur; soru sapmayı istiyor." "Uçlardaki iki değerden küçüğü seçilmiş; en büyük değer istenir." |
| U2P-27 zorluk | KAPANDI | Düz Vmaks kapali-min-ic'e (zorluk 2) taşındı; kapali-aralik 3: tersane Vmaks, dış Vmin, Tmaks. |
| U2P-28 iki işlemli adım | KISMEN (DÜŞÜK) | Bölünenler: minmax adım 2, görüntü adım 6-7, tersane "Büyüğü alınır / Bu değer … alınır". Kalan: U2P-33. |
| U2P-29 ipucu 2 yöntemi veriyor | KABUL | Not için. |
| U2P-04 | KAPANDI | Vmin "Minimum değer yoktur." artık net, "uçlar dâhil" nedeniyle. |
| U2P-05 | KAPANDI | tek_sifir tek cümle. |
| U2P-09 | KAPANDI | Sabit sayılı örnek 15/20/25'e döndü ve çakışmıyor. |
| U2P-10 | KAPANDI (istisna U2P-31) | Ters V c = 0 görüntüde "−|x + 6| ≤ 0" yazılıyor; bu ilk adımdır, parantez seçimi öğrencide. Bilgi. |
| U2P-12 | KAPANDI | Kalan U2P-33. |
| U2P-15 | KAPANDI | a < 0 cümlesi hatayla ilgisiz değil artık, çözüm adımına gitti. |
| U2P-13 yerel bağlam | AÇIK (isteğe bağlı) | Yalnız kapali-aralik Vmaks tersane. Banka karşılıyor; üreteç için DÜŞÜK. |

---

## 2. İstenen odaklar

### 2.1 U2P-16: sifir-yok'ta şıktan cevap çıkıyor mu? Zorluk 1 uygun mu?
- Şık biçimi artık cevabı vermiyor. Üretilen kümeler:
  - yok: doğru "Sıfırı yoktur" + {"x0−dd ve x0+dd", "Yalnız x0−dd", "Yalnız x0"}.
  - bir: doğru "Yalnız x0" + {"Sıfırı yoktur", "Yalnız −x0", "−x0 ve x0"}.
  İkisinde de 1 "Sıfırı yoktur", 2 "Yalnız", 1 "ve" var. Tek sözcüklü şık ne her zaman doğru ne her zaman yanlış.
- Kalan ince iz (DÜŞÜK): U2P-30.
- Zorluk 1 uygun: a = 1, b ≤ 5, çözüm 5-6 adım. Ters V (%40) −1 ile çarpma ister, zorluk 1'in üst sınırı; kabul.

### 2.2 İpucu merdiveni her kayıtta

| Kayıt | 1 (yön) | 2 (yöntem) | 3 (ilk adım, sonuç yok?) |
|---|---|---|---|
| minmax | cevap yok | yöntem | EVET: "İlk adım: 3x − 9 = 0 yazılır. İki tarafa 9 eklenir: 3x = 9. Şimdi iki tarafı 3'e böl." a = 1: "…x'i yalnız bırak: iki tarafa 2 ekle." |
| minmax-kolay | cevap yok | yöntem, ama 3 ile tekrar (U2P-32) | EVET |
| goruntu | cevap yok | yöntem | EVET (c = 0 iken ilk adım eşitsizliğin kendisi; kabul) |
| sifir | cevap yok | 15/20/25 örneği | EVET: "Şimdi mutlak değerli kısmı yalnız bırak: iki taraftan 3 çıkar." |
| sifir-yok | cevap yok | örnek + "Mutlak değer hiç eksi olmaz." | EVET |
| artan-azalan | cevap yok | yöntem | HAYIR yalnız a = 1: "İki taraftan 4 çıkarılır: x = −4." (U2P-31) |
| kapali-aralik | cevap yok | yöntem | EVET: tersane L = R iken sonuç yok, farklıysa küçük uç (cevap değil) |
| kapali-min-ic | cevap yok | yöntem | EVET |

- Yeni 15/20/25 örneği anlaşılır: tek satır, iki sonuçlu, sembolik ama kısa. Soruyla karışmıyor: `find` ile soruda geçen mutlak değerli sayılardan kaçınılıyor, örnek |x| biçiminde, soru |x + 3| biçiminde.
- "Şimdi iki tarafı 3'e böl." tarzı bitiş Mehmet Eren için doğal: derste öğretmenin "şimdi iki tarafı 3'e böl" demesi gibi, yönergeyle bitiyor ve ona bir iş bırakıyor. Tek not: aynı ipucunda edilgen ("yazılır, eklenir") ve emir ("böl") karışıyor; okunuşu bozmuyor, DÜŞÜK (U2P-34).

### 2.3 Yeni kalıplar ve açıklamalar
- "Maksimum değer: 3. Bu değer x ekseninin üstündedir." Akıcı, kartla aynı. Yanlış şıkka neden: ters V'nin x eksenini kestiğini söylüyor.
- "Minimum değer yoktur." çeldiricilerinin açıklamaları (4 farklı şablon): tek cümlelik neden, azarlama yok.
- "|x + 3| = −3 yerine |x + 3| = 3 çözülmüş; eksi işareti kaybolmuş. Bu sayılar yerine konunca 0 çıkmaz: f(0) = −6." İki cümle, ikincisi 9 kelime; açık. Kontrol yolunu da öğretiyor.
- "Mutlak değer işareti yazılmadan x + 3 = −3 yazılmış." Biraz resmi; "Mutlak değer işareti atılıp x + 3 = −3 yazılmış." daha doğal. DÜŞÜK (U2P-34).
- Yasak terim: yok. "Köşeli parantez" yalnız parantez anlamında (satır 1557).
- Azarlama dili: yok.

### 2.4 Zorluk atamaları
- minmax-kolay 1: uygun (tek soru türü, a = 1, eksi yok, 5 adım).
- sifir-yok 1: uygun; U2P-30 notu.
- kapali-min-ic 2: uygun. Düz Vmaks (iki hesap) ve Vmin iç/uç bu düzeyde doğru. Id adı ("min-ic") artık düz Vmaks'ı da içeriyor, yanıltıcı; öğrenciye görünmüyorsa önemsiz. Yalnız bakım notu.
- kapali-aralik 3: tersane Vmaks (okuma + iki hesap), dış Vmin ve Tmaks (iç x0 kontrolü); sınav seviyesine uygun.

### 2.5 Yasak terimler
"tepe", "simetri", grafik "köşe", "katla": 0/300 tohum; kaynak grep'te 9.2.2 aralığında yalnız "köşeli parantez".

---

## 3. Yeni bulgular (U2P-30 …)

### U2P-30 · DÜŞÜK · `mat-u2-mutlak-sifir-yok`: kısayol izleri
İki iz var, hiçbiri cevabı tek başına vermiyor:
1. Sondaki sayı c ≠ 0 ⇔ "yok", c = 0 ⇔ "bir". Bu kayıtta "iki sıfır" türü yok; öğrenci "dışarıda sayı varsa sıfırı yoktur" kısayolunu kavramı anlamadan öğrenebilir. (Kavram: V'nin en alt noktası x ekseninin üstünde mi?)
2. Şıkta ± simetri: "bir" türünde "Yalnız k" ile "Yalnız −k" ikisi birlikte görünür, "yok" türünde görünmez (x0 = 0 dışında).
Öneri (isteğe bağlı): `sifirGen(["yok","bir","iki"], true)`; zorluk 1'e "iki" a = 1 ile çok uygun, ikisi de x eksenini kesme sorusu. Böylece c ≠ 0 de her zaman "yok" değil. Cevap oranı: "Sıfırı yoktur" ≈ %33.

### U2P-31 · DÜŞÜK · `artan-azalan`: ipucu 3 a = 1 iken x0'ı yazıyor
`ilkAdim(a, b)` a = 1 iken "İki taraftan 4 çıkarılır: x = −4." diyor (örnek #0, #7). Aralığın ucu cevabın yarısı; kalan iş yön seçimi (ipucu 2). Diğer kayıtlar (minmax, sifir) ipucu 3'ü sonuç yazmadan bitiriyor. a ≠ 1 iken ilkAdim zaten bölmeden önce duruyor.
Öneri: artan-azalan için `ilkAdimYari(a, b)` kullan ("Şimdi x'i yalnız bırak: iki taraftan 4 çıkar."); tutarlı olur. Etki tohumların ≈ %25'i (a = 1).
Yakın not: `kapali-aralik` Vmin dış, p = 2h (h ∈ {1,2,3}) iken ipucu 3 "x = 3" yazıyor, cevap da 3 (örnek #1); tohumların ≈ %3'ü. Hint "aralıkta mı bak" ile bitiyor, etki küçük; kabul.

### U2P-32 · DÜŞÜK · `minmax-kolay`: ipucu 2 ile 3 aynı şeyi söylüyor
İpucu 2: "|x + 6| en az 0 olur. Bunu sondaki −5 ile birlikte düşün." İpucu 3: "|x + 6| ≥ 0 yazılır; bu ifadenin en küçük değeri 0'dır. Şimdi sondaki −5 sayısını hesaba kat." Basamaklar yükselmiyor; ayrıca "hesaba kat" belirsiz. c = 0 iken ipucu 3: "Şimdi dışarıda sayı olmadığını hesaba kat." (kodda `sonda`) tuhaf cümle.
Öneri: İpucu 2: "Önce mutlak değerli kısmın en küçük değerini bul. Sonra sondaki −5 ile işlem yap." İpucu 3: "|x + 6| ≥ 0 olur; en küçük değeri 0'dır. Şimdi bu 0'a sondaki −5'i ekle." c = 0 için: "…Dışarıda sayı yok, bu yüzden f'nin en küçük değerini yaz."

### U2P-33 · DÜŞÜK · İki bilgili adımlar (kalan)
- sifir "bir" türü adım: "En alt nokta (−2, 0), tam x ekseninin üzerinde; tek sıfır vardır."
- sifir-yok adım 5: "Maksimum değer: −3. Bu değer x ekseninin altındadır." ve adım 4: "Mutlak değer hiç eksi olmaz; |x + 3| = −3 olamaz."
- kapali-aralik "Bu değer x = 179 ve x = 181 noktalarında alınır." Tersanede x bir boy olduğu için "noktalarında" soyut; "x = 179 mm ve x = 181 mm iken alınır" daha somut.
- artan-azalan a ≠ 1 iken "f(−5) = |−2·(−5) − 8| = 2." üç işlem tek satır (çarpma, çıkarma, mutlak değer). Kabul edilebilir.
Hepsi okuma yükünü artırmıyor; isteğe bağlı.

### U2P-34 · DÜŞÜK · Küçük dil
- "Her durumda iki taraftan 3 çıkarılır." (carpim_sifir_isaret iki sıfır): "durum" öğrencinin o ana kadar görmediği iki durumu çağırıyor. Öneri: "İki durumda da iki taraftan 3 çıkarılır." ya da "İşaretler ters alınmış. Her iki tarafta da 3 çıkarılır." (U2P-23'te önerilen ikinci yazım "iki"leri art arda getirdiği için kapatılmıştı; yukarıdaki ilk öneri yeterli.)
- "Mutlak değer işareti yazılmadan x + 3 = −3 yazılmış." → "Mutlak değer işareti atılıp x + 3 = −3 yazılmış."
- Tersane `maksimum_varlik`: "En büyük sapma yoktur." yapay şık; "Sapmanın bir üst sınırı yoktur." daha doğal. Kabul edilebilir.
- Aynı ipucunda edilgen ve emir karışımı ("yazılır … eklenir … Şimdi … böl") okunuyor, rahatsız etmiyor.

---

## En önemli 3 düzeltme (hepsi isteğe bağlı)
1. U2P-31: artan-azalan ipucu 3 için `ilkAdimYari` kullan; a = 1 iken x0 yazılmasın.
2. U2P-30: sifir-yok'a `"iki"` türünü ekle: c ≠ 0 kısayolu ve ± simetri izi kaybolur.
3. U2P-32: minmax-kolay ipucu 2 ve 3'ü ayrıştır; c = 0 cümlesini ("dışarıda sayı olmadığını hesaba kat") yeniden yaz.

## Ölçülemeyen ya da örneklenen
- 300 tohumun tüm sorularında otomatik kelime sayımı yok; 30 tam örnek ve tüm benzersiz şablon elle sayıldı.
- Zorluk dağılımı bankada (%50/%35/%15) bu turda ölçülmedi.
- Yeniden deneme mantığı (`geriBildirimKur`) okunmadı; kullanıcı notuna güvenildi.
- Oranlar (a = 1 payı %25, c ≠ 0 ⇔ yok, h ∈ {1,2,3} ≈ %3, tersane ≈ %11) kod olasılıklarından türetildi, tohumda sayılmadı.
- Kart "kitap dili" katmanının tamamı karşılaştırılmadı; yalnız ortak sözcükler (x ekseninin üstü/altı/üzeri, en alt/üst nokta, dâhil) grep ile kontrol edildi.
