# -*- coding: utf-8 -*-
"""Commit kapısı (CLAUDE.md: geçmeden commit atılmaz).

Kontroller:
  1. panel/data/*.js (window.DERSLER, window.TAKVIM) ve dersler/**/konular|sorular/*.json şeması
  2. Kaynak alanı boş konu kartı / soru yakalama
  3. Üreteçlerin Node ile 300 tohumlu selftest'i (tools/uretec_test.mjs) ve motor testleri (tools/motor_test.mjs)
  4. Araç selftest'leri (harita_uret, takvim_derle), CLAUDE.md == AGENTS.md
  5. panel/ içinde yasaklı kalıplar (innerHTML, eval, ağ isteği, dış URL)
  6. DOĞRULA sayımı (bilgi; hata sayılmaz)

Kullanım:
    python tools/dogrula.py           # hata varsa çıkış kodu 1
    python tools/dogrula.py --sessiz  # yalnızca özet
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
TIPLER = {"coktan", "acik", "dogru_yanlis", "bosluk", "eslestirme"}
YASAK = re.compile(r"innerHTML|outerHTML\s*=|insertAdjacentHTML|\beval\(|new Function|document\.write|\bfetch\(|XMLHttpRequest|https?://")


class Rapor:
    def __init__(self) -> None:
        self.hatalar: list[str] = []
        self.uyarilar: list[str] = []
        self.bilgi: list[str] = []

    def hata(self, yer: str, mesaj: str) -> None:
        self.hatalar.append(f"{yer}: {mesaj}")

    def uyari(self, yer: str, mesaj: str) -> None:
        self.uyarilar.append(f"{yer}: {mesaj}")


# ---------- Veri yükleme ----------
NODE_YUKLE = r"""
const fs = require("fs"), path = require("path"), vm = require("vm");
const kok = process.argv[1], ctx = { console };
ctx.window = ctx; vm.createContext(ctx);
for (const f of process.argv.slice(2)) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
process.stdout.write(JSON.stringify({ DERSLER: ctx.DERSLER || [], TAKVIM: ctx.TAKVIM || null,
  URETECLER: (ctx.URETECLER || []).map(u => ({ id: u.id, konu_id: u.konu_id, zorluk: u.zorluk, ogrenme_ciktisi: u.ogrenme_ciktisi, kaynak: u.kaynak })) }));
