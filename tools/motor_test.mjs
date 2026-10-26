// tekrar.js ve oturum.js testleri: node tools/motor_test.mjs
import vm from "node:vm";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "panel", "motor");
let hata = 0;
const dogru = (kosul, ad) => { if (kosul) console.log("  ok  " + ad); else { hata++; console.log("  HATA " + ad); } };
const esit = (a, b, ad) => dogru(JSON.stringify(a) === JSON.stringify(b), ad + (JSON.stringify(a) === JSON.stringify(b) ? "" : "  (beklenen " + JSON.stringify(b) + ", gelen " + JSON.stringify(a) + ")"));

function sahteDepo(baslangic = {}, yazmaHatasi = false) {
  const m = new Map(Object.entries(baslangic));
  return { m, getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => { if (yazmaHatasi) throw new Error("dolu"); m.set(k, String(v)); }, removeItem: k => m.delete(k) };
}
function yukle(depo) {
  const ctx = { localStorage: depo, console };
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  for (const d of ["tekrar.js", "oturum.js"]) vm.runInContext(fs.readFileSync(path.join(kok, d), "utf8"), ctx, { filename: d });
  return ctx.B9;
}

console.log("tekrar");
{
  const { tekrar: T } = yukle(sahteDepo());
  const bg = "2026-10-26";
  let r = T.uygula({ kutu: 2, sonraki: bg, son: bg, seri: 0 }, { ok: true }, bg);
  esit([r.durum.kutu, r.durum.sonraki], [3, "2026-10-30"], "kutu 2 doğru -> 3, +4 gün");
  r = T.uygula({ kutu: 4, sonraki: bg, son: bg, seri: 3 }, { ok: false }, bg);
  esit([r.durum.kutu, r.durum.sonraki, r.pekistirme], [1, "2026-10-27", 1], "kutu 4 yanlış -> 1, +1 gün, pekiştirme 1");
  r = T.uygula({ kutu: 1, sonraki: bg }, { ok: false, derinlik: 2 }, bg);
  dogru(r.pekistirme === null, "derinlik 2'de yanlış yeni pekiştirme eklemez");
  r = T.uygula({ kutu: 2, sonraki: bg, seri: 1 }, { ok: true, ipucu: 2 }, bg);
  esit([r.durum.kutu, r.durum.sonraki], [2, "2026-10-28"], "ipucuyla doğru -> kutu sabit, +2 gün");
  r = T.uygula({ kutu: 5, sonraki: bg, seri: 1 }, { ok: true }, bg);
  esit([r.durum.kutu, r.durum.sonraki], [5, "2026-11-09"], "kutu 5 doğru -> 5, +14 gün");
  r = T.uygula({ kutu: 1, sonraki: "2026-10-27" }, { ok: true, derinlik: 1 }, bg);
  esit([r.durum.kutu, r.durum.sonraki], [1, "2026-10-27"], "pekiştirmede doğru -> kutu sabit");
  r = T.uygula(null, { ok: true }, bg);
  dogru(r.durum.kutu === 1, "kutu 0 doğru -> 1");

  const takvim = { sinavlar: [{ ders: "matematik", tarih: "2027-01-06", yazili: "1D2Y" }] };
  const og = [{ anahtar: "konu:m1", konu_id: "m1", ders: "matematik", yazili: ["1D2Y"] }, { anahtar: "konu:m2", konu_id: "m2", ders: "matematik", yazili: ["1D2Y"] }];
  const durum = { "konu:m1": { kutu: 3, sonraki: "2027-01-03" }, "konu:m2": { kutu: 4, sonraki: "2027-01-03" } };
  let l = T.bugunListesi(durum, og, takvim, "2026-12-30");
  esit(l.map(x => x.anahtar), ["konu:m1"], "sınava 7 gün kalan, kutu 3, vadesi gelmemiş konu listede; kutu 4 değil");
  l = T.bugunListesi(durum, og, takvim, "2026-11-01");
  dogru(l.length === 0, "sınava uzaksa vadesiz öğe listede yok");
  const cok = Array.from({ length: 20 }, (_, i) => ({ anahtar: "konu:k" + i, konu_id: "k" + i, ders: "x" }));
  const d2 = Object.fromEntries(cok.map(o => [o.anahtar, { kutu: 1, sonraki: bg }]));
  dogru(T.bugunListesi(d2, cok, null, bg).length === 15, "günlük sınır 15");
  const iki = [0, 1, 2, 3].map(i => ({ anahtar: "a" + i, konu_id: i < 2 ? "A" : "B", ders: "x" }));
  const d3 = Object.fromEntries(iki.map(o => [o.anahtar, { kutu: 1, sonraki: bg }]));
  const s = T.bugunListesi(d3, iki, null, bg).map(x => x.konu_id);
  dogru(s.every((k, i) => i === 0 || k !== s[i - 1]), "art arda aynı konu yok");
  const sec = T.agirlikliSec(iki, () => 1, () => 0, "A");
  dogru(sec.konu_id === "B", "ağırlıklı seçim önceki konuyu atlar");
}

