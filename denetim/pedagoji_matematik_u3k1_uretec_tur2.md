# Pedagoji denetimi, tur 2: 9.3.1 parametrik üreteçler (mat-u3-*, 12 adet)

Tarih: 2026-10-31 · Denetçi: pedagoji-denetcisi · Salt okur, düzeltme yapılmadı.
Kapsam: `panel/motor/uretecler/matematik.js` satır 2507-3190 tamamı okundu (tüm şablon dalları). Çıktı örneği: tohum 0-5 x 12 üreteç (Grep ile tarandı; ilk 90 satır ve tüm "bağlam/kök/açıklama" alanları görüldü).
Referans: tur 1 raporu `pedagoji_matematik_u3k1_uretec.md`, kart `matematik-u3-k1.json`.

## KARAR: GEÇER (küçük notlarla)

Tur 1'in 2 YÜKSEK ve 7 ORTA bulgusu kapandı ya da kabul edilebilir düzeye indi. Anlamayı engelleyen kalan sorun yok. Kalan 2 ORTA bulgu (enb/enk 3. ipucu, hesap/kenar-x çeldirici eksilmesi) ve birkaç DÜŞÜK not var; yayını durdurmaz, bir sonraki dokunuşta düzeltilmeli.

## 1. Tur 1 bulgularının durumu

| Bulgu | Durum | Kanıt |
|---|---|---|
| Y-1 tamsayi iskele 23 jetonluk cümle | KAPANDI | Satır 2887: 3 cümleye bölündü (11 + 12 + 11 jeton). Bağlam 3 bilgi cümlesi + KURGU. |
| Y-2 "güverte" tanımsız | KAPANDI | Satır 2599: "güverteye (teknenin üst döşemesi) dik konumdadır (90°)", 12 jeton. Kartla aynı tanım. (Yeni not: N-1) |
| O-1 ipucu 3 fazla veriyor (aralık, tamsayı, dis-aci, dis-aci-ters) | KAPANDI, 1 yan etki | aralık: yalnız "x, 4 + 5 toplamından küçük olmalı" (satır 2575). dis-aci: komşuyu eleme (2744). dis-aci-ters: sayısız eşitlik kurulumu (2780). Yan etki: O-A. |
| O-2 ipucu 1-2 kuralı baştan söylüyor | KAPANDI (aralık, tamsayı, kenar-x) | aralık ipucu 1 "iki sınır verir" (2863); tamsayı ipucu 1 (2923); kenar-x ipucu 1 "Önce her açının kaç derece olduğunu bul." tuzağı anmıyor (3117). |
| O-3 Kontrol satırları tek satırda yığın | KISMEN | ucgenKontrol 3 ayrı satıra, xCozum'da her açı kendi adımına, aciKontrolSatiri 2 satıra bölündü (adım başına tek işlem sağlandı). Bedeli çözüm uzunluğu: O-B. |
| O-4 540° çeldiricisi | KAPANDI | dis-aci-toplam artık eksik_adim + 2 okuma_hatasi (satır 2640-2644). |
| O-5 yapay çeldiriciler | KISMEN | dis-aci-ters komşu açıklaması hatayı tarif ediyor (2768). aralık/tamsayı "x, b'den büyük de olabilir" kaldı (açıklama makul). dis-aci-x "10x = 320°" kaldı (DÜŞÜK, N-5). |
| O-6 köy dalı adlandırma | KAPANDI (kodla) | Satır 2954: "Kocaeli'de A, B ve C köyleri bir üçgenin köşelerinde duruyor. Köyler arasındaki düz çizgi uzaklıkları şöyle:". Tohum 0-5'te çıkmadı. (Bkz. 4) |
| O-7 `kok` jeton sayısı | KAPANDI | daraltma kök iki cümle (16 + 12 jeton); aci-x en uzun cümle 18; dis-aci-x 3. cümle 19; esitsizlik-aralik bağlamsız kök tam 20 (sınır, N-4). |
| D-2 etiket sınırları | KABUL | Dağılım değişmedi: z1 6, z2 4, z3 2 = %50 / %33 / %17. |
| D-3 "karşıya artı/eksi" | KAPANDI | isaret_hatasi artık "İki taraftan 30° çıkarılır, eklenmez" (2679, 2804); çözümle aynı eylem. |
| D-4 "+1" gerekçesiz | KAPANDI | "Son sayıdan ilk sayıyı çıkar … İlk sayıyı da say: … + 1" (2914). |
| D-5 "oysa" | KAPANDI | Kodda yok; hesap eksik_adim: "…hesaplanmadan en küçük sayılmış; önce 180° − (…) ile bulunur." |
| D-6 paragraf | KABUL | Bilgi cümlesi 3 + "(Sayılar kurgusaldır.)". Köy dalı tam 3 cümle + KURGU. Daraltma halı sahası 3 + KURGU. |
| D-7 "uzantıyla", "dış açıyı soruyor" (tekne) | KAPANDI | "BC uzatılınca oluşan dış açı" (2731); tekne için "dönüşü" (2642-2643). |
| D-7 halı sahada "Ahmet A, Burak B ve Can C noktasında" | AÇIK | Satır 2581, 3136. Bkz. N-3. |
| Yasak sözcük | KAPANDI | "doğrusal", "sadeleştir", şapkasız "dahil", "oysa", "dikkatsiz": 12 üreteç bloğunda yok (2507-3190 ve 72 örnek). Eşleşmeler yalnız önceki üreteçlerde. |

