# Üreteç denetimi · Matematik 9.2.3 · Tur 2 · Pedagoji

Denetçi: pedagoji-denetcisi. Düzeltme yapılmadı. Bulgu kodları tur 1'den devam eder (U3P-15…).
Kapsam: `panel/motor/uretecler/matematik.js` satır 1894–2501, 12 kayıt (önek `mat-u2-problem-`).
Kanıt: scratchpad `uretec_tarama_u2k3_tur2.md` (300 tohum, tüm benzersiz yanlış şık şablonları satır satır), `denetim/uretec_ornekleri_u2k3.md` (örneklerin tamamı okundu), kaynak kodun 9.2.3 bölümü baştan sona, kart `matematik-u2-k3.json` (Grep ile terim taraması).
Yasak terim taraması (kaynak kodda 1894–2501 aralığı): "tepe noktası", "simetri ekseni", "yarı uzunluk", "merkez", "kesişim": yok (satır 499–640 eşleşmeleri eski 9.2.x bölümlerinde, kapsam dışı). "kesim" yalnız "kesim noktası" anlamında (sac işi: "sac kesen", "kesilen", "işlerde"). Şapkasız "dahil": yok (`dahilMi`/`dahil` yalnız değişken adı). Tarama dosyasında 12 kaydın hepsinde "yasak terim geçen tohum: yok".

## KARAR: DÜZELTİLMELİ (küçük)

