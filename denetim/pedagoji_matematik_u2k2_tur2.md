# Pedagoji denetimi: 9. sınıf Matematik, Ünite 2, K2 (9.2.2 mutlak değer fonksiyonu), tur 2

Denetçi: pedagoji-denetcisi (salt okur). Hiçbir içerik dosyası değiştirilmedi.
Kapsam: `dersler/matematik/konular/matematik-u2-k2.json` (surum 2, 13 bölüm) ve `dersler/matematik/sorular/matematik-u2-k2.json` (surum 2, 20 soru).
Biçim ve numaralama: `denetim/pedagoji_matematik_u2k2_tur1.md`. Tur 1 bulguları eski numarasıyla kapanış tablosunda; yeni bulgular P1-16'dan devam eder.

## KARAR: DÜZELTİLMELİ

Tur 1'in dört YÜKSEK bulgusu (tepe/simetri/köşe, b2 su aynası, kısıtlı aralık, b6 parçalı |x − 4|) büyük ölçüde kapandı. Kart ile banka artık aynı dili konuşuyor. Kalanlar anlamayı etkiliyor ama sayıca az:

1. b13 koşullu sıfır kuralı (basit[4], [5]) öğrenci için anlaşılır değil ve b12 ile işaret gösterimi çelişiyor (P1-16).
2. s016 bağlamı görüntü kümesinin üst ucunu ("en fazla 10 g") veriyor, bir ölçütü ölçmez hale geliyor (P1-17).
3. "sapma" ve "cebirsel temsil" terimleri, kullanıldıkları yerden sonra ya da hiç tanımlanmıyor (P1-18).

## Yöntem
- İki dosya baştan sona okundu. Grep taramaları: "katla / tepe / simetri / köşe / olgu / kavramsal / bağlamında / nitelik / süreç bileşeni / dikkatsiz / basit bir hata". Sonuç: kart ve banka 0 (yalnız b2 `terimler[0].tanim` içinde "ayna gibi", resmî öğrenme çıktısı metninde "analojik"; ikisi de ihlal değil).
- 21+ simge/kelime uzunluğunda tek cümle taraması (regex): 13 eşleşme. Kartta 3 öğrenci cümlesi simge yoğunluğuyla üstte (b6 basit[3], b13 basit[4], basit[5]); bunların gerçek kelime sayısı ≤ 20. Diğerleri öğretmen notu (`puanlama_notu`, `dogrula`) ya da soru kökü (gerçek kelime ≤ 18).
- Ortalama cümle uzunluğu ÖRNEKLEMEYLE: b9, b11, b13 `basit` tek tek sayıldı. b11 basit: 13 cümle, 102 kelime, ortalama 7,8. b9 ve b13: ortalama yaklaşık 8–9. Diğer bölümler tur 1 örneklemine göre korunuyor; yeniden sayılmadı.
- Paragraf cümle sayısı: tüm `ornek`, `basit`, `kitap` metinleri okunurken sayıldı; soru bağlamları ayrıca sayıldı.
- Zorluk dağılımı bankada tam sayıldı. Matematik: b9, b10, b11, b13 sayıları ve s016–s020 cevapları elle yeniden hesaplandı, hata yok. Kitap sayfa içeriği bu turda kaynağa karşı doğrulanmadı.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Cümle > 20 kelime | 0 gerçek ihlal; 3 simge yoğun cümle (b6 basit[3], b13 basit[4], [5]) | 0 | GEÇER (sınırda, P1-16) |
| Ortalama cümle uzunluğu (örneklem) | b11 7,8; b9, b13 yaklaşık 8–9 | ≤ 12 | GEÇER (örneklem) |
| Paragraf ≤ 3 cümle (kart) | 0 ihlal (tüm ornek/basit/kitap) | 0 | GEÇER |
| Paragraf ≤ 3 cümle (banka bağlamı) | s010 4, s018 4 cümle (s009, s016, s019 3) | 0 | EKSİK, DÜŞÜK (P3-27) |
| Bölüm başına tek fikir | b6 (3 fikir, 12 madde), b11 (kurma + tanım kümesi), b13 (5 fikir); b9, b10 tek fikir | tek | EKSİK (P2-19, P2-21, P1-16) |
| Kuraldan önce somut örnek | 13/13 `ornek` var; b2 örneği somut sayı ama bağlam yalnız etiket | 13/13 | GEÇER (P3-26 notu) |
| Yerel bağlam oranı | kart 13/13 (tersane 7, deniz 5, futbol 1); banka: bağlamlı 5 sorunun 5'i Gölcük; ekmek 3 kez | ≥ %50 | GEÇER (çeşitlilik DÜŞÜK, P3-28) |
| Soyut kelime (basit) | 0 | 0 | GEÇER |
| Terim ilk geçişte kalın + tanım | 13/13 bölümde `terimler` dolu; ama "sapma" (b6, b8'de önce geçiyor, b10'da tanımlı), "cebirsel temsil" (hiç tanımsız), "işaret tablosu" (b3'te kalın değil, b13'te kalın) | hepsi | EKSİK (P1-18) |
| Kontrol sorusu sayısı | 2,3,3,3,2,3,3,3,2,2,2,3,3 | 2–3 | GEÇER |
| Kontrol sorusu zorluk 1 | 4 sınırda: b9 Q1, b10 Q1, b13 Q2, Q3 | hepsi | SINIRDA (P3-29) |
| İpucu: 1. basamak cevap vermiyor | ihlal 0 (b11 Q2 [0] ikinci yarıyı neredeyse veriyor) | 0 | GEÇER (not) |
| İpucu: 3. basamak cevap değil | sınırda 4: s016 [2], b12 Q2 [2], b5 Q1 [2], b11 Q2 [2] | 0 | SINIRDA (P2-24) |
| Zorluk dağılımı (banka) | 10 / 7 / 3 = %50 / %35 / %15 (tam sayıldı) | %50/35/15 ± 10 | GEÇER |
| Yanlış cevap dili | azarlama yok; `yanlis_aciklama` tek cümle, nedenli | azarlamasız | GEÇER |
| Matematik çözümü: numaralı, adım başına tek işlem | numaralı tam; sıkışık: b11 basit 7 ve 1, b13 yazılı 4–5, b13 basit[1]–[2] | tek işlem | EKSİK, ORTA (P2-22) |
| Kart ↔ banka dil tutarlılığı | tepe/simetri/köşe/katla yok; "yansıt", "minimum noktası", "sıfır", "bire bir" ortak; "cebirsel temsil" yalnız bankada | aynı dil | GEÇER (tek boşluk P1-18) |

