# -*- coding: utf-8 -*-
"""dersler/<ders>/{harita.json, konular/*.json, sorular/*.json} -> panel/data/<ders>.js
ve panel/index.html içindeki veri/üreteç <script> listesini günceller.

İçeriğin tek kaynağı dersler/ altındaki JSON'dur; panel/data/<ders>.js elle düzenlenmez.
Haritadan yalnızca konu kartı olan konular panele girer (boş konular öğrenciye gösterilmez).

Kullanım:
    python tools/panel_derle.py            # yaz
    python tools/panel_derle.py --kontrol  # yazmadan, panel/data güncel mi? (dogrula.py kullanır)
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
PANEL = KOK / "panel"
BAS, SON = "<!-- derle:baslangic -->", "<!-- derle:bitis -->"


def ders_verisi(klasor: Path) -> dict | None:
    kartlar = {f.stem: json.loads(f.read_text(encoding="utf-8")) for f in sorted((klasor / "konular").glob("*.json"))}
    if not kartlar:
        return None
    harita = json.loads((klasor / "harita.json").read_text(encoding="utf-8"))
    sorular = {}
    for f in sorted((klasor / "sorular").glob("*.json")):
        sorular[f.stem] = json.loads(f.read_text(encoding="utf-8"))["sorular"]
    uniteler = []
    for u in harita["uniteler"]:
        konular = [{"id": k["id"], "ad": k["ad"], "yazili": k["yazili"], "ogrenme_ciktilari": k["ogrenme_ciktilari"],
                    "kitap": k.get("kitap"), "haftalar": k.get("haftalar")} for k in u["konular"] if k["id"] in kartlar]
        if konular:
            uniteler.append({"id": u["id"], "ad": u["ad"], "konular": konular})
    return {"v": 1, "ders": harita["ders"], "ad": harita["ders_adi"], "haftalik_saat": harita["haftalik_saat"],
            "harita": {"uniteler": uniteler}, "konular": kartlar, "sorular": sorular}


def js(veri: dict) -> str:
    return ("// Üretildi: python tools/panel_derle.py — elle düzenlemeyin; kaynak dersler/" + veri["ders"] + "/\n"
            "(window.DERSLER = window.DERSLER || []).push(" + json.dumps(veri, ensure_ascii=False, indent=1) + ");\n")


def script_blogu(dersler: list[str]) -> str:
    satir = [BAS]
    satir += [f'<script src="motor/uretecler/{d}.js"></script>' for d in dersler if (PANEL / f"motor/uretecler/{d}.js").exists()]
    satir += [f'<script src="data/{d}.js"></script>' for d in dersler]
    return "\n".join(satir + [SON])


def hedefler() -> dict[Path, str]:
    """Yazılacak her dosyanın beklenen içeriği."""
    out, dersler = {}, []
    for klasor in sorted(p for p in (KOK / "dersler").iterdir() if p.is_dir()):
        veri = ders_verisi(klasor)
        if veri:
            dersler.append(veri["ders"])
            out[PANEL / f"data/{veri['ders']}.js"] = js(veri)
    html = (PANEL / "index.html").read_text(encoding="utf-8")
    if BAS not in html:
        # ilk kez: örnek test verisi ve örnek üreteç satırlarını işaretli bloğa çevir (ornek.js dogrula.py fikstürü olarak kalır)
        html = re.sub(r'<script src="motor/uretecler/ornek\.js"></script>\n', "", html)
        html = html.replace('<script src="data/ornek.js"></script>', BAS + "\n" + SON)
    html = re.sub(re.escape(BAS) + r".*?" + re.escape(SON), lambda _: script_blogu(dersler), html, flags=re.S)
    out[PANEL / "index.html"] = html
    return out


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    eskimis = []
    for yol, icerik in hedefler().items():
        mevcut = yol.read_text(encoding="utf-8") if yol.exists() else None
        if mevcut != icerik:
            eskimis.append(yol.relative_to(KOK).as_posix())
            if "--kontrol" not in sys.argv:
                yol.write_text(icerik, encoding="utf-8")
    if "--kontrol" in sys.argv:
        if eskimis:
            print("Derlenmemiş içerik: " + ", ".join(eskimis) + " (python tools/panel_derle.py)")
            sys.exit(1)
        print("panel/data güncel")
    else:
        print("güncellendi: " + (", ".join(eskimis) or "değişiklik yok"))


if __name__ == "__main__":
    main()