## 2. Çeldirici açıklamaları satır satır

Ölçüt: tek fikir, kişisiz, azarlamasız, ≤ 20. Sayım boşlukla ayrılmış jeton (matematik sembolleri dahil), yani üst sınırdır.

| Üreteç / şık | En uzun dal (jeton) | Sonuç |
|---|---|---|
| ic-aci (3 şık) | "90° + 20° = 110° bilinen iki açının toplamıdır; bunu 180°'den çıkarmak gerekir." 12 | GEÇER |
| dis-aci-toplam (3) | "135° + 160° = 295° bilinen iki dış açının toplamıdır; bunu 360°'den çıkarmak gerekir." 13 | GEÇER |
| aci-x / dis (4) | isaret_hatasi: "İki taraftan 30° çıkarılır, eklenmez: 10x = 150° olmalı." 10; ezber: 11 | GEÇER |
| dis-aci (4) | "m(ACB) dış açı… komşu olduğu için toplanmaz; toplanacaklar m(BAC) ve m(ABC)'dir." 12 | GEÇER |
| dis-aci-ters (4) | "180° − 85° = 95°, B ve C açılarının toplamıdır; m(ACB) de çıkarılmalı." 13. Komşu: 13 | GEÇER |
| dis-aci-x (3-4) | "m(ACB) dış açıya komşudur, toplamaya girmez; toplanacaklar m(BAC) ve m(ABC)'dir." 12 | GEÇER |
| esitsizlik-aralik (4) | "13 < 10 + x satırında iki taraftan 10 çıkarılmamış; alt sınır 13 − 10 = 3 olur." 18 (sözcük olarak 13) | GEÇER (en uzun şablon) |
| esitsizlik-tamsayi (4) | aynı satır 18; "22 − 8 işlemi bir ucu da sayar; uçlar hariç tutularak yalnız aradaki tam sayılar sayılır." 16; "Uçlardaki 8 ve 22 sayıları da sayılmış; bu uzunluklarda üç nokta aynı doğru üzerine düşer." 15 | GEÇER |
| aci-kenar / hesap / kenar-x (3-4) | "Her açı kendi köşesinden çıkan kenarla eşlenmiş; karşı kenar, o köşenin harfini taşımayan kenardır." 14 | GEÇER |
| aralik-daraltma (3-4) | "Uç değer olan 5 sayısı da sayılmış; x = 5 olursa iki açı eşit olur." 15; "Açı bilgisi kullanılmamış; m(ABC) > m(BAC) şartı x'i 7 sayısından büyük olmaya zorlar." 13 | GEÇER |

