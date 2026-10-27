# Pedagoji denetimi: 9. sınıf Matematik, Ünite 1, tur 1

Denetçi: pedagoji-denetcisi (salt okur). Tarih: 2026-10-26.
Soru: "Mehmet Eren bunu anlar mı?" (9. sınıf, anlama kapasitesi ortalamanın biraz altında, uzun metinde kopuyor.)

## Kapsam ve yöntem

- Konu kartları: `dersler/matematik/konular/matematik-u1-k1.json` ... `k4.json` (22 bölüm, 58 kontrol sorusu, 29 flashcard).
- Soru bankaları: `dersler/matematik/sorular/matematik-u1-k1.json` ... `k4.json` (23 + 14 + 12 + 15 = 64 soru).
- Bu oturumda Bash yok. Tüm sayımlar elle, dosyalar satır satır okunarak yapıldı. Hiçbir içerik dosyası değiştirilmedi.
- Kelime sayımı kuralı: boşlukla ayrılan her simge 1 kelime; yalnız işlem işaretinden oluşan simgeler (·, =, +, −, :) sayılmaz; sayı ve ifadeler 1 kelime. Birim ayrı yazılmışsa (5 °C) 2 kelime.
- TAM sayılanlar (örneklem yok): zorluk dağılımı, soru sayısı, kontrol sorusu sayısı, ipucu basamak sayısı (58 kart + 64 banka), paragraf cümle sayısı (tüm basit ve kitap paragrafları), kalın terim ↔ `terimler` eşleşmesi, `ornek` varlığı, flashcard sayısı, azarlama ve soyut kelime taraması (Grep).
- ÖRNEKLEME yapılanlar: ortalama cümle uzunluğu. Her konudan bir bölümün `basit` katmanı cümle cümle sayıldı (K1 b1, K2 b1, K3 b3, K4 b4). Geri kalan tüm cümleler okundu; 17 kelime ve üstü görünen adaylar tek tek sayıldı. Bu yüzden "en uzun cümle" değeri taramaya dayanır, ortalama ise 4 bölümden örneklemdir.
- Ölçülemeyenler: ekran başına tek fikir, bağlamın işlevselliği ve çeldirici kalitesi yargıya dayanır (sayı verilemez, gerekçesi bulgularda yazılı).

## Ölçüt tablosu (Matematik, Ünite 1)

| Ölçüt | K1 Üslü/Köklü | K2 Aralıklar | K3 Sayı kümeleri | K4 Önerme/Özdeşlik | Eşik | Durum |
|---|---|---|---|---|---|---|
| Ort. cümle uzunluğu (basit, örneklem) | 5,6 (b1, 15 cümle) | 8,8 (b1, 10 cümle) | 9,0 (b3, 5 cümle) | 7,0 (b4, 7 cümle) | ≤ 12 | GEÇER |
| En uzun cümle (tüm metin, tarama) | 21 (s009 bağlam) | 21 (b4 yazılı soru, birim ayrı sayılırsa) | 20 (s009 bağlam) | 29 (s011 bağlam), 22 (b4 kitap[3]) | ≤ 20 | K1, K2, K4 KALIR (basit katmanda en uzun cümle 17: GEÇER) |
| Paragraf > 3 cümle (basit ve kitap) | 0 | 0 | 0 | 0 | ≤ 3 | GEÇER |
| `ornek.metin` > 3 cümle | 2 (b5, b6) | 1 (b1) | 0 | 2 (b1, b2) | ≤ 3 | DÜŞÜK ihlal (P1-25) |
| Bölüm süresi > 5 dk | 4/6 (b2 6, b3 7, b5 7, b6 6) | 0/5 | 0/5 | 0/6 | 5 dk | K1 KALIR |
| Bölüm başına tek fikir (yargı) | ihlal: b1, b4, b5, b6 | ihlal: b1 | ihlal: b3 (b1 eksik) | ihlal: b2, b3 | tek fikir | KALIR |
| Kuraldan önce somut örnek (bölüm düzeyi) | 6/6 | 5/5 | 5/5 | 6/6 | her bölümde ≥ 1 | GEÇER |
| Kuraldan önce örnek (kural düzeyi) | eksik: b1 sıfır/negatif üs, b6 eşlenik | tamam | tamam | eksik: b4/b5 a²−b² kalıbı, b6 çözüm | her kural | KALIR |
| Yerel bağlam, kartlar | 6/6 | 5/5 | 5/5 | 6/6 | ≥ %50 | GEÇER (%100) |
| Yerel bağlam, bankalar (bağlamı olan sorular; Gölcük/Barbaros/tersane/futbol dar sayımı) | 7/13 (%54) | 7/9 (%78) | 5/8 (%63) | 4/7 (%57) | ≥ %50 | GEÇER (günlük hayat dahil %100) |
| Basit katmanda soyut kelime | 0 | 0 | 0 | 0 | yok | GEÇER |
| Kalın terim ↔ `terimler` tanımı | 16/16 | 18/18 | 17/17 | 15/15 | %100 | GEÇER |
| Terim kullanımı tanımdan önce | kuvvet, kökün derecesi, tam kare | dâhil | doğal sayılar/N, Z, Q, R (basit'te yok) | değil (basit'te yok) | ilk geçişte tanım | KALIR (P1-04, P1-06, P1-13) |
| Kontrol sorusu sayısı | 3,3,3,3,3,3 | 3,3,2,3,3 | 2,2,3,2,2 | 2,3,2,3,2,3 | 2–3 | GEÇER |
| Kontrol sorusu hepsi zorluk 1 | 1 şüpheli (b5) | 0 | 0 | 2 şüpheli (b4, b6) | hepsi kolay | KALIR (P1-18) |
| İpucu: 3 basamak | 18/18 kart, 23/23 banka | 14/14, 14/14 | 11/11, 12/12 | 15/15, 15/15 | 3 | GEÇER |
| İpucu: 1. basamak cevap vermiyor | 0 ihlal | 0 | 0 | 0 | yok | GEÇER |
| İpucu: 3. basamak cevabın kendisi değil | kart 7/18 ihlal, banka 1 | kart 7/14, banka 0 | kart 7/11, banka 0 | kart 8/15, banka 0 | yok | KALIR (kart 29/58, banka 1/64) |
| Zorluk dağılımı (kolay/orta/sınav) | 11/9/3 = %47,8/39,1/13,0 | 7/5/2 = %50,0/35,7/14,3 | 6/4/2 = %50,0/33,3/16,7 | 8/5/2 = %53,3/33,3/13,3 | %50/35/15 ± 10 | GEÇER (toplam 32/23/9 = %50,0/35,9/14,1) |
| Yanlış cevap dili | azarlama 0 | azarlama 0; `yanlis_aciklama` eksik 3 (s002, s004, s009) | 0 | 0 | azarlama yok, tek cümle | K2 KALIR (P1-20) |
| Matematik çözümü numaralı | 23/23 | 14/14 | 12/12 | 15/15 | evet | GEÇER |
| Çözüm adımında tek işlem | birkaç ihlal | az | az | az | tek işlem | DÜŞÜK (P1-31) |
| Flashcard sayısı (4–8), arka ≤ 2 cümle | 8 | 7 | 7 | 7 | 4–8 | GEÇER |

Özet yargı: Dil düzeyi (kısa cümle, azarlamasız ton, soyut kelime yok, terim eşleşmesi, zorluk dağılımı) iyi. Asıl sorunlar üç yerde: (1) bazı bölümler tek fikir değil, terim ve kural yığıyor (K1 b6, K2 b1, K4 b2, K3 b3), (2) `basit` katmanda öğretilmeyen şeyi kontrol sorusu soruyor (K3 b1, K4 b1, K4 b2), (3) kontrol sorularının 3. ipucu yarısında cevabı veriyor.

---

## YÜKSEK bulgular (anlamayı engeller)

### P1-01 · YÜKSEK · Yanlış ve cevabı veren ipucu (sıfırıncı üs)
- Dosya: `dersler/matematik/konular/matematik-u1-k1.json`
- JSON yolu: `bolumler[0].kontrol_sorulari[0].ipuclari[1]` ve `[2]`
- Alıntı: "0 dışındaki her sayının sıfırıncı kuvveti aynı sayıdır." / "7⁰ = 1 ise 5⁰ de ... olur."
- Sorun: 2. basamak "aynı sayıdır" diye okunur; öğrenci 5⁰ = 5 yazar. Yani ipucu yanlış yöne çekiyor. 3. basamak ise 7⁰ = 1'i vererek cevabı (1) eşlemeyle veriyor. Ayrıca "kuvvet" kelimesi bu bölümde henüz tanımlanmadı.
- ÖNERİLEN YENİ METİN:
  - `ipuclari[1]`: "0 dışındaki her sayıyı 0 üssüne çıkarırsan hep aynı sonucu bulursun. Tabanın ne olduğu önemli değil."
  - `ipuclari[2]`: "Düzene bak: 2³ = 8, 2² = 4, 2¹ = 2. Üs 1 azalınca sonuç yarıya iniyor. 2⁰ ne olur?"
- Önem: YÜKSEK (yanlış matematik içeren ipucu).

