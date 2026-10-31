# Pedagoji denetimi: 9.3.1 parametrik üreteçler (mat-u3-*, 12 adet)

Tarih: 2026-10-31 · Denetçi: pedagoji-denetcisi · Salt okur, düzeltme yapılmadı.
Kapsam: `panel/motor/uretecler/matematik.js` satır 2507-3180 (tüm dalları okundu) + tohum 0-5 çıktıları (örnek dosyası, 72 kayıt; bölümler satır aralıklarıyla okundu, ilk 1080 satır + aci-kenar, esitsizlik-tamsayi, aralik-daraltma bölümleri tam, kalanı Grep ile tarandı).
Referans: kart `matematik-u3-k1.json` (s3), banka `sorular/matematik-u3-k1.json`, CLAUDE.md, tur3 raporu.

## KARAR: DÜZELTİLMELİ

Çeldirici dili, çözüm yapısı ve zorluk dağılımı sağlam. Anlamayı engelleyen 2 sorun (23 sözcüklük bağlam cümlesi, tanımsız "güverte") ve ipucu 3 sızıntısı var. Hepsi şablon düzeyinde, küçük düzeltmeyle kapanır.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Zorluk dağılımı (kayıt sayısı) | z1: 6, z2: 4, z3: 2 (%50 / %33 / %17) | 6/4/2 | GEÇER |
| Zorluk etiketi - içerik uyumu | 12/12 uyumlu (iki sınırda not: bulgu D-2) | uyumlu | GEÇER |
| Yerel bağlam oranı | beklenen ~%66 (bağlamsız şablon 1/3; aci-x 1/2). Tohum 0-5 örneğinde 41/72 = %57 bağlamlı | ≥ %50 | GEÇER |
| Bağlam cümlesi ≤ 20 kelime | 1 şablon 23 jeton (esitsizlik-tamsayi, iskele) | hiçbiri > 20 | DÜZELTİLMELİ |
| `kok` (bağlamsız) ≤ 20 jeton | 5 şablon 21-30 jeton, her biri 3 matematik ifadesi taşıyor | ≤ 20 | DÜZELTİLMELİ |
| Çeldirici açıklaması ≤ 20 kelime | en uzunu 16 kelime (jeton sayılırsa 18). Aşan yok | ≤ 20 | GEÇER |
| Azarlama / kişi ifadesi | yok ("oysa" 1 yerde hafif, bulgu D-5) | yok | GEÇER |
| Terim tutarlılığı | m(BAC), \|AB\|, bumba, doğru açı, kesişim, dâhil kartla aynı; "güverte" üreteçte tanımsız | tanımlı | DÜZELTİLMELİ |
| Yasak sözcük ("doğrusal", "sadeleştir", şapkasız "dahil") | 0 / 72 kayıt, kodda da yok | 0 | GEÇER |
| İpucu 1. basamak cevap vermiyor | 12/12 | 12/12 | GEÇER (not: O-3) |
| İpucu 3. basamak yalnız ilk adım | 9/12 uygun; 3 şablonda fazlasını yapıyor | 12/12 | DÜZELTİLMELİ |
| Çözüm: numaralı, adım başına tek işlem | 12/12 numaralı; 5 şablonda bir adımda 2-3 işlem | tek işlem | DÜZELTİLMELİ |
| Son satır "Kontrol:" | 12/12 | 12/12 | GEÇER |
| Paragraf ≤ 3 cümle | bağlam 3 bilgi cümlesi + "(Sayılar kurgusaldır.)" = 4 (bankayla aynı kalıp) | ≤ 3 | NOT (D-6) |

## Bulgular

### YÜKSEK

