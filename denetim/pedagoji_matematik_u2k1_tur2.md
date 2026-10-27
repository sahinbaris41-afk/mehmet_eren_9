# Pedagoji denetimi: 9. sınıf Matematik, Ünite 2, K1 (9.2.1), tur 2

Denetçi: pedagoji-denetcisi (salt okur). İçerik dosyası değiştirilmedi.
Kapsam: konu kartı (surum 2), soru bankası (surum 2), üreteç örnekleri (yeniden üretilmiş). Yalnız tur 1 bulgularının giderilişi ve DEĞİŞEN/EKLENEN metinler denetlendi; değişmeyen içerik yeniden denetlenmedi.
Tur 1 raporu: `denetim/pedagoji_matematik_u2k1_tur1.md`.

## Yöntem
- Üç dosya baştan sona okundu. Değişen metinlerin cümle/kelime sayımı elle yapıldı.
- Grep taraması (21+ kelimelik, noktasız cümle) kart ve bankada 0 sonuç verdi. Tek sınır vakası b8 basit[6] ikinci cümlesi: 22 jeton, ama jetonların çoğu sayı ve simge (kelime sayısı ~14). Kural ihlali değil, okunurluk sorunu (P2-02).
- Banka zorluk dağılımı tam sayıldı: 10 / 7 / 3 = %50 / %35 / %15 (hedef %50/35/15). GEÇER.
- Üreteç: yalnız dökümdeki tohumlar (#0-#3, #7, #11) görüldü; diğer tohumlar ölçülemedi.
- Sayım notu: b8 `basit` dizisinde **8** paragraf var (görevde 7 denmişti), 3 kontrol sorusu.

## 1. Tur 1 izleme tablosu (YÜKSEK ve ORTA)

| No | Önem | Durum | Kanıt |
|---|---|---|---|
| P1-01 | YÜKSEK | GİDERİLDİ | b7 basit[2-3]: B pompası ile iki noktadan eğim (9−3=6, 3−1=2, 6:2=3). b7 Q3 artık (1,3)-(3,7) eğimi, 3. ipucu "İlk adım: y farkı için 7 − 3" cevabı vermiyor. b8 basit[3]: noktadan b (25·2+b=90, b=40; sayılar u(x)=25x+40 ile tutarlı). s019 ve üreteç `iki-nokta` artık kartla uyumlu. Yeni sorunlar: P2-01, P2-05. |
| P1-02 | ORTA | GİDERİLDİ | `iki-nokta` çözümü 7 adım: y farkı, x farkı, eğim, noktayı yaz, b, g(x), kontrol. İpucu[2] yalnız y farkı. Sayılar elle doğrulandı (#0, #1, #7, #11). Kalan: adım 5 iki işlem (DÜŞÜK, P2-09). |
| P1-03 | ORTA | GİDERİLDİ | b9 basit[5-6]: g(x)>0 için 5 alınmaz, ≥ için [5,∞), ≤ için (−∞,5]. `sifir-isaret` çözümü 6 adım, "+ olan yan" kararı ayrı adımlara bölündü. Kalan DÜŞÜK uyumsuzluklar: P2-08. |
| P1-04 | ORTA | KISMEN | Karar: üreteç `kay` korundu, kart x ekseni ötelemesini öğretiyor (b8 basit[6-7], kitap[2-3], Q3, sik_hatalar, dogrula notu). Üreteç dili kartla uyumlu: "(x − 2) sağa, (x + 1) sola" yönleri doğru, r işaretleri 4 tohumda elle doğrulandı. AMA kart bunu Mehmet Eren'in anlayacağı biçimde öğretmiyor: somut örnek yok, tablo yoğun, formül tek paragrafta (P2-02). Üreteç açıklaması "x'in katsayısı 2" diyor, kart parantez açmayı basit katmanda göstermiyor (P2-04). |
| P1-05 | ORTA | GİDERİLDİ | b1 basit[2] "Her x için tek bir f(x) veren kurala **fonksiyon** denir." kalın ve tanımlı, `terimler`'e eklendi, f(−2) pompa örneğinden çıkarıldı, tablo ayrı paragraf. Kalan: "eşlenir" (DÜŞÜK, P2-10). |
| P1-06 | ORTA | GİDERİLDİ | b3 basit[3-4]: "Üst satırda x, alt satırda f(x)'in işareti"; "x < 0 iken −, x = 0 iken 0, x > 0 iken +". Okunur. (`yazilida.ornek_cevap[1]` hâlâ "x → −∞, 0, ∞" diyor; değişmedi, tur 1 kapsamı basit katmandı.) |
| P1-07 | ORTA | GİDERİLDİ | b7 basit[5] "soldan sağa iner" + m(x) = −2x tablosu (değerler doğru). kitap[0] "daha dik / daha yatık" ve "kitabın dilinde... eksene daha yakın" köprüsü kuruldu. |
| P1-08 | ORTA | GİDERİLDİ | b8 basit[2] "Doğrusal fonksiyonu g(x) = ax + b diye yazarız. Sondaki b sayısına **sabit terim** denir." |
| P1-09 | ORTA | GİDERİLDİ | b9 basit[0-1] iki paragraf, bölme adımı yazılı: x = −600 : (−15) = 40. Küçük kalan: "Matematikte" (P2-07). |
| P1-10 | ORTA | GİDERİLDİ | s020 bağlam sadeleşti, "sürgü" çıktı, zorluk 2 oldu. Dağılım 10/7/3 olarak doğrulandı. Kök 17 kelime, tek cümle. |
| P1-11 | ORTA | GİDERİLDİ | s012 kök ve 4 seçenek önerilen metne uygun (seçenekler 9-10 kelime), "eşleme" jargonu yok. |
| P1-12 | ORTA | GİDERİLDİ | s013: 50 TL + 30 TL/km, 6 km → 230 TL, 320 TL → 9 km (elle doğrulandı), rubrik sayıları güncel. s018: otopark c(x) = 90, kartta s(x) = 1500 ile çakışma yok. |
| P1-13 | ORTA | GİDERİLDİ | s002 ve s005 artık `true`; dogru_yanlis 2 doğru / 4 yanlış. Çözüm adımları ve açıklamalar yeni cevaba uyuyor. |
| P1-14 | ORTA | GİDERİLDİ | s016 kök: "“∀a > 0 için h(x) = ax + b fonksiyonu azalandır.” önermesi doğrudur." ∀ artık b4 kitap[0]'da ilk sırada açıklanıyor. |
| P1-15 | ORTA | GİDERİLDİ | s019 bağlam 3 cümle, "0. dakikada 540 L, 5. dakikada 450 L, 10. dakikada 360 L." Kök d(x) = ax + b'yi veriyor. a ve b yöntemi artık b7/b8'de var (P1-01). |

Özet: 14 GİDERİLDİ, 1 KISMEN (P1-04), 0 GİDERİLMEDİ. DÜŞÜK bulgulardan P1-16 (7 yerin 6'sı ve s006), P1-17, P1-19, P1-20 çoğu, P1-21 uygulanmış; bunlar yeniden denetlenmedi, yalnız yeni metin kusurları aşağıda.

## 2. Ölçüt tablosu (yalnız değişen içerik)

| Ölçüt | Değer | Eşik | Durum |
|---|---|---|---|
| Cümle > 20 kelime | 0 (Grep + elle) | 0 | GEÇER |
| Paragraf > 3 cümle | 0 | 0 | GEÇER |
| Bölüm başına tek fikir | b8: 4 fikir, 8 paragraf; b7 ve b9: 3 akış, 7 paragraf | tek | b8 EKSİK, b7/b9 KISMEN |
| Kuraldan önce somut örnek | b8 x ekseni kısmında yok | her fikirde | EKSİK (P2-01/02) |
| Kontrol sorusu zorluk 1, basit katmandan | Hepsi basit katmandan; b9 Q2 sınırda (3 karar) | hepsi | GEÇER (sınırda) |
| Kontrol sorusu sayısı | b7 3, b8 3, b9 3, öteki 2-3 | 2-3 | GEÇER |
| 3. ipucu cevabı vermiyor | Yeni b7 Q3 temiz; b8 Q3 ve b9 Q3 ipuçları cevabı vermiyor | 0 ihlal | GEÇER |
| Terim kalın + tanımlı | fonksiyon, sabit terim, işaret tablosu, öteleme tamam | hepsi | GEÇER |
| Zorluk dağılımı | 10/7/3 | %50/35/15 ± 10 | GEÇER |
| Süre | b7, b8, b9: 7 dk | 5 dk anlatım sonrası kontrol (kural 4) | EKSİK |
| Üreteç dili ve kart uyumu | iki-nokta, sifir-isaret, kay uyumlu; "/" ile ":" ve "pozitif ya da sıfır" ile "≥" küçük farklar | | KISMEN (DÜŞÜK) |

## 3. b8 değerlendirmesi: "Bir ekranda tek fikir" kuralına uyuyor mu? HAYIR

b8 şu an 8 basit paragraf + 3 kontrol sorusu, `sure_dk: 7`. Dört ayrı fikir var:

| Fikir | Paragraflar | Kontrol sorusu |
|---|---|---|
| A. b yukarı/aşağı kaydırır (öteleme, sabit terim) | basit[0], [1], [2] | Q1, Q2 |
| B. b'yi bir noktadan bulma | basit[3] | yok |
| C. b = g(0), y eksenini (0,b)'de keser; eğim aynı kalır | basit[4], [5] | Q1 |
| D. x ekseni ötelemesi + genel biçim | basit[6], [7] | Q3 |

Ek sorunlar: (1) D fikrinde kuraldan önce somut örnek yok (taksi y ekseni içindir); (2) basit[3] sırası ters: g(0) = b (basit[4]) daha kolay, noktadan b ondan sonra gelmeli; (3) B fikrinin kontrol sorusu yok; (4) 8 paragraf + 3 soru 7 dk, 5 dk kuralını aşıyor.

### Bölme önerisi (b8 → b8a + b8b)
- **b8a "g(x) = ax + b: b'nin görevi"**: basit[0], [1], [2], [4], [3] (bu sırayla), [5]. 6 paragraf, tek fikir "b ne yapar, nasıl bulunur". Soru: Q1, Q2 + yeni Q3 (noktadan b, aşağıda). `sure_dk` 5.
- **b8b "Doğruyu sağa-sola kaydırmak"**: yeni örnek + 4 yeni paragraf (P2-01/P2-02). Sorular: mevcut Q3 + 1 yeni. `sure_dk` 4-5.
- Bölüm sayısı 11 olur, üst sınır 10. İki seçenek:
  - **Birleştirilecek iki bölüm: b4 (Artan ve azalan) + b5 (Bire bir).** Aynı kitap sayfaları (93-97), aynı "∀a, b" tanım kalıbı, aynı ispat biçimi. Birleşince: basit 4 + 2 = 6 paragraf (b5 basit[2] "herkese aynı ücret" atılır; b10 sabit fonksiyonda zaten var), kontrol sorusu b4 Q1, b4 Q2, b5 Q1 (b5 Q2 atılır; b10 Q3 benzer işi görür). `yazilida` tek alan; bire bir ispatı ikinci ornek_soru olarak eklenmeli ya da `kalip` iki cümleli yazılmalı. `sure_dk` 6. Kitap_sayfa "93-97, 100".
  - Alternatif: üst sınırı 11 yapmak (şema/dogrula.py kararı sizde). Pedagojik olarak bu en temizi; birleştirme b4/b5'e 2. fikir yükler.
- b8 bölünmezse en az şu yapılmalı: sıra düzeltmesi, x ekseni için somut örnek ve P2-02 metni; ama o zaman 8-9 paragraf kalır ve kural 1 ihlali sürer.

### Kart b8, x ekseni: Mehmet Eren anlar mı?
Şu hâliyle ZOR. basit[6] önce kuralı ("Parantezin içindeki sayı doğruyu sağa ya da sola kaydırır"), sonra iki sayı listesini veriyor; "2x'in 0'da aldığı değeri 2(x − 1) 1'de alır" fikri çıkarım istiyor. basit[7] genel formülü tek paragrafta, "− k ise aşağı kaydırır" belirsiz. Önerilen yeni metin tersane pompasıyla "aynı değeri 2 dakika sonra alır" fikrini somutlaştırıyor ve kuralı sonra veriyor (P2-02).

## 4. b7 ve b9 kısa bakış (her ikisi 7 dk)

- **b7** (7 paragraf): akış eğim = a (0-1), iki noktadan eğim (2-3), dikleşme/yatıklaşma (4), azalan ve işaret (5-6). Her paragraf ≤ 3 cümle, yeni iki noktalı eğim anlatımı net ve somut. Sorun yalnız yük: 7 paragraf + 3 soru 5 dk'yı aşıyor (P2-05).
- **b9** (7 paragraf): sıfır bulma (0-1, 4), işaret kuralı (2-3), > ve ≥ (5-6). Üç akış, ama ardışık ve her paragraf tek adım. Yeni ≥ anlatımı kartta olması gereken yerde ve doğru (P2-06).

---

## 5. Yeni bulgular

### P2-01 · YÜKSEK · b8 tek ekranda dört fikir, 8 paragraf, 7 dk
- `konular/matematik-u2-k1.json`, `bolumler[7]`.
- Sorun: bkz. bölüm 3 tablosu. "Ekranda tek fikir" (kural 1) ve "5 dakikalık anlatımdan sonra kontrol" (kural 4) ihlali; B fikrinin kontrol sorusu yok.
- ÖNERİLEN YENİ YAPI:
  - **b8a** (id `b8`, baslik "g(x) = ax + b: b'nin görevi", sure_dk 5), basit sırası: [0], [1], [2], [4], [3], [5].
  - [3] yeni metin (eğim bilgisi eklenir, 3 cümle): "Sabit terimi bir noktadan da buluruz. Taksi 2 km'de 90 TL alıyor, km başına 25 TL. Yani 25 · 2 + b = 90 olur; 50 + b = 90 ve b = 40 çıkar."
  - b8a yeni kontrol sorusu Q3 (basit[3]'ü ölçer):
    - soru: "g(x) = 3x + b doğrusu (2, 10) noktasından geçiyor. b kaçtır?"
    - cevap: "4"
    - ipuclari: ["g(2) = 10 demektir.", "x yerine 2 yaz, sonucu 10'a eşitle: 3 · 2 + b = 10.", "İlk adım: 3 · 2 işlemini yap."]
    - yanlis_aciklama: "Önce 3 · 2 = 6 bulunur; sonra 6 + b = 10 denkleminden b çıkar."
  - **b8b** (id `b9`, sonrakiler kayar; baslik "Doğruyu sağa-sola kaydırmak", sure_dk 4): P2-02.
  - Bölüm sayısı 11 olduğundan b4+b5 birleştirme (bölüm 3) ya da üst sınırın 11 yapılması gerekir. Bölüm kimlikleri yeniden numaralanırsa `surec`, `kaynak`, `dogrula.py` ve panel eşlemeleri kontrol edilmeli.

### P2-02 · YÜKSEK · b8 x ekseni ötelemesi: somut örnek yok, tablo yoğun, formül belirsiz
- `bolumler[7].katmanlar.basit[6]` ve `basit[7]`.
- Alıntı: "Tablo: x = 0, 1, 2 için 2x = 0, 2, 4 olur; 2(x − 1) = −2, 0, 2 olur. 2x'in 0'da aldığı değeri 2(x − 1) 1'de alır; doğru 1 birim sağa kaymıştır." ve "f(x + r) sola, − k ise aşağı kaydırır."
- Sorun: Kuraldan önce somut örnek yok. İki sayı listesi (22 jeton) ve "aynı değeri 1'de alır" çıkarımı zayıf okuyucu için fazla. Son cümlede "− k ise" öznesiz. "f" burada ne? (f(x) = x, tanımlı ama hatırlatılmıyor.) Kayma sağa ama işaret eksi: bu çelişki hiç açıklanmıyor.
- ÖNERİLEN YENİ METİN (b8b, kuraldan önce örnek):
  - ornek: baglam "tersane", metin: "Tersanede A pompası hemen başlıyor ve dakikada 3 ton basıyor. B pompası aynı hızda ama 2 dakika geç açılıyor. A için m(x) = 3x, B için g(x) = 3(x − 2) olur."
  - basit[0]: "Tablo: B için x = 2, 3, 4'te g(x) = 0, 3, 6 olur. A için x = 0, 1, 2'de m(x) = 0, 3, 6 olur."
  - basit[1]: "B, A'nın değerlerini 2 dakika sonra alıyor. Yani B'nin grafiği, A'nın grafiğinin **2 birim sağa** kaymış hâlidir."
  - basit[2]: "x − 2 doğruyu sağa, x + 2 sola kaydırır. Parantezi açınca 3(x − 2) = 3x − 6 olur; x'in katsayısı yine 3'tür. Kayma dikliği ve artanlığı değiştirmez."
  - basit[3]: "Genel biçim g(x) = a(x − r) + k'dir. r > 0 ise doğru r birim sağa, r < 0 ise sola kayar. k > 0 ise yukarı, k < 0 ise aşağı kayar."
  - kitap katmanı aynı kalır (f(x ± r) gösterimi orada).
  - kontrol_sorulari: mevcut Q3 aynen; yeni Q: soru "h(x) = 2(x + 3) doğrusu, 2x doğrusunu hangi yöne kaç birim kaydırır?", cevap "3 birim sola", ipuclari ["Parantezin içindeki işarete bak.", "x + 3 sola, x − 3 sağa kaydırır.", "2x ile h'nin sıfırını karşılaştır: h'nin sıfırı x = ... çıkar."], yanlis_aciklama "x + 3 doğruyu sola kaydırır; 2 yalnız dikliği verir."
  - Mevcut Q3 ipucu[2] ("3(x − 2) = 0 yaz") yeni basit[0] tablosundaki "g(x) = 0 olduğu x" fikriyle uyumlu; değişmesin.

### P2-03 · ORTA · b2 basit[3] kendi içinde çelişiyor
- `bolumler[1].katmanlar.basit[3]`.
- Alıntı: "Okun sağı, fonksiyonun değer aldığı kümedir. Okun sağı ile görüntü kümesi aynı olmak zorunda değildir."
- Sorun: "değer aldığı küme" görüntü kümesinin tanımıyla aynı okunur; ikinci cümle birincisini çürütüyor. Eklenen cümle (P1-20) kafa karıştırıyor.
- ÖNERİLEN YENİ METİN: "f: ℝ → ℝ yazımında okun solu tanım kümesidir. Okun sağı, değerlerin seçildiği büyük kümedir. Görüntü kümesi onun içinde kalır; hepsi olmak zorunda değildir."

### P2-04 · ORTA · Üreteç `artan-azalan` (`kay`): "x'in katsayısı 2" parantez açılmadan söyleniyor
- Üreteç `mat-u2-artan-azalan` #0, #1, #3, #7, #11.
- Alıntı: "g(x) = 2(x + 1) − 9 [kavram_karisikligi] x'in katsayısı 2. (x + 1): grafik 1 birim sola kayar. Kayma artanlığı değiştirmez; parantezin önündeki sayıya bak."
- Sorun: Öğrenci 2(x + 1)'de "x'in katsayısı"nı 1 sanabilir. Kart basit katmanda parantez açmayı yalnız yeni önerilen P2-02 ile gösterecek; şu an yalnız kitap[3]'te. "Artanlığı değiştirmez" ifadesi kartta da yok.
- ÖNERİLEN YENİ METİN (üreteç şablonu, kart P2-02 basit[2] uygulandıktan sonra): "Parantezi açınca {ax + c} olur; x'in katsayısı {a}. (x {+/−} r): grafik r birim {sola/sağa} kayar. Kayma artanlığı değiştirmez." Örnek #0: "Parantezi açınca 2x − 7 olur; x'in katsayısı 2. (x + 1): grafik 1 birim sola kayar. Kayma artanlığı değiştirmez."

### P2-05 · ORTA · b7 7 paragraf, 7 dk
- `bolumler[6]`, `sure_dk: 7`.
- Sorun: Yeni iki noktalı eğim anlatımı iyi, ama bölüm 5 dk'yı aşıyor. basit[4] (dikleşme/yatıklaşma) ve basit[5-6] (negatif, artan-azalan) kısaltılabilir.
- ÖNERİLEN YENİ METİN (7 → 6 paragraf, sure_dk 6; basit[4] ve [5] birleşir, basit[6] korunur):
  - basit[4] yeni: "Eksi işaretini görmezden gel; a'nın büyüklüğüne bak. Büyüdükçe doğru dikleşir: 3x, x'ten diktir. 1'den küçükse, örneğin x/2, doğru yatıklaşır."
  - basit[5] yeni: "a negatifse doğru soldan sağa iner; fonksiyon azalan olur. m(x) = −2x için m(−2) = 4, m(0) = 0, m(2) = −4 olur."
  - (Eski basit[4]'teki "−3x de −x'ten daha diktir" kitap katmanı kitap[0] için gerekliyse oraya taşınır.)
- Not: Bölüm bölünemiyor (sınır 10); bu yüzden kısaltma.

### P2-06 · ORTA · b9 7 paragraf, 7 dk, iki küçük kusur
- `bolumler[8].katmanlar.basit`.
- Sorunlar: (a) basit[4] genel formül x = −b/a basit katmanda soyut ve sıfırı bulma akışını bölüyor (zaten `flashcard[6]`'da var). (b) basit[5] "Cevap (5, ∞) olur." gerekçesiz; neden sağ taraf? (c) basit[6] "≥ ... büyük ya da eşit" dili, üreteç sorusundaki "pozitif ya da sıfır" ile bağlanmamış.
- ÖNERİLEN YENİ METİN:
  - basit[4] kitap katmanına taşınır (kitap[0] sonuna: "Sıfır her zaman x = −b/a'dır."). basit 6 paragraf, sure_dk 6.
  - basit[5] yeni: "g(x) = x − 5'in sıfırı 5'tir. a = 1 > 0 olduğundan sağ taraf pozitiftir. g(x) > 0 için 5 alınmaz, çünkü g(5) = 0 pozitif değildir: (5, ∞)."
  - basit[6] yeni: "≥ işareti 'büyük ya da eşit' diye okunur; yani g(x) pozitif ya da sıfırdır. g(x) ≥ 0 için g(5) = 0 da uyar: [5, ∞). g(x) ≤ 0 için (−∞, 5] yazılır."

### P2-07 · DÜŞÜK · b9 basit[2] "Matematikte"
- `bolumler[8].katmanlar.basit[2]`: "Matematikte 40'tan sonra değer negatif olur." Neden "Matematikte" (depo fiziksel olarak negatif olamaz) açıklanmıyor.
- ÖNERİLEN YENİ METİN: "40'tan önce, örneğin x = 10'da, d(10) = 450 olur; pozitiftir. 40'tan sonra, örneğin x = 50'de, d(50) = −150 olur; negatiftir. Depo boşaldığı için gerçekte su bitince hesap durur."
  (Q3'ün cevabı d(50) olduğundan Q3'te ezber riski var; örneği x = 60 yapmak d(60) = −300 daha güvenli.)

### P2-08 · DÜŞÜK · Üreteç `sifir-isaret` ve `iki-nokta`: küçük dil ve adım kusurları
- (a) `sifir-isaret` ≥/≤ şık açıklaması: "'Ya da sıfır' istendiği için g(0) = 0 olan 0 aralığa dahildir." anlaşılmaz. Yeni: "'Ya da sıfır' istendi; g(0) = 0 olduğundan 0 da aralığa girer."
- (b) `sifir-isaret` adım 5: "g(0) = 0. 0 pozitif değil; 0 dahil değil." iki yargı. İki adıma bölünebilir: "5. g(0) = 0." / "6. 0 pozitif değil; 0 dahil değil." (sonuç 7. adım olur).
- (c) `sifir-isaret` #2: "3x − 5 = 0 ⇒ x = 5/3" bir adımda taşıma + bölme. Yeni: "1. 3x − 5 = 0, yani 3x = 5." / "2. x = 5 : 3 = 5/3."
- (d) `iki-nokta` adım 5: "−2 + b = −2 olur; b = 0." Yeni: "5. −2 + b = −2 olur." / "6. b = −2 − (−2) = 0."
- (e) `iki-nokta` ipucu[1]: "Eğim a = (y farkı) / (x farkı)." kartta ve çözümde ":" kullanılıyor. Yeni: "Eğim a = y farkı : x farkı."

### P2-09 · DÜŞÜK · b2 Q1 ipucu[2]: "−3, 0, 2,5"
- `bolumler[1].kontrol_sorulari[0].ipuclari[2]`: "x yerine −3, 0, 2,5 yazmayı dene." Virgüllü liste içinde ondalık virgül dört sayı gibi okunur.
- ÖNERİLEN YENİ METİN: "x yerine −3, 0 ve 2,5 yazmayı dene. Üçü de yazılabiliyor mu?"

### P2-10 · DÜŞÜK · b1 basit[2] "eşlenir"
- "Pompada f(x) = x olur; her sayı kendisiyle eşlenir." "Eşlenir" tanımsız. Yeni: "Pompada f(x) = x olur; her sayı kendisine gider."
  (`terimler`'de "doğrusal referans fonksiyon" tanımında da "eşleyen" geçiyor: "her sayıyı kendisine götüren".)

### P2-11 · DÜŞÜK · b9 Q2 üç karar taşıyor
- `bolumler[8].kontrol_sorulari[1]`: "g(x) = x − 3 için g(x) ≥ 0" sıfır bulma + yan seçme + uç dahil etme. Zorluk 1 için ağır. Önerilen: soruyu "g(x) = x − 5'te g(x) ≥ 0 için 5 aralığa dahil mi?" (cevap "Evet, [5, ∞)") ya da kontrol sorusu olarak tutup ipuçlarına "1. sıfır, 2. yan, 3. uç" sırası eklemek. Engel değil.

## 6. Ölçülemeyen / örneklemeyle yapılan
- Üreteç: yalnız dökümdeki 6 tohum (#0-#3, #7, #11) incelendi; `kay` sağ/sol yönü 4 tohumda elle doğrulandı.
- Ortalama cümle uzunluğu bu turda yeniden hesaplanmadı (yalnız değişen paragraflar tek tek sayıldı, hepsi ≤ 14 kelime).
- Üreteç zorluk dağılımı dökümde yok.

KARAR: DÜZELTİLMELİ (YÜKSEK 2, ORTA 4, DÜŞÜK 5)

Temiz için asgari: P2-01 + P2-02 (b8 bölme ve x ekseni metni; sınır için b4+b5 birleştirme ya da üst sınır 11), P2-03, P2-04, P2-05, P2-06.
