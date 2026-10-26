# Referans Sistem Analizi

Kaynak: `C:\projeler\spl_dar_kapsam_egitim\`
- `spl_denetim_masasi.html` (1073 satır, tek dosya, vanilla JS)
- `spl_learning_simulator.py` (389 satır, CLI motoru)

Amaç: Mimariyi çıkarmak; Barbaros 9'a neyin **aynen**, neyin **uyarlanarak** taşınacağını belirlemek.

---

## 1. Mimari özet

```
RULES[] ──gen()──► {stem, right, wrongs, audit}
   │                     │
   │               buildQuestion()  → 4 şık, karıştırılmış, tek doğru
   │                     │
CARDS[] (müfredat)       ▼
   └─ rule ile bağlı ──► Tur motoru (pickWeighted + Leitner ağırlığı)
                          │  yanlış → kutu 1 + aynı kuraldan pekiştirme (depth ≤ 2)
                          ▼
                    SessionManager ──► LocalStorageAdapter | RestApiAdapter
                          │
                    Panel: KPI · modüller · sınav ölçütü · Leitner · denetim izi
```

| Bileşen | Referanstaki yeri | Ne yapıyor |
|---|---|---|
| **Parametrik üreteç `gen()`** | `RULES[i].gen()` (html 374–599), `QuestionGenerator.generate()` (py) | Her çağrıda yeni sayı/senaryo ile soru kökü, doğru şık, yanlış havuzu ve açıklama döner. Sayılar eşiğin iki yanından seçilir (ör. 499/500/501). |
| **`buildQuestion`** | html 704–709, py `_build` | Yanlış havuzunu tekilleştirir, doğruyu çıkarır, 3 yanlış + 1 doğru seçip karıştırır. |
| **Leitner kutuları** | `SessionManager.record`, `WEIGHT = {0:3, 1:4, 2:2, 3:1}` | Yanlış → kutu 1. İlk denemede doğru → +1 (en çok 3). Pekiştirmede doğru → kutu değişmez. Seçim ağırlığı kutuya göre. |
| **Pekiştirme derinliği** | `MAX_DEPTH = 2`, `answer()` içinde `queue.splice` | Yanlış cevaptan sonra aynı kuraldan **yeni sayılarla** soru hemen sıraya eklenir; en çok 2 kez. |
| **Tekrar Kutusu modülü (D)** | `dueRules()`, `startModule("D")` | Kutu 1'deki kuralları ayrı bir turda sorar. |
| **Kitaplık / flashcard** | `SPL_ACADEMIC_MUSEUM`, `renderStudy`, `lawCard` | Bölüm → kart → `body`/`points` + `<details>` flashcard. Kart `rule` alanıyla üretece bağlanır. |
| **Soru öncesi mini kart** | `renderQuestion` → `law-mini` | Kuralın kartı kapalı `<details>` olarak sorunun üstünde durur; cevabı ele vermez. |
| **Kural bazlı notlar** | `loadNote/flushNote`, `noteKey = rule ?? id` | Not, kurala bağlı. 600 ms debounce + blur'da kaydedilir. 5000 karakter sınırı var. |
| **Sınav ölçütü paneli** | `renderHome` → `#exam` | Modül başına puan, eşik (≥50) ve ortalama (≥60) için GEÇER/ALTINDA çipi. |
| **Denetim izi** | `trail` (son 40, panelde 8) | Zaman, kural, dayanak, sonuç ve pekiştirme derinliği. py tarafında `audit_trail.jsonl`. |
| **SessionManager + adaptörler** | html 723–785 | Ortak async arayüz `load/save/clear`. `LocalStorageAdapter` bellek yedeğine düşer. `RestApiAdapter` faz 2 için hazır. Şema sürümü `v: 1`. |
| **selfCheck / selftest** | html 712–717, py 358–371 | Her üreteç 150/300 kez çalıştırılır; 4 farklı şık ve tek doğru olduğu doğrulanır. Saf fonksiyonlar (eşik geçişi, yuvarlama) için birim assert'leri var. |
| **Kılavuz diyaloğu** | `<dialog class="guide-dlg">` | Modüller, Leitner ve not kuralları anlatılıyor. Backdrop tıklamasıyla kapanır. |
| **Tasarım tokenları + karanlık mod** | `:root` değişkenleri, `prefers-color-scheme` + `data-theme` | Renkler token'lardan geliyor. Karanlık mod hem sistemden hem elle seçilebiliyor. IBM Plex üçlüsü kullanılıyor (Condensed başlık, Sans gövde, Mono etiket). |
| **Erişilebilirlik** | `:focus-visible`, 44–64 px dokunma hedefleri, `aria-pressed`, `aria-live`, `prefers-reduced-motion` | Klavye kısayolları (A–D / 1–4) not yazarken devre dışı. |