### P1-02 · YÜKSEK · K1 b6: eşlenik ve paydayı rasyonel yapma örneksiz, gerekçesiz ve iki fikir bir arada
- Dosya: `dersler/matematik/konular/matematik-u1-k1.json`
- JSON yolu: `bolumler[5].ornek`, `bolumler[5].katmanlar.basit[0]`, `basit[1]`, `bolumler[5].sure_dk`
- Alıntı: ornek: "Gölcük'te kare biçimli bir bahçenin alanı 300 m². Kenarı √300 = 10√3 m olur. √3 yaklaşık 1,7 olduğundan kenar yaklaşık 17 m..." ; basit[1]: "Payda √5 − √2 gibi iki parçalıysa **eşlenik** kullanılır. ... İkisini çarpınca 5 − 2 = 3 çıkar, kök kalmaz."
- Sorun: (1) Örnek yalnız yaklaşık değeri anlatıyor; paydayı rasyonel yapma ve eşlenik için kuraldan önce örnek yok. (2) "çarpınca 5 − 2 = 3 çıkar" neden olduğunu söylemiyor; bölümün kilit iddiası gerekçesiz. (3) Başlık "Eşlenik ve yaklaşık değer" iki fikir; süre 6 dk. Eşlenik ortak yazılının 2. sorusu olduğu için bu bölüm sınav açısından kritik.
- ÖNERİLEN YENİ METİN: Bölümü ikiye ayır.
  - Yeni b6 "Paydadaki kökten kurtulma" (sure_dk 5):
    - `ornek`: {"baglam": "tersane", "metin": "Tersanede 10 m'lik bir kiriş, her biri √5 m olan parçalara kesilecek. Parça sayısı 10/√5 olur. Kökle bölmek zordur; paydayı kökten kurtarırsak hesap kolaylaşır."}
    - `basit[0]`: "Pay ve paydayı paydadaki kökle çarparız. 10/√5 = 10√5/(√5 · √5) = 10√5/5 = 2√5 olur. √5 yaklaşık 2,24 olduğundan parça sayısı yaklaşık 4,48 çıkar."
    - `basit[1]`: "Payda √5 − √2 gibi iki parçalıysa tek kökle çarpmak yetmez. **Eşlenik** kullanılır: ortadaki işareti değiştirirsin. √5 − √2'nin eşleniği √5 + √2'dir."
    - `basit[2]`: "Çarpınca ortadaki terimler birbirini götürür: (√5 − √2) · (√5 + √2) = 5 + √10 − √10 − 2 = 3. Kök kalmaz."
    - `kontrol_sorulari`: mevcut ilk ikisi (eşlenik, (√3 − 1)(√3 + 1)), 3. ipuçları P1-16'daki gibi düzeltilmiş olarak kalır; üçüncü olarak şu eklenir: soru "2/√3 kesrinin paydasını kökten kurtarınız.", cevap "2√3/3", ipuclari ["Payda √3. Hangi sayıyla çarparsan kök kalkar?", "Pay ve paydayı √3 ile çarp.", "Payda: √3 · √3 = ... Pay: 2 · √3 = ..."], yanlis_aciklama "Pay ve paydayı aynı sayıyla çarpmak kesrin değerini değiştirmez; payda √3 · √3 = 3 olur."
  - Yeni b7 "Kökün yaklaşık değeri" (sure_dk 5): mevcut `ornek` (bahçe 300 m²), mevcut `basit[2]` ve `kitap[2]`, kontrol sorusu "√10 hangi iki ardışık tam sayı arasındadır?" buraya taşınır. İkinci bir kontrol sorusu eklenir (ör. "√20 hangi iki ardışık tam sayı arasındadır?").
  - Not: Bu öneri ve P1-05 ile K1 8 bölüme çıkar. Şema "genelde 2–6 bölüm" diyor; K1 zaten 36 dk. Seçenekler: haritada K1'i "Üslü" ve "Köklü" diye iki konuya ayırmak ya da panelde iki gruba bölmek. Karar ana ajana ait.
- Önem: YÜKSEK.

### P1-03 · YÜKSEK · K2 b1: 5 dakikada 11 terim ve 8 yeni sembol
- Dosya: `dersler/matematik/konular/matematik-u1-k2.json`
- JSON yolu: `bolumler[0].katmanlar.basit[0..3]`, `bolumler[0].katmanlar.kitap[0..3]`, `bolumler[0].terimler` (11 kayıt), `bolumler[0].kontrol_sorulari[0]`
- Alıntı: terimler: küme, eleman, kesişim, birleşim, fark, listeleme yöntemi, ortak özellik yöntemi, evrensel küme, tümleyen, alt küme, boş küme. basit'te 4 paragrafta 5 yeni terim ve ∈ ∉ ∩ ∪ \ sembolleri.
- Sorun: "Bölüm başına tek fikir" ihlali. Kısa cümleler iyi ama yeni sözcük yükü 5 dakikalık bir bölüm için iki katı. Uzun metinde kopan öğrenci burada kopar. Ayrıca kontrol sorusu 1 (`s(A)`) yalnız `kitap[1]` katmanında öğretilen s(A) gösterimini soruyor; `basit` okuyan öğrenci bunu hiç görmedi. Alt küme ve boş küme K2'nin hiçbir sorusunda, yazılısında kullanılmıyor.
- ÖNERİLEN YENİ METİN:
  - b1 "Küme ve eleman" (sure_dk 5), `ornek`: {"baglam": "futbol", "metin": "Gölcük'te amatör bir takımın hocası bir grup kuruyor. A grubunda 1, 2, 3, 4, 5 numaralı formalar var. 3 numara bu grupta, 9 numara yok."}
    - `basit[0]`: "Bir grup sayıyı süslü parantez içinde yazınca **küme** olur. Yani A = {1, 2, 3, 4, 5} bir kümedir."
    - `basit[1]`: "Kümenin içindeki her sayıya **eleman** denir. 3, A'nın elemanıdır ve 3 ∈ A yazılır. 9 ise A'da yok, 9 ∉ A yazılır."
    - `basit[2]`: "Eleman sayısını s(A) ile yazarız. A'da 5 eleman var, yani s(A) = 5."
    - `terimler`: yalnız küme, eleman. `kitap`: listeleme ve ortak özellik yöntemi (2 terim) kalır. Kontrol sorusu: mevcut 1. ve 3. (s(A); 7 ∈ {2, 4, 6}) ve 2. soru yerine "9 ∈ {1, 3, 5, 7} doğru mu?" gibi bir ∉ sorusu.
  - Yeni b2 "Ortak ve farklı elemanlar" (sure_dk 5): mevcut futbol `ornek`'i (A: 1–5, B: 4, 5, 6, 8), mevcut `basit[2]` ve `basit[3]` (kesişim, birleşim, fark), kontrol sorusu A ∩ B. `terimler`: kesişim, birleşim, fark.
  - Evrensel küme ve tümleyen: b4 (`bolumler[3]`) kitap katmanında A′ zaten anlatılıyor; b4'ün boş `terimler` listesine bu iki tanım taşınır. Alt küme ve boş küme: bu kartta kullanılmıyor, program metninden (9.1.2) teyit edilip çıkarılır ya da "ileride" notuna düşülür.
  - Not: K2 de 5 bölümden 6'ya çıkar (şema sınırı içinde).
- Önem: YÜKSEK.

### P1-04 · YÜKSEK · K3 b1: N, Z, Q, R `basit` katmanda hiç öğretilmiyor
- Dosya: `dersler/matematik/konular/matematik-u1-k3.json`
- JSON yolu: `bolumler[0].katmanlar.basit[0..2]`, `bolumler[0].kontrol_sorulari[0..1]`, `bolumler[0].terimler[1]`
- Alıntı: basit[2]: "Yani her ihtiyaç yeni bir sayı grubu doğurmuş. Bu gruplara **sayı kümesi** diyoruz." ; kontrol: "Limanda bekleyen gemi sayısını yazmak için hangi sayı kümesi yeter?" (cevap N) ; "-8 hangi kümenin elemanıdır: N mi, Z mi?"
- Sorun: Bölümün amacı dört kümeyi tanımak, ama doğal/tam/rasyonel/gerçek sayı adları ve N, Z, Q, R harfleri yalnız `kitap` katmanında geçiyor. `basit`ten sonra gelen iki kontrol sorusu öğrencinin hiç görmediği harfleri soruyor. Ek olarak `terimler[1]` doğal sayıları "1, 2, 3 gibi" tanımlıyor; banka (s001 ipucu) ise "0, 1, 2, 3, ..." diyor. MEB'de N, 0'ı içerir; iki dosya birbirini tutmuyor.
- ÖNERİLEN YENİ METİN: `basit[0..2]` yerine:
  - "Yani her ihtiyaç yeni bir sayı grubu doğurmuş. Bu gruplara **sayı kümesi** diyoruz."
  - "Saymada kullandığımız 0, 1, 2, 3 gibi sayılar **doğal sayılar**dır. Harfi N. 6 gemiyi saymak için N yeter."
  - "Eksi sayılar da gelince **tam sayılar** olur: −2, −1, 0, 1, 2. Harfi Z. Havuz tabanı −8 m için Z gerekir."
  - "2,5 ya da 1/2 gibi kesirli sayılar **rasyonel sayılar**dır. Harfi Q. Halat 2,5 m için Q gerekir."
  - "√2 gibi kesir olarak yazılamayan sayılar **irrasyonel sayılar**dır. Hepsi birlikte **gerçek sayılar**dır. Harfi R."
  - `terimler[1].tanim`: "Saymada kullandığımız 0, 1, 2, 3 gibi sayıların kümesi; N ile gösterilir."
  - `kitap[1]` ve `kitap[2]` bu tanımları yinelediği için kısaltılır (yalnız harfler ve Q′ gösterimi kalır).
  - DOĞRULA: 0'ın N'de olduğu ders kitabı ve öğretmenin kullanımıyla teyit edilmeli (banka s001 `dogrula` notu zaten bunu söylüyor).
