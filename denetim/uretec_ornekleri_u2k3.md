Üreteç örnekleri · Matematik 9.2.3 Doğrusal denklem ve eşitsizlik problemleri (matematik-u2-k3)
Her üreteçten farklı durumları (bağlam, mod, kâr/zarar, a < 0, uç dâhil/hariç, sınır tam sayı/kesir, A'nın birim ücreti küçük/büyük) kapsayan ilk tohumlar.
✔ doğru şık; ✘ çeldirici havuzu [hata_turu] açıklama (değere göre tekilleştirilmiş, dizideki sıra teşhis önceliği; her tohumda bunlardan 3'ü seçilir); ? ipucu merdiveni; numaralı satırlar çözüm (son satır hep Kontrol).
Kayıtlar: denklem-kolay (1; hat, kiralama, sac kesimi), denklem (2; tır yakıtı, su deposu), esitsizlik-kolay (1; a > 0), esitsizlik (2; çoğunlukla a < 0), tamsayi-kolay (1; birim maliyet yok), tamsayi (2; birim maliyet, sınır tam sayı), tamsayi-kesir (3; sınır kesir), kesim (2; kesim noktasının x'i ya da ücreti), ucuz (2; hangi aralıkta daha ucuz), tolerans-kolay (1; bağlamsız, ≤), tolerans (2; bağlamlı, ondalık, ≤ ya da <), tolerans-ters (2; aralıktan |x − c| ≤ d); parantezde zorluk.
Üretim: panel/motor/uretecler/matematik.js, node ile tohum → gen(rng).
--- mat-u2-problem-denklem-kolay #0 {"tur":"hat","artan":true,"a":4,"b":100,"m":204}
BAĞLAM: Mehmet'in hat tarifesinde her ay 100 TL sabit ücret var. Paket bitince her ek dakika 4 TL tutuyor. (Sayılar kurgusaldır.)
KÖK: Buna göre faturası 204 TL gelen Mehmet o ay kaç ek dakika konuşmuştur?
  ✔ 26
  ✘ 104  [eksik_adim] 4x = 104 ara sonuçtur; iki taraf 4'e bölünür.
  ✘ 51  [kavram_karisikligi] 100 TL sabit ücret çıkarılmadan bölünmüş; önce 204 − 100 yapılır, sonra 4'e bölünür.
  ✘ 76  [isaret_hatasi] Karşıya geçen 100 çıkarılır, eklenmez: 4x = 204 − 100 olmalı.
  ✘ 2  [egim_kesisim_karistirma] Sabit ücret ile dakika ücreti yer değiştirmiş: x ile çarpılan sayı, her ek dakikada eklenen 4 TL'dir.
  ✘ 916  [okuma_hatasi] x yerine 204 konmuş; 204 TL ödenen ücrettir, bu yüzden f(x) = 204 denklemi çözülür.
  ? Önce modeli kur: hangi sayı bir kez ödeniyor, hangisi her birimde ekleniyor? Sonra modeli 204 sayısına eşitle.
  ? Denklemde önce sabit sayıyı karşıya geçir, sonra iki tarafı x'in katsayısına böl.
  ? İlk adım: f(x) = 4x + 100 olur; 4x + 100 = 204 yazılır. Şimdi iki taraftan 100 çıkar.
  1. x ek dakika sayısı, f(x) fatura (TL) olsun.
  2. Model: f(x) = 4x + 100.
  3. Denklem: 4x + 100 = 204.
  4. İki taraftan 100 çıkarılır: 4x = 104.
  5. İki taraf 4'e bölünür: x = 26.
  6. Mehmet o ay 26 ek dakika konuşmuştur.
  7. Kontrol, çarpma: 4 · 26 = 104.
  8. Kontrol, toplama: 104 + 100 = 204; f(26) = 204, doğru.

--- mat-u2-problem-denklem-kolay #1 {"tur":"kira","artan":true,"a":3,"b":300,"m":603}
BAĞLAM: Kocaeli'de bir firmadan araç kiralamak için 300 TL sabit ücret ve her kilometre için 3 TL ödeniyor. (Sayılar kurgusaldır.)
KÖK: Buna göre toplam 603 TL ödeyen biri kaç kilometre yol gitmiştir?
  ✔ 101
  ✘ 303  [eksik_adim] 3x = 303 ara sonuçtur; iki taraf 3'e bölünür.
  ✘ 201  [kavram_karisikligi] 300 TL sabit ücret çıkarılmadan bölünmüş; önce 603 − 300 yapılır, sonra 3'e bölünür.
  ✘ 301  [isaret_hatasi] Karşıya geçen 300 çıkarılır, eklenmez: 3x = 603 − 300 olmalı.
  ✘ 2  [egim_kesisim_karistirma] Sabit ücret ile kilometre ücreti yer değiştirmiş: x ile çarpılan sayı, her kilometrede eklenen 3 TL'dir.
  ✘ 2109  [okuma_hatasi] x yerine 603 konmuş; 603 TL ödenen ücrettir, bu yüzden f(x) = 603 denklemi çözülür.
  ? Önce modeli kur: hangi sayı bir kez ödeniyor, hangisi her birimde ekleniyor? Sonra modeli 603 sayısına eşitle.
  ? Denklemde önce sabit sayıyı karşıya geçir, sonra iki tarafı x'in katsayısına böl.
  ? İlk adım: f(x) = 3x + 300 olur; 3x + 300 = 603 yazılır. Şimdi iki taraftan 300 çıkar.
  1. x gidilen yol (km), f(x) toplam ücret (TL) olsun.
  2. Model: f(x) = 3x + 300.
  3. Denklem: 3x + 300 = 603.
  4. İki taraftan 300 çıkarılır: 3x = 303.
  5. İki taraf 3'e bölünür: x = 101.
  6. 101 kilometre yol gidilmiştir.
  7. Kontrol, çarpma: 3 · 101 = 303.
  8. Kontrol, toplama: 303 + 300 = 603; f(101) = 603, doğru.

--- mat-u2-problem-denklem-kolay #2 {"tur":"sac","artan":true,"a":8,"b":300,"m":900}
BAĞLAM: Gölcük'teki bir tersane atölyesi sac kesmek için 300 TL hazırlık ücreti alıyor. Kesilen her metre için de 8 TL alıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre 900 TL ödendiğinde kaç metre sac kesilmiştir?
  ✔ 75
  ✘ 600  [eksik_adim] 8x = 600 ara sonuçtur; iki taraf 8'e bölünür.
  ✘ 150  [isaret_hatasi] Karşıya geçen 300 çıkarılır, eklenmez: 8x = 900 − 300 olmalı.
  ✘ 7500  [okuma_hatasi] x yerine 900 konmuş; 900 TL ödenen ücrettir, bu yüzden f(x) = 900 denklemi çözülür.
  ? Önce modeli kur: hangi sayı bir kez ödeniyor, hangisi her birimde ekleniyor? Sonra modeli 900 sayısına eşitle.
  ? Denklemde önce sabit sayıyı karşıya geçir, sonra iki tarafı x'in katsayısına böl.
  ? İlk adım: f(x) = 8x + 300 olur; 8x + 300 = 900 yazılır. Şimdi iki taraftan 300 çıkar.
  1. x kesilen sac (metre), f(x) ödenen ücret (TL) olsun.
  2. Model: f(x) = 8x + 300.
  3. Denklem: 8x + 300 = 900.
  4. İki taraftan 300 çıkarılır: 8x = 600.
  5. İki taraf 8'e bölünür: x = 75.
  6. 75 metre sac kesilmiştir.
  7. Kontrol, çarpma: 8 · 75 = 600.
  8. Kontrol, toplama: 600 + 300 = 900; f(75) = 900, doğru.

--- mat-u2-problem-denklem #0 {"tur":"tir","artan":false,"a":20,"b":400,"m":320}
BAĞLAM: Kocaeli'den yola çıkan bir tırın deposunda 400 litre yakıt var. Tır her saat 20 litre yakıt harcıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre depoda 320 litre yakıt kalması için kaç saat geçmelidir?
  ✔ 4
  ✘ 80  [eksik_adim] 80 litre, harcanan yakıt miktarıdır; süre için 20'ye bölünür.
  ✘ 36  [isaret_hatasi] İki taraftan 320 çıkarılır, eklenmez: 400 − 320 = 20x olmalı.
  ✘ −4  [isaret_hatasi] İki tarafa 20x eklenince x'li terim artı kalır; artı sayı artı sayıya bölününce sonuç artıdır.
  ✘ 16  [okuma_hatasi] 320 litre kalan yakıt miktarıdır, harcanan değil; harcanan 400 − 320 olur.
  ? Önce modeli kur: başta ne kadar var, her birimde ne kadar azalıyor? Sonra modeli 320 sayısına eşitle.
  ? Önce eksi x'li terimi iki tarafa ekleyerek karşıya geçir. Sonra sabit sayıyı karşıya geçir ve x'in katsayısına böl.
  ? İlk adım: f(x) = 400 − 20x olur; 400 − 20x = 320 yazılır. Şimdi iki tarafa 20x ekle.
  1. x geçen süre (saat), f(x) depoda kalan yakıt (litre) olsun.
  2. Model: f(x) = 400 − 20x.
  3. Denklem: 400 − 20x = 320.
  4. İki tarafa 20x eklenir: 400 = 320 + 20x.
  5. İki taraftan 320 çıkarılır: 80 = 20x.
  6. İki taraf 20'ye bölünür: x = 4.
  7. 4 saat sonra depoda 320 litre yakıt kalır.
  8. Kontrol, çarpma: 20 · 4 = 80.
  9. Kontrol, çıkarma: 400 − 80 = 320; f(4) = 320, doğru.

--- mat-u2-problem-denklem #1 {"tur":"depo","artan":false,"a":4,"b":480,"m":360}
BAĞLAM: Gölcük'te bir su deposunda 480 litre su var. Depodan her dakika 4 litre su boşaltılıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre depoda 360 litre su kalması için kaç dakika geçmelidir?
  ✔ 30
  ✘ 120  [eksik_adim] 120 litre, harcanan su miktarıdır; süre için 4'e bölünür.
  ✘ 210  [isaret_hatasi] İki taraftan 360 çıkarılır, eklenmez: 480 − 360 = 4x olmalı.
  ✘ −30  [isaret_hatasi] İki tarafa 4x eklenince x'li terim artı kalır; artı sayı artı sayıya bölününce sonuç artıdır.
  ✘ 90  [okuma_hatasi] 360 litre kalan su miktarıdır, harcanan değil; harcanan 480 − 360 olur.
  ? Önce modeli kur: başta ne kadar var, her birimde ne kadar azalıyor? Sonra modeli 360 sayısına eşitle.
  ? Önce eksi x'li terimi iki tarafa ekleyerek karşıya geçir. Sonra sabit sayıyı karşıya geçir ve x'in katsayısına böl.
  ? İlk adım: f(x) = 480 − 4x olur; 480 − 4x = 360 yazılır. Şimdi iki tarafa 4x ekle.
  1. x geçen süre (dakika), f(x) depoda kalan su (litre) olsun.
  2. Model: f(x) = 480 − 4x.
  3. Denklem: 480 − 4x = 360.
  4. İki tarafa 4x eklenir: 480 = 360 + 4x.
  5. İki taraftan 360 çıkarılır: 120 = 4x.
  6. İki taraf 4'e bölünür: x = 30.
  7. 30 dakika sonra depoda 360 litre su kalır.
  8. Kontrol, çarpma: 4 · 30 = 120.
  9. Kontrol, çıkarma: 480 − 120 = 360; f(30) = 360, doğru.

--- mat-u2-problem-esitsizlik-kolay #0 {"a":3,"b":-3,"c":-18,"op":"≤"}
KÖK: 3x − 3 ≤ −18 eşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?
  ✔ (−∞, −5]
  ✘ (−∞, −5)  [aralik_uc] x = −5 için 3x − 3 = −18 olur; −18 ≤ −18 doğru, bu yüzden −5 dâhildir.
  ✘ [−5, ∞)  [esitsizlik_yonu] Artı sayıya bölünce eşitsizliğin yönü değişmez; ≤ işareti olduğu gibi kalır.
  ✘ [−∞, −5]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ✘ (−∞, −7]  [isaret_hatasi] Karşıya geçen 3 eklenir, çıkarılmaz: 3x ≤ −18 + 3 olmalı.
  ✘ (−∞, −15]  [eksik_adim] 3x ≤ −15 satırında bölme yapılmadan bırakılmış; iki taraf 3'e bölünür.
  ? x'i yalnız bırak; sonra uçta hangi parantezin geleceğine karar ver.
  ? Önce sabit sayıyı karşıya geçir, sonra iki tarafı x'in katsayısına böl. ≤ ve ≥ uca köşeli, < ve > normal parantez ister.
  ? İlk adım: iki tarafa 3 eklenir: 3x ≤ −15. Şimdi iki tarafı 3'e böl.
  1. İki tarafa 3 eklenir: 3x ≤ −15.
  2. İki taraf 3'e bölünür; artı sayıya bölünce yön değişmez: x ≤ −5.
  3. İşaret ≤ olduğu için −5 dâhildir.
  4. Çözüm aralığı (−∞, −5] olur.
  5. Kontrol, uç: x = −5 için 3 · (−5) = −15.
  6. Kontrol, uç: −15 − 3 = −18; −18 ≤ −18 doğru.
  7. Kontrol, içeriden: x = −6 için 3 · (−6) = −18.
  8. Kontrol, içeriden: −18 − 3 = −21; −21 ≤ −18 doğru.

--- mat-u2-problem-esitsizlik #0 {"a":-1,"b":-10,"c":-8,"op":">"}
KÖK: −x − 10 > −8 eşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?
  ✔ (−∞, −2)
  ✘ (−∞, −2]  [aralik_uc] x = −2 için −x − 10 = −8 olur; −8 > −8 yanlış, bu yüzden −2 hariçtir.
  ✘ (−2, ∞)  [esitsizlik_yonu] Eksi sayıya bölünce ya da eksi sayıyla çarpınca eşitsizliğin yönü ters döner; > işareti < olur.
  ✘ [−∞, −2)  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ✘ (−∞, 18)  [isaret_hatasi] Karşıya geçen 10 eklenir, çıkarılmaz: −x > −8 + 10 olmalı.
  ? x'in katsayısı eksi bir sayı: −1. Eksi sayıya bölünce eşitsizliğe ne olduğunu hatırla.
  ? Önce sabit sayıyı karşıya geçir, sonra iki tarafı x'in katsayısına böl. ≤ ve ≥ uca köşeli, < ve > normal parantez ister.
  ? İlk adım: iki tarafa 10 eklenir: −x > 2. Şimdi iki tarafı −1 ile çarp; yöne dikkat.
  1. İki tarafa 10 eklenir: −x > 2.
  2. İki taraf −1 ile çarpılır; eksi sayıyla çarpınca yön değişir: x < −2.
  3. İşaret < olduğu için −2 hariçtir.
  4. Çözüm aralığı (−∞, −2) olur.
  5. Kontrol, uç: x = −2 için −x = 2.
  6. Kontrol, uç: 2 − 10 = −8; −8 > −8 yanlış.
  7. Kontrol, içeriden: x = −3 için −x = 3.
  8. Kontrol, içeriden: 3 − 10 = −7; −7 > −8 doğru.
  9. Kontrol, dışarıdan: x = −1 için −x = 1.
  10. Kontrol, dışarıdan: 1 − 10 = −9; −9 > −8 yanlış, −1 aralıkta değil.

--- mat-u2-problem-esitsizlik #2 {"a":3,"b":18,"c":15,"op":">"}
KÖK: 3x + 18 > 15 eşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?
  ✔ (−1, ∞)
  ✘ [−1, ∞)  [aralik_uc] x = −1 için 3x + 18 = 15 olur; 15 > 15 yanlış, bu yüzden −1 hariçtir.
  ✘ (−∞, −1)  [esitsizlik_yonu] Artı sayıya bölünce eşitsizliğin yönü değişmez; > işareti olduğu gibi kalır.
  ✘ (−1, ∞]  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ✘ (11, ∞)  [isaret_hatasi] Karşıya geçen 18 çıkarılır, eklenmez: 3x > 15 − 18 olmalı.
  ✘ (−3, ∞)  [eksik_adim] 3x > −3 satırında bölme yapılmadan bırakılmış; iki taraf 3'e bölünür.
  ? x'i yalnız bırak; sonra uçta hangi parantezin geleceğine karar ver.
  ? Önce sabit sayıyı karşıya geçir, sonra iki tarafı x'in katsayısına böl. ≤ ve ≥ uca köşeli, < ve > normal parantez ister.
  ? İlk adım: iki taraftan 18 çıkarılır: 3x > −3. Şimdi iki tarafı 3'e böl.
  1. İki taraftan 18 çıkarılır: 3x > −3.
  2. İki taraf 3'e bölünür; artı sayıya bölünce yön değişmez: x > −1.
  3. İşaret > olduğu için −1 hariçtir.
  4. Çözüm aralığı (−1, ∞) olur.
  5. Kontrol, uç: x = −1 için 3 · (−1) = −3.
  6. Kontrol, uç: −3 + 18 = 15; 15 > 15 yanlış.
  7. Kontrol, içeriden: x = 0 için 3 · 0 = 0.
  8. Kontrol, içeriden: 0 + 18 = 18; 18 > 15 doğru.
  9. Kontrol, dışarıdan: x = −2 için 3 · (−2) = −6.
  10. Kontrol, dışarıdan: −6 + 18 = 12; 12 > 15 yanlış, −2 aralıkta değil.

--- mat-u2-problem-esitsizlik #5 {"a":-5,"b":2,"c":12,"op":">"}
KÖK: −5x + 2 > 12 eşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?
  ✔ (−∞, −2)
  ✘ (−∞, −2]  [aralik_uc] x = −2 için −5x + 2 = 12 olur; 12 > 12 yanlış, bu yüzden −2 hariçtir.
  ✘ (−2, ∞)  [esitsizlik_yonu] Eksi sayıya bölünce ya da eksi sayıyla çarpınca eşitsizliğin yönü ters döner; > işareti < olur.
  ✘ [−∞, −2)  [sonsuz_koseli] ∞ bir sayı değildir, aralığa dâhil edilemez; ∞ yanında hep normal parantez kullanılır.
  ✘ (10, ∞)  [eksik_adim] −5x > 10 satırında bölme yapılmadan bırakılmış; iki taraf −5'e bölünür. Eksi sayıya bölünce yön de ters döner.
  ? x'in katsayısı eksi bir sayı: −5. Eksi sayıya bölünce eşitsizliğe ne olduğunu hatırla.
  ? Önce sabit sayıyı karşıya geçir, sonra iki tarafı x'in katsayısına böl. ≤ ve ≥ uca köşeli, < ve > normal parantez ister.
  ? İlk adım: iki taraftan 2 çıkarılır: −5x > 10. Şimdi iki tarafı −5'e böl; yöne dikkat.
  1. İki taraftan 2 çıkarılır: −5x > 10.
  2. İki taraf −5'e bölünür; eksi sayıya bölünce yön değişir: x < −2.
  3. İşaret < olduğu için −2 hariçtir.
  4. Çözüm aralığı (−∞, −2) olur.
  5. Kontrol, uç: x = −2 için −5 · (−2) = 10.
  6. Kontrol, uç: 10 + 2 = 12; 12 > 12 yanlış.
  7. Kontrol, içeriden: x = −3 için −5 · (−3) = 15.
  8. Kontrol, içeriden: 15 + 2 = 17; 17 > 12 doğru.
  9. Kontrol, dışarıdan: x = −1 için −5 · (−1) = 5.
  10. Kontrol, dışarıdan: 5 + 2 = 7; 7 > 12 yanlış, −1 aralıkta değil.

--- mat-u2-problem-tamsayi-kolay #0 {"ctx":"simit","kar":true,"p":10,"u":0,"F":380}
BAĞLAM: Gölcük'te bir simit büfesinin günlük gideri 380 TL. Her simit 10 TL'ye satılıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre büfenin kâr edebilmesi için bir günde en az kaç simit satması gerekir?
  ✔ 39
  ✘ 38  [aralik_uc] Sınırın kendisi alınmış: k(38) = 0; ne kâr ne zarar vardır.
  ✘ 37  [esitsizlik_yonu] Yanlış yöne gidilmiş: 37, sınır olan 38 sayısının altında kalır, k(37) = −10; zarar var, kâr yok.
  ✘ 380  [eksik_adim] 10x > 380 satırında bölme yapılmadan bırakılmış; 380 TL giderdir, simit sayısı için 10'a bölünür.
  ? Kâr = Gelir − Gider.
  ? Kâr fonksiyonunu kur, k(x) > 0 yazıp çöz. Simit sayısı tam sayıdır; sınır hariçtir, sınırın doğru yanındaki ilk tam sayıyı al.
  ? İlk adım: gelir 10x, gider 380 TL; kâr şartı 10x − 380 > 0 yazılır. Şimdi iki tarafa 380 ekle.
  1. Gelir: g(x) = 10x; gider: 380 TL.
  2. Kâr = Gelir − Gider: k(x) = 10x − 380.
  3. Kâr şartı: 10x − 380 > 0.
  4. İki tarafa 380 eklenir: 10x > 380.
  5. İki taraf 10'a bölünür: x > 38.
  6. 38 hariçtir; simit sayısı tam sayıdır.
  7. Sınırdan büyük ilk tam sayı 39.
  8. En az 39 simit satılmalıdır.
  9. Kontrol: 38 ve 39 simit için gelir ve gider ayrı hesaplanır.
  10. Gelir, 38 simit: 10 · 38 = 380 TL.
  11. Kâr, 38 simit: gelir − gider = 380 − 380 = 0; ne kâr ne zarar var.
  12. Gelir, 39 simit: 10 · 39 = 390 TL.
  13. Kâr, 39 simit: gelir − gider = 390 − 380 = 10 > 0; kâr var.

--- mat-u2-problem-tamsayi-kolay #1 {"ctx":"kurabiye","kar":true,"p":12,"u":0,"F":720}
BAĞLAM: Okul kermesinde kurabiye satan öğrenci kulübü stant ve malzeme için toplam 720 TL harcadı. Her paket kurabiye 12 TL'ye satılıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre kulübün kâr edebilmesi için en az kaç paket kurabiye satması gerekir?
  ✔ 61
  ✘ 60  [aralik_uc] Sınırın kendisi alınmış: k(60) = 0; ne kâr ne zarar vardır.
  ✘ 59  [esitsizlik_yonu] Yanlış yöne gidilmiş: 59, sınır olan 60 sayısının altında kalır, k(59) = −12; zarar var, kâr yok.
  ✘ 720  [eksik_adim] 12x > 720 satırında bölme yapılmadan bırakılmış; 720 TL giderdir, paket kurabiye sayısı için 12'ye bölünür.
  ? Kâr = Gelir − Gider.
  ? Kâr fonksiyonunu kur, k(x) > 0 yazıp çöz. Paket kurabiye sayısı tam sayıdır; sınır hariçtir, sınırın doğru yanındaki ilk tam sayıyı al.
  ? İlk adım: gelir 12x, gider 720 TL; kâr şartı 12x − 720 > 0 yazılır. Şimdi iki tarafa 720 ekle.
  1. Gelir: g(x) = 12x; gider: 720 TL.
  2. Kâr = Gelir − Gider: k(x) = 12x − 720.
  3. Kâr şartı: 12x − 720 > 0.
  4. İki tarafa 720 eklenir: 12x > 720.
  5. İki taraf 12'ye bölünür: x > 60.
  6. 60 hariçtir; paket kurabiye sayısı tam sayıdır.
  7. Sınırdan büyük ilk tam sayı 61.
  8. En az 61 paket kurabiye satılmalıdır.
  9. Kontrol: 60 ve 61 paket kurabiye için gelir ve gider ayrı hesaplanır.
  10. Gelir, 60 paket kurabiye: 12 · 60 = 720 TL.
  11. Kâr, 60 paket kurabiye: gelir − gider = 720 − 720 = 0; ne kâr ne zarar var.
  12. Gelir, 61 paket kurabiye: 12 · 61 = 732 TL.
  13. Kâr, 61 paket kurabiye: gelir − gider = 732 − 720 = 12 > 0; kâr var.

--- mat-u2-problem-tamsayi-kolay #2 {"ctx":"tost","kar":true,"p":25,"u":0,"F":1050}
BAĞLAM: Tersanedeki bir kantinin günlük gideri 1050 TL. Her tost 25 TL'ye satılıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre kantinin kâr edebilmesi için bir günde en az kaç tost satması gerekir?
  ✔ 43
  ✘ 42  [aralik_uc] Sınırın kendisi alınmış: k(42) = 0; ne kâr ne zarar vardır.
  ✘ 41  [esitsizlik_yonu] Yanlış yöne gidilmiş: 41, sınır olan 42 sayısının altında kalır, k(41) = −25; zarar var, kâr yok.
  ✘ 1050  [eksik_adim] 25x > 1050 satırında bölme yapılmadan bırakılmış; 1050 TL giderdir, tost sayısı için 25'e bölünür.
  ? Kâr = Gelir − Gider.
  ? Kâr fonksiyonunu kur, k(x) > 0 yazıp çöz. Tost sayısı tam sayıdır; sınır hariçtir, sınırın doğru yanındaki ilk tam sayıyı al.
  ? İlk adım: gelir 25x, gider 1050 TL; kâr şartı 25x − 1050 > 0 yazılır. Şimdi iki tarafa 1050 ekle.
  1. Gelir: g(x) = 25x; gider: 1050 TL.
  2. Kâr = Gelir − Gider: k(x) = 25x − 1050.
  3. Kâr şartı: 25x − 1050 > 0.
  4. İki tarafa 1050 eklenir: 25x > 1050.
  5. İki taraf 25'e bölünür: x > 42.
  6. 42 hariçtir; tost sayısı tam sayıdır.
  7. Sınırdan büyük ilk tam sayı 43.
  8. En az 43 tost satılmalıdır.
  9. Kontrol: 42 ve 43 tost için gelir ve gider ayrı hesaplanır.
  10. Gelir, 42 tost: 25 · 42 = 1050 TL.
  11. Kâr, 42 tost: gelir − gider = 1050 − 1050 = 0; ne kâr ne zarar var.
  12. Gelir, 43 tost: 25 · 43 = 1075 TL.
  13. Kâr, 43 tost: gelir − gider = 1075 − 1050 = 25 > 0; kâr var.

--- mat-u2-problem-tamsayi #0 {"ctx":"simit","kar":true,"p":20,"u":12,"F":800}
BAĞLAM: Gölcük'te bir simit büfesinin günlük sabit gideri 800 TL. Her simidin malzeme maliyeti 12 TL, satış fiyatı 20 TL. (Sayılar kurgusaldır.)
KÖK: Buna göre büfenin kâr edebilmesi için bir günde en az kaç simit satması gerekir?
  ✔ 101
  ✘ 100  [aralik_uc] Sınırın kendisi alınmış: k(100) = 0; ne kâr ne zarar vardır.
  ✘ 99  [esitsizlik_yonu] Yanlış yöne gidilmiş: 99, sınır olan 100 sayısının altında kalır, k(99) = −8; zarar var, kâr yok.
  ✘ 41  [kavram_karisikligi] Her simidin 12 TL maliyeti de gidere girer; gider 800 + 12x olur.
  ✘ 26  [isaret_hatasi] Parantez açılırken eksi işareti 12x'e de geçmeli: 20x − (800 + 12x) = 20x − 800 − 12x olur.
  ? Kâr = Gelir − Gider. Gider iki parçalıdır: sabit gider ve her simidin maliyeti.
  ? Kâr fonksiyonunu kur, k(x) > 0 yazıp çöz. Simit sayısı tam sayıdır; sınır hariçtir, sınırın doğru yanındaki ilk tam sayıyı al.
  ? İlk adım: gelir 20x, gider 800 + 12x olur; k(x) = 20x − (800 + 12x) yazılır. Şimdi parantezi aç; eksi iki terime de dağılır.
  1. Gelir: g(x) = 20x.
  2. Gider: 800 + 12x (sabit gider + her simidin maliyeti).
  3. Kâr = Gelir − Gider: k(x) = 20x − (800 + 12x).
  4. Parantez açılır, eksi iki terime de dağılır: k(x) = 20x − 800 − 12x.
  5. x'li terimler birleştirilir: k(x) = 8x − 800.
  6. Kâr şartı: 8x − 800 > 0.
  7. İki tarafa 800 eklenir: 8x > 800.
  8. İki taraf 8'e bölünür: x > 100.
  9. 100 hariçtir; simit sayısı tam sayıdır.
  10. Sınırdan büyük ilk tam sayı 101.
  11. En az 101 simit satılmalıdır.
  12. Kontrol: 100 ve 101 simit için gelir ve gider ayrı hesaplanır.
  13. Gelir, 100 simit: 20 · 100 = 2000 TL.
  14. Gider, 100 simit: 800 + 12 · 100 = 2000 TL; gelir = gider, kâr 0.
  15. Gelir, 101 simit: 20 · 101 = 2020 TL.
  16. Gider, 101 simit: 800 + 12 · 101 = 2012 TL.
  17. Kâr, 101 simit: 2020 − 2012 = 8 > 0; kâr var.

--- mat-u2-problem-tamsayi #1 {"ctx":"kurabiye","kar":true,"p":13,"u":3,"F":190}
BAĞLAM: Okul kermesinde kurabiye satan öğrenci kulübü stant için 190 TL ödedi. Her paket kurabiyenin malzeme maliyeti 3 TL, satış fiyatı 13 TL. (Sayılar kurgusaldır.)
KÖK: Buna göre kulübün kâr edebilmesi için en az kaç paket kurabiye satması gerekir?
  ✔ 20
  ✘ 19  [aralik_uc] Sınırın kendisi alınmış: k(19) = 0; ne kâr ne zarar vardır.
  ✘ 18  [esitsizlik_yonu] Yanlış yöne gidilmiş: 18, sınır olan 19 sayısının altında kalır, k(18) = −10; zarar var, kâr yok.
  ✘ 15  [kavram_karisikligi] Her paketin 3 TL maliyeti de gidere girer; gider 190 + 3x olur.
  ✘ 12  [isaret_hatasi] Parantez açılırken eksi işareti 3x'e de geçmeli: 13x − (190 + 3x) = 13x − 190 − 3x olur.
  ? Kâr = Gelir − Gider. Gider iki parçalıdır: sabit gider ve her paketin maliyeti.
  ? Kâr fonksiyonunu kur, k(x) > 0 yazıp çöz. Paket kurabiye sayısı tam sayıdır; sınır hariçtir, sınırın doğru yanındaki ilk tam sayıyı al.
  ? İlk adım: gelir 13x, gider 190 + 3x olur; k(x) = 13x − (190 + 3x) yazılır. Şimdi parantezi aç; eksi iki terime de dağılır.
  1. Gelir: g(x) = 13x.
  2. Gider: 190 + 3x (sabit gider + her paketin maliyeti).
  3. Kâr = Gelir − Gider: k(x) = 13x − (190 + 3x).
  4. Parantez açılır, eksi iki terime de dağılır: k(x) = 13x − 190 − 3x.
  5. x'li terimler birleştirilir: k(x) = 10x − 190.
  6. Kâr şartı: 10x − 190 > 0.
  7. İki tarafa 190 eklenir: 10x > 190.
  8. İki taraf 10'a bölünür: x > 19.
  9. 19 hariçtir; paket kurabiye sayısı tam sayıdır.
  10. Sınırdan büyük ilk tam sayı 20.
  11. En az 20 paket kurabiye satılmalıdır.
  12. Kontrol: 19 ve 20 paket kurabiye için gelir ve gider ayrı hesaplanır.
  13. Gelir, 19 paket kurabiye: 13 · 19 = 247 TL.
  14. Gider, 19 paket kurabiye: 190 + 3 · 19 = 247 TL; gelir = gider, kâr 0.
  15. Gelir, 20 paket kurabiye: 13 · 20 = 260 TL.
  16. Gider, 20 paket kurabiye: 190 + 3 · 20 = 250 TL.
  17. Kâr, 20 paket kurabiye: 260 − 250 = 10 > 0; kâr var.

--- mat-u2-problem-tamsayi #2 {"ctx":"tost","kar":true,"p":19,"u":9,"F":520}
BAĞLAM: Tersanedeki bir kantinin günlük sabit gideri 520 TL. Her tostun malzeme maliyeti 9 TL, satış fiyatı 19 TL. (Sayılar kurgusaldır.)
KÖK: Buna göre kantinin kâr edebilmesi için bir günde en az kaç tost satması gerekir?
  ✔ 53
  ✘ 52  [aralik_uc] Sınırın kendisi alınmış: k(52) = 0; ne kâr ne zarar vardır.
  ✘ 51  [esitsizlik_yonu] Yanlış yöne gidilmiş: 51, sınır olan 52 sayısının altında kalır, k(51) = −10; zarar var, kâr yok.
  ✘ 28  [kavram_karisikligi] Her tostun 9 TL maliyeti de gidere girer; gider 520 + 9x olur.
  ✘ 19  [isaret_hatasi] Parantez açılırken eksi işareti 9x'e de geçmeli: 19x − (520 + 9x) = 19x − 520 − 9x olur.
  ? Kâr = Gelir − Gider. Gider iki parçalıdır: sabit gider ve her tostun maliyeti.
  ? Kâr fonksiyonunu kur, k(x) > 0 yazıp çöz. Tost sayısı tam sayıdır; sınır hariçtir, sınırın doğru yanındaki ilk tam sayıyı al.
  ? İlk adım: gelir 19x, gider 520 + 9x olur; k(x) = 19x − (520 + 9x) yazılır. Şimdi parantezi aç; eksi iki terime de dağılır.
  1. Gelir: g(x) = 19x.
  2. Gider: 520 + 9x (sabit gider + her tostun maliyeti).
  3. Kâr = Gelir − Gider: k(x) = 19x − (520 + 9x).
  4. Parantez açılır, eksi iki terime de dağılır: k(x) = 19x − 520 − 9x.
  5. x'li terimler birleştirilir: k(x) = 10x − 520.
  6. Kâr şartı: 10x − 520 > 0.
  7. İki tarafa 520 eklenir: 10x > 520.
  8. İki taraf 10'a bölünür: x > 52.
  9. 52 hariçtir; tost sayısı tam sayıdır.
  10. Sınırdan büyük ilk tam sayı 53.
  11. En az 53 tost satılmalıdır.
  12. Kontrol: 52 ve 53 tost için gelir ve gider ayrı hesaplanır.
  13. Gelir, 52 tost: 19 · 52 = 988 TL.
  14. Gider, 52 tost: 520 + 9 · 52 = 988 TL; gelir = gider, kâr 0.
  15. Gelir, 53 tost: 19 · 53 = 1007 TL.
  16. Gider, 53 tost: 520 + 9 · 53 = 997 TL.
  17. Kâr, 53 tost: 1007 − 997 = 10 > 0; kâr var.

--- mat-u2-problem-tamsayi-kesir #0 {"ctx":"simit","kar":true,"p":12,"u":3,"F":800}
BAĞLAM: Gölcük'te bir simit büfesinin günlük sabit gideri 800 TL. Her simidin malzeme maliyeti 3 TL, satış fiyatı 12 TL. (Sayılar kurgusaldır.)
KÖK: Buna göre büfenin kâr edebilmesi için bir günde en az kaç simit satması gerekir?
  ✔ 89
  ✘ 88  [aralik_uc] Kesrin yalnız tam kısmı alınmış: 800 ÷ 9 = 88, kalan 8. 88 için k(88) = −8; zarar var, kâr yok.
  ✘ 67  [kavram_karisikligi] Her simidin 3 TL maliyeti de gidere girer; gider 800 + 3x olur.
  ✘ 54  [isaret_hatasi] Parantez açılırken eksi işareti 3x'e de geçmeli: 12x − (800 + 3x) = 12x − 800 − 3x olur.
  ? Kâr = Gelir − Gider. Gider iki parçalıdır: sabit gider ve her simidin maliyeti.
  ? Kâr fonksiyonunu kur, k(x) > 0 yazıp çöz. Simit sayısı tam sayıdır; sınır hariçtir, sınırın doğru yanındaki ilk tam sayıyı al.
  ? İlk adım: gelir 12x, gider 800 + 3x olur; k(x) = 12x − (800 + 3x) yazılır. Şimdi parantezi aç; eksi iki terime de dağılır.
  1. Gelir: g(x) = 12x.
  2. Gider: 800 + 3x (sabit gider + her simidin maliyeti).
  3. Kâr = Gelir − Gider: k(x) = 12x − (800 + 3x).
  4. Parantez açılır, eksi iki terime de dağılır: k(x) = 12x − 800 − 3x.
  5. x'li terimler birleştirilir: k(x) = 9x − 800.
  6. Kâr şartı: 9x − 800 > 0.
  7. İki tarafa 800 eklenir: 9x > 800.
  8. İki taraf 9'a bölünür: x > 800/9.
  9. 800 ÷ 9 = 88, kalan 8; sınır 88 ile 89 arasındadır.
  10. Sınırdan büyük ilk tam sayı 89.
  11. En az 89 simit satılmalıdır.
  12. Kontrol: 88 ve 89 simit için gelir ve gider ayrı hesaplanır.
  13. Gelir, 88 simit: 12 · 88 = 1056 TL.
  14. Gider, 88 simit: 800 + 3 · 88 = 1064 TL.
  15. Kâr, 88 simit: 1056 − 1064 = −8 < 0; zarar var.
  16. Gelir, 89 simit: 12 · 89 = 1068 TL.
  17. Gider, 89 simit: 800 + 3 · 89 = 1067 TL.
  18. Kâr, 89 simit: 1068 − 1067 = 1 > 0; kâr var.

--- mat-u2-problem-tamsayi-kesir #1 {"ctx":"kurabiye","kar":true,"p":16,"u":3,"F":700}
BAĞLAM: Okul kermesinde kurabiye satan öğrenci kulübü stant için 700 TL ödedi. Her paket kurabiyenin malzeme maliyeti 3 TL, satış fiyatı 16 TL. (Sayılar kurgusaldır.)
KÖK: Buna göre kulübün kâr edebilmesi için en az kaç paket kurabiye satması gerekir?
  ✔ 54
  ✘ 53  [aralik_uc] Kesrin yalnız tam kısmı alınmış: 700 ÷ 13 = 53, kalan 11. 53 için k(53) = −11; zarar var, kâr yok.
  ✘ 44  [kavram_karisikligi] Her paketin 3 TL maliyeti de gidere girer; gider 700 + 3x olur.
  ✘ 37  [isaret_hatasi] Parantez açılırken eksi işareti 3x'e de geçmeli: 16x − (700 + 3x) = 16x − 700 − 3x olur.
  ? Kâr = Gelir − Gider. Gider iki parçalıdır: sabit gider ve her paketin maliyeti.
  ? Kâr fonksiyonunu kur, k(x) > 0 yazıp çöz. Paket kurabiye sayısı tam sayıdır; sınır hariçtir, sınırın doğru yanındaki ilk tam sayıyı al.
  ? İlk adım: gelir 16x, gider 700 + 3x olur; k(x) = 16x − (700 + 3x) yazılır. Şimdi parantezi aç; eksi iki terime de dağılır.
  1. Gelir: g(x) = 16x.
  2. Gider: 700 + 3x (sabit gider + her paketin maliyeti).
  3. Kâr = Gelir − Gider: k(x) = 16x − (700 + 3x).
  4. Parantez açılır, eksi iki terime de dağılır: k(x) = 16x − 700 − 3x.
  5. x'li terimler birleştirilir: k(x) = 13x − 700.
  6. Kâr şartı: 13x − 700 > 0.
  7. İki tarafa 700 eklenir: 13x > 700.
  8. İki taraf 13'e bölünür: x > 700/13.
  9. 700 ÷ 13 = 53, kalan 11; sınır 53 ile 54 arasındadır.
  10. Sınırdan büyük ilk tam sayı 54.
  11. En az 54 paket kurabiye satılmalıdır.
  12. Kontrol: 53 ve 54 paket kurabiye için gelir ve gider ayrı hesaplanır.
  13. Gelir, 53 paket kurabiye: 16 · 53 = 848 TL.
  14. Gider, 53 paket kurabiye: 700 + 3 · 53 = 859 TL.
  15. Kâr, 53 paket kurabiye: 848 − 859 = −11 < 0; zarar var.
  16. Gelir, 54 paket kurabiye: 16 · 54 = 864 TL.
  17. Gider, 54 paket kurabiye: 700 + 3 · 54 = 862 TL.
  18. Kâr, 54 paket kurabiye: 864 − 862 = 2 > 0; kâr var.

--- mat-u2-problem-tamsayi-kesir #2 {"ctx":"tost","kar":true,"p":22,"u":4,"F":1250}
BAĞLAM: Tersanedeki bir kantinin günlük sabit gideri 1250 TL. Her tostun malzeme maliyeti 4 TL, satış fiyatı 22 TL. (Sayılar kurgusaldır.)
KÖK: Buna göre kantinin kâr edebilmesi için bir günde en az kaç tost satması gerekir?
  ✔ 70
  ✘ 69  [aralik_uc] Kesrin yalnız tam kısmı alınmış: 1250 ÷ 18 = 69, kalan 8. 69 için k(69) = −8; zarar var, kâr yok.
  ✘ 57  [kavram_karisikligi] Her tostun 4 TL maliyeti de gidere girer; gider 1250 + 4x olur.
  ✘ 49  [isaret_hatasi] Parantez açılırken eksi işareti 4x'e de geçmeli: 22x − (1250 + 4x) = 22x − 1250 − 4x olur.
  ? Kâr = Gelir − Gider. Gider iki parçalıdır: sabit gider ve her tostun maliyeti.
  ? Kâr fonksiyonunu kur, k(x) > 0 yazıp çöz. Tost sayısı tam sayıdır; sınır hariçtir, sınırın doğru yanındaki ilk tam sayıyı al.
  ? İlk adım: gelir 22x, gider 1250 + 4x olur; k(x) = 22x − (1250 + 4x) yazılır. Şimdi parantezi aç; eksi iki terime de dağılır.
  1. Gelir: g(x) = 22x.
  2. Gider: 1250 + 4x (sabit gider + her tostun maliyeti).
  3. Kâr = Gelir − Gider: k(x) = 22x − (1250 + 4x).
  4. Parantez açılır, eksi iki terime de dağılır: k(x) = 22x − 1250 − 4x.
  5. x'li terimler birleştirilir: k(x) = 18x − 1250.
  6. Kâr şartı: 18x − 1250 > 0.
  7. İki tarafa 1250 eklenir: 18x > 1250.
  8. İki taraf 18'e bölünür: x > 1250/18.
  9. 1250 ÷ 18 = 69, kalan 8; sınır 69 ile 70 arasındadır.
  10. Sınırdan büyük ilk tam sayı 70.
  11. En az 70 tost satılmalıdır.
  12. Kontrol: 69 ve 70 tost için gelir ve gider ayrı hesaplanır.
  13. Gelir, 69 tost: 22 · 69 = 1518 TL.
  14. Gider, 69 tost: 1250 + 4 · 69 = 1526 TL.
  15. Kâr, 69 tost: 1518 − 1526 = −8 < 0; zarar var.
  16. Gelir, 70 tost: 22 · 70 = 1540 TL.
  17. Gider, 70 tost: 1250 + 4 · 70 = 1530 TL.
  18. Kâr, 70 tost: 1540 − 1530 = 10 > 0; kâr var.

--- mat-u2-problem-kesim #0 {"tur":"hat","mod":"x","A":{"a":1,"b":250},"B":{"a":5,"b":50}}
BAĞLAM: Gölcük'te iki hat tarifesi var. A tarifesinde aylık sabit ücret 250 TL, dakikası 1 TL. B tarifesinde aylık sabit ücret 50 TL, dakikası 5 TL. (Sayılar kurgusaldır.)
KÖK: Buna göre kaç dakikalık konuşmada iki tarifenin faturası eşit olur?
  ✔ 50
  ✘ 300  [okuma_hatasi] 300, kesim noktasının y değeridir, yani eşit ücrettir (TL); soru x değerini istiyor.
  ✘ 75  [isaret_hatasi] Sabit sayı karşıya geçerken işareti değişir: iki taraftan 50 çıkarılır; burada 50 eklenmiş.
  ✘ 200  [eksik_adim] 4x = 200 ara sonuçtur; iki taraf 4'e bölünür.
  ? İki ücretin eşit olduğu yer, iki doğrunun kesim noktasıdır. Soru bu noktanın x değerini istiyor.
  ? Ücret fonksiyonlarını yaz ve birbirine eşitle; x'leri bir tarafa, sayıları öbür tarafa topla.
  ? İlk adım: A(x) = B(x) yazılır: x + 250 = 5x + 50. Şimdi iki taraftan x çıkar.
  1. Ücretler: A(x) = x + 250, B(x) = 5x + 50.
  2. Eşit ücret: A(x) = B(x), yani x + 250 = 5x + 50.
  3. İki taraftan x çıkarılır: 250 = 4x + 50.
  4. İki taraftan 50 çıkarılır: 200 = 4x.
  5. İki taraf 4'e bölünür: 50 = x.
  6. x = 50 dakika için iki ücret eşittir.
  7. Kontrol, A: A(50) = 50 + 250 = 300 TL.
  8. Kontrol, B: B(50) = 5 · 50 + 50 = 300 TL; iki ücret eşit.

--- mat-u2-problem-kesim #1 {"tur":"kira","mod":"x","A":{"a":4,"b":1100},"B":{"a":6,"b":500}}
BAĞLAM: Kocaeli'de iki firma araç kiralıyor. A firması 1100 TL sabit ücret ve kilometre başına 4 TL alıyor. B firması 500 TL sabit ücret ve kilometre başına 6 TL alıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre kaç kilometrelik yolculukta iki firmanın ücreti eşit olur?
  ✔ 300
  ✘ 2300  [okuma_hatasi] 2300, kesim noktasının y değeridir, yani eşit ücrettir (TL); soru x değerini istiyor.
  ✘ 800  [isaret_hatasi] Sabit sayı karşıya geçerken işareti değişir: iki taraftan 500 çıkarılır; burada 500 eklenmiş.
  ✘ 60  [islem_hatasi] x'ler bir tarafa toplanırken 6x − 4x yerine 6x + 4x alınmış.
  ✘ 600  [eksik_adim] 2x = 600 ara sonuçtur; iki taraf 2'ye bölünür.
  ? İki ücretin eşit olduğu yer, iki doğrunun kesim noktasıdır. Soru bu noktanın x değerini istiyor.
  ? Ücret fonksiyonlarını yaz ve birbirine eşitle; x'leri bir tarafa, sayıları öbür tarafa topla.
  ? İlk adım: A(x) = B(x) yazılır: 4x + 1100 = 6x + 500. Şimdi iki taraftan 4x çıkar.
  1. Ücretler: A(x) = 4x + 1100, B(x) = 6x + 500.
  2. Eşit ücret: A(x) = B(x), yani 4x + 1100 = 6x + 500.
  3. İki taraftan 4x çıkarılır: 1100 = 2x + 500.
  4. İki taraftan 500 çıkarılır: 600 = 2x.
  5. İki taraf 2'ye bölünür: 300 = x.
  6. x = 300 kilometre için iki ücret eşittir.
  7. Kontrol, A: A(300) = 4 · 300 + 1100 = 2300 TL.
  8. Kontrol, B: B(300) = 6 · 300 + 500 = 2300 TL; iki ücret eşit.

--- mat-u2-problem-kesim #2 {"tur":"sac","mod":"x","A":{"a":6,"b":620},"B":{"a":10,"b":500}}
BAĞLAM: Tersanede sac kesen iki atölye var. A atölyesi 620 TL hazırlık ücreti ve metresi 6 TL alıyor. B atölyesi 500 TL hazırlık ücreti ve metresi 10 TL alıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre kaç metre sac kesildiğinde iki atölyenin ücreti eşit olur?
  ✔ 30
  ✘ 800  [okuma_hatasi] 800, kesim noktasının y değeridir, yani eşit ücrettir (TL); soru x değerini istiyor.
  ✘ 280  [isaret_hatasi] Sabit sayı karşıya geçerken işareti değişir: iki taraftan 500 çıkarılır; burada 500 eklenmiş.
  ✘ 120  [eksik_adim] 4x = 120 ara sonuçtur; iki taraf 4'e bölünür.
  ? İki ücretin eşit olduğu yer, iki doğrunun kesim noktasıdır. Soru bu noktanın x değerini istiyor.
  ? Ücret fonksiyonlarını yaz ve birbirine eşitle; x'leri bir tarafa, sayıları öbür tarafa topla.
  ? İlk adım: A(x) = B(x) yazılır: 6x + 620 = 10x + 500. Şimdi iki taraftan 6x çıkar.
  1. Ücretler: A(x) = 6x + 620, B(x) = 10x + 500.
  2. Eşit ücret: A(x) = B(x), yani 6x + 620 = 10x + 500.
  3. İki taraftan 6x çıkarılır: 620 = 4x + 500.
  4. İki taraftan 500 çıkarılır: 120 = 4x.
  5. İki taraf 4'e bölünür: 30 = x.
  6. x = 30 metre için iki ücret eşittir.
  7. Kontrol, A: A(30) = 6 · 30 + 620 = 800 TL.
  8. Kontrol, B: B(30) = 10 · 30 + 500 = 800 TL; iki ücret eşit.

--- mat-u2-problem-ucuz #0 {"tur":"hat","A":{"a":2,"b":80},"B":{"a":1,"b":130}}
BAĞLAM: Gölcük'te iki hat tarifesi var. A tarifesinde aylık sabit ücret 80 TL, dakikası 2 TL. B tarifesinde aylık sabit ücret 130 TL, dakikası 1 TL. (Sayılar kurgusaldır.)
KÖK: Buna göre A tarifesi hangi konuşma sürelerinde B tarifesinden daha ucuzdur?
  ✔ 50 dakikadan kısa konuşmalarda
  ✘ 50 dakikadan uzun konuşmalarda  [kesisim_taraf] Bu tarafta B daha ucuzdur: x = 75 için A(75) = 230 TL, B(75) = 205 TL.
  ✘ 50 dakika ve daha kısa konuşmalarda  [aralik_uc] x = 50 için A(50) = B(50) = 180 TL; ücretler eşitken A daha ucuz değildir.
  ✘ Hiçbir konuşma süresinde  [kavram_karisikligi] A'nın dakika ücreti yüksek ama aylık sabit ücreti düşük: x = 25 için A(25) = 130 TL, B(25) = 155 TL; burada A daha ucuzdur.
  ✘ 180 dakikadan kısa konuşmalarda  [okuma_hatasi] 180, kesim noktasının y değeridir (TL); aralığın sınırı kesim noktasının x değeridir.
  ? Daha ucuz, daha az ödemek demektir. Aynı x için iki ücreti karşılaştır.
  ? Eşitsizliği kur; x'leri bir tarafa, sayıları öbür tarafa topla. Sınır, iki ücretin eşit olduğu kesim noktasıdır.
  ? İlk adım: A(x) < B(x) yazılır: 2x + 80 < x + 130. Şimdi iki taraftan x çıkar.
  1. Ücretler: A(x) = 2x + 80, B(x) = x + 130.
  2. A daha ucuz demek A(x) < B(x): 2x + 80 < x + 130.
  3. İki taraftan x çıkarılır: x + 80 < 130.
  4. İki taraftan 80 çıkarılır: x < 50.
  5. x = 50 için A(50) = B(50) = 180 TL; '<' istendiği için 50 hariçtir.
  6. A tarifesi 50 dakikadan kısa konuşmalarda daha ucuzdur.
  7. Kontrol, kesim noktasının solundan: x = 25 için A(25) = 130 TL, B(25) = 155 TL; A daha ucuz.
  8. Kontrol, kesim noktasının sağından: x = 75 için A(75) = 230 TL, B(75) = 205 TL; B daha ucuz.

--- mat-u2-problem-ucuz #1 {"tur":"kira","A":{"a":8,"b":400},"B":{"a":5,"b":1300}}
BAĞLAM: Kocaeli'de iki firma araç kiralıyor. A firması 400 TL sabit ücret ve kilometre başına 8 TL alıyor. B firması 1300 TL sabit ücret ve kilometre başına 5 TL alıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre A firması hangi yolculuklarda B firmasından daha ucuzdur?
  ✔ 300 kilometreden kısa yolculuklarda
  ✘ 300 kilometreden uzun yolculuklarda  [kesisim_taraf] Bu tarafta B daha ucuzdur: x = 450 için A(450) = 4000 TL, B(450) = 3550 TL.
  ✘ 300 kilometre ve daha kısa yolculuklarda  [aralik_uc] x = 300 için A(300) = B(300) = 2800 TL; ücretler eşitken A daha ucuz değildir.
  ✘ Hiçbir yolculukta  [kavram_karisikligi] A'nın kilometre ücreti yüksek ama sabit ücreti düşük: x = 150 için A(150) = 1600 TL, B(150) = 2050 TL; burada A daha ucuzdur.
  ✘ 2800 kilometreden kısa yolculuklarda  [okuma_hatasi] 2800, kesim noktasının y değeridir (TL); aralığın sınırı kesim noktasının x değeridir.
  ? Daha ucuz, daha az ödemek demektir. Aynı x için iki ücreti karşılaştır.
  ? Eşitsizliği kur; x'leri bir tarafa, sayıları öbür tarafa topla. Sınır, iki ücretin eşit olduğu kesim noktasıdır.
  ? İlk adım: A(x) < B(x) yazılır: 8x + 400 < 5x + 1300. Şimdi iki taraftan 5x çıkar.
  1. Ücretler: A(x) = 8x + 400, B(x) = 5x + 1300.
  2. A daha ucuz demek A(x) < B(x): 8x + 400 < 5x + 1300.
  3. İki taraftan 5x çıkarılır: 3x + 400 < 1300.
  4. İki taraftan 400 çıkarılır: 3x < 900.
  5. İki taraf 3'e bölünür: x < 300.
  6. x = 300 için A(300) = B(300) = 2800 TL; '<' istendiği için 300 hariçtir.
  7. A firması 300 kilometreden kısa yolculuklarda daha ucuzdur.
  8. Kontrol, kesim noktasının solundan: x = 150 için A(150) = 1600 TL, B(150) = 2050 TL; A daha ucuz.
  9. Kontrol, kesim noktasının sağından: x = 450 için A(450) = 4000 TL, B(450) = 3550 TL; B daha ucuz.

--- mat-u2-problem-ucuz #2 {"tur":"sac","A":{"a":5,"b":850},"B":{"a":8,"b":400}}
BAĞLAM: Tersanede sac kesen iki atölye var. A atölyesi 850 TL hazırlık ücreti ve metresi 5 TL alıyor. B atölyesi 400 TL hazırlık ücreti ve metresi 8 TL alıyor. (Sayılar kurgusaldır.)
KÖK: Buna göre A atölyesi hangi işlerde B atölyesinden daha ucuzdur?
  ✔ 150 metreden uzun işlerde
  ✘ 150 metreden kısa işlerde  [kesisim_taraf] Bu tarafta B daha ucuzdur: x = 75 için A(75) = 1225 TL, B(75) = 1000 TL.
  ✘ 150 metre ve daha uzun işlerde  [aralik_uc] x = 150 için A(150) = B(150) = 1600 TL; ücretler eşitken A daha ucuz değildir.
  ✘ Her işte  [kavram_karisikligi] A'nın metre ücreti düşük ama hazırlık ücreti yüksek: x = 37 için A(37) = 1035 TL, B(37) = 696 TL; burada B daha ucuzdur.
  ? Daha ucuz, daha az ödemek demektir. Aynı x için iki ücreti karşılaştır.
  ? Eşitsizliği kur; x'leri bir tarafa, sayıları öbür tarafa topla. Sınır, iki ücretin eşit olduğu kesim noktasıdır.
  ? İlk adım: A(x) < B(x) yazılır: 5x + 850 < 8x + 400. Şimdi iki taraftan 5x çıkar.
  1. Ücretler: A(x) = 5x + 850, B(x) = 8x + 400.
  2. A daha ucuz demek A(x) < B(x): 5x + 850 < 8x + 400.
  3. İki taraftan 5x çıkarılır: 850 < 3x + 400.
  4. İki taraftan 400 çıkarılır: 450 < 3x.
  5. İki taraf 3'e bölünür: 150 < x.
  6. 150 < x ile x > 150 aynı şeydir.
  7. x = 150 için A(150) = B(150) = 1600 TL; '<' istendiği için 150 hariçtir.
  8. A atölyesi 150 metreden uzun işlerde daha ucuzdur.
  9. Kontrol, kesim noktasının solundan: x = 75 için A(75) = 1225 TL, B(75) = 1000 TL; B daha ucuz.
  10. Kontrol, kesim noktasının sağından: x = 225 için A(225) = 1975 TL, B(225) = 2200 TL; A daha ucuz.

--- mat-u2-problem-tolerans-kolay #0 {"C":100,"D":200,"inc":true}
KÖK: |x − 1| ≤ 2 eşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?
  ✔ [−1, 3]
  ✘ [−3, 5]  [mutlak_tam_uzunluk] Tolerans orta noktadan uca uzaklıktır, yani 2; burada 4 kullanılmış.
  ✘ (−1, 3)  [aralik_uc] İşaret ≤; uçlarda uzaklık tam 2 olur, 2 ≤ 2 doğru; köşeli parantez gerekir.
  ✘ (−∞, 3]  [eksik_adim] Yalnız sağ uç bulunmuş; x, 1 sayısının solunda da kalabilir, bu yüzden sol uç da yazılır: −1.
  ✘ [−3, 1]  [isaret_hatasi] Orta noktanın işareti ters alınmış; |x − 1| ifadesinde içi 0 yapan sayı 1 olur.
  ✘ [1, 3]  [kavram_karisikligi] Orta nokta ile tolerans yer değiştirmiş; |x − 1| ≤ 2 ifadesinde orta nokta 1, tolerans 2 olarak okunur.
  ✘ [−2, 2]  [kavram_karisikligi] Bu aralık, x − 1 ifadesinin alabileceği değerlerdir; x için iki uca da 1 eklenir.
  ? |x − 1| ≤ 2: x, 1 sayısına en çok 2 birim uzaktadır. 1 orta nokta, 2 toleranstır (orta noktadan uca uzaklık).
  ? 1 sayısından 2 birim sola ve 2 birim sağa git. Uçların dâhil olup olmadığına işaretten karar ver.
  ? İlk adım, sol uç: 1 − 2 = −1. Şimdi sağ ucu bul.
  1. |x − 1| ≤ 2: x, 1 sayısına en çok 2 birim uzaktadır.
  2. Sol uç: 1 − 2 = −1.
  3. Sağ uç: 1 + 2 = 3.
  4. İşaret ≤; uçlar dâhildir.
  5. Çözüm aralığı [−1, 3] olur.
  6. Kontrol, uç: |3 − 1| = 2; 2 ≤ 2 doğru, uç dâhil.
  7. Kontrol, dışarıdan: |5 − 1| = 4; 4 ≤ 2 yanlış, 5 aralıkta değil.

--- mat-u2-problem-tolerans-kolay #7 {"C":-100,"D":600,"inc":true}
KÖK: |x + 1| ≤ 6 eşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?
  ✔ [−7, 5]
  ✘ [−13, 11]  [mutlak_tam_uzunluk] Tolerans orta noktadan uca uzaklıktır, yani 6; burada 12 kullanılmış.
  ✘ (−7, 5)  [aralik_uc] İşaret ≤; uçlarda uzaklık tam 6 olur, 6 ≤ 6 doğru; köşeli parantez gerekir.
  ✘ (−∞, 5]  [eksik_adim] Yalnız sağ uç bulunmuş; x, −1 sayısının solunda da kalabilir, bu yüzden sol uç da yazılır: −7.
  ✘ [−5, 7]  [isaret_hatasi] Orta noktanın işareti ters alınmış; |x + 1| ifadesinde içi 0 yapan sayı −1 olur.
  ✘ [−6, 6]  [kavram_karisikligi] Bu aralık, x + 1 ifadesinin alabileceği değerlerdir; x için iki uçtan 1 çıkarılır.
  ? |x + 1| ≤ 6: x, −1 sayısına en çok 6 birim uzaktadır. −1 orta nokta, 6 toleranstır (orta noktadan uca uzaklık).
  ? −1 sayısından 6 birim sola ve 6 birim sağa git. Uçların dâhil olup olmadığına işaretten karar ver.
  ? İlk adım, sol uç: −1 − 6 = −7. Şimdi sağ ucu bul.
  1. |x + 1| ≤ 6: x, −1 sayısına en çok 6 birim uzaktadır.
  2. Sol uç: −1 − 6 = −7.
  3. Sağ uç: −1 + 6 = 5.
  4. İşaret ≤; uçlar dâhildir.
  5. Çözüm aralığı [−7, 5] olur.
  6. Kontrol, uç: |5 + 1| = 6; 6 ≤ 6 doğru, uç dâhil.
  7. Kontrol, dışarıdan: |11 + 1| = 12; 12 ≤ 6 yanlış, 11 aralıkta değil.

--- mat-u2-problem-tolerans #0 {"C":10000,"D":50,"inc":true}
BAĞLAM: Gölcük'teki bir tersanede kesilen boruların boyu 100 cm olmalıdır. Boyun bu değerden sapması en fazla 0,5 cm olabilir. (Sayılar kurgusaldır.)
KÖK: Buna göre kabul edilen boru boyları (x cm) aşağıdakilerden hangisidir?
  ✔ [99,5, 100,5], yani 99,5 ≤ x ≤ 100,5
  ✘ [99, 101]  [mutlak_tam_uzunluk] Tolerans orta noktadan uca uzaklıktır, yani 0,5; burada 1 kullanılmış.
  ✘ (99,5, 100,5), yani 99,5 < x < 100,5  [aralik_uc] İşaret ≤; uçlarda uzaklık tam 0,5 olur, 0,5 ≤ 0,5 doğru; köşeli parantez gerekir.
  ✘ (−∞, 100,5], yani x ≤ 100,5  [eksik_adim] Yalnız sağ uç bulunmuş; x, 100 sayısının solunda da kalabilir, bu yüzden sol uç da yazılır: 99,5.
  ✘ [−0,5, 0,5], yani −0,5 ≤ x ≤ 0,5  [kavram_karisikligi] Bu aralık, x − 100 ifadesinin alabileceği değerlerdir; x için iki uca da 100 eklenir.
  ? Sapma |x − 100| ile yazılır. 'En fazla 0,5 cm' sapma, |x − 100| ≤ 0,5 demektir.
  ? 100 sayısından 0,5 birim sola ve 0,5 birim sağa git. Uçların dâhil olup olmadığına işaretten karar ver.
  ? İlk adım, sol uç: 100 − 0,5 = 99,5. Şimdi sağ ucu bul.
  1. Sapma |x − 100| olur; tolerans (orta noktadan uca uzaklık) 0,5; şart |x − 100| ≤ 0,5.
  2. Sol uç: 100 − 0,5 = 99,5.
  3. Sağ uç: 100 + 0,5 = 100,5.
  4. İşaret ≤; uçlar dâhildir.
  5. Kabul edilen boylar: [99,5, 100,5], yani 99,5 ≤ x ≤ 100,5.
  6. Kontrol, uç: |100,5 − 100| = 0,5; 0,5 ≤ 0,5 doğru, uç dâhil.
  7. Kontrol, dışarıdan: |101 − 100| = 1; 1 ≤ 0,5 yanlış, 101 aralıkta değil.

--- mat-u2-problem-tolerans #1 {"C":3000,"D":20,"inc":false}
BAĞLAM: Kocaeli'de bir atölyede üretilen cıvataların boyu 30 mm olmalıdır. Boyunun bu değerden sapması 0,2 mm'den az olan cıvatalar kabul edilir. (Sayılar kurgusaldır.)
KÖK: Buna göre kabul edilen cıvata boyları (x mm) aşağıdakilerden hangisidir?
  ✔ (29,8, 30,2), yani 29,8 < x < 30,2
  ✘ (29,6, 30,4), yani 29,6 < x < 30,4  [mutlak_tam_uzunluk] Tolerans orta noktadan uca uzaklıktır, yani 0,2; burada 0,4 kullanılmış.
  ✘ [29,8, 30,2], yani 29,8 ≤ x ≤ 30,2  [aralik_uc] İşaret <; uçlarda uzaklık tam 0,2 olur, 0,2 < 0,2 yanlış; normal parantez gerekir.
  ✘ (−∞, 30,2), yani x < 30,2  [eksik_adim] Yalnız sağ uç bulunmuş; x, 30 sayısının solunda da kalabilir, bu yüzden sol uç da yazılır: 29,8.
  ✘ (−0,2, 0,2), yani −0,2 < x < 0,2  [kavram_karisikligi] Bu aralık, x − 30 ifadesinin alabileceği değerlerdir; x için iki uca da 30 eklenir.
  ? Sapma |x − 30| ile yazılır. '0,2 mm'den az' sapma, |x − 30| < 0,2 demektir.
  ? 30 sayısından 0,2 birim sola ve 0,2 birim sağa git. Uçların dâhil olup olmadığına işaretten karar ver.
  ? İlk adım, sol uç: 30 − 0,2 = 29,8. Şimdi sağ ucu bul.
  1. Sapma |x − 30| olur; tolerans (orta noktadan uca uzaklık) 0,2; şart |x − 30| < 0,2.
  2. Sol uç: 30 − 0,2 = 29,8.
  3. Sağ uç: 30 + 0,2 = 30,2.
  4. İşaret <; uçlar hariçtir.
  5. Kabul edilen boylar: (29,8, 30,2), yani 29,8 < x < 30,2.
  6. Kontrol, uç: |30,2 − 30| = 0,2; 0,2 < 0,2 yanlış, uç hariç.
  7. Kontrol, dışarıdan: |30,4 − 30| = 0,4; 0,4 < 0,2 yanlış, 30,4 aralıkta değil.

--- mat-u2-problem-tolerans-ters #0 {"P":-400,"Q":0,"inc":true}
KÖK: [−4, 0] aralığını gösteren mutlak değerli eşitsizlik aşağıdakilerden hangisidir?
  ✔ |x + 2| ≤ 2
  ✘ |x + 2| ≤ 4  [mutlak_tam_uzunluk] 4 aralığın tam uzunluğudur; tolerans, orta noktadan uca olan uzaklıktır, yani bunun yarısıdır.
  ✘ |x + 2| < 2  [aralik_uc] Köşeli parantez uçları dâhil eder; uçlardaki değerler de kabul edildiği için ≤ gerekir.
  ✘ |x + 2| ≥ 2  [esitsizlik_yonu] ≥ işareti orta noktadan uzak değerleri anlatır; aralıktaki değerler orta noktaya yakındır.
  ✘ |x − 2| ≤ 2  [isaret_hatasi] |x − 2| ifadesi x'in 2'ye uzaklığıdır; orta nokta −2 olduğu için |x + 2| yazılır.
  ? İki sayı gerekir: aralığın orta noktası ve tolerans, yani orta noktadan uca uzaklık.
  ? Orta nokta için uçları topla ve 2'ye böl. Tolerans için uçların farkını al ve 2'ye böl. Uçlar dâhilse ≤, hariçse < kullan.
  ? İlk adım: uçları topla: −4 + 0 = −4. Şimdi bu toplamı 2'ye böl.
  1. Uçları topla: −4 + 0 = −4.
  2. Toplam 2'ye bölünür: orta nokta −2 olur.
  3. Uçların farkı: 0 − (−4) = 4.
  4. Fark 2'ye bölünür: tolerans 2 olur.
  5. Uçlar dâhil olduğu için ≤ kullanılır: |x + 2| ≤ 2.
  6. Kontrol, sol uç: −2 − 2 = −4.
  7. Kontrol, sağ uç: −2 + 2 = 0; verilen aralıkla aynı.

--- mat-u2-problem-tolerans-ters #1 {"P":19700,"Q":20300,"inc":false}
BAĞLAM: Tersanede kesilen sac levhalarda kabul edilen genişlikler x cm'dir. Uçlar hariçtir: (197, 203). (Sayılar kurgusaldır.)
KÖK: Buna göre kabul koşulunu gösteren mutlak değerli eşitsizlik aşağıdakilerden hangisidir?
  ✔ |x − 200| < 3
  ✘ |x − 200| < 6  [mutlak_tam_uzunluk] 6 aralığın tam uzunluğudur; tolerans, orta noktadan uca olan uzaklıktır, yani bunun yarısıdır.
  ✘ |x − 200| ≤ 3  [aralik_uc] Normal parantez uçları hariç tutar; uçlardaki değerler kabul edilmediği için < gerekir.
  ✘ |x − 3| < 200  [kavram_karisikligi] Orta nokta ile tolerans yer değiştirmiş; mutlak değerin içine orta nokta, sağa tolerans yazılır.
  ✘ |x − 200| > 3  [esitsizlik_yonu] > işareti orta noktadan uzak değerleri anlatır; aralıktaki değerler orta noktaya yakındır.
  ✘ |x + 200| < 3  [isaret_hatasi] |x + 200| ifadesi x'in −200'e uzaklığıdır; orta nokta 200 olduğu için |x − 200| yazılır.
  ? İki sayı gerekir: aralığın orta noktası ve tolerans, yani orta noktadan uca uzaklık.
  ? Orta nokta için uçları topla ve 2'ye böl. Tolerans için uçların farkını al ve 2'ye böl. Uçlar dâhilse ≤, hariçse < kullan.
  ? İlk adım: uçları topla: 197 + 203 = 400. Şimdi bu toplamı 2'ye böl.
  1. Uçları topla: 197 + 203 = 400.
  2. Toplam 2'ye bölünür: orta nokta 200 olur.
  3. Uçların farkı: 203 − 197 = 6.
  4. Fark 2'ye bölünür: tolerans 3 olur.
  5. Uçlar hariç olduğu için < kullanılır: |x − 200| < 3.
  6. Kontrol, sol uç: 200 − 3 = 197.
  7. Kontrol, sağ uç: 200 + 3 = 203; verilen aralıkla aynı.
