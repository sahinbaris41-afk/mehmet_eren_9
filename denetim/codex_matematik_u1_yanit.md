# Codex çapraz denetimine yanıt · Matematik Ünite 1

Rapor: `denetim/codex_matematik_u1.md`, 2026-10-27, `codex exec --sandbox read-only -m gpt-6-luna`.
- İlk deneme `gpt-5.5` modeliyle yapıldı. Bu model ChatGPT hesabında desteklenmediği için çıkış kodu 1 geldi.
- İkinci denemede yalnız `-m gpt-6-luna` eklendi; bu model hesabın model listesinde var. Codex yapılandırmasına dokunulmadı.

Değerlendiren: ana ajan (Claude). Her madde kodla ve kaynakla karşılaştırıldı.

| # | Codex bulgusu | Karar | Yapılan |
|---|---|---|---|
| 1 | `mat-u1-kok-disi`: bileşik k'de "kök içinde hâlâ tam kare var" çeldiricisi (ör. 2√8) doğru cevapla (4√2) aynı değerde; `deger` ile tekilleştirilirse çakışabilir | **Haksız** | Değişiklik yok |
| 2 | Bölüm başına fazla içerik: k1 "Aynı üslü ifadeleri toplama" (4 basit paragraf) ve "Üslülerde çarpma ve bölme" (5 basit paragraf) | **Kısmen haklı** | İki bölüm ikiye ayrıldı (k1: 8 → 10 bölüm) |
| 3 | Kaynak ve program kapsamında sorun yok; eşlenik 9.1.1 açıklamasında geçiyor | **İçerik doğru, kaynak gösterimi yanlış** | Değişiklik yok |
| 4 | Başka yanlış anahtar ya da birden fazla doğru şık yok | **Kabul** | — |

## Gerekçeler

### 1 · Haksız
- Soru kökü (`matematik.js` satır 299): "ifadesinin **en sade biçimi** aşağıdakilerden hangisidir?" Soru değeri değil biçimi soruyor.
- 2√8 değerce doğrudur ama sade değildir. Konu kartının öğrettiği hata tam olarak budur (`eksik_adim` / kök içinde tam kare bırakmak). Bu yüzden bilerek konmuş, işlevli bir çeldiricidir. Ortak sınavın "kök dışına çıkarma" kalıbında da (2025-26, 3. soru) aynı ayrım puanlanır.
- Codex'in "tekilleştirilirse çakışabilir" endişesi gerçekleşmiyor:
  - Bu üreteçte `deger` sayı değil, **sadeleştirilmiş biçimin kanonik anahtarı**.
  - 2√8'in anahtarı (katsayı 2, kök içi 8) ile 4√2'nin anahtarı (4, 2) farklı.
  - Motor (`soru.js` `esitDeger`) bu yüzden ikisini ayrı şık sayıyor. `uretecDene` doğruya değerce eşit yanlışı yakalardı; 300 tohumda (ek taramada 20 000 tohumda) hata yok.
- Bağımsız teyit: üreteç denetimi tur 2 (`denetim/uretec_matematik_u1_tur2.md`) bu durumu ayrıca inceledi ve "biçim hatası olarak doğru davranış" dedi.

### 2 · Kısmen haklı
- Haklı olan: CLAUDE.md "bir ekranda tek fikir" diyor. İki bölüm birden fazla fikir taşıyordu:
  - Toplama bölümü: aynı kuvvetleri toplama + bilimsel gösterim.
  - Çarpma/bölme bölümü: aynı tabanlı çarpma-bölme + tabanların çarpımı + üssün üssü.
- Haksız olan: "dört-beş madde" sayısı tek başına ölçüt değil. Paragrafların her biri ≤ 3 cümle; pedagoji denetimi tur 3 "TEMİZ" verdi. Sorun madde sayısı değil, fikir sayısı.
- Daha önce bölünmemesinin nedeni bizim koyduğumuz 8 bölüm sınırıydı. 9.1.1 kitapta 24 sayfalık en geniş konu olduğu için sınır bu konu için 10'a çıkarıldı.
- Yeni bölümler: "Aynı kuvvetleri toplama", "Bilimsel gösterim", "Aynı tabanla çarpma ve bölme", "Aynı üs ve üssün üssü".

### 3 · İçerik doğru, kaynak gösterimi yanlış
- Codex'in verdiği bağlantı (`tymm.meb.gov.tr/fizik-dersi/...`) **Fizik** dersine ait.
- Doğru kaynak: Matematik öğretim programı (`kaynaklar/meb/matematik/matematik-dersi_20260819_143102_154.pdf`, s.45–46): "…aritmetik işlemler (toplama, çıkarma, çarpma, bölme ve **kareköklü ifadeler için eşlenik**)…". Anahtar kavramlar listesinde de "eşlenik" var.
- İçerikte değişiklik gerekmiyor.

## Sonuç
- Kod değişikliği: yok.
- İçerik değişikliği: `dersler/matematik/konular/matematik-u1-k1.json` (bölüm ayırma, surum 4).
- Sonrasında `python tools/panel_derle.py` ve `python tools/dogrula.py` çalıştırıldı.