**Y-1. `mat-u3-esitsizlik-tamsayi` (TAM_BAGLAM[1], iskele-şamandıra-fener): tek cümle 23 jeton.**
Kod satır 2884. Üretilen cümle:
"İskele ile şamandıra arası 9 km, iskele ile fener arası 10 km, şamandıra ile fener arası x km ve x bir tam sayı."
Sayı ve birim çıkarılsa bile 17-18 sözcük, jetonla 23. Üç "arası" öbeği tek nefeste; Mehmet Eren hangi ikisinin bilindiğini kaçırır. Bağlamda üç ayrı cümle kurulabilir.
Öneri:
"Gölcük açıklarında bir iskele, bir şamandıra ve bir fener üçgen oluşturuyor. İskele ile şamandıra arası 9 km. İskele ile fener arası 10 km. Şamandıra ile fener arası x km ve x bir tam sayı."
(Aynı şablonda 4. cümle olur; "(Sayılar kurgusaldır.)" ile 5. Bu yüzden "iki bilinen uzaklığı" tek cümlede ver: "İskele ile şamandıra arası 9 km, iskele ile fener arası 10 km. Şamandıra ile fener arası x km; x bir tam sayı.")

**Y-2. `mat-u3-ic-aci` (yelken dalı, satır 2597): "güverte" tanımsız.**
Üretilen: "Gölcük'te bir yelkenlinin direği güverteye dik duruyor. Direk, bumba (yelkenin altındaki yatay çubuk) ve halat..."
"bumba" parantezle tanımlı, "güverte" değil. Kartta "güverteye (teknenin üst döşemesi)" diye tanımlı. Soru tüm bilginin "güverteye dik" ifadesinden 90° çıkarmasına dayanıyor; terim bilinmezse soru çözülemez.
Öneri: "...direği güverteye (teknenin üst döşemesi) dik duruyor." Ya da daha kısa ve terimsiz: "direği yere dik" yerine kart tanımı kullanılsın; kartla tutarlılık için ilkini seç. Cümle 12 sözcük olur, sınır içinde.

### ORTA

**O-1. İpucu 3 fazla veriyor (üç şablon).**
Kural: 3. basamak yalnız ilk adımı yapar, cevabın yarısını vermez.
- `mat-u3-esitsizlik-aralik` ve `mat-u3-esitsizlik-tamsayi` (aralikIpucu3, satır 2572): "İlk adım: toplam sınırı x < 4 + 5 olur. Şimdi uzun kenar 5 ile fark sınırını kur: 5 < 4 + x." Bu iki adım birden: toplam sınırı kuruldu, ayrıca uzun kenarı seçme becerisi (sorunun asıl ölçtüğü şey) ve fark eşitsizliği yazıldı. Geriye iki basit çıkarma/toplama kalıyor, şık okunur. Bankadaki karşılığı (s015 ipucu 3: "Fark 11 − 6 = 5. Şimdi toplamı bul ve aralığı yaz.") yalnız bir adım yapıyor; üreteç ondan fazla veriyor.
  Öneri: yalnız toplam sınırını yaz: "İlk adım: toplam sınırı x < 4 + 5 olur. Şimdi uzun kenarı seçip fark sınırını kendin kur." (kişisiz yazmak istenirse: "Şimdi uzun kenarı seçip fark sınırını kur.")
- `mat-u3-dis-aci` ipucu 3: "C köşesindeki m(ACB) dışarıda kalır; m(ACD) = m(BAC) + m(ABC) eşitliğini yaz." Tek işlemli soruda hangi iki açının toplanacağı ve formül veriliyor; geriye iki sayıyı toplamak kalıyor. Ipucu 2 zaten kuralı söylüyor.
  Öneri: 3. basamakta yalnız komşuyu eleme: "İlk adım: C köşesindeki m(ACB) dış açıya komşudur, onu bir kenara ayır. Geriye kalan iki iç açıyı yaz."
- `mat-u3-dis-aci-ters` ipucu 3: "105° = 85° + m(ABC) eşitliğini yaz. Şimdi m(ABC)'yi yalnız bırak." Eşitlik sayılarla kurulmuş, geriye tek çıkarma var. Öneri: "İlk adım: eşitliğin bir tarafına dış açıyı yaz. Şimdi öbür tarafa komşu olmayan iki iç açıyı yaz." (sayısız kalıp).