Tur 1 bulgularının 12'si kapandı, 1'i kısmen kapandı (U3P-01), U3P-13 bulgu sayılmıyor. Anlamayı engelleyen yeni bir şey yok. Üç ORTA bulgu var ve üçü de aynı yerden geliyor, uzunluk: (1) m ÷ a açıklaması 21 kelime, (2) tamsayi Kontrol blokları (17 adım), (3) kesirli tamsayi açıklaması 21–23 kelime ve 3 fikir. Doğruluk hatası yok. İpucu merdivenleri korunuyor.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Yasak terim | 0/300 tohum, kod taraması temiz | 0 | GEÇER |
| Şapkasız "dahil" | 0 | 0 | GEÇER |
| Azarlama / "dikkatsizlik" | yok | yok | GEÇER |
| Açıklama kişisiz, tek neden | tüm şablonlar kişisiz; 4 şablon tek cümlede 2 fikir (U3P-15, 17, 21) | tek neden | DÜŞÜK sapma |
| Açıklama en uzun cümle | m ÷ a: 21 kelime; kesir aralik_uc: 21–23 (sembollerle) | ≤ 20 | DÜZELTİLMELİ (U3P-15, 17) |
| Kök, bağlam cümleleri | en uzun bağlam cümlesi ≈ 15 kelime (kira: "Kocaeli'de iki firma araç kiralıyor." / "A firması 1100 TL sabit ücret ve kilometre başına 4 TL alıyor." 12); ondalık tolerans-ters artık iki kısa cümle | ≤ 20 | GEÇER |
| İpucu 1: cevap vermiyor | 12/12 | 12/12 | GEÇER |
| İpucu 2: yöntem, sonuç yok | 12/12 (tolerans'ta uç kararını da veriyor, U3P-19) | 12/12 | GEÇER, DÜŞÜK |
| İpucu 3: ilk adım somut, nihai sonuç yok | 12/12 | 12/12 | GEÇER |
| Terim tutarlılığı (kesim noktası, orta nokta, tolerans, sapma, gelir/gider/kâr) | karttaki dille uyumlu; "hata payı" kalmadı; "tahmini" kalmadı | uyumlu | GEÇER |
| Adım başına tek işlem | çözüm adımları tek işlem; Kontrol satırları tek işlem (çarpma/toplama ayrı) | tek işlem | GEÇER |
| Çözüm uzunluğu | tamsayi-kolay 14, tamsayi 17, tamsayi-kesir 17, eşitsizlik 10, öbürleri 7–10 | ekranda tek fikir | DÜZELTİLMELİ (U3P-16) |
| Yerel bağlam | 9 bağlamın 8'i Gölcük/Kocaeli/tersane/okul | ≥ %50 | GEÇER |
| Zorluk dağılımı (kayıt sayısı) | 4 kolay / 7 orta / 1 sınav | 50/35/15 ± 10 | Bulgu sayılmaz (U3P-13) |

Örneklem: şablon analizi tarama dosyasının tüm benzersiz şablonlarına dayanıyor, ama dosya şablon başına yalnız ilk örneği veriyor. Kelime sayımı elle, ilgili şablonlarda yapıldı; 300 tohumun tüm sorularında otomatik sayım yok.

---

## 1. Tur 1 bulgularının durumu

| Kod | Önem (tur 1) | Durum | Not |
|---|---|---|---|
| U3P-01 | ORTA | KISMEN KAPANDI | Egim şıkkı 119 → 34/300. m ÷ a çeldiricisi geldi, "sayı" eklendi, sac'ta "Hazırlık ücreti ile metre ücreti yer değiştirmiş" yazıyor. Yeni sorunlar U3P-15 ve U3P-22. Özel karar (a): kabul. |
| U3P-02 | ORTA | KAPANDI | "kaç metre sac kesildiğinde", "işlerde", "150 metreden uzun işlerde". "kesim" yalnız kesim noktası. Kalan: ipucu 1'de "sac kesen" ile "kesim noktası" aynı ekranda; DÜŞÜK, kabul (iki ayrı söz öbeği, iş anlamında "kesim" yok). |
| U3P-03 | ORTA | KAPANDI | Kontrol'de gelir ve gider modelden ayrı hesaplanıyor (`20 · 101`, `800 + 12 · 101`). Sadeleşmiş k(x)'e dönülmüyor. Bedeli: uzunluk (U3P-16). |
| U3P-04 | ORTA | KAPANDI | "Kesrin yalnız tam kısmı alınmış: 800 ÷ 9 = 88, kalan 8; …" Teşhis doğru, "yuvarlanmış" yok. Uzunluk sorunu: U3P-17. |
| U3P-05 | ORTA | KAPANDI | "Yanlış yöne gidilmiş: 37, sınır olan 38 sayısının altında kalır, k(37) = −10; zarar var, kâr yok." Ucuz: "Bu tarafta B daha ucuzdur: x = 75 için A(75) = 230 TL, B(75) = 205 TL." "Öbür yan" gitti. |
| U3P-06 | ORTA | KAPANDI | "x > 1250/18", sonra "1250 ÷ 18 = 69, kalan 8; sınır 69 ile 70 arasındadır." Gizli sadeleştirme yok. |
| U3P-07 | ORTA | KAPANDI | "Kabul edilen levha genişlikleri… Uçlar dâhildir: [119,6, 120,4], yani 119,6 ≤ x ≤ 120,4." İki kısa cümle, en uzunu ≈ 10 kelime. |
| U3P-08 | ORTA | KAPANDI | Cıvata/boru: "Boyun bu değerden sapması en fazla 0,2 mm olabilir." İpucu 1 "Sapma |x − 30| ile yazılır." Kavanoz: "Gerçek kütleden en fazla 20 gram sapan tahmin kazanır." tolerans-kolay ipucu 1'de "1 orta nokta, 2 toleranstır (orta noktadan uca uzaklık)" tanımı var. C < 0: "iki uçtan 1 çıkarılır." Kalan: U3P-20. |
| U3P-09 | DÜŞÜK | KAPANDI | "Tolerans orta noktadan uca uzaklıktır, yani 2; burada 4 kullanılmış." "uçlarda uzaklık tam 2 olur, 2 ≤ 2 doğru; köşeli parantez gerekir." "Parantez açılırken eksi işareti 12x'e de geçmeli: …" |
| U3P-10 | DÜŞÜK | KISMEN | "Süre de eksi olamaz" çıkarıldı. "Karşıya geçen / iki taraftan" tutarsızlığı yeni azalan açıklamasında sürüyor (U3P-18). |
| U3P-11 | DÜŞÜK | KAPANDI | Adım 1: "x ek dakika sayısı, f(x) fatura (TL) olsun." Kontrol: çarpma ve toplama ayrı satır. |
| U3P-12 | DÜŞÜK | KAPANDI (kabul) | esitsizlik k = 0 ipucu 3 talimat veriyor (bilinçli). Ucuz ipucu 1: "Daha ucuz, daha az ödemek demektir. Aynı x için iki ücreti karşılaştır." Ekonomik öneki: "Daha ekonomik, daha ucuz demektir." İpucu 1 ile 3 artık aynı bilgiyi tekrar etmiyor. |
| U3P-13 | DÜŞÜK | BULGU SAYILMAZ | Atamalar tek tek makul. Oran panel karışımına bağlı; üreteç kaydı sayısı ölçüt değil. Panel karışımı ölçülmeden karar verilemez. Zorluk dağılımı denetimi banka/panel turunda yapılsın. |
| U3P-14 | DÜŞÜK | KAPANDI | Alo = true'da kavram_karisikligi `x ÷ 4`: örnek `ucuz #2`'de kesisim_taraf x = 75, kavram_karisikligi x = 37. İki şık aynı sayıları yazmıyor. |

---

## 2. Özel kararlar

### (a) egim_kesisim_karistirma: KABUL, "≥ 5" şartı GEREKMEZ

- Ölçülen: 300 tohumda 34 soruda (≈ %11). Kodda `egimIste` olasılığı 0,18; geri kalan sorularda şık yalnız kendiliğinden tam sayı çıkınca geliyor.
- "≥ 5" şartı **uygulanamaz**. Elle hesap: değer = 1 + a(x − 1) ÷ b. Hat (a ≤ 5, b ≥ 100, x ≤ 60) en çok 3; kira (a ≤ 8, b ≥ 300, x ≤ 150) en çok 4; sac'ta en çok 4 (a = 15, b = 200 için x = 81 gerekir, ama x ≤ 80). Şart kodda `continue` döngüsünü sonsuz yapar ya da şıkkı kaldırır. Şart ekleme.
- Neden kabul: Şık sorunun en küçük sayısı olduğu için görsel kalıba dönüşebilir ("küçük sayı çeldirici"). Ama (1) soruların %89'unda hiç yok, (2) çıktığında açıklaması hatayı doğru ve tek cümleyle adlandırıyor ("Sabit ücret ile dakika ücreti yer değiştirmiş: x ile çarpılan sayı, her ek dakikada eklenen 3 TL'dir." 17 kelime), (3) yanında m ÷ a (51, 201, 50, 151 gibi doğruya yakın büyüklükte) ve eksik_adim şıkları var. Küçük sayıyı eleyen öğrenci yine de açıklamayı okuyunca hatayı öğreniyor.
- Küçük yan etki (DÜŞÜK, U3P-22): zorlamalı sorularda x − 1, b ÷ a'nın katı olmak zorunda. Doğru cevaplar 26, 51, 101, 151 gibi "1'le biter / 6'yla biter" desenine kayar. %11'lik payda önemsiz, ama `egimIste` oranı bundan fazla artırılmasın.

### (b) Çözüm uzunluğu: tamsayi 17, eşitsizlik 10

Soru, Mehmet Eren'in "uzun metinde kopuyor" profiline göre. Çözüm şu anda ekran başına bir akış, 17 satır alt alta.

Değerlendirme:
- Satırlar kısa (hepsi ≤ 15 kelime), kalıp tekrarlı (gelir / gider / kâr ×2). Okuma yükü, satır sayısının gösterdiğinden hafif. Bunun için kopma riski ORTA, YÜKSEK değil.
- Gelir/gider/kâr ayrı satırı **öğretici ve kalmalı**: "kâr = gelir − gider" ilişkisini modelden ayrı yoldan kuruyor ve sadeleşmiş k(x)'i bağımsız sınıyor (U3P-03'ün istediği). Birleştirme önerilmiyor.
- Sorunlu olan, çözümün **iki ayrı fikri** (çözme, sonra iki ayrı doğrulama) tek akışta vermesi. Çözüm 11 satırda bitiyor ("En az 101 simit satılmalıdır."), kalan 6 satır Kontrol. "Ekranda tek fikir" kuralına göre Kontrol'ün ayrı bir blok olması gerek.

