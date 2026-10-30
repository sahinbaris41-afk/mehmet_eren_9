# Pedagoji denetimi: 9. sınıf Matematik, Ünite 2, K2 (9.2.2 mutlak değer fonksiyonu), tur 1

Denetçi: pedagoji-denetcisi (salt okur). Hiçbir içerik dosyası değiştirilmedi.
Kapsam: `dersler/matematik/konular/matematik-u2-k2.json` (10 bölüm, 28 kontrol sorusu, 8 flashcard, 9 sık hata), `dersler/matematik/sorular/matematik-u2-k2.json` (18 soru).
Biçim referansı: `denetim/pedagoji_matematik_u2k1_tur1.md`.

## KARAR: DÜZELTİLMELİ

Gerekçe: Kullanıcı kısıtı #25 kartta ihlal ediliyor (27 satır). Bu aynı zamanda kart ile soru bankası arasında dil kopukluğu yaratıyor. Ayrıca en zor iki soru (s016, s018) kartta hiç öğretilmeyen iki beceriyi istiyor. Kalan bulgular biçim düzeyinde.

## Yöntem
- İki dosya baştan sona okundu. "tepe / simetri / köşe" ve soyut kelime taraması Grep ile yapıldı (kart 27 satır; banka 0).
- Ortalama cümle uzunluğu ÖRNEKLEMEYLE değerlendirildi (10 bölümün `basit` + `ornek` metinleri, tüm soru kökleri ve bağlamları). Tam sayım yapılmadı.
- Paragraf cümle sayısı: tüm `basit`, `kitap`, `ornek` metinleri tek tek sayıldı.
- Zorluk dağılımı bankada tam sayıldı. Kitap sayfa içerikleri bu turda kaynağa karşı doğrulanmadı (dogrula.py/kaynak denetimi ayrı).
- Matematik değerleri elle yeniden hesaplandı (b1–b10 yazılı çözümleri, s001–s018 cevapları): hata bulunmadı.

## Ölçüt tablosu

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Cümle > 20 kelime | 0 gerçek ihlal; 2 simge yoğun sınırda (b6 kitap[2], b9 kitap[2]) | 0 | GEÇER (sınırda, P2-12) |
| Ortalama cümle uzunluğu (örneklem) | ~9-11 (basit katman) | ≤ 12 | GEÇER (örneklem) |
| Paragraf ≤ 3 cümle | 2 ihlal: b1 `ornek` (4), b6 `ornek` (4); 3 soru bağlamı 4-5 cümle | 0 | EKSİK (P2-10) |
| Bölüm başına tek fikir | b2 (5 paragraf, 3 terim), b4, b8 (5 fikir), b10 yoğun | tek | EKSİK (P1-02, P2-08) |
| Kuraldan önce somut örnek | 10/10 bölümde `ornek` var; b2 örneği kuralı yanlış yöne çekiyor | 10/10 | KISMEN (P1-02) |
| Yerel bağlam oranı | 10/10 (deniz 4, tersane 4, futbol 1, Gölcük 1) | ≥ %50 | GEÇER |
| Soyut kelime (basit) | olgu/kavramsal/bağlamında/nitelik: 0. "nitel özellik" b8 başlığında ve flashcard'da (k1'de tanımlı) | 0 | GEÇER (not) |
| Terim ilk geçişte kalın + tanım | 4 terim kalın ve tanımlı + 2 kitap-dışı ad; `terimler` 7/10 bölümde boş; "minimum noktası/maksimum noktası/öteleme/cebirsel temsil" kartta tanımsız | hepsi | EKSİK (P1-01, P2-07) |
| Kontrol sorusu sayısı | 2,3,3,3,2,2,3,3,3,3 | 2-3 | GEÇER |
| Kontrol sorusu zorluk 1 | 3 sınırda (b8 Q3, b10 Q2, b10 Q3) | hepsi | SINIRDA (P3-14) |
| İpucu: 1. basamak cevap vermiyor | 3 ihlal: b1 Q2, s016, s017 | 0 | EKSİK (P2-09) |
| İpucu: 3. basamak cevap değil | 6 sınırda (kart b2 Q1, b5 Q1, b7 Q2, b9 Q1, b9 Q3; banka s015 ters) | 0 | SINIRDA (P2-09) |
| Zorluk dağılımı (banka) | 9 / 6 / 3 = %50 / %33 / %17 | %50/35/15 ± 10 | GEÇER |
| Yanlış cevap dili | azarlama yok; `sik_hatalar` "sanmak/unutmak" | azarlamasız | GEÇER (DÜŞÜK not) |
| Matematik çözümü: numaralı, adım başına tek işlem | numaralı tam; 7 adımda 2-4 işlem birleşik | tek işlem | EKSİK (P3-13) |
| Kart ↔ banka dil tutarlılığı | tepe/simetri/köşe/katla yalnız kartta | aynı dil | EKSİK (P1-01) |

---

## Bulgular (öncelik sırasıyla)

### P1-01 · YÜKSEK · Kullanıcı kısıtı #25: "tepe noktası", "simetri ekseni", "köşe" kartta 27 satırda geçiyor
Dosya: `konular/matematik-u2-k2.json`. Soru bankası temiz (Grep 0). Kitap 'minimum/maksimum noktası' der (s.134).