**O-2. İpucu 1-2 kuralı baştan söylüyor (`mat-u3-esitsizlik-aralik`, `-tamsayi`, `-aci-kenar-x`).**
- esitsizlik-aralik ipucu 1 "x iki sınır arasındadır: biri toplamdan, biri farkından" ve tamsayi ipucu 1 "x, iki kenarın farkından büyük, toplamından küçüktür" kuralın kendisi; ipucu 2 aynı şeyi yineliyor, "yön" ve "yöntem" ayrışmıyor. Tamsayi `enb`/`enk` ipucu 2 ("toplamdan küçük en büyük tam sayıyı al") toplamı hesaplayan öğrenciye cevabı doğrudan verir (s - 1).
  Öneri: tamsayi ipucu 1: "Önce x'in alabileceği aralığı bul. Üçgen eşitsizliği iki sınır verir." ; `enb` ipucu 2: "Sınırlar dâhil değildir. Üst sınıra bak: x o sayıya eşit olamaz."
- aci-kenar-x ipucu 1 "sıralamayı x'li ifadelerden değil, sayılardan yap" bu soru tipinin tek tuzağını (katsayıya göre sıralama, `eksik_adim` çeldiricisi) açıkça söylüyor. z3 soruda yön basamağı tuzağı ele vermemeli.
  Öneri: "Önce her açının kaç derece olduğunu bul." (tuzağı anmadan)

**O-3. Kontrol satırları uzun ve işlem yığınlı.**
- `ucgenKontrol` (esitsizlik-aralik, tamsayi, aralik-daraltma, satır 2560): "Kontrol: x = 21 için 15 + 7 = 22 > 21, 15 + 21 = 36 > 7, 7 + 21 = 28 > 15; üçü de sağlanıyor, üçgen çizilebilir." Bu 33 jeton, tek satırda üç karşılaştırma. "Adım başına tek işlem" ve cümle uzunluğu ölçütünü bozuyor. Öneri: tek satır yerine "Kontrol: x = 21 için en uzun kenar 36; öbür ikisi 15 + 7 = 22 > ... " ya da kontrolü yalnız kritik karşılaştırmaya indir: "Kontrol: x = 21 için 15 + 7 = 22 > 21; diğer iki toplam zaten büyük, üçgen çizilebilir."
- `aci-kenar` ve `aci-kenar-hesap` (aciKontrolSatiri, satır 2973) ve kenar dalı (satır 3039): tek "Kontrol:" satırında iki ayrı fikir (açı toplamı + harf eşlemesi), 24-27 jeton. İkiye böl: "Kontrol: 35 + 60 + 85 = 180, açı toplamı 180°, üçgen çizilebilir." ve ayrı "Kontrol, eşleme: C'nin karşısı |AB|; bu kenarda C harfi yok."
- `dis-aci-toplam` ve `aci-x` (dış dalı): "Kontrol, iç açılar: 180 − 135 = 45, 180 − 160 = 20, 180 − 65 = 115." üç çıkarma bir adımda. Öneri: tek satırda "iç açıları bul" yerine iki çıkarma bile yeterli; ya da bu kontrolü tamamen kaldırıp yalnız "Kontrol: 135 + 160 + 65 = 360" bırak (dış açı toplamı, 6 jeton).
- `aci-x` / `dis-aci-x` / `aci-kenar-x` (xCozum, satır 2554): "m(BAC) = 2 · 40 + 5 = 85°, m(ABC) = 2 · 40 − 5 = 75°, m(ACB) = 40 − 20 = 20°." üç işlem tek adımda. Her açı kendi adımına ayrılmalı (adım sayısı 3 artar, aci-x 11 → 13). Uzun çözümü kısaltmak için "Sayıları topla" satırı ile "10x + 40° = 360°" satırı birleştirilebilir.

