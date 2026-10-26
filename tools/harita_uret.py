# -*- coding: utf-8 -*-
"""MEB taslak yıllık planı + konu-soru dağılım tablosu + ders kitabı metninden
dersler/<ders>/harita.json üretir.

Kaynak öncelikleri (CLAUDE.md): konu, hafta ve öğrenme çıktısı yıllık plandan;
1. dönem yazılı kapsamı resmî konu-soru dağılım tablosundan (KSDT); kitap sayfası
ders kitabının içindekiler sayfasından. Tahmine dayanan her alan
"dogrula" listesine yazılır; uydurma değer üretilmez, bulunamayan alan null kalır.

Kullanım:
    python tools/harita_uret.py            # tüm dersler
    python tools/harita_uret.py matematik  # tek ders
    python tools/harita_uret.py --selftest
"""
from __future__ import annotations

import json
import re
import sys
from datetime import date
from pathlib import Path

import openpyxl

KOK = Path(__file__).resolve().parent.parent
PLAN = KOK / "kaynaklar/yillik_plan/meb_taslak"
KSDT = KOK / "kaynaklar/meb/ortak_sinav/konu_soru_dagilim_2026_2027_1donem"
MEB = KOK / "kaynaklar/meb"

# ders -> (ad, haftalık saat [TTKB 09/05/2025], plan dosya kalıbı, KSDT dosyası, kitap PDF kökleri)
DERSLER: dict[str, dict] = {
    "tde": {"ad": "Türk Dili ve Edebiyatı", "saat": 5, "plan": "tde/*ANADOLU*", "ksdt": "edebiyat2.xlsx", "kitap": ["turk-dili-ve-edebiyati-9sinif-ders-kitabi"]},
    "matematik": {"ad": "Matematik", "saat": 6, "plan": "matematik/**/*ANADOLU*", "ksdt": "matematik2.xlsx", "kitap": ["matematik-9sinif-ders-kitabi-1kitap", "matematik-9sinif-ders-kitabi-2kitap"]},
    "fizik": {"ad": "Fizik", "saat": 2, "plan": "fizik/**/*ANADOLU*", "ksdt": "fizik2.xlsx", "kitap": ["fizik-dersi-9sinif-ders-kitabi"]},
    "kimya": {"ad": "Kimya", "saat": 2, "plan": "kimya/**/*ANADOLU*", "ksdt": "kimya4.xlsx", "kitap": ["kimya-9sinif-ders-kitabi"]},
    "biyoloji": {"ad": "Biyoloji", "saat": 2, "plan": "biyoloji/**/*ANADOLU*", "ksdt": "biyoloji3_4.xlsx", "kitap": ["biyoloji-dersi-9sinif-ders-kitabi"]},
    "tarih": {"ad": "Tarih", "saat": 2, "plan": "tarih/**/*ANADOLU*", "ksdt": "tarih3.xlsx", "kitap": ["tarih-9sinif-ders-kitabi"]},
    "cografya": {"ad": "Coğrafya", "saat": 2, "plan": "cografya/**/*ANADOLU*", "ksdt": "cografya4.xlsx", "kitap": ["cografya-dersi-9sinif-ders-kitabi"]},
    "din": {"ad": "Din Kültürü ve Ahlak Bilgisi", "saat": 2, "plan": None, "ksdt": "dkab_lise2.xlsx", "kitap": ["din-kulturu-ve-ahlak-bilgisi-9sinif-ders-kitabi"]},
    "ingilizce": {"ad": "İngilizce", "saat": 4, "plan": "ingilizce/*BULUNMAYAN*", "ksdt": "ingilizce_lise2.xlsx", "kitap": ["ingilizce-dersi-9-sinif-ders-kitabi"]},
    "beden": {"ad": "Beden Eğitimi ve Spor", "saat": 2, "plan": "beden/*.xlsx", "ksdt": None, "kitap": []},
    "gorsel": {"ad": "Görsel Sanatlar", "saat": 2, "plan": "gorsel/**/*.xlsx", "ksdt": None, "kitap": []},
    "muzik": {"ad": "Müzik", "saat": 2, "plan": "muzik/*Haz*.xlsx", "ksdt": None, "kitap": []},
    "saglik": {"ad": "Sağlık Bilgisi ve Trafik Kültürü", "saat": 1, "plan": None, "ksdt": None, "kitap": ["saglik-bilgisi-ve-trafik-kulturu-dersi_20260930"]},
}

