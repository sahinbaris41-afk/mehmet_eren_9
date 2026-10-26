---
name: panel-standardi
description: "Barbaros 9 panelinin (panel/) tasarım tokenları, bileşenleri, güvenli DOM ve depolama kuralları ve veri sözleşmesi (window.DERSLER, window.URETECLER, localStorage şeması). Panel kodu yazarken, panel/data/*.js üretirken ya da üreteç yazarken kullan. Referans: C:\\projeler\\spl_dar_kapsam_egitim\\spl_denetim_masasi.html."
---

# Panel Standardı

## 1. Tasarım tokenları (referanstan aynen)

```css
:root {
  --bg: #eef1f6; --surface: #ffffff; --surface-2: #f5f7fb; --ink: #0f1b2d; --muted: #56667d; --line: #d6dde8;
  --navy: #16305a; --navy-ink: #f2f5fa; --navy-muted: #b5c3d9; --navy-line: #2a4673;
  --primary: #1d4f91; --on-primary: #ffffff; --brass: #9a6f22; --focus: #2f6fd6;
  --ok: #1e7a4c; --ok-bg: #e2f2e9; --bad: #b0353a; --bad-bg: #f9e4e5; --idle: #cfd7e3;
  --f-display: "IBM Plex Sans Condensed", "Arial Narrow", sans-serif;
  --f-body: "IBM Plex Sans", system-ui, "Segoe UI", sans-serif;
  --f-mono: "IBM Plex Mono", ui-monospace, Consolas, monospace;
  --r: 10px;
}
/* Karanlık: hem sistem tercihi hem elle seçim */
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { /* referanstaki koyu değerler */ } }
:root[data-theme="dark"] { /* aynı koyu değerler */ }
```
- Koyu değerler: `--bg:#0a111d --surface:#111b2b --surface-2:#0e1726 --ink:#e5ebf4 --muted:#94a4ba --line:#23334b --navy:#0f1f38 --primary:#86aeea --on-primary:#0a111d --brass:#d6b36c --focus:#9bbcff --ok:#5ec997 --ok-bg:#11301f --bad:#f28c8f --bad-bg:#3a171b --idle:#2a3a52`.
- **Fontlar yerel:** `panel/fonts/IBMPlexSans-*.woff2` + `@font-face`. Google Fonts bağlantısı yok (internetsiz).
- Barbaros 9 eki: `--soft: #fff7e6` (ipucu kutusu) ve koyu karşılığı `#2a2213`. Metin boyutu öğrenci için `1.0625rem`, satır yüksekliği `1.6`.

## 2. Bileşenler (referans sınıf adlarıyla)
| Bileşen | Sınıf | Kullanım |
|---|---|---|
| Başlık bandı + KPI | `.band`, `.kpis` | ders, kalan gün (yazılıya), bugünkü tekrar sayısı |
| Modül kartı | `.mod` | 6 mod: Konu Anlatımı, Alıştırma, Yazılı Provası, Ortak Sınav Provası, Tekrar Kutusu, Veli Paneli |
| Kutu sayaçları | `.boxes` / `.box` | Leitner 1–5 (`tekrar-takvimi`) |
| Soru ekranı | `.case`, `.options`, `.opt` | 4 şık, A–D / 1–4 kısayolu, 64 px yükseklik |
| Geri bildirim | `.feedback`, `.verdict.ok/.bad`, `.fb-grid` | doğru/yanlış + tek cümle neden + çözüm adımları |
| İpucu merdiveni | `.hints` (yeni) | "İpucu 1/3" düğmesi, açılan her basamak kaydedilir |
| Konu kartı | `.law` → `.card` | 3 katman sekmesi: Basit · Kitap · Yazılıda |
| Flashcard | `.flash details` | tıkla → cevap |
| Not alanı | `.notes` | "Kendi cümlemle", konu bazında, 600 ms debounce |
| Kılavuz | `dialog.guide-dlg` | öğrenci ve veli için ayrı bölüm |
| İz tablosu | `.trail` | Veli Paneli: son 20 kayıt |