## Tur 1 bulgularının kapanışı

| Bulgu | Durum | Not |
|---|---|---|
| P1-01 tepe/simetri/köşe | KAPANDI | Grep 0. `minimum noktası` / `maksimum noktası` terim olarak tanımlı (b2, b5). Değer/nokta ayrımı b4 basit[3] ve flashcard[6]'da. Hata kodu `carpim_sifir_isaret` bankayla aynı. Bankada s020 eklendi. |
| P1-02 b2 ayna ve beş fikir | KAPANDI | Su aynası kalktı. basit 4 paragraf. Küçük kalıntılar P3-26'da. |
| P1-03(a) modelleme | KISMEN | b10 eklendi (iyi). Ama "cebirsel temsil" tanımsız, tanım kümesi yazma b10 basit'te yok (P1-18, P2-20). |
| P1-03(b) kısıtlı aralık | KISMEN | b9 eklendi (iyi). Görüntü kümesi (sınırlı aralıkta) b9 basit'te yok, yalnız yazılıda (P2-19). |
| P1-03(c) hareket öyküsü | KAPANDI | b11 eklendi, s018 ile aynı yapı. Küçük sorunlar P2-21'de. |
| P1-04 b6 |x − 4| | KISMEN | 7 adım eklendi, kitap[2] bölündü. Bölüm uzadı, kontrol soruları yeni beceriyi yoklamıyor (P2-19b). |
| P2-05 paragraf | KISMEN | b1, b6, s016 kapandı; s010 ve s018 bağlamı 4 cümle (P3-27). |
| P2-06 x = −b/a basit'te yok | KAPANDI | flashcard[5] sayıyla yeniden yazıldı. "x + a" paragrafı b7'ye eklenmedi; b6 yazılı ve b8 Q2 kapsıyor, DÜŞÜK. |
| P2-07 `terimler` boş | KAPANDI | 13/13 dolu; `on_bilgi` güncel; n(x) b1'de açıklandı. İstisna: P1-18. |
| P2-08 b8 yük | AÇIK, DÜŞÜK | b8 basit[4] hâlâ 3 cümlede 7 olgu (−|x − 20| varsayımı). |
| P2-09 ipucu | KISMEN | b1 Q2, s017, s015, b2 Q1, b7 Q2 kapandı. Kalan: P2-24. |
| P2-10 s009/s010/s016/s018 | KISMEN | s016 yeniden kuruldu (liste kalktı, ekmek). s010 çeldirici açıklaması ve `hata_turu` düzeldi. Yeni sorun: P1-17. |
| P2-11, P2-12 | KAPANDI | b12 kitap[2] üç cümleye bölündü. |
| P3-13 tek işlem | KISMEN | Banka çözümleri temiz (s016–s018 değerler ayrı adım; s013 "tablo" kabul). Kartta yeni sıkışıklık: P2-22. |
| P3-14 kontrol zorluğu | AÇIK, DÜŞÜK | P3-29. |
| P3-15 flashcard/sık hata | AÇIK, DÜŞÜK | flashcard[2] hâlâ tek kartta 7 bilgi; b7 `baglam: "gölcük"` küçük harf; `sik_hatalar` "sanmak/unutmak". Banka hata kodlarının çoğu (okuma_hatasi, eksik_adim, esitsizlik_yonu, aralik_uc, ...) kartta yok. |