Kısaltma önerisi (satırları birleştirmeden):
1. **tamsayi-kolay (zorluk 1, 14 adım):** Gider sabit olduğu için "Kontrol, 38 simit: gider 380 TL." satırı adım 1'in tekrarı. Bu satırı kaldır, kâr satırında kaynakları etiketle: "kâr = gelir − gider = 380 − 380 = 0; ne kâr ne zarar var." Her blok 3 → 2 satır, toplam 14 → 10 (tur 1'deki 10 adıma geri döner). Kolay kayıt için yeterli.
2. **tamsayi ve tamsayi-kesir (17 adım):** Satırları aynen koru. Panelde Kontrol bloğunu çözümden ayrı, tek tıkla açılan ikinci bölüm olarak göster ("Kontrol et" başlığı). Üreteç tarafında yalnız yapı gerekir: ilk Kontrol satırının başına "Kontrol:" başlığı koymak yeterli; satır sayısı değişmez. Başlıkla çözüm 11 satıra düşmüş görünür.
3. **tamsayi (kesir değil):** Sınır bloğu (k = 0) üç satırın yerine "gelir = gider" iki satırı yeter: "gelir 20 · 100 = 2000 TL" / "gider 800 + 12 · 100 = 2000 TL; kâr 0." Kâr satırı gereksiz (0 olduğu gider = gelir satırında görülür). 17 → 16.
4. **esitsizlik-kolay (zorluk 1, a > 0):** "içeriden" ve "dışarıdan" iki blok çok. Uç + içeriden yeter (uç içermeyi, içeriden yönü sınıyor); dışarıdan yalnız `esitsizlik` (a < 0) kaydında kalsın. kolay: 10 → 8, `esitsizlik`: 10 kalır.
5. Yapılmaması gereken: Kontrol'ü tek satıra sıkıştırmak ("Kontrol: 20 · 101 − (800 + 12 · 101) = 8 > 0"). Adım başına tek işlem kuralı bozulur, kopma noktası olur.

