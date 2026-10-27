# Üreteç denetimi · Matematik Ünite 1 · Tur 2 (2026-10-27)

Denetçi: dogruluk-denetcisi (salt okur) + pedagoji-denetcisi ölçütleri.
Denetlenen: `panel/motor/uretecler/matematik.js` (941 satır, 12 üreteç), `panel/motor/soru.js` (`esitDeger`, `insa`, `uretecDene`). Örnekler: `denetim/uretec_ornekleri_u1.md`. Önceki tur: `denetim/uretec_matematik_u1_tur1.md`.

Yöntem: Her yanlış şıkkın koşulu ve `deger` formülü doğru cevapla cebirsel olarak yeniden karşılaştırıldı. Yeni metinlerin kelimeleri sayıldı. hata_turu etiketleri SKILL sözlüğüyle eşlendi. Bash olmadığı için tohum taraması yapılmadı. Çıkarımlar kod okumasına ve örnek dökümüne dayanır.

Motor notu: `insa` (soru.js 38–44) artık yanlışları hem metne hem değere göre tekilleştiriyor. Doğruya değerce eşit yanlış elenir. İki yanlış aynı değerdeyse biri elenir. `uretecDene` (satır 110), elemeden önceki havuzda doğruya değerce eşit yanlışı hata sayıyor. `deger` verilmeyen şık (yalnız `sonsuz_koseli`) değer karşılaştırmasına girmiyor. Bu doğru, çünkü geçersiz yazım hiçbir zaman doğru cevap olamaz.

## 1. İzleme tablosu (Tur 1 bulguları)

| No | Düzey | Durum | Kanıt |
|---|---|---|---|
| U1-01 | KRİTİK | GİDERİLDİ | 137: m adayları `[-2,-1,0,2,3]`, m = 1 yok. 156: `us_carpma` için koşul `m >= 2`. 140: m = n = 2 iken k ≠ 0 zorunlu. Ayrıca değer süzgeci var (`deger` = aᵐ·n). |
| U1-02 | KRİTİK | GİDERİLDİ | 339: `!(C > 0 && S === C*C*m)` koşulu var. 330: katsayılar `shuffle([1..5])` ile hep farklı. |
| U1-03 | KRİTİK | GİDERİLDİ | 101–106: her dalda sonucu değiştirme koşulu var (`p≠0`, `m·n≠m+n`, `e≠0`, `ea≠e`). Değerler `dg()` ile dolu. |
| U1-04 | KRİTİK | GİDERİLDİ | 150–156: `m+n≠m·n`, `k && e≠0`, `m·n·k≠e`, `m·n<0`, `mⁿ≠m·n` koşulları var. Sınır durumlarını elle denedim: (m,n,k) = (0,0,0), (−1,−1,0), (0,2,0), (3,2,0), (2,4,0). Hepsinde en az 3 tekil değerli çeldirici kalıyor. |
| U1-05 | KRİTİK | GİDERİLDİ | 852: `if (b4 !== 2)` koşulu var. b4 = 2 iken de 3 çeldirici kalıyor. |
| U1-06 | ÖNEMLİ | GİDERİLDİ | 585, 631: `x ∈ ℝ`. 734–738: `SEMBOL` ve `KUME_AD` (ℕ, ℤ, ℚ′) var. `onermeYaz`, ipucu 3 ve çözüm `SEMBOL[S]` kullanıyor. Kartlarda artık `x ∈ R` geçmiyor (Grep sonucu boş). |
| U1-07 | ÖNEMLİ | GİDERİLDİ | 101, 102, 150, 152, 154: `us_kural_karisikligi`. 216–217: `bilimsel_katsayi`. 284: `islem_hatasi`. 849, 877, 880: `kare_farki_karistirma`. 915: `carpim_sifir_isaret`. |
| U1-08 | ÖNEMLİ | GİDERİLDİ | 681: `[p1+p2, 2(q1+q2)]`. Dört tipte de aralık dışında kaldığını yeniden kontrol ettim. Değeri öbür çeldiricilerle çakışmıyor. |
| U1-09 | ÖNEMLİ | GİDERİLDİ | ussun-ussu 165 (k = 0 iken çarpımı söylemiyor). alan-modeli 926 ("Sol tarafı (x − b)² biçiminde yazmayı dene"). eslenik 414 (d = 1 iken "= ?"). |
| U1-10 | ÖNEMLİ | GİDERİLDİ | 491–492 ve 911: bağlam cümleleri en çok 11 kelime. |
| U1-11 | ÖNEMLİ | GİDERİLDİ | 520–533: adımlar hesaplanmış uçlarla yazılıyor. ∅ ve tek nokta gerekçeli. Örnek dökümü satır 619–620: "büyük sol uç 3, küçük sağ uç 3" ve "3 aralıklardan birinde dâhil değil". |
| U1-12 | ÖNEMLİ | GİDERİLDİ | 562–566 `OLCU_BAGLAM`: lastik 30–34 psi, sac 3–20 mm, buzdolabı 4–6 °C. 580: c ve d bağlama göre yeniden çekiliyor. Örnek #0: sac 12–16 mm. |
| U1-13 | ÖNEMLİ | GİDERİLDİ | 830: "10'un bir katı ile küçük bir sayının toplamı/farkı". |
| U1-14 | ÖNEMLİ | GİDERİLDİ | 883: bağlamlı ipucu 1 eklendi. 889: çözüme "Çim alanı = bahçenin alanı − havuzun alanı" adımı eklendi. |
| U1-15 | ÖNEMLİ | GİDERİLDİ | 687 ve 699: payda eşitleme ayrı adım. Toplama ve 2'ye bölme de ayrı adımlar. |
| U1-16 | KÜÇÜK | GİDERİLDİ | 330: katsayılar farklı seçiliyor. |
| U1-17 | KÜÇÜK | GİDERİLDİ | ussun-ussu'da m = 1 yok. uslu-carpma-bolme'de bilerek bırakıldı. |
| U1-18 | KÜÇÜK | GİDERİLDİ | 120: "Sonuç: 5¹ = 5." |
| U1-19 | KÜÇÜK | GİDERİLDİ | 234–235: p = 0 iken adım atlanıyor ve numaralar kayıyor. |
| U1-20 | KÜÇÜK | GİDERİLDİ | 764: `kesirYaz(a, b)`. |
| U1-21 | KÜÇÜK | GİDERİLDİ | 828: `fark_karesi_isaret`. 837–838: adım 3 ile adım 4 ayrıldı. |
| U1-22 | KÜÇÜK | GİDERİLDİ | 469 ve 479: `ayrik` tipinde op rastgele. ∪ dalında iki parçalı cevap çıkıyor (517, 527–529). |
| U1-23 | KÜÇÜK | GİDERİLDİ | 463: "45-49, 54". 570: "50-52, 54". bilimsel "22-23" Tur 1'de kabul edilmişti. |