---

## Bulgular (öncelik sırasıyla)

### P1-16 · YÜKSEK · b13 koşullu sıfır kuralı anlaşılır değil
Dosya: `konular/matematik-u2-k2.json`, `bolumler[12].katmanlar.basit[4]` ve `[5]`.

Alıntı [4]: "Sıfır sayısı sondaki c sayısına bağlıdır (c işaretiyle alınır). V yukarı açıksa (|…| + c): c > 0 ise sıfır yok, c = 0 ise bir sıfır, c < 0 ise iki sıfır vardır."
Alıntı [5]: "Ters V'de (−|…| + c) durum tersine döner: c > 0 ise iki sıfır, c = 0 ise bir sıfır, c < 0 ise sıfır yoktur. Örnek: ..."

Sorunlar:
1. Kural örnekten önce geliyor (ters V için örnek sonda, V için c > 0 ve c = 0 örneği yok). Kural 36 simgelik tek cümlede, sembolle ("|…|", "c > 0", "c < 0" altı kez).
2. "c işaretiyle alınır" belirsiz. Aynı kartın b12'si ve kitap katmanı "|ax + b| − c" yazıyor (c pozitif). b13 ise "|…| + c" yazıp c < 0 diyor. Öğrenci aynı sayfada iki ayrı c okuyor.
3. V / ters V ayrımı somut değil: "V yukarı açıksa" ve "durum tersine döner" ifadeleri çizime ya da sayıya bağlanmıyor. Tersine döner cümlesi öğrenciye üç yeni eşleştirme bırakıyor.
4. Bölüm beş fikir taşıyor (minimum/görüntü, parçalı sıfır, işaret tablosu, V kuralı, ters V kuralı). Süre 6 dk.
5. b13 kontrol soruları kuralı yoklamıyor: Q2 yalnız |x| − 4 (iki sıfır), ters V için sıfır sayısı sorusu yok.

Önerilen yeniden yazım (kural minimum değerle, üç sayı örneğiyle; "tepe" yasağına takılmaz):
- basit[4]: "Sıfır sayısını minimum değere bakarak bulursun. Minimum değer 0'dan küçükse grafik x eksenini iki yerde keser."
- basit[5]: "Üç örnek: |x| + 3 en az 3'tür, sıfır yok. |x| en az 0'dır, bir sıfır var (0). |x| − 3 en az −3'tür, iki sıfır var: −3 ve 3."
- basit[6]: "Ters V'de en büyük değere bak. −|x| + 6 en çok 6'dır, iki sıfır var: −6 ve 6. −|x| − 1 en çok −1'dir, sıfır yok."
- `sik_hatalar[tek_sifir]` aynı mantıkla: "minimum değer 0'dan küçükse iki sıfır".
- Kontrol: Q3'ü "−|x| + 6 görüntü kümesi" yerine koyabilir ya da dördüncü soru değil, Q2'ye ekle: "|x| + 3'ün sıfırı var mı?" (zorluk 1).
- Gösterim: b12 ve b13'te tek biçim kullanılsın ("|ax + b| + c" ve c'nin işaretiyle: "+ 3", "− 3").

### P1-17 · YÜKSEK · s016 bağlamı cevabı veriyor, kök üç kez aynı bilgiyi tekrarlıyor
Dosya: `sorular/matematik-u2-k2.json`, id `matematik-u2-k2-s016`, `baglam` ve `kok`.

Alıntı: baglam "Bir ekmeğin ağırlığının 250 g'dan sapması en fazla 10 g olabiliyor." + kok "Ekmeğin ağırlığı 240 g ile 260 g arasındaki bütün değerleri alabilir. Bu yüzden s'nin tanım kümesi [240, 260] kapalı aralığıdır."