**Her geçtiği yer (JSON yolu → yerine ne yazılmalı):**

| # | Yol (satır) | Şimdiki | Öneri |
|---|---|---|---|
| 1 | `bolumler[1].katmanlar.basit[3]` (138) | "V'nin köşesine **tepe noktası** diyoruz." | "V'nin en alt noktası (0, 0)'dır. Kitap buna **minimum noktası** der." |
| 2 | `bolumler[1].katmanlar.basit[4]` (139) | "**simetri ekseni** denir" | Paragrafı sil (tek fikir kuralı). İstenirse: "g(−3) = g(3) = 3. V'nin iki kolu y ekseninin iki yanında aynı yüksekliktedir." Ad yok. |
| 3 | `bolumler[1].katmanlar.kitap[2]` (144) | "Kitap 'tepe noktası' adını kullanmaz..." | Kartın kendi hatasını anlatan üst-metin; ad kalkınca anlamsız. "Kitap bu noktayı |x| için 'minimum noktası' diye anar (s.134)." |
| 4 | `bolumler[1].terimler[1]`, `[2]` (165-170) | tepe noktası; simetri ekseni | `[1]` → "minimum noktası: grafiğin en alt noktası; |x| için (0, 0)." `[2]` sil. `[0]` yansıma kalır. |
| 5 | `bolumler[1].kontrol_sorulari[1]` (185-192) | "tepe noktası hangi noktadır?" + 3 ipucu | "g(x) = |x| grafiğinin minimum noktası hangi noktadır?" İpucu: "V'nin en alt noktasına bak." |
| 6 | `bolumler[1].kontrol_sorulari[2]` (195-202) | "simetri ekseni hangisidir?" | Sil. Yerine zorluk-1 soru: "g(−4) ile g(4) eşit midir?" (aynı fikir, adsız). Bölüm yine 3 soru. |
| 7 | `bolumler[4].katmanlar.basit[1]` (373) | "tepe noktası yine (0, 0)'dır ama bu kez en üst noktadır" | "V ters döner. En üst nokta (0, 0)'dır; kitap buna **maksimum noktası** der." |
| 8 | `bolumler[4].kontrol_sorulari[1].ipuclari[0]` (413) | "en üst noktası tepe noktasıdır" | "Grafik ters V'dir; en üst noktaya bak." |
| 9 | `bolumler[6].katmanlar.basit[2]` (511) | "tepe noktası (3, 0)" | "...V oluşur. En alt nokta (3, 0) olur." |
| 10 | `bolumler[6].katmanlar.basit[3]` (512) | "Simetri ekseni x = 3 doğrusudur." | Sil. |
| 11 | `bolumler[6].katmanlar.basit[4]` (513) | "doğrunun sıfırı, V'nin tepesidir... tepe noktası (x, 0)" | Analoji paragrafı, aşağıya bak (öneri A). |
| 12 | `bolumler[6].yazilida.ornek_cevap[4]` (528) | "(3, 0) aynı zamanda tepe noktasıdır" | "(3, 0) aynı zamanda minimum noktasıdır." |
| 13 | `bolumler[6].kontrol_sorulari[0]` (536-539) | soru + ipucu[0] "tepe noktası" | Soru: "|x − 5| grafiğinin minimum noktası hangi noktadır?" İpucu[0]: "Minimum nokta, mutlak değerin içini 0 yapan x'tedir." |
| 14 | `bolumler[8].katmanlar.basit[0]`, `[1]`, `[3]` (661, 662, 664) | "Tepe noktası (2, 0)'dan (2, 3)'e çıkar" vb. | "Minimum noktası..." ; `[3]`te −|x−2|+3 için "**maksimum** noktası (2, 3)'tür" (işaret duyarlı!). |
| 15 | `bolumler[8].yazilida.ornek_soru` (673), `ornek_cevap[1]`, `[3]` (676, 678) | "Tepe noktasını..." | "Grafiğin minimum noktasını ve y eksenini kestiği noktayı..." |
| 16 | `bolumler[8].kontrol_sorulari[0]` (687, 690) | soru + ipucu | "|x| + 4 grafiğinin minimum noktası..." |
| 17 | `bolumler[8].kontrol_sorulari[2]` (707, 710, 714) | soru, ipucu, yanlis_aciklama "tepeyi" | Soru: "−|x| + 5 grafiğinin maksimum noktası...". Açıklama: "...+5, en üst noktayı 5 birim yukarı taşır." |
| 18 | `bolumler[9].katmanlar.basit[0]` (735) | "tepe noktası (3, −2)" | "En alt nokta (3, −2)'dir (minimum noktası)." |
| 19 | `bolumler[9].katmanlar.basit[4]` (739) | "Tepe x ekseninin üstündeyse... tepe tam x ekseni üzerindeyse" | "Minimum değer 0'dan büyükse (|x − 3| + 2'de 2) grafik x eksenine değmez; sıfır yoktur. Minimum değer 0 ise tek sıfır vardır." |
| 20 | `bolumler[9].katmanlar.kitap[2]` (744) | "tepe noktasının iki yanında" | "x = −b/a'nın iki yanında" |
| 21 | `bolumler[9].yazilida.ornek_cevap[0]` (750) | "Tepe noktası (1, −4)'tür." | "Minimum noktası (1, −4)'tür." |
| 22 | `flashcard[5]` (818) | "tepe noktası nerededir?" | "|ax + b| grafiğinin minimum noktası nerededir?" Arka: "İçi sıfır olan yerde. Örnek: |2x − 6| için x = 3, nokta (3, 0)." (bkz. P2-06) |
| 23 | `flashcard[7]` (827) | "Tepe noktasının iki yanında" | "İçi 0 olan x'in iki yanında eşit uzaklıktaki x'ler..." |
| 24 | `sik_hatalar[3]` (844-845) | `hata_turu: "tepe_isaret"`, "tepe (2, 0)" | Kod adı `sifir_isaret` (bankadaki `carpim_sifir_isaret` ile aynı hata, iki kod var); metin: "...İçini sıfır yapan x = 2'dir; nokta (2, 0)." |
| 25 | `sik_hatalar[7]` (861) | "Tepe x ekseninin altındaysa iki sıfır vardır" | "Minimum değer negatifse iki sıfır vardır." |
| 26 | `dogrula[0]` (869) | kullanıcı kısıtı kalktığında | Kararı kapat: ad değiştiği için bu DOĞRULA satırı artık "kart kitap adını kullanıyor" olarak güncellenmeli ve docs/dogrula.md #25 kapatılmalı. |