- Önem: YÜKSEK.

---

## ORTA bulgular

### P1-05 · ORTA · K1 b1: sıfır üs, negatif üs ve parantez kuralları örneksiz, tek fikir değil
- Dosya: `dersler/matematik/konular/matematik-u1-k1.json`
- JSON yolu: `bolumler[0].katmanlar.basit[2]`, `basit[3]`, `basit[4]`
- Alıntı: "Sıfır üs özeldir. 0 dışındaki her sayının sıfırıncı kuvveti 1'dir." / "Negatif üs, sayıyı paydaya gönderir."
- Sorun: Bölümün tek örneği (duyuru: 2, 4, 8) yalnız "üs = tekrarlı çarpma"yı anlatıyor. Sıfır üs ve negatif üs kural olarak, örneksiz ve "neden" demeden veriliyor. Bir bölümde dört fikir (üs, sıfır üs, negatif üs, parantez/işaret).
- ÖNERİLEN YENİ METİN: Yeni bölüm "Sıfır ve negatif üs" (sure_dk 5), `ornek`: {"baglam": "okul", "metin": "Duyuru her turda 2 katına çıkıyor. 3. turda 2³ = 8 kişi, 2. turda 2² = 4, 1. turda 2¹ = 2 kişi duyuyor. Geriye doğru her adımda sayı yarıya iniyor."}
  - `basit[0]`: "Üs 1 azalınca sonuç yarıya iniyor: 2³ = 8, 2² = 4, 2¹ = 2."
  - `basit[1]`: "Aynı düzen sürerse 2⁰ = 1 olur. 0 dışındaki her sayının üssü 0 olursa sonuç 1'dir. Yani 5⁰ = 1 ve (−6)⁰ = 1 olur."
  - `basit[2]`: "Düzen devam ederse 2⁻¹ = 1/2 ve 2⁻² = 1/4 olur. Negatif üs, sayıyı paydaya gönderir: 3⁻² = 1/3² = 1/9."
  - Kontrol sorusu: "5⁰ kaçtır?" (P1-01'deki yeni ipucuyla) ve "2⁻¹ hangi kesre eşittir?" (P1-16'daki yeni ipucuyla).
  - b1'de yalnız üs-taban ve parantez/işaret kalır. Kontrol sorusu "3² kaçtır?" + yeni: soru "(−2)² kaçtır?", cevap "4", ipuclari ["Parantez içindeki −2'nin kendisi taban.", "(−2) · (−2) yaz.", "Eksi ile eksi çarpılırsa işaret ne olur?"], yanlis_aciklama "Parantez varken taban −2'dir; iki eksi çarpılınca sonuç artı olur."
  - Seçenek B (bölümü bölmeden asgari düzeltme): `basit[2]` öncesine yukarıdaki üç satırlık "düzen" paragrafını koy; ama bu bölüm yine 4 fikir ve 5 dk üstü kalır.
- Önem: ORTA.