Sorun:
1. "En fazla 10 g" cümlesi görüntü kümesinin üst ucunu ([0, 10]) soruda yazıyor. Rubrik "a) görüntü kümesini [0, 10] yazma" (2 puan) böylece uçları hesaplamadan kazanılıyor. Soru zorluk 3 olarak işaretli ama bu ölçütün zorluğu yok.
2. Aynı aralık iki kez veriliyor (250 ± 10 ve [240, 260]); bağlam + kök toplamı 6 cümle, uzun metinde kopan öğrenci için ağır.

Öneri: baglam: "Gölcük'teki bir fırında ekmekler 250 g olacak şekilde hazırlanıyor. Ağırlığı x gram olan bir ekmeğin 250 g'dan sapması s(x) gramdır." Kök: "Ekmeğin ağırlığı 240 g ile 260 g arasındaki bütün değerleri alabilir; s'nin tanım kümesi [240, 260] kapalı aralığıdır. Buna göre işlemlerinizi göstererek a) ... b) ..." Böylece "en fazla 10 g" kalkar; görüntü kümesini öğrenci b9 yöntemiyle (uçlarda hesapla) bulur.

### P1-18 · YÜKSEK · "sapma" ve "cebirsel temsil" tanımsız ya da geç tanımlanıyor
Dosya: `konular/matematik-u2-k2.json`.

1. "Sapma" ilk kez `bolumler[5].ornek.metin` (b6: "çubuğun sapmasını gösteriyor") ve `bolumler[7].ornek.metin` (b8: "sapma |x − 20| mm olur ... 1 mm sapmadır"), b8 basit[1], b9 ornek'te geçiyor. Kalın yazım ve tanım b10 basit[0] ve `bolumler[9].terimler[0]`'da. Üç bölüm boyunca tanımsız terim kullanılıyor, b8'de formül hazır veriliyor.
   - Öneri: tanımı b6/b8'e çek ("**sapma**: ölçülenin hedeften uzaklığı, hiç eksi olmaz") ya da b8 ornek'in ilk cümlesine yerleştir; b10'da yalnızca kalıbı (|ölçülen − hedef|) öğret.
2. "Cebirsel temsil" `bolumler[5].katmanlar.kitap[0]`, `bolumler[9].yazilida.kalip` (b10), `bolumler[10].katmanlar.kitap[1]` (b11) ve bankada s016, s018 yönergesinde geçiyor. Hiçbir `basit` ya da `terimler` kaydında tanımı yok. Tur 1 P1-03(a) bunun için açılmıştı; b10 modellemeyi öğretti ama adı vermedi.
   - Öneri: `bolumler[9].katmanlar.basit[2]` sonuna: "g(x) = |x − 120| gibi bir formüle **cebirsel temsil** denir." ve `terimler`e "cebirsel temsil: fonksiyonun formülle yazılmış hâli".
3. "İşaret tablosu": b3 basit[3]'te ilk geçiyor (kalın değil), b13 basit[3]'te kalın tanımlı. Öneri: b3'te kalın yaz, tanımı b3 `terimler`e taşı.