(Satır 27 ve 28: aynı kayıtlarda "köşe" geçişleri, `terimler[1].tanim` ve b2 kontrol[1] `yanlis_aciklama` "V'nin köşesi...". Aynı düzeltmeyle "V'nin en alt noktası" olur. "Köşe" de kitapta geçmiyor; üstelik günlük kelime olduğu için bırakılabilir, ama sorular tek adla (minimum noktası) sorulmalı.)

**Öneri A: Analojiyi bu adlar olmadan kurmak (b7 `basit`, 5 paragraf yerine 4 + 1):**

Zincir dört halka: doğrunun sıfırı → grafiğin yukarı çevrildiği yer → orada değer 0 → kitap adıyla minimum (veya maksimum) noktası. Her halka kendi paragrafında, sayıyla.

1. (mevcut b7 basit[0-1] kalır: önce doğruyu çiz, altını yukarı yansıt; 2x − 6 örneği.)
2. "y = 2x − 6 doğrusu x eksenini x = 3'te keser. Doğrunun sıfırı 3'tür." (mevcut)
3. "Doğru tam burada eksiden artıya geçer. Altı yukarı çevrilince grafik bu noktada V olur: (3, 0)."  ← "katlanma" yerine "eksiden artıya geçer" (k1'de öğrenilen işaret fikri).
4. "Orada |2x − 6| = 0'dır; başka hiçbir yerde bu kadar küçük değil. Kitap bu noktaya **minimum noktası** der."
5. "Kısa yol: doğrunun sıfırı neyse minimum noktasının x'i odur. İçini 0 yapan x'i bul; nokta (x, 0) olur."

Not: "katlanma noktası" gibi yeni bir ad EKLEMEYİN. Üç ad (sıfır, katlanma, minimum) öğrenciye yük olur ve sınavda kitap dili beklenir. Eksiden artıya geçiş + "sıfır" + "minimum noktası" üçlüsü k1 dilini (sıfır, işaret) kullanır ve kitap diliyle biter. Ters V için aynısı: "−|…| için bu nokta en üsttür, kitap buna **maksimum noktası** der" (b5, b9 basit[3]).

**Kart ↔ banka dil tutarlılığı:**
- Banka "minimum değer ... hangi x değerinde" (s011), "artan olduğu en geniş aralık" (s013), "sıfırı" (s003), "yansıt" (s004, s006, s008) diyor. Kart ise bölüm başlığında "katla" (b2), kontrol sorularında "tepe/simetri" diyor. Öğrenci kartta öğrendiği adla bankada karşılaşmıyor; sınav da kitap dilinde olacak.
- Kartın `basit` katmanı "en küçük/en büyük değer" diyor; `kitap` ve banka "minimum/maksimum değer". Eşleme bir yerde açık yapılmalı: b4 basit[2] "En küçük değer (**minimum değer**) 0'dır..." (k1 terimlerinde "minimum değer" zaten tanımlı).
- Kartta "değer" ile "nokta" ayrımı yok: "minimum değer 0" (yalnız y) ile "minimum noktası (0, 0)" (x ve y). Terim `minimum noktası` tanımında bu ayrım tek cümleyle verilmeli: "Minimum değer yalnız y'dir. Minimum noktası (x, y) ikilisidir."
- Bankada "minimum noktası" ya da "maksimum noktası" soran soru yok. Kart bu adı öğretecekse bankaya bir zorluk-1 madde eklenmeli (örn. "|x − 5| grafiğinin minimum noktası (5, 0)'dır: D/Y"), yoksa kart kontrol sorusu dışında hiç pekişmez.

---

### P1-02 · YÜKSEK · b2 `ornek`: ayna benzetmesi kuralı yanlış yöne çekiyor; bölümde 5 fikir var
`bolumler[1].ornek.metin`: "Sudaki görüntü, vincin baş aşağı kopyası gibi görünür. Deniz yüzeyi bir ayna görevi görüyor."
- Sorun 1: Su aynası TÜM resmi çevirir (vinç yukarıda, kopyası aşağıda). Kuralımız yalnız x ekseninin ALTINDAKİ kısmı yukarı çevirir. Örnek, sık hata `yansima_kapsam`'ı (bütün doğruyu yansıtmak) besler. Bankada s008 seçeneği tam bu yanılgıyı yokluyor.
- Sorun 2: Örnek sayı içermiyor, kuralın "yukarı katla" yönünü göstermiyor. Başlık "katla", metin "yansıma", flashcard "yansıtılır": aynı işlem üç adla.
- Sorun 3 (tek fikir): basit[0-4] = doğru + yansıma + V şekli + köşe adı + simetri adı. Ekran başına bir fikir kuralı bozuk.
- Zaten b1'de sayılar var. Önerilen: b1 tablosundan ilerle.

Önerilen `ornek.metin` (3 cümle): "Gölcük iskelesinde dalgıç −3 m'de. Yükseklik −3 ama uzaklık 3 m. Eksi olan kısım, uzaklık olarak artıya çevriliyor."
Önerilen `basit` (4 paragraf):
1. "b1'deki tabloyu çizelim: (−2, 2), (−1, 1), (0, 0), (1, 1), (2, 2). Noktaları birleştirince V çıkar."
2. "Sağ kol f(x) = x doğrusuyla aynıdır. Sol kol, o doğrunun x ekseninin altındaki kısmının yukarı çevrilmişidir."
3. "Buna **yansıma** denir. Örnek: (−2, −2) noktası (−2, 2) olur. x aynı kalır, yalnız y'nin işareti değişir."
4. "V'nin en alt noktası (0, 0)'dır; kitap buna **minimum noktası** der." (bkz. P1-01 #1)
Başlık: "|x| grafiği: alttaki kısmı yukarı yansıt".

---

### P1-03 · YÜKSEK · s016 ve s018: kartta öğretilmeyen iki beceri (modelleme ve kısıtlı tanım kümesinde maksimum)
- (a) Modelleme. s016 ve s018 öğrenciden "cebirsel temsili YAZMASINI" istiyor. Kartta b8, b9, b10 öyküde formülü hazır veriyor ("sapma |x − 20| mm olur"). Bir öyküden |...| kurmak hiçbir bölümde işlenmiyor. "Cebirsel temsil" terimi yalnız `bolumler[5].katmanlar.kitap[0]`'da geçiyor; `basit` ve `terimler`'de yok.
- (b) Kısıtlı tanım kümesi. s016, s018 ve b8 yazılı sorusu "maksimum değer ve alındığı x" istiyor. Bunun nedeni (aralık sınırlı olduğu için maksimum var) yalnız `bolumler[7].katmanlar.kitap[2]`'de geçiyor. `basit` katmanı yalnız "maksimum yok" diyor (b4, b8). 15 puanlık sorunun kritik fikri `basit`te yok.
- Öneri 1 (b8 basit'e iki paragraf, "−|ax+b|" paragrafı b5'te zaten var, oradan çıkar; bkz. P2-08):
  - "Levha 18 ile 22 mm arasında olsun. En büyük sapma uçlarda olur: 18 ve 22'de 2 mm. En küçük sapma 20'de, 0 mm."
  - "Tanım kümesi sınırlıysa V'nin kolları bir yerde biter. Bu yüzden maksimum değer vardır."
- Öneri 2 (b8 basit'e öykü→fonksiyon örneği): "Sapma = ölçülen kalınlık ile 20 arasındaki fark. 19 → 1, 21 → 1. Eksi olmasın diye mutlak değer: |x − 20|."
- Öneri 3 (s018): Kartta hareket öyküsü yok. Ya b9'a "gidiş-dönüş" örneği eklenmeli ya da s018 a) şıkkı kolaylaştırılmalı: "Teknenin hızı 15 km/sa. t saat sonra koya uzaklığı gidişte 30 − 15t, dönüşte 15t − 30 km'dir. Tek ifade yazınız." Şu hâlinde a) şıkkı tek başına dört fikir (hız, gidiş, dönüş, mutlak değerle birleştirme).

---

### P1-04 · YÜKSEK · b6 `basit` |x − 4| türü parçalı gösterimi öğretmiyor; yazılıdaki ilk karşılaşma
`bolumler[5].katmanlar.basit` yalnız |x| ve −|x| parçalı gösterimini veriyor. |ax + b| için (içi sıfır yapan x'ten bölme) yalnız `kitap[2]` (simgeyle dolu) ve `yazilida.ornek_cevap`'ta var. Ancak b10 `basit[1-2]` bunu hazır bilgi sayıp kullanıyor, s015 (zorluk 2, 10 puan) bunu soruyor. Öğrenci `basit`ten hiç görmeden `yazilida`ya düşüyor.
- Öneri (b6 basit'e 3 paragraf ekle, ya da b6'yı iki bölüme böl, süre zaten 6 dk):
  1. "|x − 4| için önce içini 0 yapan x'i bul: x − 4 = 0, x = 4."
  2. "x ≥ 4 iken içi 0 ya da artıdır, aynen çıkar: g(x) = x − 4. x < 4 iken içi eksidir, işaret değişir: g(x) = −(x − 4) = −x + 4."
  3. "Kontrol: x = 1 için |1 − 4| = 3 ve −1 + 4 = 3. İki yol aynı sonucu verir."
- Ters sıra riski: b6 `kitap[2]` ("Genel kural (s.134): a > 0 iken |ax + b|, x < −b/a için −ax − b, x ≥ −b/a için ax + b olur...") tek cümlede ~22 simge. Zayıf okuyucu için o cümle bölünmeli: iki cümleye, her biri tek satır.

---

### P2-05 · ORTA · b1 `ornek` ve b6 `ornek` 4 cümle (paragraf ≤ 3 kuralı)
- `bolumler[0].ornek.metin`: 4 cümle. Öneri: 1. ve 2. cümleyi birleştir: "Gölcük iskelesinde deniz yüzeyi 0. Dalgıç 3 m aşağıda (−3), martı 3 m yukarıda (3). İkisi de yüzeye 3 m uzakta."
- `bolumler[5].ornek.metin`: 4 cümle. Öneri: "Tersanede bir ölçü cihazı çubuğun sapmasını gösteriyor. Çubuk 3 mm kısaysa da 3 mm uzunsa da ekranda 3 yazıyor. Cihaz kısa için bir, uzun için başka bir kural kullanıyor." Ayrıca ölçü cihazı örneği "iki kural" fikrini doğal göstermiyor: cihaz gerçekte mutlak değer alır, iki kurallı yapı örtük. Daha somut: "Kuralı sen yaz: eksi sayıysa işaretini değiştir, değilse aynen yaz."
- Soru bağlamları: s010 (4 cümle), s016 (4 cümle + 5 değerli liste), s018 (5 cümle) sınav biçiminde kabul edilebilir ama zayıf okuyucu için s016/s018'in kök kısmı (4 alt şık, 15 puan) uzun. Bkz. P2-11.

### P2-06 · ORTA · x = −b/a ve yukarı katlama somut yoldan veriliyor mu?
- Yukarı katlama: DOĞRUDAN somut değil (b2 sorunu, P1-02). b7 sayıyla (2x − 6, tablo 4,2,0,2,4) vermiş: iyi.
- x = −b/a: `basit` katmanında hiçbir bölümde geçmiyor. b7 doğru yolu gösteriyor (içini 0 yapan x'i bul, sayı örnekleriyle: x − 5 = 0 ⇒ 5, x + 4 = 0 ⇒ −4). Genel formül yalnız `kitap` katmanında (b4, b5, b8) ve flashcard[5] arka yüzünde ("x = −b/a. Nokta (−b/a, 0)"). Flashcard, `basit`te hiç görülmemiş simgeli bir kuralı sorguluyor. Öneri: flashcard[5] arkası: "İçini 0 yapan x'te. Örnek: |2x − 6| → 2x − 6 = 0 → x = 3 → nokta (3, 0)." Genel formül kitap katmanında kalsın.
- Boşluk: |x + 4|'te işaret tuzağı (x = −4) yalnız b8 Q2'de kontrol ediliyor. b7 `basit`te "x − a" biçimi var; "x + a" için bir paragraf yok. Öneri: b7 basit sonuna "Dikkat: |x + 4|'te içini 0 yapan x = −4'tür; |x − 4|'te x = 4."
- Doğrusal fonksiyon köprüsü (k1) b7'de "f'nin sıfırı" ile zaten kuruluyor; iyi.

### P2-07 · ORTA · Terimler: `terimler` 7 bölümde boş, k1'de tanımlı terimlerin kartta referansı yok
- `terimler: []` olan bölümler: b3, b4, b5, b7, b8, b9, b10. Bu bölümlerde görüntü kümesi, sıfır, işaret, artan/azalan, bire bir, minimum/maksimum, öteleme, nitel özellik kullanılıyor. K1'de (`matematik-u2-k1.json`) hepsi tanımlı (görüntü kümesi, sıfır, işaret tablosu, artan, azalan, bire bir, minimum/maksimum değer, öteleme, nitel özellik), ama `on_bilgi` yalnız "sıfırı, işareti, artan-azalan, öteleme" diyor; görüntü kümesi, bire bir, minimum/maksimum yok.
- Öneri: `on_bilgi` listesine "görüntü kümesi, bire bir, minimum-maksimum değer" ekle; b3/b4'e en az bir kısa tanımlı hatırlatma ("**Görüntü kümesi**: fonksiyonun alabildiği tüm değerler") koy. "Nitel özellik" b8 başlığında ve flashcard[2]'de var, kartta tanımsız: "**nitel özellik**: tanım, görüntü, sıfır, işaret, artan-azalan, min-maks, bire birlik" gibi tek cümle. Alternatif: başlık "nitel özellikler" yerine "özellikleri".
- "n(x) = ±|x|" `bolumler[0].kitap[2]` içinde tanımsız beliriyor.

### P2-08 · ORTA · b8 ve b10 aşırı yük (tek fikir)
- b8 `basit` 5 paragraf: sıfır + görüntü kümesi + bire birlik + artan/azalan + ters V. Bunların hepsi b3, b4, b5'te zaten işlendi; b8'in yeni fikri "|x − 20|: kaydırılmış V, kısıtlı tanım kümesinde maksimum var". Öneri: basit[4] (−|ax+b|) sil (b5 + b9 kapsıyor), basit[1-3]'ü iki paragrafa sıkıştır, yerine P1-03 önerilerini yaz. Başlık: "Sapma: |x − 20| ve sınırlı aralık".
- b10 `basit` 5 paragraf: min noktası/görüntü, iki sıfır (parçalı), iki sıfır (diğer taraf), işaret tablosu, sıfır sayısı kuralı. İşaret ayrı bir fikir (k1'de var). Öneri: sıfır sayısı kuralı ve işaret paragrafını b10'da tut, "(1, 5)'te −" paragrafını tek cümleye indir.

### P2-09 · ORTA · İpucu merdiveni
**1. basamak cevabı veriyor:**
- `bolumler[0].kontrol_sorulari[1].ipuclari[1]`: "−5 de 5 de 0'a aynı uzaklıktadır." Soru "eşit midir?" cevabı aynen. Öneri: "İki sayının 0'a uzaklıklarını ayrı ayrı düşün."
- s016 `ipuclari[0]`: "Sapma, ölçülen kalınlık ile 20 mm arasındaki farkın mutlak değeridir." Bu a) şıkkının cevabı (g(x) = |x − 20|'nin kurulum fikri). Öneri: "Sapma, kalınlığın 20 mm'den ne kadar uzak olduğudur. 17 mm için sapma kaç mm?"
- s017 `ipuclari[0]`: "g(x)'i açık yaz: g(x) = |2x − 4| − 2." Soru metni zaten g(x) = |f(x)| − 2 veriyor; açık yazım ilk adımın tamamı. Öneri ipucu[0]: "g'nin içindeki f(x)'in yerine 2x − 4 yazılabilir." (yön), ipucu[2] ilk adımı yapsın.
**3. basamak neredeyse cevap (sınırda):**
- `bolumler[1].kontrol[0].ipuclari[2]` (b2 Q1): "ikinci sayının önündeki eksiyi kaldır" = (−5, 5).
- `bolumler[4].kontrol[0].ipuclari[2]` (b5 Q1): "3'ün önüne baştaki eksiyi koy" = −3.
- `bolumler[6].kontrol[1].ipuclari[2]` (b7 Q2): "−6'nın işaretini çevir" = (0, 6).
- `bolumler[8].kontrol[0]`, `[2]` ipucu[2]: "(0, 0)'ın y değerine 4/5 ekle".
  Bunlar "ilk adımı yap" sınırını geçip sonucu söylüyor. İlk adımı yapıp son adımı öğrenciye bırakın: "Birinci sayı aynen kalır: (−5, ...)" gibi.
- s015 `ipuclari[2]`: "sonra x = 0 için 2x − 8'in işaretine bak" gereksiz ve kafa karıştırıcı (x = 0 yerine "x = 4'ün solunda bir sayı al"). Öneri: "2x − 8 = 0 denklemini çöz. Çıkan x'in solundan bir sayı seç (örn. 0) ve 2x − 8'in işaretine bak."
**Basamak türü karışık:** b2 Q1, s004, b7 Q2'de ipucu[0] ve [1] ikisi de kural cümlesi (yön yok). Yön → yöntem → ilk adım sırası kısmen bozuk. DÜŞÜK.
**Yöntem uyumsuzluğu:** s012 ipucu[1] ("içi 3 ya da −3 olabilir") ve s010 (|x − 4| = 3) iki-durum yöntemini kullanıyor. Kartta (b10) sıfırlar yalnız parçalı gösterimle bulunuyor; "uzaklık yorumu" hiç yok.
- Öneri (b10 basit'e 1 paragraf, Gölcük'e uygun, çok somut): "|x − 3| = 2, 'x, 3'ten 2 uzaktadır' demektir. 3'ün 2 sağı 5, 2 solu 1. Sıfırlar 1 ve 5." Parçalı yöntem yazılıda kalır; öğrenci iki yolu görür. b7 `ornek`te (çay bahçesi, 1. km ve 5. km) bu fikir zaten var: b10'a bağla.

### P2-10 · ORTA · s009, s010, s016, s018: okunabilirlik ve bağlam gerçekçiliği

**s009 (zorluk 1, DY, bire birlik)**
- Okunabilirlik: İYİ. b1 `ornek`i ile aynı sahne, 2 kısa cümle + tanım cümlesi. Tek hafif sorun: "−3 m'de" ile "3 m yükseklikte" aynı cümlede iki ayrı anlatım; "−3 m'de" yerine "3 m aşağıda (−3 m'de)" yazılabilir.
- Gerçekçilik: Dalgıç/martı/deniz seviyesi Gölcük'te doğal. DY'de rastgele tahmin %50: tek madde olarak sorun değil, ama s002 ve s005 de DY. 3 DY zorluk-1 maddenin 2'si aynı fikirdeki b1/b3 kavramına dayanıyor: kabul edilebilir.
- İpucu[2] ("g(−3) = |−3| yaz; sonra g(3)'ü yaz ve karşılaştır") sonucu söylemeden yolu açıyor: sınırda ama uygun.

**s010 (zorluk 2, ÇS, |x − 4| = 3)**
- Okunabilirlik: İYİ ama baglam 4 cümle. "Can, Ali'den farklı bir yerde ama büfeye Ali ile aynı uzaklıkta" ikinci okumada anlaşılıyor; "Ali ile Can aynı uzaklıkta" fikri b7 `ornek`inde (1. ve 5. km) var, tutarlı.
- Gerçekçilik: Gölcük sahilinde 10 km'lik düz yürüyüş yolu kurgusal (gerçek Gölcük kıyı şeridi bu uzunlukta düz ve kesintisiz değil). Soru kurgusal olduğundan sorun değil; "10 km" yerine "yürüyüş yolu 10 km" yazmak yerine "bir sahil yolu" demek iddiayı yumuşatır. Önemli: yolun 0-10 km aralığı verildiği için 7 geçerli. İYİ.
- Çeldirici `aciklama` (seçenek 5): "Büfeden sonra Ali'nin kilometresi (1) kadar değil, uzaklığı (3) kadar gidilir." Zayıf okuyucu için karışık. Öneri: "5, büfenin 4. km'sine Ali'nin yeri olan 1'in eklenmesiyle çıkar. Eklenmesi gereken Ali'nin uzaklığıdır: 4 + 3 = 7."
- `hata_turu: islem_hatasi` seçenek 5'te yanlış etiket gibi (hata işlem değil, "yer ile uzaklığı karıştırma" = `kavram_karisikligi`).

**s016 (zorluk 3, 15 puan, levha)**
- Gerçekçilik: 20 mm çelik levhada ±3 mm tolerans (%15) gerçek tersane çeliği için çok geniş; gerçekte genelde onda birlerce mm. Pedagojik olarak anlaşılır ama "sapma en fazla 3 mm" yerine "en fazla 1 mm" (tanım [19, 21]) daha gerçekçi ve hesap daha küçük. Doğrulama gerektiren bir iddia değil, kurgu; yine de öğretmen "gerçek değil" diyebilir.
- Belirsizlik: "Bir günde ölçülen levhaların kalınlıkları: 17 mm, 18,5 mm, 20 mm, 21,5 mm, 23 mm." listesi öğrenciyi tanım kümesini {17; 18,5; 20; 21,5; 23} (ayrık) yazmaya iter. Cevap anahtarı [17, 23]. Soru metni "en fazla 3 mm olabiliyor" ile aralığı veriyor ama liste 5 değerli ayrık kümeyi çağrıştırıyor. Öneri: listeyi ç) şıkkına taşı ("Bir günde 18,5 mm ve 21,5 mm ölçüldü") ya da "Tanım kümesi: bu levhaların kalınlıklarının alabileceği tüm değerler" ekle.
- Uzunluk: 4 cümle bağlam + liste + 4 alt şık + 8 rubrik ölçütü, ~130 kelime; "uzun metinde kopuyor" profiline ağır. Öneri: a)-b) ile c)-ç) iki ayrı soruya böl (her biri 7-8 puan), ya da listeyi çıkar.
- İpucu[0] cevabı veriyor (bkz. P2-09). Kart b8 yazılı sorusunun neredeyse aynısı (parametreler 18-22 → 17-23): kartta çözülmüş benzer örnek var, bu iyi; ama aynı soru olduğundan ezber riski.

**s018 (zorluk 3, 15 puan, tekne)**
- Gerçekçilik: 30 km / 2 saat = 15 km/sa (≈ 8 knot) bir tur teknesi için makul. "Doğrusal rotadan" ve "koyda beklemeden" ifadeleri modeli netleştiriyor. İYİ. Gölcük'ten İzmit Körfezi içinde 30 km'lik tek koy rotası kurgusal; "bir koya" dendiği için sorun yok.
- Okunabilirlik: 5 kısa cümle (hepsi ≤ 14 kelime) ama modelleme basamağı yüksek: hız, gidiş formülü, dönüş formülü, tek ifade. Kartta hareket öyküsü yok (P1-03). `kok` 4 alt şıklı, 15 puan. Cümleler kısa, mantık zinciri uzun.
- İpucu merdiveni iyi (yön: 1 saatte kaç km; yöntem: iki durumu tek mutlak değerle yaz; ilk adım: 30 ÷ 2). Kabul edilebilir. Şık ç) "bağlamla açıklayınız" çocuk için net.
- Matematiksel gözlem: f(t) = |15t − 30| yazılımını "30 − 15t / 15t − 30'un mutlak değeri aynıdır" diye öğrenciye gösteren adım yok. Çözüm adımı 4 bunu tek satırda yapıyor; öğrenci için basamak bölünebilir (bkz. P3-13).