**O-4. Gerçekçi olmayan çeldirici: `mat-u3-dis-aci-toplam`, `kavram_karisikligi` (540 − e1 − e2).**
Açıklama: "540°, üç köşedeki iç ve dış açıların hepsinin toplamıdır; dış açılar 360° eder." Matematik doğru (3 × 180), ama hiçbir öğrenci 540'ı bu soruda kendi başına kullanmaz; açıklama şıkkın nedeninden daha zor ("hepsinin toplamı"). Bu şık öğrenmeye değil tahmine hizmet eder.
Daha gerçekçi alternatif: yalnız ilk dönüşü çıkarmak (360 − e1), ic-aci'deki "Yalnız 60° çıkarılmış; 20° de çıkarılır" ile aynı fikir: "Yalnız 135° çıkarılmış; 160° de 360°'den çıkarılır."

**O-5. Gerçekçi olmayan / yapay çeldiriciler (ajan tahmini):**
- `esitsizlik-aralik` ve `-tamsayi`: "Üçüncü kenar bilinen kenarlardan uzun olabilir; üst sınır iki kenarın toplamıdır." (b - 1 / ar(d, b)). Öğrenci "üçüncü kenar en uzun olamaz" demek zorunda değil; yaygın hata yerine bu hatayı koyuyoruz. Makul ama nadir; açıklama yine tek fikir, azarlamasız ve 14 sözcük, bu yüzden bırakılabilir. Ancak yerine kartın gerçek hatası konabilir: sınırları dâhil yazmak zaten ayrı şık (`aralik_uc`). Not: yalnız 4 şıktan 1'i yapay.
- `dis-aci-ters`, `dis_aci_komsu` (2E − 180): öğrencinin "dış açıdan komşu iç açıyı çıkardığı" varsayılıyor. Açıklama ("m(ACB) toplamaya girmez; m(ACD) = ...") bu hatayı tarif etmiyor. Açıklamayı hatayla eşleştir: "Dış açıdan komşu iç açı çıkarılmış; çıkarılacak olan komşu olmayan iç açıdır."
- `aci-kenar-hesap` `eksik_adim`: "hesaplanmayan açı en küçük sayılmış" makul; ifade "oysa m(BAC) = 45°" hafif suçlayıcı (bkz. D-5).
- `dis-aci-x`, `eksik_adim` "10x = 320° ara sonuçtur": E − Q değeri bazen 180° üstü çıkar, x için "320°" şıkkı yanlış olduğu belli olur; ayırt edici değil.

**O-6. `mat-u3-aci-kenar` Kocaeli köyleri dalı (SIRA_BAGLAM.kenar[2], satır 2951): köyler A, B, C diye adlandırılmıyor.**
"Kocaeli'de üç köy arasındaki kuş uçuşu uzaklıklar bir ABC üçgeni oluşturuyor. |AB| = 12 km, |BC| = 15 km ve |AC| = 7 km." Köylerin A, B, C olduğu söylenmiyor; öteki bağlamlar ("Sacın köşeleri A, B ve C", "şamandıralar A, B ve C") söylüyor. Kuş uçuşu deyimi de bu seviye için yabancı olabilir. Tohum 0-5'te bu dal çıkmadı (bağlamlı kenar-modu örneğinde yalnız tersane sacı var); kod incelemesiyle bulundu, çıktı görülmedi.
Akış: km ↔ cm geçişi `veri.replace(/ cm/g, " km")` ile temiz yapılıyor, sayılar (3-20) için 12 km köyler arası makul. Pürüz yok; yalnız adlandırma eksik.
Öneri: "Kocaeli'de A, B ve C köyleri bir üçgenin köşelerinde. Aralarındaki uzaklıklar: ..."

