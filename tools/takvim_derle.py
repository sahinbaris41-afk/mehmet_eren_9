# -*- coding: utf-8 -*-
"""docs/takvim.md'deki ülke geneli sınav tablosundan panel/data/takvim.js üretir.

Kullanım:
    python tools/takvim_derle.py
    python tools/takvim_derle.py --selftest
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
AYLAR = {"Ocak": 1, "Şubat": 2, "Mart": 3, "Nisan": 4, "Mayıs": 5, "Haziran": 6,
         "Temmuz": 7, "Ağustos": 8, "Eylül": 9, "Ekim": 10, "Kasım": 11, "Aralık": 12}
DERSLER = {"Matematik": "matematik", "Türk Dili ve Edebiyatı": "tde"}
SATIR = re.compile(r"^\|\s*\*\*(\d{1,2}) (\w+) (\d{4})[^|]*\*\*\s*\|\s*([^|]+?)\s*\|\s*(\d)\. dönem (\d)\. yazılı\s*\|")


def sinavlar(metin: str) -> list[dict]:
    out = []
    for satir in metin.splitlines():
        m = SATIR.match(satir)
        if not m:
            continue
        gun, ay, yil, ders, d, y = m.groups()
        if ders not in DERSLER:
            raise ValueError(f"Bilinmeyen ders adı takvimde: {ders}")
        out.append({"ders": DERSLER[ders], "ad": f"{ders} ortak yazılı (ülke geneli)",
                    "tarih": f"{yil}-{AYLAR[ay]:02d}-{int(gun):02d}", "yazili": f"{d}D{y}Y", "tur": "ulke"})
    return out


def selftest() -> None:
    ornek = "| **6 Ocak 2027 Çarşamba** | Matematik | 1. dönem 2. yazılı | **Teyitli** | [1] |"
    assert sinavlar(ornek) == [{"ders": "matematik", "ad": "Matematik ortak yazılı (ülke geneli)",
                                "tarih": "2027-01-06", "yazili": "1D2Y", "tur": "ulke"}]
    print("selftest OK")


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    if "--selftest" in sys.argv:
        selftest()
        return
    liste = sinavlar((KOK / "docs/takvim.md").read_text(encoding="utf-8"))
    if not liste:
        sys.exit("docs/takvim.md içinde sınav satırı bulunamadı")
    veri = {"kaynak": "docs/takvim.md", "sinavlar": liste}
    hedef = KOK / "panel/data/takvim.js"
    hedef.parent.mkdir(parents=True, exist_ok=True)
    hedef.write_text("// Üretildi: python tools/takvim_derle.py — elle düzenlemeyin; kaynak docs/takvim.md\n"
                     f"window.TAKVIM = {json.dumps(veri, ensure_ascii=False, indent=1)};\n", encoding="utf-8")
    print(f"{len(liste)} sınav -> {hedef.relative_to(KOK)}")


if __name__ == "__main__":
    main()