### P2-11 · ORTA · `yazilida` ve kontrol soruları: b2/b8 uzun yazılı soru kökleri
`bolumler[7].yazilida.ornek_soru` (b8): 4 cümle + 4 şık. `bolumler[4].yazilida.ornek_soru`, `bolumler[9]` benzeri. Sınav dilini taklit ediyor, kabul edilebilir. Sadece kök cümleler ≤ 20 kelime tutulmuş; paragraf biçimi yazılı için istisna.

### P2-12 · DÜŞÜK · Simge yoğun, kelime sayısı düşük cümleler
- `bolumler[8].katmanlar.kitap[2]` (b9): "Kitap bir uyarı yapar (s.130): a, b, c pozitifken |ax + b| − c'de b < c ise grafik y eksenini eksi bir değerde keser." ~23 simge/kelime. Öneri: 2 cümle: "Kitap bir uyarı yapar (s.130). a, b, c pozitifken |ax + b| − c'de b < c ise grafik y eksenini eksi bir değerde keser." (ayrı cümle; yine simgeli ama kısa).
- `bolumler[5].katmanlar.kitap[2]` (b6): bkz. P1-04.
- `bolumler[3].katmanlar.kitap[0]` (b4): ~20 simge, sınırda.
Hiçbiri 20 gerçek kelimeyi geçmiyor, ihlal sayılmadı.