Sonuç: en uzun açıklama 18 jeton (13 sözcük), hepsi tek fikir, kişisiz, azarlamasız. İki küçük dil notu (DÜŞÜK):
- N-6. aci-kenar kenar modu uyumsuzluğu (satır 3024): "AB kenarının karşısı, AB içinde geçmeyen C köşesidir." Okurken takılıyor. Öneri: "AB kenarının karşısındaki köşe C'dir; AB'de C harfi yok."
- esitsizlik-tamsayi (2899): "bu uzunluklarda üç nokta aynı doğru üzerine düşer" öğrenci için ağır. Öneri: "Uçlardaki 8 ve 22 sayıları da sayılmış; x bu sayılara eşit olamaz."

## 3. İpucu merdiveni

Genel örüntü: 1 yön, 2 yöntem, 3 "İlk adım: … Şimdi …". Üçüncü basamak hiçbir üreteçte sonucu vermiyor. Tüm şablon dalları incelendi.

| Üreteç | 1 yön | 2 yöntem | 3 yalnız ilk adım | Not |
|---|---|---|---|---|
| ic-aci | Evet | Evet | Evet (eşitlik kurulumu) | yelken ipucu 1 "…unutma" (N-1) |
| dis-aci-toplam | Evet | Evet | Evet | |
| aci-x | Kısmen (kural + denklem) | Evet | Evet (yalnız "x'leri topla") | 1 ile 2 örtüşüyor (DÜŞÜK) |
| dis-aci | Evet (soru biçiminde) | Evet | Evet; sonuç yok | 3 ipucu 1'i yineliyor, ama komşuyu eleme ilk adım olduğundan kabul |
| dis-aci-ters | Evet | Evet | Evet; sayısız ve tek eylem, sızıntı yok | Tur 1 önerisi aynen uygulanmış |
| dis-aci-x | Kısmen (kural verilmiş) | Evet | Evet (denklem kurulumu, hesap yok) | Kabul |
| esitsizlik-aralik | Evet (tuzağı vermiyor) | Evet | Kabul: "x < 4 + 5" yalnız üst sınırı kuruyor | Hesabı öğrenci yapıyor |
| esitsizlik-tamsayi | Evet | Evet | **Sorunlu**, O-A | |
| aci-kenar | Kuralı söylüyor | Evet | Evet (1 eşleme) | Kabul |
| aci-kenar-hesap | Kısmen: iki cümle, yöntem + kural | Evet | Evet (formül sayılarla, hesap yok) | |
| aci-kenar-x | Evet, tuzağı anmıyor | Evet | Evet | |
| aralik-daraltma | Evet | Evet | Kabul, ama sırayı bozuyor (O-A notu) | |

### ORTA

**O-A. `mat-u3-esitsizlik-tamsayi`, soru = `enb` ve `enk`: ipucu 3 ya cevabı veriyor ya yanlış yöne çekiyor.** (kod 2924-2926; ipucu 3 = aralikIpucu3, satır 2575)
- enb: ipucu 2 "üst sınıra bak, x o sayıya eşit olamaz" ve ipucu 3 "x, 4 + 5 toplamından küçük olmalı". İkisi birlikte çözümü tamamlıyor (cevap = 9 − 1). Örnek: tamsayi tohumlarında soru=enb olanlar.
- enk: ipucu 2 "alt sınıra bak" der; ipucu 3 yine toplam (üst) sınırını kurar. Alt sınırla ilgisiz, öğrenciyi yanlış sınıra yönlendirir.
Öneri: tamsayi için soru türüne göre ipucu 3 yaz. enb: "İlk adım: üst sınır için iki kenarı topla: 4 + 5." enk: "İlk adım: alt sınır için uzun kenardan kısa kenarı çıkar: 5 − 4." Sayıları vermek yerine "iki kenarı topla" demek yeter. `sayi` türü olduğu gibi kalabilir.