### P2-19 · ORTA · b6 uzun ve üç fikirli; b9 sınırlı aralıkta görüntü kümesi eksik
**(a) b6 (`bolumler[5]`) |x − 4| 7 adımı: Mehmet Eren için uzun mu?**
- Adımların tek tek okunabilirliği iyi: her adım ≤ 12 kelime, her biri tek işlem (1 bul, 2–3 iki durum, 4 parantez aç, 5 sonuç, 6–7 kontrol), örnek önce, kontrol sonda. Tür 1'de istenen dolgu geldi.
- Sorun adım sayısı değil toplam ekran yükü: basit 12 madde (4 paragraf + 1 giriş + 7 adım). Bölümde üç ayrı fikir var (|x|'in iki satırı; −|x|; |x − 4| türü). Süre 7 dk, kural 5 dk. Öğrenci, adım 3'te "içi eksi" fikrini bırakıp adım 4 parantez açmaya geçerken zinciri kaybedebilir.
- Öneri: bölümü ikiye böl. b6 = basit[0]–[3] (5 dk, 3 kontrol sorusu: şu anki Q1, Q2 ve Q3). Yeni b6b = "|x − 4| iki satıra ayrılır" (7 adımın 6 ve 7'sini tek "Kontrol: x = 1" adımında topla, adımlar 6 yerine 5–6). b6b ornek: tersane ölçü cihazı örneğinin sayılı hâli ("4 mm hedef; 1 mm ölçüldü").
- Eksik: hiçbir kontrol sorusu |x − 4| satır kurmayı yoklamıyor (Q3 yalnız ayrım noktası). b6 sonuna zorluk 1: "x ≥ 4 iken |x − 4| kaçtır: x − 4 mü, −x + 4 mü?".

**(b) b9 (`bolumler[8]`) görüntü kümesi:** s016 a) ve b9 yazılı c, "görüntü kümesi [0, 2]" soruyor; basit yalnız minimum ve maksimumu veriyor. Öneri: adım 4 sonrasına: "Sapma 0 ile 2 arasındadır; görüntü kümesi [0, 2]." Ayrıca `basit[0]` iki fikri taşıyor (varsayımsal "olabilseydi ... olmazdı" ve **kapalı aralık** terimi). Terimi ayrı paragrafa al: "Uçları dahil aralığa **kapalı aralık** denir: [18, 22]." Ve ornek sorusuna (adım 3) cevabı bağla: "Yani sapma en fazla 2 mm."

### P2-20 · ORTA · b10 tanım kümesi ve yazım sırası
Dosya: `bolumler[9]`.
- `basit` hiçbir yerde tanım kümesinin öyküden nasıl yazıldığını göstermiyor. `yazilida.ornek_cevap[2]` ("Tanım kümesi [240, 260] olur") ve `puan_ipucu` bunu bekliyor; b9 aralığı hazır veriyor. Öneri: basit[3] sonrasına: "Boru 110 cm ile 130 cm arasında kesilirse x'in aralığı [110, 130]'dur. Bu aralık tanım kümesidir."
- `basit[2]` "Hedef sayı mutlak değerin içine eksiyle yazılır." belirsiz (hangi sayı, hangi eksi). Öneri: "Içine önce x, sonra − hedef yazılır: x − 120."
- Hem |ölçülen − hedef| hem |hedef − ölçülen| doğru; bankada ikisi de kabul (s016 `kabul_edilenler`). Kartta tek yazım var. Öneri (DÜŞÜK): basit[1] sonuna "|120 − 118| de aynı sonucu verir."
- b10 yazılı örneği ile s016/s019 neredeyse aynı: ekmek, 250 g, [240, 260], g(244), g(256) ↔ s019 s(245), s(255) ve s016 s(x) = |x − 250|. s016 a) cevabı kartta çözülmüş hâlde var. Banka sorusu ezberle çözülür, zorluk 3 saygı görmez. Öneri: bankanın birini başka bağlama taşı (tersane boru, ya da futbol: kaleye uzaklık), ya da kart yazılı örneğini başka sayılara (ör. simit 120 g, [110, 130]) çevir.

### P2-21 · ORTA · b11 adım dilinin sıkışık yerleri
Dosya: `bolumler[10].katmanlar.basit`.
1. Adım 7: "Yolculuk 4 saat sürer; tanım kümesi [0, 4] olur. Uçlarda f(0) = f(4) = 8; römorkör rıhtımdadır." Bir adımda üç fikir (süre, tanım kümesi, uç değerler) ve "[0, 4]"ün nereden çıktığı yok (gidiş 2 + dönüş 2). Öneri: üç adıma böl: "7. Gidiş 2, dönüş 2 saat sürer: 2 + 2 = 4. 8. Tanım kümesi [0, 4]. 9. Uçlar: f(0) = |−8| = 8 ve f(4) = |8| = 8; römorkör rıhtımdadır."
2. Adım 1: "hız saatte 4 km'dir" işlemi göstermiyor. Öneri: "8 ÷ 2 = 4; hız saatte 4 km'dir."
3. Adım 5: "İkisini tek ifadede toplayan mutlak değerdir" yanıltıcı ("toplamak" toplama işlemi sanılabilir). Öneri: "İki ifade birbirinin işaret değiştirmişi olduğu için mutlak değer ikisini tek ifadede yazar: f(t) = |4t − 8|."
4. basit[0] son cümle "Bu bir V biçimidir; yani mutlak değer fonksiyonu kurulur." neden-sonuç atlıyor. Öneri: "Uzaklık önce azalıp 0 olduğu, sonra arttığı için grafik V'ye benzer. Bu hikâyeyi mutlak değerle yazarız."
5. Gerçekçilik (DÜŞÜK): römorkör 4 km/sa (yaklaşık 2 knot) çok yavaş. Sayı kurgusal olarak kartın `dogrula` notunda kabul edilmiş, öğrenci için sorun değil; istenirse "tekne" ya da 12 km / 2 saat (6 km/sa).
6. Kontrol Q2 ipucu[0] "Şamandıraya uzaklık 0 ise römorkör nerededir, düşün." sorunun ikinci yarısının cevabını ("şamandıradadır") veriyor. İlk yarı (t değeri) hâlâ hesap istiyor, kabul edilebilir.