---

## 2. Aynen koruyacaklarımız

1. **`gen()` sözleşmesi:** `{stem, right, wrongs, aciklama}` döndüren saf fonksiyon. İçerik değişir, sözleşme aynı kalır.
2. **`buildQuestion`:** Tekilleştir → doğruyu ayır → 3 yanlış seç → karıştır.
3. **Leitner mantığı:** Kutu 0–3, ağırlık `{0:3, 1:4, 2:2, 3:1}`. Yanlış → kutu 1. İlk denemede doğru → +1.
4. **Pekiştirme:** Yanlıştan sonra aynı kuraldan yeni sayılarla hemen yeniden sorma. `MAX_DEPTH = 2`.
5. **SessionManager + adaptör arayüzü:** `load/save/clear`, `v` şema sürümü, bellek yedeği, "kayıt yok" uyarısı.
6. **selfCheck:** Sayfa açılışında her üreteç N kez çalıştırılır. Ayrıca `tools/dogrula.py` aynı kontrolü komut satırından yapar (py `selftest` karşılığı).
7. **Kural ↔ kart eşleme assert'i:** Her üretecin en az bir anlatım kartı olmalı. Her kartın `rule` alanı geçerli bir üretece işaret etmeli.
8. **Tasarım tokenları, karanlık mod (`data-theme` + sistem), `el()` yardımcısı:** `textContent` ile yazıldığı için HTML enjeksiyonu yok.
9. **Erişilebilirlik:** Odak halkası, büyük dokunma hedefleri, klavye kısayolları, `prefers-reduced-motion`.
10. **Kılavuz diyaloğu:** `<dialog>` + backdrop kapatma.
11. **İki aşamalı sıfırlama onayı:** `alert`/`confirm` yok.

## 3. Uyarlayacaklarımız

