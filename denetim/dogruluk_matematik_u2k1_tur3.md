# Doğruluk denetimi · matematik-u2-k1 (9.2.1 Doğrusal fonksiyonlar) · tur 3 (son tur)

Tarih: 2026-10-27 · Denetçi: dogruluk-denetcisi (salt okur)

Denetlenen dosyalar:
- Konu kartı `dersler/matematik/konular/matematik-u2-k1.json` (surum 3). Kapsam: b2, b8, b9 (yeni), b10, b11 ve `dogrula` dizisi.
- `panel/motor/uretecler/matematik.js`, satır 1063–1260: `mat-u2-sifir-isaret`, `mat-u2-iki-nokta`, `mat-u2-artan-azalan`.
- Örnek döküm `denetim/uretec_ornekleri_u2k1.md` (yeniden üretildi): bu üç üretecin #0, #1, #2, #3, #7 ve #11 tohumları.
- `docs/dogrula.md` satır 51–54.

Karşılaştırılan kaynaklar:
- Kitap (`matematik-9sinif-ders-kitabi-1kitap_…`): s0096, s0105, s0108, s0110 ve s0115 bu turda yeniden okundu.
- Program (`matematik-dersi_…`): s0052 (satır 44) ve s0053.

## Özet

| Düzey | Sayı | Bulgular |
|---|---|---|
| KRİTİK | 0 | Yok. |
| ÖNEMLİ | 0 | Yok. |
| KÜÇÜK | 1 | D3-01 |

- **Tur 2 bulguları:** D2-01, D2-02 ve D2-03'ün üçü de giderildi.
- **Matematik ve sayılar:** Değişen ya da eklenen metinde matematik hatası yok. Üreteç dökümündeki adımların hepsi elle yeniden hesaplandı ve tuttu.

---

## 1. İzleme tablosu (tur 2 → tur 3)

| Bulgu | Durum | Kanıt |
|---|---|---|
| D2-01 s.108 örneğinin ötelemeyle bağı | **GİDERİLDİ** | b9 `kitap[1]`: "130x − 260 = 130(x − 2) doğrusu, 130x doğrusunun 2 birim sağa ötelenmişidir; x eksenini (2, 0)'da keser." Kitap s.108 satır 12–13: "x eksenini B(2, 0) noktasında kestiği görülür. Bu durum, B aracının A aracından 2 saat sonra yola çıktığı anlamına gelmektedir." Cebir doğru: 130(x − 2) = 130x − 260. |
| D2-02 parametreli sabit fonksiyon örneği atıfsız | **GİDERİLDİ** | b11 `kitap[1]` artık "(kitabın s.110 Sıra Sizde 3 sorusu bu türdendir)" diye bitiyor. s.110 satır 20–21'de Sıra Sizde 3 var: parametresi a olan g fonksiyonu sabit fonksiyon olarak veriliyor. Atıf doğru. "m − 2 = 0, yani m = 2" ara adımı da eklenmiş. |
| D2-03 kartın dogrula[2] maddesi dogrula.md'de yok | **GİDERİLDİ** | docs/dogrula.md satır 54'e #24 eklendi: "9.2.1 sabit fonksiyonun maksimum-minimum durumu kitapta (s.110) tartışmaya bırakılmış…", durum `[x]`. Kartın dogrula[2] maddesiyle aynı. Kartın dört DOĞRULA maddesinin hepsinin artık dogrula.md'de karşılığı var: #21, #22, #24, #7 ve #23. |

---

## 2. Değişen içeriğin bağımsız doğrulaması

### b9 "Doğruyu sağa-sola kaydırmak" (yeni bölüm)
- **Tablo (`basit[0]`):**
  - g(x) = 3(x − 2) için g(2) = 0, g(3) = 3, g(4) = 6.
  - m(x) = 3x için m(0) = 0, m(1) = 3, m(2) = 6.
  - Kart aynı değerleri veriyor. DOĞRU.