### P2-22 · ORTA · b13 adım dili (sıkışık işlem, numarasız çözüm)
- `bolumler[12].katmanlar.basit[1]`: "x ≥ 3 iken x − 3 − 2 = 0 olur; buradan x = 5." İki işlem (sadeleştir, çöz) tek satırda. `[2]`: aynı. Matematik çözümü numaralı değil (kural 9).
- Öneri (iki satır, numaralı): "1. x ≥ 3 iken |x − 3| = x − 3. 2. x − 3 − 2 = 0 ⇒ x − 5 = 0. 3. x = 5. 4. x < 3 iken |x − 3| = −(x − 3) = −x + 3. 5. −x + 3 − 2 = 0 ⇒ −x + 1 = 0. 6. x = 1." Uzunsa uzaklık yorumuyla: "|x − 3| = 2, 'x, 3'ten 2 uzakta' demektir: 1 ve 5" (ornek metnindeki 1. ve 5. saniye ile birebir örtüşür).
- `bolumler[12].yazilida.ornek_cevap[3]` ve `[4]`: "g(x) = 2x − 2 − 4 = 2x − 6. 2x − 6 = 0 ⇒ x = 3." Sadeleştirme ve çözüm bir satırda. Öneri: her biri iki satır.
- s013 `cozum_adimlari[3]` ("Tablo: x = 2, 3, 4, 5 için f(x) = 2, 0, 2, 4.") tablo olarak kabul.

### P3-23 · DÜŞÜK · "minimum değer" ile "minimum noktası" ayrımı
Tek cümle ve net: `bolumler[3].katmanlar.basit[3]`: "Dikkat: minimum değer yalnız y'dir, yani 0; minimum noktası ise (x, y) ikilisidir, yani (0, 0)." Flashcard[6] aynı. GEÇER.
Küçük noktalar:
- `bolumler[1].terimler[1].tanim` (b2) iç içe parantezle ("(0), ... ((0, 0))") okunması zor. Öneri: "Minimum değer yalnız y'dir: 0. Minimum noktası (x, y) ikilisidir: (0, 0)."
- "Minimum değer" ilk b2 kontrol Q2'de ("minimum değerini hangi x değerinde alır") geçiyor, kalın tanımı b4'te. Ayrım cümlesi b4'te; b2 Q2 ona dayanıyor. Öneri: ayrım cümlesini b2 basit[3]'e taşı, b4'te tekrar et.
- Bankada nokta ve değer sorusu iki: s020 (nokta) ve s011/s012 (değer). Yeterli.

### P2-24 · ORTA · İpucu merdiveninde kalan sınır vakaları
3. basamak neredeyse cevap (sınırda):
- `bolumler[11].kontrol_sorulari[1].ipuclari[2]` (b12 Q2): "Sondaki −2'nin önündeki işareti at; kaç kaldı?" cevap "2 birim"i veriyor. Öneri: "Mutlak değerin dışındaki sayıya bak: −2. Eksi yönü, sayı büyüklüğü aşağı kayma kadarını gösterir. Kaç birim?" ya da ipucu[2]: "−2 hangi yöne kaydırır, kaç birim?"
- s016 `ipuclari[2]`: "245 g için sapma |245 − 250| = 5 g'dır; şimdi 245 yerine x yaz." |x − 250| cevabını söylüyor. Öneri: "245 g için sapma |245 − 250| = 5 g'dır. 260 g için aynı kalıbı yaz." (öğrenci genellemeyi kendisi yapar).
- `bolumler[4].kontrol_sorulari[0].ipuclari[2]` (b5 Q1): "İlk adım: |−3| = 3. Şimdi bu sonuca baştaki işareti uygula." Cevap −3, tek adım kalıyor; tur 1'den iyi, kabul edilebilir.
- `bolumler[10].kontrol_sorulari[1].ipuclari[2]` (b11 Q2): "4t = 8" yazdırıyor, bir bölme kalıyor; ilk adım, kabul.
1. basamak: ihlal yok. b9 Q1 ipucu[0] ("Sınırlı aralıkta en büyük değer uçlardan birinde çıkar.") yön değil yöntem; sıra bozuk ama cevap vermiyor.
Yöntem uyumsuzluğu: s010 (|x − 4| = 3) ve s012 (|x − 1| = 3) iç = ±3 yöntemini kullanıyor; kartta bu yöntem yalnız b13 Q2 ipuçlarında ("0'dan 4 adım sağa git; sonra sola da bak") ve b7 ornek'te (1. ve 5. km). b10'a "x, 3'ten 2 uzaktaysa 1 ya da 5" tek paragraf ekle (bkz. P2-22).