console.log("oturum");
{
  const KEY = "barbaros9:mehmet-eren";
  const kur = async (depo) => { const B9 = yukle(depo); const o = B9.oturum; const s = new o.SessionManager(new o.LocalStorageAdapter("barbaros9:")); await s.init(); return { o, s }; };

  let depo = sahteDepo({ [KEY]: JSON.stringify({ kutular: {}, notlar: { a: "x" } }) });
  let { s } = await kur(depo);
  dogru(s.data.v === 1 && s.data.notlar.a === "x" && Array.isArray(s.data.iz), "v eksik -> 1, alanlar tamamlanır");

  const gelecek = JSON.stringify({ v: 99, gizli: true });
  depo = sahteDepo({ [KEY]: gelecek });
  ({ s } = await kur(depo));
  await s.notKaydet("n", "deneme"); await s.kaydet();
  dogru(s.saltOkur && depo.getItem(KEY) === gelecek, "bilinmeyen gelecek sürüme dokunulmaz");

  const iyi = JSON.stringify({ v: 1, kutular: {}, istatistik: {}, iz: [], notlar: { eski: "kalsin" }, dakika: {}, acik: {}, ayarlar: {} });
  depo = sahteDepo({ [KEY]: iyi });
  ({ s } = await kur(depo));
  for (const kotu of ["{bozuk", "[]", JSON.stringify({ v: 1, kutular: { a: { kutu: 9 } } }), JSON.stringify({ v: 5 })]) {
    const r = await s.iceAktar(kotu);
    dogru(!r.ok && depo.getItem(KEY) === iyi && s.not("eski") === "kalsin", "bozuk içe aktarma veriyi silmez: " + kotu.slice(0, 25));
  }
  const yeni = JSON.stringify({ v: 1, kutular: { "konu:x": { kutu: 2, sonraki: "2026-10-28" } }, notlar: { yeni: "1" } });
  const r = await s.iceAktar(yeni);
  dogru(r.ok && depo.getItem(KEY + ":yedek") === iyi && s.not("yeni") === "1", "geçerli içe aktarma önce :yedek'e yedekler");

  // Cevap kaydı: istatistik ve iz
  await s.cevapKaydet({ anahtar: "konu:x", konu_id: "x", ders: "d", tohum: 1, ok: false, derinlik: 0, ipucu: 2, hata_turu: "t", sure_sn: 5 }, { kutu: 1, sonraki: "2026-10-27", son: "2026-10-26", seri: 0 });
  dogru(s.data.istatistik.x.t === 1 && s.data.iz.length === 1 && s.data.istatistik.x.ipucu === 2, "cevapKaydet istatistik ve iz");
  for (let i = 0; i < 600; i++) s.izEkle({ i });
  dogru(s.data.iz.length === 500, "iz en çok 500");
}

if (hata) { console.log("\n" + hata + " HATA"); process.exit(1); }
console.log("\nTümü geçti");