**O-7. `kok` (bağlamsız şablonlar) jeton sayısı: 21-30.**
Ölçüm (boşlukla ayrılmış jeton; saf matematik ifadeleri dahil, "kelime" olarak yalnız sözcük sayılırsa 14-18):
- aralik-daraltma: 28 jeton ("ABC üçgeninde |AB| = 3 cm, |BC| = 5 cm, |AC| = x cm ve m(ABC) > m(BAC) olduğuna göre x'in alabileceği kaç farklı tam sayı değeri vardır?")
- aci-x (bağlamsız, x'li): 27 jeton
- aci-kenar-x (bağlamsız): ~29 jeton; aci-kenar (açı ve kenar modu): 21 ve 24 jeton
- esitsizlik-aralik: 20 jeton (sınırda)
Öneri: iki cümleye böl: "ABC üçgeninde |AB| = 3 cm, |BC| = 5 cm ve |AC| = x cm'dir. m(ABC) > m(BAC) olduğuna göre x kaç farklı tam sayı değeri alabilir?" Ayrıca "sıralanışı aşağıdakilerden hangisidir" yerine "sıralaması hangisidir" daha yalın.

### DÜŞÜK

**D-1. Bağlam cümlesi sınırları.** Tüm tekil bağlam cümleleri ≤ 18 sözcük (en uzunu halı saha, Ahmet-Burak-Can "arası" cümlesi, 18 jeton; yelken cümlesi 11). Tek istisna Y-1.

**D-2. Zorluk etiketi sınır vakaları.**
- `dis-aci-toplam` tekne dalı: "dönüş = dış açı" modellemesi gerekiyor ve "başladığı yere ilk yönüne bakarak varıyor" cümlesi 360°'yi örtük söylüyor. z1 için kabul, ama bağlamsız dal (z1 saf) ile tekne dalı (z1.5) aynı etiketi taşıyor. Hata değil, izlenmeli.
- `esitsizlik-aralik` z1: iki sınır + uzun kenarı seçme + katı eşitsizlik içeriyor; bankada tam sayı sayma z2. z1 yalnız aralığı yazmakla sınırlı olduğu için kabul.
- Diğer 10 kayıt etiketle uyumlu: aci-x / dis-aci-x / tamsayi / hesap z2 (iki-üç adım), aci-kenar-x / aralik-daraltma z3 (üç beceri birleşimi, 10 adım).

**D-3. "karşıya artı/eksi olarak geçer" ifadesi (aci-x, dis-aci-x isaret_hatasi).** Kartta bu ifade yok; çözüm ise "iki taraftan 10° çıkar / iki tarafa 20° ekle" diyor. Açıklama ve çözüm farklı dil kullanıyor. Öneri: "x'li terimin yanındaki 20° her iki tarafa eklenir: 5x = 180° + 20° olmalı." (çözümle aynı eylem).

**D-4. `esitsizlik-tamsayi` sayma adımı:** "Bunlar 21 − 9 + 1 = 13 tanedir." "+1" gerekçesiz; çeldirici açıklaması ("22 − 8 işlemi bir ucu da sayar") ile çözüm farklı yöntem kullanıyor. Öneri: "Sondan baştan çıkar, ilk sayıyı da say: 21 − 9 + 1 = 13."

**D-5. Ton:** Azarlama, kişi ifadesi, "dikkatsizlik" yok. Tek yumuşatılacak yer: aci-kenar-hesap "...oysa m(BAC) = 45°." ("oysa" karşılaştırmalı). Öneri: "...; önce 180° − (...) ile bulunur."

**D-6. Paragraf:** Bağlam alanı 3 bilgi cümlesi + "(Sayılar kurgusaldır.)" = 4 cümle (ic-aci yelken, dis-aci-toplam tekne, dis-aci ve dis-aci-ters bağlamlı dalları). Bankadaki ve önceki turlardaki kabul edilmiş kalıpla aynı; kurgu notu bilgi cümlesi sayılmıyorsa sorun yok. Not düşüldü.

**D-7. Terim/sözcük ayrıntıları:**
- "uzantıyla oluşan dış açı" (dis-aci okuma_hatasi): "uzatmayla oluşan" ya da "BC uzatılınca oluşan" daha yalın.
- tekne dalında açıklamalar "dış açıyı soruyor" diyor, soru "kaç derece dönmüştür" diyor: "soru dönüşü soruyor" olmalı.
- "Halı sahada Ahmet A, Burak B ve Can C noktasında duruyor": dil bilgisi biraz takılıyor; "Ahmet A noktasında, Burak B noktasında, Can C noktasında" daha net ama uzun; alternatif: "Halı sahada Ahmet, Burak ve Can üçgen oluşturuyor. Köşeleri sırayla A, B ve C."
- ic-aci/aci-x tersane bağlamlarında A, B, C'nin nerede olduğu söylenmiyor; açı toplamı için gerekmiyor, sorun değil.
- "çizilebilir" kontrol cümlesi (açı toplamı 180° ise üçgen çizilebilir) iç açılar pozitifse geçerli; çözümde "her açı 0°'dan büyük" denmiyor. x'li sorularda negatif açı üretilmiyor (alt sınır 15-20°), güvenli, ama ifade eksik.

## Odak maddelerine kısa cevap

1. Çeldirici açıklamaları: Hepsi tek fikir, kişisiz, azarlamasız ve ≤ 16 sözcük; en uzun varyant 16 sözcük (aci-x / dis-aci-ters "180° − 85° = 95°, B ve C açılarının toplamıdır; m(ACB) de çıkarılmalı", ~14). Ajan tahminli 4 çeldirici gerçekçi değil ya da açıklaması hatayı tarif etmiyor (O-4, O-5). "Üçüncü kenar bilinen kenarlardan uzun olabilir" makul ama nadir.
2. Bağlam/birim: km ↔ cm akışı temiz; yerel oran ~%66; köy dalında adlandırma eksik (O-6); Y-1 ve Y-2 anlamayı engelliyor; yasak sözcük yok.
3. İpucu: 1. basamaklar cevap vermiyor; 3. basamak 3 şablonda fazla (O-1); 2 şablonda 1. basamak kuralı söylüyor (O-2).
4. Çözüm: numaralı, "Gerekçe" ilk, "Kontrol:" son; ama 5 şablonda bir adımda 2-3 işlem (O-3).
5. Dağılım: 6/4/2 = %50/%33/%17, etiketler uyumlu (D-2).

## Ölçülemeyen / örnekleme

- Tohum 0-5 örneği her üreteçten 6 çıktı. Bağlamsız oran bu örnekte 31/72 = %43, beklenen %33 (aci-kenar-hesap ve aci-kenar-x 5/6 bağlamsız çıktı). Ardışık tohumlarda PRNG'nin ilk değeri ilişkili olabilir; gerçek oyunda tohum rastgele olduğundan oranın %66'ya yakın olması beklenir, kodun `pick` dağılımı okunarak hesaplandı, simülasyonla doğrulanmadı.
- Kocaeli köyü dalı (aci-kenar kenar-modu, bağlam indeks 2) tohum 0-5'te çıkmadı; yalnız kodla incelendi (O-6).
- Tüm olası tohumlar taranmadı: `dis-aci` ve `dis-aci-ters` dallarının bazı çeldirici koşulları (örn. `E + A < 180`, `2E > 180`) yalnız belli tohumlarda çıkar; açıklama şablonları koddan okundu.
- Jeton sayımı boşlukla ayrılmış parçalara göre yapıldı; "kelime" tanımına matematik ifadeleri girerse Y-1 ve O-7 değerleri düşer, ancak Y-1 yine de ≥ 17 sözcük.
- Metin tarama (Grep) 72 örneğin tamamına uygulandı; ilk 1080 satır, aci-kenar, tamsayi, daraltma bölümleri tam okundu, aci-kenar-hesap / aci-kenar-x / dis-aci-x tohum 1-5 çözümleri Grep ve kod şablonuyla incelendi.
