# -*- coding: utf-8 -*-
"""PDF'leri sayfa sayfa metne çevirir.

Her <klasör>/<ad>.pdf için <klasör>/metin/<ad>/s0001.txt, s0002.txt ... yazar.
Dosya adındaki numara PDF'in sayfa sırasıdır (1'den başlar); kitabın üzerinde
basılı sayfa numarasıyla aynı olmayabilir.

Kullanım:
    python tools/pdf_metin.py kaynaklar/meb            # alt klasörlerdeki tüm PDF'ler
    python tools/pdf_metin.py kaynaklar/meb --yeniden  # var olanların üzerine yaz
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

from pypdf import PdfReader


def cevir(pdf: Path, yeniden: bool) -> tuple[int, int]:
    hedef = pdf.parent / "metin" / pdf.stem
    if hedef.exists() and not yeniden and any(hedef.iterdir()):
        return 0, 0
    hedef.mkdir(parents=True, exist_ok=True)
    reader = PdfReader(pdf)
    bos = 0
    for i, sayfa in enumerate(reader.pages, 1):
        try:
            metin = sayfa.extract_text() or ""
        except Exception as e:  # bozuk sayfa tüm kitabı durdurmasın
            metin = f"[METİN ÇIKARILAMADI: {e}]"
        if not metin.strip():
            bos += 1
        (hedef / f"s{i:04d}.txt").write_text(metin, encoding="utf-8")
    return len(reader.pages), bos


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("kok", type=Path)
    p.add_argument("--yeniden", action="store_true")
    args = p.parse_args()
    for pdf in sorted(args.kok.rglob("*.pdf")):
        if "metin" in pdf.parts:
            continue
        try:
            n, bos = cevir(pdf, args.yeniden)
        except Exception as e:
            print(f"HATA  {pdf}: {e}")
            continue
        durum = "atlandı (var)" if n == 0 else f"{n} sayfa, {bos} boş (görsel olabilir)"
        print(f"{durum:<34} {pdf}")


if __name__ == "__main__":
    main()