# Yıllık plan hafta numarasına göre yazılı dönemi sınırları (2026-2027 çalışma takvimi):
# 1D1Y Kasım başı (8-9. hafta), 1D2Y 6 Ocak (16. hafta), 2D1Y 7 Nisan (26. hafta), sonrası 2D2Y.
# shortcut: okulun gerçek sınav haftaları bilinmiyor; okul takvimi gelince bu sınırlar güncellenmeli.
SINIRLAR = [(8, "1D1Y"), (16, "1D2Y"), (25, "2D1Y"), (99, "2D2Y")]
SINIRLAR_AD = [ad for _, ad in SINIRLAR]
ULKE_GENELI = {"matematik": "1D2Y", "tde": "2D1Y"}  # 2026-2027 ÖDSGM takvimi
UYGULAMALI = {"beden", "gorsel", "muzik"}  # ÖDSGM: uygulamalı derslere KSDT yayımlanmaz

KOD = re.compile(r"(?:[A-ZÇĞİÖŞÜ]{2,5}\.)?(?:\d+\.){2,3}\d*|TDE\d\.\d|ENG\.\d+\.\d+\.[A-Z0-9]+")


def norm(s: str | None) -> str:
    return re.sub(r"\s+", " ", str(s or "")).strip()


def kucuk(s: str) -> str:
    # str.lower() 'İ'yi 'i̇' (noktalı birleşik) yapar; Türkçe kurala göre önce elle çevir
    return s.replace("İ", "i").replace("I", "ı").lower()


def kod_anahtari(kod: str, unite: str = "") -> str:
    """Plan ve KSDT farklı önek kullanıyor (9.1.1. / KİM.9.1.1.); karşılaştırma için sayısal çekirdek.
    TDE kodları (TDE2.2, TDE4.3...) her temada tekrarlandığı için tema numarası da anahtara eklenir."""
    k = kod.rstrip(".")
    if not k.startswith(("TDE", "ENG")):
        k = re.sub(r"^[A-ZÇĞİÖŞÜ]{2,5}\.", "", k)
    if k.startswith("TDE"):
        m = re.search(r"(\d+)\s*\.\s*TEMA", unite or "", re.I)
        k += "|T" + (m.group(1) if m else "?")
    return k


def unite_adi(s: str) -> str:
    # plan ve KSDT aynı üniteyi farklı yazıyor: "1.TEMA SÖZÜN İNCELİĞİ" / "1. TEMA: SÖZÜN İNCELİĞİ", "UNIVERSE&FUTURE-"
    s = norm(s).rstrip(" -")
    s = re.sub(r"^(\d+)\s*\.\s*TEMA\s*:?\s*", r"\1. TEMA: ", s)
    return re.sub(r"\s*&\s*", " & ", s)


def ciktilari_ayir(hucre: str) -> list[dict]:
    """'9.1.1. Metin... 9.1.2. Metin...' hücresini kod/metin çiftlerine böler."""
    s = norm(hucre)
    bas = [m for m in KOD.finditer(s) if m.start() == 0 or s[m.start() - 1] in " \n"]
    out = []
    for i, m in enumerate(bas):
        metin = s[m.end():bas[i + 1].start() if i + 1 < len(bas) else len(s)].strip(" .")
        if len(metin) < 8:  # metin içinde geçen kısa kod atfı, yeni çıktı değil
            continue
        out.append({"kod": m.group(0).rstrip("."), "metin": metin})
    return out


