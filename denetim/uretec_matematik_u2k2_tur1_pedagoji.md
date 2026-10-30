# Üreteç denetimi · Matematik 9.2.2 Mutlak değer fonksiyonu · Tur 1 · Pedagoji

Denetçi: pedagoji-denetcisi. Düzeltme yapılmadı.
Kapsam: `panel/motor/uretecler/matematik.js` "9.2.2" bölümü, 5 üreteç.
Kanıt: `denetim/uretec_ornekleri_u2k2.md` (29 örnek), scratchpad `uretec_tarama_u2k2.md` (300 tohum, benzersiz şablonlar: minmax 75, görüntü 42, sıfır 42, artan-azalan 22, kapalı aralık 17). Şablonların hepsi satır satır okundu. Yasak terim taraması (tepe, simetri, köşe, katla): 300 tohumda yok. `kol` ve `sabit terim` kartta geçmiyor (aşağıda).

## KARAR: DÜZELTİLMELİ

Yanlış şık açıklamalarının çoğu doğru cevabı kendisi yazıyor. Kapalı aralıkta bazı açıklamalar öğrencinin gerçek hatasını yanlış adlandırıyor. İpucu 2 bazı üreteçlerde çözümün özünü veriyor. Dil, kök uzunluğu, terim tutarlılığı ve zorluk etiketleri sorunsuz.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Yasak terim | 0/300 tohum | 0 | GEÇER |
| Kök cümle uzunluğu | en uzun ≈ 13 kelime (artan-azalan kökü), bağlam cümleleri 9–13 | ≤ 20 | GEÇER |
| Açıklama uzunluğu | en uzun cümle ≈ 15 kelime; açıklamalar 1–2 cümle | tek cümlelik neden | GEÇER (2 cümleli olanlar var, DÜŞÜK) |
| Azarlama dili | yok | yok | GEÇER |
| Yanlış açıklama: cevap sızıntısı | sızdıran şablon: ≈ 40/198 | 0 | KALIR (U2P-01) |
| Yanlış açıklama: doğru teşhis | 3 çakışma örneği (kapalı aralık) | 0 | DÜZELTİLMELİ (U2P-02) |
| İpucu merdiveni | 15 örnekte 1. basamak cevap vermiyor; 2. basamak üç üreteçte çözümün özü | 3 basamak, yön/yöntem/ilk adım | DÜZELTİLMELİ (U2P-09, 10) |
| Adım başına tek işlem | zincirli adım: görüntü, minmax, sıfır, kapalı | tek işlem | DÜZELTİLMELİ, DÜŞÜK (U2P-12) |
| Terim tutarlılığı | kartla uyumlu (minimum/maksimum değer, en alt/üst nokta, kapalı aralık, ters V) | uyumlu | GEÇER (`kol`, `sabit terim` hariç, U2P-06) |
| Yerel bağlam | yalnız kapalı aralık Vmaks (tersane levhası); diğer 4 üreteç sembolik | ≥ %50 | Üreteç için DÜŞÜK, bankada karşılanıyor (U2P-13) |
| Zorluk etiketi | 4×2, 1×3 | uygun | GEÇER, DÜŞÜK not (U2P-14) |

Örneklem: `uretec_ornekleri_u2k2.md` içindeki 29 örnek tam okundu. Şablon analizi tarama dosyasındaki tüm benzersiz şablonlara dayanıyor. Cümle sayımı elle, bu örneklerde yapıldı. 300 tohumun tamamında otomatik kelime sayımı yapılmadı.

---

## Bulgular

### U2P-01 · YÜKSEK · Yanlış şık açıklaması doğru cevabı yazıyor
Üreteçler: minmax, görüntü, sıfır, artan-azalan, kapalı aralık. Açıklama, öğrenci yeniden deneyebiliyorsa "yanlış şıktan doğruya" kopyalama kapısı açıyor. Yeniden deneme yoksa da öğrenci ne yapacağını değil sonucu okuyor. Referans örnek `ornek.js` ("Üsleri çarptın; aynı tabanlı sayılar çarpılırken üsler toplanır.") sonucu yazmıyor, kuralı söylüyor.