### P3-25 · DÜŞÜK · s016 / s019 / s020 banka ayrıntıları
**s016 + s019 (ekmek, [240, 260]) yönergeleri:**
- Yönergeler açık: "işlemlerinizi göstererek", a)/b) etiketli, puan sonda, her iki soru ≤ 2 ana görev. Tur 1'in "tek soruda 4 şık, 15 puan" sorunu bölmeyle çözüldü (8 + 7 puan).
- Okunabilirlik: kelime sayısı s016 ≈ 70, s019 ≈ 75 (tur 1: ≈ 130). Cümleler ≤ 14 kelime. s016 kök 3 cümle, bağlam 3 cümle (P1-17: kısaltılmalı). s019 bağlamı 3 cümle, temiz.
- Bağlam gerçekçiliği: Gölcük'te fırın, 250 g ekmek, ±10 g (%4) makul; tersane levha sorunu ortadan kalktı. CLAUDE.md yerel bağlam kuralı karşılanıyor (Gölcük + günlük hayat). Çeşitlilik: aynı fırın üç yerde (b10 yazılı, s016, s019). Öneri: s019'u futbol ya da tersane bağlamına çevir (P3-28).
- Rubrik: s016 3 + 2 + 1 + 2 = 8, s019 2 + 2 + 1 + 2 = 7, toplamlar `puan` ile uyumlu. s016 `puanlama_notu` ("{0, 10} ya da tam sayılar yazılırsa görüntü kümesi puanı verilmez") doğru ve pedagojik.
- Zorluk etiketi: s016 (z3, 8 puan) yalnız modelleme ve görüntü kümesi istiyor; s019 (z2) minimum, maksimum ve bire birlik. P1-17 uygulanırsa s016'nın z3 kalması savunulur; uygulanmazsa z2'ye inmeli (dağılım 10/8/2 = %50/40/10, eşikte kalır).
- Dizilim: dosyada s016, s019, s017, s018 sırasıyla; numara sırası bozuk (kozmetik).

**s020 çeldiricileri (minimum noktası):**
- `2` (değer ile nokta karışıklığı): kasıtlı ve iyi hedefli; ama biçim farklı (tek sayı, diğerleri ikili) olduğu için elenmesi kolay. `(2, 5)` (x ile y yer değişimi) ve `(−5, 2)` (işaret) mantıklı. En olası hata olan `(5, 0)` ("+2'yi unutmak", b12 öteleme hatası) seçenek listesinde yok. Öneri: `(2, 5)` yerine `(5, 0)`; açıklaması: "+2 grafiği 2 birim yukarı öteler; y değeri 0 değil 2 olur."
- Zorluk: s011 (aynı beceri: |x + 3| − 2, minimum x ve değer) zorluk 2; s020 zorluk 1. Tutarsız. Seçenekli olması fark yaratabilir, ama dengeyi korumak için s020 zorluk 2 olabilir (dağılım 9/8/3 = %45/40/15, eşik içinde).
- İpuçları: [0] yapıyı veriyor (nokta iki sayıdan oluşur), [1] yöntem, [2] ilk adım (x − 5 = 0); cevap vermiyor. Güzel.
- Terim: `hata_turu` "carpim_sifir_isaret" s003, s011, s013, s020'de tekrarlıyor (dört soru aynı yanılgı); çeşitlilik DÜŞÜK.

### P3-26 · DÜŞÜK · b2 ve b5: "bütün doğruyu yansıtma" yanılgısı için kalıntı kontrolü
Sonuç: b2 yanılgıdan arınmış.
- `bolumler[1].ornek.metin`: yalnız eksi olan iki değerin değiştiği sayılarla gösteriliyor. basit[1] "Yalnız bu alttaki kısmı ... yukarı çevir.", basit[2] "Üstteki kısım aynen kalır; bütün doğru yansıtılmaz." Yanılgıyı besleyen ifade yok. Kontrol Q3 ("x < 0 kısmı mı, x > 0 kısmı mı?") doğrudan yoklıyor.
- Kalıntılar: (1) `bolumler[1].terimler[0].tanim` "ayna gibi ters çevirmek": "ayna" mecazı bütün şekli çağrıştırabilir. Öneri: "bir parçayı x eksenine göre öbür tarafa, aynı uzaklığa taşımak". (2) `bolumler[4].ornek.metin` (b5): "Sakin denizde bu harfin yansıması ters döner ... Bu kez harfin tamamı ters dönüyor." b5 için doğru (−|x| bütün grafiği yansıtır) ve b2'yle bilinçli karşıtlık kuruyor. Kabul; "Bu kez" ifadesi iyi. (3) b2 ornek `baglam: "deniz"` etiketi metindeki tek kelimeye ("dalgıç") dayanıyor, örnek b1 tablosuna gönderme; kendi başına somut değil. Öneri: tek cümle ekle: "Dalgıç −2 m'deyse yüzeye uzaklığı 2 m'dir." (4) kitap[2] "Kitap bu noktayı ..." bağlamsız (öncesinde nokta anlatılmıyor); kitap[1] "parçalı gösterimli" terimini b6'dan önce kullanıyor. İkisi kitap katmanında, DÜŞÜK.