### P3-13 · DÜŞÜK · Adım başına tek işlem
Aynı satırda birden çok işlem:
- `bolumler[7].yazilida.ornek_cevap[1]`: g(18), g(20), g(22) üç değer.
- s013 `cozum_adimlari[1]`: f(2), f(3), f(4), f(5) dört değer.
- s016 `cozum_adimlari[2]` (g(17), g(20), g(23)) ve `[8]`... (`g(18,5)` ve `g(21,5)` iki değer).
- s017 `cozum_adimlari[7]` (iki kontrol); s012 `cozum_adimlari[3]` (iki kontrol); s018 `cozum_adimlari[9]` (min + t = 2 + yorum) ve `[10]` (f(0), f(4), sonuç).
- s015 `cozum_adimlari` iyi; b6 yazılı iyi.
Öneri: "Tablo" olarak (tek adım "x = 2, 3, 4, 5 için f(x) = 2, 0, 2, 4") ya da her değer ayrı numara. Adım sayısı artsa da kopma yok.

### P3-14 · DÜŞÜK · Kontrol sorusu zorluğu
`bolumler[9].kontrol_sorulari[1]` (|x| − 4 sıfırları), `[2]` (−|x| + 6 görüntü kümesi) ve `bolumler[7].kontrol_sorulari[2]` (−|x − 1| maksimumu) iki adımlı akıl yürütme istiyor. Bankada tam eşdeğerleri (s012, s014) zorluk 2. Merkez 0'a taşındığı için daha kolay, sınırda kabul. İsteğe bağlı: b10 Q2'ye "|x| = 4 ise x kaç olabilir?" ara sorusu.