Gelir/gider kontrolü öğretici mi: Evet. 101 simit için gelir 2020, gider 2012; öğrenci iki rakamı kendi hesabında bulup kâr = 8'i görüyor. Model hatası (gider = 800 + 12x yerine 800 · 12x gibi) burada yakalanır. Tek zayıflık: `u = 0` kayıtlarında gider satırı sabit olduğu için boş (öneri 1).

### (c) Yeni açıklamalar: tek cümle neden, kişisiz, azarlamasız, kartla aynı dilde mi

| Şablon | Kişisiz | Azarlama | Tek neden | Kartla dil | Kelime | Karar |
|---|---|---|---|---|---|---|
| m ÷ a "Sabit ücret hesaba katılmamış: 204 TL'nin 100 TL'si sabit ücret içindir; x ile çarpılan sayı olan 4'e bölmeden önce 100 çıkarılır." | evet | yok | evet, ama "içindir" + "sayı olan" kalıbı ağır | "sabit ücret" kartta var | **21** | U3P-15 |
| egim "Sabit ücret ile dakika ücreti yer değiştirmiş: x ile çarpılan sayı, her ek dakikada eklenen 3 TL'dir." | evet | yok | evet | evet | 17 | Geçer |
| azalan "Karşıya geçerken işaret değişmemiş: 320 iki taraftan çıkarılır, 20x = 400 − 320 olur; burada 400 + 320 alınmış." | evet | yok | evet | çözümle yol farkı | ≈ 19 sembolsüz 14 | U3P-18 |
| azalan "−20x = −80 satırında eksi sayı eksi sayıya bölünür; sonuç artı olur." | evet | yok | evet | çözümde bu satır yok | 14 | U3P-18 |
| esitsizlik "5x < 35 satırında bölmeden kalınmış; iki taraf 5'e bölünür." | evet | yok | evet | "kalınmış" günlük dilden | 11 | Geçer, DÜŞÜK (U3P-21) |
| esitsizlik a < 0 "−5x > 10 satırında bölmeden kalınmış; iki taraf −5'e bölünür ve eksi sayıya bölünce yön ters döner." | evet | yok | iki fikir (bölme + yön) | evet | 17 | U3P-21 |
| tamsayi "Yanlış yöne gidilmiş: 37, sınır olan 38 sayısının altında kalır, k(37) = −10; zarar var, kâr yok." | evet | yok | evet | evet | ≈ 17 | Geçer |
| tamsayi-kesir "Kesrin yalnız tam kısmı alınmış: 800 ÷ 9 = 88, kalan 8; 88 sınırın altında kalır, k(88) = −8; zarar var, kâr yok." | evet | yok | **3 fikir** (teşhis, bölme, k değeri) | evet | 21–23 | U3P-17 |
| tamsayi "Her simidin 12 TL maliyeti de gidere girer; gider 800 + 12x olur." | evet | yok | evet | "maliyet/gider" kartta var | 13 | Geçer |
| ucuz "Bu tarafta B daha ucuzdur: x = 75 için A(75) = 230 TL, B(75) = 205 TL." | evet | yok | evet | evet | ≈ 17 | Geçer |
| tolerans-ters "4 aralığın tam uzunluğudur; tolerans, orta noktadan uca olan uzaklıktır, yani bunun yarısıdır." | evet | yok | evet | evet | 13 | Geçer |