### P3-27 · DÜŞÜK · Soru bağlamı 4 cümle
`sorular/...`: s010 `baglam` (4 cümle), s018 `baglam` (4 cümle). Sınav biçimine yakın olduğu için kabul edilebilir ama profil için kısaltma önerilir.
- s010: "Ali yolun 1. kilometresinde duruyor." ve "Can, Ali'den farklı bir yerde ama büfeye Ali ile aynı uzaklıkta." tek cümle: "Ali 1. kilometrede duruyor; Can, Ali'den farklı bir yerde ve büfeye Ali ile aynı uzaklıkta." (kök zaten ayrı).
- s018: 2. ve 3. cümleyi birleştir: "Tekne sabit hızla gidiyor, koyda beklemeden aynı rotadan geri dönüyor."

### P3-28 · DÜŞÜK · Bağlam çeşitliliği
Kartta tersane 7/13, banka bağlamlı sorular: deniz (s009), Gölcük sahil (s010), fırın (s016, s019), tur teknesi (s018). Futbol yalnız b3'te, günlük hayat yalnız fırın. Öneri: b11 yazılı ve s019'dan birini futbol (kaleye uzaklık, orta çizgiden sapma) ya da okul bağlamına çevir.

### P3-29 · DÜŞÜK · Kontrol soruları zorluk 1 sınırında
`bolumler[8].kontrol_sorulari[0]` (b9 Q1: iki uç hesabı + karşılaştırma), `bolumler[9].kontrol_sorulari[0]` (b10 Q1: modelleme), `bolumler[12].kontrol_sorulari[1]` ve `[2]` (b13 Q2, Q3: iki adım). Ara soru önerisi: b13 Q2 için "|x| = 4 ise x kaç olabilir?" (zorluk 1); b9 Q1 için "g(15) kaçtır?".

---

## Güçlü yönler (korunmalı)
- Tüm yasak adlar (tepe, simetri, köşe, katla) kartta ve bankada temizlendi; "minimum noktası" ve "maksimum noktası" kitap diliyle öğretiliyor ve s020 ile sınanıyor.
- b9–b11 yapısı iyi: önce somut örnek, sonra kalıp, sonra yazılı; b10 basit sayı + tablo + genelleme (4 mm, 20, 32).
- b11 basit ortalama cümle uzunluğu 7,8; kalın terim + tanım uyumlu; kontrol sorusu 2 adet.
- Banka çözümleri temiz: s016–s018 adımları değer değer ayrı; s018 ipuçları yön, yöntem, ilk adım sırasında.
- Zorluk dağılımı %50/%35/%15 tam; yanlış cevap dili azarlamasız.
- Matematik doğruluğu elle yeniden hesaplandı (b9: [17,21] maks 3; b10: 118→2; b11: |4t − 8|, f(0) = f(4) = 8, f(1) = 4; b13: sıfırlar 1 ve 5, −1 ve 3; s016–s020 cevapları) hata yok.

## Ölçülemeyen / örneklemeyle bakılan
- Ortalama cümle uzunluğu: yalnız b9, b11, b13 basit sayıldı; diğer bölümler tur 1 örneklemine dayanıyor.
- 21+ simgelik cümle taraması regex ile yapıldı; gerçek kelime sayımı yalnız eşleşen 13 satır için elle yapıldı.
- Grafik/ekran görünümü: kart metin; çizimler tablo ve noktalarla anlatılıyor, panel render'ı incelenmedi.
- Kitap sayfa numaraları ve "kitap minimum/maksimum noktası der" iddiası kaynağa karşı bu turda doğrulanmadı (docs/dogrula.md #22, #25).
- `puan_ipucu` içindeki "2025-26 1D1Y lastik basıncı sorusu aynı 'ortadan uzaklık' fikrini kullanmıştı" (b9) kart `kaynak` alanıyla çelişiyor olabilir (kaynak: 9.1 eşitsizliği); doğruluk denetçisine bırakıldı.