- **"B, A'nın değerlerini 2 dakika sonra alıyor; 2 birim sağa" (`basit[1]`):** g(x) = m(x − 2) olduğu için DOĞRU.
- **`basit[2]`:**
  - "x − 2 sağa, x + 2 sola" doğru.
  - "Parantezi açınca 3(x − 2) = 3x − 6 olur; x'in katsayısı yine 3" doğru.
  - "Kayma dikliği ve artanlığı değiştirmez" doğru.
- **`basit[3]`:** g(x) = a(x − r) + k biçiminde r > 0 sağa, r < 0 sola (x + |r|), k > 0 yukarı, k < 0 aşağı. DOĞRU.
- **`kitap[0]`:** "Program açıkça ister (s.52); kitapta açık kural yoktur."
  - Program s0052 satır 44: "dönüşümler yoluyla gerçek sayılarda g(x) = a ∙ f(x ± r) ± k".
  - s.115 yalnız y ekseni boyunca ötelemeyi veriyor (satır 10–12).
  - DOĞRU.
- **`kitap[2]`:** s.96 satır 16–17: "g(x) = a f(x ± r) ± k şeklindeki g doğrusal fonksiyonu düzenlenerek g(x) = mx + n biçiminde yazılabilir." Örnekte 2(x − 1) + 5 = 2x − 2 + 5 = 2x + 3. DOĞRU.
- **Yazılıda örneği:**
  - a) 2x − 2 + 5 = 2x + 3. DOĞRU.
  - b) m(x) = 2x önce 1 birim sağa, sonra 5 birim yukarı ötelenir. DOĞRU.
  - Sağlama: m(x − 1) + 5 = 2x − 2 + 5 = g(x).
  - İki öteleme sırası değiştirilse de sonuç aynı çıkar; "önce/sonra" yazımı yanlış değildir.
- **Kontrol soruları:**
  - 3(x − 2) → 2 birim sağa. DOĞRU.
  - 2(x + 3) → 3 birim sola. DOĞRU.
  - İpuçlarında 3(x − 2) = 0 ⇒ x = 2 ve 2(x + 3) = 0 ⇒ x = −3 doğru.
- **`kaynak`:**
  - `kitap_sayfa: "96, 108"`: bölümde yalnız bu iki sayfa kullanılıyor. DOĞRU.
  - `program_sayfa: "52"`: DOĞRU.
- **Gözlem (bulgu değil):** `kitap[1]` sonundaki 'B aracı 2 saat sonra yola çıktı' tırnak içinde, ama kitaptaki cümlenin birebir hâli değil, özeti. Telif ya da anlam sorunu yok. İstenirse tırnak kaldırılabilir.

### b8 (sağa-sola öteleme b9'a taşındı)
- **`basit[1]` tablosu:** 2x + 3 için x = −1, 0, 1'de 1, 3, 5. DOĞRU.
- **`basit[4]`:** 25 · 2 + b = 90 ⇒ 50 + b = 90 ⇒ b = 40. Örnekteki u(x) = 25x + 40 ile tutarlı: u(2) = 90. DOĞRU.
- **Yeni kontrol sorusu 3:** 3 · 2 + b = 10 ⇒ b = 4. Anahtar 4. DOĞRU. İpuçları ve yanlış açıklaması tutarlı.
- **`kaynak.kitap_sayfa: "102-105, 115"`:**
  - s.115 iki adımlı çizim (satır 8–12) ve s.105 taksi örneği f(x) = 17x + 30 (satır 6 ve 35) teyitli.
  - s.96 ve s.108 b8 metninde artık geçmiyor; çıkarılmaları doğru.
- **`program_sayfa: "53"`:** Program s0053 satır 22–24: "belli bir açılış ücreti ile başlayan taksi ücretinin yola bağlı değişiminin fonksiyonun artanlığı ile ilişkilendirilmesi gibi". `puan_ipucu`daki "Programın örneği de açılış ücretli taksidir (program, s.53)" ile aynı. DOĞRU.

### b10 (eski b9: ax + b'nin sıfırı ve işareti)
- **`basit[2]`:**
  - d(10) = −150 + 600 = 450 > 0.
  - d(60) = −900 + 600 = −300 < 0.
  - DOĞRU.