# ---------- Yıllık plan ----------
def plan_oku(ders: str) -> tuple[list[dict], str | None]:
    kalip = DERSLER[ders]["plan"]
    if not kalip:
        return [], None
    adaylar = [p for p in PLAN.glob(kalip) if p.suffix == ".xlsx"]
    if not adaylar:
        return [], None
    dosya = sorted(adaylar)[0]
    wb = openpyxl.load_workbook(dosya, data_only=True)
    sayfa = next(s for s in wb.sheetnames if re.search(r"(^|\D)9(\D|$)", s))
    ws = wb[sayfa]
    satirlar, son = [], {"ay": None, "hafta": None, "hafta_no": None, "unite": None, "konu": None, "oc": None}
    for r in ws.iter_rows(min_row=4, values_only=True):
        r = list(r) + [None] * 8
        ilk = norm(r[0])
        if "TATİL" in ilk.upper():
            continue
        if r[0]: son["ay"] = ilk
        if r[1]:
            son["hafta"] = norm(r[1])
            m = re.match(r"(\d+)\.\s*Hafta", son["hafta"])
            son["hafta_no"] = int(m.group(1)) if m else son["hafta_no"]
        saat_hucre = norm(r[2])
        if "OKUL TEMELL" in saat_hucre.upper() or "SOSYAL ETK" in saat_hucre.upper():
            continue
        if "OKUL TEMELL" in norm(r[3]).upper():  # okul temelli planlama haftası, konu değil
            continue
        if r[3]: son["unite"] = unite_adi(r[3])
        if r[4]: son["konu"] = norm(r[4])
        if r[5]: son["oc"] = norm(r[5])
        if not (son["unite"] and son["hafta_no"]):
            continue
        try:
            saat = int(float(saat_hucre))
        except ValueError:
            saat = 0
        satirlar.append({**son, "saat": saat})
    return satirlar, f"{dosya.relative_to(KOK).as_posix()} [{sayfa.strip()}]"


# ---------- KSDT ----------
def ksdt_oku(ders: str) -> tuple[dict[str, dict], str | None]:
    """Öğrenme çıktısı anahtarı -> {'1D1Y': [senaryo soru sayıları], '1D2Y': [...] veya 'ULKE'}."""
    ad = DERSLER[ders]["ksdt"]
    if not ad:
        return {}, None
    dosya = KSDT / ad
    wb = openpyxl.load_workbook(dosya, data_only=True)
    ws = wb[next(s for s in wb.sheetnames if re.search(r"(^|\D)9(\D|$)", s))]
    rows = [list(r) for r in ws.iter_rows(values_only=True)]
    bas = next(i for i, r in enumerate(rows) if any("1. Dönem" in norm(c) and "1. Ortak" in norm(c) for c in r))
    ust, alt = rows[bas], rows[bas + 1]
    oc_sut = next(j for j, c in enumerate(ust) if re.search("Öğrenme Çıktı|Kazanım", norm(c)))
    y1 = next(j for j, c in enumerate(ust) if "1. Ortak" in norm(c))
    y2 = next(j for j, c in enumerate(ust) if "2. Ortak" in norm(c))
    son = max(j for j, c in enumerate(alt) if norm(c)) + 1
    ulke = "Ülke Geneli" in " ".join(norm(c) for c in alt[y2:son])
    tablo: dict[str, dict] = {}
    unite = konu = None
    for r in rows[bas + 2:]:
        if norm(r[0]): unite = unite_adi(r[0])
        if oc_sut > 1 and norm(r[1]): konu = norm(r[1])
        hucre = norm(r[oc_sut]) if oc_sut < len(r) else ""
        for oc in ciktilari_ayir(hucre):
            sayi = lambda a, b: [int(x) if isinstance(x, (int, float)) else 0 for x in r[a:b]]
            tablo[kod_anahtari(oc["kod"], unite or "")] = {
                "1D1Y": sayi(y1, y2), "1D2Y": "ULKE" if ulke else sayi(y2, son),
                "kod": oc["kod"], "metin": oc["metin"], "unite": unite, "konu": konu or unite}
    return tablo, dosya.relative_to(KOK).as_posix()


# ---------- Ders kitabı içindekiler ----------
KELIME = re.compile(r"[a-zçğıöşü]{4,}")


