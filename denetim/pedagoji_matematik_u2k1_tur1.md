# Pedagoji denetimi: 9. sınıf Matematik, Ünite 2, K1 (9.2.1 doğrusal fonksiyonlar), tur 1

Denetçi: pedagoji-denetcisi (salt okur). Hiçbir içerik dosyası değiştirilmedi.
Kapsam: `dersler/matematik/konular/matematik-u2-k1.json` (10 bölüm), `dersler/matematik/sorular/matematik-u2-k1.json` (20 soru), `denetim/uretec_ornekleri_u2k1.md` (5 üreteç x 6 tohum; yalnız okunabilirlik/pedagoji).
Referans biçim: `denetim/pedagoji_matematik_u1_tur3.md` (TEMİZ).

## Yöntem
- Üç dosya baştan sona okundu. Cümle uzunluğu için Grep ile "20+ jeton, noktasız" taraması yapıldı: 2 sonuç, ikisi de simge yığını (s017 kök, s019 cevap); gerçek kelime sayısı ≤ 12, ihlal değil.
- Ortalama cümle uzunluğu ÖRNEKLEMEYLE (her bölümün `basit` + `ornek` metinleri, tüm soru kökleri) değerlendirildi; tam sayım yapılmadı.
- Zorluk dağılımı bankada tam sayıldı. Üreteç zorlukları döküm dosyasında yok: ölçülemedi.
- Grafik/tablo metin tarifleri tek tek okundu (aşağıda ayrı başlık).

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Cümle > 20 kelime | 0 | 0 | GEÇER |
| Ortalama cümle uzunluğu (örneklem) | ~10-12 | ≤ 12 | GEÇER (örneklem) |
| Paragraf > 3 cümle | 0 (b9 kitap[2] tam 3) | ≤ 3 | GEÇER |
| Bölüm başına tek fikir | b1, b7, b9 yoğun (P1-05, P1-09, P1-20) | tek | KISMEN |
| Kuraldan önce somut örnek | 10/10 bölümde `ornek` var | 10/10 | GEÇER |
| Yerel/günlük bağlam oranı (kart örnekleri) | 10/10 (tersane 3, deniz 3, futbol, Gölcük, ev, okul) | ≥ %50 | GEÇER |
| Soyut kelime (basit katman) | 0 (olgu, kavramsal, bağlamında, nitelik, süreç: yok) | 0 | GEÇER |
| Kalın terim tanımlı | 10 bölüm taranıp 15/16 terim tanımlı; "fonksiyon" kalın da tanımlı da değil | hepsi | EKSİK (P1-05) |
| Kontrol sorusu sayısı | b1 3, b2 2, b3 2, b4 2, b5 2, b6 2, b7 3, b8 2, b9 3, b10 3 | 2-3 | GEÇER |
| Kontrol sorusu yalnız basit katmanı soruyor, zorluk 1 | 1 ihlal (b1 hariç hepsi uygun; b8 Q2 `|b|`, b6 Q2 açık aralık sınırda) | hepsi | GEÇER (sınırda) |
| 3. ipucu cevabı vermiyor | banka 0 net ihlal; kart 7 sınırda (P1-16); üreteç 1 sınırda (P1-19) | 0 | SINIRDA |
| Zorluk dağılımı (banka) | 11 / 6 / 3 = %55 / 30 / 15 | %50/35/15 ± 10 | GEÇER |
| Yanlış cevap dili | azarlama yok; ikinci tekil "unuttun / ters okudun / kaldın" 7 yerde (P1-21) | azarlamasız | GEÇER (DÜŞÜK not) |
| Matematik çözümü numaralı, adım başına tek işlem | numaralı tam; üreteç iki-nokta ve sifir-isaret çok işlemli (P1-02, P1-03) | tek işlem | EKSİK |
| Grafik/tablo tarifi anlaşılır | 3 zayıf (P1-06, P1-07, P1-15) | | KISMEN |
| Dağılım (üreteç) | ölçülemedi | | - |

