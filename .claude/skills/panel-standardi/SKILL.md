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

## 4. Veri sözleşmesi (bağlayıcı)

### Dosya düzeni
```
panel/
  index.html                kabuk: tokenlar, band, görünüm kökü, <script> sırası
  stil.css                  (index.html içinde de olabilir)
  fonts/                    IBM Plex woff2 + OFL lisansı
  motor/rastgele.js         B9.rastgele  (uretec-muhendisi)
  motor/soru.js             B9.soru      (uretec-muhendisi)
  motor/oturum.js           B9.oturum    (panel-gelistirici)
  motor/tekrar.js           B9.tekrar    (panel-gelistirici)
  motor/uretecler/<ders>.js window.URETECLER.push(...)
  data/takvim.js            window.TAKVIM (tools/takvim_derle.py üretir, docs/takvim.md'den)
  data/<ders>.js            window.DERSLER.push(...)
  ekranlar/*.js             B9.ekranlar.<ad> = { baslik, render(kok, params) }
  uygulama.js               yönlendirici + başlatma
tools/uretec_test.mjs       üreteçlerin 300 tohum testi (node)
tools/motor_test.mjs        tekrar.js ve oturum.js göç testleri (node)
tools/dogrula.py            hepsini çalıştıran kapı
```
- Modül sistemi yok (`file://`). Her dosya `window.B9 = window.B9 || {}` ile tek isim alanına yazar.
- `motor/*.js` ve `motor/uretecler/*.js` **DOM'a dokunmaz**; Node'da `vm` ile de yüklenebilir. Global için `const G = typeof window !== "undefined" ? window : globalThis;`.
- Yükleme sırası: `rastgele.js → soru.js → oturum.js → tekrar.js → uretecler/*.js → data/takvim.js → data/*.js → ekranlar/*.js → uygulama.js`.

### `B9.rastgele` (motor/rastgele.js)
```js
B9.rastgele = {
  rng(tohum),            // mulberry32 → () => [0,1); aynı tohum aynı dizi
  yeniTohum(),           // Date.now() ^ sayaç, 32 bit tamsayı
  pick(rng, dizi), rint(rng, a, b), shuffle(rng, dizi) /* kopya döndürür */,
  sayi(x),               // tr-TR biçim: 2,5  (virgül)
  ISIMLER: [...], YERLER: ["Gölcük", "Değirmendere", "İzmit", "Karamürsel", ...], BAGLAMLAR: ["tersane", "deniz", "futbol", "okul", "market"]
};
```

### Üreteç (motor/uretecler/<ders>.js)
```js
(G.URETECLER = G.URETECLER || []).push({
  id: "ornek-uslu-carpma", konu_id: "ornek-u1-k1", ogrenme_ciktisi: "9.1.1", zorluk: 1,
  kaynak: { kitap: "...", sayfa: "13-20" },
  gen(rng) {   // saf; yalnızca rng kullanır
    return {
      params: { a: 2, n: 3 },                       // kontrol için
      baglam: "Gölcük'te ...", kok: "... kaçtır?",
      dogru: "8",
      yanlislar: [{ metin: "6", hata_turu: "us_carpma", aciklama: "Tek cümle, azarlamasız." }, ...],  // ≥ 3, birbirinden ve doğrudan farklı
      ipuclari: ["...", "...", "..."],              // tam 3
      cozum: ["1. ...", "2. ..."]                   // ≥ 2
    };
  },
  kontrol(params) { return "8"; }                    // bağımsız hesap; gen'deki formül kopyalanmaz
});
```

### `B9.soru` (motor/soru.js): ekranların kullandığı tek soru nesnesi
```js
B9.soru.uretecten(uretec, tohum)  -> Soru
B9.soru.statikten(statikSoru, tohum) -> Soru   // soru-yazim-kurallari şeması
B9.soru.uretecDene(uretec, adet)  -> { ok, hatalar: [..] }   // selfCheck ve node testi kullanır
B9.soru.kontrol(soru, secimIndex|metin) -> { dogru: bool, hata_turu, aciklama }
// Soru:
{ anahtar: "uretec:<id>" | "konu:<konu_id>", soru_id, uretec_id?, tohum, konu_id, tip: "coktan"|"acik"|"dogru_yanlis"|"bosluk"|"eslestirme",
  zorluk, baglam, kok, secenekler: [{ metin, dogru, hata_turu, aciklama }] /* coktan: 4, karıştırılmış */, dogru_index,
  cevap, kabul_edilenler, ipuclari: [3], cozum: [...], rubrik: [{ olcut, puan }] | null, puan, kaynak, ogrenme_ciktisi }
```
- `buildQuestion` mantığı referanstan: yanlışları tekilleştir, doğruyu çıkar, 3 yanlış seç, karıştır. Karıştırma `tohum`la yapılır (yeniden üretilebilir).