**O-B. Çözüm uzunluğu: "Kontrol" satırları çözümden fazla.** (adım sayıları koddan sayıldı)
- esitsizlik-aralik: 9 adım; 4 çözüm, 5 Kontrol (üst sınır, alt sınır, üçgen x3). esitsizlik-tamsayi `enb/enk`: 9 adım, 5'i Kontrol; sayi: 11.
- aralik-daraltma: 12 adım; 4'ü kontrol.
- aci-kenar-x: 15 adım (xCozum 10, aciAdimlari 3, Kontrol 2). aci-x: 12-14.
Her satır tek işlem ve ≤ 20 jeton, yani ölçüt karşılanıyor; ama Mehmet Eren 12-15 satırlık listede kopar ve asıl çözümü Kontrol'lerden ayıramaz. Öneri (biri yeter): (a) Kontrol satırlarını ayrı bir "Kontrol" başlığı altında, numarasız ve tek blokta ver; (b) aralık sorularında üçgen kontrolünü 3 satırdan 1 satıra indir ("x = 2 için en uzun kenar 5; 4 + 2 = 6 > 5, üçgen çizilebilir"); (c) kenar-x'te "x'leri topla / sayıları topla / düzenle" üç adımı birleştirme, ama "Gerekçe" ve "denklem" satırlarını birleştir.