def kelimeler(s: str) -> set[str]:
    return set(KELIME.findall(kucuk(s))) - {"ders", "kitabı", "tema", "ünite", "konu", "olarak", "ilgili", "ve"}


def kitap_icindekiler(kok_ad: str) -> tuple[list[tuple[str, int]], dict[int, int], Path | None]:
    """[(başlık, basılı sayfa)], {basılı sayfa: pdf sayfa}, metin klasörü."""
    klasor = next((p for p in MEB.glob(f"*/metin/{kok_ad}*") if p.is_dir()), None)
    if not klasor:
        return [], {}, None
    sayfalar = sorted(klasor.glob("s*.txt"))
    baski: dict[int, int] = {}
    for i, f in enumerate(sayfalar, 1):
        ilk = f.read_text(encoding="utf-8").strip().split("\n", 1)[0].strip()
        if ilk.isdigit():
            baski.setdefault(int(ilk), i)
    girdi: list[tuple[str, int]] = []
    for f in sayfalar[:16]:  # içindekiler kitabın başında
        satirlar = [norm(x) for x in f.read_text(encoding="utf-8").split("\n")]
        tampon, bu_sayfa = "", []
        for j, s in enumerate(satirlar):
            sonraki = satirlar[j + 1] if j + 1 < len(satirlar) else ""
            if s and not s.isdigit() and sonraki.isdigit() and len(sonraki) <= 3:
                tampon = s  # "REVISION 1" / "15": sondaki 1 başlığın parçası, sayfa alt satırda
                continue
            # "1.2. BAŞLIK ..... 22" ya da "1.2. BAŞLIK 22": harften sonra ayraç ve satır sonunda sayfa no
            m = re.match(r"(.*?[A-Za-zÇĞİÖŞÜçğıöşüâîû)?!])[\s.…·_]+(\d{1,3})$", s)
            if m:
                bu_sayfa.append((norm(tampon + " " + m.group(1)).strip(" ."), int(m.group(2))))
                tampon = ""
            elif s.isdigit() and tampon and len(s) <= 3:  # "THEME 1 SCHOOL LIFE" / "23" alt satırda
                bu_sayfa.append((tampon.strip(" ."), int(s)))
                tampon = ""
            else:
                tampon = s if len(s) > 3 and not s.isdigit() else ""
        if len(bu_sayfa) >= 3:  # alıştırma sayfasındaki tek tük "... 49" satırları içindekiler değildir
            girdi += bu_sayfa
    # Bazı kitaplarda içindekiler sayfa numarası metne çıkmıyor: gövdedeki "1.1. BAŞLIK" satırlarını da ekle
    gorulen = set()
    pdf_basili = {p: b for b, p in baski.items()}
    for i, f in enumerate(sayfalar[10:], 11):
        if i not in pdf_basili:
            continue
        satir = [norm(x) for x in f.read_text(encoding="utf-8").split("\n")]
        basliklar = []
        for j, s in enumerate(satir):
            m = re.match(r"(\d+\.\d+)\.\s*[A-ZÇĞİÖŞÜ]", s)
            if m:  # başlık iki satıra taşabiliyor
                basliklar.append((m.group(1), s + " " + (satir[j + 1] if j + 1 < len(satir) else "")))
        if len({no for no, _ in basliklar}) != 1:  # tema kapağı birden çok alt başlığı listeler; konu başı değil
            continue
        no, s = basliklar[0]
        if no not in gorulen:
            gorulen.add(no)
            girdi.append((s, pdf_basili[i]))
    return girdi, baski, klasor