### P3-15 · DÜŞÜK · Flashcard ve sık hata biçimi
- `flashcard[2]` arka yüzü 7 bilgi (tanım, görüntü, sıfır, azalan, artan, min, maks, bire birlik). Üçe böl: "tanım+görüntü+sıfır", "artan/azalan", "min/maks/bire birlik".
- `sik_hatalar` metinleri "sanmak / unutmak / karıştırmak" diyor; öğrenciye gösterilecekse "çoğu öğrenci ... sanabilir" biçimine yumuşat. Azarlama yok; DÜŞÜK.
- Hata kodu uyumsuzluğu: kart `tepe_isaret` / `oteleme_yonu`; banka `carpim_sifir_isaret` / `okuma_hatasi` / `kavram_karisikligi` / `islem_hatasi` / `aralik_uc` / `sonsuz_koseli` / `esitsizlik_yonu`. Bankada 10 kod kartın `sik_hatalar` listesinde yok; bu `hata_turu` ile ilerleme takibini zayıflatır. dogrula.py'nin kural koyup koymadığını kontrol edin.
- `bolumler[6].ornek.baglam` değeri "gölcük" (küçük harf); diğer bağlamlar deniz/futbol/tersane gibi tür adı. Tutarlılık: "gölcük" yerine "günlük_hayat" ya da "Gölcük" (diğer kartlardaki kullanımla aynı olmalı).

