---
name: tekrar-takvimi
description: "Barbaros 9'un aralıklı tekrar mantığı. 5 kutulu Leitner (1-2-4-7-14 gün), konu ve üreteç bazında; yanlışta kutu 1 + yeni sayılarla pekiştirme; yazılıya yaklaşınca sınav konularını öne alma. Tekrar Kutusu modu, Alıştırma turu seçimi ya da Veli Paneli sayaçları kodlanırken kullan."
---

# Tekrar Takvimi (5 kutulu Leitner)

Referanstaki 3 kutulu ağırlıklı Leitner'ın (`docs/referans_analizi.md`) tarihli sürümüdür. Pekiştirme derinliği ve "yeni sayılarla yeniden sor" mantığı aynen korunur.

## Öğeler
Takip edilen her öğenin anahtarı:
- `konu:<konu_id>`: konu kartı kontrol soruları ve sabit soru bankası.
- `uretec:<uretec_id>`: parametrik üreteç. Her seferinde yeni sayılar.

İkisi ayrı izlenir. Konu bilinse bile hesap üreteci kutu 1'de olabilir.

## Kutular
| Kutu | Sonraki tekrar | Anlam |
|---|---|---|
| 0 | — | Henüz görülmedi |
| 1 | **1 gün** sonra | Yeni öğrenildi ya da yanlış yapıldı |
| 2 | **2 gün** | |
| 3 | **4 gün** | |
| 4 | **7 gün** | |
| 5 | **14 gün** | Pekişti (14 günde bir bakım) |

## Kurallar
1. **Doğru, ilk denemede, ipucusuz** → kutu +1 (en çok 5); `sonraki = bugün + aralık[yeni kutu]`.
2. **Doğru ama ipucu kullanılmış** → kutu **değişmez**; `sonraki = bugün + aralık[kutu]`. İpucuyla doğru, öğrenilmiş sayılmaz ama cezalandırılmaz.
3. **Yanlış** → kutu **1**, `sonraki = yarın`. Aynı turda, aynı öğeden **yeni sayılarla / farklı soruyla** pekiştirme sorusu sıraya eklenir. Derinlik en çok 2 (referanstaki `MAX_DEPTH`).
4. **Pekiştirme sorusunda doğru** → kutu değişmez (1'de kalır). Ertesi gün tekrar gelir.
5. Kutu 0 → ilk görüldüğünde kural 1–3 uygulanır (doğru → kutu 1).
6. Tarih yerel gün olarak (`YYYY-AA-GG`, Europe/Istanbul) tutulur. Saat farkı kutu atlatmaz.

## Bugünkü tekrar listesi
```
vadesi_gelen = öğeler.filter(o => o.kutu >= 1 && o.sonraki <= bugün)
```
Sıralama:
1. **Sınav öncelemesi:** önümüzdeki **10 gün** içinde yazılısı olan konular (haritadaki `yazili` + `docs/takvim.md` tarihleri) önce gelir. Vadesi gelmemiş olsalar bile kutu ≤ 3 ise listeye girer.
2. Düşük kutu önce (1 → 5).
3. En eski `sonraki` önce.
4. Aynı konudan art arda iki soru gelmez (pekiştirme hariç). Referanstaki `pickWeighted` kuralı.

Günlük üst sınır: **15 soru**. Kalan ertesi güne kayar; Veli Panelinde "birikmiş tekrar" diye gösterilir. Uzun liste öğrenciyi yorar.

## Alıştırma turu seçimi (yeni konu çalışırken)
Zorluk karışımı CLAUDE.md'deki %50 / %35 / %15 dağılımına uyar. Kutu ağırlığı referanstan: `{0: 3, 1: 4, 2: 2, 3: 1, 4: 1, 5: 0.5}`.

## Durum şeması (localStorage `kutular`)
```json
{ "konu:matematik-u1-k1": { "kutu": 3, "sonraki": "2026-10-30", "son": "2026-10-26", "seri": 2 } }
```
`seri` = art arda ipucusuz doğru sayısı (Veli Paneli için).

## Doğrulama (kodlanırken selftest)
- Kutu 2 doğru → kutu 3, sonraki = +4 gün.
- Kutu 4 yanlış → kutu 1, sonraki = +1 gün, sırada 1 pekiştirme.
- Kutu 2 ipucuyla doğru → kutu 2, sonraki = +2 gün.
- Kutu 5 doğru → kutu 5, sonraki = +14 gün.
- Yazılıya 7 gün kalan konu, kutu 3, sonraki 4 gün sonra → bugünkü listede.