| Referans | Barbaros 9 karşılığı | Neden |
|---|---|---|
| Tek HTML, veri gömülü | `panel/index.html` + `panel/data/*.js`. Her dosya `window.DERSLER.push({...})` yapar. | Birden fazla ders ve yüzlerce kart var. `file://` altında `fetch` çalışmıyor. |
| Google Fonts `<link>` | Yerel font dosyası (`panel/fonts/`) ya da sistem yığını yedeği | Sistem internetsiz çalışmalı. Referans çevrimdışıyken sistem fontuna düşüyor. |
| Modül A/B/C/D (mevzuat) | Ders → Ünite → Konu. Modlar: Konu Anlatımı, Alıştırma, Yazılı Provası, Ortak Sınav Provası, Tekrar Kutusu, Veli Paneli. | Okul yapısına uyum |
| `LEGAL` / `ref` + `text` (yasal dayanak) | `kaynak` alanı: kitap + sayfa ya da öğrenme çıktısı kodu. Belirsizse `DOĞRULA:` etiketi. | Uydurma bilgi yasağı. Her kartın izlenebilir kaynağı olmalı. |
| Kart `body` (tek paragraf) | Üç katman: `basit` → `kitap` → `yazilida` (soru biçimi + örnek cevap). Paragraf ≤ 3 cümle. Terimler `**kalın**` + tanım. | Pedagojik kurallar |
| `audit` (denetim perspektifi) | `neden`: tek cümlelik yanlış açıklaması, azarlamasız. Matematikte `adimlar[]` numaralı çözüm. | Öğrenciye uygun geri bildirim |
| İpucu yok | Soru başına 3 basamaklı **ipucu merdiveni** (`ipuclari[3]`). Kullanılan ipucu sayısı kaydedilir. | Anlama kapasitesi ortalamanın altında. Ipucu, cevabı görmeden önce bir basamak daha verir. |
| Zorluk yok | Her üreteçte `zorluk: kolay/orta/sinav`. Tur seçimi %50 / %35 / %15 dağılımına uyar. | Pedagojik kural 5 |
| Sadece çoktan seçmeli | Ortak sınav için **açık uçlu** soru + rubrik (puanlama ölçütleri) + öğrencinin yazılı cevabı. Veli/öğrenci rubrikle öz-değerlendirme yapar. | Ortak yazılılar açık uçlu (MEB duyurusu, bkz. `takvim.md`) |
| 5 vakalık tur | Konu anlatımında 5 dakikalık bölümler ve sonrasında 2–3 kolay kontrol sorusu. Alıştırmada 5–8 soru. | Dikkat süresi kısa |
| Sınav ölçütü 50/60 (SPL) | Ders bazında hedef puan + yazılı tarihine geri sayım. Eşikler `takvim.md` / yönetmelikten alınacak. | Okulun not sistemi farklı |
| Denetim izi (son 40) | **Veli Paneli:** günlük süre, doğruluk, ipucu kullanımı, Tekrar Kutusu sayısı, zayıf konular. JSON dışa/içe aktarma. | Veliye şeffaflık |
| "Denetçi çalışma kağıdı" notu | "Kendi cümlemle" notu. Aynı `noteKey = rule ?? id` mantığı. | Öğrencinin kendi cümlesiyle cevap verme hedefi |
| Kurgusal şirket adları | Gölcük/Kocaeli/tersane/deniz/futbol/günlük hayat isim ve bağlam havuzları | Somut ve tanıdık örnek kuralı |
| Python CLI simülatörü | `tools/dogrula.py`: içerik doğrulayıcı (şema, kaynak alanı, `DOĞRULA:` sayımı, üreteç kontrolü). Etkileşimli CLI taşınmayacak. | Öğrenci tarayıcıyı kullanacak. Python sadece kalite kapısı olacak. |
| Dil/ton: "Sapma", "Denetim tespitiniz" | "Az kaldı", "Bir daha bakalım"; doğruda kısa övgü | Azarlama yok |

## 4. Referansta eksik olan, eklenecek

- **JSON dışa/içe aktarma:** Referansta yok. Veli Paneline eklenecek.
- **Yazdırılabilir A4:** `@media print` ile ortak sınav provası kağıda basılacak.
- **Zaman damgalı oturum süresi:** Veli için çalışma süresi takibi.
- **Python ve JS arasında tek kaynak:** Referansta kurallar iki dilde kopya (`LEGAL` ve `RULES`) ve ayrı ayrı bozulabiliyor. Burada içerik yalnızca `panel/data/*.js` dosyalarında olacak; `tools/dogrula.py` bu dosyaları okuyup doğrulayacak (JS'yi Node ile çalıştırarak ya da JSON gövdesini ayrıştırarak; yöntem panel kodu yazılırken belirlenecek).

## 5. Bilinen riskler

- `Math.random` tohumsuz. Sorun çıkan bir soruyu yeniden üretmek zor. Uyarlamada üreteçlere `rng` parametresi verilecek (py tarafındaki `random.Random(seed)` gibi).
- `console.assert` sadece konsola yazıyor, sayfayı durdurmuyor. Barbaros 9'da selfCheck hatası panelde görünür bir uyarı olacak.
- localStorage tarayıcı temizlenince silinir. Bu yüzden haftalık JSON yedeği Veli Panelinde hatırlatılacak.