- **`basit[4]`:** x − 5 > 0 → (5, ∞). g(5) = 0 olduğu için 5 dahil değil. DOĞRU.
- **`basit[5]`:** x − 5 ≥ 0 → [5, ∞); ≤ 0 → (−∞, 5]. DOĞRU.
- **`kitap[0]`, eklenen "Sıfır her zaman x = −b/a'dır.":**
  - Matematik doğru, çünkü s.115'teki liste a ≠ 0 koşuluyla başlıyor (satır 13).
  - Ancak s.115 bu formülü vermiyor. Satır 18'de yalnız "g fonksiyonunun sıfırı n olsun" yazıyor.
  - x = −b/a program s.53 satır 18–19'da geçiyor. Bkz. D3-01.

### b11 (eski b10: sabit fonksiyon)
- **`kitap[1]` atfı:** Bkz. D2-02. DOĞRU.

### b2 `basit[3]`
- **İddia:** "f: ℝ → ℝ yazımında okun solu tanım kümesidir. Okun sağı, değerlerin seçildiği büyük kümedir. Görüntü kümesi onun içinde kalır; hepsi olmak zorunda değildir."
- **Karar:** DOĞRU. Okun sağındaki küme değer kümesidir. Görüntü kümesi bunun alt kümesidir ve tamamına eşit olmak zorunda değildir.
  - Örnek: [0, 120] → ℝ'de görüntü kümesi [0, 120] ⊂ ℝ.
- "Değer kümesi" terimi kullanılmamış. Kitap s.95 da bu terime girmiyor, kartın kaçınması uygun.

---

## 3. Üreteçlerde değişen dallar (dökümdeki tohumlar elle çözüldü)

### mat-u2-sifir-isaret (satır 1103–1114)
- **Bölme adımı:**
  - Yalnız a ≠ 1 iken "x = −b : a = n" satırı ekleniyor.
  - a = −1 iken de satır görünüyor: "x = 3 : (−1) = −3" gibi; doğru.
  - b = 0 dalında tek satır var: "x = 0".
- **Döküm:**
  - #2: 3x − 5 = 0 ⇒ 3x = 5 ⇒ x = 5 : 3 = 5/3. g ≥ 0 → [5/3, ∞) ✓.
  - #2 `islem_hatasi` şıkkı 3/5, açıklaması "3x = 5 ise x = 5 : 3" ✓.
  - #11: x + 3 ≥ 0 → [−3, ∞) ✓. a = 1 olduğu için bölme satırı yok; adımlar 1–7 tutarlı.
  - #0: −3x > 0 → (−∞, 0) ✓.
  - #1: 2x ≥ 0 → [0, ∞) ✓.
  - #3: 3x < 0 → (−∞, 0) ✓.
  - #7: −5x ≤ 0 → [0, ∞) ✓.
  - Çeldirici açıklamalarının hepsi doğru.