"""


def node_yukle(r: Rapor) -> dict:
    dosyalar = sorted((KOK / "panel/data").glob("*.js")) + sorted((KOK / "panel/motor/uretecler").glob("*.js"))
    motor = [KOK / "panel/motor/rastgele.js"]  # üreteçler B9.rastgele'ye yüklenirken ihtiyaç duyabilir
    p = subprocess.run(["node", "-e", NODE_YUKLE, str(KOK)] + [str(f) for f in motor + dosyalar if f.exists()],
                       capture_output=True, text=True, encoding="utf-8")
    if p.returncode:
        r.hata("panel/data", "Node ile yüklenemedi:\n" + p.stderr.strip()[-1500:])
        return {"DERSLER": [], "TAKVIM": None, "URETECLER": []}
    return json.loads(p.stdout)


# ---------- Şema kontrolleri ----------
def cumleler(paragraf: str) -> int:
    return len([c for c in re.split(r"(?<=[.!?])\s+", paragraf.strip()) if c])


def kaynak_bos(k) -> bool:
    if not k:
        return True
    if isinstance(k, list):
        return all(kaynak_bos(x) for x in k)
    if isinstance(k, dict):
        return not any(v for v in k.values())
    return not str(k).strip()


def konu_karti(r: Rapor, yer: str, kart: dict, beklenen_id: str | None) -> int:
    dogrula = len(kart.get("dogrula") or [])
    for alan in ("id", "baslik", "ogrenme_ciktilari", "bolumler"):
        if not kart.get(alan):
            r.hata(yer, f"zorunlu alan eksik: {alan}")
    if beklenen_id and kart.get("id") != beklenen_id:
        r.hata(yer, f"id ({kart.get('id')}) anahtarla ({beklenen_id}) aynı değil")
    if kaynak_bos(kart.get("kaynak")):
        r.hata(yer, "KAYNAK ALANI BOŞ (CLAUDE.md: her bilgi kartında kaynak zorunlu)")
    for i, b in enumerate(kart.get("bolumler") or []):
        y = f"{yer} bolumler[{i}]"
        kat = b.get("katmanlar") or {}
        for k in ("basit", "kitap", "yazilida"):
            if not kat.get(k):
                r.hata(y, f"katman eksik: {k}")
        if not (b.get("ornek") or {}).get("metin"):
            r.uyari(y, "somut örnek yok (önce örnek, sonra kural)")
        for k in ("basit", "kitap"):
            for j, p in enumerate(kat.get(k) or []):
                if cumleler(p) > 3:
                    r.uyari(f"{y}.{k}[{j}]", f"paragraf {cumleler(p)} cümle (en çok 3)")
        tanimli = {t.get("terim", "").lower() for t in b.get("terimler") or []}
        for t in re.findall(r"\*\*(.+?)\*\*", " ".join(kat.get("basit") or []) + " " + " ".join(kat.get("kitap") or [])):
            if t.lower() not in tanimli:
                r.uyari(y, f"kalın terim tanımsız: {t}")
        ks = b.get("kontrol_sorulari") or []
        if not 2 <= len(ks) <= 3:
            r.uyari(y, f"kontrol sorusu sayısı {len(ks)} (2-3 olmalı)")
        for j, s in enumerate(ks):
            if len(s.get("ipuclari") or []) != 3:
                r.hata(f"{y}.kontrol_sorulari[{j}]", "ipucu merdiveni 3 basamak değil")
    if not kart.get("flashcard"):
        r.uyari(yer, "flashcard yok")
    return dogrula


def soru(r: Rapor, yer: str, s: dict) -> int:
    for alan in ("id", "konu_id", "tip", "zorluk", "kok"):
        if s.get(alan) in (None, ""):
            r.hata(yer, f"zorunlu alan eksik: {alan}")
    tip = s.get("tip")
    if tip not in TIPLER:
        r.hata(yer, f"bilinmeyen tip: {tip}")
    if s.get("zorluk") not in (1, 2, 3):
        r.hata(yer, f"zorluk 1-3 olmalı: {s.get('zorluk')}")
    if len(s.get("ipuclari") or []) != 3:
        r.hata(yer, "ipucu merdiveni 3 basamak değil")
    if not s.get("cozum_adimlari"):
        r.hata(yer, "çözüm adımları yok")
    if kaynak_bos(s.get("kaynak")):
        r.hata(yer, "KAYNAK ALANI BOŞ")
    if tip == "coktan":
        sec = s.get("secenekler") or []
        if len(sec) != 4:
            r.hata(yer, f"çoktan seçmeli 4 şık olmalı ({len(sec)})")
        if sum(bool(x.get("dogru")) for x in sec) != 1:
            r.hata(yer, "tam olarak 1 doğru şık olmalı")
        if len({x.get("metin") for x in sec}) != len(sec):
            r.hata(yer, "aynı metinli şık var")
        for x in sec:
            if not x.get("dogru") and not x.get("hata_turu"):
                r.hata(yer, f"yanlış şıkta hata_turu yok: {x.get('metin')}")
            if re.search(r"hepsi|hiçbiri", str(x.get("metin")), re.I):
                r.hata(yer, "'hepsi/hiçbiri' şıkkı yasak (MEB kılavuzu)")
    if tip == "acik":
        rub = s.get("rubrik") or []
        if not rub:
            r.hata(yer, "açık uçlu soruda rubrik yok")
        elif s.get("puan") is not None and sum(x.get("puan", 0) for x in rub) != s["puan"]:
            r.hata(yer, f"rubrik toplamı ({sum(x.get('puan', 0) for x in rub)}) puana ({s['puan']}) eşit değil")
    if tip == "dogru_yanlis" and not isinstance(s.get("cevap"), bool):
        r.hata(yer, "doğru/yanlış sorusunda cevap true/false olmalı")
    if tip in ("bosluk", "acik") and not s.get("cevap"):
        r.hata(yer, "örnek cevap yok")
    return len(s.get("dogrula") or [])


def ders_verisi(r: Rapor, d: dict, uretec_konular: set) -> tuple[int, set]:
    yer = f"panel/data ders={d.get('ders')}"
    dogrula = 0
    if d.get("v") != 1:
        r.hata(yer, f"sözleşme sürümü v=1 bekleniyor ({d.get('v')})")
    konu_idler = [k["id"] for u in (d.get("harita") or {}).get("uniteler", []) for k in u.get("konular", [])]
    if len(konu_idler) != len(set(konu_idler)):
        r.hata(yer, "haritada tekrarlanan konu id'si")
    if not konu_idler:
        r.hata(yer, "haritada konu yok")
    for kid, kart in (d.get("konular") or {}).items():
        if kid not in konu_idler:
            r.hata(yer, f"konu kartı haritada olmayan id'ye bağlı: {kid}")
        dogrula += konu_karti(r, f"{yer} konular[{kid}]", kart, kid)
    idler = set()
    for kid, liste in (d.get("sorular") or {}).items():
        if kid not in konu_idler:
            r.hata(yer, f"soru listesi haritada olmayan id'ye bağlı: {kid}")
        for i, s in enumerate(liste):
            if s.get("id") in idler:
                r.hata(yer, f"tekrarlanan soru id: {s.get('id')}")
            idler.add(s.get("id"))
            if s.get("konu_id") != kid:
                r.hata(f"{yer} sorular[{kid}][{i}]", "konu_id liste anahtarıyla aynı değil")
            dogrula += soru(r, f"{yer} sorular[{kid}][{i}]", s)
    for kid in konu_idler:
        if kid not in (d.get("konular") or {}):
            r.uyari(yer, f"konu kartı henüz yok: {kid}")
        if not (d.get("sorular") or {}).get(kid) and kid not in uretec_konular:
            r.uyari(yer, f"soru da üreteç de yok: {kid}")
    return dogrula, set(konu_idler)


def json_dosyalari(r: Rapor) -> int:
    dogrula = 0
    for f in sorted(KOK.glob("dersler/*/konular/*.json")):
        try:
            dogrula += konu_karti(r, str(f.relative_to(KOK)), json.loads(f.read_text(encoding="utf-8")), f.stem)
        except json.JSONDecodeError as e:
            r.hata(str(f.relative_to(KOK)), f"JSON bozuk: {e}")
    for f in sorted(KOK.glob("dersler/*/sorular/*.json")):
        try:
            veri = json.loads(f.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            r.hata(str(f.relative_to(KOK)), f"JSON bozuk: {e}")
            continue
        for i, s in enumerate(veri.get("sorular", [])):
            dogrula += soru(r, f"{f.relative_to(KOK)} sorular[{i}]", s)
    return dogrula


# ---------- Dış testler ----------
def komut(r: Rapor, ad: str, arg: list[str], gerekli: bool = True) -> None:
    hedef = KOK / arg[1] if len(arg) > 1 else None
    if hedef is not None and not hedef.exists():
        (r.hata if gerekli else r.uyari)(ad, f"{arg[1]} bulunamadı")
        return
    p = subprocess.run(arg, cwd=KOK, capture_output=True, text=True, encoding="utf-8", errors="replace")
    ozet = (p.stdout.strip().splitlines() or [""])[-1]
    if p.returncode:
        r.hata(ad, f"başarısız (çıkış {p.returncode}):\n" + (p.stdout + p.stderr).strip()[-2000:])
    else:
        r.bilgi.append(f"{ad}: geçti — {ozet}")


def yasakli_kaliplar(r: Rapor) -> None:
    for f in sorted((KOK / "panel").rglob("*")):
        if f.suffix not in (".js", ".html", ".css") or "fonts" in f.parts:
            continue
        for no, satir in enumerate(f.read_text(encoding="utf-8").splitlines(), 1):
            kod = re.sub(r"//.*$|/\*.*?\*/|<!--.*?-->", "", satir)  # yorum satırındaki atıf sayılmaz
            m = YASAK.search(kod)
            if m and m.group(0).startswith("http") and "data" in f.parts:
                continue  # içerikteki kaynak URL'si metindir, ağ isteği değil
            if m:
                r.hata(f"{f.relative_to(KOK)}:{no}", f"yasaklı kalıp '{m.group(0)}'")


def dogrula_say() -> dict[str, int]:
    say = {}
    for f in [KOK / "docs/dogrula.md"]:
        say["docs/dogrula.md açık madde"] = len(re.findall(r"\|\s*\[ \]", f.read_text(encoding="utf-8")))
    n = 0
    for f in KOK.glob("dersler/*/harita.json"):
        h = json.loads(f.read_text(encoding="utf-8"))
        n += sum(bool(k.get("dogrula")) for u in h["uniteler"] for k in u["konular"])
    say["harita: DOĞRULA'lı konu"] = n
    return say


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    sessiz = "--sessiz" in sys.argv
    r = Rapor()

    veri = node_yukle(r)
    uretec_konular = {u["konu_id"] for u in veri["URETECLER"]}
    tum_konular: set = set()
    icerik_dogrula = 0
    for d in veri["DERSLER"]:
        n, konular = ders_verisi(r, d, uretec_konular)
        icerik_dogrula += n
        tum_konular |= konular
    if not veri["DERSLER"]:
        r.hata("panel/data", "hiç ders verisi yok (window.DERSLER boş)")
    for u in veri["URETECLER"]:
        if u["konu_id"] not in tum_konular:
            r.hata(f"üreteç {u['id']}", f"konu_id haritada yok: {u['konu_id']}")
        if kaynak_bos(u.get("kaynak")):
            r.hata(f"üreteç {u['id']}", "KAYNAK ALANI BOŞ")
    ids = [u["id"] for u in veri["URETECLER"]]
    if len(ids) != len(set(ids)):
        r.hata("üreteçler", "tekrarlanan üreteç id")
    t = veri["TAKVIM"]
    if not t or not all(re.fullmatch(r"\d{4}-\d{2}-\d{2}", s.get("tarih", "")) for s in t.get("sinavlar", [])):
        r.hata("panel/data/takvim.js", "TAKVIM yok ya da tarih biçimi hatalı (python tools/takvim_derle.py)")
    icerik_dogrula += json_dosyalari(r)

    komut(r, "üreteç selftest (300 tohum)", ["node", "tools/uretec_test.mjs"])
    komut(r, "motor testleri", ["node", "tools/motor_test.mjs"])
    komut(r, "harita_uret selftest", [sys.executable, "tools/harita_uret.py", "--selftest"])
    komut(r, "takvim_derle selftest", [sys.executable, "tools/takvim_derle.py", "--selftest"])
    for js in sorted((KOK / "panel").rglob("*.js")):
        p = subprocess.run(["node", "--check", str(js)], capture_output=True, text=True, encoding="utf-8")
        if p.returncode:
            r.hata(str(js.relative_to(KOK)), "sözdizimi hatası:\n" + p.stderr.strip()[-800:])
    if (KOK / "CLAUDE.md").read_bytes() != (KOK / "AGENTS.md").read_bytes():
        r.hata("AGENTS.md", "CLAUDE.md ile aynı değil")
    yasakli_kaliplar(r)

    say = dogrula_say()
    say["içerik (kart/soru) dogrula maddesi"] = icerik_dogrula
    print(f"Ders verisi: {len(veri['DERSLER'])} ders, {len(tum_konular)} konu, {len(veri['URETECLER'])} üreteç")
    for b in r.bilgi:
        print("  ✓", b)
    if r.uyarilar and not sessiz:
        print(f"\nUYARI ({len(r.uyarilar)}):")
        for u in r.uyarilar:
            print("  -", u)
    print("\nDOĞRULA sayımı:", ", ".join(f"{k}: {v}" for k, v in say.items()))
    if r.hatalar:
        print(f"\nHATA ({len(r.hatalar)}):")
        for h in r.hatalar:
            print("  ✗", h)
        print("\nSONUÇ: GEÇMEDİ — commit atılmaz.")
        sys.exit(1)
    print(f"\nSONUÇ: GEÇTİ ({len(r.uyarilar)} uyarı)")


if __name__ == "__main__":
    main()