def sayfa_bul(konu: str, oc: str, icindekiler: list[tuple[str, int]], en_az_sayfa: int = 0) -> tuple[int | None, float]:
    """İçindekiler başlığının kelimelerinin ne kadarı konu adında geçiyor (başlıklar kısa olduğu için
    Jaccard yerine başlık kapsaması). Plan sırası kitap sırasını izlediğinden önceki konudan geri gidilmez."""
    hedef = kelimeler(re.sub(r"\(.*?\)|\[.*?\]", " ", konu)) | kelimeler(konu)
    hedef_oc = kelimeler(oc)
    en, puan = None, 0.0
    for baslik, sayfa in icindekiler:
        k = kelimeler(baslik)
        if not k or sayfa < en_az_sayfa:
            continue
        ortak = len(hedef & k)
        if ortak < min(2, len(k)):
            ortak = len(hedef_oc & k) * 0.8 if len(hedef_oc & k) >= min(2, len(k)) else 0  # konu adı tutmazsa öğrenme çıktısı metni
        p = ortak / len(k)
        if p > puan:
            en, puan = sayfa, p
    return en, round(puan, 2)


def icindekilerden_konular(ic: list[tuple[str, int]]) -> list[tuple[str, str]]:
    """'N. TEMA: AD' satırları ünite, BÜYÜK HARFLİ satırlar konu. Ünite sınırı 'N. TEMA ÖLÇME VE DEĞERLENDİRME' sayfası."""
    temalar = {int(m.group(1)): f"{m.group(1)}. TEMA: {norm(m.group(2))}" for b, _ in ic
               if (m := re.search(r"(\d+)\.\s*TEMA\s*:\s*(.+)", b))}
    sinir = sorted(p for b, p in ic if re.search(r"\d+\.\s*TEMA ÖLÇME", b))
    out = []
    for b, p in sorted(((b, p) for b, p in ic), key=lambda x: x[1]):
        harf = re.sub(r"[^A-Za-zÇĞİÖŞÜçğıöşü]", "", b)
        if len(harf) < 6 or harf != harf.upper() or re.search(r"TEMA|İÇİNDEKİLER|ÖLÇME VE", b):
            continue
        no = 1 + sum(s < p for s in sinir)
        if no in temalar:  # son temadan sonrası kitap eki (haritalar, sözlük)
            out.append((temalar[no], norm(b)))
    return out


# ---------- Harita ----------
def yazili_tahmin(son_hafta: int) -> str:
    return next(ad for sinir, ad in SINIRLAR if son_hafta <= sinir)