**O-C. `aci-kenar-hesap` ve `aci-kenar-x`: tipin ayırt edici çeldiricisi çoğu tohumda yok; kalan şıklar aynı beceriyi ölçüyor.**
Tohum 0-5 çıktısı: hesap 6 tohumun yalnızca 2'sinde (#2, #4) `eksik_adim` şıkkı var; kenar-x'te 0/6 (18 yanlış şıkkın 18'i `aci_kenar_eslesme`/`kavram_karisikligi`). Neden: ek şık, çakışma durumunda sessizce atılıyor (satır 3069, 3106-3109); havuzdan 3 şık seçildiği için eklense bile %25 elenir.
Sonuç: z3 etiketli kenar-x'in zorluğu x'i bulmakta, ama x'te hata yapan öğrenci "sıra ters çevrilmiş" gibi eşleme açıklaması alıyor. Hata teşhisi eşleşmiyor. Yanlışta "tek cümlelik neden" kuralı bu durumda yanlış nedeni söylemiş olur.
Kalan 3 şığın kendi kalitesi iyi: ikisi gerçek eşleme hatası (iki ayrı kaydırma), biri sıra ters. Açıklamalar doğru ve kısa.
Öneri: kenar-x ve hesap için bir "x'i ya da üçüncü açıyı yanlış bulma" şıkkı garanti et (örn. T yerine 360 kullanılarak bulunan x ile sıralama) ya da çakışma olursa örneği yeniden çek. Zorluk etiketleri (hesap z2, kenar-x z3) içerik olarak doğru; dağılım 6/4/2 değişmedi.

## 4. Bağlam, terim ve cümle uzunluğu

- Köy dalı (satır 2954, `veri.replace(/ cm/g, " km")`, `bag.includes("köyler")` koşulu "köyleri" ile sağlanıyor): metin tam beklenen biçimde üretilir: "Kocaeli'de A, B ve C köyleri bir üçgenin köşelerinde duruyor. Köyler arasındaki düz çizgi uzaklıkları şöyle: |AB| = 12 km, |BC| = 15 km ve |AC| = 7 km. (Sayılar kurgusaldır.)" Cümleler 10, 6 ve 15 jeton. Akıcı ve anlaşılır; "düz çizgi uzaklığı" kartta da var (kart satır 149, 494); "kuş uçuşu" artık kullanılmıyor. Not: 12-20 km köyler arası makul; "Kocaeli'de" Gölcük'ten geniş ama yerel. Çıktı tohum 0-5'te çıkmadı, bu yüzden yalnız kodla doğrulandı.
- Yelken (satır 2599): 12 jetonluk cümle, kartla aynı "güverte" ve "bumba" tanımı. Ancak:
  - **N-1 (ORTA-DÜŞÜK, ic-aci yelken, tohum 0 ve 3).** Kart örneğinde "bumba … direğe bağlı yatay çubuk" ve "Direğin dibinden bir bumba çıkıyor" vardı; üreteçte yalnız "Direk, bumba … ve halat bir üçgen oluşturuyor". Direk ile bumbanın birbirine dik olduğu, "güverteye dik" + "yatay çubuk" bilgilerinden çıkarılıyor ve bu sıçrama hiçbir yerde söylenmiyor (çözüm 1. adım "Direk güverteye dik; direk ile bumba arasındaki açı 90°" doğrudan eşitliyor). "(90°)" ifadesi güverte ile direk için yazılmış gibi okunuyor. Öneri: "Bumba, direğin dibine bağlı yatay çubuktur." ekle ya da çözüm adım 1'i "Bumba yataydır, direk güverteye diktir; ikisi arasındaki açı 90°" yap. İpucu 1 ("…açıyı unutma") "unutma" kalıbı hafif emir; "Direk ile bumba arasındaki açıya dikkat et" ya da "…açıyı düşün" daha yumuşak.
  - "konumdadır" ağır; "dik duruyor (90°)" kartla da uyumlu (kart: "dik duruyor").
- Bağlam/kök cümleleri: tüm bağlam cümleleri ≤ 17 jeton (en uzunu halı sahası "Ahmet ile Burak arası 9 m, Burak ile Can arası 2 m, Ahmet ile Can arası x m." 17). Kök cümleleri ≤ 20 (tam 20: esitsizlik-aralik bağlamsız kök, N-4).
- Paragraf: hiçbir bağlam KURGU hariç 3 cümleyi aşmıyor. KURGU ile 4 olan örnekler (yelken, tekne, dis-aci, dis-aci-ters, daraltma halı) bankadaki kalıpla aynı.
- Terimler: m(BAC), |AB|, karşı kenar, komşu olmayan iç açı, dâhil, kesişim kartla aynı. "doğrusal", "sadeleştir", şapkasız "dahil" yok.
- **N-3 (DÜŞÜK, ic-aci tohum 1; daraltma halı).** "Halı sahada Ahmet A, Burak B ve Can C noktasında duruyor" hâlâ dil bilgisi olarak takılıyor. Öneri: "Halı sahada Ahmet, Burak ve Can üçgen oluşturuyor; köşeleri sırayla A, B ve C." (daraltma bağlamı bu yüzden 3 + KURGU sınırında kalır.)
- **N-4 (DÜŞÜK).** esitsizlik-aralik bağlamsız kök tam 20 jeton: "Bir üçgenin iki kenarı 5 cm ve 8 cm, üçüncü kenarı x cm olduğuna göre x'in alabileceği değerler aşağıdakilerden hangisidir?" Öneri: iki cümle: "Bir üçgenin iki kenarı 5 cm ve 8 cm; üçüncü kenarı x cm. x'in alabileceği değerler hangisidir?"
- Yerel bağlam: tohum 0-5 örneğinde tur 1 ölçümü geçerli; bu turda bağlam dağılımı değişmedi.

## 5. Çözümler

- Hepsi numaralı; "Gerekçe" ilk, "Kontrol" son; her satır tek işlem (xCozum'da "Sayıları topla: − 20 + 10 + 40 = 30" tek toplama, kabul).
- Yeni çoklu Kontrol satırları anlaşılır mı: Satırlar kısa ve kalıplı ("Kontrol, üst sınır: x = 9 için 4 + 5 = 9 > 9 doğru değil; 9 aralıkta yok."). "9 > 9 doğru değil" 9. sınıf düzeyine uygun, ama ilk karşılaşmada "neden yanlış bir eşitsizlik yazıyoruz?" sorusu doğurabilir. Öneri: "…9 > 9 olmaz, bu yüzden x = 9 olamaz." Uzunluk sorunu için O-B.
- **N-2 (ORTA-DÜŞÜK, tamsayi enb/enk).** Adım 5 ("Sınır dâhil olmadığı için 9 alınmaz; en büyük tam sayı 8.") ile adım 6 ("Kontrol, sınır: x = 9 için … 9 alınmaz.") aynı şeyi iki kez söylüyor. Birini çıkar (kontrolü bırak, adım 5'i "En büyük tam sayı 8." yap).
- **N-7 (DÜŞÜK).** dis-aci-ters ve dis-aci-x'te son adım "C'deki iç açı: m(ACB) = 180° − 105° = 75°." soruya cevap değil, kontrol hazırlığı; etiketsiz. Öneri: "Kontrol için C'deki iç açı: …".
- **N-8 (DÜŞÜK).** dis-aci-toplam ve aci-x(dış) Kontrol: "Her dış açı 180°'den küçük; her köşedeki iç açı 0°'dan büyük kalır" iç açı = 180° − dış açı ilişkisini söylemiyor. Öneri: "Her dış açı 180°'den küçük; iç açı = 180° − dış açı, yani 0°'dan büyük, üçgen çizilebilir." (20 jetonu aşmasın diye iki satıra bölünebilir.)
- Dış açı toplamı Kontrol'ü ("135 + 160 + 65 = 360") artık tek işlem; tur 1'deki üçlü çıkarma kalktı.
- "x = 15°" (x'in derece birimiyle yazılması, xCozum satır 2553-2554) tur 1'den kalan, bu kapsamda ele alınmadı; x açı değil ama çözümde derece yazılıyor (DÜŞÜK, öğretmen notasyonuna bakılmalı).

## 6. Çeldirici düşürülen sorular ve zorluk

- aci-kenar-hesap / aci-kenar-x: bkz. O-C. Çeldirici düşünce her zaman 3 yanlış şık kalıyor (soru.js satır 39-47 havuzdan 3 seçiyor), yani şık sayısı bozulmuyor; eksilen çeşitlilik.
- Zorluk dağılımı: z1 = ic-aci, dis-aci-toplam, dis-aci, dis-aci-ters, esitsizlik-aralik, aci-kenar (6); z2 = aci-x, dis-aci-x, esitsizlik-tamsayi, aci-kenar-hesap (4); z3 = aci-kenar-x, aralik-daraltma (2). %50 / %33 / %17; eşik %50 / %35 / %15 ± 10: GEÇER. Etiket uyumu: 12/12 (D-2 notları geçerli).

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Çeldirici açıklaması | en uzun 18 jeton (13 sözcük) | ≤ 20 | GEÇER |
| Bağlam cümlesi | en uzun 17 jeton | ≤ 20 | GEÇER |
| Kök cümlesi | en uzun 20 jeton | ≤ 20 | GEÇER (sınırda, N-4) |
| Paragraf | 3 bilgi cümlesi + KURGU | ≤ 3 | GEÇER (not) |
| Yasak sözcük | 0 | 0 | GEÇER |
| Terim tutarlılığı | kartla aynı; güverte/bumba tanımlı | tutarlı | GEÇER (N-1 notu) |
| İpucu 3 yalnız ilk adım | 11/12; tamsayi enb/enk sorunlu | 12/12 | DÜZELTİLMELİ (ORTA, O-A) |
| Çözüm numaralı, tek işlem | 12/12; uzunluk 9-15 adım | tek işlem | GEÇER (O-B notu) |
| Zorluk dağılımı | %50 / %33 / %17 | %50 / %35 / %15 ± 10 | GEÇER |
| Çeldirici teşhis uyumu | hesap 2/6, kenar-x 0/6 tohumda ayırt edici şık | ayırt edici şık var | DÜZELTİLMELİ (O-C) |

## Önerilen düzeltme sırası

1. O-A: tamsayi için soru türüne göre ipucu 3 (enb/enk).
2. O-C: hesap ve kenar-x için x/üçüncü açı hatası çeldiricisini garanti et ya da örneği yeniden çek.
3. N-1: yelken bağlamında direk-bumba dikliğini kurtar ("bumba yataydır, direğe bağlı").
4. O-B ve N-2: Kontrol satırlarını sadeleştir, tekrarı kaldır.
5. N-3, N-4, N-6, N-7, N-8: dil cilası.

## Ölçülemeyen / örnekleme

- Köy dalı tohum 0-5'te çıkmadı; yalnız kodla incelendi. Kod çalıştırılamadığı için (araç yok) rastgele tohumlarla doğrulanmadı.
- Jeton boşlukla ayrılmış parçadır; sözcük sayısı daha düşüktür. Tüm tohumlar taranmadı; 72 örnek ve bütün kod dalları okundu.
- Çeldirici dağılımı (O-C) 6 tohumluk örneğe dayanır; oran kesin değil, yön net.
- "Mehmet Eren için anlaşılır mı" yargıları denetçi değerlendirmesidir, öğrenci testi yapılmadı.
