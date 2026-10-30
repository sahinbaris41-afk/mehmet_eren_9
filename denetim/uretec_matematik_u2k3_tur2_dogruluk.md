# Üreteç denetimi · Matematik 9.2.3 Doğrusal denklem ve eşitsizlik problemleri · Tur 2 · Doğruluk (2026-10-31)

Denetçi: dogruluk-denetcisi (salt okur).
Denetlenen: `panel/motor/uretecler/matematik.js` satır 1893–2500 (12 kayıt, önek `mat-u2-problem-`).
Karşılaştırma: düzeltme öncesi yedek `scratchpad/matematik_923_tur1_once.js` (satır 1944–2470).
Kanıt: `scratchpad/uretec_tarama_u2k3_tur2.md` (300 tohum, yasak terim 12/12 temiz, benzersiz açıklama şablonları) ve `denetim/uretec_ornekleri_u2k3.md` (35 örnek).
Yöntem: Kod okundu ve yedekle satır satır karşılaştırıldı. Taramadaki ve örnek dosyasındaki değerler elle yeniden hesaplandı. Kabuk aracı olmadığı için yeni tohum çalıştırılmadı.

## 1. Tur 1 bulgularının durumu

| Kod | Önem | Durum | Kanıt |
|---|---|---|---|
| U3D-01 | ÖNEMLİ | KAPANDI | Satır 1973: "Karşıya geçerken işaret değişmemiş: m iki taraftan çıkarılır, ax = b − m olur; burada b + m alınmış." Çözüm yolu da ax = b − m oldu (1994–1996). Örnek denklem #0: a = 20, b = 400, m = 320. 20x = 720 ⇒ 36, şık 36. Örnek #1: 4x = 840 ⇒ 210. Açıklama değerle tutarlı. |
| U3D-02 | ÖNEMLİ | KAPANDI | Satır 2051: `yariAralik(op, c - b)`. a < 0'da açıklamaya "ve eksi sayıya bölünce yön ters döner" eklenmiş (2052). Tarama t9: −6x > 18 ⇒ (18, ∞). t10: −6x ≤ −36 ⇒ (−∞, −36]. Örnek #5: −5x > 10 ⇒ (10, ∞). Bu şıkların hepsi ara satırın yönü değiştirilmeden okunmasıyla elde edilir. |
| U3D-03 | KÜÇÜK | KAPANDI | Satır 2049 artık `tam(c)` kullanıyor: "3x ≤ −18 + 3" (örnek esitsizlik-kolay #0). |
| U3D-04 | KÜÇÜK | KISMEN | Satır 1949'da oran 0,5'ten 0,18'e indi ve yorum eklendi (1947–1948). Ama egm = 1 + a(x − 1)/b, aralık sınırları yüzünden hâlâ 2–3 çıkıyor (hat'ta en çok 3, kira'da en çok 4). Örnekler: tarama t1, t3, t12 ve örnek #0, #1, hepsinde "2". Doğruluk sorunu yok. Çeldiricinin zayıf kalması pedagoji turuna bırakılıyor. Açık kalıyor, KÜÇÜK. |
| U3D-05 | KÜÇÜK | KAPANDI | Satır 2314'teki yorum: "Alo'da Y < x olmadığından bu şık yalnız A'nın birim ücreti büyükken çıkar." |

## 2. Regresyon (yedekle karşılaştırma)

**Kontrol fonksiyonları değişmedi.** `denklemKontrol` (2015), `esitsizlikKontrol` (2084), `tamsayiKontrol` (2184), kesim kontrolü (2292), ucuz kontrolü (2346), `toleransKontrol` (2435) ve tolerans-ters kontrolü (2496) yedekle aynı.

**Doğru cevap mantığı değişmedi.** Denklem: x adımla ya da `rint` ile seçiliyor, m = ax + b ya da m = b − ax. Eşitsizlik: `opx`/`dogru`. Tamsayı: `yuvarla`, `n`. Kesim noktası: `tarifeKur`. Ucuz: `yon`, `dogru`. Tolerans: `tolAr`.

| Değişiklik | Karar | Yeniden hesap |
|---|---|---|
| Azalan denklemde çözüm yolu: ax eklenir, sonra m çıkarılır (1990–1999) | DOĞRU | #0: 400 = 320 + 20x ⇒ 80 = 20x ⇒ x = 4. Kontrol: 20 · 4 = 80, 400 − 80 = 320. #1: 120 = 4x ⇒ 30. Kontrol: 480 − 120 = 360. |
| Artanda Kontrol çarpma ve toplama diye iki satıra bölündü | DOĞRU | #0: 4 · 26 = 104, 104 + 100 = 204. #1: 3 · 101 = 303, 303 + 300 = 603. |
| Eşitsizlikte Kontrol 6 satır oldu (`kon`, 2040–2041) | DOĞRU, KÜÇÜK yazım notu (U3D-07) | #0 (a = −1): −(−2) = 2, 2 − 10 = −8, −8 > −8 yanlış. İçeriden: 3 − 10 = −7 > −8. Dışarıdan: 1 − 10 = −9. #5: −5 · (−2) = 10, 10 + 2 = 12. |
| Tamsayıda Kontrol: gelir, gider ve kâr ayrı satırlarda, sadeleşmiş k(x) kullanılmıyor (2153–2158) | DOĞRU | tamsayi #0: 20 · 101 = 2020, 800 + 12 · 101 = 2012, kâr 8. #5: 1744 − 1755 = −11. kesir #0: 1056 − 1064 = −8, 1068 − 1067 = 1. kesir #2: 1518 − 1526 = −8, 1540 − 1530 = 10. kesir #5: 2412 − 2408 = 4, 2394 − 2396 = −2. |
| Kesirli sınırda kalanlı bölme ve sadeleştirilmemiş F/m (2131, 2159, 2174) | DOĞRU | 800 ÷ 9 = 88, kalan 8 (9 · 88 = 792). 700 ÷ 13 = 53, kalan 11 (689). 1250 ÷ 18 = 69, kalan 8 (1242). 800 ÷ 6 = 133, kalan 2 (798). |
| Yuvarlama teşhis metinleri (2133–2137) | DOĞRU | Kârda n − 1 = ⌊F/m⌋, yani "kesrin yalnız tam kısmı". Zararda n + 1 = ⌈F/m⌉, yani "sınırın üstündeki tam sayı". Tam sayı sınırda esitsizlik_yonu şıkkı Bs ∓ 1 ve "altında/üstünde" ifadesi yönle uyumlu (#0: k(37) = −10; #5: k(35) = 15). |
| Çeldiriciler, tamsayi (kavram_karisikligi / isaret_hatasi) | DOĞRU | tamsayi #0: ⌊800/20⌋ + 1 = 41, ⌊800/32⌋ + 1 = 26. #5 (zarar): ⌈1210/16⌉ − 1 = 75, ⌈1210/21⌉ − 1 = 57. kesir #1: 44, 37. |
| ucuz: kesisim_taraf ve kavram_karisikligi örnek noktaları (2309, 2317–2320) | DOĞRU | #0 (A'nın birim ücreti büyük): x* = 50, sagT = 75, A(75) = 230 > B(75) = 205; kisaT = 25, A(25) = 130 < 155. #2 (A'nın birim ücreti küçük): x* = 150, solT = 75, A = 1225 > B = 1000; kisaT = ⌊150/4⌋ = 37, A = 1035 > B = 696. Tarama t5: x* = 30, A(15) = 520 < 565. t6: x* = 200, kisaT = 50. t7: x* = 50, kisaT = 12. Her iki şık artık farklı sayılar yazıyor; örnek noktalar doğru tarafta. |
| tolerans-ters: iki cümleli bağlam (2448, 2452) | DOĞRU | #1: (197, 203) ⇒ orta nokta 200, tolerans 3, "<". Uçlar hariç, bağlamla tutarlı. #0: [−4, 0] ⇒ \|x + 2\| ≤ 2. |
| Azalanda şık sırası: isr artık −x'ten önce | Etkisi yok | İkisi değerce hiç çakışmaz (−x < 0 < isr). |

**Doğru cevapta ve kontrolde KRİTİK bulgu yok.**

## 3. Yeni m ÷ a çeldiricisi (denklem-kolay, satır 1958, 1963)

- **Hata yolu:** Sabit ücret unutulunca model f(x) = ax olur, ax = m ⇒ x = m/a. Değer bu hatadan geliyor: DOĞRU. #0: 204/4 = 51. #1: 603/3 = 201. Tarama t17: 350/10 = 35.
- **Tam sayı koşulu:** `pozTam(sbt)`. m/a tam sayı ⇔ a, b'yi böler. #2'de (a = 8, b = 300) şık çıkmıyor; bu doğru davranış.
- **Doğruyla çakışma:** m/a = (m − b)/a olması b = 0 demek. İmkânsız.
- **Öteki şıklarla çakışma:**
  - isaret_hatasi ((m + b)/a) ile: b > 0 olduğundan imkânsız.
  - egim_kesisim_karistirma ((m − a)/b) ile: m(b − a) = −a² gerekir, b > a olduğundan imkânsız.
  - okuma_hatasi (am + b) ile: imkânsız.
  - eksik_adim (m − b) ile çakışabilir. Bunun koşulu b = a(a − 1)x. Örnekler: hat'ta a = 2, b = 100, x = 50; kira'da a = 3, b = 300, x = 100'e benzer durumlar. Bu durumda öndeki eksik_adim kalır, "2x = 100 ara sonuçtur" açıklaması gösterilir. O değere götüren iki yol da geçerli, açıklama yanlış değil.
- **Etiket:** `kavram_karisikligi` = "iki benzer kavramı karıştırmak". Burada iki ücret türü karışıyor: bir kez ödenen sabit ücret ile her birimde eklenen ücret. tamsayi'daki "maliyeti gidere katmamak" da aynı etiketle yazılmış. Uyumlu sayıldı.

## 4. Değerce çakışan şıklarda hangi açıklamanın kaldığı

- **Artan denklem:** eksik_adim önce geliyor; sbt ve isr ile çakışırsa o kalır. İki yol da aynı sayıya götürdüğü için açıklama geçerli.
- **Azalan denklem:** eksik_adim (b − m), isr ve kln ile çakışabilir; öndeki kalıyor ve geçerli.
- **Eşitsizlik, a < 0:**
  - eksik_adim (op yönlü), aralik_uc ve isaret_hatasi (opx yönlü) ile hiç çakışmaz.
  - esitsizlik_yonu ile yalnız k = 0'da çakışır. O durumda yonu kalır; "yön ters döner" açıklaması o değere de götürür.
- **Eşitsizlik, a > 0:** eksik_adim ile isaret_hatasi k(a − 1) = 2b/a olduğunda çakışır (örnek: a = 2, k = b). isaret kalıyor; iki yol da aynı aralığı veriyor.
- **Tamsayı ve ucuz:** sıralama tur 1'deki gibi tutarlı.

## 5. Yeni bulgular

### U3D-06 · KÜÇÜK · mat-u2-problem-denklem (azalan) · satır 1974 · açıklama, çözümde olmayan bir satıra atıf yapıyor
- **Şık:** −x, isaret_hatasi. Açıklama: "−20x = −80 satırında eksi sayı eksi sayıya bölünür; sonuç artı olur."
- **Sorun:** Yeni çözüm yolunda (ax eklenir, sonra m çıkarılır) "−20x = −80" satırı yok. Değer kendi yolu açısından doğru: iki taraftan b çıkarılır, eksi sayı bölünürken işaret kaybedilir. Ama öğrenci açıklamayı çözümle eşleştiremez.
- **Öneri:** Açıklamayı kendi başına anlaşılır yap: `"İki taraftan " + b + " çıkarılırsa " + tam(-a) + "x = " + tam(m - b) + " olur; eksi sayı eksi sayıya bölününce sonuç artı çıkar."`

### U3D-07 · KÜÇÜK · mat-u2-problem-esitsizlik (a = −1) · satır 2039–2040 · bilgi taşımayan Kontrol satırı
- **Sorun:** a = −1 ve v ≥ 0 iken `axC(v)` sayıyı "−3" olarak yazıyor, `tam(a*v)` da "−3". Ortaya "Kontrol, uç: x = 3 için −3 = −3." çıkıyor. v = 0'da da "x = 0 için 0 = 0." Matematik yanlış değil ama satır işlem göstermiyor. Tur 1'de bu satır "−3 + 20 = 17" biçimindeydi. Satırların bölünmesiyle ortaya çıkan bir regresyon (örnek: tarama esitsizlik t1, −x + 20 ≤ 17, k = 3).
- **Öneri:** a = −1 dalında satırı `"x = " + tam(v) + " için −x = " + tam(-v) + "."` olarak yaz. Ya da a = −1'de iki Kontrol satırını tek satırda birleştir.

### Not (sayılmadı) · denetim/uretec_ornekleri_u2k3.md satır 4
- Başlıkta "sac kesimi" geçiyor. Öğrenciye gösterilen metin değil, üreteç de "kesilen sac" kullanıyor (1925). İstenirse "sac kesme" yapılabilir.

## 6. Etiket, terim ve yazım
- **Etiketler:** Kullanılan etiketlerin hepsi SKILL.md sözlüğünde var ve anlamlarıyla uyumlu (`kesisim_taraf`, `egim_kesisim_karistirma`, `mutlak_tam_uzunluk`, `kavram_karisikligi`).
- **"kesim noktası":** Yalnız doğruların buluştuğu nokta anlamında kullanılıyor. sac bağlamında "kesim" kelimesi hiç geçmiyor (2217–2220; grep sonucu temiz).
- **"dâhil":** Görünen metinlerin hepsinde şapkalı. `dahil` yalnız değişken adı olarak geçiyor (2299).
- **Eksi işareti:** Görünen eksiler `EKSI`/`tam`/`cEk` ile U+2212 basılıyor. Taramadaki bütün örneklerde "−" var.
- **"−0":** Basılmıyor. `tam(-0)` "0" verir (n < 0 yanlış), a < 0 ve k = 0'daki a·k = −0 da "0" olarak yazılıyor. Tolerans tarafında C ≠ D şartı var.
- **Ondalık aralık:** "[a, b], yani a ≤ x ≤ b" biçiminde. Sonsuz uçta "(−∞, 100,5], yani x ≤ 100,5"; tam sayı uçlarda ek yok (tarama tolerans t0–t2).

## Kontrol edilemeyenler
- Yeni tohum çalıştırılmadı (kabuk yok). Çakışma çıkarımları cebirden ve verilen taramadan geliyor.
- Kitap sayfaları (s. 136–166) bu turda yeniden açılmadı. Terimler, denetlenmiş konu kartıyla aynı.

## Özet
Tur 1: U3D-01, -02, -03, -05 kapandı. U3D-04 kısmen kapandı, KÜÇÜK olarak açık (pedagojiye bırakıldı).
Yeni: KRİTİK 0 · ÖNEMLİ 0 · KÜÇÜK 2 (U3D-06, U3D-07).

KARAR: TEMİZ (yayın engeli yok; KÜÇÜK maddeler isteğe bağlı düzeltme)