def harita(ders: str) -> dict:
    bilgi = DERSLER[ders]
    satirlar, plan_kaynak = plan_oku(ders)
    ksdt, ksdt_kaynak = ksdt_oku(ders)
    dogrula: list[str] = []
    if not plan_kaynak:
        dogrula.append("Yıllık plan BULUNAMADI (tymm.meb.gov.tr taslak çerçeve planlarında yok); hafta bilgisi yok.")

    # konuları plan sırasıyla topla; aynı (ünite, konu) tekrar gelirse haftalar birleşir
    konular: dict[tuple[str, str], dict] = {}
    for s in satirlar:
        unite = s["unite"]
        anahtar = (unite, s["konu"] or unite)
        k = konular.setdefault(anahtar, {"unite": unite, "ad": s["konu"] or unite, "haftalar": [], "hafta_metin": [], "saat": 0, "oc": {}})
        if s["hafta_no"] not in k["haftalar"]:
            k["haftalar"].append(s["hafta_no"]); k["hafta_metin"].append(s["hafta"])
        k["saat"] += s["saat"]
        for oc in ciktilari_ayir(s["oc"] or ""):
            k["oc"].setdefault(oc["kod"], oc["metin"])

    # Plan yoksa (Din Kültürü) yalnızca KSDT'deki 1. dönem konuları bilinir; hafta yok
    if not satirlar:
        for v in ksdt.values():
            k = konular.setdefault((v["unite"], v["konu"]), {"unite": v["unite"], "ad": v["konu"], "haftalar": [], "hafta_metin": [], "saat": 0, "oc": {}})
            k["oc"].setdefault(v["kod"], v["metin"])
        if ksdt:
            dogrula.append("Konular yalnızca 1. dönem KSDT'sinden alındı; 2. dönem konuları ders kitabı/öğretim programından eklenmeli.")
        elif bilgi["kitap"]:  # ne plan ne KSDT var (Sağlık Bilgisi): iskelet kitabın içindekilerinden
            ic, _, _ = kitap_icindekiler(bilgi["kitap"][0])
            for unite, konu in icindekilerden_konular(ic):
                konular.setdefault((unite, konu), {"unite": unite, "ad": konu, "haftalar": [], "hafta_metin": [], "saat": 0, "oc": {}})
            dogrula.append("Plan ve KSDT yok: üniteler/konular ders kitabı içindekilerinden çıkarıldı; öğrenme çıktısı kodları ve haftalar eksik.")

    kitap_girdileri = []
    for kad in bilgi["kitap"]:
        ic, baski, klasor = kitap_icindekiler(kad)
        if klasor:
            kitap_girdileri.append((kad, ic, baski, klasor))
        else:
            dogrula.append(f"Ders kitabı metni bulunamadı: {kad}")

    uniteler: list[dict] = []
    son_sayfa: dict[str, int] = {}
    for (unite, _), k in konular.items():
        u = next((x for x in uniteler if x["ad"] == unite), None)
        if not u:
            u = {"id": f"{ders}-u{len(uniteler) + 1}", "ad": unite, "konular": []}
            uniteler.append(u)
        kid = f"{u['id']}-k{len(u['konular']) + 1}"
        oclar = [{"kod": kod, "metin": m} for kod, m in k["oc"].items()]
        ks = [ksdt.get(kod_anahtari(o["kod"], unite)) for o in oclar]
        ks = [x for x in ks if x]
        konu_dogrula: list[str] = []
        haf = k["haftalar"]
        # Hafta aralığının kapsadığı yazılılar (tahmin)
        tahmin = []
        if haf:
            a, b = SINIRLAR_AD.index(yazili_tahmin(min(haf))), SINIRLAR_AD.index(yazili_tahmin(max(haf)))
            tahmin = SINIRLAR_AD[a:b + 1]
        yazili: list[str] = []
        kaynak: dict[str, str] = {}
        if ks:  # 1. dönem için resmî tablo esas
            if any(sum(x["1D1Y"]) for x in ks):
                yazili.append("1D1Y"); kaynak["1D1Y"] = "KSDT"
            if any(x["1D2Y"] != "ULKE" and sum(x["1D2Y"]) for x in ks):
                yazili.append("1D2Y"); kaynak["1D2Y"] = "KSDT"
            elif any(x["1D2Y"] == "ULKE" for x in ks) and "1D2Y" in tahmin:
                yazili.append("1D2Y"); kaynak["1D2Y"] = "plan haftası (ülke geneli tablo yayımlanmadı)"
            if not yazili and not any(t.startswith("2D") for t in tahmin):
                konu_dogrula.append("Resmî KSDT'de var ama 1. dönem yazılılarında 0 soru")
            for t in tahmin:  # 2. dönem için KSDT yok
                if t.startswith("2D") and t not in yazili:
                    yazili.append(t); kaynak[t] = "plan haftası"
        elif ders in UYGULAMALI:
            kaynak["uygulamali"] = "Uygulamalı ders: yazılı KSDT yayımlanmaz, değerlendirme uygulamalı sınav/performansla"
        elif ders == "tde" and oclar and all(re.match(r"TDE[13]\.", o["kod"]) for o in oclar):
            # dinleme (TDE1) ve konuşma (TDE3) çıktıları yazılı kâğıtta değil, sınavın uygulamalı kısmında ölçülür
            kaynak["uygulamali"] = "Yönetmelik 45/1-h: TDE sınavları dinleme/konuşma için uygulamalı yapılır"
        else:
            for t in tahmin:
                yazili.append(t); kaynak[t] = "plan haftası"
            # ülke geneli sınavın tablosu ayrıca yayımlanacağı için o sınava düşen konunun KSDT'de olmaması beklenir
            beklenen = {"1D1Y", "1D2Y"} - ({ULKE_GENELI[ders]} if ders in ULKE_GENELI else set())
            if ksdt and beklenen & set(tahmin):
                konu_dogrula.append("1. dönem konusu ama resmî KSDT'de yok")
        if not haf and not yazili:
            konu_dogrula.append("yazılı dönemi belirlenemedi")
        ulke = ULKE_GENELI.get(ders) in yazili
        if ulke:
            konu_dogrula.append(f"Ülke geneli {ULKE_GENELI[ders]} konu-soru dağılım tablosu ÖDSGM kılavuzuyla yayımlanacak; kapsam teyit edilmeli")

        kitap = None
        for kad, ic, baski, klasor in kitap_girdileri:
            dosya = klasor.relative_to(KOK).as_posix()
            # İngilizce planında konu sütunu uzun alt tema listesi; kitapta yalnız tema adı başlık
            ara = unite if ders == "ingilizce" else k["ad"]
            sayfa, puan = sayfa_bul(ara, " ".join(o["metin"] for o in oclar), ic, son_sayfa.get(dosya, 0))
            if sayfa and puan >= 0.5 and (kitap is None or puan > kitap["_puan"]):
                kitap = {"dosya": dosya, "basili_baslangic": sayfa, "pdf_baslangic": baski.get(sayfa), "_puan": puan}
        if kitap:
            son_sayfa[kitap["dosya"]] = kitap["basili_baslangic"]
        if kitap is None and kitap_girdileri:
            konu_dogrula.append("kitap sayfası içindekilerden eşlenemedi")
        u["konular"].append({
            "id": kid, "ad": k["ad"],
            "ogrenme_ciktilari": oclar,
            "kitap": kitap,
            "haftalar": k["haftalar"], "hafta_metin": f"{k['hafta_metin'][0]} → {k['hafta_metin'][-1]}" if k["hafta_metin"] else None,
            "ders_saati": k["saat"],
            "yazili": yazili, "yazili_kaynak": kaynak,
            "ksdt_senaryo_soru": {"1D1Y": [x["1D1Y"] for x in ks], "1D2Y": [x["1D2Y"] for x in ks]} if ks else None,
            "ortak_sinav": {"okul_geneli_ksdt": any(sum(x["1D1Y"]) or (x["1D2Y"] != "ULKE" and sum(x["1D2Y"])) for x in ks),
                            "ulke_geneli": ulke},
            "dogrula": konu_dogrula,
        })

    # kitap bitiş sayfası: aynı kitapta sonraki konunun başlangıcı - 1
    tum = [k for u in uniteler for k in u["konular"] if k["kitap"]]
    for k in tum:
        sonra = sorted({x["kitap"]["basili_baslangic"] for x in tum if x["kitap"]["dosya"] == k["kitap"]["dosya"]
                        and x["kitap"]["basili_baslangic"] > k["kitap"]["basili_baslangic"]})
        k["kitap"]["basili_bitis"] = sonra[0] - 1 if sonra else None
        if k["kitap"]["_puan"] < 0.75:
            k["dogrula"].append(f"kitap sayfası zayıf eşleşme (kapsama {k['kitap']['_puan']})")
        if any(x is not k and x["kitap"]["dosya"] == k["kitap"]["dosya"] and x["kitap"]["basili_baslangic"] == k["kitap"]["basili_baslangic"]
               and x["ad"] != k["ad"] for x in tum):
            k["dogrula"].append("başka bir konuyla aynı kitap sayfasına eşlendi")
        if k["kitap"]["basili_bitis"] is None:
            k["dogrula"].append("kitap bitiş sayfası bilinmiyor (kitaptaki son eşlenen konu)")
        k["kitap"]["eslesme_puani"] = k["kitap"].pop("_puan")
    if not bilgi["kitap"]:
        dogrula.append("Öğrenci ders kitabı yok (tymm'de yalnızca öğretmen kılavuz kitabı); uygulamalı ders, yazılı kapsamı yok.")

    return {
        "ders": ders, "ders_adi": bilgi["ad"], "sinif": 9, "haftalik_saat": bilgi["saat"],
        "kaynaklar": {"yillik_plan": plan_kaynak, "ksdt_1donem": ksdt_kaynak,
                      "ders_kitabi_metin": [x[3].relative_to(KOK).as_posix() for x in kitap_girdileri],
                      "haftalik_saat": "TTKB 09/05/2025 Anadolu Lisesi Haftalık Ders Çizelgesi"},
        "aciklama": {
            "yazili": "1D1Y/1D2Y/2D1Y/2D2Y. 'KSDT' kaynaklılar resmî tablodan, diğerleri plan haftasından tahmin. "
                      "Yönetmelik 45/1-d gereği her yazılı önceki konuları da azalan oranda kapsar.",
            "kitap": "basili_* kitabın üzerinde yazan sayfa; pdf_baslangic metin klasöründeki sNNNN.txt numarası. "
                     "Eşleşme içindekiler sayfasına kelime benzerliğiyle yapıldı.",
        },
        "uretim": {"arac": "tools/harita_uret.py", "tarih": date.today().isoformat()},
        "dogrula": dogrula,
        "uniteler": uniteler,
    }