### mat-u2-iki-nokta (satır 1166–1177)
- **b adımı:** "a · x1 + b = y1" → "a·x1 + b = y1 olur" → "b = y1 − a·x1". x1 = 0 iken "g(0) = b" kısayolu kullanılıyor.
- **Döküm (doğru cevap ve her çeldiricinin (x1, y1)'den geçtiği yeniden hesaplandı):**
  - #0: a = −4 : 2 = −2. b = −2 − (−2) = 0. Doğru cevap g(x) = −2x; kontrol g(3) = −6 ✓.
  - #1: a = −3 : 3 = −1. b = −1 − 1 = −2. Doğru cevap −x − 2; g(2) = −4 ✓.
  - #2: a = 6 : 2 = 3. b = −10 − (−6) = −4. Doğru cevap 3x − 4 ✓. x2 = 0 olduğu için `kavram_karisikligi` çeldiricisi doğru biçimde atlanmış.
  - #3: a = −10 : 5 = −2. b = −3 − 2 = −5. Doğru cevap −2x − 5; g(4) = −13 ✓.
  - #7: a = −20 : 5 = −4. b = 8 − 8 = 0. Doğru cevap −4x; g(3) = −12 ✓.
  - #11: a = 3 : 3 = 1. b = 2 − 1 = 1. Doğru cevap x + 1; g(4) = 5 ✓.
- `isaret_hatasi` açıklamasındaki "b = y1 − (a·x1)" doğru hesabı gösteriyor ve çözüm adımıyla aynı.

### mat-u2-artan-azalan (satır 1210–1211, 1243, 1256)
- **"Parantezi açınca" ifadesi:** `dogruYaz(a, fDeger(f, 0))` ile sabit terim −a·r + k hesaplanıyor; doğru.
- **Döküm:**
  - #0: 2(x + 1) − 9 = 2x − 7 ✓.
  - #1: −3(x − 2) + 3 = −3x + 9 ✓.
  - #3: −2(x − 1) + 7 = −2x + 9 ✓.
  - #7: −2(x − 2) + 8 = −2x + 12 ✓.
  - #11: 5(x + 2) − 5 = 5x + 5 ✓.
- **Kayma yönleri:** (x + 1) ve (x + 2) sola, (x − 1) ve (x − 2) sağa. Hepsi doğru.
- Şıkta baş harf büyütülmüş ("Parantezi"), çözüm satırında küçük ("parantezi"); ikisi de dilbilgisine uygun.
- Her tohumda doğru şık tek. İkinci savunulabilir doğru yok.

---

## Yeni bulgular

### D3-01 · KÜÇÜK · b10 kitap[0]: "x = −b/a" kitap s.115'e dayandırılmış, formül programda
- **Yer:** kart `bolumler[9].katmanlar.kitap[0]` (b10).
- **İddia:** "Kitap g(x) = ax + b için sonuçları listeler (s.115). … Sıfır her zaman x = −b/a'dır."
- **Kaynaklar:**
  - Kitap s.115 satır 18: "n ∈ R olmak üzere g fonksiyonunun sıfırı n olsun (g(n) = 0)." Formül yok.
  - Program s.53 satır 18–19: "h(x) = ax + b (a, b ∈ ℝ, a ≠ 0) … x = −b/a noktasına göre ayrılmış işaret tablosundan yararlanılır."
- **Karar:** Matematik DOĞRU (a ≠ 0 bağlamında). Atıf eksik: cümle s.115'in altında duruyor, ama formül programda geçiyor.
  - "Her zaman" ifadesi a = 0 durumunu kapsamaz. Liste a ≠ 0 diye başladığı için okuma doğru, ama aynı listede a = 0 maddesi de var.
- **ÖNERİLEN DÜZELTME:** Cümle şöyle değişir: "a ≠ 0 iken sıfır x = −b/a'dır (program, s.53)." İstenirse b10 `kaynak` alanına `"program_sayfa": "53"` eklenir; `kitap[3]` zaten program s.53'ü anıyor.

---

## Açık DOĞRULA listesi

| Madde | Durum |
|---|---|
| `dogrula[0]` x ekseni ötelemesi, kitapta açık kural yok | Açık (dogrula.md #21). Metin yeni b9'u doğru gösteriyor. |
| `dogrula[1]` maksimum noktası: x mi, (x, f(x)) mi | Açık (dogrula.md #22). |
| `dogrula[2]` sabit fonksiyonun maks-min durumu | Kapandı (dogrula.md #24, [x]). |
| `dogrula[3]` 1D2Y dağılımı; geçmiş sınavda fonksiyon sorusu yok | Açık (dogrula.md #7 ve #23). |

## Kontrol edilemeyenler
- Soru bankası (`sorular/matematik-u2-k1.json`) bu turda kapsam dışı; tur 2'deki doğrulama geçerli sayıldı.
- Dökümde yine baglam-model L = 0 ve deger-hesap "a > 0, d − b > 0" tohumu yok. Bu dallar bu turda değişmedi; tur 2'deki kod okuması geçerli.
- s.102–104 bu turda yeniden okunmadı. b8 `kitap_sayfa` aralığı tur 2'de kabul edilmişti.

---

KARAR: TEMİZ (KRİTİK 0, ÖNEMLİ 0, KÜÇÜK 1)