## 3. Güvenli DOM
- Tek yardımcı: referanstaki `el(tag, attrs, ...kids)`. Metin `createTextNode` ile.
- `**kalın**` → `<b>`: regex ile böl (`/\*\*(.+?)\*\*/g`), parçaları `el("b", {}, parca)` yap. `innerHTML` yok.
- Üs ve alt indis için Unicode karakter; gerekirse `el("sup")`.
- Yasak: `innerHTML`, `outerHTML=`, `insertAdjacentHTML`, `eval`, `new Function`, `document.write`, ağ isteği.

## 4. Veri sözleşmesi

### `panel/data/<ders>.js` (dersler/**.json'dan derlenir, elle yazılmaz)
```js
window.DERSLER = window.DERSLER || [];
window.DERSLER.push({
  v: 1, ders: "matematik", ad: "Matematik", haftalik_saat: 6,
  harita: { uniteler: [ /* harita.json'daki uniteler, kitap/dogrula alanları dahil */ ] },
  konular: { "matematik-u1-k1": { /* konu kartı, konu-karti-semasi */ } },
  sorular: { "matematik-u1-k1": [ /* soru-yazim-kurallari şeması */ ] },
  sinavlar: [{ ad: "1. Dönem 2. Yazılı (Ülke Geneli)", tarih: "2027-01-06", yazili: "1D2Y", tur: "ulke" }]
});
```

### `panel/uretecler/<ders>.js`
```js
window.URETECLER = window.URETECLER || [];
window.URETECLER.push({ id, konu_id, ogrenme_ciktisi, zorluk, kaynak, gen(rng) { return { kok, dogru, yanlislar: [{metin, hata_turu}], ipuclari, cozum }; } });
```
- `rng` = `panel/uretecler/_ortak.js` içindeki tohumlu üreteç (mulberry32). Aynı tohum aynı soruyu verir.

### Yükleme sırası (`index.html`)
`_ortak.js` → `uretecler/*.js` → `data/*.js` → `app.js`. Hepsi `<script src>` (file:// uyumlu, `type="module"` değil).

### localStorage
- Anahtar: `barbaros9:<kullanici>` (varsayılan `mehmet-eren`). Adaptör arayüzü referanstaki gibi `load/save/clear`.
```jsonc
{
  "v": 1,
  "kutular": { "konu:matematik-u1-k1": { "kutu": 2, "sonraki": "2026-10-28", "son": "2026-10-26" },
               "uretec:mat-uslu-carpma": { ... } },
  "istatistik": { "matematik-u1-k1": { "t": 12, "c": 9, "ipucu": 4 } },
  "iz": [{ "ts": 1793009668577, "ogren": "uretec:mat-uslu-carpma", "tohum": 123, "ok": false, "derinlik": 0, "ipucu": 2, "hata_turu": "us_carpma", "sure_sn": 41 }],
  "notlar": { "matematik-u1-k1": "..." },
  "oturumlar": [{ "gun": "2026-10-26", "dk": 25 }]
}
```
- `iz` en çok 500 kayıt. Veli Paneli ve hata analizi buradan.
- **JSON dışa aktarma:** `barbaros9_<tarih>.json`, tüm nesne. **İçe aktarma:** `v` kontrolü, şema doğrulama, önce yedek. Bozuk dosya mevcut ilerlemeyi silmez.

## 5. selfCheck (açılışta)
1. Her üreteç 50 tohum: 4 farklı şık, tek doğru, 3 ipucu.
2. Her `DERSLER` kaydında konu kartı ve soru id'leri haritadaki konu id'lerine bağlı.
3. Hata varsa başlık bandının altında görünür uyarı ("3 üreteç hatalı: ..."), konsola da yazılır.