---

## Güçlü yönler (korunmalı)
- 10/10 bölümde `ornek` kural önünde; %100 yerel bağlam.
- b1-b5 sayı tabloları (x = −2…2) ve b7 |2x − 6| tablosu grafiği zihinde çizdiriyor.
- Zorluk dağılımı %50/33/17 tam hedefte.
- Azarlama yok; `yanlis_aciklama` tek cümle ve nedenli.
- Soru bankası "tepe/simetri" içermiyor; `kabul_edilenler`, rubrik ve puanlama notları düşünülmüş.
- Matematik doğruluğu: elle tüm cevapları yeniden hesapladım (örn. s010: 7; s012: −2 ve 4; s013: [3, ∞); s017: 1 ve 3; s018: 15 km/sa, |15t − 30|, [0, 4]); hata yok.

## Ölçülemeyen / örneklemeyle bakılan
- Ortalama cümle uzunluğu: örneklem (tam sayım yok).
- Grafik görünümü: kartlar metin; çizim tarifi tablo ve noktalarla. Gerçek ekran render'ı ve panel görüntüsü incelenmedi.
- Kitap sayfa numaraları ve "kitap 'minimum/maksimum noktası' der (s.134)" iddiası kaynağa karşı bu turda doğrulanmadı; kullanıcı kısıtına dayanıyor (docs/dogrula.md #25).
- Üreteç: bu konu için üreteç dosyası yok / kapsam dışı.