## 2. `deger` alanlarının denetimi

| Üreteç | Soru ne istiyor | `deger` | Karar |
|---|---|---|---|
| uslu-carpma-bolme, ussun-ussu | sonuç (değer) | `Math.pow(a, e)` sayı. sifir_us = 0. taban_carpma = (a²)ᵉ. | DOĞRU. Değerce eşit yazımlar (ör. e = 1 iken `4` ile `2²`) aynı değeri alıyor ve motor birini eliyor. Bu istenen davranış. |
| bilimsel-gosterim | **bilimsel gösterim** (biçim) | `bk(katsayı, üs)` anahtarı | DOĞRU. "13 · 10ⁿ⁻¹" ve "0,13 · 10ⁿ⁺¹" sayı olarak doğruya eşit, ama biçim hatası. Anahtarları farklı (üs farklı), bu yüzden şık olarak kalıyorlar. Bu bilinçli ve doğru. Doğrunun üssü n, her yanlışın üssü farklı (kayma ≠ 0 olduğu için `isaret_hatasi` dahil). Not: `kN * 10` kayan noktada `11.000000000000002` gibi bir anahtar üretebilir. Üs zaten farklı olduğu için sonuca etkisi yok. |
| kok-disi | **en sade biçim** | `kf(dis, ic, der)` kanonik dizge | DOĞRU. Sayı olarak doğruya eşit ama sade olmayan yazımlar (`3√8` ↔ `6√2`, `2√4` ↔ `4`, `2∛16` ↔ `4∛2`) biçim hatası sayılıyor. Anahtarları farklı. Görev tanımındaki "√80 ↔ 4√5" kuralına uygun. Sayıca farklı çeldiricilerin anahtarı da doğrununkiyle çakışmıyor. |
| kok-toplama | **sonuç** (değer) | `C·√m` sayı | DOĞRU. Soru değeri sorduğu için doğru yol sayısal karşılaştırma. √S çeldiricisi koşulla dışlanıyor, motor da ayrıca yakalar. `C√(i·m)`, `C2√m`, `(C±1)√m` ve `C` hiçbir parametrede C√m'ye eşit değil. |
| eslenik | sonuç (değer) | `c(√a+√b)/d` sayı | DOĞRU. Beş yanlışın hiçbiri cebirsel olarak doğruya eşit olamaz (b ≥ 1, a + b ≠ d, √(a−b) < √a). |
| aralik-kesisim-birlesim | küme | `kumeDeger`: üyelik ızgarasından kurulan kanonik küme | DOĞRU. Aynı kümenin farklı yazımları aynı anahtarı alıyor. Uçlar tam sayı olduğu için 0,5 adımlı ızgara yeterli. Boş küme "∅" veriyor. İki ucu da sonsuz bir küme üretilmiyor (tek sonsuz uç). `sonsuz_koseli` şıkkında `deger` yok, bu doğru. |
| aralik-mutlak | (a) gösterim, (b) çözüm kümesi | (a) ve (b) için `mutlakDeger`, yani çözüm kümesi | DOĞRU. (a)'da aynı çözüm kümesini veren iki farklı eşitsizlik iki doğru şık olurdu. Küme karşılaştırması bunu yakalıyor. Mevcut çeldiricilerin hepsi kümece farklı (uç ya da merkez farklı). |
| arada-sayi | değer | `p/q` sayı | DOĞRU. Rasyoneller doğru yuvarlandığı için eşit kesirler aynı double değerini veriyor. |
| kapalilik-karsit | geçerli karşıt örnek | `onermeDeger`: yapısal kimlik | DOĞRU. Tekliği `kontrol` ayrıca doğruluyor (geçerli örnek sayısı = 1). |
| ozdeslik-hesap, alan-modeli | sayı | sayı | DOĞRU. Bütün tiplerde çeldiricilerin birbirine ve doğruya eşitlik koşulları çözümsüz (t ≥ 20, b ≤ 4, ondalık tipte tek/çift ayrımı). |