Genel: azarlama, "dikkatsizlik", "basit hata", "sen" hitabı yok (taranan benzersiz şablonların tümü). Her şablon yanlışı adlandırıyor ve doğrusunu söylüyor. Sızıntı yok: panel yanlış cevaptan sonra doğru cevabı gösterdiği için sonucun açıklamada geçmesi sorun değil; açıklamalar zaten yalnız bir ara değeri veriyor.

### (d) 3 basamaklı ipucu merdiveni: KORUNUYOR

- 12/12 kayıtta ipucu 1 yön (cevap ve ara sonuç yok), ipucu 2 yöntem (sayı yok, yöntemin tamamı), ipucu 3 ilk adımı yapıyor ve bir sonraki adımı talimat olarak bırakıyor.
- Örnekler: denklem "İlk adım: f(x) = 4x + 100 olur; 4x + 100 = 204 yazılır. Şimdi iki taraftan 100 çıkar." (4x = 104 verilmiyor). Ucuz "İlk adım: A(x) < B(x) yazılır: 2x + 80 < x + 130. Şimdi iki taraftan x çıkar." (sınır verilmiyor). Eşitsizlik "İlk adım: iki tarafa 10 eklenir: −x > 2. Şimdi iki tarafı −1 ile çarp; yöne dikkat." (x < −2 verilmiyor; k = 0'da talimat).
- Tur 1'den farkı yok. Tek kayda değer nokta: tolerans ipucu 2 aralık ucunu kararını da veriyor (U3P-19, DÜŞÜK).

---

## 3. Yeni bulgular

### U3P-15 · ORTA · denklem-kolay · m ÷ a açıklaması 21 kelime
Şablon (hat #0 / kira #1 / sac #4): "Sabit ücret hesaba katılmamış: 204 TL'nin 100 TL'si sabit ücret içindir; x ile çarpılan sayı olan 4'e bölmeden önce 100 çıkarılır."
- Tek cümle, 21 kelime (> 20), iki ayrı yarım ("hesaba katılmamış" + "yöntem"). "içindir" belirsiz, "sayı olan 4'e" kalıbı okurken takılıyor. "Sabit ücret" sözcüğü bir cümlede iki kez. Kopma noktası "x ile çarpılan sayı olan 4'e".
- Öneri: "Sabit ücret hesaba katılmamış: 204 TL'nin 100 TL'si sabit ücrettir; önce 100 çıkarılır, sonra 4'e bölünür." (≈ 16 kelime). Sac ve kira için "hazırlık ücreti", "sabit ücret" yerleşimi aynı.
- Küçük not: hata türü etiketi `kavram_karisikligi`. Öğrenci kavramı karıştırmıyor, adımı atlıyor; `eksik_adim` daha doğru olur (rapor/istatistik için; öğrenciye görünmez). DÜŞÜK.

### U3P-16 · ORTA · tamsayi-kolay / tamsayi / tamsayi-kesir · 14–17 adım
Bkz. özel karar (b). Öneriler: u = 0'da gider satırını kaldır (14 → 10), Kontrol bloğuna "Kontrol:" başlığı ver ya da panelde ikinci bölüm yap, k = 0 sınır bloğunu 2 satıra indir, esitsizlik-kolay'dan "dışarıdan" bloğunu çıkar (10 → 8). Gelir/gider/kâr satırlarını birleştirme.

### U3P-17 · ORTA · tamsayi-kesir · aralik_uc açıklaması 3 fikir, 21–23 kelime
Şablon: "Kesrin yalnız tam kısmı alınmış: 800 ÷ 9 = 88, kalan 8; 88 sınırın altında kalır, k(88) = −8; zarar var, kâr yok." Zarar tarafı: "Sınırın üstündeki tam sayı alınmış: 800 ÷ 6 = 133, kalan 2; 134 sınırın üstünde kalır, k(134) = 4; kâr var, zarar yok."
- Teşhis ile k değeri aynı cümlede, noktalı virgüllerle bağlı: üç fikir, tek soluk. Zarar tarafı daha da uzun (≈ 26 sembollerle).
- Öneri (iki cümle): "Kesrin yalnız tam kısmı alınmış: 800 ÷ 9 = 88, kalan 8. 88 için k(88) = −8; zarar var, kâr yok." Zarar için: "Sınırın üstündeki tam sayı alınmış: 800 ÷ 6 = 133, kalan 2. 134 için k(134) = 4; kâr var, zarar yok." "sınırın altında kalır / üstünde kalır" kısmı çıkar (kalan zaten söylüyor).

### U3P-18 · DÜŞÜK · denklem (azalan) · açıklama çözüm satırlarıyla örtüşmüyor
- "Karşıya geçerken işaret değişmemiş: 320 iki taraftan çıkarılır, 20x = 400 − 320 olur; burada 400 + 320 alınmış." Çözümde adım 5 "İki taraftan 320 çıkarılır: 80 = 20x." (x sağda). Açıklamada x solda, "karşıya geçerken" ve "iki taraftan çıkarılır" aynı cümlede iki yöntemi karıştırıyor (tur 1'de U3P-10'un konusu).
- "−20x = −80 satırında eksi sayı eksi sayıya bölünür; sonuç artı olur." Çözüm ve ipucu 2 ("eksi x'li terimi iki tarafa ekleyerek karşıya geçir") −20x = −80 satırını hiç üretmiyor. Öğrenci bu satırı çözümde bulamaz; açıklama farklı bir yolu varsayıyor.
- Öneri 1: "İki taraftan 320 çıkarılır, eklenmez: 400 − 320 = 20x olmalı." (çözüm adım 5 ile aynı sırada, artan tipteki "Karşıya geçen 100 çıkarılır, eklenmez" ile aynı kalıpta, 11 kelime).
- Öneri 2: "Eksi sayı eksi sayıya bölününce sonuç artı olur; x = 80 ÷ 20 = 4 değil, −4 değildir." yerine daha sade: "−20x = −80 ise iki taraf −20'ye bölünür; eksi bölü eksi artıdır." Ama çözümde bu satır yoksa "x'i artı yazmak için iki tarafa 20x eklemek en kolay yol" cümlesi eklenebilir. Seçenek 1 yeterli.

### U3P-19 · DÜŞÜK · tolerans, tolerans-kolay · ipucu 2 aralik_uc kararını veriyor
"1 sayısından 2 birim sola ve 2 birim sağa git; ≤ olduğu için uçlar dâhil." İpucu 3 "İlk adım, sol uç: 1 − 2 = −1." Birlikte: kapsama kararı (köşeli parantez) ve sol uç. Sağ uç ve bağlı karar eksik olsa da seçeneklerden (−1, 3) / [−1, 3] ayrımı bedava. Eşitsizlik kaydında ipucu 2 aynı konuyu genel kural olarak veriyor ("≤ ve ≥ uca köşeli, < ve > normal parantez ister"); tolerans'ta uygulamış hali.
Öneri: ipucu 2: "1 sayısından 2 birim sola ve 2 birim sağa git. Uçların dâhil olup olmadığına işaretten karar ver." Karar çözüm adımı 4'te kalsın. Cevabın kendisi değil; yine de DÜŞÜK.

### U3P-20 · DÜŞÜK · tolerans (inc = false) · "tolerans" açıklamada, tanımı çözümde yok
mutlak_tam_uzunluk açıklaması ("Tolerans orta noktadan uca uzaklıktır, yani 0,2; burada 0,4 kullanılmış.") "<" sorularında da geliyor, ama çözüm adım 1 "tolerans (izin verilen en büyük sapma) …" yalnız inc = true'da yazılıyor. "<" sorusunda öğrenci "tolerans"ı ilk kez açıklamada görüyor, tanımsız.
Öneri: "<" için adım 1: "Sapma |x − 100| olur; şart |x − 100| < 0,5 ve tolerans (orta noktadan uca uzaklık) 0,5." Ya da tolerans tanımını ipucu 1'e al (kolay'da zaten var).

### U3P-21 · DÜŞÜK · esitsizlik · "bölmeden kalınmış"
- "5x < 35 satırında bölmeden kalınmış; iki taraf 5'e bölünür." Doğru ve kısa (11 kelime), ama "kalınmış" Mehmet Eren'in sözlüğünde olmayabilir. Öneri: "5x < 35 satırında bölme yapılmamış; iki taraf 5'e bölünür."
- a < 0: "…iki taraf −5'e bölünür ve eksi sayıya bölünce yön ters döner." Bölme ve yön aynı cümlede (iki fikir, 17 kelime). Öneri: "−5x > 10 satırında bölme yapılmamış; iki taraf −5'e bölünür, yön de ters döner." (kalıp aynı, 14 kelime). Bu şıkta yön bilgisi çeldiricinin kendi hatası değil (x > 10 yön korunmuş görünüyor), bu yüzden yön eklemek ikinci bir hatayı da öğretiyor; kabul.

### U3P-22 · DÜŞÜK · denklem-kolay · egim şıkkı: doğru cevap deseni, ek yan etki
Bkz. özel karar (a). `egimIste` zorlamasında doğru cevap x = 1 + k·b ÷ a biçiminde olur (hat için 26, 51; kira 101, 151; sac 41, 51, 61). %11'lik payda tolu. Oran artırılmasın; artırılırsa doğru cevap deseni ("1 ile biten") ipucu olur.

---

## 4. Yeni açıklamaların ve diğer şeylerin sağlaması

- Kişisiz: "yaptın", "sen" yok. Taranan benzersiz şablonlarda 0.
- Azarlama: "dikkatsizlik", "basit bir hata", "yanlış yapmışsın" yok. 0.
- Kart dili: "sabit ücret", "kesim noktası", "orta nokta", "tolerans", "gelir/gider/maliyet", "dâhil", "sapma", "karşıya geçen" karttaki kullanımla uyumlu (Grep: kartta 23 eşleşme).
- Bağlam: "sac kesen" yalnız iş anlamında, "kesim noktası" yalnız doğru anlamda. Sac kaydında `sabit: "hazırlık ücreti"`, `birimUcret: "metre ücreti"` açıklamalarla uyumlu.
- "ekonomik" varyantı: soru "daha ekonomiktir" derken ipucu 1 köprü kuruyor.

## 5. En önemli 3 düzeltme

1. U3P-17 + U3P-15: tamsayi-kesir aralik_uc ve denklem-kolay m ÷ a açıklamalarını ≤ 20 kelimelik tek fikirli cümlelere böl.
2. U3P-16: tamsayi ailesinde Kontrol bloğuna başlık ver (ya da panelde ayır), `u = 0` kayıtlarında boş "gider" satırını kaldır, esitsizlik-kolay'dan "dışarıdan" bloğunu çıkar. Gelir/gider satırları kalsın.
3. U3P-18: azalan denklem açıklamalarını çözüm satırlarıyla aynı sıra ve kalıba çek ("İki taraftan 320 çıkarılır, eklenmez: 400 − 320 = 20x olmalı.").

## 6. Ölçülemeyen ya da örneklenen

- Tarama dosyası şablon başına ilk örneği veriyor; egim şıkkının tüm tohumlardaki değer dağılımı ölçülmedi. "2–4" iddiası elle hesapla (üst sınır) ve örneklerdeki tüm egim şıklarının 2 olmasına dayanıyor; kullanıcı verisi (34/300) doğrulanmadı.
- Kelime sayımı ilgili şablonlarda elle yapıldı; 300 tohumdaki tüm soru, kök, bağlam cümlelerinde otomatik sayım yok.
- Zorluk dağılımı panel karışımına bağlı; ölçülmedi (U3P-13).
- Panel gösterimi (Kontrol'ün ayrı bölüm olarak açılabilmesi, başlık) arayüzden doğrulanmadı; U3P-16 önerisi panelin bunu desteklediği varsayımına bağlı. Desteklemiyorsa yalnız satır azaltma önerileri (1, 3, 4) uygulanabilir.
- Tahmin (kavanoz) ve pim bağlamları örnek dosyasında kısmen var; yalnız kod metninden okundu.
