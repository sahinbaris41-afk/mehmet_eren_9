# Üreteç denetimi · Matematik 9.2.3 Doğrusal denklem ve eşitsizlik problemleri · Tur 1 · Pedagoji

Denetçi: pedagoji-denetcisi. Düzeltme yapılmadı. Bulgu kodu: U3P-xx.
Kapsam: `panel/motor/uretecler/matematik.js` satır 1894–2473, 12 kayıt (önek `mat-u2-problem-`).
Kanıt: scratchpad `uretec_tarama_u2k3.md` (300 tohum, tüm benzersiz yanlış şık şablonları satır satır okundu), `denetim/uretec_ornekleri_u2k3.md` (35 örnek, tamamı okundu), kaynak kod (gen fonksiyonları, ipucu ve çözüm üretimi) okundu. Kart terim taraması: `matematik-u2-k3.json` içinde Grep.
Yasak terim taraması: 300 tohumda yok (tepe noktası, simetri ekseni, yarı uzunluk, merkez, grafik "köşe", kesişim). Şapkasız "dahil": 9.2.3 bölümünde yok (yalnız `dahilMi`/`dahil` değişken adları). Eşleşen "Kesişim/merkez" satırları 9.2.3 dışında (9.2.x eski bölümler, satır 499–640); bu turun kapsamı değil.

## KARAR: DÜZELTİLMELİ

Dil temiz, azarlama yok, kişisiz, ipucu merdivenlerinin hiçbirinde cevap sızıntısı yok. Düzeltilmesi gerekenler: (1) sac bağlamında "kesim" sözcüğünün iki anlamı, (2) tamsayı kayıtlarında Kontrol adımının modeli bağımsız sınamaması ve kesirli sınırda gizli sadeleştirme, (3) tolerans bağlam metinlerinin uzunluğu ve terim tutarsızlığı, (4) egim_kesisim_karistirma şıkkının hep ~2 çıkması. Hiçbiri doğruluk hatası değil, anlama kolaylığı ve çeldirici kalitesi sorunu.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Yasak terim | 0/300 tohum | 0 | GEÇER |
| Azarlama dili | yok | yok | GEÇER |
| Yanlış açıklama: kişisiz, tek neden | 117 şablon okundu; hepsi 1 cümle (noktalı virgülle 2 yarım) | tek cümle neden | GEÇER (U3P-09 DÜŞÜK) |
| Yanlış açıklama: doğru teşhis | 3 belirsiz/yanıltıcı (kesir "yuvarlanmış", ucuz "öbür yan", egim cümlesi) | 0 | DÜZELTİLMELİ (U3P-04, 05, 06) |
| İpucu 1: cevap vermiyor | 12/12 | 12/12 | GEÇER |
| İpucu 2: sonuç vermiyor | 12/12 (tolerans-kolay ipucu 2 yöntemin tamamı, sayı yok) | 12/12 | GEÇER |
| İpucu 3: ilk adım, nihai sonuç yok | 12/12 sonuç yok; esitsizlik k = 0 iken ilk adım yapılmıyor, talimat veriliyor | 12/12 | GEÇER, DÜŞÜK (U3P-12) |
| Kök cümle uzunluğu | ≤ 17 kelime (35 örnek) | ≤ 20 | GEÇER |
| Bağlam cümle uzunluğu | ondalık tolerans-ters bağlamı ≈ 23 kelime | ≤ 20 | DÜZELTİLMELİ (U3P-07) |
| Adım başına tek işlem | çözüm adımları tek işlem; Kontrol satırları 2–3 işlem zincirli | tek işlem | DÜŞÜK (U3P-11) |
| Kontrol adımı başka yol | tolerans/esitsizlik/ucuz: evet; denklem: yerine koyma (kabul); tamsayi: sadeleşmiş k(x) yeniden kullanılıyor | başka yol | DÜZELTİLMELİ (U3P-03) |
| Terim tutarlılığı | kesim noktası, orta nokta, tolerans, gelir/gider/kâr/zarar kartla uyumlu; "kesim" çift anlam, "hata payı/sapma/uzaklık/tolerans" karışık | uyumlu | DÜZELTİLMELİ (U3P-02, 08) |
| Yerel bağlam | 9 bağlamın 8'i Gölcük/Kocaeli/tersane/okul; sembolik kayıtlar 3 (esitsizlik ×2, tolerans-kolay, tolerans-ters yarısı) | ≥ %50 | GEÇER |
| Zorluk (kayıt sayısı) | 4 kolay (%33) / 7 orta (%58) / 1 sınav (%8) | 50/35/15 ± 10 | DÜZELTİLMELİ, DÜŞÜK (U3P-13) |

