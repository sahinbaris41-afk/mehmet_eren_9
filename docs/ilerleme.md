# İlerleme

**Durum:** BOŞTA

**Codex sayacı:** 0/3 (son çapraz denetim: Matematik Ünite 2 — 9.2.1, 9.2.2, 9.2.3 ve ortak `ayikla`, 2026-10-31, `denetim/codex_matematik_u2.md`, karar DÜZELTİLMELİ: kritik 0, önemli 5. Sonraki 3 konu bitince yeniden çalışır.)

Döngü kuralı:
- Durum "ÇALIŞIYOR" iken yeni konu başlatılmaz.
- Bir zincir başlarken Durum "ÇALIŞIYOR — <konu>" yapılır.
- Commit atılınca Durum "BOŞTA" olur ve Codex sayacı 1 artar.
- Sayaç 3 olunca codex-capraz-denetci çalışır ve sayaç 0'a döner.

Zincir (konu başına):
1. konu-anlatici
2. soru-yazari (≥12 soru, ≥3 açık uçlu, rubrikli)
3. uretec-muhendisi (hesap içeren kazanımlar; 300 tohum)
4. pedagoji + doğruluk denetimi
5. düzeltme (en çok 3 tur; kalan itiraz `docs/dogrula.md`'ye)
6. `python tools/panel_derle.py`
7. `python tools/dogrula.py`
8. commit

Codex modeli: `-m gpt-6-luna`. ChatGPT hesabında varsayılan `gpt-5.5` desteklenmiyor.

## 1. dönem konu sırası

Öncelik:
1. Matematik ülke geneli ortak sınav kapsamı (6 Ocak 2027).
2. Okul yazılıları (1D1Y, 1D2Y), yazılı tarihi en yakın olan önce.

Kaynak: `dersler/*/harita.json` (`yazili` alanı).

| Ders | Konu | Yazılı | Durum | Bölüm | Soru (açık) | Üreteç | Denetim turu | Commit |
|---|---|---|---|---|---|---|---|---|
| Matematik | 9.1.1 Üslü ve köklü gösterimler | 1D1Y | ✓ tamam | 10 | 23 (3) | 6 | 3 + Codex | pilot |
| Matematik | 9.1.2 Aralıklar | 1D1Y | ✓ tamam | 6 | 14 (4) | 2 | 3 + Codex | pilot |
| Matematik | 9.1.3 Sayı kümeleri | 1D1Y | ✓ tamam | 5 | 12 (4) | 2 | 3 + Codex | pilot |
| Matematik | 9.1.4 İşlem özellikleri ve özdeşlikler | 1D1Y | ✓ tamam | 8 | 15 (3) | 2 | 3 + Codex | pilot |
| Matematik | 9.2.1 Doğrusal fonksiyonlar | 1D1Y, 1D2Y | ✓ tamam | 11 | 20 (4) | 5 | 3 | 1aab100 |
| Matematik | 9.2.2 Mutlak değer fonksiyonu | 1D2Y | ✓ tamam | 14 | 20 (5) | 8 | 3 + üreteç 3 | 00b130e |
| Matematik | 9.2.3 Doğrusal fonksiyonlarla denklem ve eşitsizlik problemleri | 1D2Y | ✓ tamam | 13 | 18 (3) | 12 | 3 + üreteç 2 | bu commit |

## Pilot özeti (Matematik Ünite 1)

- **Denetim:** pedagoji 3 tur (DÜZELTİLMELİ → DÜZELTİLMELİ → TEMİZ), doğruluk 3 tur (DÜZELTİLMELİ → DÜZELTİLMELİ → TEMİZ), üreteç 2 tur (DÜZELTİLMELİ → TEMİZ), ardından Codex.
- **Önemli düzeltmeler:**
  - Üreteçlerde değerce eşit çeldirici sorunu (öğrenci iki doğru şık görebiliyordu) bulundu. Motora kalıcı test eklendi: `deger` alanı + `uretecDene`.
  - Ders kitabı PDF görselinden 17 şüpheli madde kapatıldı (`denetim/pdf_teyit_u1.md`).
- **Açık DOĞRULA:** `docs/dogrula.md` #15–#20 (öğretmen teyidi: rubrik puanları, x^(m/n) yazımı, ℚ tanımı, 0'a bölme puanlaması).