## 3. Kontroller

- **Matematik doğruluğu:** 12 üretecin doğru şıkkı ve yeni çeldiricileri tüm parametre uzayında doğru. Yeni bir hesap hatası yok.
- **Tek doğru:** Değer ya da biçim anahtarıyla güvence altında. KRİTİK bulgu yok.
- **İpucu 3:** Hiçbir ipucu 3 cevabı doğrudan vermiyor. Bir ipucu boş kalıyor, bkz. U2-01.
- **Cümle uzunluğu ≤ 20 kelime:** Yeni ve değişen bütün bağlam, ipucu, çözüm ve açıklama cümleleri sayıldı. En uzunu kapalılık kökü (16 kelime). Eşik aşılmıyor.
- **Gösterim:** ℝ, ℕ, ℤ, ℚ′ her yerde doğru. Kalan `N`, `Z`, `Q′` yalnız iç anahtar, ekrana basılmıyor.
- **hata_turu:** 21 etiketin hepsi sözlükte var. Anlamları çeldiriciyle uyumlu.

## 4. Yeni bulgular

### U2-01 · KÜÇÜK · mat-u1-kok-toplama · ipucu 3 boş kalıyor
- **Konum:** satır 355. `"√" + Ns[0] + " = " + sade[0]`.
- **Örnek:** Tohum 2 (`Ns [6,150]`) "√6 = √6. Diğerlerini de böyle yaz." Tohum 11 (`Ns [5,20,125]`) "√5 = √5."
- **Sorun:** İlk terimin katsayısı 1 olunca ipucu bir şey göstermiyor. U1-16 düzeltmesinden sonra katsayılar `shuffle([1..5])` ile seçildiği için bu durum 5 soruda 1 kez çıkıyor. "İpucu 3 ilk adımı yapar" kuralı boşa düşüyor.
- **ÖNERİLEN DÜZELTME:**
  ```js
  const j = Math.max(0, ps.findIndex(p => p > 1));
  "√" + Ns[j] + " = " + sade[j] + ". Diğerlerini de böyle yaz."
  ```

### U2-02 · KÜÇÜK · mat-u1-aralik-mutlak · bağlamda x tanımsız
- **Konum:** satır 581 ve 585.
- **Örnek:** Tohum 0: "Tersanede kesilen sac levhanın kalınlığı en az 12 mm, en fazla 16 mm olmalıdır." Kök: "x ∈ ℝ olmak üzere bu aralığın…"
- **Sorun:** Bağlam x'in neyi gösterdiğini söylemiyor. Öğrenci "|x − 14|" içindeki x'i bağlamla eşleyemeyebilir.
- **ÖNERİLEN DÜZELTME:** Bağlamın sonuna bir cümle ekle:
  ```js
  " Kalınlığı x " + birim + " ile gösterelim."
  ```
  Ya da tabloya ad ekle (kalınlık, basınç, sıcaklık) ve "… x " + birim + " ile gösterilsin." yaz.

### U2-03 · KÜÇÜK · mat-u1-eslenik · d tam kare iken açıklama şıkla uyuşmuyor
- **Konum:** satır 403.
- **Örnek:** a = 7, b = 3, c = 1 (d = 4). Kodla çıkarıldı, dökümde yok. Şık "1/2" yazıyor, açıklama "√7 − √3 ile √4 aynı değildir" diyor.
- **Sorun:** Öğrenci şıkta √4 görmüyor, açıklamadaki bağı kuramaz.
- **ÖNERİLEN DÜZELTME:** Açıklamayı `fark + " ile √" + d + (kareMi(d) ? " = " + Math.sqrt(d) : "") + " aynı değildir; kökler çıkarılmaz."` yap.

## Kontrol edilemeyenler
- Tohum taraması yapılmadı (Bash yok). Ekip, 20 000 tohumda motor assert'inin 0 hata verdiğini bildirdi. Değer eşitliği yukarıdaki cebirsel kontrolle ayrıca doğrulandı.
- Kitap sayfaları bu turda yeniden açılmadı. İçerik Tur 1'den sonra kapsam açısından değişmedi.

KARAR: TEMİZ