Örneklem: şablon analizi tarama dosyasındaki tüm benzersiz şablonlara dayanıyor (ilk örnekler). Kelime sayımı elle, 35 örnekte yapıldı; 300 tohumun tamamında otomatik sayım yok.

---

## Özel kararlar

### (a) egim_kesisim_karistirma, (m − a) ÷ b: ŞARTLI ONAY

Hata gerçekçi mi: Evet. "100 TL sabit, dakikası 4 TL" cümlesinde öğrenci 100'ü x'in katsayısı, 4'ü sabit alıp 100x + 4 = 204 kurabilir. Açıklama ("Sabit ücretle birim ücretin yeri değişmiş") bu hatayı doğru adlandırıyor, azarlama yok.

Sorunlar (kod ve örnekten):
1. Şık değeri hemen hep 2. (m − a) ÷ b = 1 + a(x − 1) ÷ b; b ≥ 100, a ≤ 15, x ≤ 150 olduğundan çoğunlukla 2–4. Örneklerde denklem-kolay 3/3 örnekte şık `2`. Öğrenci "2 hep çeldirici" kalıbını öğrenir; şık elemesi yapılan bilgiyle değil görsel kalıpla olur.
2. Elemesi kolay: 603 TL ödeyen biri için "2 kilometre" bağlamda saçma (2 km = 306 TL). Zayıf anlama düzeyindeki öğrenci için bu iki yönlü: hatayı yapan saçmalığı fark etmeyebilir (kötü), fark ederse hatasını düzeltir (iyi). Kontrol adımı bu sağlamayı öğretiyor, yani kötü bir çeldirici değil, ama zorlayıcı da değil.
3. Zorlama (`egimIste` %50) x değerlerini daraltıyor: a(x − 1) ÷ b tam sayı olmalı. Hat için (b = 100, a = 4) x yalnız 26 ya da 51. Doğru cevap seti tekrar eder (26, 31, 51, 101 …).
4. Açıklama cümlesi eksik: "x ile çarpılan, her ek dakikada eklenen 4 TL'dir." "sayı" yok, virgül okumayı bölüyor. Sac bağlamında bağlam "hazırlık ücreti" derken açıklama "Sabit ücret" diyor (kodda `B.sabit` var, kullanılmıyor).

Karar: Şık kalsın, ama zorlama kalksın ya da %15–20'ye insin (doğal tam bölünme olduğunda zaten gelir). Yerine/yanına daha sık görülen hatayı ekle: sabit ücretin unutulması, m ÷ a ("204 ÷ 4 = 51"). Bu değer doğru cevaba (26) yakın büyüklükte, bağlamda makul, a | b iken çoğu tohumda tam sayı. Açıklama: "Sabit ücret hesaba katılmamış; 204 TL'nin 100 TL'si sabit ücrete gider." (ek: ek dakika ücreti kalanıdır). Egim şıkkı için önerilen açıklama: "Sabit ücretle birim ücretin yeri değişmiş: x ile çarpılan sayı, her ek dakikada eklenen 4 TL'dir." Önem: ORTA (U3P-01).

### (b) İki isaret_hatasi şıkkı (azalan denklem): NET AYRIŞIYOR, ONAY
- `−x` (örnek −4): "Eksi sayı eksi sayıya bölününce sonuç artı olur; süre de eksi olamaz." Hata: bölme işareti.
- `(b + m) ÷ a` (örnek 36): "Karşıya geçen 400 çıkarılır, eklenmez: −20x = 320 − 400 olmalı." Hata: karşıya geçirme.
İki açıklama farklı adım adlandırıyor (bölme / karşıya geçirme), aynı kelimeyi paylaşmıyor, kartın "karşıya geçen" terimini kullanıyor. Öğrenci için ayırt edici.
Notlar (DÜŞÜK, U3P-10):
- "−4" şıkkı açıklamasındaki "süre de eksi olamaz" cümlesi şıkkı bağlamla eleyebileceğini söylüyor; çeldirici zayıflar ama işaret kuralı öğretiliyor. Kalabilir. İstenirse "süre de eksi olamaz" çıkarılıp yalnız kural kalır (kural ayrımı keskinleşir).
- "Karşıya geçen 400 çıkarılır" azalan modelde (400 − 20x = 320) 400 sol tarafta; çözüm "İki taraftan 400 çıkarılır" diyor. İki ifade farklı; kartla uyumlu ama tutarlı olması için açıklamada da "İki taraftan 400 çıkarılır, eklenmez" yazılabilir.

