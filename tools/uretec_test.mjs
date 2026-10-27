// Üreteçlerin 300 tohum testi ve B9.soru birim testleri. Çalıştırma: node tools/uretec_test.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const kok = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "panel", "motor");
const sandbox = { console };
sandbox.window = sandbox;
vm.createContext(sandbox);
const yukle = f => vm.runInContext(fs.readFileSync(f, "utf8"), sandbox, { filename: f });
yukle(path.join(kok, "rastgele.js"));
yukle(path.join(kok, "soru.js"));
const uDizin = path.join(kok, "uretecler");
fs.readdirSync(uDizin).filter(f => f.endsWith(".js")).sort().forEach(f => yukle(path.join(uDizin, f)));

const { soru: S, rastgele: R } = sandbox.B9;
const ADET = 300;
let basarisiz = 0;

for (const u of sandbox.URETECLER || []) {
  const { hatalar } = S.uretecDene(u, ADET);
  const kotu = new Set(hatalar.map(h => h.tohum)).size;
  console.log(`${u.id}: ${ADET - kotu}/${ADET} ${kotu ? "HATA" : "OK"}`);
  hatalar.slice(0, 10).forEach(h => console.log("  " + h.mesaj));
  if (kotu) basarisiz++;
}

const birim = [];
const esit = (ad, a, b) => { if (JSON.stringify(a) !== JSON.stringify(b)) birim.push(`${ad}: ${JSON.stringify(a)} ≠ ${JSON.stringify(b)}`); };

esit("ust", R.ust(-12), "⁻¹²");
esit("sayi", R.sayi(2.5), "2,5");
esit("shuffle kopya", (() => { const d = [1, 2, 3]; R.shuffle(R.rng(1), d); return d; })(), [1, 2, 3]);
esit("rng tohumlu", R.rng(7)(), R.rng(7)());

const coktan = {
  id: "t-s1", konu_id: "ornek-u1-k1", tip: "coktan", zorluk: 1, kok: "2³ kaçtır?", ipuclari: ["a", "b", "c"], cozum_adimlari: ["1.", "2."],
  secenekler: [{ metin: "8", dogru: true }, { metin: "6", dogru: false, hata_turu: "us_carpma", aciklama: "x" }, { metin: "9", dogru: false }, { metin: "5", dogru: false }],
};
const q1 = S.statikten(coktan, 42);
esit("statik coktan tohum", JSON.stringify(q1), JSON.stringify(S.statikten(coktan, 42)));
esit("statik coktan dogru_index", q1.secenekler[q1.dogru_index].metin, "8");
esit("statik anahtar", q1.anahtar, "konu:ornek-u1-k1");
esit("kontrol coktan dogru", S.kontrol(q1, q1.dogru_index).dogru, true);
esit("kontrol coktan yanlis", S.kontrol(q1, q1.secenekler.findIndex(o => o.metin === "6")), { dogru: false, hata_turu: "us_carpma", aciklama: "x" });
esit("ipucu 2", S.ipucu(q1, 2), "b");
esit("ipucu sınır", S.ipucu(q1, 9), "c");

const acik = { id: "t-s2", konu_id: "k", tip: "acik", kok: "Açıklayınız.", rubrik: [{ olcut: "kurulum", puan: 4 }], puan: 10 };
const q2 = S.statikten(acik, 1);
esit("acik rubrik", q2.rubrik, acik.rubrik);
esit("acik kontrol", S.kontrol(q2, "ne yazsa").dogru, null);

const bosluk = { id: "t-s3", konu_id: "k", tip: "bosluk", kok: "...", cevap: "Irmak", kabul_edilenler: ["İzmit Körfezi"], hata_turu: ["ezber_karisikligi"] };
const q3 = S.statikten(bosluk, 1);
esit("bosluk I→ı", S.kontrol(q3, "  ırmak ").dogru, true);
esit("bosluk İ→i", S.kontrol(q3, "izmit   körfezi").dogru, true);
esit("bosluk yanlis", S.kontrol(q3, "deniz"), { dogru: false, hata_turu: "ezber_karisikligi", aciklama: null });

const dy = { id: "t-s4", konu_id: "k", tip: "dogru_yanlis", kok: "...", cevap: "Y" };
const q4 = S.statikten(dy, 1);
esit("dy bool", S.kontrol(q4, false).dogru, true);
esit("dy harf", S.kontrol(q4, "D").dogru, false);

const es = { id: "t-s5", konu_id: "k", tip: "eslestirme", kok: "...", secenekler: { sol: ["a", "b"], sag: ["x", "y"] }, cevap: [1, 0] };
const q5 = S.statikten(es, 1);
esit("eslestirme dogru", S.kontrol(q5, [1, 0]).dogru, true);
esit("eslestirme yanlis", S.kontrol(q5, [0, 1]).dogru, false);

// deger: metni farklı, değeri doğruya eşit yanlış (√80 ile 4√5) uretecten'de elenir, uretecDene'de hata sayılır.
const sahte = deger => ({
  id: "t-deger", konu_id: "k", kontrol: () => "4√5",
  gen: () => ({ params: {}, kok: "√80 = ?", dogru: "4√5", deger, ipuclari: ["a", "b", "c"], cozum: ["1.", "2."],
    yanlislar: [["√80", Math.sqrt(80)], ["2√5", 2 * Math.sqrt(5)], ["8√5", 8 * Math.sqrt(5)], ["4√6", 4 * Math.sqrt(6)], ["40", 40]].map(([metin, d]) => ({ metin, hata_turu: "x", deger: d })) }),
});
const qd = S.uretecten(sahte(4 * Math.sqrt(5)), 3);
esit("deger eler", qd.secenekler.some(o => o.metin === "√80"), false);
esit("deger 4 şık", qd.secenekler.length, 4);
esit("deger uretecDene yakalar", S.uretecDene(sahte(4 * Math.sqrt(5)), 1).hatalar.length, 1);
esit("deger yoksa eski davranış", S.uretecDene(sahte(undefined), 5).ok, true);

birim.forEach(b => console.log("  BİRİM HATA " + b));
console.log(`birim testleri: ${birim.length ? birim.length + " HATA" : "OK"}`);
process.exit(basarisiz || birim.length ? 1 : 0);