| Şablon (hata_turu) | Alıntı | Sorun |
|---|---|---|
| oteleme_yonu (minmax, görüntü) | minmax #7 `[2]`: "Sondaki −2 işaretiyle eklenir: minimum değer 0 − 2 = −2." Görüntü: "f(x) ≥ 0 + 6 = 6." Nokta: "y = 0 + 2 = 2." | Doğru cevabı kelimesi kelimesine yazıyor. |
| carpim_sifir_isaret (minmax, artan-azalan) | minmax #1 `[−3]`: "3x − 9 = 0 denkleminde sabit terim karşıya işareti değişerek geçer; x = 3 olur." | Doğru x yazılı. Üstelik "sabit terim karşıya geçer" ezber cümlesi, kartta yok. |
| eksi_mutlak_karistirma, aralik_uc (görüntü) | "Önünde eksi yok; |2x + 12| ≥ 0 olduğundan f(x) ≥ 6 olur." / "x = −6 için f değeri 6 olur; 6 görüntü kümesine girer, köşeli parantez gerekir." | Doğru uç değeri ve parantez yazılı. |
| eksi_mutlak_karistirma (kapalı aralık) | tohum 43 `[5]`: "−|x + 1| ≤ 0 olduğundan f(x) ≤ 4 olur." | Doğru cevap 4 yazılı. |
| carpim_sifir_isaret, tek_sifir (sıfır) | `[0 ve 6]`: "x + 3 = 3 ise x = 0, x + 3 = −3 ise x = −6 olur; işaretler ters alınmış." `[Yalnız 0]`: "x = −6 değeri de bir sıfırdır." | İki kök de yazılı. |