### (c) ucuz · kesisim_taraf: ÖĞRETİCİ, KÜÇÜK DÜZELTME
Somut sayılı karşı örnek ("x = 75 için A(75) = 230 TL, B(75) = 205 TL; burada B daha ucuzdur") doğru yaklaşım; öğrenci kendi seçtiği tarafın yanlışlığını sayıyla görüyor. İki sorun:
1. "Kesim noktasının öbür yanında sıra değişir": "öbür yan" öğrencinin seçtiği taraf mı, doğru taraf mı belirsiz. Öneri: "Seçtiğin tarafta B daha ucuzdur" yerine kişisiz: "Bu tarafta B daha ucuzdur: x = 75 için A(75) = 230 TL, B(75) = 205 TL." ("sıra değişir" çıkar.) ORTA (U3P-05).
2. Alo = true iken `kesisim_taraf` ve `kavram_karisikligi` ("Her kesimde") aynı karşı örneği (solT) kullanıyor; iki yanlış şık yan yana aynı sayıları tekrar ediyor (ucuz #2: ikisi de x = 75). Biri için farklı bir x (ör. solT yerine 2·solT ya da x ÷ 4) seçilsin. DÜŞÜK (U3P-14).

---

## Bulgular

### U3P-01 · ORTA · egim_kesisim_karistirma (denklem-kolay)
Bkz. özel karar (a). Değer hep ~2, %50 zorlama x'i daraltıyor. Öneri: zorlamayı %15–20'ye indir; m ÷ a (sabit ücret unutulmuş) çeldiricisini ekle; "sayı" kelimesini ekle; sac bağlamında "hazırlık ücreti" kullan.

### U3P-02 · ORTA · "kesim" çift anlam (kesim, ucuz; denklem-kolay sac)
Sac bağlamında "kaç metrelik kesimde iki atölyenin ücreti eşit olur?", "150 metreden uzun kesimlerde" cümleleriyle ipucu 1 "iki doğrunun kesim noktasıdır" ve "Kontrol, kesim noktasının solundan" aynı ekranda. Mehmet Eren "kesim" = sac kesme işi mi, doğruların kesim noktası mı? Karışıklık riski yüksek, tersane bağlamı tam burada.
Öneri: sac bağlamında iş sözcüğünü değiştir: "kaç metre sac kesildiğinde", "150 metreden uzun işlerde / kesilen saclarda". "Kesim noktası" yalnız doğru anlamda kalır. (`kesim` = "kesilen metre" değil "iş" adı.) Hat ve kira bağlamlarında sorun yok.

### U3P-03 · ORTA · Kontrol adımı modeli bağımsız sınamıyor (tamsayi, tamsayi-kesir)
`Kontrol, sınır tarafı: k(100) = 8 · 100 − 800 = 0` ve `Kontrol, cevap: k(101) = 8 · 101 − 800 = 8 > 0` 5. adımda sadeleşmiş k(x) = 8x − 800'ü kullanıyor. Gelir/gider kurulumu ya da parantez açma hatası Kontrol'ü geçer. Gerçekten başka yol değil.
Öneri: "Kontrol, cevap: 101 simit için gelir 20 · 101 = 2020 TL, gider 800 + 12 · 101 = 2012 TL; 2020 > 2012, kâr var." Sınır tarafı için aynı biçim (gelir = gider). tamsayi-kolay'da k(x) doğrudan modelden geldiği için kabul edilebilir.

### U3P-04 · ORTA · "Kesir yanlış yöne yuvarlanmış" (tamsayi-kesir, aralik_uc)
Şık 88 (800 ÷ 9 = 88,8…). Öğrenci yuvarlamamış, kesrin tam kısmını (88) almış; "yuvarlama" kartta yok ve en yakın tam sayı kuralı 89 verirdi. Teşhis yanıltıcı.
Öneri: "Kesrin yalnız tam kısmı alınmış; 88 sınırın altında kalır: k(88) = −8; zarar var, kâr yok." Zarar tarafında: "Kesrin tam kısmından bir fazlası alınmış; k(134) = 4: kâr var, zarar yok."

### U3P-05 · ORTA · "Sınırın öbür yanındaki sayı" (tamsayi-*, esitsizlik_yonu)
"Öbür yan" belirsiz (bkz. özel karar c). Öneri: "Yanlış yöne gidilmiş: 37 sınırın altında kalır, k(37) = −10; zarar var, kâr yok." Zarar sorusu için "sınırın üstünde kalır … kâr var, zarar yok."

### U3P-06 · ORTA · Kesirli sınırda gizli sadeleştirme (tamsayi-kesir çözüm adım 8)
"18x > 1250" sonrası "İki taraf 18'e bölünür: x > 625/9." Adımda iki işlem var (bölme + sadeleştirme) ve 18 birden 9 oluyor. Sonra "625 ÷ 9 = 69, kalan 4". Zayıf öğrenci için kopma noktası.
Öneri: "x > 1250/18" yaz; sonra "1250 ÷ 18 = 69, kalan 8; sınır 69 ile 70 arasındadır." (sadeleştirme yok). Zarar tarafında 800/6 → "800 ÷ 6 = 133, kalan 2". `kesirYaz` sadeleştirmesi çözümde kalkar.

### U3P-07 · ORTA · Ondalık tolerans-ters bağlamı > 20 kelime
"Genişliği 119,6 cm ile 120,4 cm arasında (uçlar dâhil) olan levhalar kabul ediliyor; kabul aralığı [119,6, 120,4], yani 119,6 ≤ x ≤ 120,4." ≈ 23 kelime. Aynı sayılar üç kez (düzyazı, aralık, eşitsizlik).
Öneri: "Kabul edilen levha genişlikleri x cm'dir. Uçlar dâhildir: [119,6, 120,4], yani 119,6 ≤ x ≤ 120,4." (iki kısa cümle).
Madde 6 (ondalık yazım): "[119,5, 120,5], yani 119,5 ≤ x ≤ 120,5" OKUNUR, ";" yok. "[99,5, 100,5]" tek başına virgül çakışması yüzünden belirsiz olurdu; "yani …" eki bunu çözüyor. Tüm şıklarda tutarlı. Öneri yok.

### U3P-08 · ORTA · Tolerans: "sapma / hata payı / uzaklık / tolerans" karışık
- Cıvata bağlamı (`inc`): "Hata payı en fazla 0,2 mm'dir." ama ipucu 1 "Sapma |x − 30| ile yazılır. 'En fazla 0,2 mm' sapma …" (kartta "hata payı" ve "sapma" ikisi de var, ama bağlam ve ipucu aynı sözcüğü kullanmalı).
- tolerans-kolay (bağlamsız): ipucu "uzaktadır" (uzaklık), açıklamalar "sapması tam 2", "tolerans", "orta nokta". "Tolerans" ve "orta nokta" ipucu merdiveninde tanımsız (tolerans-ters ipucu 1'de tanımlı: "orta noktadan uca uzaklık").
- kavram_karisikligi (C < 0, %25): "x için iki uca da −1 eklenir." İki eksili okuma zor.
Öneri: bağlamı "Boyunun bu değerden sapması en fazla 0,2 mm olabilir." yap; tolerans-kolay ipucu 1'e "1 orta nokta, 2 tolerans (orta noktadan uca uzaklık)" ekle; açıklamada "uçlardaki uzaklık tam 2"; C < 0 için "iki uçtan 1 çıkarılır".
Kavanoz (tahmin) bağlamı örneklerde yok; kodda: "Tahmini gerçek kütleden en fazla 10 g eksik ya da fazla olan kazanır." "Tahmini" sıfat gibi okunuyor. Öneri: "Gerçek kütleden en fazla 10 g sapan tahmin kazanır." ve "g" yerine "gram".

### U3P-09 · DÜŞÜK · Açıklama dili ince ayarlar
- tolerans · mutlak_tam_uzunluk: "tolerans yerine aralığın tam uzunluğu alınmış" ≈ 18 kelime, ağır. Öneri: "Tolerans orta noktadan uca uzaklıktır, yani 2; burada 4 kullanılmış." 
- tolerans · aralik_uc: "uçtaki değerlerin sapması tam 2 olur ve kabul edilir" → "uçlarda uzaklık tam 2 olur, 2 ≤ 2 doğru; köşeli parantez gerekir."
- tamsayi · isaret_hatasi: "Parantez açılırken eksi 12x'e dağıtılmamış" "eksi 12x" okunuyor. Öneri: "Parantez açılırken eksi işareti 12x'e de geçmeli: 20x − (800 + 12x) = 20x − 800 − 12x olur." (çözüm "eksi iki terime de dağılır" diyor, kartta "dağıl" var.)
- kesim · eksik_adim (mod y): "hazırlık ücreti eklenmemiş; 8 · 60 sonucuna 300 eklenir." Doğru cevap 780'i hesaplatır ama yazmaz; kabul.

### U3P-10 · DÜŞÜK · Bkz. özel karar (b) notları
"Süre de eksi olamaz" ve "karşıya geçen / iki taraftan" tutarlılığı.

### U3P-11 · DÜŞÜK · Kontrol ve ilk adım satırları zincirli
- denklem: `Kontrol: f(26) = 4 · 26 + 100 = 104 + 100 = 204; doğru.` (çarpma + toplama + karşılaştırma).
- esitsizlik: `Kontrol, uç: x = −5 için 3 · (−5) − 3 = −18; −18 ≤ −18 doğru.`
- Adım 1: "Ek dakika sayısı x olsun: f(x) = 4x + 100." hem x'i tanımlıyor hem modeli yazıyor; f(x) neyi veriyor (fatura) söylenmiyor.
Öneri: "x ek dakika, f(x) fatura (TL) olsun." ve Kontrol'ü iki satıra böl (4 · 26 = 104 / 104 + 100 = 204). Kontrol satırlarındaki "içeriden/dışarıdan" kartta var; uygun.

### U3P-12 · DÜŞÜK · İpucu merdiveni kenar durumları
- esitsizlik k = 0 (≈ %6): ipucu 3 "İlk adım: sabit sayıyı karşıya geçir; iki taraftan 11 çıkar." ilk adımı yapmıyor, talimat veriyor. Bilinçli (ara satır uç değeri söylerdi, kodda yorum var). Kabul.
- esitsizlik, a < 0, ipucu 1: "Eksi sayıya bölünce eşitsizliğe ne olduğunu hatırla." çeldiricilerden birini (esitsizlik_yonu) önceden gösteriyor; yön olarak kabul, cevabı vermiyor.
- ucuz ipucu 1 ("A(x) < B(x)") ile ipucu 3 ("A(x) < B(x) yazılır") aynı bilgiyi tekrar ediyor; ipucu 1 daha çok yöntem. Öneri: ipucu 1: "Daha ucuz, daha az ödemek demektir. Aynı x için iki ücreti karşılaştır."
- ucuz "ekonomiktir" varyantı: ipucu "'Daha ucuz' demek …" soru "daha ekonomik" derken köprü yok. Öneri: ipucu 1 başına "Daha ekonomik, daha ucuz demektir."
- kesim ipucu 3 "A(x) = B(x) yazılır" ipucu 2'de "birbirine eşitle" denmişti; ilk adım yine yeni (denklem yazılıyor), kabul.
- denklem ipucu 1 "hangi sayı bir kez ödeniyor, hangisi her birimde ekleniyor?" yön; cevabı vermiyor. İpucu 3 ilk adımı doğru yapıyor ve "Şimdi iki taraftan 100 çıkar" ile bırakıyor: örnek merdiven.

### U3P-13 · DÜŞÜK · Zorluk atamaları
Atamalar tek tek makul: denklem-kolay/esitsizlik-kolay/tolerans-kolay 1; tamsayi-kesir 3; diğerleri 2. Kayıt sayısı oranı 33/58/8, hedef 50/35/15 ± 10'a uymuyor (kolay 40'ın altında, orta 45'in üstünde). Gerçek oran bankanın üreteç karışımına bağlı; karışım ölçülmedi.
- tamsayi-kolay (1): 10 adım, "sınır hariç, ilk tam sayı" kavramı içeriyor; zayıf öğrenciye 2'ye yakın. Kalabilir, ipucu 2 yeterli destek.
- ucuz, Alo = true ("150 < x" çevirisi) 3'e yakın; 2'de kalabilir.
Öneri: kolay havuza bir kayıt ekle (ör. kesim modu x, d = 1 ya da ucuz için tek adımlı sürüm) ya da banka karışımında kolay üreteçlere ağırlık ver.

### U3P-14 · DÜŞÜK · Tekrar eden karşı örnek
ucuz, Alo = true: kesisim_taraf ve kavram_karisikligi aynı x = solT sayılarını yazıyor. Biri başka bir x kullansın.

### Bağlam değerlendirmesi (madde 4)
Gerçekçi, kısa, Gölcük/Kocaeli dokusunda; "(Sayılar kurgusaldır.)" notu var.
- Hat (Mehmet'in tarifesi, ek dakika 2–5 TL, sabit 100–200 TL), kiralama (Kocaeli, km 3–8 TL), sac kesimi (tersane atölyesi), tır yakıtı (400–800 L, 20–40 L/saat), su deposu (240–600 L, 4–12 L/dk): makul. Sac kesimi metre ücreti 6–15 TL düşük ama kurgusal not var.
- Simit büfesi, okul kermesi kurabiye, tersane kantini tost: makul. Tost maliyeti 4 TL ve satış 22 TL (tamsayi-kesir) hafif ucuz; kurabiye paketi 5–6 TL. DÜŞÜK.
- Boru 100–250 cm ± 0,5–2 cm, cıvata 30–60 mm ± 0,1–0,5 mm, pim 20–40 mm ± 0,1–1 mm, sac genişliği 120–250 cm ± 0,4–3 cm, kavanoz 500–1000 g ± 10–50 g: makul.
- Tek cümle kalıbı her tohumda aynı ("Gölcük'teki bir tersanede kesilen boruların boyu … olmalıdır."); sorun değil, öğretmenin tarzıyla uyumlu.

### Çözüm adımları (madde 5)
Çözüm adımları tek işlemli (bölme, çıkarma, parantez açma, birleştirme ayrı satır). Zincirli olan yalnız Kontrol ve adım 1 (U3P-11). Son adım hep ayrı "Kontrol":
- denklem: yerine koyma (başka yol sayılabilir, kabul).
- esitsizlik, tolerans: uç, içeriden ve dışarıdan sayı denemesi: gerçekten başka yol.
- kesim: iki fonksiyonu ayrı hesaplıyor: başka yol. kesim modu y: B ile doğrulama: başka yol.
- ucuz: sol ve sağ taraftan birer sayı: başka yol.
- tolerans-ters: geri dönüş (orta ± tolerans): başka yol.
- tamsayi: bağımsız değil (U3P-03).

---

## En önemli 3 düzeltme
1. U3P-02: sac bağlamında "kesim" sözcüğünü iş adı olarak değiştir ("kesilen metre", "işler"), "kesim noktası" yalnız doğru anlamda kalsın.
2. U3P-03 ve U3P-06: tamsayi Kontrol'ünü gelir/gider ile yap; kesirli sınırda "1250 ÷ 18" yaz, sadeleştirmeyi çıkar. Aynı grupta U3P-04/05 açıklama düzeltmeleri.
3. U3P-01: egim_kesisim_karistirma zorlamasını düşür, m ÷ a çeldiricisini ekle. U3P-07/08: tolerans bağlamını kısalt (≤ 20 kelime) ve sapma/hata payı terimini birleştir.

## Ölçülemeyen ya da örneklenen
- 300 tohumun tüm sorularında otomatik kelime sayımı yapılmadı; sayım 35 örnekte elle ve kodun şablon metinlerinde yapıldı.
- Tarama dosyası şablon başına yalnız ilk örneği veriyor; egim_kesisim_karistirma şıkkının tüm tohumlardaki değer dağılımı (kaç %'si 2–4) ölçülmedi, kod mantığı ve 3 örnek üzerinden çıkarıldı (kullanıcı verisi: ≈ %40).
- Tahmin (kavanoz) ve pim bağlamları tam örnek dosyasında yok; yalnız kod metninden okundu.
- Zorluk dağılımı bankadaki gerçek karışım ölçülmedi; yalnız kayıt sayısı.
- Yeniden deneme / panel gösterimi arayüzden doğrulanmadı.
