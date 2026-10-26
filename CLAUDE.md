# Barbaros 9 · Mehmet Eren Çalışma Masası

Bu dosyanın aynısı `AGENTS.md` olarak durur (Codex okur). Biri değişirse ikisi birlikte güncellenir.

Vizyon ve modlar: `docs/vizyon.md` · Referans mimari: `docs/referans_analizi.md` · Tarihler: `docs/takvim.md` · Teyit bekleyenler: `docs/dogrula.md`

## Öğrenci profili

- Mehmet Eren, Kocaeli Gölcük Barbaros Anadolu Lisesi, 9. sınıf, 2026–2027 eğitim-öğretim yılı.
- Türkiye Yüzyılı Maarif Modeli 9. sınıf müfredatı.
- Dersleri ve anlama kapasitesi ortalamanın biraz altında. Uzun metinde kopuyor.

## Pedagojik kurallar (her ajan uyar)

1. **Ekranda tek fikir.** Paragraf en fazla 3 cümle.
2. **Önce somut örnek, sonra kural.** Örnekler Gölcük, Kocaeli, tersane, deniz, futbol ve günlük hayattan.
3. **Her konu 3 katman:** Basit anlatım → Kitap dili → "Yazılıda böyle sorulur".
4. **5 dakikalık anlatımdan sonra 2–3 kolay kontrol sorusu.**
5. **Soru dağılımı:** %50 kolay, %35 orta, %15 sınav seviyesi.
6. **Her soruda 3 basamaklı ipucu merdiveni.** Birinci basamak yön gösterir, ikincisi yöntemi verir, üçüncüsü ilk adımı yapar.
7. **Yanlışta azarlama yok.** Tek cümlelik neden + ipucu.
8. **Terimler ilk geçtiği yerde kalın** yazılır ve basit tanımı verilir.
9. **Matematik çözümleri numaralı adımlarla** yazılır.

## Kaynak önceliği

1. `kaynaklar/gecmis_yazililar` ve `kaynaklar/defter`: öğretmenin gerçekte istediği.
2. `kaynaklar/yillik_plan`: konu sırası ve haftalar.
3. tymm.meb.gov.tr öğretim programı, 9. sınıf ders kitapları, destekleme etkinlik kitapları.
4. meb.gov.tr ve odsgm.meb.gov.tr ortak sınav duyuruları ve örnek soruları.
5. mevzuat.gov.tr Ortaöğretim Kurumları Yönetmeliği (sınav ve değerlendirme maddeleri).

Kaynaklar çelişirse üstteki kazanır. Çelişki `docs/dogrula.md` dosyasına not edilir.

## Doğruluk

- **Uydurma bilgi yok.**
- Her bilgi kartında `kaynak` alanı bulunur: kitap + sayfa, ya da program öğrenme çıktısı kodu.
- Emin olunmayan her şey `DOĞRULA:` etiketiyle işaretlenir ve `docs/dogrula.md` dosyasına satır olarak eklenir.

## Telif

- Ders kitabından uzun alıntı yok.
- Konu, öğrencinin anlayacağı dille yeniden anlatılır.

## Teknik

- İnternetsiz çalışan statik site: `panel/index.html` + `panel/data/*.js`.
- `file://` altında `fetch` çalışmaz. Bu yüzden veriler `window.DERSLER` dizisine `push` eden `.js` dosyalarıdır.
- Tasarım dili referanstan gelir: IBM Plex + `:root` token'ları + karanlık mod (`prefers-color-scheme` ve `data-theme`). Fontlar yerel dosyadan yüklenir; CDN kullanılmaz.
- Referans sistem: `C:\projeler\spl_dar_kapsam_egitim\spl_denetim_masasi.html`. Üreteç (`gen()`), `buildQuestion`, Leitner, SessionManager ve selfCheck mimarisi korunur.
- İlerleme localStorage'da tutulur. JSON olarak dışa ve içe aktarılır.
- Metin DOM'a `textContent` ile yazılır, `innerHTML` ile kullanıcı ya da veri metni basılmaz.
- Türkçe karakterler UTF-8.
- **Her içerik değişikliğinden sonra `python tools/dogrula.py` çalışır. Geçmeden commit atılmaz.**

## Önemli tarihler

- 9. sınıf Matematik ortak yazılı: **6 Ocak 2027 Çarşamba** (ÖDSGM resmî takvimi ile teyitli).
- 9. sınıf Türk Dili ve Edebiyatı ortak yazılı: **7 Nisan 2027 Çarşamba**.
- Kaynaklar ve ayrıntı: `docs/takvim.md`.