Öneri (hepsi için aynı ilke): açıklama hatayı adlandırsın, sonucu vermesin, bir "dene" yönü göstersin.
- oteleme_yonu: "Dışarıdaki sayı olduğu gibi eklenir, işareti de gelir. Sondaki sayıya bir daha bak." (sayıyı yazma)
- carpim_sifir_isaret: "İçi 0 yapan x'i bulurken sabiti karşıya geçirince işaret değişir. İşlemi bir daha yap." (x'i yazma)
- görüntü eksi_mutlak: "Önünde eksi olmayan mutlak değer 0'dan küçük olamaz. Değerler hangi yöne uzanıyor?"
- görüntü aralik_uc: "En küçük değer 0 iken alınıyor. Alınan değer aralığa girer; uç için hangi parantez gerekir?"
- sıfır işaretler ters: "Mutlak değerin içi iki durumda aynı sonucu verir: pozitif ve negatif. İkisini ayrı ayrı çöz, sonra işaretlere bak."
- sıfır tek_sifir: "Mutlak değerli denklem iki durum verir. Sen yalnız birini çözdün; diğer durumu da yaz."

### U2P-02 · YÜKSEK · Kapalı aralık: çakışan değerde yanlış teşhis
Üreteç: `mat-u2-mutlak-kapali-aralik`, Tmaks modu. Seçenek değeri hem "maksimumun x'i" hem "uçlardaki büyük değer" ise yalnız biri yazılıyor.
- Tohum 4: `f: [−1, 2] → ℝ, f(x) = −|x| + 1`. Şık `0`: "x = 0, maksimum değerin alındığı x değeridir; soru f değerini istiyor." Oysa 0 aynı zamanda f(−1) = 0, yani uçlardaki büyük değer. Bu, "en büyük değer uçtadır" hatasının tipik cevabı. Açıklama gerçek hatayı gizliyor. (Ornek dosyasında aynı `0` şıkkı kavram/maksimum_varlik etiketiyle de geliyor; hangisinin görüneceği havuz sırasına bağlı.)
- Tohum 70: `[−4, 4]`, `−|x + 1| + 2`. Şık `−1`: "x = −1 ... x değeridir." −1 aynı zamanda f(−4) = −1, uçlardaki büyük değer.
- Tohum 41: şık `2` "maksimum_varlik" açıklamasını veriyor; 2 aynı zamanda x = 2. Bu yönde teşhis doğru, ama tersi yönde (okuma_hatasi seçilince) aynı sorun.
- Tohum 30 ve benzerleri: "Ters V'de en büyük değer uçta değil, aralığın içindeki x = 5 noktasında olabilir." Bu cümle "olabilir" diyor; kural kesin: x aralıktaysa orada alınır.

Öneri: şık değeri hem x0 hem uç değeri ise tek birleşik açıklama kullanılsın: "Bu sayı hem en üst noktanın x'i hem de uçtaki değer. Soru f değerinin en büyüğünü istiyor; en üst noktada hesapla." Ya da bu tür tohumda iki rolden birini çeldirici olarak seçmeyip değer çakışmasını `eleme` ile at. "olabilir" yerine "alınır" yaz.

### U2P-03 · ORTA · "3 x ekseninin" okunamıyor ve "iki yerde keser" sızdırıyor
Sıfır üreteci, `eksi_mutlak_karistirma`: "Önünde eksi var; maksimum değer 3 x ekseninin üstündeyse grafik x eksenini iki yerde keser." Rakamın hemen ardından "x" geldiği için "3 x" çarpım gibi okunuyor. Cümle de koşullu ("üstündeyse"); öğrenci hatasını söylemiyor. "iki yerde keser" doğru cevabın iki kök olduğunu söylüyor. Aynı kalıp `[Sıfırı yoktur]` için "Minimum değer −3, x ekseninin altında; grafik x eksenini iki yerde keser." (virgül var, daha iyi ama yine sızıntı).
Öneri: "Eksi, grafiği aşağı açar; ama en üst nokta x ekseninin üstündeyse grafik x eksenine ulaşır. En üst noktanın y değerine bak." (sayıyı yazma, "iki yer" deme)

### U2P-04 · ORTA · "yoktur" şıkları döngüsel gerekçe veriyor
- Kapalı aralık ters V: "Tanım kümesi kapalı aralık; maksimum değer vardır." Gerekçe yok, cevabı tekrar ediyor.
- Kapalı aralık V: "Tanım kümesi kapalı aralık ve |x + 1| hiç eksi olmaz; minimum değer vardır." Aynı.
- Minmax: "Önündeki eksi grafiği aşağı açar; −|x + 4| ≤ 0 olur. Maksimum değer vardır." "Aşağı açar" ile "maksimum vardır" arasındaki bağ eksik.
- Minmax: "|x − 6| hiç eksi olmaz; en küçük değeri 0'dır. V yukarı açılır: maksimum değer yoktur ama minimum değer vardır." İlk cümle |x − 6| için; soru f'nin minimumunu (−2) soruyor, "en küçük değeri 0" f'ninki gibi okunabilir.

Öneri:
- Kapalı aralık: "Kapalı aralıkta uç noktalar da alınır; f uçlar arasında bir en büyük değere ulaşır. Hangi x'te?"
- Minmax eksi: "Eksi grafiği aşağı açar; yani grafiğin bir en üst noktası var. Bu noktanın y değeri maksimum değerdir."
- Minmax V: "|x − 6| için en küçük değer 0. V yukarı açılır; grafiğin bir en alt noktası var, minimum değer vardır."

### U2P-05 · ORTA · tek_sifir, boş ve belirsiz
- Tohum 14 `[Yalnız 1]`: "x = −1 durumu da 0 verir; x = −1 değeri de bir sıfırdır." İki yarım cümle aynı şeyi söylüyor. Öğrenci "x = −1" ile "x = −1"in farkını anlamıyor.
- "durumu da 0 verir": hangi şey 0 veriyor? Öznesi yok.
- "[−1 ve 1] |x − 1| = 0 denklemi |x| = 1 ile aynı değildir": |x| = 1 kavramı öğrencinin kafasında yok, abstract.
Öneri: tek_sifir ve çift kök hatası için tek şablon: "Mutlak değerli denklemde içi pozitif ya da negatif olabilir. Yalnız bir durumu çözdün." İçi 0 için: "Sağ taraf 0 ise +0 ile −0 aynı sayıdır; tek çözüm çıkar."

### U2P-06 · ORTA · Belirsiz, kartta olmayan ya da soyut ifadeler
| Alıntı | Sorun | Öneri |
|---|---|---|
| "işaretiyle eklenir" (oteleme_yonu) | Kimin işareti? Eklenmek nedir? | "Dışarıdaki sayı işaretiyle birlikte yazılır." |
| "sabit terim karşıya işareti değişerek geçer" | Kartta geçmiyor | "Eşitliğin öbür tarafına geçen sayının işareti değişir." |
| "sağ kol yükselir" (artan-azalan) | `kol` kartta yok | "V'nin sağ yarısı yukarı çıkar." |
| "aralık ... x = 0 noktasından ayrılır" | "ayrılır" belirsiz | "Aralığın ucu x değeridir; y değeri uç olamaz." |
| "f(−6) = 6 ile sınırlanır" | "sınırlanır" soyut | "Değerler 6'dan küçük olamaz." |
| "∞ ... alınamaz" | Neyin alınamadığı belli değil | "∞ bir sayı değildir; aralığa dahil edilemez. Yanında hep ( ) yazılır." |
| "f bu x için hesaplanmaz" (kapalı aralık) | Yanlış söylem: f hesaplanır, aralıkta değil | "x = −1 aralığın dışında kalıyor; f bu aralıkta o noktada tanımlı değil." |
| "Bu değer içi 0 iken alınır: x = 0." (minmax adım 2) | "Bu değer" 0 mı, en büyük değer mi? Peş peşe iki 0 | "2. En büyük değer, mutlak değerin içi 0 iken alınır." |
| "Bu aralıkta x büyürken f büyür; f burada artandır." (artan-azalan) | Sorunun ne sorduğunu söylemiyor | "... artandır. Soru azalan aralığı istiyor." (U2P-15) |

### U2P-07 · ORTA · Tersane levhası: "Maksimum değer yoktur." şıkkı bağlama uymuyor
Kapalı aralık Vmaks, tersane bağlamı (tohum 12, 14, 15, 23). Kökte "en büyük sapma, yani f fonksiyonunun maksimum değeri kaç mm'dir?" geçerken şıklar mm ve sapma diliyle konuşuyor, ama şık "Maksimum değer yoktur." bağlamdan kopuyor. Açıklaması da bağlam dışı: "Tanım kümesi kapalı aralık; uç noktalar da tanım kümesindedir." Diğer iki açıklama bağlamlı değil:
- 0: "0 minimum değerdir; x = 12 noktasında alınır." (bağlamsız)
- 18: "x = 18, maksimum değerin alındığı x değeridir; soru f değerini istiyor." (bağlamsız)

Öneri (maksimum_varlik etiketi korunur, şık anlamı aynı: üst sınır yok):
- Şık: "Sapmanın bir üst sınırı yoktur."
- Açıklama: "Levha kalınlığı yalnız 12 ile 18 mm arasında olabiliyor; uçlar dahil. Bu yüzden en büyük sapma vardır."
- 0 şıkkı: "0 mm, en küçük sapmadır (levha tam 12 mm iken). Soru en büyük sapmayı istiyor."
- 18 şıkkı: "18 mm, en büyük sapmanın olduğu levha kalınlığıdır. Soru kalınlığı değil, sapmayı mm olarak istiyor."
- Bağlam metni için: ekranda "x" ile "f(x)" iki ayrı mm olduğundan 18 şıkkının açıklaması önemli. Mehmet Eren için "levha kalınlığı" ile "sapma" ayrımı bu bağlamın asıl öğretici yeri.

Bağlamın kendisi: Gölcük tersanesi, çelik levha, mm tamamen okunabilir ve kartla (20 mm, |x − 20|, "sapma" tanımı) tutarlı. Üç küçük not (DÜŞÜK):
- Tohum 12'de aralık [12, 18] ve hedef 12, yani hedef aralığın sol ucu. Makine yalnız hedeften kalın levha kesiyor; sapma doğrusal oluyor, V'nin iki kolu görünmüyor. Kartın örneği hedefi aralığın ortasına koyuyor ([18, 22], hedef 20). Çoğu tohumda hedef iç noktaya yerleşmeli.
- 6 mm sapma 12 mm'lik levhada gerçekçi değil (%50). Daha gerçekçi: hedef 20, aralık [18, 22] ya da [19, 23].
- Her seferinde aynı tek cümle kalıbı ("Gölcük'teki bir tersanede çelik levhaların kalınlığı ... olmalıdır."). Tohum 12–23 arasında tamamen aynı hikâye. Kart ise tersane + sıcaklık + başka bağlamlar kullanıyor.

### U2P-08 · ORTA · a = 1, b = 0 kısa çözüm adımları yetersiz
Alıntılar:
- Kapalı aralık #4: "1. x = 0; 0, [−1, 2] aralığının içindedir."
- Minmax b = 0: "2. Bu değer içi 0 iken alınır: x = 0."
- Artan-azalan: "1. x = 0." (tek başına)
- Sıfır |x| − 3: "2. x = 3." ve "3. x = −3." (bkz. tarama: "2. x = 3." "3. x = −3.")
- Kapalı aralık Vmin |x|: "1. x = 0."

Sorunlar: x = 0 nereden çıktı? Öğrenci b ≠ 0 örneklerinde "x + 4 = 0 ⇒ x = −4" yolunu görüyor; b = 0'da bu ara adım yok, bir anda "x = 0" geliyor. Kapalı aralık #4 adım 1 iki iş yapıyor (x'i bul, aralıkta mı kontrol et), kısa ve yarım. Sıfır adımları "x = 3." "x = −3." neden iki tane olduğunu söylemiyor.

