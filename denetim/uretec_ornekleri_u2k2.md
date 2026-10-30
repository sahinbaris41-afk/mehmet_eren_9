Üreteç örnekleri · Matematik 9.2.2 Mutlak değer fonksiyonu (matematik-u2-k2)
Her üreteçten farklı durumları (mod, önünde eksi, bağlam, sıfır sayısı, a < 0, tanım kümesi dışı) kapsayan ilk tohumlar.
✔ doğru şık; ✘ çeldirici havuzu [hata_turu] açıklama (değere göre tekilleştirilmiş, dizideki sıra teşhis önceliği; her tohumda bunlardan 3'ü seçilir); ? ipucu merdiveni; numaralı satırlar çözüm.
Kayıtlar: minmax (2), minmax-kolay (1), goruntu (2), sifir (2), sifir-yok (1; "yok", "bir" ve "iki" karışık, a = 1), artan-azalan (2), kapali-aralik (3; Vmaks hep tersane bağlamlı), kapali-min-ic (2; Vmin iç/uç ve düz Vmaks); parantezde zorluk.
Üretim: panel/motor/uretecler/matematik.js, node ile tohum → gen(rng).
--- mat-u2-mutlak-minmax #0 {"mod":"deger","s":-1,"a":1,"b":4,"c":1}
KÖK: f: ℝ → ℝ, f(x) = −|x + 4| + 1 fonksiyonunun maksimum değeri kaçtır?
  ✔ 1
  ✘ 0  [eksik_adim] −|x + 4| ifadesinin en büyük değeri 0'dır, ama sondaki +1 grafiği 1 birim yukarı öteler.
  ✘ −1  [oteleme_yonu] İşaret ters alınmış; sondaki +1 olduğu gibi eklenir: 0 + 1 = 1.
  ✘ −4  [kavram_karisikligi] x = −4, maksimum değerin alındığı x değeridir. Soru x'i değil, f'nin değerini istiyor.
  ✘ Maksimum değer yoktur.  [maksimum_varlik] Önündeki eksi V'yi ters çevirir; grafiğin bir en üst noktası vardır, o noktanın y'si maksimum değerdir.
  ✘ −3  [okuma_hatasi] f(0) hesaplanmış; maksimum değer, içi 0 olan x'te bulunur.
  ? Soru f'nin en büyük değerini istiyor. Önündeki eksiye dikkat: grafik ters V olur.
  ? −|x + 4| en büyük değerini içi 0 iken alır. İçi 0 yapan x'i bul, sonra f'yi bu x'te hesapla.
  ? İlk adım: x + 4 = 0 yazılır. Şimdi x'i yalnız bırak: iki taraftan 4 çıkar.
  1. |x + 4| ≥ 0 olur.
  2. Önünde eksi var: −|x + 4| ≤ 0 olur.
  3. Bu yüzden −|x + 4| ifadesinin en büyük değeri 0'dır.
  4. Maksimum değer, mutlak değerin içi 0 iken alınır.
  5. İçi 0 yap: x + 4 = 0.
  6. İki taraftan 4 çıkarılır: x = −4.
  7. f(−4) = −|0| + 1 = 1.
  8. Maksimum değer 1 olur ve x = −4 noktasında alınır.

--- mat-u2-mutlak-minmax #1 {"mod":"x","s":1,"a":3,"b":-9,"c":-1}
KÖK: f: ℝ → ℝ, f(x) = |3x − 9| − 1 fonksiyonu minimum değerini hangi x değerinde alır?
  ✔ 3
  ✘ −3  [carpim_sifir_isaret] İşaret ters alınmış. 3x − 9 = 0 denkleminde iki tarafa 9 eklenir.
  ✘ 9  [eksik_adim] 3x = 9 ara sonuçtur; iki taraf 3'e bölünür.
  ✘ −1  [kavram_karisikligi] −1, minimum değerdir (y); soru bu değerin alındığı x değerini istiyor.
  ✘ 0  [okuma_hatasi] 0, |3x − 9| ifadesinin en küçük değeridir; istenen, bu değerin alındığı x değeridir.
  ? Soru f'nin değerini değil, minimum değerin alındığı x'i istiyor.
  ? |3x − 9| en küçük değerini içi 0 iken alır. İçi 0 yapan x'i bul.
  ? İlk adım: 3x − 9 = 0 yazılır. İki tarafa 9 eklenir: 3x = 9. Şimdi iki tarafı 3'e böl.
  1. |3x − 9| ≥ 0 olur.
  2. Bu yüzden |3x − 9| ifadesinin en küçük değeri 0'dır.
  3. Minimum değer, mutlak değerin içi 0 iken alınır.
  4. İçi 0 yap: 3x − 9 = 0.
  5. İki tarafa 9 eklenir: 3x = 9.
  6. İki taraf 3'e bölünür: x = 3.
  7. f(3) = |0| − 1 = −1.
  8. Minimum değer −1 olur ve x = 3 noktasında alınır.

--- mat-u2-mutlak-minmax #2 {"mod":"nokta","s":1,"a":1,"b":3,"c":2}
KÖK: f: ℝ → ℝ, f(x) = |x + 3| + 2 fonksiyonunun grafiğinin en alt noktasının koordinatları aşağıdakilerden hangisidir?
  ✔ (−3, 2)
  ✘ 2  [kavram_karisikligi] 2 yalnız y değeridir; nokta (x, y) biçiminde iki sayıyla yazılır.
  ✘ (3, 2)  [carpim_sifir_isaret] İşaret ters alınmış. x + 3 = 0 denkleminde iki taraftan 3 çıkarılır.
  ✘ (−3, 0)  [eksik_adim] |x + 3| ifadesinin en küçük değeri 0'dır, ama sondaki +2 grafiği 2 birim yukarı öteler.
  ✘ (−3, −2)  [oteleme_yonu] İşaret ters alınmış; sondaki +2 olduğu gibi eklenir: y = 0 + 2 = 2.
  ✘ (2, −3)  [kavram_karisikligi] x ile y yer değiştirmiş. Nokta (x, y) yazılır: önce içi 0 yapan x, sonra o x için f'nin değeri.
  ? En alt nokta iki sayıyla yazılır: bir x değeri ve o x için f değeri.
  ? |x + 3| en küçük değerini içi 0 iken alır. İçi 0 yapan x'i bul, sonra f'yi bu x'te hesapla.
  ? İlk adım: x + 3 = 0 yazılır. Şimdi x'i yalnız bırak: iki taraftan 3 çıkar.
  1. |x + 3| ≥ 0 olur.
  2. Bu yüzden |x + 3| ifadesinin en küçük değeri 0'dır.
  3. Minimum değer, mutlak değerin içi 0 iken alınır.
  4. İçi 0 yap: x + 3 = 0.
  5. İki taraftan 3 çıkarılır: x = −3.
  6. f(−3) = |0| + 2 = 2.
  7. Minimum değer 2 olur ve x = −3 noktasında alınır.
  8. Grafiğin en alt noktası (−3, 2) olur.

--- mat-u2-mutlak-minmax #3 {"mod":"nokta","s":-1,"a":1,"b":1,"c":-1}
KÖK: f: ℝ → ℝ, f(x) = −|x + 1| − 1 fonksiyonunun grafiğinin en üst noktasının koordinatları aşağıdakilerden hangisidir?
  ✔ (−1, −1)
  ✘ −1  [kavram_karisikligi] −1 yalnız y değeridir; nokta (x, y) biçiminde iki sayıyla yazılır.
  ✘ (1, −1)  [carpim_sifir_isaret] İşaret ters alınmış. x + 1 = 0 denkleminde iki taraftan 1 çıkarılır.
  ✘ (−1, 0)  [eksik_adim] −|x + 1| ifadesinin en büyük değeri 0'dır, ama sondaki −1 grafiği 1 birim aşağı öteler.
  ✘ (−1, 1)  [oteleme_yonu] İşaret ters alınmış; sondaki −1 olduğu gibi eklenir: y = 0 − 1 = −1.
  ? En üst nokta iki sayıyla yazılır: bir x değeri ve o x için f değeri.
  ? −|x + 1| en büyük değerini içi 0 iken alır. İçi 0 yapan x'i bul, sonra f'yi bu x'te hesapla.
  ? İlk adım: x + 1 = 0 yazılır. Şimdi x'i yalnız bırak: iki taraftan 1 çıkar.
  1. |x + 1| ≥ 0 olur.
  2. Önünde eksi var: −|x + 1| ≤ 0 olur.
  3. Bu yüzden −|x + 1| ifadesinin en büyük değeri 0'dır.
  4. Maksimum değer, mutlak değerin içi 0 iken alınır.
  5. İçi 0 yap: x + 1 = 0.
  6. İki taraftan 1 çıkarılır: x = −1.
  7. f(−1) = −|0| − 1 = −1.
  8. Maksimum değer −1 olur ve x = −1 noktasında alınır.
  9. Grafiğin en üst noktası (−1, −1) olur.

--- mat-u2-mutlak-minmax #6 {"mod":"x","s":-1,"a":1,"b":-2,"c":-6}
KÖK: f: ℝ → ℝ, f(x) = −|x − 2| − 6 fonksiyonu maksimum değerini hangi x değerinde alır?
  ✔ 2
  ✘ −2  [carpim_sifir_isaret] İşaret ters alınmış. x − 2 = 0 denkleminde iki tarafa 2 eklenir.
  ✘ −6  [kavram_karisikligi] −6, maksimum değerdir (y); soru bu değerin alındığı x değerini istiyor.
  ✘ 0  [okuma_hatasi] 0, −|x − 2| ifadesinin en büyük değeridir; istenen, bu değerin alındığı x değeridir.
  ? Soru f'nin değerini değil, maksimum değerin alındığı x'i istiyor.
  ? −|x − 2| en büyük değerini içi 0 iken alır. İçi 0 yapan x'i bul.
  ? İlk adım: x − 2 = 0 yazılır. Şimdi x'i yalnız bırak: iki tarafa 2 ekle.
  1. |x − 2| ≥ 0 olur.
  2. Önünde eksi var: −|x − 2| ≤ 0 olur.
  3. Bu yüzden −|x − 2| ifadesinin en büyük değeri 0'dır.
  4. Maksimum değer, mutlak değerin içi 0 iken alınır.
  5. İçi 0 yap: x − 2 = 0.
  6. İki tarafa 2 eklenir: x = 2.
  7. f(2) = −|0| − 6 = −6.
  8. Maksimum değer −6 olur ve x = 2 noktasında alınır.

--- mat-u2-mutlak-minmax #7 {"mod":"deger","s":1,"a":2,"b":6,"c":-3}
KÖK: f: ℝ → ℝ, f(x) = |2x + 6| − 3 fonksiyonunun minimum değeri kaçtır?
  ✔ −3
  ✘ 0  [eksik_adim] |2x + 6| ifadesinin en küçük değeri 0'dır, ama sondaki −3 grafiği 3 birim aşağı öteler.
  ✘ 3  [oteleme_yonu] İşaret ters alınmış; sondaki −3 olduğu gibi eklenir: 0 − 3 = −3.
  ✘ Minimum değer yoktur.  [maksimum_varlik] |2x + 6| en az 0 olur, bu yüzden V'nin bir en alt noktası vardır; o noktanın y'si minimum değerdir.
  ? Soru f'nin en küçük değerini istiyor. |2x + 6| en az kaç olabilir, düşün.
  ? |2x + 6| en küçük değerini içi 0 iken alır. İçi 0 yapan x'i bul, sonra f'yi bu x'te hesapla.
  ? İlk adım: 2x + 6 = 0 yazılır. İki taraftan 6 çıkarılır: 2x = −6. Şimdi iki tarafı 2'ye böl.
  1. |2x + 6| ≥ 0 olur.
  2. Bu yüzden |2x + 6| ifadesinin en küçük değeri 0'dır.
  3. Minimum değer, mutlak değerin içi 0 iken alınır.
  4. İçi 0 yap: 2x + 6 = 0.
  5. İki taraftan 6 çıkarılır: 2x = −6.
  6. İki taraf 2'ye bölünür: x = −3.
  7. f(−3) = |0| − 3 = −3.
  8. Minimum değer −3 olur ve x = −3 noktasında alınır.

--- mat-u2-mutlak-minmax-kolay #0 {"mod":"deger","s":1,"a":1,"b":6,"c":-4}
KÖK: f: ℝ → ℝ, f(x) = |x + 6| − 4 fonksiyonunun minimum değeri kaçtır?
  ✔ −4
  ✘ 0  [eksik_adim] |x + 6| ifadesinin en küçük değeri 0'dır, ama sondaki −4 grafiği 4 birim aşağı öteler.
  ✘ 4  [oteleme_yonu] İşaret ters alınmış; sondaki −4 olduğu gibi eklenir: 0 − 4 = −4.
  ✘ −6  [kavram_karisikligi] x = −6, minimum değerin alındığı x değeridir. Soru x'i değil, f'nin değerini istiyor.
  ✘ Minimum değer yoktur.  [maksimum_varlik] |x + 6| en az 0 olur, bu yüzden V'nin bir en alt noktası vardır; o noktanın y'si minimum değerdir.
  ✘ 2  [okuma_hatasi] f(0) hesaplanmış; minimum değer, içi 0 olan x'te bulunur.
  ? Soru f'nin en küçük değerini istiyor. |x + 6| en az kaç olabilir, düşün.
  ? Önce mutlak değerli kısmın en küçük değerini bul. Sonra o değerle sondaki sayıyı topla.
  ? İlk adım: |x + 6| ≥ 0 olur; en küçük değeri 0'dır. Şimdi 0 ile sondaki −4 sayısını topla.
  1. |x + 6| ≥ 0 olur.
  2. Bu yüzden |x + 6| ifadesinin en küçük değeri 0'dır.
  3. f'nin en küçük değeri: 0 − 4 = −4.
  4. Kontrol: içi 0 yapan x = −6 için f(−6) = |0| − 4 = −4.
  5. Minimum değer −4 olur.

--- mat-u2-mutlak-goruntu #0 {"s":-1,"a":1,"b":6,"c":0}
KÖK: f: ℝ → ℝ, f(x) = −|x + 6| fonksiyonunun görüntü kümesi aşağıdakilerden hangisidir?
  ✔ (−∞, 0]
  ✘ (−∞, 0)  [aralik_uc] f, 0 değerini x = −6 iken alır; alınan değer aralığa dâhildir, bu uçta köşeli parantez kullanılır.
  ✘ [−∞, 0]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ✘ [0, ∞)  [eksi_mutlak_karistirma] Önündeki eksi eşitsizliğin yönünü çevirir: −|x + 6| ≤ 0, yani f(x) ≤ 0 olur.
  ✘ ℝ  [tanim_goruntu_karistirma] ℝ tanım kümesidir. Görüntü kümesi f(x) değerlerinden oluşur ve f(x) ≤ 0 olur.
  ✘ (−∞, −6]  [kavram_karisikligi] −6, içi 0 yapan x değeridir. Görüntü kümesi x değerleriyle değil, f(x) değerleriyle yazılır.
  ? Görüntü kümesi, f(x)'in alabildiği bütün değerlerdir. Önce |x + 6| ifadesinin alabildiği değerleri düşün.
  ? |x + 6| ≥ 0 eşitsizliğinden başla. Önündeki eksi için iki tarafı −1 ile çarp; yön değişir.
  ? İlk adım: dışarıda sayı yok, f(x) = −|x + 6| olur. Şimdi |x + 6| için bildiğin eşitsizliği −1 ile çarp; yöne dikkat.
  1. |x + 6| ≥ 0 olur.
  2. İki taraf −1 ile çarpılır, yön değişir: −|x + 6| ≤ 0.
  3. Dışarıda sayı yok: f(x) ≤ 0.
  4. İçi 0 yap: x + 6 = 0.
  5. İki taraftan 6 çıkarılır: x = −6.
  6. f(−6) = −|0| = 0.
  7. Yani 0 değeri de görüntü kümesindedir.
  8. Görüntü kümesi (−∞, 0] olur.

--- mat-u2-mutlak-goruntu #1 {"s":1,"a":2,"b":12,"c":6}
KÖK: f: ℝ → ℝ, f(x) = |2x + 12| + 6 fonksiyonunun görüntü kümesi aşağıdakilerden hangisidir?
  ✔ [6, ∞)
  ✘ (6, ∞)  [aralik_uc] f, 6 değerini x = −6 iken alır; alınan değer aralığa dâhildir, bu uçta köşeli parantez kullanılır.
  ✘ [6, ∞]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ✘ (−∞, 6]  [esitsizlik_yonu] Eşitsizlik ters yazılmış. Önünde eksi yok; |2x + 12| ≥ 0 olduğundan f(x) ≥ 6 olur.
  ✘ ℝ  [tanim_goruntu_karistirma] ℝ tanım kümesidir. Görüntü kümesi f(x) değerlerinden oluşur ve f(x) ≥ 6 olur.
  ✘ [0, ∞)  [eksik_adim] |2x + 12| ≥ 0 doğru, ama sondaki +6 eklenmemiş.
  ✘ [−6, ∞)  [oteleme_yonu] İşaret ters alınmış; sondaki +6 olduğu gibi eklenir.
  ? Görüntü kümesi, f(x)'in alabildiği bütün değerlerdir. Önce |2x + 12| ifadesinin alabildiği değerleri düşün.
  ? |2x + 12| ≥ 0 eşitsizliğinden başla. Sonra iki tarafa sondaki +6 sayısını ekle.
  ? İlk adım: |2x + 12| ≥ 0 yazılır. f(x) = |2x + 12| + 6 olduğu için sıra sondaki +6 sayısında.
  1. |2x + 12| ≥ 0 olur.
  2. İki tarafa 6 eklenir: f(x) ≥ 6.
  3. İçi 0 yap: 2x + 12 = 0.
  4. İki taraftan 12 çıkarılır: 2x = −12.
  5. İki taraf 2'ye bölünür: x = −6.
  6. f(−6) = |0| + 6 = 6.
  7. Yani 6 değeri de görüntü kümesindedir.
  8. Görüntü kümesi [6, ∞) olur.

--- mat-u2-mutlak-sifir #0 {"s":-1,"a":1,"b":3,"c":3}
KÖK: f: ℝ → ℝ, f(x) = −|x + 3| + 3 fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ −6 ve 0
  ✘ Yalnız 0  [tek_sifir] Yalnız bir durum çözülmüş: içi 3 ya da −3 olabilir, unutulan sıfır x = −6.
  ✘ 0 ve 6  [carpim_sifir_isaret] İşaretler ters alınmış. Her durumda iki taraftan 3 çıkarılır.
  ✘ Yalnız −3  [okuma_hatasi] f(−3) = 3 olur, 0 değil; −3, maksimum değerin alındığı x değeridir.
  ✘ Sıfırı yoktur  [eksi_mutlak_karistirma] Maksimum değer: 3. Bu değer x ekseninin üstündedir. Ters V iki yanda aşağı iner ve x eksenini keser.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: −|x + 3| + 3 = 0 yazılır. Şimdi mutlak değerli kısmı yalnız bırak: iki taraftan 3 çıkar.
  1. f(x) = 0 yazılır: −|x + 3| + 3 = 0.
  2. İki taraftan 3 çıkarılır: −|x + 3| = −3.
  3. İki taraf −1 ile çarpılır: |x + 3| = 3.
  4. Birinci durum, içi 3: x + 3 = 3.
  5. İki taraftan 3 çıkarılır: x = 0.
  6. İkinci durum, içi −3: x + 3 = −3.
  7. İki taraftan 3 çıkarılır: x = −6.
  8. Kontrol: f(0) = −|3| + 3 = 0.
  9. Kontrol: f(−6) = −|−3| + 3 = 0.
  10. Sıfırlar −6 ve 0 olur.

--- mat-u2-mutlak-sifir #1 {"s":1,"a":1,"b":0,"c":-5}
KÖK: f: ℝ → ℝ, f(x) = |x| − 5 fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ −5 ve 5
  ✘ Yalnız 5  [tek_sifir] Yalnız bir durum çözülmüş: içi 5 ya da −5 olabilir, unutulan sıfır x = −5.
  ✘ Yalnız 0  [okuma_hatasi] f(0) = −5 olur, 0 değil; 0, minimum değerin alındığı x değeridir.
  ✘ Sıfırı yoktur  [kavram_karisikligi] Minimum değer: −5. Bu değer x ekseninin altındadır. V yukarı açık olduğu için x eksenini keser.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: |x| − 5 = 0 yazılır. Şimdi mutlak değerli kısmı yalnız bırak: iki tarafa 5 ekle.
  1. f(x) = 0 yazılır: |x| − 5 = 0.
  2. İki tarafa 5 eklenir: |x| = 5.
  3. Birinci durum, içi 5: x = 5.
  4. İkinci durum, içi −5: x = −5.
  5. Kontrol: f(5) = |5| − 5 = 0.
  6. Kontrol: f(−5) = |−5| − 5 = 0.
  7. Sıfırlar −5 ve 5 olur.

--- mat-u2-mutlak-sifir #2 {"s":1,"a":1,"b":2,"c":0}
KÖK: f: ℝ → ℝ, f(x) = |x + 2| fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ Yalnız −2
  ✘ Sıfırı yoktur  [kavram_karisikligi] Minimum değer: 0. Bu değer tam x ekseninin üzerindedir. Bu yüzden x = −2 bir sıfırdır.
  ✘ Yalnız 2  [carpim_sifir_isaret] İşaret ters alınmış. x + 2 = 0 denkleminde iki taraftan 2 çıkarılır.
  ✘ −2 ve 2  [kavram_karisikligi] |x + 2| = 0 iken içi yalnız 0 olabilir: mutlak değeri 0 olan tek sayı 0'dır. Bu yüzden tek sıfır çıkar.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: |x + 2| = 0 yazılır. Şimdi içini 0 yapan x'i bul.
  1. f(x) = 0 yazılır: |x + 2| = 0.
  2. Mutlak değer yalnız içi 0 iken 0 olur.
  3. İçi 0 yap: x + 2 = 0.
  4. İki taraftan 2 çıkarılır: x = −2.
  5. En alt nokta (−2, 0), tam x ekseninin üzerinde; tek sıfır vardır.
  6. Sıfır yalnız −2 olur.

--- mat-u2-mutlak-sifir #3 {"s":-1,"a":2,"b":6,"c":0}
KÖK: f: ℝ → ℝ, f(x) = −|2x + 6| fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ Yalnız −3
  ✘ Sıfırı yoktur  [kavram_karisikligi] Maksimum değer: 0. Bu değer tam x ekseninin üzerindedir. Bu yüzden x = −3 bir sıfırdır.
  ✘ Yalnız 3  [carpim_sifir_isaret] İşaret ters alınmış. 2x + 6 = 0 denkleminde iki taraftan 6 çıkarılır.
  ✘ −3 ve 3  [kavram_karisikligi] |2x + 6| = 0 iken içi yalnız 0 olabilir: mutlak değeri 0 olan tek sayı 0'dır. Bu yüzden tek sıfır çıkar.
  ✘ Yalnız −6  [eksik_adim] 2x = −6 ara sonuçtur; iki taraf 2'ye bölünür.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: −|2x + 6| = 0 yazılır. Şimdi iki tarafı −1 ile çarp.
  1. f(x) = 0 yazılır: −|2x + 6| = 0.
  2. İki taraf −1 ile çarpılır: |2x + 6| = 0.
  3. Mutlak değer yalnız içi 0 iken 0 olur.
  4. İçi 0 yap: 2x + 6 = 0.
  5. İki taraftan 6 çıkarılır: 2x = −6.
  6. İki taraf 2'ye bölünür: x = −3.
  7. En üst nokta (−3, 0), tam x ekseninin üzerinde; tek sıfır vardır.
  8. Sıfır yalnız −3 olur.

--- mat-u2-mutlak-sifir #4 {"s":-1,"a":1,"b":3,"c":0}
KÖK: f: ℝ → ℝ, f(x) = −|x + 3| fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ Yalnız −3
  ✘ Sıfırı yoktur  [kavram_karisikligi] Maksimum değer: 0. Bu değer tam x ekseninin üzerindedir. Bu yüzden x = −3 bir sıfırdır.
  ✘ Yalnız 3  [carpim_sifir_isaret] İşaret ters alınmış. x + 3 = 0 denkleminde iki taraftan 3 çıkarılır.
  ✘ −3 ve 3  [kavram_karisikligi] |x + 3| = 0 iken içi yalnız 0 olabilir: mutlak değeri 0 olan tek sayı 0'dır. Bu yüzden tek sıfır çıkar.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: −|x + 3| = 0 yazılır. Şimdi iki tarafı −1 ile çarp.
  1. f(x) = 0 yazılır: −|x + 3| = 0.
  2. İki taraf −1 ile çarpılır: |x + 3| = 0.
  3. Mutlak değer yalnız içi 0 iken 0 olur.
  4. İçi 0 yap: x + 3 = 0.
  5. İki taraftan 3 çıkarılır: x = −3.
  6. En üst nokta (−3, 0), tam x ekseninin üzerinde; tek sıfır vardır.
  7. Sıfır yalnız −3 olur.

--- mat-u2-mutlak-sifir #5 {"s":1,"a":3,"b":9,"c":0}
KÖK: f: ℝ → ℝ, f(x) = |3x + 9| fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ Yalnız −3
  ✘ Sıfırı yoktur  [kavram_karisikligi] Minimum değer: 0. Bu değer tam x ekseninin üzerindedir. Bu yüzden x = −3 bir sıfırdır.
  ✘ Yalnız 3  [carpim_sifir_isaret] İşaret ters alınmış. 3x + 9 = 0 denkleminde iki taraftan 9 çıkarılır.
  ✘ −3 ve 3  [kavram_karisikligi] |3x + 9| = 0 iken içi yalnız 0 olabilir: mutlak değeri 0 olan tek sayı 0'dır. Bu yüzden tek sıfır çıkar.
  ✘ Yalnız −9  [eksik_adim] 3x = −9 ara sonuçtur; iki taraf 3'e bölünür.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: |3x + 9| = 0 yazılır. Şimdi içini 0 yapan x'i bul.
  1. f(x) = 0 yazılır: |3x + 9| = 0.
  2. Mutlak değer yalnız içi 0 iken 0 olur.
  3. İçi 0 yap: 3x + 9 = 0.
  4. İki taraftan 9 çıkarılır: 3x = −9.
  5. İki taraf 3'e bölünür: x = −3.
  6. En alt nokta (−3, 0), tam x ekseninin üzerinde; tek sıfır vardır.
  7. Sıfır yalnız −3 olur.

--- mat-u2-mutlak-sifir-yok #0 {"s":-1,"a":1,"b":3,"c":-3}
KÖK: f: ℝ → ℝ, f(x) = −|x + 3| − 3 fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ Sıfırı yoktur
  ✘ −6 ve 0  [isaret_hatasi] |x + 3| = −3 yerine |x + 3| = 3 çözülmüş; eksi işareti kaybolmuş. Bu sayılar yerine konunca 0 çıkmaz: f(0) = −6.
  ✘ Yalnız −6  [mutlak_eksi] Mutlak değer işareti yazılmadan x + 3 = −3 yazılmış. Mutlak değer eksi bir sayıya eşit olamaz.
  ✘ Yalnız −3  [kavram_karisikligi] Maksimum değer: −3. Bu değer x ekseninin altındadır. Grafik x eksenini kesmez.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: −|x + 3| − 3 = 0 yazılır. Şimdi mutlak değerli kısmı yalnız bırak: iki tarafa 3 ekle.
  1. f(x) = 0 yazılır: −|x + 3| − 3 = 0.
  2. İki tarafa 3 eklenir: −|x + 3| = 3.
  3. İki taraf −1 ile çarpılır: |x + 3| = −3.
  4. Mutlak değer hiç eksi olmaz; |x + 3| = −3 olamaz.
  5. Maksimum değer: −3. Bu değer x ekseninin altındadır.
  6. Grafik x eksenini kesmez; f fonksiyonunun sıfırı yoktur.

--- mat-u2-mutlak-sifir-yok #1 {"s":1,"a":1,"b":-1,"c":0}
KÖK: f: ℝ → ℝ, f(x) = |x − 1| fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ Yalnız 1
  ✘ Sıfırı yoktur  [kavram_karisikligi] Minimum değer: 0. Bu değer tam x ekseninin üzerindedir. Bu yüzden x = 1 bir sıfırdır.
  ✘ Yalnız 0  [kavram_karisikligi] Sıfır, f(x)'i 0 yapan x değeridir; x = 0 değildir. f(0) = 1 olur.
  ✘ −1 ve 1  [kavram_karisikligi] |x − 1| = 0 iken içi yalnız 0 olabilir: mutlak değeri 0 olan tek sayı 0'dır. Bu yüzden tek sıfır çıkar.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: |x − 1| = 0 yazılır. Şimdi içini 0 yapan x'i bul.
  1. f(x) = 0 yazılır: |x − 1| = 0.
  2. Mutlak değer yalnız içi 0 iken 0 olur.
  3. İçi 0 yap: x − 1 = 0.
  4. İki tarafa 1 eklenir: x = 1.
  5. En alt nokta (1, 0), tam x ekseninin üzerinde; tek sıfır vardır.
  6. Sıfır yalnız 1 olur.

--- mat-u2-mutlak-sifir-yok #2 {"s":1,"a":1,"b":2,"c":-5}
KÖK: f: ℝ → ℝ, f(x) = |x + 2| − 5 fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ −7 ve 3
  ✘ Yalnız 3  [tek_sifir] Yalnız bir durum çözülmüş: içi 5 ya da −5 olabilir, unutulan sıfır x = −7.
  ✘ Yalnız −2  [okuma_hatasi] f(−2) = −5 olur, 0 değil; −2, minimum değerin alındığı x değeridir.
  ✘ Sıfırı yoktur  [kavram_karisikligi] Minimum değer: −5. Bu değer x ekseninin altındadır. V yukarı açık olduğu için x eksenini keser.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: |x + 2| − 5 = 0 yazılır. Şimdi mutlak değerli kısmı yalnız bırak: iki tarafa 5 ekle.
  1. f(x) = 0 yazılır: |x + 2| − 5 = 0.
  2. İki tarafa 5 eklenir: |x + 2| = 5.
  3. Birinci durum, içi 5: x + 2 = 5.
  4. İki taraftan 2 çıkarılır: x = 3.
  5. İkinci durum, içi −5: x + 2 = −5.
  6. İki taraftan 2 çıkarılır: x = −7.
  7. Kontrol: f(3) = |5| − 5 = 0.
  8. Kontrol: f(−7) = |−5| − 5 = 0.
  9. Sıfırlar −7 ve 3 olur.

--- mat-u2-mutlak-sifir-yok #3 {"s":-1,"a":1,"b":0,"c":4}
KÖK: f: ℝ → ℝ, f(x) = −|x| + 4 fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ −4 ve 4
  ✘ Yalnız 4  [tek_sifir] Yalnız bir durum çözülmüş: içi 4 ya da −4 olabilir, unutulan sıfır x = −4.
  ✘ Yalnız 0  [okuma_hatasi] f(0) = 4 olur, 0 değil; 0, maksimum değerin alındığı x değeridir.
  ✘ Sıfırı yoktur  [eksi_mutlak_karistirma] Maksimum değer: 4. Bu değer x ekseninin üstündedir. Ters V iki yanda aşağı iner ve x eksenini keser.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: −|x| + 4 = 0 yazılır. Şimdi mutlak değerli kısmı yalnız bırak: iki taraftan 4 çıkar.
  1. f(x) = 0 yazılır: −|x| + 4 = 0.
  2. İki taraftan 4 çıkarılır: −|x| = −4.
  3. İki taraf −1 ile çarpılır: |x| = 4.
  4. Birinci durum, içi 4: x = 4.
  5. İkinci durum, içi −4: x = −4.
  6. Kontrol: f(4) = −|4| + 4 = 0.
  7. Kontrol: f(−4) = −|−4| + 4 = 0.
  8. Sıfırlar −4 ve 4 olur.

--- mat-u2-mutlak-sifir-yok #6 {"s":-1,"a":1,"b":-2,"c":0}
KÖK: f: ℝ → ℝ, f(x) = −|x − 2| fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ Yalnız 2
  ✘ Sıfırı yoktur  [kavram_karisikligi] Maksimum değer: 0. Bu değer tam x ekseninin üzerindedir. Bu yüzden x = 2 bir sıfırdır.
  ✘ Yalnız 0  [kavram_karisikligi] Sıfır, f(x)'i 0 yapan x değeridir; x = 0 değildir. f(0) = −2 olur.
  ✘ −2 ve 2  [kavram_karisikligi] |x − 2| = 0 iken içi yalnız 0 olabilir: mutlak değeri 0 olan tek sayı 0'dır. Bu yüzden tek sıfır çıkar.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: −|x − 2| = 0 yazılır. Şimdi iki tarafı −1 ile çarp.
  1. f(x) = 0 yazılır: −|x − 2| = 0.
  2. İki taraf −1 ile çarpılır: |x − 2| = 0.
  3. Mutlak değer yalnız içi 0 iken 0 olur.
  4. İçi 0 yap: x − 2 = 0.
  5. İki tarafa 2 eklenir: x = 2.
  6. En üst nokta (2, 0), tam x ekseninin üzerinde; tek sıfır vardır.
  7. Sıfır yalnız 2 olur.

--- mat-u2-mutlak-sifir-yok #7 {"s":1,"a":1,"b":-5,"c":3}
KÖK: f: ℝ → ℝ, f(x) = |x − 5| + 3 fonksiyonunun sıfırları aşağıdakilerden hangisidir?
  ✔ Sıfırı yoktur
  ✘ 2 ve 8  [isaret_hatasi] |x − 5| = −3 yerine |x − 5| = 3 çözülmüş; eksi işareti kaybolmuş. Bu sayılar yerine konunca 0 çıkmaz: f(8) = 6.
  ✘ Yalnız 2  [mutlak_eksi] Mutlak değer işareti yazılmadan x − 5 = −3 yazılmış. Mutlak değer eksi bir sayıya eşit olamaz.
  ✘ Yalnız 5  [kavram_karisikligi] Minimum değer: 3. Bu değer x ekseninin üstündedir. Grafik x eksenini kesmez.
  ? Sıfır, f(x)'i 0 yapan x değeridir; grafiğin x eksenini kestiği noktaları arıyorsun.
  ? f(x) = 0 yaz ve mutlak değerli kısmı tek başına bırak. Örnek: |x| = 15 ise x = 15 ya da x = −15. Mutlak değer hiç eksi olmaz.
  ? İlk adım: |x − 5| + 3 = 0 yazılır. Şimdi mutlak değerli kısmı yalnız bırak: iki taraftan 3 çıkar.
  1. f(x) = 0 yazılır: |x − 5| + 3 = 0.
  2. İki taraftan 3 çıkarılır: |x − 5| = −3.
  3. Mutlak değer hiç eksi olmaz; |x − 5| = −3 olamaz.
  4. Minimum değer: 3. Bu değer x ekseninin üstündedir.
  5. Grafik x eksenini kesmez; f fonksiyonunun sıfırı yoktur.

--- mat-u2-mutlak-artan-azalan #0 {"istek":"artan","s":-1,"a":1,"b":4,"c":1}
KÖK: f: ℝ → ℝ, f(x) = −|x + 4| + 1 fonksiyonunun artan olduğu en geniş aralık aşağıdakilerden hangisidir?
  ✔ (−∞, −4]
  ✘ [−4, ∞)  [eksi_mutlak_karistirma] Önündeki eksi V'yi ters çevirir: f, x = −4 noktasının solunda artan, sağında azalandır.
  ✘ (−∞, 4]  [carpim_sifir_isaret] İşaret ters alınmış. x + 4 = 0 denkleminde iki taraftan 4 çıkarılır.
  ✘ (−∞, 1]  [kavram_karisikligi] 1, en üst noktanın y değeridir. Aralık x değerleriyle yazılır; ucu içi 0 yapan x'tir.
  ✘ [−∞, −4]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ? Aralığın ucu, grafiğin en üst noktasının x değeridir. Önce o x'i bul.
  ? Bu x'in solundan ve sağından birer sayı seç, f değerlerini karşılaştır. x büyürken f de büyüyorsa f orada artandır.
  ? İlk adım: x + 4 = 0 yazılır. Şimdi x'i yalnız bırak: iki taraftan 4 çıkar.
  1. İçi 0 yap: x + 4 = 0.
  2. İki taraftan 4 çıkarılır: x = −4.
  3. Solundan bir sayı: f(−5) = −|−5 + 4| + 1 = 0.
  4. İçi 0 iken: f(−4) = −|−4 + 4| + 1 = 1.
  5. Sağından bir sayı: f(−3) = −|−3 + 4| + 1 = 0.
  6. x = −4 noktasının solunda f büyür, sağında küçülür.
  7. Sondaki +1 grafiği yalnız yukarı ya da aşağı öteler; artan ve azalan aralıklar değişmez.
  8. f fonksiyonunun artan olduğu en geniş aralık (−∞, −4] olur.

--- mat-u2-mutlak-artan-azalan #1 {"istek":"azalan","s":1,"a":1,"b":0,"c":-3}
KÖK: f: ℝ → ℝ, f(x) = |x| − 3 fonksiyonunun azalan olduğu en geniş aralık aşağıdakilerden hangisidir?
  ✔ (−∞, 0]
  ✘ [0, ∞)  [esitsizlik_yonu] Bu aralıkta x büyürken f büyür; f burada artandır. Soru f'nin azalan olduğu aralığı istiyor.
  ✘ (−∞, −3]  [kavram_karisikligi] −3, en alt noktanın y değeridir. Aralık x değerleriyle yazılır; ucu içi 0 yapan x'tir.
  ✘ [−∞, 0]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ? Aralığın ucu, grafiğin en alt noktasının x değeridir. Önce o x'i bul.
  ? Bu x'in solundan ve sağından birer sayı seç, f değerlerini karşılaştır. x büyürken f de büyüyorsa f orada artandır.
  ? İlk adım: mutlak değerin içi yalnız x'tir. İçi 0 olsun: x hangi sayı olmalı, düşün.
  1. Mutlak değerin içi x'tir.
  2. İçi 0 olsun diye x = 0 alınır.
  3. Solundan bir sayı: f(−1) = |−1| − 3 = −2.
  4. İçi 0 iken: f(0) = |0| − 3 = −3.
  5. Sağından bir sayı: f(1) = |1| − 3 = −2.
  6. x = 0 noktasının solunda f küçülür, sağında büyür.
  7. Sondaki −3 grafiği yalnız yukarı ya da aşağı öteler; artan ve azalan aralıklar değişmez.
  8. f fonksiyonunun azalan olduğu en geniş aralık (−∞, 0] olur.

--- mat-u2-mutlak-artan-azalan #3 {"istek":"azalan","s":-1,"a":1,"b":1,"c":-1}
KÖK: f: ℝ → ℝ, f(x) = −|x + 1| − 1 fonksiyonunun azalan olduğu en geniş aralık aşağıdakilerden hangisidir?
  ✔ [−1, ∞)
  ✘ (−∞, −1]  [eksi_mutlak_karistirma] Önündeki eksi V'yi ters çevirir: f, x = −1 noktasının solunda artan, sağında azalandır.
  ✘ [1, ∞)  [carpim_sifir_isaret] İşaret ters alınmış. x + 1 = 0 denkleminde iki taraftan 1 çıkarılır.
  ✘ [−1, ∞]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ? Aralığın ucu, grafiğin en üst noktasının x değeridir. Önce o x'i bul.
  ? Bu x'in solundan ve sağından birer sayı seç, f değerlerini karşılaştır. x büyürken f de büyüyorsa f orada artandır.
  ? İlk adım: x + 1 = 0 yazılır. Şimdi x'i yalnız bırak: iki taraftan 1 çıkar.
  1. İçi 0 yap: x + 1 = 0.
  2. İki taraftan 1 çıkarılır: x = −1.
  3. Solundan bir sayı: f(−2) = −|−2 + 1| − 1 = −2.
  4. İçi 0 iken: f(−1) = −|−1 + 1| − 1 = −1.
  5. Sağından bir sayı: f(0) = −|0 + 1| − 1 = −2.
  6. x = −1 noktasının solunda f büyür, sağında küçülür.
  7. Sondaki −1 grafiği yalnız yukarı ya da aşağı öteler; artan ve azalan aralıklar değişmez.
  8. f fonksiyonunun azalan olduğu en geniş aralık [−1, ∞) olur.

--- mat-u2-mutlak-artan-azalan #5 {"istek":"azalan","s":1,"a":-2,"b":-8,"c":0}
KÖK: f: ℝ → ℝ, f(x) = |−2x − 8| fonksiyonunun azalan olduğu en geniş aralık aşağıdakilerden hangisidir?
  ✔ (−∞, −4]
  ✘ [−4, ∞)  [esitsizlik_yonu] Bu aralıkta x büyürken f büyür; f burada artandır. Soru f'nin azalan olduğu aralığı istiyor.
  ✘ (−∞, 4]  [carpim_sifir_isaret] İşaret ters alınmış. −2x − 8 = 0 denkleminde iki tarafa 8 eklenir.
  ✘ (−∞, 8]  [eksik_adim] −2x = 8 ara sonuçtur; iki taraf −2'ye bölünür.
  ✘ (−∞, 0]  [kavram_karisikligi] 0, en alt noktanın y değeridir. Aralık x değerleriyle yazılır; ucu içi 0 yapan x'tir.
  ✘ [−∞, −4]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ? Aralığın ucu, grafiğin en alt noktasının x değeridir. Önce o x'i bul.
  ? Bu x'in solundan ve sağından birer sayı seç, f değerlerini karşılaştır. x büyürken f de büyüyorsa f orada artandır.
  ? İlk adım: −2x − 8 = 0 yazılır. İki tarafa 8 eklenir: −2x = 8. Şimdi iki tarafı −2'ye böl.
  1. |−2x − 8| = |2x + 8| olur; x'in önündeki eksi mutlak değerin içinde olduğu için grafiğin biçimi değişmez.
  2. İçi 0 yap: −2x − 8 = 0.
  3. İki tarafa 8 eklenir: −2x = 8.
  4. İki taraf −2'ye bölünür: x = −4.
  5. Solundan bir sayı: f(−5) = |−2·(−5) − 8| = 2.
  6. İçi 0 iken: f(−4) = |−2·(−4) − 8| = 0.
  7. Sağından bir sayı: f(−3) = |−2·(−3) − 8| = 2.
  8. x = −4 noktasının solunda f küçülür, sağında büyür.
  9. f fonksiyonunun azalan olduğu en geniş aralık (−∞, −4] olur.

--- mat-u2-mutlak-artan-azalan #7 {"istek":"artan","s":1,"a":1,"b":-6,"c":-2}
KÖK: f: ℝ → ℝ, f(x) = |x − 6| − 2 fonksiyonunun artan olduğu en geniş aralık aşağıdakilerden hangisidir?
  ✔ [6, ∞)
  ✘ (−∞, 6]  [esitsizlik_yonu] Bu aralıkta x büyürken f küçülür; f burada azalandır. Soru f'nin artan olduğu aralığı istiyor.
  ✘ [−6, ∞)  [carpim_sifir_isaret] İşaret ters alınmış. x − 6 = 0 denkleminde iki tarafa 6 eklenir.
  ✘ [−2, ∞)  [kavram_karisikligi] −2, en alt noktanın y değeridir. Aralık x değerleriyle yazılır; ucu içi 0 yapan x'tir.
  ✘ [6, ∞]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ? Aralığın ucu, grafiğin en alt noktasının x değeridir. Önce o x'i bul.
  ? Bu x'in solundan ve sağından birer sayı seç, f değerlerini karşılaştır. x büyürken f de büyüyorsa f orada artandır.
  ? İlk adım: x − 6 = 0 yazılır. Şimdi x'i yalnız bırak: iki tarafa 6 ekle.
  1. İçi 0 yap: x − 6 = 0.
  2. İki tarafa 6 eklenir: x = 6.
  3. Solundan bir sayı: f(5) = |5 − 6| − 2 = −1.
  4. İçi 0 iken: f(6) = |6 − 6| − 2 = −2.
  5. Sağından bir sayı: f(7) = |7 − 6| − 2 = −1.
  6. x = 6 noktasının solunda f küçülür, sağında büyür.
  7. Sondaki −2 grafiği yalnız yukarı ya da aşağı öteler; artan ve azalan aralıklar değişmez.
  8. f fonksiyonunun artan olduğu en geniş aralık [6, ∞) olur.

--- mat-u2-mutlak-artan-azalan #8 {"istek":"artan","s":1,"a":-1,"b":-3,"c":-1}
KÖK: f: ℝ → ℝ, f(x) = |−x − 3| − 1 fonksiyonunun artan olduğu en geniş aralık aşağıdakilerden hangisidir?
  ✔ [−3, ∞)
  ✘ (−∞, −3]  [esitsizlik_yonu] Bu aralıkta x büyürken f küçülür; f burada azalandır. Soru f'nin artan olduğu aralığı istiyor.
  ✘ [3, ∞)  [carpim_sifir_isaret] İşaret ters alınmış. −x − 3 = 0 denkleminde iki tarafa 3 eklenir.
  ✘ [−1, ∞)  [kavram_karisikligi] −1, en alt noktanın y değeridir. Aralık x değerleriyle yazılır; ucu içi 0 yapan x'tir.
  ✘ [−3, ∞]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ? Aralığın ucu, grafiğin en alt noktasının x değeridir. Önce o x'i bul.
  ? Bu x'in solundan ve sağından birer sayı seç, f değerlerini karşılaştır. x büyürken f de büyüyorsa f orada artandır.
  ? İlk adım: −x − 3 = 0 yazılır. İki tarafa 3 eklenir: −x = 3. Şimdi iki tarafı −1'e böl.
  1. |−x − 3| = |x + 3| olur; x'in önündeki eksi mutlak değerin içinde olduğu için grafiğin biçimi değişmez.
  2. İçi 0 yap: −x − 3 = 0.
  3. İki tarafa 3 eklenir: −x = 3.
  4. İki taraf −1'e bölünür: x = −3.
  5. Solundan bir sayı: f(−4) = |−(−4) − 3| − 1 = 0.
  6. İçi 0 iken: f(−3) = |−(−3) − 3| − 1 = −1.
  7. Sağından bir sayı: f(−2) = |−(−2) − 3| − 1 = 0.
  8. x = −3 noktasının solunda f küçülür, sağında büyür.
  9. Sondaki −1 grafiği yalnız yukarı ya da aşağı öteler; artan ve azalan aralıklar değişmez.
  10. f fonksiyonunun artan olduğu en geniş aralık [−3, ∞) olur.

--- mat-u2-mutlak-kapali-aralik #0 {"mod":"Vmaks","s":1,"h":180,"k":0,"p":179,"q":181}
BAĞLAM: Gölcük'teki bir tersanede kesilen çelik parçaların boyu 180 mm olmalıdır. Bir makinenin kestiği parçanın boyu x mm'dir ve x, [179, 181] kapalı aralığındadır. Hedeften sapma f(x) = |x − 180| fonksiyonu ile hesaplanır.
KÖK: Buna göre en büyük sapma, yani f fonksiyonunun maksimum değeri kaç mm'dir?
  ✔ 1
  ✘ En büyük sapma yoktur.  [maksimum_varlik] Parçanın boyu 179 ile 181 mm arasındadır, uçlar dâhil; en büyük sapma uçlardan birinde vardır.
  ✘ 0  [kavram_karisikligi] 0 mm en küçük sapmadır, parça tam 180 mm iken. Soru en büyük sapmayı istiyor.
  ✘ 181  [okuma_hatasi] 181 mm, parçanın boyudur; soru sapmayı istiyor.
  ? Parçanın boyu x, 179 ile 181 mm arasında değer alır; uçlar da dâhil.
  ? V yukarı açık; en büyük değer uç noktalardan birindedir. İki uçta f'yi hesapla, büyüğünü al.
  ? İlk adım: f(179) = |179 − 180| yazılır. Sonra öbür uçta da f'yi hesapla.
  1. Sol uç: f(179) = |179 − 180| = 1.
  2. Sağ uç: f(181) = |181 − 180| = 1.
  3. V yukarı açık; en büyük değer uçlardadır.
  4. Büyüğü alınır: maksimum değer 1 olur.
  5. Bu değer x = 179 ve x = 181 noktalarında alınır.
  6. En büyük sapma 1 mm olur.

--- mat-u2-mutlak-kapali-aralik #1 {"mod":"Vmin","s":1,"h":3,"k":0,"p":6,"q":11}
KÖK: f: [6, 11] → ℝ, f(x) = |x − 3| fonksiyonunun minimum değeri kaçtır?
  ✔ 3
  ✘ Minimum değer yoktur.  [maksimum_varlik] Uçlar aralığa dâhildir; bu yüzden en küçük değer vardır ve hesaplanabilir.
  ✘ 8  [kavram_karisikligi] Seçtiğin sayı uçlardaki büyük değerdir, yani maksimum değerdir. Soru en küçük değeri istiyor.
  ✘ 0  [kavram_karisikligi] x = 3, [6, 11] aralığının dışındadır; f bu aralıkta 0 değerini almaz.
  ✘ 6  [okuma_hatasi] x = 6, minimum değerin alındığı x değeridir; soru f'nin değerini istiyor.
  ? Önce x'in hangi aralıkta olduğuna bak: 6 ile 11 arası, uçlar dâhil.
  ? |x − 3| en küçük değerini içi 0 iken alır. İçi 0 yapan x aralıktaysa en küçük değer orada; değilse iki uçtaki değeri karşılaştır.
  ? İlk adım: x − 3 = 0 yazılır. İki tarafa 3 eklenir: x = 3. Şimdi bu x'in [6, 11] aralığında olup olmadığına bak.
  1. İçi 0 yap: x − 3 = 0.
  2. İki tarafa 3 eklenir: x = 3.
  3. 3, [6, 11] aralığının dışındadır; f bu aralıkta 0 değerini almaz.
  4. Sol uç: f(6) = |6 − 3| = 3.
  5. Sağ uç: f(11) = |11 − 3| = 8.
  6. Küçüğü alınır: minimum değer 3 olur.
  7. Bu değer x = 6 noktasında alınır.

--- mat-u2-mutlak-kapali-aralik #2 {"mod":"Tmaks","s":-1,"h":0,"k":2,"p":-3,"q":5}
KÖK: f: [−3, 5] → ℝ, f(x) = −|x| + 2 fonksiyonunun maksimum değeri kaçtır?
  ✔ 2
  ✘ −1  [eksik_adim] Yalnız uçlar karşılaştırılmış. İçi 0 olan x = 0 noktası da aralıktadır; ters V'de en büyük değer bu noktada alınır.
  ✘ −3  [kavram_karisikligi] Seçtiğin sayı uçlardaki küçük değerdir, yani minimum değerdir. Soru en büyük değeri istiyor.
  ✘ 7  [eksi_mutlak_karistirma] Önündeki eksi V'yi ters çevirir; −|x| ≤ 0 olduğundan f(x) ≤ 2 olur.
  ✘ 0  [okuma_hatasi] x = 0, maksimum değerin alındığı x değeridir; soru f'nin değerini istiyor.
  ✘ Maksimum değer yoktur.  [maksimum_varlik] Ters V'nin en üst noktası x = 0 noktasındadır ve bu x aralıktadır; maksimum değer orada alınır.
  ? Önünde eksi var; grafik ters V biçimindedir. Soru f'nin en büyük değerini istiyor.
  ? Ters V'de en büyük değer, içi 0 olan x'te alınır. Önce bu x'in aralıkta olup olmadığına bak, sonra f'yi orada hesapla.
  ? İlk adım: içi x olduğundan içi 0 yapan x: x = 0. Şimdi bu x'in [−3, 5] aralığında olup olmadığına bak.
  1. Mutlak değerin içi x'tir.
  2. İçi 0 olsun diye x = 0 alınır.
  3. 0, [−3, 5] aralığının içindedir.
  4. f(0) = −|0| + 2 = 2.
  5. Sol uç: f(−3) = −|−3| + 2 = −1.
  6. Sağ uç: f(5) = −|5| + 2 = −3.
  7. −|x| ≤ 0 olduğundan f(x) ≤ 2 olur.
  8. Maksimum değer 2 olur ve x = 0 noktasında alınır.

--- mat-u2-mutlak-kapali-min-ic #0 {"mod":"Vmin","s":1,"h":-1,"k":0,"p":-2,"q":2}
KÖK: f: [−2, 2] → ℝ, f(x) = |x + 1| fonksiyonunun minimum değeri kaçtır?
  ✔ 0
  ✘ Minimum değer yoktur.  [maksimum_varlik] Uçlar aralığa dâhildir; bu yüzden en küçük değer vardır ve hesaplanabilir.
  ✘ 3  [kavram_karisikligi] Seçtiğin sayı uçlardaki büyük değerdir, yani maksimum değerdir. Soru en küçük değeri istiyor.
  ✘ −1  [okuma_hatasi] x = −1, minimum değerin alındığı x değeridir; soru f'nin değerini istiyor.
  ✘ 1  [kavram_karisikligi] İçi 0 olan x = −1 aralıktadır; en küçük değer uçta değil, bu noktada alınır.
  ? Önce x'in hangi aralıkta olduğuna bak: −2 ile 2 arası, uçlar dâhil.
  ? |x + 1| en küçük değerini içi 0 iken alır. İçi 0 yapan x aralıktaysa en küçük değer orada; değilse iki uçtaki değeri karşılaştır.
  ? İlk adım: x + 1 = 0 yazılır. İki taraftan 1 çıkarılır: x = −1. Şimdi bu x'in [−2, 2] aralığında olup olmadığına bak.
  1. İçi 0 yap: x + 1 = 0.
  2. İki taraftan 1 çıkarılır: x = −1.
  3. −1, [−2, 2] aralığının içindedir.
  4. f(−1) = |0| = 0.
  5. |x + 1| hiç eksi olmaz; bu yüzden 0 en küçük değerdir.
  6. Minimum değer 0 olur ve x = −1 noktasında alınır.

--- mat-u2-mutlak-kapali-min-ic #2 {"mod":"Vmaks","s":1,"h":7,"k":0,"p":5,"q":10}
KÖK: f: [5, 10] → ℝ, f(x) = |x − 7| fonksiyonunun maksimum değeri kaçtır?
  ✔ 3
  ✘ Maksimum değer yoktur.  [maksimum_varlik] Kapalı aralıkta uç noktalar da tanım kümesindedir; V'nin en büyük değeri bir uçta alınır.
  ✘ 2  [eksik_adim] Uçlardaki iki değerden küçüğü seçilmiş; en büyük değer istenir.
  ✘ 0  [kavram_karisikligi] 0 minimum değerdir; x = 7 noktasında alınır. Soru en büyük değeri istiyor.
  ✘ 10  [okuma_hatasi] x = 10, maksimum değerin alındığı x değeridir; soru f'nin değerini istiyor.
  ? x yalnız 5 ile 10 arasında değer alır; uçlar da dâhil.
  ? V yukarı açık; en büyük değer uç noktalardan birindedir. İki uçta f'yi hesapla, büyüğünü al.
  ? İlk adım: f(5) = |5 − 7| = 2. Sonra öbür uçta da f'yi hesapla.
  1. Sol uç: f(5) = |5 − 7| = 2.
  2. Sağ uç: f(10) = |10 − 7| = 3.
  3. V yukarı açık; en büyük değer uçlardadır.
  4. Büyüğü alınır: maksimum değer 3 olur.
  5. Bu değer x = 10 noktasında alınır.