## Grafik ve tablo tarifi: Mehmet Eren anlar mı?
- İYİ: b1 "tek bir doğru üstüne düşer", "orijinden geçer"; b4 "artan doğru soldan sağa yükselir, azalan iner"; b8 "önce 2x'i çiz, sonra her noktayı 3 birim yukarı taşı"; b10 "x eksenine paralel yatay doğru". Dalgıç/martı, taksi, depo örnekleri tarifi destekliyor.
- ZAYIF: b3 işaret tablosu ("Üst satır: x → −∞ ... 0 ... ∞. Alt satır: ..."), okunuşu belirsiz (P1-06). b7 "x eksenine/y eksenine daha yakın" ve "ters yöne yatar" (P1-07). s019 tablo tek satırlık simge listesi (P1-15).

---

## Bulgular

### P1-01 · YÜKSEK · Kartta iki noktadan eğim / doğrusal fonksiyon bulma hiç öğretilmiyor
- Dosyalar: `konular/matematik-u2-k1.json` `bolumler[6]` (b7) ve `bolumler[7]` (b8); `sorular/matematik-u2-k1.json` s019 (a); üreteç `mat-u2-iki-nokta` (6 tohumun tamamı).
- Alıntı: b7 basit[1] "x'in önündeki a sayısı doğrunun eğimidir. x 1 artınca y'nin ne kadar değiştiğini söyler." Eğimi iki noktadan hesaplama yok. Üreteç ipucu[1]: "Eğim a = (y farkı) / (x farkı)." ilk kez ipucunda görülüyor. s019 a) tablodan a ve b bulmayı istiyor.
- Sorun: Öğrenci formülü ve "bir noktayı yerine koyup b'yi bul" yöntemini kartta hiç görmeden soruyla karşılaşıyor. Anlamayı engeller. Kartta ayrıca g(x) = ax + b yazılı bile verilmemiş (P1-08).
- ÖNERİLEN YENİ METİN (b7, basit[1]'den sonra iki yeni paragraf; b7 Q3 yerine yeni kontrol sorusu; b8'e bir paragraf):
  - b7 basit (yeni): "Eğimi iki noktadan da buluruz. B pompası 1. dakikada 3 ton, 3. dakikada 9 ton basıyor."
  - b7 basit (yeni): "Ton 9 − 3 = 6 arttı, dakika 3 − 1 = 2 arttı. Eğim = 6 : 2 = 3. Yani eğim, y farkının x farkına bölümüdür."
  - b7 Q3 (eski "g(x) = 5x eğimi kaçtır?" yerine): soru "Bir doğru (1, 3) ve (3, 7) noktalarından geçiyor. Eğimi kaçtır?"; cevap "2"; ipuçları ["Eğim, y farkının x farkına bölümüdür.", "Önce y'lerin farkını, sonra x'lerin farkını bul.", "y farkı için 7 − 3, x farkı için 3 − 1 işlemini yap."]; yanlis_aciklama "Eğim y farkı bölü x farkıdır; yalnız y farkını yazmak yetmez."
  - b8 basit (yeni, basit[3]'ten önce): "Sabit terimi bir noktadan buluruz. Taksi 2 km'de 90 TL alıyor: 25 · 2 + b = 90. Buradan b = 40 çıkar."
  - Not: b7 ve b8 zaten 6 dk; süre 7 dk'ya çıkmasın diye b8 kitap[2] ("g(x) = a · f(x ± r) ± k biçimi de ...") üçüncü sınıf özelliği olarak kısaltılabilir (bkz. P1-04).

### P1-02 · ORTA · Üreteç `mat-u2-iki-nokta` çözümü: bir adımda 3-4 işlem
- Üreteç id `mat-u2-iki-nokta`, tohum #0-#11 (hepsi aynı kalıp).
- Alıntı (#0): "1. Eğim: a = (−6 − (−2)) / (3 − 1) = −4 / 2 = −2." ve "2. g(1) = −2: −2 · 1 + b = −2 ⇒ b = −2 − (−2) = 0."
- Sorun: Adım 1'de iki çıkarma + bölme; adım 2'de yerine yazma + denklem çözme. İç içe eksi parantezleri zayıf okuyucu için yoğun. Ayrıca ipucu[2] "(−6 − (−2)) / (3 − 1)" tek satırda iki farkı birden veriyor.
- ÖNERİLEN YENİ METİN (#0 örneği; şablon aynı):
  - "1. y farkı: −6 − (−2) = −4."
  - "2. x farkı: 3 − 1 = 2."
  - "3. Eğim: a = −4 : 2 = −2."
  - "4. (1, −2) noktasını yaz: −2 · 1 + b = −2."
  - "5. −2 + b = −2 olur; b = 0."
  - "6. g(x) = −2x."
  - "7. Kontrol: g(3) = −2 · 3 = −6."
  - ipucu[2] yeni: "İlk adım: y farkı, −6 − (−2)." (x farkını öğrenci kendisi bulur).

### P1-03 · ORTA · Üreteç `mat-u2-sifir-isaret`: "≥ / ≤" kartta yok; çözüm adımı üç ifade taşıyor
- Üreteç id `mat-u2-sifir-isaret`, tohum #0-#11.
- Alıntı (#1): "3. g(x) ≥ 0 için + olan yan alınır: sıfırın sağı. Eşitlik de istendiği için 0 dahildir." ve (#0) "2. x'in katsayısı −3 < 0; g azalandır. Sıfırın solunda +, sağında − olur."
- Sorun: (a) Kartta işaret yalnız "pozitif/negatif" olarak geçiyor, "g(x) ≥ 0 olan x kümesi" ve sıfırın dahil/hariç olması hiç anlatılmıyor. (b) Adım 2 ve 3 iki üç ayrı karar taşıyor ("+ olan yan alınır" kapalı bir jargon).
- ÖNERİLEN YENİ METİN:
  - Kart b9 basit'e (basit[3]'ten sonra) yeni paragraf: "g(x) = x − 5'in sıfırı 5'tir. g(x) > 0 isteniyorsa 5 alınmaz: (5, ∞). g(x) ≥ 0 isteniyorsa 5 de alınır: [5, ∞)."
  - Çözüm (#0, "g(x) > 0"): "1. Sıfır: −3x = 0 ⇒ x = 0." / "2. x'in katsayısı −3 < 0; g azalandır." / "3. Azalanda sıfırın solunda +, sağında − olur." / "4. g(x) > 0 istendi: + olan yan, sıfırın solu." / "5. g(0) = 0 pozitif değil; 0 dahil değil." / "6. Sonuç: (−∞, 0)."

### P1-04 · ORTA · Üreteç `mat-u2-artan-azalan`: "a(x ± r) ± k" biçimi ve "parantez içindeki sayı ötelemeyi gösterir" kartta öğretilmemiş
- Üreteç id `mat-u2-artan-azalan`, tohum #0, #1, #3, #7, #11 (biçim `kay`).
- Alıntı: "✘ g(x) = 2(x + 1) − 9  [kavram_karisikligi] x'in katsayısı 2. Parantez içindeki sayı ötelemeyi gösterir; artanlığı dıştaki katsayı belirler."
- Sorun: Kart yalnız y ekseni ötelemesini öğretiyor (b8); x ekseni ötelemesi `dogrula` listesinde "bulunamadı" diye bırakıldı. Parantez açma yalnız kitap katmanında tek örnekle (b8 kitap[2]) var. Açıklama, kartta olmayan bir kuralı ("parantez içi ötelemeyi gösterir") öğretiyormuş gibi kullanıyor. Şık dili zayıf okuyucu için ağır.
- ÖNERİLEN YENİ METİN (iki seçenekten biri):
  - (Önerilen, en az iş) Tohum üretiminden `kay` biçimini çıkar; yerine `std`, `onde`, `sabit` kalsın. Kart x ekseni ötelemesini öğretene dek geri eklenmesin.
  - (Eklenecekse) b8'e basit paragraf: "2(x + 1) − 9 gibi yazılışlarda parantezi açarız: 2x + 2 − 9 = 2x − 7. Artan mı azalan mı, açıldıktan sonra x'in katsayısına bakılır." ve açıklama metni: "x'in katsayısı 2. Parantezi açınca 2x ... çıkar; artanlığı bu katsayı belirler."

### P1-05 · ORTA · b1: "fonksiyon" ilk geçtiği yerde tanımsız ve kalın değil
- `konular/matematik-u2-k1.json`, `bolumler[0].katmanlar.basit[2]`
- Alıntı: "Burada f(x) = x olur; fonksiyon her sayıyı kendisiyle eşler. Yani f(15) = 15, f(−2) = −2 olur."
- Sorun: Ünitenin ilk kartı; "fonksiyon" basit katmanda hiç tanımlanmıyor, terimler listesinde de yok. "eşler" de tanımsız. Ayrıca b1 örneği pompa süresi olarak f(−2)'yi veriyor (−2 dakika anlamsız). Bölümde 5 paragraf var: değişkenler, referans fonksiyon, tablo, grafik tek ekranda (tek fikir sınırında).
- ÖNERİLEN YENİ METİN:
  - basit[2]: "Her x için tek bir f(x) veren kurala **fonksiyon** denir. Pompada f(x) = x olur; her sayı kendisiyle eşlenir. Yani f(15) = 15 olur."
  - basit[3]: "Tablo: x = −2, −1, 0, 1, 2 için f(x) = −2, −1, 0, 1, 2 olur. Bu noktaları işaretleyince hepsi tek bir doğru üstüne düşer." (sayı doğrusundaki negatifleri soyut grafikte tutmak için aynı kalabilir)
  - `terimler`'e ekle: {"terim": "fonksiyon", "tanim": "Her x değerine tek bir f(x) değeri veren kural."}

### P1-06 · ORTA · b3: işaret tablosu metinle okunmuyor
- `konular/matematik-u2-k1.json`, `bolumler[2].katmanlar.basit[3]`
- Alıntı: "Bunu bir **işaret tablosu** ile yazarız. Üst satır: x → −∞ ... 0 ... ∞. Alt satır: f(x) → − ... 0 ... +."
- Sorun: Tablo görseli yok; "x → −∞ ... 0 ... ∞" okunuşu belirsiz (oklar ve noktalar ne anlama geliyor?). Mehmet Eren tabloyu zihninde kuramaz.
- ÖNERİLEN YENİ METİN (iki paragraf):
  - "Sonucu bir **işaret tablosu** ile gösteririz. Tablonun üst satırında x, alt satırında f(x)'in işareti yazılır."
  - "x < 0 iken alt satıra − yazarız. x = 0 iken 0, x > 0 iken + yazarız."

### P1-07 · ORTA · b7: grafik tarifi görselsiz anlaşılmıyor
- `konular/matematik-u2-k1.json`, `bolumler[6].katmanlar.basit[3]` ve `bolumler[6].katmanlar.kitap[0]`
- Alıntı: basit[3] "a negatifse doğru ters yöne yatar." kitap[0] "Kitap g(x) = 2x'in grafiğini f(x) = x'e göre y eksenine daha yakın bulur. h(x) = −x/2'nin grafiği ise x eksenine daha yakındır (s.101)."
- Sorun: "ters yöne yatar" ve "eksene daha yakın" görsel olmadan anlamı belirsiz; öğrenci hangi eksene yakın olduğunu ve bunun dikliği nasıl gösterdiğini çıkaramaz. basit[2] "dikleşir / yatıklaşır" yeterli, ama kitap katmanı bunu bozuyor.
- ÖNERİLEN YENİ METİN:
  - basit[3]: "a negatifse doğru soldan sağa iner; fonksiyon azalan olur. m(x) = −2x için m(−2) = 4, m(0) = 0, m(2) = −4 olur."
  - kitap[0]: "Kitap, g(x) = 2x doğrusunun f(x) = x doğrusundan daha dik olduğunu gösterir. h(x) = −x/2 doğrusu ise f(x) = x'ten daha yatıktır (s.101)."

### P1-08 · ORTA · b8: "b" ilk geçişte tanımlanmadan kullanılıyor
- `konular/matematik-u2-k1.json`, `bolumler[7].katmanlar.basit[2]`
- Alıntı: "Sondaki b sayısına **sabit terim** denir. b pozitifse doğru yukarı, negatifse aşağı kayar."
- Sorun: basit[0]'da yalnız "g(x) = 2x + 3" geçiyor; "b" harfi ve ax + b kalıbı hiç tanıtılmadı. Öğrenci "sondaki b" ne diyor anlamaz.
- ÖNERİLEN YENİ METİN:
  - "Doğrusal fonksiyonu g(x) = ax + b diye yazarız. Sondaki **b** sayısına **sabit terim** denir. b pozitifse doğru yukarı, negatifse aşağı kayar."
  - (2 + 3 cümle sınırını aşmaması için yukarıdaki üç cümlelik paragraf tek başına kalsın.)

### P1-09 · ORTA · b9 basit[0]: bölme adımı atlanmış, "Yani x = 40"
- `konular/matematik-u2-k1.json`, `bolumler[8].katmanlar.basit[0]`
- Alıntı: "Sıfırı bulmak için d(x) = 0 yazarız: −15x + 600 = 0. 600'ü karşıya geçirirsek −15x = −600 olur. Yani x = 40; depo 40. dakikada biter."
- Sorun: −600 : (−15) işlemi atlanmış; eksi bölü eksi, zayıf okuyucunun en çok zorlandığı yerlerden. 3 cümle tam sınırda, uzun.
- ÖNERİLEN YENİ METİN (iki paragraf):
  - "Sıfırı bulmak için d(x) = 0 yazarız: −15x + 600 = 0. 600'ü karşıya geçirirsek −15x = −600 olur."
  - "İki tarafı −15'e böleriz: x = −600 : (−15) = 40. Depo 40. dakikada biter."

### P1-10 · ORTA · s020: "yazılımda a sürgüsü" kartta yok; zorluk 1 değil
- `sorular/matematik-u2-k1.json`, s020 (`sorular[19]`)
- Alıntı: baglam "Sınıfta g(x) = ax fonksiyonunun artan ya da azalan olduğu iki yolla gösterildi. Birinci yol cebirsel ispat, ikinci yol yazılımda a sürgüsüyle çizilen grafiklerdi." kök "Grafikle yapılan doğrulama, cebirsel ispattan daha genel bir sonuç verir."
- Sorun: Sürgü/yazılım kartta hiç geçmiyor (yalnız b7 kitap[3] "iki yolu karşılaştırır"). "genel/somut sonuç" soyut bir yargı; zorluk 1 için bağlam 3 cümle (kural: ≤ 2).
- ÖNERİLEN YENİ METİN:
  - baglam: "g(x) = ax fonksiyonunun artan ya da azalan olduğu iki yolla gösterilebilir. Birinci yol: a ve c, d harfleriyle cebirsel ispat. İkinci yol: birkaç a değeri için grafik çizmek."
  - kök: "Birkaç a değeri için çizilen grafikler, cebirsel ispat gibi her a için geçerli bir sonuç verir."
  - ipucu[0]: "Grafiği kaç farklı a değeri için çizebilirsin, düşün."; cozum_adimlari[3]: "3. Grafik yalnız çizilen a değerlerini gösterir."
  - zorluk: 2 (dağılım bu değişiklikle 10/7/3 = %50/35/15 olur).

### P1-11 · ORTA · s012: seçenek dili karttaki dille uyumsuz
- `sorular/matematik-u2-k1.json`, s012 (`sorular[11]`)
- Alıntı: "Her x, 2 katı ile eşlenir; sonra y ekseni boyunca 3 birim aşağı ötelenir." Açıklama: "Eşleme katını x'in katsayısı 2 verir; ötelemeyi sabit terim −3 verir."
- Sorun: Kart "önce 2x'i çiz, sonra her noktayı 3 birim taşı" diyor; seçenekte "eşlenir", "eşleme katı" kartta olmayan jargon. Seçenekler 13 kelime, birbirine çok benzer; iki kavram (eğim ve öteleme yönü) birlikte soruluyor.
- ÖNERİLEN YENİ METİN:
  - kök: "g(x) = 2x − 3 doğrusu, f(x) = x doğrusundan hangi adımlarla elde edilir?"
  - A (doğru): "Önce 2x çizilir; sonra her nokta 3 birim aşağı taşınır."
  - B: "Önce 2x çizilir; sonra her nokta 3 birim yukarı taşınır."
  - C: "Önce 3x çizilir; sonra her nokta 2 birim aşağı taşınır."
  - D: "Yalnız 2x çizilir; başka bir şey yapılmaz."
  - Açıklamalar: C için "x'in katsayısı 2 doğrunun dikliğini, sabit terim −3 kaymayı belirler."

### P1-12 · ORTA · s013 ve s018 kart örnekleriyle aynı sayılar
- `sorular/matematik-u2-k1.json`, s013 (`sorular[12]`), s018 (`sorular[17]`); karşılaştırma: b8 `yazilida.ornek_soru` / `ornek_cevap`, b10 `yazilida` ve Q3.
- Alıntı: s013 "u(x) = 25x + 40", "8 km'lik yolculuğun ücretini" (kartta tamamen aynı: 25x + 40, 8 km, 240 TL). s018 "s(x) = 1500 TL" (kartta aynı: s(x) = 1500).
- Sorun: Kart çözümü okuyan öğrenci cevabı ezberden yazar; soru ölçme işlevini kaybeder.
- ÖNERİLEN YENİ METİN:
  - s013 baglam: "Gölcük'te bir taksiye binince taksimetre 50 TL açılış ücreti yazıyor. Sonra her kilometre için ücrete 30 TL ekleniyor. Alınan yol x km, ödenen ücret u(x) TL'dir."
  - s013 kök: b) "6 km'lik yolculuğun ücretini bulunuz." c) "320 TL ödeyen yolcunun kaç km yol aldığını bulunuz."
  - s013 cevap/çözüm: u(x) = 30x + 50; u(6) = 30 · 6 + 50 = 230 TL; 30x + 50 = 320 ⇒ 30x = 270 ⇒ x = 9 km; eğim 30 > 0, u artandır. Rubrik metinleri 25 → 30, 40 → 50, 8 → 6, 240 → 230, 290 → 320, 10 → 9 olarak güncellenir.
  - s018 baglam: "Gölcük'teki bir otopark, kaç saat kalınırsa kalınsın günlük c(x) = 90 TL alıyor (x: saat)." kök "c fonksiyonu bire bir fonksiyondur." Açıklama: "c(2) = c(6) = 90 olur; farklı x'ler aynı değere gittiği için c bire bir değildir." Çözüm ve ipuçlarında s → c, 5 ve 20 → 2 ve 6.

### P1-13 · ORTA · `dogru_yanlis` 6 sorunun hepsinin cevabı "yanlış"
- `sorular/matematik-u2-k1.json`, s002, s005, s006, s016, s018, s020 (hepsi `cevap: false`).
- Sorun: Banka içinde "doğru/yanlış = hep yanlış" örüntüsü; öğrenci içerik yerine örüntüyle cevaplar. Çeldirme ve ölçme değeri düşer.
- ÖNERİLEN YENİ METİN (iki soruyu doğru yap, dört yanlış kalsın):
  - s002 kök: "(−2, −2) noktası, f: ℝ → ℝ, f(x) = x fonksiyonunun grafiği üzerindedir." cevap true. cozum: "1. Noktada x = −2 ve y = −2." / "2. f(−2) = −2 bulunur." / "3. y = f(x) olduğundan nokta grafiğin üzerindedir." / "4. İfade doğrudur." ipuçları ve `yanlis_aciklama` buna göre sadeleşir.
  - s005 kök: "f(x) = x fonksiyonu, (0, ∞) aralığındaki her x için pozitiftir." cevap true. cozum: "1. (0, ∞) aralığında x > 0." / "2. f(x) = x olduğundan f(x) > 0." / "3. İfade doğrudur."

### P1-14 · ORTA · s016: kök yoğun ve yarı anlamsız Türkçe
- `sorular/matematik-u2-k1.json`, s016 (`sorular[15]`)
- Alıntı: "“a, b ∈ ℝ ve ∀a > 0 için gerçek sayılarda h(x) = ax + b şeklinde tanımlı fonksiyon azalandır.” önermesi doğrudur."
- Sorun: Tek cümlede küme ifadesi, niceleyici ve iki "şeklinde/ve" bağı; "∀a > 0 için gerçek sayılarda ... tanımlı fonksiyon" okunmuyor. Zorluk 1 etiketi ağır kalıyor (zorluk 2 daha doğru, ama dağılım %40/45/15'e kayar; bu yüzden etiket 1 kalsın, metin sadeleşsin).
- ÖNERİLEN YENİ METİN:
  - kök: "“∀a > 0 için h(x) = ax + b fonksiyonu azalandır.” önermesi doğrudur."
  - (∀ kartta b4 kitap[2]'de "her" diye açıklanıyor.)

### P1-15 · ORTA · s019: tablo tek satır simge, bağlam 4 cümle
- `sorular/matematik-u2-k1.json`, s019 (`sorular[18]`), baglam
- Alıntı: "Depodaki su miktarı tabloda verilmiştir. Tablo: x (dk.) = 0, 5, 10 için su miktarı (L) = 540, 450, 360."
- Sorun: "x = 0, 5, 10 için ... = 540, 450, 360" iki listeyi sırayla eşlemeyi öğrenciden bekliyor. Bağlam 4 cümle, z3 için kabul ama okuma yükü fazla.
- ÖNERİLEN YENİ METİN:
  - baglam: "Gölcük'te bir evin çatısındaki depodan musluk açılınca su sabit hızla akıyor. Depo boşalınca musluk kapanıyor. Depodaki su: 0. dakikada 540 L, 5. dakikada 450 L, 10. dakikada 360 L."
  - kök başı: "Depodaki su miktarı d(x) = ax + b doğrusal fonksiyonudur (x: dakika, d(x): litre). Aşağıdakileri işlemlerinizi göstererek bulunuz. ..." (devamı aynı)
  - P1-01 uygulanmadan bu soruda a, b hesabının nasıl yapılacağı kartta yoktur.

---

DÜŞÜK bulgular (isteğe bağlı, tek başına engel değil):

### P1-16 · DÜŞÜK · Kart: 3. ipucu cevaba çok yaklaşıyor (7 yer)
Kural: 3. ipucu ilk adımı yapar, cevabı söylemez. Aşağıdakilerde ikili sorunun cevabı ipucundan okunuyor. Önerilen 3. ipuçları:
- `bolumler[0].kontrol_sorulari[0].ipuclari[2]` (b1 Q1): "Tanımı hatırla: değerini bizim seçtiğimiz değişken hangisi? Zaman ile su miktarını karşılaştır."
- `bolumler[1].kontrol_sorulari[0].ipuclari[2]` (b2 Q1): "x yerine −3, 0, 2,5 yazmayı dene. Üçü de yazılabiliyor mu?" (eski "hangisi yasak?" yanıltıcı)
- `bolumler[4].kontrol_sorulari[0].ipuclari[2]` (b5 Q1): "İki farklı öğrencinin numarasını yan yana yaz ve karşılaştır."
- `bolumler[5].kontrol_sorulari[1].ipuclari[2]` (b6 Q2): "8,99 gibi 9'a yakın bir sayı seç. Aralıkta ondan büyük başka bir sayı var mı, ara."
- `bolumler[8].kontrol_sorulari[2].ipuclari[2]` (b9 Q3): "50 ile 40'ı sayı doğrusunda karşılaştır; sonra kuraldaki tabloya bak."
- `bolumler[9].kontrol_sorulari[1].ipuclari[2]` (b10 Q2): "x = 0, 1, 5 için g(x) değerlerini yaz. Değerler değişiyor mu?"
- Banka s006 `ipuclari[2]`: "Tanım 'her a, b' diyor. Ece'nin denediği sayılar 'her a, b' kadar mı?"

### P1-17 · DÜŞÜK · s004: "psi" tanımsız birim, bağlam 4 cümle, kurgu zorlama
- `sorular/matematik-u2-k1.json`, s004 baglam; "Lastiğin basıncı her gün 3 psi düşüyor" gerçekçi değil.
- ÖNERİLEN YENİ METİN: "Gölcük'te bir teknenin yakıt deposunda 36 litre yakıt var. Tekne her gün 3 litre yakıt harcıyor. Depoda 18 litre kalınca tekne yakıt alıyor. Gün sayısına (x) bağlı yakıt miktarı (litre) y(x) = −3x + 36 ile verilir." Seçenek açıklamaları ve çözümde "basınç / psi" → "yakıt / litre"; çözüm adım 2 "süreç biter" → "yakıt alınır".

### P1-18 · DÜŞÜK · Üreteç tohum ve açıklama sadeleştirmeleri
- `mat-u2-deger-hesap` #2 (g(x) = 4x − 4, g(4)) ve #3 (4x, g(−4)): x ile katsayı aynı sayı; "4" şıkkı rastlantıyla çakışıyor. Tohum üretiminde c ≠ ±a olsun.
- `mat-u2-deger-hesap` #11 (3x − 6 = −6 ⇒ x = 0): cevap 0, tahminle bulunur. d ≠ b olsun.
- #0 "✘ 3 ... −3 ile bölerken işareti koru." → "9 : (−3) işleminde işaretler farklı; sonuç eksi çıkar."
- #11 "✘ 4 ... yalnız −6 sayısını böldün." → "3x − 6 = −6'da iki tarafın tamamı 3'e bölünür; 3x ile −6'yı birlikte böl."
- `mat-u2-iki-nokta` #1 ve #2: g(0) soruda verilmiş (b = g(0) hazır); "b, x = 0'daki değerdir; g(−2) değil" şıkkı bariz yanlış, dolgu gibi. x2 = 0 olmayan tohumlar tercih edilsin.
- `mat-u2-deger-hesap` "x gördüğün yere ... yaz" (#1-#7): kök kısa, ipucu doğru; değişiklik gerekmez.

### P1-19 · DÜŞÜK · Üreteç `mat-u2-baglam-model`: 3. ipucu son çıkarma dışında bitiyor
- `bos_y` tohumları #1, #2, #3: ipucu[2] "İlk adım: 38 dakikada akan su 20 · 38 = 760 litre." 760 aynı zamanda yanlış şık ("Akan suyu buldun"). `taksi_ucret` #7: "İlk adım: 40 · 9 = 360 TL." 360 da yanlış şık.
- ÖNERİLEN YENİ METİN: "İlk adım: dakikada akan 20 litreyi dakika sayısı ile çarp." (sayıyı vermeden). `taksi_ucret` için "İlk adım: km ücretini km sayısıyla çarp."

### P1-20 · DÜŞÜK · Kart: küçük tutarsızlıklar
- b4 kitap[0] ∀ kullanıyor, açıklaması kitap[2]'de. Sıra: kitap[2] (∀ işareti 'her' diye okunur) en başa taşınsın.
- b5 kitap[0] "⇒" okunuşu yok: "⇒ işareti 'ise' diye okunur."
- b6 basit: köşeli parantezin "uç dahil" demek olduğu yalnız Q1 ipucunda geçiyor; basit[1]'e "[1, 5]'te uçlar dahildir." eklenmeli.
- b6 `yazilida.ornek_cevap[2]`: "Minimum değer −3'tür; x = −3'te, yani (−3, −3) noktasında alınır." tek adımda üç bilgi; üçe bölünebilir.
- b2 kitap[2] "okun sağı fonksiyonun değer aldığı kümeyi gösterir": görüntü kümesi ile karışabilir (s003 şıkkı ℝ). Ek cümle: "Okun sağı ile görüntü kümesi aynı olmak zorunda değildir."
- b9 kitap[2..3] önerme/hüküm bölümü tek fikri (sıfır ve işaret) bozuyor; ünite 1'de tanımlandığı için "Ünite 1'deki önerme" diye kısaltılabilir.
- `flashcard[5]` arka: "b, y eksenini kestiği noktadır: (0, b)." → "b, doğrunun y eksenini kestiği yüksekliktir; kesim noktası (0, b)."
- b7, b8, b9 `sure_dk`: 6 (diğerleri 5). Pilotta benzer durum bilerek bırakılmıştı; not düşülür.

### P1-21 · DÜŞÜK · Yanlış cevap açıklamalarında ikinci tekil şahıs
- Banka: s009 şık[2] "Parantezleri ters okudun", s014 şık[2] "...'de kaldın". Üreteç: "...bölmeyi unuttun" (deger-hesap #0, baglam-model #0-#3, iki-nokta), "Bölmeyi ters yaptın".
- Azarlama değil, ama "suçlamasız" ilkesine daha yakın biçim: "Ters okundu" yerine "Parantezlerin yeri değişmiş", "bölme adımı eksik kalmış", "bölme ters yapılmış".

### P1-22 · DÜŞÜK · Banka küçük notlar
- s017 (parametreli sabit fonksiyon, "(a − 3)x + a + 5"): kartta parametreli ifade örneği yok; z2 için bir yazılı örneğiyle b10'a bağlanabilir.
- s005 ve s001: z1 için iki adım (f(−7) + f(3)); kabul, not düşülür.
- b10 Q2 cevabı uzun ("x eksenine paralel, y eksenini (0, −2)'de kesen yatay doğru"): kendi kendini kontrol eden öğrenci için "Yatay doğru" yeterli olmalı; uzun hâl `kabul_edilenler`'de tutulabilir.

---

## Ölçülemeyen / örneklemeyle yapılan
- Ortalama cümle uzunluğu: örnekleme (tam sayım yapılmadı).
- Üreteç zorluk dağılımı ve 6 tohum dışındaki tohumlar: ölçülemedi (yalnız #0, #1, #2, #3, #7, #11 görüldü).
- `kaynak` sayfa numaralarının doğruluğu bu denetimin konusu değil.

KARAR: DÜZELTİLMELİ (YÜKSEK 1, ORTA 14, DÜŞÜK 7)