Öneri (Mehmet Eren için adımı detaylandır, tek işlem/adım):
- Kapalı aralık / minmax / artan-azalan:
  - "1. Mutlak değerin içi x. İçi 0 olması için x = 0."
  - "2. 0, [−1, 2] aralığının içindedir." (ayrı adım)
- Artan-azalan ek: "1. İçi x; içi 0 olan nokta x = 0. Grafiğin dönüş noktası burada." ("dönüş noktası" kartta yoksa "en alt/üst nokta")
- Sıfır |x| = 3 için: "1. |x| = 3." / "2. İçi pozitif olabilir: x = 3." / "3. İçi negatif olabilir: x = −3." / "4. Kontrol: f(3) = 0 ve f(−3) = 0."
- İpucu 3 "İlk adım: x = 0 yaz." (artan-azalan) yerine: "İlk adım: mutlak değerin içi x; içi 0 olan x = 0 yaz."

### U2P-09 · ORTA · İpucu 2 çözümün özünü veriyor
- Artan-azalan, ipucu 2: "Bu x'in solunda f azalan, sağında artandır." / "Önünde eksi olduğu için tersi olur: bu x'in solunda f artan, sağında azalandır." Öğrenci sorunun cevabının biçimini (hangi tarafın artan olduğunu) hazır alıyor. İpucu 1 (x'i bul) + 2 yeterince çözüm; 3 yapacak iş bırakmıyor.
  Öneri: "V'nin iki yanında f farklı yönde gider. Önünde eksi varsa V ters olur. Soldaki ve sağdaki iki sayıyı koyup bak."
- Minmax deger/nokta, ipucu 2: "|x − 6| en küçük değerini içi 0 iken alır; sonra dışarıdaki −2 eklenir." Bu, çözümün tamamı. Öneri: "En küçük değer, mutlak değerin içi 0 iken alınır. Sonra dışarıdaki sayıyı düşün."
- Görüntü, ipucu 2 (eksi): "Baştaki eksi ile −|x + 6| ≤ 0 olur; sonra her değere dışarıdaki sayı eklenir." Eşitsizlik yazılı. Öneri: "Baştaki eksi mutlak değerin değerlerini nasıl değiştirir? Sonra dışarıdaki sayıyı düşün."
- Sıfır, ipucu 2: "|x + 3| = k ise içi k ya da −k olabilir." `k` harfi soyut. Öneri: "|x| = 5 ise x = 5 ya da x = −5 olur. Mutlak değer eksi bir sayıya eşit olamaz."

### U2P-10 · ORTA · İpucu 3 ilk adımı yapmıyor, talimat veriyor; sıfır ipucu 1 yön değil yöntem
CLAUDE.md kural 6: üçüncü basamak ilk adımı yapar.
- Sıfır: "İlk adım: −|x + 3| + 3 = 0 ⇒ |x + 3| = 3." adımı yapıyor. Doğru.
- Görüntü: "İlk adım: x + 6 = 0 denklemini çöz; çıkan x için f değerini hesapla." İki talimat, hiçbiri yapılmamış.
- Minmax: "İlk adım: x + 4 = 0 denklemini kur ve x'i bul." Talimat. (Yapılmış hâli: "İlk adım: x + 4 = 0 ⇒ x = −4.")
- Kapalı aralık: "İlk adım: f(−1) = |−1 − 2| işlemini yap." Talimat. (Yapılmış hâli: "|−1 − 2| = |−3|.")
- Sıfır ipucu 1 "f(x) = 0 yaz ve mutlak değerli ifadeyi yalnız bırak." yönden çok yöntem. Ayrıca ipucu 3 aynı işi yapıyor (ilk adım olarak |x + 3| = 3). Yön örneği: "Sıfır, f(x) = 0 yapan x demek. Mutlak değerli kısmı tek başına nasıl bırakırsın?"

Öneri: üreteçler arasında tutarlı olsun. İpucu 3'ü "yap" cümlesi olarak yaz: "İlk adım: x + 4 = 0 ⇒ x = −4. Şimdi f(−4)'ü hesapla."

### U2P-11 · ORTA-DÜŞÜK · Kapalı aralık Vmin: ipucu 1 yanlış yöne çekiyor
Tohum 5 (`[−5, −3]`, `|x + 1|`, içi 0 olan x = −1 aralık dışında): ipucu 1 "|x + 1| en küçük değerini içi 0 iken alır." Bu cümle doğru ama bu soruda öğrenciyi `0` çeldiricisine itiyor. İpucu 2 "aralığın içinde mi, bak" ile düzeltiyor, ama ipucu 1 cevabı yanlış yönde kuruyor. Ayrıca `0` şıkkının açıklaması "En küçük değer en yakın uçtadır" kuralı ezberletiyor ve "f bu x için hesaplanmaz" yanlış (U2P-06).
Öneri: ipucu 1 (tüm Vmin tohumları): "Önce x'in hangi aralıkta olduğuna bak: −5 ile −3 arası." İçi 0 yapan x ipucu 2'de gelsin.

### U2P-12 · DÜŞÜK · Adımlarda birden çok işlem
CLAUDE.md kural 9 ve ölçüt: adım başına tek işlem.
- Minmax adım 2: "3x − 9 = 0 ⇒ 3x = 9 ⇒ x = 3." İki işlem.
- Görüntü adım 3/4: "İçi 0 iken: 2x + 12 = 0 ⇒ 2x = −12 ⇒ x = −6; f(−6) = 6. Yani 6 değeri alınır." Üç iş.
- Sıfır adım 3: "2x + 4 = −6 ⇒ 2x = −10 ⇒ x = −5." İki işlem.
- Kapalı aralık adım 3: "Uçlar: f(−1) = ... ve f(2) = ..." İki hesap.
- Minmax adım 1 (s = −1): "|x + 4| ≥ 0 olduğundan −|x + 4| ≤ 0 olur; en büyük değeri 0'dır." Üç bilgi.
Öneri: a ≠ 1 olan tohumlarda ara adımı ayır ("3x − 9 = 0", "3x = 9", "x = 3"). Bu, `ornek` dosyasındaki "2x + 4 = 6 ⇒ 2x = 2 ⇒ x = 1" için de geçerli. Kapalı aralıkta sol uç ve sağ uç iki ayrı adım olsun (V-maks örneğinde zaten öyle, Tmaks'ta birleşik).

### U2P-13 · DÜŞÜK · Yerel bağlam yalnız bir üreteçte
Beş üreteçten yalnız `kapali-aralik` (Vmaks modu) tersane bağlamı taşıyor. Diğer dördü tamamen sembolik. Kural "yerel bağlam oranı ≥ %50" bölüm/konu için; üreteç tek başına sembolik alıştırma sayılırsa kabul edilebilir, çünkü kart ve banka bağlamlı. Yine de üreteçlerden gelen sorular banka sorularının yanında seyrekse Mehmet Eren sembolik sorular yığını görür.
Öneri: `minmax` (deger modu) için ikinci bir bağlam kalıbı (ör. futbol: "top yerden x metre yüksekliğe çıkıyor", ya da tersane: "boru 120 cm olmalı, x cm kesildi, sapma |x − 120|, en az sapma"). Zorunlu değil.

### U2P-14 · DÜŞÜK · Zorluk etiketleri
- 4 üreteç 2, kapalı aralık 3: genel olarak uygun. Kapalı aralıkta ters V (iç nokta + uç karşılaştırma) ve tersane bağlamı gerçekten 3 düzeyi.
- Ancak `kapali-aralik` Vmin modu x0 iç noktada ise tek adımda cevap 0 (tohum 1, "|x − 3| min" ya da "|x|" min). Bu alt tür 2 olmalı. Ters V ve kapalı-aralık dışı x0 (tohum 5) 3'e yakın.
- Hiçbir üreteç zorluk 1 üretmiyor. Bankada %50 kolay olduğuna göre üreteçler kolay havuza katkı vermiyor. Kolay aday: minmax `deger` modu, s = 1, a = 1, b > 0, c ≥ 0 (cevap doğrudan c) ve `sifir` Sıfırı yoktur (tek adım).
- `artan-azalan` a < 0 (|−2x − 8|) ve s = −1 birlikte → 3'e yakın; 2'de bırakılabilir ama ipucu desteği şart.
Öneri: etiket tohum moduna göre değişsin (1/2/3) ya da en azından minmax-deger ve sıfır-yok için 1 denensin.

### U2P-15 · DÜŞÜK · Artan-azalan açıklaması soruyu hatırlatmıyor, ikinci cümleler uzun
- esitsizlik_yonu: "Bu aralıkta x büyürken f büyür; f burada artandır." Soru azalanı istiyorsa "Soru azalan aralığı istiyor." eklenmeli. (okuma_hatasi mantığı)
- a < 0 ek cümle: "x'in katsayısı eksi olsa da |−2x − 8| yine V biçimindedir; sağ kol yükselir." İkinci cümle 12 kelime, kabul; ama "yine V biçimindedir" öğrenci için gerekçesiz (neden?). Öneri: "|−2x − 8| = |2x + 8| olur; mutlak değer içi eksi de olsa sonuç aynı." (kartta bu eşitlik varsa)
- sonsuz_koseli: "∞ bir sayı değildir, alınamaz; ∞ yanında hep normal parantez kullanılır." İkisi de doğru; "alınamaz" belirsiz (U2P-06).

---

## En önemli 3 düzeltme
1. U2P-01: Yanlış şık açıklamalarından doğru cevabı sil. oteleme_yonu ("0 − 2 = −2"), carpim_sifir_isaret ("x = 3 olur"), görüntü ("f(x) ≥ 6") ve sıfır ("x = 0, x = −6") şablonlarını "hatayı adlandır + yön göster" biçiminde yeniden yaz.
2. U2P-02: Kapalı aralıkta çakışan değerlerde (tohum 4: 0, tohum 70: −1) hatayı doğru teşhis et; "olabilir" yerine "alınır" yaz.
3. U2P-07 ve U2P-08: Tersane sorusunda "Maksimum değer yoktur." yerine "Sapmanın bir üst sınırı yoktur." ve bağlamlı 0/18 açıklamaları; b = 0 çözüm adımlarında "içi x; içi 0 olan x = 0" ara adımı ve ayrı iki adım.

## Ölçülemeyen ya da örneklenen
- 300 tohumun tüm sorularında otomatik kelime sayımı yapılmadı; kök ve açıklama uzunluğu 29 örnekte elle sayıldı, şablon listesi tamamı okundu.
- Yeniden deneme olup olmadığı (U2P-01 etkisi) arayüzden doğrulanmadı; `soru.js` açıklamayı seçilen yanlış şıkta gösteriyor, yeniden deneme mantığı kontrol edilmedi.
- Tersane bağlamlı tohumların 300 içindeki oranı bilinmiyor (taramada ilk 4 örnek var).
- `sabit terim`, `kol`, `öteler` için kart taraması kısmi (Grep -o ile ilk eşleşmeler). `kol` ve `sabit terim` kartta bulunmadı, `ters V`, `V yukarı`, `V biçim`, `öteler` bulundu.