def selftest() -> None:
    assert kod_anahtari("KİM.9.1.1") == kod_anahtari("9.1.1.") == "9.1.1"
    assert kod_anahtari("TDE2.2", unite_adi("1.TEMA SÖZÜN İNCELİĞİ")) == kod_anahtari("TDE2.2", "1. TEMA: SÖZÜN İNCELİĞİ") == "TDE2.2|T1"
    assert unite_adi("THEME 8: LIFE IN THE UNIVERSE&FUTURE-") == "THEME 8: LIFE IN THE UNIVERSE & FUTURE"
    oc = ciktilari_ayir("9.1.1. Gerçek sayıların üslü gösterimleri 9.1.2. Gerçek sayı aralıklarının gösterimi")
    assert [o["kod"] for o in oc] == ["9.1.1", "9.1.2"], oc
    m = re.match(r"(.*?[A-Za-zÇĞİÖŞÜçğıöşüâîû)?!])[\s.…·_]+(\d{1,3})$", "1.1. FİZİK BİLİMİ 15")
    assert m and m.groups() == ("1.1. FİZİK BİLİMİ", "15")
    ic = [("1.5. İNORGANİK MOLEKÜLLER", 44), ("1.6. ORGANİK MOLEKÜLLER", 60), ("Suyun Yapısı ve Önemi", 46)]
    assert sayfa_bul("Organik Moleküller (Karbohidratlar [Monosakkaritler])", "", ic) == (60, 1.0)
    assert sayfa_bul("İnorganik Moleküller (Su, Mineraller)", "", ic)[0] == 44
    assert sayfa_bul("Organik Moleküller", "", ic, en_az_sayfa=61)[0] is None  # kitapta geri gidilmez
    ic = [("HALK SAĞLIĞI", 26), ("Sağlık Hizmetleri", 28), ("1. TEMA ÖLÇME VE DEĞERLENDİRME SORULARI", 60),
          ("BESLENME", 80), ("1. TEMA: SAĞLIKLI İNSAN", 14), ("2. TEMA: YAŞAM", 66)]
    assert icindekilerden_konular(ic) == [("1. TEMA: SAĞLIKLI İNSAN", "HALK SAĞLIĞI"), ("2. TEMA: YAŞAM", "BESLENME")]
    assert yazili_tahmin(3) == "1D1Y" and yazili_tahmin(16) == "1D2Y" and yazili_tahmin(20) == "2D1Y" and yazili_tahmin(30) == "2D2Y"
    print("selftest OK")


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    if "--selftest" in sys.argv:
        selftest()
        return
    secim = [a for a in sys.argv[1:] if a in DERSLER] or list(DERSLER)
    for ders in secim:
        h = harita(ders)
        hedef = KOK / "dersler" / ders / "harita.json"
        hedef.parent.mkdir(parents=True, exist_ok=True)
        hedef.write_text(json.dumps(h, ensure_ascii=False, indent=1), encoding="utf-8")
        n = sum(len(u["konular"]) for u in h["uniteler"])
        d = sum(bool(k["dogrula"]) for u in h["uniteler"] for k in u["konular"])
        print(f"{ders:<10} {len(h['uniteler'])} ünite, {n} konu, {d} konuda DOĞRULA -> {hedef.relative_to(KOK)}")


if __name__ == "__main__":
    main()