### P1-06 · ORTA · K1 b4: kesirli üs köprüsüz, "derece" ve "karekök" basit'te tanımsız, iki fikir
- Dosya: `dersler/matematik/konular/matematik-u1-k1.json`
- JSON yolu: `bolumler[3].katmanlar.basit[1..4]`
- Alıntı: "Kök, kesirli bir üs gibidir. 8²⁄³ ifadesinde payda 3 kökün derecesi, pay 2 içerideki üs olur." ; "3. dereceden kök de benzer çalışır." ; "Tek dereceli kök her sayı için vardır: ∛(−8) = −2. Çift dereceli kökün içi negatif olamaz."
- Sorun: (1) √ ile ∛ anlatıldıktan sonra doğrudan 8²⁄³ geliyor; "kök = kesirli üs" bağı gösterilmeden iddia ediliyor. (2) "kökün derecesi", "dereceli" basit'te ilk kez kalın ve tanımsız geçiyor (tanım yalnız kitap katmanında). (3) Aynı bölümde tek/çift derece ve negatif içi kural var: bir bölümde dört fikir (karekök, küpkök, kesirli üs, işaret kuralı), `basit[3]` ile `kitap[2]` aynı şeyi yineliyor.
- ÖNERİLEN YENİ METİN: (Kesirli üs yazımı için P1-19'a bak: 8^(2/3).)
  - `basit[1]`: "3. dereceden kök de benzer çalışır. 2 · 2 · 2 = 8 olduğu için ∛8 = 2 olur. Kök işaretindeki küçük 3 **kökün derecesi**dir; kaç kez çarpıldığını söyler."
  - `basit[2]`: "Kök, kesirli üs olarak da yazılır. √9 = 3 ve 9^(1/2) = 3 aynı sayıdır. Payda 2, karekök demektir."
  - `basit[3]`: "8^(2/3) için payda 3: küpkök al. Pay 2: sonra karesini al. ∛8 = 2 ve 2² = 4. Yani 8^(2/3) = 4."
  - Eski `basit[3]` (tek/çift derece) silinir; içeriği zaten `kitap[2]`'de var. Eski `basit[4]` ("Çift dereceli kökten negatif sonuç çıkmaz...") korunur (soru s014 buna dayanıyor).
  - `bolumler[0].katmanlar.basit[2]` (K1 b1) içindeki "sıfırıncı kuvveti" ifadesi P1-05'teki gibi "üssü 0 olursa" diye değişince "kuvvet" kelimesi basit'te tanımsız kullanılmaz.
- Önem: ORTA.

### P1-07 · ORTA · K1 b5: farklı dereceli kökler adımsız, "içler birleşir" belirsiz, "tam kare" tanımsız
- Dosya: `dersler/matematik/konular/matematik-u1-k1.json`
- JSON yolu: `bolumler[4].katmanlar.basit[0]`, `basit[2]`, `basit[3]`; `bolumler[4].sure_dk` (7)
- Alıntı: "Çarpma ve bölmede dereceler aynıysa içler birleşir." ; "Dereceler farklıysa önce eşitlenir. √2 = ⁶√(2³) = ⁶√8 ve ∛3 = ⁶√(3²) = ⁶√9 olur."
- Sorun: Derece eşitleme tek paragrafta "neden 2³, neden 3²" söylenmeden veriliyor; 7 dakikalık, dört fikirli (sadeleştirme, toplama, çarpma-bölme, farklı derece) bölümün en zor yeri. "içler birleşir" soyut. "tam kare" tanımsız.
- ÖNERİLEN YENİ METİN:
  - `basit[0]`: "Kökün içindeki sayıyı çarpanlarına ayır. İçinde bir **tam kare** (4, 9, 16, 25 gibi) varsa **kök dışına çıkarma** yaparsın. Yani √20 = √(4 · 5) = 2√5 olur." ; `terimler`'e eklenir: {"terim": "tam kare", "tanim": "Bir sayının kendisiyle çarpımı olan sayı; 4, 9, 16, 25 gibi."}
  - `basit[2]`: "Çarpma ve bölmede dereceler aynıysa kök içlerini tek kökte yazarız. √2 · √8 = √(2 · 8) = √16 = 4 olur. ∛54 : ∛2 = ∛(54 : 2) = ∛27 = 3 olur."
  - `basit[3]` dört kısa paragrafa bölünür: "Dereceler farklıysa önce eşitlenir. √2 ve ∛3 için dereceler 2 ve 3; ortak derece 6." / "√2: derece 2'yi 6 yapmak için 3 ile genişlet. √2 = ⁶√(2³) = ⁶√8." / "∛3: derece 3'ü 6 yapmak için 2 ile genişlet. ∛3 = ⁶√(3²) = ⁶√9." / "Dereceler aynı oldu: √2 · ∛3 = ⁶√8 · ⁶√9 = ⁶√72."
  - Farklı dereceli kök konusu zorluk 2 soruya (s017) dayandığı için kitap katmanına taşınıp basit'te yalnız "çarpma-bölme aynı dereceyle" bırakılması da kabul edilebilir; karar ana ajanın.
- Önem: ORTA.

### P1-08 · ORTA · K1 b3: bölme kuralında "üstteki/alttaki" görünmeyen kesre gönderme yapıyor
- Dosya: `dersler/matematik/konular/matematik-u1-k1.json`
- JSON yolu: `bolumler[2].katmanlar.basit[1]`
- Alıntı: "Bölmede üsler çıkarılır. 2⁶ : 2² = 2⁴ olur. Yani üstteki iki tane 2, alttakilerle sadeleşir."
- Sorun: Ekranda bölme ":" ile yazılı; "üstteki" ve "alttaki" diye bir şey görünmüyor. Öğrenci cümleyi eşleyemez.
- ÖNERİLEN YENİ METİN: `basit[1]`: "Bölmede üsler çıkarılır. 2⁶ : 2² = 2⁶⁻² = 2⁴ olur." ve ardından yeni paragraf: "Neden? 2⁶ / 2² = (2 · 2 · 2 · 2 · 2 · 2) / (2 · 2). Alttaki iki 2, üstteki iki 2 ile sadeleşir; 4 tane 2 kalır."
- Önem: ORTA.

### P1-09 · ORTA · K4 b2: 7 terim, kontrol sorularının ikisi `basit`te yok
- Dosya: `dersler/matematik/konular/matematik-u1-k4.json`
- JSON yolu: `bolumler[1].katmanlar.kitap[0..5]`, `bolumler[1].terimler` (7 kayıt), `bolumler[1].kontrol_sorulari[0]` ve `[2]`
- Alıntı: kontrol: "7 + 0 kaçtır? Burada 0 hangi görevi yapıyor?" ; "5 sayısının toplamaya göre tersi nedir?"
- Sorun: `basit` yalnız dağılma özelliğini ve cebirsel ifadeyi anlatıyor. Birim, ters ve yutan eleman ile değişme/birleşme yalnız `kitap` katmanında, tek örneksiz paragraflar halinde. İlk ve üçüncü kontrol sorusu `basit`te olmayan kavramı soruyor. 5 dakikada 7 terim.
- ÖNERİLEN YENİ METİN: Bölümü ikiye ayır.
  - b2 "Dağılma özelliği" (mevcut `ornek`, `basit[0..2]`, kontrol Q2 "4 · (10 + 3)", yazılı 25 · 47 + 25 · 53). `terimler`: dağılma özelliği, cebirsel ifade.
  - Yeni b3 "0 ve 1'in özel görevleri", `ornek`: {"baglam": "market", "metin": "Gölcük çarşısında cüzdanında 7 TL var. Üstüne 0 TL eklersen yine 7 TL olur. 1 tane 7 TL'lik simit alırsan 1 · 7 = 7 TL ödersin."}
    - `basit[0]`: "Toplamada 0 sayıyı değiştirmez: 7 + 0 = 7. Çarpmada 1 sayıyı değiştirmez: 7 · 1 = 7. Bu sayılara **birim eleman** denir."
    - `basit[1]`: "Toplayınca 0 veren sayıya **ters eleman** denir. 7'nin toplamaya göre tersi −7'dir, çünkü 7 + (−7) = 0."
    - `basit[2]`: "Çarpmada 0 her sayıyı yutar: 7 · 0 = 0. Bu yüzden 0'a çarpmanın **yutan elemanı** denir."
    - `terimler`: birim eleman, ters eleman, yutan eleman. Kontrol sorusu 1 ve 3 buraya taşınır (7 + 0; 5'in toplamaya göre tersi), 3. ipuçları P1-17'deki gibi düzeltilir.
  - Değişme ve birleşme özellikleri yazılıda sorulmuyor; `kitap` katmanında tek paragrafa indirilebilir (ya da DOĞRULA: 9.1.4 çıktısından teyit).
- Önem: ORTA.

### P1-10 · ORTA · K4 b3: "değili" cümlesi eksik, ispat hazırlıksız
- Dosya: `dersler/matematik/konular/matematik-u1-k4.json`
- JSON yolu: `bolumler[2].katmanlar.basit[2]`, `bolumler[2].katmanlar.yazilida`, `bolumler[2].baslik`
- Alıntı: basit[2]: "Yani 'her'in değili 'bazı'dır." ; yazılı: "'Her çift doğal sayının karesi çift sayıdır.' önermesinin cebirsel ispatını yapınız."
- Sorun: (1) "'her'in değili 'bazı'dır" eksik: değil alınırken niceleyici ve yüklem birlikte değişir. Bu cümle soru s006'daki hatayı (∃x, x + 0 = x) kendisi üretir. (2) Yazılı soru, `basit`te hiç öğretilmeyen harfle ispat (x = 2a) ister; ispat yalnız `kitap[3]`'te bir cümle. Somut sayıyla başlayan örnek yok. (3) Başlık "Her, bazı, ve, veya" ama `basit`te ve/veya yok.
- ÖNERİLEN YENİ METİN:
  - `basit[2]`: "'Her oyuncu gol attı' yanlışsa ne doğrudur? En az bir oyuncu gol atmamıştır. Değil alırken iki şey değişir: 'her' yerine 'bazı' gelir ve 'attı' yerine 'atmadı' gelir."
  - `baslik`: "Her, bazı ve ispat" (ve/veya `kitap`ta kalır).
  - Yeni bölüm "Harfle ispat" (sure_dk 5), `ornek`: {"baglam": "futbol", "metin": "Takımda çift numaralı formalar var: 2, 4, 6, 8. İki çift numaranın toplamı: 4 + 6 = 10, 2 + 8 = 10. İkisi de çift çıktı. Hep böyle mi? Harfle gösterelim."}
    - `basit[0]`: "Birkaç sayı denemek **ispat** değildir. İspat, her durumda doğru olduğunu harfle göstermektir."
    - `basit[1]`: "Çift sayı 2'nin katıdır. Herhangi bir çift sayıyı 2a diye yazarız (a bir doğal sayı)."
    - `basit[2]`: "(2a)² = 4a² = 2 · (2a²). Bu 2'nin katıdır, yani çift. Demek ki her çift sayının karesi çifttir."
    - Yazılı ornek_soru buradaki bölüme taşınır; `ispat` terimi de.
- Önem: ORTA.

### P1-11 · ORTA · K4 b4 ve b5: özdeşlik kalıpları somut gösterilmiyor, bir cümle 22 kelime
- Dosya: `dersler/matematik/konular/matematik-u1-k4.json`
- JSON yolu: `bolumler[3].katmanlar.kitap[3]`, `bolumler[3].katmanlar.basit`, `bolumler[4].katmanlar.basit[1]`
- Alıntı: kitap[3]: "Farkın karesi için kenarı a olan kare dört parçaya ayrılır: (a − b)² kare, iki tane b · (a − b) dikdörtgen ve b² kare." (22 kelime) ; b5 basit[1]: "İki karenin farkı kalıbı işi kolaylaştırır: (12,5 − 7,5) · (12,5 + 7,5) = 5 · 20 = 100 m²."
- Sorun: (1) 22 kelimelik cümle ve zor bir geometri tarifi. (2) a² − b² = (a − b)(a + b) hiçbir `basit` paragrafta gösterilmedi; b5 örneği kalıbı "sihirli" kullanıyor. b4'teki kontrol sorusu 2 (25 − x²) de bu kalıba dayanıyor. (3) (a − b)² için sayısal örnek yok.
- ÖNERİLEN YENİ METİN:
  - b4 `kitap[3]`: "Farkın karesini sayıyla deneyelim. (10 − 3)² = 7² = 49. Açılımla 10² − 2 · 10 · 3 + 3² = 100 − 60 + 9 = 49 çıkar."
  - b4 `basit` sonuna yeni paragraf: "7² − 3² = 49 − 9 = 40. (7 − 3) · (7 + 3) = 4 · 10 = 40. İkisi eşit: a² − b² = (a − b) · (a + b)."
  - b5 `basit[1]` böylece "Yukarıdaki kalıbı kullanırız" diye bağlanır: "Yukarıdaki kalıbı kullanalım: (12,5 − 7,5) · (12,5 + 7,5) = 5 · 20 = 100 m²."
- Önem: ORTA.

### P1-12 · ORTA · K4 b6: örnek `basit`te çözülmüyor, yazılı soruda hangi kartın hangi kenarı belirsiz
- Dosya: `dersler/matematik/konular/matematik-u1-k4.json`
- JSON yolu: `bolumler[5].katmanlar.basit[0..2]`, `bolumler[5].katmanlar.yazilida.ornek_soru`
- Alıntı: ornek: "Mavi bez x m'ye 6 m dikdörtgen, sarı bez x m'ye x m kare. Mavi bezin alanı sarıdan 9 m² fazla." ; ornek_soru: "Kısa kenarları x cm, uzun kenarları 16 cm ve 2x cm olan dikdörtgen biçiminde mavi ve sarı iki kart var."
- Sorun: (1) Örnek (yelken bezi) `basit` katmanında hiç çözülmüyor; çözüm yalnız `kitap[1..2]`'de. Öğrenci kurala ulaşıyor ama örnekle bağ kuramıyor. (2) Yazılı soruda hangi kartın 16 cm, hangisinin 2x cm olduğu yazılı değil; çözüm mavi = x·16, sarı = x·2x varsayıyor. Soru okunduğu gibi çözülemez.
- ÖNERİLEN YENİ METİN:
  - `basit[3]` (ve `basit[4]`, `basit[5]` olarak bölünür): "Örneğe dönelim. Mavi bezin alanı 6x, sarı bezin alanı x². Mavi 9 m² fazla: 6x = x² + 9." / "Her şeyi bir tarafa alalım: x² − 6x + 9 = 0. Bu (x − 3)² demektir, yani (x − 3) · (x − 3) = 0." / "Çarpım sıfırsa çarpanlardan biri sıfırdır: x − 3 = 0, yani x = 3 m."
  - `ornek_soru`: "Mavi kartın kenarları x cm ve 16 cm, sarı kartın kenarları x cm ve 2x cm'dir. Mavi kartın alanı sarı kartın alanından 32 cm² fazla olduğuna göre x'i işlemlerinizi göstererek bulunuz."
- Önem: ORTA.

### P1-13 · ORTA · K4 b1: "değil" kavramı yalnız kitap katmanında, kontrol sorusu ve yazılı onu istiyor
- Dosya: `dersler/matematik/konular/matematik-u1-k4.json`
- JSON yolu: `bolumler[0].katmanlar.basit[0..2]`, `bolumler[0].katmanlar.kitap[1..2]`, `bolumler[0].kontrol_sorulari[1]`
- Alıntı: kontrol: "'8 > 2' önermesinin değilini yazınız." ; kitap[1]: "Bir önermenin hükmünü tersine çevirince onun **değil**i elde edilir."
- Sorun: `basit` yalnız "önerme"yi öğretiyor; "değil" ve >/≤ eşleşmesi yok. Kontrol sorusu 2 ve yazılı kalıp tamamen değil üzerine.
- ÖNERİLEN YENİ METİN: `basit` sonuna: "Bir önermenin hükmünü tersine çevirince onun **değili** olur. Yani '7 > 3' doğru, değili '7 ≤ 3' yanlıştır. İşaretlerin değili: > için ≤, < için ≥, = için ≠." ; `kitap[1]`'deki kalın işaret kaldırılır (terim `basit`te tanımlandı).
- Önem: ORTA.

### P1-14 · ORTA · K3 b3: ispat, hipotez, hüküm yükü; hiçbir soru istemiyor
- Dosya: `dersler/matematik/konular/matematik-u1-k3.json`
- JSON yolu: `bolumler[2].katmanlar.kitap[2]`, `kitap[3]`, `bolumler[2].terimler` (önerme, ispat, hipotez, hüküm)
- Alıntı: "İki sayının ortalaması, küçükten büyük ve büyükten küçüktür." ; "İspatta verilen kısım **hipotez**, ulaşılmak istenen sonuç **hüküm** olarak adlandırılır."
- Sorun: 5 dakikalık bölümde 6 terim; hipotez ve hüküm ne kontrol sorusunda, ne yazılıda, ne bankada geçiyor. "küçükten büyük ve büyükten küçüktür" okunması zor. "önerme" üçüncü kez (K1 b3, K3 b3, K4 b1) kalın tanımlanıyor.
- ÖNERİLEN YENİ METİN:
  - `kitap[2]`: "Kitap bunu **ispat** eder: iki sayının ortalaması, küçük sayıdan büyük, büyük sayıdan küçüktür."
  - `kitap[3]` silinir; `terimler`'den önerme, hipotez, hüküm çıkarılır (ispat kalır, tanımı P1-28'deki gibi K4 ile aynı yapılır).
  - DOĞRULA: hipotez/hüküm sınavda sorulmuyorsa çıkarılabilir; kitap s.62'den teyit.
- Önem: ORTA.

### P1-15 · ORTA · K3 b4 ve flashcard: "bölmede kapalı küme yok" nedensiz
- Dosya: `dersler/matematik/konular/matematik-u1-k3.json`
- JSON yolu: `bolumler[3].katmanlar.kitap[2]`, `flashcard[4].arka`
- Alıntı: "Tabloda bölme işlemine göre kapalı olan küme yoktur. Örneğin 1 ∈ Z ve 2 ∈ Z, ama 1/2 ∉ Z." ; "Kitabın tablosunda bölmeye göre kapalı küme yok."
- Sorun: Örnek yalnız Z için. Öğrenci "Q ve R de bölmede kapalı değil" bilgisini nedensiz ezberler; 3/4 ÷ 5/7 de rasyonel, bu yüzden yanlış kavram kurar. Neden: 0'a bölünemez. Kartın `dogrula` kaydı da bunu açık sorunuyor.
- ÖNERİLEN YENİ METİN: `kitap[2]`: "Tabloda bölme işlemine göre kapalı olan küme yoktur. Z'de 1 ÷ 2 = 1/2 ∉ Z. Q ve R'de ise 0'a bölünemez: 3 ÷ 0 tanımsızdır." ; `flashcard[4].arka`: "Toplama, çıkarma ve çarpma. Bölmede 0'a bölme tanımsız olduğu için hiçbiri kapalı sayılmaz." (DOĞRULA: öğretmenin bu ifadeyi kabul ettiği teyit edilmeli.)
- Önem: ORTA.

### P1-16 · ORTA · Kontrol sorularında 3. ipucu cevabı veriyor (K1 ve K2, 14 soru)
- Dosya: `dersler/matematik/konular/matematik-u1-k1.json` ve `matematik-u1-k2.json`
- Kural: 3. basamak ilk adımı yapar; cevabın kendisi değildir. Aşağıdakilerde son basamak cevabı yazıyor ya da öğrenciye yalnız "oku ve yaz" bırakıyor. (K1 b1 Q1 için P1-01.)
- Önerilen yeni 3. basamaklar (hepsi `ipuclari[2]`):
  - K1 `bolumler[3].kontrol_sorulari[0]` (√25). Mevcut: "5 · 5 = ..." Yeni: "1 · 1, 2 · 2, 3 · 3, 4 · 4 diye dene; 25'e ulaşınca dur."
  - K1 `bolumler[3].kontrol_sorulari[1]` (∛27). Mevcut: "3 · 3 · 3 = ..." Yeni: "2 · 2 · 2 = 8 oldu, 27'den küçük. Bir sonraki sayıyı dene."
  - K1 `bolumler[3].kontrol_sorulari[2]` (7¹⁄²). Mevcut: "Pay 1 olduğundan içeride 7¹ = 7 kalır." Yeni: "Payda kökün derecesini, pay 7'nin üssünü söyler. İkisini yerine yaz."
  - K1 `bolumler[4].kontrol_sorulari[0]` (√12). Mevcut: "√4 = 2 dışarı çıkar, 3 içeride kalır." Yeni: "√(4 · 3) = √4 · √3 yaz. √4 kaçtır?"
  - K1 `bolumler[5].kontrol_sorulari[0]` (eşlenik). Mevcut: "− işaretini + yap." Yeni: "Önce √6 ve √2'yi aynen yaz. Aralarına hangi işaret gelir?"
  - K1 `bolumler[5].kontrol_sorulari[1]` ((√3 − 1)(√3 + 1)). Mevcut: "(√3)² = 3 ve 1² = 1, öyleyse 3 − 1 = ..." Yeni: "(√3)² kaç, 1² kaç? İkisini bul; sonra birincinin karesinden ikincinin karesini çıkar."
  - K2 `bolumler[1].kontrol_sorulari[1]` (10 var mı). Mevcut: "( işareti 10'u dışarıda bırakır." Yeni: "10'un yanındaki ( işareti 10'u içeri mi alır, dışarıda mı bırakır?"
  - K2 `bolumler[2].kontrol_sorulari[0]` (x > 7). Mevcut: "Sol uç (7, diye başlar; sağ uç ∞ olur." Yeni: "7 dâhil mi? 7'nin yanına hangi parantez gelir? Sağ uca hangi sembol yazılır? İkisini yan yana yaz."
  - K2 `bolumler[2].kontrol_sorulari[1]` ((−∞, 3]). Mevcut: "] işareti 3'ü içeri alır." Yeni: "3'ün yanında ] mi, ) mi var? Köşeli parantezin ne dediğini hatırla."
  - K2 `bolumler[3].kontrol_sorulari[0]` (A ∩ B). Mevcut: "B 4'ten başlıyor, A 6'da bitiyor; üst üste gelen yer nerede?" Yeni: "İki aralığı çiz. Sol uçlardan hangisi daha sağda? Sağ uçlardan hangisi daha solda? Ortak parça bu ikisinin arasıdır."
  - K2 `bolumler[3].kontrol_sorulari[1]` (A ∪ B). Mevcut: "En sol 2, en sağ ise 9." Yeni: "İki aralığın sol uçlarına bak, hangisi daha solda? Sağ uçlara bak, hangisi daha sağda? Birleşim ikisini kapsar."
  - K2 `bolumler[3].kontrol_sorulari[2]` (A \ B). Mevcut: "2'den başla, 4'e kadar git; 4 çıkarıldığı için o uca normal parantez koy." Yeni: "A'nın B ile çakışan kısmını sil. Silinen kısım hangi sayıdan başlıyor? O sayının yanına hangi parantez gelir?"
  - K2 `bolumler[4].kontrol_sorulari[2]` (lastik basıncı). `ipuclari[1]` orta noktayı veriyor, `[2]` uzaklığı veriyor. Yeni `[1]`: "Önce orta noktayı bul: iki ucu topla, 2'ye böl." Yeni `[2]`: "Uçlardan birinden orta noktayı çıkar; bu uzaklıktır. Sonra |x − orta nokta| ≤ uzaklık yaz."
- Önem: ORTA.

### P1-17 · ORTA · Kontrol sorularında 3. ipucu cevabı veriyor (K3 ve K4, 15 soru)
- Dosya: `dersler/matematik/konular/matematik-u1-k3.json` ve `matematik-u1-k4.json`
- Önerilen yeni 3. basamaklar (hepsi `ipuclari[2]`, aksi belirtilmedikçe):
  - K3 `bolumler[0].kontrol_sorulari[0]` (gemi sayısı). Mevcut: "6 gemi: 6 sayma sayısıdır, kümesinin harfi N." Yeni: "Gemiler sayılıyor. Sayma sayılarının kümesini N, Z, Q, R arasından seç."
  - K3 `bolumler[0].kontrol_sorulari[1]` (−8). Mevcut: "Eksi sayıları da içeren küme tam sayılardır." Yeni: "N'de eksi sayı var mı? Yoksa eksi sayıları da içeren küme hangisi?"
  - K3 `bolumler[1].kontrol_sorulari[0]` (Can, Emre). Mevcut: "4,6 < 4,9; küçük süre Can'ın." Yeni: "4,6 ile 4,9'dan hangisi küçük? Küçük süre kimin?"
  - K3 `bolumler[2].kontrol_sorulari[0]` (4 ile 5). Mevcut: "4'ten hemen sonra 5 gelir, araya doğal sayı girmez." Yeni: "4 ile 5'in arasına yazabileceğin bir sayı bul. O sayı doğal sayı mı?"
  - K3 `bolumler[3].kontrol_sorulari[0]` (6 · 9). Mevcut: "6 · 9 = 54; 54 sayma sayısıdır." Yeni: "6 · 9'u hesapla. Sonuç eksi ya da kesirli mi?"
  - K3 `bolumler[3].kontrol_sorulari[1]` (Z çıkarma). Mevcut: "2 - 7 = -5 ve -5 ∈ Z." Yeni: "2 − 7'yi hesapla. Çıkan sayı Z'de var mı?"
  - K3 `bolumler[4].kontrol_sorulari[1]` (kaç karşıt örnek). Mevcut: "Tek bir rüzgârsız gün yetiyordu." Yeni: "Rüzgârsız gün örneğinde 'her gün rüzgâr eser' sözünü kaç gün bozdu?"
  - K4 `bolumler[0].kontrol_sorulari[0]` (5 + 4 = 10). Mevcut: "5 + 4 = 9, 10 değil. Kesin karar var, öyleyse önerme." Yeni: "5 + 4 kaç eder? Bu cümle için 'doğru' ya da 'yanlış' diye kesin karar verebiliyor musun?"
  - K4 `bolumler[0].kontrol_sorulari[1]` (8 > 2). Mevcut: "8 > 2 → 8 ≤ 2 yaz." Yeni: "> işaretinin değilini bul ve 8 ile 2'nin arasına yaz."
  - K4 `bolumler[1].kontrol_sorulari[0]` (7 + 0). Mevcut: "7 + 0 = 7, sayı aynı kaldı." Yeni: "7 + 0'ı hesapla. Sayı değişti mi? Sayıyı değiştirmeyen elemana ne denir?"
  - K4 `bolumler[1].kontrol_sorulari[2]` (5'in tersi). Mevcut: "5 + (−5) = 0." Yeni: "5 + (...) = 0 olacak şekilde boşluğu doldur."
  - K4 `bolumler[2].kontrol_sorulari[0]` (∀). Mevcut: "Geriye kalan ∀, 'her' anlamına gelir." Yeni: "∃ 'bazı' ise, ∀ hangi kelimenin sembolü olabilir?"
  - K4 `bolumler[2].kontrol_sorulari[1]` ('her' değili). `ipuclari[1]` tüm dönüşümü veriyor. Yeni `[1]`: "Değil alırken iki şey değişir: niceleyici ve 'attı'." Yeni `[2]`: "Önce 'her' yerine ne geleceğini yaz. Sonra 'attı'nın olumsuzunu yaz."
  - K4 `bolumler[3].kontrol_sorulari[1]` (25 − x²). Mevcut: "a = 5, b = x: (a − b)(a + b) yaz." Yeni: "25 = a² ve x² = b² olacak şekilde a ve b'yi bul. Sonra (a − b)(a + b) kalıbına yerleştir."
  - K4 `bolumler[3].kontrol_sorulari[2]` (13²). Mevcut: "10² = 100, 2 · 10 · 3 = 60, 3² = 9; topla." Yeni: "a² = 10², 2ab = 2 · 10 · 3 ve b² = 3² değerlerini ayrı ayrı bul. Üçünü topla."
- Önem: ORTA.

### P1-18 · ORTA · Kontrol sorusu "hepsi zorluk 1" ihlali (3 soru)
- Dosya: `matematik-u1-k1.json` (kart), `matematik-u1-k4.json` (kart)
- JSON yolu: K1 `bolumler[4].kontrol_sorulari[2]` ; K4 `bolumler[3].kontrol_sorulari[1]` (kısmen) ve `bolumler[5].kontrol_sorulari[1]`
- Alıntı: K1: "3√2 · 5√2 işleminin sonucu nedir?" (iki ayrı işlem: katsayı çarpımı ve √2 · √2) ; K4 b6: "x² − 8x + 16 ifadesini bir ifadenin karesi olarak yazınız." (kalıp tanıma, orta düzey)
- Sorun: Kolay olması gereken, 5 dakikalık anlatımdan sonra gelen soru çok adımlı veya kalıp tanımayı gerektiriyor. Öğrenci hemen sonra başarısızlık yaşar.
- ÖNERİLEN YENİ METİN:
  - K1 `bolumler[4].kontrol_sorulari[2]` yerine: soru "√3 · √3 kaçtır?", cevap "3", ipuclari ["Aynı iki kökü çarpıyoruz.", "Çarpmada kök içleri çarpılır: √3 · √3 = √(3 · 3).", "3 · 3 = 9 ve √9 = ..."], yanlis_aciklama "√3 · √3 sonucu √3 değil 3'tür; aynı karekökler çarpılınca kök kalkar."
  - K4 `bolumler[5].kontrol_sorulari[1]` yerine: soru "x · (x − 7) = 0 ise x hangi değerleri alabilir?", cevap "x = 0 veya x = 7", ipuclari ["Çarpım sıfırsa çarpanlardan biri sıfırdır.", "x = 0 ve x − 7 = 0 denklemlerini ayrı yaz.", "x − 7 = 0 → her iki tarafa 7 ekle."], yanlis_aciklama "Çarpanlardan biri x'in kendisidir; x = 0 da bir çözümdür."
  - K4 b4 (25 − x²) sorusu P1-11'deki yeni `basit` paragrafıyla desteklendiği için yerinde kalır (3. ipucu P1-17'de düzeltildi).
- Önem: ORTA.

### P1-19 · ORTA · Kesirli üs yazımı okunaksız ve yanlış okunabilir
- Dosya: `matematik-u1-k1.json` (kart), `sorular/matematik-u1-k1.json`
- JSON yolu: kart `bolumler[3].katmanlar.basit[2]`, `bolumler[3].kontrol_sorulari[2].soru`, `flashcard[5]`; banka `sorular[id=matematik-u1-k1-s012].secenekler`, `sorular[id=matematik-u1-k1-s013].kok`
- Alıntı: "8²⁄³", "7¹⁄²", seçenekler: "7⁴⁄³", "7³⁄⁴" (doğru), "7³ / 4"
- Sorun: Üst simge ve kesir çizgisiyle (²⁄³) yazı küçük ve zor seçilir. s012'de "7³⁄⁴" (doğru) ile "7³ / 4" (çeldirici) yazıda neredeyse aynı; okuma zorluğu olan öğrenci içeriği değil yazımı ayırt etmeye çalışır. Kartın `dogrula` kaydı panelde okunurluğu zaten sorguluyor.
- ÖNERİLEN YENİ METİN: Panelde test edilir; okunaksızsa kesirli üsler `^(m/n)` biçiminde yazılır: "8^(2/3)", "7^(1/2)", "27^(2/3) = ______", seçenekler "7^(4/3)", "7^(3/4)", "7^(3/4 ÷ ...)" yerine "7^3 : 4" (çeldirici "7³ ÷ 4"). Aynı yazım kart, flashcard ve bankada tutarlı kullanılır.
- Önem: ORTA.

### P1-20 · ORTA · K2 bankası: 3 soruda `yanlis_aciklama` yok
- Dosya: `dersler/matematik/sorular/matematik-u1-k2.json`
- JSON yolu: `sorular[id=matematik-u1-k2-s002]`, `sorular[id=matematik-u1-k2-s004]`, `sorular[id=matematik-u1-k2-s009]`
- Alıntı: s002 (dogru_yanlis, cevap false), s004 ve s009 (bosluk): alan yok. Diğer bankalarda aynı tipler bu alanı taşıyor.
- Sorun: Yanlış cevapta öğrencinin göreceği tek cümlelik, suçlamasız neden eksik; panel boşluk gösterir ya da çözüm adımlarını döker.
- ÖNERİLEN YENİ METİN:
  - s002 `yanlis_aciklama`: "∞ bir sayı olmadığı için yanına köşeli parantez konmaz; doğrusu [60, ∞) olur."
  - s004 `yanlis_aciklama`: "≤ olan uçta köşeli, < olan uçta normal parantez kullanılır; −3 dâhil, 7 dâhil değil."
  - s009 `yanlis_aciklama`: "6'dan 2 sola ve 2 sağa gidilir: 4 ve 8; < olduğu için uçlar dâhil değil, parantez normal olur."
- Önem: ORTA.

### P1-21 · ORTA · K4 s003: doğru şık öne çıkıyor, zorluk 1 bağlam 3 cümle
- Dosya: `dersler/matematik/sorular/matematik-u1-k4.json`
- JSON yolu: `sorular[id=matematik-u1-k4-s003].baglam`, `.secenekler`, `.cevap`
- Alıntı: doğru şık "Çarpmanın toplama üzerine dağılma özelliği" (6 kelime); diğerleri "Toplamanın değişme özelliği", "Çarpmanın birleşme özelliği", "Çarpmanın birim eleman özelliği" (3–4 kelime). Bağlam: 3 cümle.
- Sorun: Kural 14 (doğru şık uzunlukta öne çıkmaz) ve "zorluk 1: bağlam ≤ 2 cümle" ihlali. En uzun şıkkı seçen öğrenci içeriği bilmeden doğruyu bulur.
- ÖNERİLEN YENİ METİN:
  - `baglam`: "Gölcük çarşısında simit 15 TL, ayran 20 TL; üç arkadaş birer simit ve birer ayran alıyor. Kasiyer 3 · (15 + 20), Mehmet 3 · 15 + 3 · 20 hesaplıyor ve ikisi de 105 TL buluyor."
  - `secenekler` (dört şık da 3 kelime): "Çarpmanın dağılma özelliği" (doğru), "Toplamanın dağılma özelliği" (hata_turu kavram_karisikligi, aciklama "Burada çarpma toplamanın üzerine dağıtılıyor; dağılma özelliği çarpmaya aittir."), "Çarpmanın birleşme özelliği" (aciklama kalır), "Toplamanın değişme özelliği" (aciklama kalır).
  - `cevap`: "Çarpmanın dağılma özelliği". "Çarpmanın birim eleman özelliği" şıkkı çıkar.
- Önem: ORTA.

### P1-22 · ORTA · K3 s007: ipucu yanlış bir mantık öğretiyor
- Dosya: `dersler/matematik/sorular/matematik-u1-k3.json`
- JSON yolu: `sorular[id=matematik-u1-k3-s007].ipuclari[1]`
- Alıntı: "Karşıt örnek bulabildiğin önerme yanlıştır; bulamadığın önerme doğru olandır."
- Sorun: Karşıt örnek bulamamak önermenin doğru olduğunu göstermez. Bu bölümün tam tersini öğreten ifade ("tek örnekle ispat" hatası). Bu soruda tek doğru şık olduğundan eleme çalışır, ama genel kural gibi yazılmış.
- ÖNERİLEN YENİ METİN: `ipuclari[1]`: "N için 5 − 9, Z için 1 ÷ 2, irrasyonel sayılar için √2 · √2 dene. Karşıt örnek bulduğun önerme yanlıştır." ; `ipuclari[2]`: "Üç önermede karşıt örnek bulursan geriye kalan, soruda doğru olan tek önermedir." ; `ipuclari[0]` aynı kalır.
- Önem: ORTA.

### P1-23 · ORTA · K4 s011: bağlamda 29 kelimelik cümle
- Dosya: `dersler/matematik/sorular/matematik-u1-k4.json`
- JSON yolu: `sorular[id=matematik-u1-k4-s011].baglam`
- Alıntı: "Yeni saha; bir kenarı x m olan kare, kenarları x m ve 2 m olan iki dikdörtgen ve bir kenarı 2 m olan kare olmak üzere dört parçaya ayrılıyor." (29 kelime)
- Sorun: Eşik 20; cümle noktalı virgül ve virgülle dolu, bilişsel yük soru (a)'nın cevabını da gösteriyor.
- ÖNERİLEN YENİ METİN: `baglam` son cümlesi yerine: "Yeni saha dört parçaya ayrılıyor.\n1. Kenarı x m olan kare.\n2. Kenarları x m ve 2 m olan iki dikdörtgen.\n3. Kenarı 2 m olan kare."
- Önem: ORTA.

### P1-24 · ORTA · K1 s020: 3. ipucu cevabı yazıyor
- Dosya: `dersler/matematik/sorular/matematik-u1-k1.json`
- JSON yolu: `sorular[id=matematik-u1-k1-s020].ipuclari[2]`
- Alıntı: "Aradaki + işaretini − yap."
- Sorun: Cevap (√11 − √5) cümlenin kendisi.
- ÖNERİLEN YENİ METİN: `ipuclari[2]`: "Önce √11 ve √5'i aynen yaz. Aralarına hangi işaret gelir?"
- Önem: ORTA.

---

## DÜŞÜK bulgular

### P1-25 · DÜŞÜK · `ornek.metin` 4 cümle (5 yer)
- Dosya, yol: K1 kart `bolumler[4].ornek.metin`, `bolumler[5].ornek.metin` (P1-02 ile değişiyor); K2 kart `bolumler[0].ornek.metin`; K4 kart `bolumler[0].ornek.metin`, `bolumler[1].ornek.metin`.
- Sorun: Paragraf ≤ 3 cümle kuralı; cümleler kısa olduğu için etkisi küçük.
- ÖNERİLEN YENİ METİN:
  - K1 b5: "Gölcük sahilinde kare biçimli iki çim alan var: birinin alanı 20 m², ötekinin 5 m². Kenarları √20 m ve √5 m olur. √20 = 2√5 olduğundan kenarların toplamı 2√5 + √5 = 3√5 m eder."
  - K2 b1 (P1-03 ile değişiyor): "Gölcük'te amatör bir takımın hocası iki grup kuruyor. A grubunda 1, 2, 3, 4, 5 numaralı formalar var; B grubunda 4, 5, 6, 8. 4 ve 5 numaralı oyuncular iki grupta da çalışıyor."
  - K4 b1: "Ali 'Gölcük, Kocaeli'nin bir ilçesidir.' diyor; bu cümle kesin doğru. Ayşe 'Gölcük sahili en güzel sahildir.' diyor; bu ise kişiye göre değişir."
  - K4 b2: "Gölcük çarşısında simit 15 TL, ayran 20 TL olsun. Sen ve iki arkadaşın birer simit ve birer ayran alıyorsunuz. Hesap: 3 · (15 + 20) = 105 TL; ayrı ayrı hesaplasan 3 · 15 + 3 · 20 = 45 + 60 = 105 TL."
- Önem: DÜŞÜK.

### P1-26 · DÜŞÜK · 20 kelimeyi aşan iki soru cümlesi
- Dosya, yol: `sorular/matematik-u1-k1.json` → `sorular[id=...-s009].baglam` (21 kelime); K2 kart `bolumler[3].katmanlar.yazilida.ornek_soru` (21 kelime, birimler ayrı sayılırsa).
- ÖNERİLEN YENİ METİN:
  - s009 `baglam`: "Deniz, xᵃ · xᵇ = xᵃ⁺ᵇ önermesini x = 2, a = 3, b = 4 için deniyor. 2³ · 2⁴ = 8 · 16 = 128 ve 2⁷ = 128 çıkıyor. Bu tek denemeye bakarak önermenin her sayı için doğrulandığını söylüyor."
  - K2 b4 `ornek_soru`: "Tersanede K boyası 5 °C ile 35 °C, L boyası 10 °C ile 40 °C arasında sürülebiliyor (uçlar dâhil). K boyasının sıcaklık aralığı A, L boyasınınki B kümesiyle gösteriliyor. A ∩ B kümesini aralık gösterimi ile yazınız."
- Önem: DÜŞÜK.

### P1-27 · DÜŞÜK · K2 s011: zorluk 1 etiketi, işi 3 gösterim
- Dosya: `sorular/matematik-u1-k2.json`, `sorular[id=...-s011].zorluk`
- Sorun: Zorluk 1 "tek adım" olmalı; bu soru 3 ayrı gösterimi (cebirsel, aralık, küme) ister ve 10 puan. Benzer: K1 s013 ve s015 (iki adım), K2 s003 (iki iddia). Dağılım değişse de aralıkta kalır.
- ÖNERİLEN YENİ METİN: K2 s011 `zorluk`: 2. Toplam dağılım 31/24/9 = %48,4/37,5/14,1 (eşik içinde). K1 s013, s015 ve K2 s003'te değişiklik gerekmiyor; ipucu merdiveni zaten adımları veriyor.
- Önem: DÜŞÜK.

### P1-28 · DÜŞÜK · Aynı terimin kartlar arasında farklı tanımı
- Dosya, yol: önerme: K1 `bolumler[2].terimler[0]` ("kural cümlesi"), K3 `bolumler[2].terimler[2]`, K4 `bolumler[0].terimler[0]`; genelleme: K1 `bolumler[0].terimler[4]`, K3 `bolumler[1].terimler[2]`; mutlak değer: K2 `bolumler[4].terimler[0]`.
- Sorun: Aynı kelime üç kartta üç ayrı cümleyle tanımlı; K1'deki "kural cümlesi" yanlış yönlendirir; K3'ün "genelleme" tanımı ağır; K2'nin mutlak değer tanımı kime göre uzaklık olduğunu söylemiyor.
- ÖNERİLEN YENİ METİN:
  - önerme (üç kartta aynı): "Doğru mu yanlış mı olduğuna kesin karar verilebilen cümle."
  - genelleme (iki kartta aynı): "Birçok örnekte gördüğün ortak düzeni kural olarak yazmak."
  - K2 mutlak değer: "Bir sayının sayı doğrusunda 0'a uzaklığı; |x − 20|, x ile 20 arasındaki uzaklıktır."
  - ispat: "Bir önermenin her durumda doğru olduğunu adım adım göstermek." (K3 ve K4 aynı).
- Önem: DÜŞÜK.

### P1-29 · DÜŞÜK · Kitap katmanında kitaba gönderme ve yetim cümleler
- Dosya, yol: K1 `bolumler[0].katmanlar.kitap[2]`, `bolumler[1].katmanlar.kitap[1]` (son cümle), `bolumler[1].katmanlar.kitap[2]` (son cümle), `bolumler[2].katmanlar.kitap[1]`; K3 `bolumler[0].katmanlar.kitap[0]`.
- Alıntı: "Kitap bu kuralları tablo doldurtarak buldurur." ; "Tahminini tablodaki örneklerle karşılaştırıp kuralı böyle doğrularsın." ; "İki uzaklığı kıyaslarken kitap önce 10'un kuvvetlerini eşitler, sonra katsayılara bakar."
- Sorun: Kartta olmayan tabloya ve "uzaklık" örneğine gönderme; öğrenci için bilgi taşımıyor, dikkati dağıtıyor.
- ÖNERİLEN YENİ METİN:
  - K1 b1 `kitap[2]`: "Kuralı bulmak için önce sonucu tahmin edersin; buna **varsayım** denir. Sonra örneklerdeki ortak düzeni yazarsın; buna **genelleme** denir."
  - K1 b2 `kitap[1]`: son cümle silinir. `kitap[2]` son cümlesi: "Toplamadan önce 10'un kuvvetleri eşitlenir, sonra katsayılar toplanır."
  - K1 b3 `kitap[1]`: "Bu kuralların her birine **önerme** denir."
  - K3 b1 `kitap[0]`: ilk cümle silinir (çentik, Mısır, Babil bilgisi sınavda gerekmez); yalnız "1,4142 yaklaşık √2'dir" kalırsa yeter.
- Önem: DÜŞÜK.

### P1-30 · DÜŞÜK · K2 b2: sayı doğrusunda uç gösterimi ve "dâhil"
- Dosya: `dersler/matematik/konular/matematik-u1-k2.json`
- JSON yolu: `bolumler[1].katmanlar.basit[1]`, `basit[2]`; `bolumler[1].katmanlar.yazilida.ornek_cevap[3]`
- Alıntı: "Uç dâhilse o nokta işaretlenir, dâhil değilse işaretlenmez." ; "5 işaretlenmez, 30 işaretlenir."
- Sorun: Sayı doğrusunda dâhil olmayan uç genelde içi boş daireyle gösterilir; "işaretlenmez" çizimle uyuşmaz, sınavda puan kaybettirebilir. "dâhil" kelimesi hiç tanımlanmadı.
- ÖNERİLEN YENİ METİN: `basit[1]` ilk cümle: "Uç sayı aralığın içindeyse (dâhilse) köşeli parantez [ ] kullanırız." ; `basit[2]`: "Sayı doğrusunda 12 ile 21 arasını boyarız. Dâhil uçları içi dolu •, dâhil olmayan uçları içi boş ○ ile gösteririz." ; `ornek_cevap[3]`: "4. Sayı doğrusu: 5 ile 30 arası boyanır; 5 içi boş ○, 30 içi dolu • gösterilir." DOĞRULA: okulda/öğretmende kullanılan gösterim teyit edilmeli.
- Önem: DÜŞÜK.

### P1-31 · DÜŞÜK · Çözüm adımında iki işlem
- Dosya, yol ve düzeltme (örnekler):
  - K1 kart `bolumler[1].katmanlar.yazilida.ornek_cevap[3]`: "4. 3,2 · 10⁵ + 4,8 · 10⁵ = (3,2 + 4,8) · 10⁵ = 8 · 10⁵ olur." → "4. 10⁵ ortak çarpan: (3,2 + 4,8) · 10⁵." / "5. 3,2 + 4,8 = 8; toplam 8 · 10⁵ olur." / "6. 8 · 10⁵ = K · 10⁵ olduğundan K = 8 bulunur."
  - K1 kart `bolumler[4].katmanlar.yazilida.ornek_cevap[2]`: "3. Uzun kenar 5∛2 m'dir; 5 eş parçaya bölünce her parça 5∛2 : 5 = ∛2 m olur." → "3. Uzun kenar 5∛2 m'dir." / "4. 5 eş parçaya bölünce her parça 5∛2 : 5 = ∛2 m olur." (sonraki adımlar kayar).
  - K1 kart `bolumler[5].katmanlar.yazilida.ornek_cevap[2]` (P1-02'deki yeni b6'da kalıyorsa): "3. Payda (√7)² − (√3)² = 7 − 3 = 4 olur; ilk kesir (√7 + √3)/4 olur." → "3. Payda: (√7)² − (√3)² = 7 − 3 = 4." / "4. İlk kesir (√7 + √3)/4 olur."
  - K1 banka `sorular[id=...-s006].cozum_adimlari[4]`: ortak çarpan ve toplama tek satırda; ayrılır. `sorular[id=...-s018].cozum_adimlari[2]`: "Çevre = 2 · (6√3 + 3√3) = 2 · 9√3 = 18√3 m" iki adıma bölünür.
- Önem: DÜŞÜK.

### P1-32 · DÜŞÜK · Gösterim tutarsızlıkları
- Dosya, yol ve düzeltme:
  - R sembolü: K2 ve K3'te "R", K4'te "ℝ" (örn. `bolumler[0].katmanlar.yazilida`, bankalar). Panel yazı tipi ℝ'yi göstermeyebilir; tek biçim seç (öneri: R).
  - K3 kartında eksi işareti tire ile ("-8", "5 - 8 = -3"); K1, K2, K4'te "−". Tümü "−" yapılır (b1, b4, b5 ve `yazilida.ornek_cevap`).
  - K1 b6: `basit[2]` √3 ≈ 1,7 (daha yakın) ve `kitap[2]` "yaklaşık 1,75". İkisi aynı bölümde farklı değer veriyor. `kitap[2]`: "Kitap √3'ü aralığı adım adım daraltarak tahmin eder; sonuç 1,7 ile 1,8 arasında çıkar." (DOĞRULA: kitap s.34–35'teki değer.)
  - K1 `flashcard[0].arka`: "1. Örneğin 7⁰ = 1." numara gibi okunuyor → "1'dir. Örneğin 7⁰ = 1."
  - K1 `flashcard[4].arka`: "(işaretine bakılmadan)" belirsiz → "Eksi katsayılar için de: 1 ile 10 arasında, işaret önemsiz."
- Önem: DÜŞÜK.

### P1-33 · DÜŞÜK · K4 b3: "toplamada sıra değişebilir" ve başlık
- Dosya: `dersler/matematik/konular/matematik-u1-k4.json`
- JSON yolu: `bolumler[2].katmanlar.kitap[2]`
- Alıntı: "Sözle: her a ve b gerçek sayısı için toplamada sıra değişebilir."
- Sorun: "sıra değişebilir" sonucun değişebileceği gibi okunabilir.
- ÖNERİLEN YENİ METİN: "Sözle: her a ve b gerçek sayısı için toplamada sayıların sırası değişse de sonuç değişmez."
- Önem: DÜŞÜK.

---

## Kapsam dışı not (pedagoji değil, doğrulayıcıya)

- K3 bankası `hata_turu` sözlüğünde olmayan etiketler kullanıyor: `kume_kapsama`, `esitsizlik_yonu`, `tek_ornekle_ispat`, `irrasyonel_carpim`, `uyan_ornek_vermek`, `eksi_sayi_kume_disi`, `sembol_eksik`. Sözlüğe eklenmeli ya da mevcut etiketlere çevrilmeli.
- K3 kartında `surec` alanı bölüm kökünde, K2 kartında `kaynak` içinde; şema birliği için `tools/dogrula.py` sonucuna bakılmalı.

KARAR: DÜZELTİLMELİ (YÜKSEK 4, ORTA 20, DÜŞÜK 9)