### `panel/data/<ders>.js`
```js
(window.DERSLER = window.DERSLER || []).push({
  v: 1, ders: "ornek", ad: "Örnek Ders", haftalik_saat: 2,
  harita: { uniteler: [{ id: "ornek-u1", ad: "...", konular: [{ id: "ornek-u1-k1", ad: "...", yazili: ["1D1Y"], ogrenme_ciktilari: [{kod, metin}] }] }] },
  konular: { "ornek-u1-k1": { /* konu-karti-semasi */ } },
  sorular: { "ornek-u1-k1": [ /* soru-yazim-kurallari; en az 1 coktan + 1 acik (rubrikli) */ ] }
});
```

### `window.TAKVIM` (data/takvim.js)
```js
window.TAKVIM = { kaynak: "docs/takvim.md", sinavlar: [{ ders: "matematik", ad: "Matematik ortak yazılı (ülke geneli)", tarih: "2027-01-06", yazili: "1D2Y", tur: "ulke" }] };
```

### localStorage (`motor/oturum.js`)
- Anahtar `barbaros9:<kullanici>` (varsayılan `mehmet-eren`). Adaptörler `load/save/clear` (async). `LocalStorageAdapter` bellek yedekli. `RestApiAdapter` Faz 2 için kodda durur, kullanılmaz.
- **Şema sürümü `v` + göç:** `GOCLER = { 1: d => ({...d, v: 2}), ... }`. Yüklenen veri eski sürümse sırayla göç edilir. Bilinmeyen/yeni sürüm → veriye dokunma, salt okur uyarısı.
```jsonc
{
  "v": 1,
  "kutular": { "uretec:ornek-uslu-carpma": { "kutu": 2, "sonraki": "2026-10-28", "son": "2026-10-26", "seri": 1 } },
  "istatistik": { "ornek-u1-k1": { "t": 12, "c": 9, "ipucu": 4 } },
  "iz": [{ "ts": 0, "anahtar": "uretec:ornek-uslu-carpma", "konu_id": "ornek-u1-k1", "ders": "ornek", "tohum": 123, "ok": false, "derinlik": 0, "ipucu": 2, "hata_turu": "us_carpma", "sure_sn": 41 }],
  "notlar": { "ornek-u1-k1": "..." },
  "dakika": { "2026-10-26": 25 },
  "acik": { "<soru_id>": [{ "ts": 0, "metin": "...", "isaretler": [true, false], "puan": 6, "veli_onay": false }] },
  "ayarlar": { "tema": "sistem|acik|koyu", "buyuk_yazi": false, "veli_pin": null }
}
```
- `iz` en çok 500 kayıt. **JSON dışa aktarma:** `barbaros9_<YYYY-AA-GG>.json`. **İçe aktarma:** JSON ayrıştır → `v` ve alan doğrula → mevcut veriyi `barbaros9:<kullanici>:yedek` anahtarına kopyala → yaz. Bozuk dosya hiçbir şeyi silmez.
- Veli PIN'i 4 hane, düz saklanır (güvenlik değil, öğrenci/veli ekranı ayrımı). Arayüzde bu açıkça yazar.

## 5. selfCheck (açılışta)
1. Her üreteç `B9.soru.uretecDene(u, 50)`: 4 farklı şık, tek doğru, 3 ipucu, `kontrol(params) === dogru`.
2. Her `DERSLER` kaydında `konular`/`sorular` anahtarları haritadaki konu id'lerine bağlı; üreteçlerin `konu_id`'si bir haritada var.
3. Hata varsa başlık bandının altında görünür uyarı, konsola da yazılır.
