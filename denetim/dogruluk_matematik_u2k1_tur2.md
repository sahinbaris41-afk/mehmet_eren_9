# Doğruluk denetimi · matematik-u2-k1 (9.2.1 Doğrusal fonksiyonlar) · tur 2

Tarih: 2026-10-27 · Denetçi: dogruluk-denetcisi (salt okur)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u2-k1.json` (surum 2).
- Soru bankası `dersler/matematik/sorular/matematik-u2-k1.json` (surum 2).
- `panel/motor/uretecler/matematik.js`, satır 945–1390: `yonelme()` ve beş `mat-u2-*` üreteci.
- Örnek döküm `denetim/uretec_ornekleri_u2k1.md`.

Karşılaştırılan kaynaklar:
- Kitap: s0096, s0108, s0110, s0115 bu turda yeniden okundu. Tur 1'de okunan sayfalar geçerli sayıldı.
- Program: s0050 ve s0052.
- `docs/dogrula.md`.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | Yok. |
| ÖNEMLİ | 0 | Yok. |
| KÜÇÜK | 3 | D2-01, D2-02, D2-03 |

- **Tur 1 bulguları:** 11 bulgudan 10'u giderildi, D1-11 kısmen giderildi.
- **Matematik ve anahtarlar:** Yeni ya da değişen içerikte matematik hatası ve yanlış anahtar yok.

---

## 1. İzleme tablosu (tur 1 → tur 2)

| Bulgu | Durum | Kanıt |
|---|---|---|
| D1-01 b9 puan_ipucu, yanlış sıra atfı | **GİDERİLDİ** | b9 `puan_ipucu` artık şunu söylüyor: "taksi-benzin örneğinde (s.105-106) sıfır, 'benzin ne zaman biter' sorusunun cevabıdır; önce tanım ve görüntü kümesi, sonra sıfır". Kitapla uyumlu. |
| D1-02 x ekseni ötelemesi (r) kartta yok | **GİDERİLDİ** | b8 `basit[6]` tablo örneği 2(x − 1) ile kural `basit[7]`'de. `kitap[2]` program s.52'yi ve s.108'i anıyor. `kaynak.program_sayfa: "52"` eklendi. Yeni kontrol sorusu 3(x − 2). `sik_hatalar` listesine ikinci `oteleme_yonu` eklendi. `dogrula[0]` yeniden yazıldı. docs/dogrula.md'ye 21. satır eklendi. |
| D1-03 sik_hatalar etiketleri | **GİDERİLDİ** | `sik_hatalar[3]` = `egim_kesisim_karistirma`, `sik_hatalar[4]` = `tanim_goruntu_karistirma`. |
| D1-04 "a büyüdükçe dikleşir" | **GİDERİLDİ** | b7 `basit[4]`: "eksi işaretini görmezden gel… −3x de −x'ten daha diktir". Terim tanımında "artıysa yükselir, eksiyse iner" ifadesi var. |
| D1-05 b2 kitap katmanında kaynaksız cümle | **GİDERİLDİ** | Cümle `basit[3]`'e taşındı. Eklenen "okun sağı ile görüntü kümesi aynı olmak zorunda değildir" ifadesi matematik olarak doğru. |
| D1-06 baglam-model L = 0: ek hatası ve −T şıkkı | **GİDERİLDİ** | Satır 1342'de ek "litreye" sözcüğüne bağlandı. −T şıkkı kaldırıldı. Yerine V·rr ve V − rr geldi (`islem_hatasi`, satır 1346–1347, `yonelme(rr)` ile). (V + L)/rr = T doğru cevaba eşit çıkıyor ve `ayikla` ile eleniyor. Geriye V, V·rr ve V − rr kalıyor; üçü de farklı ve tam sayı. |
| D1-07 deger-hesap ters kipte "işareti koru" dolgusu | **GİDERİLDİ** | Satır 1024: çeldirici yalnız `a < 0 \|\| d − b < 0` iken üretiliyor. Açıklama dört işaret durumunda da doğru ("aynı → artı / farklı → eksi"). Döküm #0 ve #3 tutuyor. |
| D1-08 üreteçlerde özgül olmayan etiket | **GİDERİLDİ** | iki-nokta satır 1147 ve artan-azalan satır 1226 artık `egim_kesisim_karistirma`. |
| D1-09 sifir-isaret kökü 9.2.3'e kayıyor | **GİDERİLDİ** | Satır 1096: "g fonksiyonunun pozitif (g(x) > 0) olduğu aralık". Kitap dili, s.115. |
| D1-10 zorluk dağılımı | **GİDERİLDİ** | Kolay: 10 soru (%50), orta: 7 (%35), sınav seviyesi: 3 (%15). s004 ve s020 zorluk 2'ye çıkarıldı. |
| D1-11 DOĞRULA maddeleri docs/dogrula.md'de yok | **KISMEN** | dogrula.md satır 21, 22 ve 23 eklendi. Kartın `dogrula[2]` maddesi (sabit fonksiyonun maks-min durumu) hâlâ "DOĞRULA:" etiketli ama dogrula.md'de yok. Bkz. D2-03. |

---

## 2. Değişen içeriğin bağımsız doğrulaması

### Konu kartı
- **b7, iki noktadan eğim (`basit[2–3]`, kontrol sorusu 3):**
  - (1, 3) ve (3, 9): Δy = 6, Δx = 2, eğim 3. h(x) = 3x ile tutarlı. DOĞRU.
  - (1, 3) ve (3, 7): eğim 4/2 = 2. Anahtar 2. DOĞRU.
- **b8, x ekseni boyunca öteleme:**
  - Tablo: 2x için 0, 2, 4; 2(x − 1) için −2, 0, 2. 2x'in x = 0'daki değerini 2(x − 1) x = 1'de alıyor, yani doğru 1 birim sağa kaymış. DOĞRU.
  - g(x) = a·f(x − r) + k'de r > 0 ise doğru sağa, k > 0 ise yukarı kayar. f(x + r) sola, −k aşağı kaydırır. DOĞRU.
  - Kontrol sorusu 3(x − 2) → 2 birim sağa. DOĞRU.
  - s.108 karşılaştırması:
    - Kitapta g(x) = 130x − 260 doğrusu var. "x eksenini B(2, 0) noktasında kestiği görülür… B aracının A aracından 2 saat sonra yola çıktığı anlamına gelmektedir."
    - Kartın "130x − 260 = 130(x − 2), x eksenini (2, 0)'da keser" cümlesi kitapla aynı.
    - 130(x − 2) yazımı kartın kendi cebirsel düzenlemesi ve doğru.
    - Öteleme bağı ise açıkça kurulmamış. Bkz. D2-01.
  - "a·f(x ± r) ± k düzenlenince mx + n olur (s.96)": s.96 satır 16–17 ile aynı. 2·f(x − 1) + 5 = 2x + 3. DOĞRU.
  - s.115 y ekseni ötelemesi ("b ∈ R⁺ ise pozitif yönde b birim", "b ∈ R⁻ ise negatif yönde |b| birim"): kartla aynı. DOĞRU.
- **b9, > ile ≥ ayrımı:**
  - x − 5 için g > 0 → (5, ∞); g ≥ 0 → [5, ∞); g ≤ 0 → (−∞, 5].
  - Kontrol sorusu x − 3 ≥ 0 → [3, ∞).
  - d(50) için: sıfır 40, a < 0, 50 sıfırın sağında → negatif.
  - Hepsi DOĞRU.
- **b10, parametreli sabit fonksiyon:**
  - (m − 2)x + 4 sabit fonksiyonsa m = 2. DOĞRU.
  - "a = 0 için g(x) = k sabit fonksiyon; o da doğrusaldır (s.110)": s.110 satır 25–26 ile aynı.
  - Not: program s.50 a ≠ 0 diyor. Kart burada kitabı izliyor; çelişki kitap ile program arasında, kartta değil.
  - Atıf eksiği var. Bkz. D2-02.

### Soru bankası (cevaplar bağımsız çözüldü)

| Soru | Benim çözümüm | Anahtar | Not |
|---|---|---|---|
| s002 | f(−2) = −2 → Doğru | true | ✓ |
| s004 | −3x + 36 = 18 ⇒ x = 6. Tanım kümesi [0, 6], görüntü kümesi [18, 36]. | [18, 36] | ✓ Tüm çeldiriciler yanlış: [0, 6] tanım kümesidir, [0, 36] bağlamı okumamaktır, [36, 54] 3·6 + 36 = 54'ten gelir. |
| s005 | (0, ∞)'da x > 0 → Doğru | true | ✓ |
| s012 | 2x çizilir, sonra 3 birim aşağı | 1. şık | ✓ Etiket artık `egim_kesisim_karistirma`. |
| s013 | u = 30x + 50; u(6) = 230; 30x = 270 ⇒ x = 9; eğim 30 > 0, artan | aynı | ✓ Rubrik 4 + 3 + 2 + 2 + 2 + 2 = **15**, kökle tutuyor. |
| s016 | a > 0 ⇒ artan → Yanlış | false | ✓ |
| s018 | c(2) = c(6) = 90 → bire bir değil, Yanlış | false | ✓ |
| s019 | b = 540; a = −90/5 = −18; sıfır 30; tanım kümesi [0, 30], görüntü kümesi [0, 540]; kontrol d(10) = 360 | aynı | ✓ Rubrik 2 + 3 + 2 + 2 + 2 + 2 + 2 = **15**, kökle tutuyor. |
| s020 | Grafik yalnız seçilen a değerleri için geçerli → Yanlış | false | ✓ (zorluk 2) |

Çoktan seçmelilerde ikinci savunulabilir doğru yok.

### Üreteçlerde değişen dallar
- **`yonelme()` ekleri (satır 957–970):**
  - Birler basamağı: bire, ikiye, üçe, dörde, beşe, altıya, yediye, sekize, dokuza.
  - Onlar basamağı: ona, yirmiye, otuza, kırka, elliye, altmışa, yetmişe, seksene, doksana.
  - Büyük sayılar: yüze, bine, milyona. Sıfır: sıfıra.
  - Negatif sayıda mutlak değere bakıyor (−3'e = "eksi üçe"). Ondalıkta virgülden sonraki kısma bakıyor (2,5'e = "iki virgül beşe").
  - Kullanılan değerler doğru ek alıyor: rr ∈ {10, 15, 20, 25} → 10'a, 15'e, 20'ye, 25'e; a ∈ ±{1…6}.
  - Hepsi DOĞRU.
- **baglam-model L = 0:** Kök "kaç dakikada tamamen boşalır". İpucu "fonksiyonun sıfırını bul". Şıklar V, V·rr ve V − rr; açıklamaları doğru ve 15'e/20'ye ekleri doğru. Negatif şık yok.
  - Gözlem (bulgu değil): V·rr (ör. 9000 dk) iri bir değer. Yine de böleceğine çarpan öğrencinin gerçek hatası; kural 13 kapsamında kabul edilebilir.
- **deger-hesap ters kip, işaret çeldiricisi:** Yalnız negatif bölende ya da negatif bölünende çıkıyor. x0 = 0 iken değer doğru cevaba eşit oluyor ve eleniyor.
  - (d − ab)/a yolu "yalnız d bölünmüş" hatasıdır: x + b = d/a. Açıklaması doğru.
  - Döküm #3'te −5/4 ve #11'de 4 elle doğrulandı.
- **sifir-isaret kök dili:** Satır 1092'deki ad tablosu ile ">" → pozitif, "≥" → pozitif ya da sıfır vb. eşleşmesi doğru. `aralik_uc` açıklaması kapalı ve açık uçta doğru. Döküm #0–#11 kontrol edildi.
- **iki-nokta adımları:**
  - Adım numaraları tutarlı (6 ya da 7 adım).
  - b hesabı "a·x1 + b = y1" doğru.
  - Kontrol satırı x2'de değerlendiriyor.
  - Çeldiricilerin hepsi (x1, y1)'den geçen tutarlı doğrular. Döküm #0–#11 elle doğrulandı.
- **artan-azalan kay açıklaması (satır 1228–1229):** (x − kr)'de kr > 0 ise "sağa", kr < 0 ise (x + |kr|) "sola" diyor; yön doğru. "Kayma artanlığı değiştirmez" doğru. Döküm #0, #1, #3, #7 ve #11 tutuyor.

## 3. `program_sayfa` alanı ve kaynaklar
- **b8 `kaynak.program_sayfa: "52"`:** DOĞRU. Program s0052 satır 44–47: "…dönüşümler yoluyla … g(x) = a ∙ f(x ± r) ± k … r ve k … aşamalı olarak ele alınır".
- **b8 `kitap_sayfa: "96, 102-105, 108, 115"`:** s.96 (mx + n), s.108 (130x − 260) ve s.115 (y ekseni ötelemesi) teyitli.
- **Alanın kullanımı:** `program_sayfa` yalnız bu kartta var. `tools/dogrula.py` ve panel bu alanı okumuyor. Zararsız, ama şema belgesine eklenmesi önerilir (ana ajan).
- **Bankadaki kaynak atıfları:** s004 → s.116, s012/s015/s016 → s.115, s017 → s.110, s020 → s.101. Konuyu taşıyorlar.

---

## Yeni bulgular

### D2-01 · KÜÇÜK · b8 kitap[2]: s.108 örneğinin ötelemeyle bağı yazılmamış
- **Yer:** kart `bolumler[7].katmanlar.kitap[2]`.
- **İddia:** "s.108'deki g(x) = 130x − 260 = 130(x − 2) doğrusu, x eksenini (2, 0)'da keser."
- **Kitap:** s.108: "x eksenini B(2, 0) noktasında kestiği görülür… B aracının A aracından 2 saat sonra yola çıktığı anlamına gelmektedir."
- **Karar:** DOĞRU, ancak eksik. Cümle bir öteleme örneği olarak konmuş, ama 130x ile bağı söylenmiyor. Öğrenci örneğin neden orada olduğunu anlamaz.
- **ÖNERİLEN DÜZELTME:** Cümle şöyle değişir: "s.108'deki g(x) = 130x − 260 = 130(x − 2) doğrusu, 130x doğrusunun 2 birim sağa ötelenmişidir; x eksenini (2, 0)'da keser. Kitap bunu 'B aracı 2 saat sonra yola çıktı' diye yorumlar."

### D2-02 · KÜÇÜK · b10 kitap[1]: parametreli örnek atıfsız
- **Yer:** kart `bolumler[9].katmanlar.kitap[1]`.
- **İddia:** "Katsayısı harfli bir ifadede bu yüzden x'in katsayısı 0 yapılır. Örneğin (m − 2)x + 4 sabit fonksiyonsa m = 2 olur."
- **Kitap:** s.115 yalnız "a = 0 ise g(x) = b sabit fonksiyonu" diyor. Parametreli soru s.110 Sıra Sizde 3'te var: "a ∈ R … g fonksiyonu sabit fonksiyondur".
- **Karar:** Matematik DOĞRU. Ancak cümle kitap katmanında s.115 atfının altında duruyor ve s.115'te bu örnek yok. D1-05 ile aynı tür bir sorun.
- **ÖNERİLEN DÜZELTME:** Örnek cümlesinin sonuna "(kitabın s.110 Sıra Sizde 3 sorusu bu türdendir)" eklenir. Ya da örnek `basit` katmanına taşınır.

### D2-03 · KÜÇÜK · Kartın dogrula[2] maddesi docs/dogrula.md'de yok (D1-11'in kalanı)
- **Yer:** kart `dogrula[2]` ("Sabit fonksiyonun maksimum-minimum durumu… kart bu konuya girmedi").
- **Durum:** docs/dogrula.md'de 21–23. satırlar var, bu madde yok. CLAUDE.md kuralına göre her DOĞRULA satırı oraya eklenir.
- **ÖNERİLEN DÜZELTME:** Ana ajan iki yoldan birini seçer:
  - docs/dogrula.md'ye satır eklenir: "9.2.1 sabit fonksiyonun maks-min durumu kitapta (s.110) cevapsız; kart girmiyor | bilgi notu | [x]".
  - Ya da kart maddesinin başındaki "DOĞRULA:" etiketi "NOT:" yapılır (tur 1'de "kapanır" denmişti).

---

## Açık DOĞRULA listesi

| Madde | Durum |
|---|---|
| `dogrula[0]` x ekseni ötelemesi, kitapta açık kural yok | Açık. Öğretmen defteriyle teyit gerekli (dogrula.md #21). Kapsam program s.52 ile teyitli. |
| `dogrula[1]` maksimum noktası: x mi, (x, f(x)) mi | Açık (dogrula.md #22). |
| `dogrula[2]` sabit fonksiyonun maks-min durumu | Kapanabilir. dogrula.md'ye işlenmeli (D2-03). |
| `dogrula[3]` 1D2Y dağılımı; geçmiş sınavda fonksiyon sorusu yok | Açık (dogrula.md #7 ve #23). ÖDSGM yayımlayınca kapanır. |

## Kontrol edilemeyenler
- Örnek dökümde baglam-model `bos_x` için L = 0 örneği ve deger-hesap ters kipte "a > 0, d − b > 0" örneği yok. Bu iki dal yalnız kod okunarak doğrulandı. Sonraki dökümde birer tohum eklenmesi önerilir.
- `yonelme()` için bir birim testi olup olmadığına bakılmadı (`G.B9.ekler` dışa açılmış).

---

KARAR: TEMİZ (KRİTİK 0, ÖNEMLİ 0, KÜÇÜK 3)
