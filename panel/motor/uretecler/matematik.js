// 9. sınıf Matematik 1. ünite (Sayılar) parametrik üreteçleri. Sözleşme: panel-standardi §4.
// Her üreteçte kontrol(params) gen'deki formülü kopyalamaz: sayarak, tarayarak ya da doğrudan aritmetikle hesaplar.
// `deger` (doğru ve her yanlışta): görüntü metninden bağımsız hesaplanan sayısal değer ya da kanonik dizge.
// Soru "sonuç" istiyorsa sayı; "en sade biçim"/"bilimsel gösterim" istiyorsa biçimin kanonik anahtarı; küme sorusunda üyelikten kurulan küme.
(function () {
  const G = typeof window !== "undefined" ? window : globalThis;
  const R = () => G.B9.rastgele;
  const kayit = u => (G.URETECLER = G.URETECLER || []).push(u);
  const KITAP = "matematik-1kitap";
  const EKSI = "−";

  // ---------- ortak biçimlendirme ----------
  const ust = n => R().ust(n);
  // Tam sayı: Unicode eksi; 5+ basamakta kitaptaki gibi boşlukla gruplama (10 201).
  const tam = n => {
    const s = String(Math.abs(n));
    return (n < 0 ? EKSI : "") + (s.length > 4 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : s);
  };
  const pt = n => (n < 0 ? "(" + tam(n) + ")" : String(n)); // işlem içinde negatif sayı parantezle
  const sayiYaz = x => (Number.isInteger(x) ? tam(x) : (x < 0 ? EKSI : "") + R().sayi(Math.abs(x)));
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const kesirYaz = (p, q) => {
    if (q < 0) { p = -p; q = -q; }
    const g = gcd(p, q) || 1; p /= g; q /= g;
    return q === 1 ? tam(p) : (p < 0 ? EKSI : "") + Math.abs(p) + "/" + q;
  };
  const kareMi = n => n >= 0 && Number.isInteger(Math.sqrt(n));
  const y = (metin, hata_turu, aciklama, deger) => ({ metin, hata_turu, aciklama, deger });

  // Üslü: soruda üs hep açık yazılır (5¹, 5⁰); sonuçta a⁰ = 1, a¹ = a.
  const usY = (a, k) => a + ust(k);
  const usS = (a, k) => (k === 0 ? "1" : k === 1 ? String(a) : a + ust(k));

  // Kök: dis·ⁿ√ic (ic = 1 ise yalnız dis).
  const kokYaz = (dis, ic, der) => {
    const s = der === 2 ? "√" : "∛";
    if (ic === 1) return tam(dis);
    return (dis === 1 ? "" : dis === -1 ? EKSI : tam(dis)) + s + ic;
  };

  // Aralık: {l, r, li, ri}; sonsuz uçta li/ri false.
  const ucYaz = v => (v === -Infinity ? EKSI + "∞" : v === Infinity ? "∞" : tam(v));
  const aralikYaz = I => (I.li ? "[" : "(") + ucYaz(I.l) + ", " + ucYaz(I.r) + (I.ri ? "]" : ")");
  const parcaYaz = I => (I.l === I.r ? "{" + tam(I.l) + "}" : aralikYaz(I));
  const kumeYaz = parcalar => (parcalar.length ? parcalar.map(parcaYaz).join(" ∪ ") : "∅");
  const icinde = (I, x) => (I.li ? x >= I.l : x > I.l) && (I.ri ? x <= I.r : x < I.r);

  // kontrol için: 0,5 adımlı ızgarada üyeliği tarayıp kümeyi yeniden kurar (uçlar tam sayı olduğundan yeterli).
  function tara(uye, uclar) {
    const lo = Math.min(...uclar) - 3, hi = Math.max(...uclar) + 3, nok = [];
    for (let x = lo; x <= hi; x += 0.5) nok.push(x);
    const runs = []; let bas = null;
    nok.forEach((x, i) => {
      const v = uye(x);
      if (v && bas === null) bas = i;
      if (bas !== null && (!v || i === nok.length - 1)) { runs.push([bas, v ? i : i - 1]); bas = null; }
    });
    return runs.map(([b, s]) => {
      const xb = nok[b], xs = nok[s];
      if (b === s && Number.isInteger(xb)) return "{" + tam(xb) + "}";
      const sol = b === 0 ? "(" + EKSI + "∞" : Number.isInteger(xb) ? "[" + tam(xb) : "(" + tam(xb - 0.5);
      const sag = s === nok.length - 1 ? "∞)" : Number.isInteger(xs) ? tam(xs) + "]" : tam(xs + 0.5) + ")";
      return sol + ", " + sag;
    }).join(" ∪ ") || "∅";
  }

  // =====================================================================
  // 9.1.1 · Üslü ve köklü gösterimler (matematik-u1-k1)
  // =====================================================================

  // BigInt kesirle değeri kurup a'ya bölerek üssü sayar (kontrol yardımcısı).
  function usSay(a, pay, payda) {
    const A = BigInt(a); let e = 0;
    while (pay > 1n && pay % A === 0n) { pay /= A; e++; }
    while (payda > 1n && payda % A === 0n) { payda /= A; e--; }
    return e;
  }
  const carpUs = (deger, A, k) => { // deger = [pay, payda]; a^k ile çarpar
    for (let i = 0; i < Math.abs(k); i++) { if (k > 0) deger[0] *= A; else deger[1] *= A; }
    return deger;
  };

  kayit({
    id: "mat-u1-uslu-carpma-bolme", konu_id: "matematik-u1-k1", ogrenme_ciktisi: "9.1.1", zorluk: 1,
    kaynak: { kitap: KITAP, sayfa: "16-22" },
    gen(r) {
      const { pick } = R();
      const a = pick(r, [2, 3, 5, 7, 10]);
      // Sınırın iki yanı: üsler negatif, 0 ve 1 olabilir; sonuç üssü de negatif/0/1 çıkabilir.
      const m = pick(r, [-3, -2, -1, 0, 1, 2, 3, 4, 5]);
      const n = pick(r, [-2, -1, 0, 1, 2, 3, 4]);
      const p = pick(r, [-2, -1, 0, 1, 2, 3]);
      const e = m + n - p;
      const ifade = usY(a, m) + " · " + usY(a, n) + " : " + usY(a, p);
      const dg = k => Math.pow(a, k);
      // Hatalı yol ancak sonucu değiştiriyorsa çeldiricidir (p ≠ 0, m·n ≠ m + n, e ≠ 0, ea ≠ e).
      const yanlislar = [
        y(usS(a, e + 1), "us_eksik", "Üsleri yeniden say: " + tam(m) + " + " + pt(n) + " − " + pt(p) + ".", dg(e + 1)),
        y(usS(a, e - 1), "us_eksik", "Üsleri yeniden say: " + tam(m) + " + " + pt(n) + " − " + pt(p) + ".", dg(e - 1)),
      ];
      if (p !== 0) yanlislar.push(y(usS(a, m + n + p), "us_kural_karisikligi", "Bölmede üsler çıkarılır; " + usY(a, p) + " ile bölerken üssü topladın.", dg(m + n + p)));
      if (m * n !== m + n) yanlislar.push(y(usS(a, m * n - p), "us_kural_karisikligi", "Çarpmada üsler çarpılmaz, toplanır: " + tam(m) + " + " + pt(n) + ".", dg(m * n - p)));
      if (e !== 0) yanlislar.push(y(usS(a * a, e), "taban_carpma", "Taban değişmez; yalnızca üslerle işlem yapılır.", Math.pow(a * a, e)));
      const ea = Math.abs(m) + Math.abs(n) - Math.abs(p);
      if ((m < 0 || n < 0 || p < 0) && ea !== e) yanlislar.push(y(usS(a, ea), "isaret_hatasi", "Negatif üslerin eksi işaretini kaybettin; işaretleriyle topla.", dg(ea)));
      if (m === 0 || n === 0 || e === 0) yanlislar.push(y("0", "sifir_us", "Sıfırıncı kuvvet 0 değil 1'dir.", 0));
      return {
        params: { a, m, n, p }, baglam: null,
        kok: ifade + " işleminin sonucu aşağıdakilerden hangisidir?",
        dogru: usS(a, e), deger: dg(e), yanlislar,
        ipuclari: [
          "Bütün tabanlar aynı mı? Aynıysa yalnızca üslerle uğraşacaksın.",
          "Çarpmada üsler toplanır, bölmede bölenin üssü çıkarılır: aᵐ · aⁿ : aᵖ = aᵐ⁺ⁿ⁻ᵖ.",
          "Üsleri işaretleriyle yaz: " + tam(m) + " + " + pt(n) + " − " + pt(p) + " = ?",
        ],
        cozum: [
          "1. Tabanların hepsi " + a + "; taban aynı kalır.",
          "2. Çarpmada üsler toplanır: " + tam(m) + " + " + pt(n) + " = " + tam(m + n) + ".",
          "3. Bölmede üs çıkarılır: " + tam(m + n) + " − " + pt(p) + " = " + tam(e) + ".",
          "4. Sonuç: " + usY(a, e) + (e === 0 ? " = 1" : e === 1 ? " = " + a : "") + ".",
        ],
      };
    },
    kontrol({ a, m, n, p }) {
      const A = BigInt(a), d = [1n, 1n];
      carpUs(d, A, m); carpUs(d, A, n); carpUs(d, A, -p);
      return usS(a, usSay(a, d[0], d[1]));
    },
  });

  kayit({
    id: "mat-u1-ussun-ussu", konu_id: "matematik-u1-k1", ogrenme_ciktisi: "9.1.1", zorluk: 1,
    kaynak: { kitap: KITAP, sayfa: "16-22" },
    gen(r) {
      const { pick } = R();
      const a = pick(r, [2, 3, 5, 10]);
      const m = pick(r, [-2, -1, 0, 2, 3]); // m = 1 yok: (5¹)² zor okunuyor ve (2¹)² ile 2¹·2 değerce çakışıyordu
      const n = pick(r, [-2, -1, 0, 2, 3, 4]);
      // (2²)² gibi m = n = 2 durumunda k = 0 iken üç ayrı değerli çeldirici kalmıyor (2·2 = 2², 2²·2 = 2³); k eklenir.
      const k = r() < 0.5 && !(m === 2 && n === 2) ? 0 : pick(r, [-3, -1, 1, 2, 4]);
      const e = m * n + k;
      const ifade = "(" + usY(a, m) + ")" + ust(n) + (k ? " · " + usY(a, k) : "");
      const dg = x => Math.pow(a, x);
      const hesapla = tam(m) + " · " + pt(n) + (k ? " + " + pt(k) : "");
      const yanlislar = [
        y(usS(a, e + 1), "us_eksik", "Üsleri yeniden hesapla: " + hesapla + ".", dg(e + 1)),
        y(usS(a, e - 1), "us_eksik", "Üsleri yeniden hesapla: " + hesapla + ".", dg(e - 1)),
      ];
      // Her hatalı yol yalnız sonucu değiştirdiği parametrede eklenir.
      if (m + n !== m * n) yanlislar.push(y(usS(a, m + n + k), "us_kural_karisikligi", "Üssün üssünde üsler toplanmaz, çarpılır: " + tam(m) + " · " + pt(n) + ".", dg(m + n + k)));
      if (k && e !== 0) yanlislar.push(y(usS(a * a, e), "taban_carpma", "Aynı tabanlı çarpmada taban değişmez; yalnızca üsler toplanır.", Math.pow(a * a, e)));
      if (k && m * n * k !== e) yanlislar.push(y(usS(a, m * n * k), "us_kural_karisikligi", "Son çarpmada üsler toplanır; " + usY(a, k) + " ile çarparken üssü de çarptın.", dg(m * n * k)));
      if (m * n < 0) yanlislar.push(y(usS(a, -m * n + k), "isaret_hatasi", "Negatif üssün işaretini kaybettin; " + tam(m) + " · " + pt(n) + " işaretiyle çarpılır.", dg(-m * n + k)));
      if (n > 0 && m > 1 && Math.pow(m, n) !== m * n) yanlislar.push(y(usS(a, Math.pow(m, n) + k), "us_kural_karisikligi", "(" + usY(a, m) + ")" + ust(n) + " ifadesinde yeni üs, " + m + " sayısının kuvveti değil, " + m + " · " + n + " çarpımıdır.", dg(Math.pow(m, n) + k)));
      if (m === 0 || n === 0) yanlislar.push(y("0", "sifir_us", "Sıfırıncı kuvvet 0 değil 1'dir.", 0));
      if (m >= 2 && n >= 2 && !k) yanlislar.push(y(tam(Math.pow(a, m) * n), "us_carpma", "Dıştaki " + n + " üssü " + n + " ile çarpmak değildir; " + usY(a, m) + " sayısı " + n + " kez çarpılır.", Math.pow(a, m) * n));
      return {
        params: { a, m, n, k }, baglam: null,
        kok: ifade + " işleminin sonucu aşağıdakilerden hangisidir?",
        dogru: usS(a, e), deger: dg(e), yanlislar,
        ipuclari: [
          "Önce parantezin dışındaki üsse bak: bir kuvvetin yeniden kuvveti alınıyor.",
          "Üssün üssünde üsler çarpılır: (aᵐ)ⁿ = aᵐ·ⁿ." + (k ? " Sonra aynı tabanla çarpmada üsler toplanır." : ""),
          // k = 0 iken m·n sonucun üssünün kendisi; ipucu cevabı vermesin.
          k ? "İlk adım: " + tam(m) + " · " + pt(n) + " = " + tam(m * n) + "." : "Parantez içindeki üs " + tam(m) + ", dıştaki üs " + pt(n) + ". Bu ikisini çarp.",
        ],
        cozum: [
          "1. (" + usY(a, m) + ")" + ust(n) + " = " + usY(a, m * n) + ", çünkü " + tam(m) + " · " + pt(n) + " = " + tam(m * n) + ".",
          ...(k ? ["2. " + usY(a, m * n) + " · " + usY(a, k) + " = " + usY(a, e) + ", çünkü " + tam(m * n) + " + " + pt(k) + " = " + tam(e) + "."] : []),
          (k ? "3" : "2") + ". Sonuç: " + usS(a, e) + ".",
        ],
      };
    },
    kontrol({ a, m, n, k }) {
      // İç kuvveti kesir olarak kur, |n| kez kendisiyle çarp (n < 0 ise ters çevir), sonra a^k ile çarp ve say.
      const A = BigInt(a), ic = carpUs([1n, 1n], A, m), d = [1n, 1n];
      for (let i = 0; i < Math.abs(n); i++) { d[0] *= ic[n > 0 ? 0 : 1]; d[1] *= ic[n > 0 ? 1 : 0]; }
      carpUs(d, A, k);
      return usS(a, usSay(a, d[0], d[1]));
    },
  });

  // Bilimsel gösterim: K = M · 10ˢ biçimindeki sayı · 10ᵖ verilir.
  const ondalikYaz = (M, s) => {
    const d = String(M);
    if (s >= 0) return tam(M * Math.pow(10, s));
    const pos = d.length + s;
    return pos > 0 ? d.slice(0, pos) + "," + d.slice(pos) : "0," + "0".repeat(-pos) + d;
  };
  const onUs = (kat, n) => kat + " · 10" + ust(n);

  kayit({
    id: "mat-u1-bilimsel-gosterim", konu_id: "matematik-u1-k1", ogrenme_ciktisi: "9.1.1", zorluk: 1,
    kaynak: { kitap: KITAP, sayfa: "22-23" },
    gen(r) {
      const { rint, pick } = R();
      const L = pick(r, [1, 2, 2, 3]);
      let M = rint(r, 1, 9);
      for (let i = 1; i < L; i++) M = M * 10 + (i === L - 1 ? rint(r, 1, 9) : rint(r, 0, 9));
      // s = −(L−1) sayıyı zaten bilimsel yapar; o durum dışarıda.
      const sAday = [-3, -2, -1, 1, 2].filter(s => s !== -(L - 1) && !(L === 3 && s > 1));
      const s = pick(r, sAday);
      const kayma = s + L - 1;
      const p = r() < 0.25 ? 0 : pick(r, [-6, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8].filter(v => Math.abs(v + kayma) <= 9 && v + kayma !== 0));
      const n = p + kayma;
      const d = String(M);
      const kat = d[0] + (L > 1 ? "," + d.slice(1) : "");
      const K = ondalikYaz(M, s);
      const verilen = p === 0 ? K : onUs(K, p);
      const on = L === 1 ? d + "0" : d.slice(0, 2) + (L > 2 ? "," + d.slice(2) : "");
      // Soru biçimi soruyor: katsayı-üs çifti kanonik anahtardır (katsayısı 13 olan eşit değerli gösterim farklı şıktır).
      const bk = (katsayi, us) => katsayi + "e" + us;
      const kN = M / Math.pow(10, L - 1);
      const yanlislar = [
        y(onUs(kat, p - kayma), "isaret_hatasi", "Virgülü kaydırdığın yönü ters çevirdin; virgül sola kayarsa üs artar.", bk(kN, p - kayma)),
        y(onUs(on, n - 1), "bilimsel_katsayi", "Bu sayıya eşit ama katsayı 10'dan küçük değil; bilimsel gösterimde 1 ≤ |a| < 10 olmalı.", bk(kN * 10, n - 1)),
        y(onUs("0," + d, n + 1), "bilimsel_katsayi", "Bu sayıya eşit ama katsayı 1'den küçük; bilimsel gösterimde 1 ≤ |a| < 10 olmalı.", bk(M / Math.pow(10, L), n + 1)),
        y(onUs(kat, n + 1), "us_eksik", "Virgülü kaç basamak kaydırdığını yeniden say.", bk(kN, n + 1)),
        y(onUs(kat, n - 1), "us_eksik", "Virgülü kaç basamak kaydırdığını yeniden say.", bk(kN, n - 1)),
      ];
      const yon = kayma > 0 ? "sola" : "sağa";
      return {
        params: { M, s, p }, baglam: null,
        kok: verilen + " sayısının bilimsel gösterimi aşağıdakilerden hangisidir?",
        dogru: onUs(kat, n), deger: bk(kN, n), yanlislar,
        ipuclari: [
          "Bilimsel gösterimde öndeki sayı 1 ile 10 arasında olmalı: 1 ≤ |a| < 10.",
          "Virgül bir basamak sola kayınca 10'un üssü 1 artar; sağa kayınca 1 azalır.",
          K + " sayısını " + kat + " yapmak için virgülü " + Math.abs(kayma) + " basamak " + yon + " kaydır.",
        ],
        cozum: [
          "1. Öndeki sayı " + K + "; bunu 1 ile 10 arasına getirmeliyiz: " + kat + ".",
          "2. Virgül " + Math.abs(kayma) + " basamak " + yon + " kaydı, yani " + K + " = " + onUs(kat, kayma) + ".",
          ...(p === 0 ? [] : ["3. 10'un kuvvetleri toplanır: " + tam(kayma) + " + " + pt(p) + " = " + tam(n) + "."]),
          (p === 0 ? "3" : "4") + ". Sonuç: " + onUs(kat, n) + ".",
        ],
      };
    },
    kontrol({ M, s, p }) {
      // Değeri BigInt kesir olarak kur; 10'la bölerek/çarparak [1, 10) aralığına getir, ondalığı uzun bölmeyle yaz.
      const t = s + p;
      let pay = BigInt(M) * 10n ** BigInt(Math.max(0, t)), payda = 10n ** BigInt(Math.max(0, -t)), n = 0;
      while (pay >= 10n * payda) { payda *= 10n; n++; }
      while (pay < payda) { pay *= 10n; n--; }
      let metin = String(pay / payda), kalan = pay % payda, ilk = true;
      while (kalan > 0n) { kalan *= 10n; metin += (ilk ? "," : "") + String(kalan / payda); kalan %= payda; ilk = false; }
      return metin + " · 10" + ust(n);
    },
  });

  // Kök dışına çıkarma: ⁿ√N, N = kⁿ · m.
  const enBuyukKuvvetCarpan = (N, der) => { // kontrol yardımcısı: N'yi bölen en büyük s^der
    for (let s = Math.floor(Math.pow(N, 1 / der)) + 1; s >= 1; s--) if (N % Math.pow(s, der) === 0) return s;
    return 1;
  };
  const enKucukAsal = k => { for (let q = 2; q <= k; q++) if (k % q === 0) return q; return k; };

  kayit({
    id: "mat-u1-kok-disi", konu_id: "matematik-u1-k1", ogrenme_ciktisi: "9.1.1", zorluk: 1,
    kaynak: { kitap: KITAP, sayfa: "26-32" },
    gen(r) {
      const { rint, pick } = R();
      const der = r() < 0.7 ? 2 : 3;
      let k, m;
      if (der === 2) {
        // Sınırın iki yanı: kök içi tam kare olan (m = 1) ve olmayan.
        if (r() < 0.2) { k = pick(r, [4, 6, 8, 10, 12]); m = 1; }
        else { k = rint(r, 2, 6); m = pick(r, [2, 3, 5, 6, 7, 10]); }
      } else {
        k = rint(r, 2, 4); m = k === 4 ? pick(r, [2, 3]) : pick(r, [2, 3, 4, 5, 6, 9]);
      }
      const N = Math.pow(k, der) * m, sym = der === 2 ? "√" : "∛";
      const kn = Math.pow(k, der), ad = der === 2 ? "kare" : "küp";
      // "En sade biçim" sorusu: değer değil biçim karşılaştırılır; √80 ile 4√5 burada farklı şıktır (eksik_adim çeldiricisi).
      const kf = (dis, ic, d2) => (ic === 1 ? String(dis) : dis + "·kök" + d2 + "(" + ic + ")");
      const yanlislar = [];
      if (m === 1) {
        yanlislar.push(y(tam(N), "eksik_adim", "Kökü almadın; " + N + " sayısının karekökü soruluyor.", kf(N, 1)));
        yanlislar.push(y(tam(-k), "isaret_hatasi", "Karekök negatif çıkmaz; " + sym + N + " pozitif sayıdır.", kf(-k, 1)));
      } else {
        yanlislar.push(y(kokYaz(kn, m, der), "islem_hatasi", kn + " kök dışına " + kn + " olarak değil, " + k + " olarak çıkar.", kf(kn, m, der)));
        if (m !== k) yanlislar.push(y(kokYaz(m, k, der), "islem_hatasi", "Kök dışına çıkan ile içeride kalan sayının yerini değiştirdin.", kf(m, k, der)));
        yanlislar.push(y(sym + m, "eksik_adim", "Kök dışına çıkan " + k + " sayısını yazmayı unuttun.", kf(1, m, der)));
        yanlislar.push(y(k + " + " + sym + m, "islem_hatasi", "Kökün içindeki çarpım, toplama dönüşmez: " + sym + "(" + kn + " · " + m + ") = " + k + sym + m + ".", k + "+" + kf(1, m, der)));
      }
      if (N % der === 0) yanlislar.push(y(tam(N / der), "islem_hatasi", "Kök almak " + (der === 2 ? "2'ye" : "3'e") + " bölmek değildir; " + ad + " çarpan aranır.", kf(N / der, 1)));
      if (k > 1 && enKucukAsal(k) < k) {
        const q = enKucukAsal(k);
        yanlislar.push(y(kokYaz(k / q, Math.pow(q, der) * m, der), "eksik_adim", "Kökün içinde hâlâ " + ad + " çarpan var; sadeleştirmeyi bitir.", kf(k / q, Math.pow(q, der) * m, der)));
      }
      if (der === 3) {
        const s = enBuyukKuvvetCarpan(N, 2);
        if (s > 1) yanlislar.push(y(kokYaz(s, N / (s * s), 3), "kavram_karisikligi", "Küpkökte tam kare değil, tam küp çarpan aranır.", kf(s, N / (s * s), 3)));
        yanlislar.push(y(kokYaz(k, m, 2), "kavram_karisikligi", "Kökün derecesi değişmez; sonuç da küpkök olmalı.", kf(k, m, 2)));
      }
      const dogru = kokYaz(k, m, der);
      return {
        params: { N, der }, baglam: null,
        kok: sym + N + " ifadesinin en sade biçimi aşağıdakilerden hangisidir?",
        dogru, deger: kf(k, m, der), yanlislar,
        ipuclari: [
          N + " sayısının içinde bir tam " + ad + " çarpan var mı? (" + (der === 2 ? "4, 9, 16, 25, 36…" : "8, 27, 64…") + ")",
          (der === 2 ? "√(a² · b) = a√b" : "∛(a³ · b) = a∛b") + ": tam " + ad + " çarpanın kökü dışarı çıkar.",
          m === 1 ? "Karesi " + N + " olan pozitif sayıyı ara; " + (k - 1) + "² = " + (k - 1) * (k - 1) + "." : N + " = " + kn + " · " + m + " biçiminde yaz.",
        ],
        cozum: [
          m === 1 ? "1. " + N + " = " + k + " · " + k + ", yani " + N + " bir tam karedir." : "1. " + N + " sayısını en büyük tam " + ad + " çarpanla yaz: " + N + " = " + kn + " · " + m + ".",
          "2. " + sym + kn + " = " + k + " olur" + (m === 1 ? "." : "; " + m + " içeride kalır."),
          "3. Sonuç: " + dogru + ".",
        ],
      };
    },
    kontrol({ N, der }) {
      const s = enBuyukKuvvetCarpan(N, der);
      return kokYaz(s, N / Math.pow(s, der), der);
    },
  });

  // Benzer köklerle toplama-çıkarma.
  const katKok = (C, m) => (C === 0 ? "0" : kokYaz(C, m, 2));

  kayit({
    id: "mat-u1-kok-toplama", konu_id: "matematik-u1-k1", ogrenme_ciktisi: "9.1.1", zorluk: 2,
    kaynak: { kitap: KITAP, sayfa: "26-32" },
    gen(r) {
      const { pick, shuffle } = R();
      const m = pick(r, [2, 3, 5, 6, 7]);
      const adet = r() < 0.5 ? 2 : 3;
      // Katsayılar farklı: aynı kök + ve − ile gelip birbirini götürmesin.
      const ps = shuffle(r, [1, 2, 3, 4, 5]).slice(0, adet), ss = ps.map((_, i) => (i === 0 ? 1 : r() < 0.5 ? 1 : -1));
      const Ns = ps.map(p => p * p * m);
      const ifade = Ns.map((N, i) => (i === 0 ? "" : ss[i] > 0 ? " + " : " " + EKSI + " ") + "√" + N).join("");
      const C = ps.reduce((t, p, i) => t + ss[i] * p, 0);
      const S = Ns.reduce((t, N, i) => t + ss[i] * N, 0);
      const isaretSay = ss.reduce((t, s) => t + s, 0);
      const km = Math.sqrt(m), topP = ps.reduce((t, p) => t + p, 0), C2 = ps.reduce((t, p, i) => t + ss[i] * p * p, 0);
      const yanlislar = [];
      // √S, S = C²·m ise doğru cevabın sadeleşmemiş hâlidir (√80 = 4√5); o zaman çeldirici olamaz.
      if (S > 0 && !(C > 0 && S === C * C * m)) yanlislar.push(y("√" + S, "kok_toplama", "Kök içleri toplanmaz; önce her kökü sadeleştir.", Math.sqrt(S)));
      if (isaretSay > 0 && isaretSay !== 1 && C !== 0) yanlislar.push(y(katKok(C, isaretSay * m), "kok_toplama", "Benzer köklerde yalnız katsayılar toplanır; √" + m + " aynı kalır.", C * Math.sqrt(isaretSay * m)));
      if (topP !== C) yanlislar.push(y(katKok(topP, m), "isaret_hatasi", "Çıkarma işaretlerini kaybettin; katsayıları işaretleriyle topla.", topP * km));
      if (C2 !== C) yanlislar.push(y(katKok(C2, m), "islem_hatasi", "Kök dışına karesini değil, kendisini çıkar: √" + (4 * m) + " = 2√" + m + ".", C2 * km));
      if (C !== 0 && C !== 1) yanlislar.push(y(tam(C), "eksik_adim", "Katsayıları buldun ama ortak √" + m + " çarpanını yazmayı unuttun.", C));
      yanlislar.push(y(katKok(C + 1, m), "islem_hatasi", "Katsayıları yeniden topla.", (C + 1) * km));
      yanlislar.push(y(katKok(C - 1, m), "islem_hatasi", "Katsayıları yeniden topla.", (C - 1) * km));
      const sade = ps.map(p => kokYaz(p, m, 2));
      const sadeIfade = sade.map((t, i) => (i === 0 ? "" : ss[i] > 0 ? " + " : " " + EKSI + " ") + t).join("");
      return {
        params: { Ns, ss }, baglam: null,
        kok: ifade + " işleminin sonucu aşağıdakilerden hangisidir?",
        dogru: katKok(C, m), deger: C * km, yanlislar,
        ipuclari: [
          "Kökler doğrudan toplanmaz; önce her birini kök dışına çıkararak sadeleştir.",
          "Hepsi a√" + m + " biçimine gelince yalnız katsayılarla işlem yapılır.",
          (j => j < 0 ? "Her kökün içinde " + m + " dışında kalan tam kare çarpanı ara." : "√" + Ns[j] + " = " + sade[j] + ". Diğerlerini de böyle yaz.")(ps.findIndex(p => p > 1)),
        ],
        cozum: [
          "1. Her kökü sadeleştir: " + Ns.map((N, i) => "√" + N + " = " + sade[i]).join(", ") + ".",
          "2. İfade " + sadeIfade + " olur.",
          "3. √" + m + " ortak çarpan; katsayılar: " + ps.map((p, i) => (i === 0 ? "" : ss[i] > 0 ? " + " : " − ") + p).join("") + " = " + tam(C) + ".",
          "4. Sonuç: " + katKok(C, m) + ".",
        ],
      };
    },
    kontrol({ Ns, ss }) {
      let C = 0, mOrt = null;
      Ns.forEach((N, i) => {
        const s = enBuyukKuvvetCarpan(N, 2), ic = N / (s * s);
        if (mOrt !== null && ic !== mOrt) mOrt = NaN; else mOrt = ic;
        C += ss[i] * s;
      });
      return Number.isNaN(mOrt) ? "BENZER DEĞİL" : katKok(C, mOrt);
    },
  });

  // Eşlenikle payda rasyonel yapma: c / (√a − √b).
  const kokOrSayi = x => (kareMi(x) ? String(Math.sqrt(x)) : "√" + x);
  function oranYaz(c, q, ifade) { // c · (ifade) / q, sadeleştirilmiş
    const g = gcd(c, q) || 1; c /= g; q /= g; if (q < 0) { c = -c; q = -q; }
    const eksi = c < 0; c = Math.abs(c);
    const govde = c === 1 ? (q === 1 && !eksi ? ifade : "(" + ifade + ")") : c + "(" + ifade + ")";
    return (eksi ? EKSI : "") + govde + (q === 1 ? "" : "/" + q);
  }

  kayit({
    id: "mat-u1-eslenik", konu_id: "matematik-u1-k1", ogrenme_ciktisi: "9.1.1", zorluk: 3,
    kaynak: { kitap: KITAP, sayfa: "32-35" },
    gen(r) {
      const { pick } = R();
      // b = 1 (tam kare) sınır vakası: √a − 1.
      const b = pick(r, [1, 2, 2, 3, 3, 5, 6]);
      const a = pick(r, [3, 5, 6, 7, 10, 11, 13].filter(v => v > b));
      const d = a - b;
      const c = pick(r, [1, 1, 2, 3, d]);
      const A = kokOrSayi(a), B = kokOrSayi(b);
      const top = A + " + " + B, fark = A + " " + EKSI + " " + B;
      const dogru = oranYaz(c, d, top);
      const sa = Math.sqrt(a), sb = Math.sqrt(b), dv = c * (sa + sb) / d;
      const yanlislar = [
        y(oranYaz(c, d, fark), "isaret_hatasi", "Payı eşlenikle çarpmalısın; " + fark + " ifadesinin eşleniği " + top + " olur.", c * (sa - sb) / d),
        y(oranYaz(c, a + b, top), "islem_hatasi", "(" + fark + ") · (" + top + ") = " + a + " − " + b + " olur, " + a + " + " + b + " değil.", c * (sa + sb) / (a + b)),
        y(kesirYaz(c, d), "eksik_adim", "Paydayı eşlenikle çarptın ama payı çarpmayı unuttun.", c / d),
        ...(d > 1 ? [y(kareMi(d) ? kesirYaz(c, Math.sqrt(d)) : c + "/√" + d, "kok_toplama", fark + " ile √" + d + (kareMi(d) ? " = " + Math.sqrt(d) : "") + " aynı değildir; kökler çıkarılmaz.", c / Math.sqrt(d))] : []),
        y(oranYaz(-c, d, top), "isaret_hatasi", "Paydayı " + b + " − " + a + " gibi ters yazdın; (√x − √y)(√x + √y) = x − y.", -dv),
      ];
      return {
        params: { a, b, c }, baglam: null,
        kok: c + "/(" + fark + ") ifadesinin paydası rasyonel yapıldığında sonuç aşağıdakilerden hangisidir?",
        dogru, deger: dv, yanlislar,
        ipuclari: [
          "Paydadaki kökten kurtulmak için kesri uygun bir ifadeyle genişlet.",
          fark + " ifadesinin eşleniği " + top + " olur; pay ve paydayı bununla çarp.",
          // d = 1 iken "= 1" yazmak cevabı açık eder.
          d === 1 ? "Paydayı çarp: (" + fark + ") · (" + top + ") = ?" : "Payda: (" + fark + ") · (" + top + ") = " + a + " − " + b + " = " + d + ".",
        ],
        cozum: [
          "1. Pay ve paydayı eşlenik " + top + " ile çarp.",
          "2. Payda: (" + fark + ") · (" + top + ") = " + a + " − " + b + " = " + d + ".",
          "3. Pay: " + c + " · (" + top + ").",
          "4. Sadeleştir: " + dogru + ".",
        ],
      };
    },
    kontrol({ a, b, c }) {
      // Paydayı dört terimle aç: √a·√a, √a·√b, −√b·√a, −√b·√b; kök terimleri birbirini götürmeli.
      const terimler = [[a, 0], [0, 1], [0, -1], [-b, 0]];
      const rasyonel = terimler.reduce((t, x) => t + x[0], 0), kokKat = terimler.reduce((t, x) => t + x[1], 0);
      if (kokKat !== 0) return "KÖK KALDI";
      let g = 1; for (let i = 1; i <= Math.min(c, rasyonel); i++) if (c % i === 0 && rasyonel % i === 0) g = i;
      const ci = c / g, qi = rasyonel / g, ifade = kokOrSayi(a) + " + " + kokOrSayi(b);
      const govde = ci === 1 ? (qi === 1 ? ifade : "(" + ifade + ")") : ci + "(" + ifade + ")";
      return govde + (qi === 1 ? "" : "/" + qi);
    },
  });

  // =====================================================================
  // 9.1.2 · Aralıklar (matematik-u1-k2)
  // =====================================================================

  function kesisim(A, B) {
    let l, li, r, ri;
    if (A.l > B.l) { l = A.l; li = A.li; } else if (B.l > A.l) { l = B.l; li = B.li; } else { l = A.l; li = A.li && B.li; }
    if (A.r < B.r) { r = A.r; ri = A.ri; } else if (B.r < A.r) { r = B.r; ri = B.ri; } else { r = A.r; ri = A.ri && B.ri; }
    if (l > r || (l === r && !(li && ri))) return [];
    return [{ l, r, li, ri }];
  }
  function birlesim(A, B) {
    const [P, Q] = A.l <= B.l ? [A, B] : [B, A];
    const bitisik = Q.l < P.r || (Q.l === P.r && (P.ri || Q.li));
    if (!bitisik) return [P, Q];
    const li = P.l === Q.l ? P.li || Q.li : P.li;
    let r, ri;
    if (P.r > Q.r) { r = P.r; ri = P.ri; } else if (Q.r > P.r) { r = Q.r; ri = Q.ri; } else { r = P.r; ri = P.ri || Q.ri; }
    return [{ l: P.l, r, li, ri }];
  }
  const sonlu = I => [I.l, I.r].filter(Number.isFinite);
  // deger: kümeyi üyelikten yeniden kurar (yazımdan bağımsız kanonik biçim). Geçersiz yazım (∞ yanında köşeli) için deger verilmez.
  const kumeDeger = parcalar => tara(x => parcalar.some(I => icinde(I, x)), parcalar.flatMap(sonlu));
  const ucDurum = (v, dahil) => (Number.isFinite(v) ? tam(v) + (dahil ? " dâhil" : " dâhil değil") : ucYaz(v) + " tarafı açık");

  kayit({
    id: "mat-u1-aralik-kesisim-birlesim", konu_id: "matematik-u1-k2", ogrenme_ciktisi: "9.1.2", zorluk: 2,
    kaynak: { kitap: KITAP, sayfa: "45-49, 54" },
    gen(r) {
      const { rint, pick } = R();
      const tip = pick(r, ["ortusme", "ortusme", "ortusme", "tek_nokta", "bos_temas", "ayrik", "sonsuz", "sonsuz"]);
      const bayrak = () => r() < 0.5;
      const x1 = rint(r, -6, 6), x2 = x1 + rint(r, 1, 4), x3 = x2 + rint(r, 1, 4), x4 = x3 + rint(r, 1, 4);
      let A, B, op = r() < 0.6 ? "∩" : "∪", baglam = null;
      if (tip === "ortusme") {
        A = { l: x1, r: x3, li: bayrak(), ri: bayrak() }; B = { l: x2, r: x4, li: bayrak(), ri: bayrak() };
      } else if (tip === "tek_nokta") {
        A = { l: x1, r: x2, li: bayrak(), ri: true }; B = { l: x2, r: x3, li: true, ri: bayrak() };
      } else if (tip === "bos_temas") {
        const hangi = rint(r, 0, 2); // 0: A ucu hariç, 1: B ucu hariç, 2: ikisi de hariç
        A = { l: x1, r: x2, li: bayrak(), ri: hangi === 1 }; B = { l: x2, r: x3, li: hangi === 0, ri: bayrak() };
        if (hangi === 2) op = "∩";
      } else if (tip === "ayrik") {
        A = { l: x1, r: x2, li: bayrak(), ri: bayrak() }; B = { l: x3, r: x4, li: bayrak(), ri: bayrak() }; // ∪ ise iki parçalı cevap
      } else if (r() < 0.5) {
        A = { l: -Infinity, r: x3, li: false, ri: bayrak() }; B = { l: x2, r: x4, li: bayrak(), ri: bayrak() };
      } else {
        A = { l: x1, r: x3, li: bayrak(), ri: bayrak() }; B = { l: x2, r: Infinity, li: bayrak(), ri: false };
      }
      // Ortak sınav 4. soru kalıbı: iki boyanın sıcaklık aralığı, uçlar dâhil.
      if (tip === "ortusme" && op === "∩" && r() < 0.35) {
        // Boya sürme sıcaklıkları gerçekçi kalsın: 5–40 °C.
        const t = [rint(r, 1, 2), 0, 0, 0]; t[1] = t[0] + rint(r, 1, 2); t[2] = t[1] + rint(r, 1, 2); t[3] = t[2] + rint(r, 1, 2);
        const [s1, s2, s3, s4] = t.map(v => v * 5);
        A = { l: s1, r: s3, li: true, ri: true }; B = { l: s2, r: s4, li: true, ri: true };
        baglam = "Tersanede iki boya kullanılıyor. K boyası " + s1 + " °C ile " + s3 + " °C arasında sürülüyor. L boyası " + s2 + " °C ile " + s4 +
          " °C arasında sürülüyor. Uç sıcaklıklar da dâhil. K'nin aralığı A, L'nin aralığı B kümesidir.";
      }
      const sonuc = op === "∩" ? kesisim(A, B) : birlesim(A, B);
      const diger = op === "∩" ? birlesim(A, B) : kesisim(A, B);
      const dogru = kumeYaz(sonuc);
      const yk = (parcalar, h, a) => y(kumeYaz(parcalar), h, a, kumeDeger(parcalar));
      const yanlislar = [
        yk(diger, "kesisim_birlesim", op === "∩" ? "Kesişim iki aralığın ortak kısmıdır; sen birleşimi yazdın." : "Birleşim iki aralığın tamamıdır; sen yalnız ortak kısmı yazdın."),
        y(aralikYaz(A), "islem_hatasi", "Aralıklardan yalnız birini yazdın; iki aralığı aynı sayı doğrusunda üst üste çiz.", kumeDeger([A])),
        y(aralikYaz(B), "islem_hatasi", "Aralıklardan yalnız birini yazdın; iki aralığı aynı sayı doğrusunda üst üste çiz.", kumeDeger([B])),
      ];
      if (sonuc.length === 1 && sonuc[0].l !== sonuc[0].r) {
        const I = sonuc[0];
        if (Number.isFinite(I.l)) yanlislar.push(yk([{ ...I, li: !I.li }], "aralik_uc", tam(I.l) + " sayısının kümede olup olmadığına yeniden bak; uç dâhilse [ ], değilse ( )."));
        if (Number.isFinite(I.r)) yanlislar.push(yk([{ ...I, ri: !I.ri }], "aralik_uc", tam(I.r) + " sayısının kümede olup olmadığına yeniden bak; uç dâhilse [ ], değilse ( )."));
        if (Number.isFinite(I.l) && Number.isFinite(I.r)) yanlislar.push(yk([{ ...I, li: !I.li, ri: !I.ri }], "aralik_uc", "Uçların dâhil olup olmadığını ters çevirdin."));
        if (!Number.isFinite(I.l)) yanlislar.push(y(kumeYaz([{ ...I, li: true }]), "sonsuz_koseli", "−∞ bir sayı değildir; yanına hep normal parantez gelir."));
        if (!Number.isFinite(I.r)) yanlislar.push(y(kumeYaz([{ ...I, ri: true }]), "sonsuz_koseli", "∞ bir sayı değildir; yanına hep normal parantez gelir."));
      } else if (sonuc.length === 1) {
        yanlislar.push(yk([], "aralik_uc", tam(sonuc[0].l) + " iki aralıkta da dâhil; ortak eleman var."));
      } else if (tip === "bos_temas") {
        yanlislar.push(yk([{ l: x2, r: x2, li: true, ri: true }], "aralik_uc", tam(x2) + " aralıklardan en az birine dâhil değil, bu yüzden ortak değil."));
      } else if (tip === "ayrik" && op === "∩") {
        yanlislar.push(yk([{ l: x2, r: x3, li: !A.ri, ri: !B.li }], "islem_hatasi", "İki aralığın arasındaki boşluğu yazdın; kesişim ortak kısımdır."));
      } else if (tip === "ayrik") {
        yanlislar.push(yk([{ l: x1, r: x4, li: A.li, ri: B.ri }], "islem_hatasi", "Aradaki boşluk iki aralıkta da yok; birleşim iki ayrı parça olarak ∪ ile yazılır."));
      }
      // Çözüm adımları hesaplanmış uçlarla (∅ ve tek nokta gerekçeli).
      let adim2, adim3;
      if (op === "∩") {
        const L = Math.max(A.l, B.l), Rr = Math.min(A.r, B.r);
        adim2 = "2. Ortak kısım: büyük sol uç " + ucYaz(L) + ", küçük sağ uç " + ucYaz(Rr) + ".";
        if (L > Rr) adim3 = "3. Sol uç sağ uçtan büyük; iki aralığın ortak sayısı yok.";
        else if (L === Rr) adim3 = "3. " + tam(L) + (sonuc.length ? " iki aralıkta da dâhil; ortak tek sayı budur." : " aralıklardan birinde dâhil değil; ortak sayı yok.");
        else adim3 = "3. " + ucDurum(L, sonuc[0].li) + ", " + ucDurum(Rr, sonuc[0].ri) + ".";
      } else if (sonuc.length === 2) {
        adim2 = "2. İki aralık birbirine değmiyor; ikisi ayrı parça kalır.";
        adim3 = "3. " + tam(sonuc[0].r) + " ile " + tam(sonuc[1].l) + " arasındaki sayılar iki aralıkta da yok; parçalar ∪ ile yazılır.";
      } else {
        adim2 = "2. Tamamı alınır: küçük sol uç " + ucYaz(sonuc[0].l) + ", büyük sağ uç " + ucYaz(sonuc[0].r) + ".";
        adim3 = "3. " + ucDurum(sonuc[0].l, sonuc[0].li) + ", " + ucDurum(sonuc[0].r, sonuc[0].ri) + ".";
      }
      const mesele = op === "∩" ? "iki aralıkta da bulunan sayılar" : "en az bir aralıkta bulunan sayılar";
      return {
        params: { A, B, op }, baglam,
        kok: (baglam ? "" : "A = " + aralikYaz(A) + " ve B = " + aralikYaz(B) + " olduğuna göre, ") + "A " + op + " B kümesi aşağıdakilerden hangisidir?",
        dogru, deger: kumeDeger(sonuc), yanlislar,
        ipuclari: [
          "A " + op + " B, " + mesele + " demektir.",
          "İki aralığı aynı sayı doğrusunda üst üste çiz; dâhil uç dolu, dâhil olmayan uç boş nokta.",
          "A'nın uçları " + ucYaz(A.l) + " ve " + ucYaz(A.r) + ", B'nin uçları " + ucYaz(B.l) + " ve " + ucYaz(B.r) + ". Önce sol uçlara bak.",
        ],
        cozum: [
          "1. A = " + aralikYaz(A) + ", B = " + aralikYaz(B) + ".",
          adim2,
          adim3,
          "4. Sonuç: A " + op + " B = " + dogru + ".",
        ],
      };
    },
    kontrol({ A, B, op }) {
      const uye = op === "∩" ? x => icinde(A, x) && icinde(B, x) : x => icinde(A, x) || icinde(B, x);
      return tara(uye, [...sonlu(A), ...sonlu(B)]);
    },
  });

  const mutlakYaz = (c, op, d) => "|" + (c === 0 ? "x" : c > 0 ? "x " + EKSI + " " + c : "x + " + -c) + "| " + op + " " + d;
  const OPLAR = { "<": (u, d) => u < d, "≤": (u, d) => u <= d, ">": (u, d) => u > d, "≥": (u, d) => u >= d };
  const mutlakDeger = (c, op, d) => tara(x => OPLAR[op](Math.abs(x - c), d), [c - d, c + d]); // eşitsizliğin çözüm kümesi
  // Bağlam başına gerçekçi orta nokta ve sapma aralıkları (kart b5: lastik 30–34 psi).
  const OLCU_BAGLAM = [
    ["Bir otomobilin lastik basıncı", "psi", [30, 34], [1, 3]],
    ["Tersanede kesilen sac levhanın kalınlığı", "mm", [3, 20], [1, 2]],
    ["Bir buzdolabının iç sıcaklığı", "°C", [4, 6], [1, 2]],
  ];

  kayit({
    id: "mat-u1-aralik-mutlak", konu_id: "matematik-u1-k2", ogrenme_ciktisi: "9.1.2", zorluk: 1,
    kaynak: { kitap: KITAP, sayfa: "50-52, 54" },
    gen(r) {
      const { rint, pick } = R();
      let c = rint(r, -6, 30), d = rint(r, 1, 6);
      if (r() < 0.5) {
        // Aralıktan mutlak değerli eşitsizliğe (ortak sınav 5. soru kalıbı).
        const kapali = r() < 0.6, op = kapali ? "≤" : "<";
        let baglam = null;
        if (kapali && r() < 0.5) {
          const [nesne, birim, cAr, dAr] = pick(r, OLCU_BAGLAM);
          c = rint(r, cAr[0], cAr[1]); d = rint(r, dAr[0], dAr[1]);
          baglam = nesne + " en az " + (c - d) + " " + birim + ", en fazla " + (c + d) + " " + birim + " olmalıdır. Bu değeri x ile gösterelim.";
        }
        const a = c - d, b = c + d;
        const I = { l: a, r: b, li: kapali, ri: kapali };
        const kok = "x ∈ ℝ olmak üzere " + (baglam ? "bu aralığın" : aralikYaz(I) + " aralığının") + " mutlak değerli eşitsizlik ile gösterimi aşağıdakilerden hangisidir?";
        const ym = (c2, op2, d2, h, acik) => y(mutlakYaz(c2, op2, d2), h, acik, mutlakDeger(c2, op2, d2));
        const yanlislar = [
          ym(c, op, 2 * d, "mutlak_tam_uzunluk", "Sağdaki sayı aralığın tam uzunluğu değil, yarısıdır: orta noktadan uca uzaklık."),
          ym(c, kapali ? "<" : "≤", d, "aralik_uc", kapali ? "Uçlar dâhil, bu yüzden ≤ kullanılır." : "Uçlar dâhil değil, bu yüzden < kullanılır."),
          ym(a, op, d, "islem_hatasi", "Mutlak değerin içine orta noktayı yazmalısın, aralığın ucunu değil."),
        ];
        if (c !== 0) yanlislar.push(ym(-c, op, d, "isaret_hatasi", "Orta nokta " + tam(c) + "; |x − c| içinde işaret ters yazılmış."));
        const dogru = mutlakYaz(c, op, d);
        return {
          params: { yon: "aralik", I }, baglam, kok, dogru, deger: mutlakDeger(c, op, d), yanlislar,
          ipuclari: [
            "Önce aralığın tam ortasını bul.",
            "Orta nokta c = (a + b)/2, uca uzaklık d = (b − a)/2. Sonra |x − c| " + op + " d yazılır.",
            "(" + tam(a) + " + " + tam(b) + ")/2 = ?",
          ],
          cozum: [
            "1. Orta nokta: (" + tam(a) + " + " + tam(b) + ")/2 = " + tam(c) + ".",
            "2. Uca uzaklık: (" + tam(b) + " − " + (a < 0 ? "(" + tam(a) + ")" : a) + ")/2 = " + d + ".",
            "3. Uçlar " + (kapali ? "dâhil, ≤ kullanılır." : "dâhil değil, < kullanılır."),
            "4. Sonuç: " + dogru + ".",
          ],
        };
      }
      // Mutlak değerli eşitsizlikten aralığa; > ve ≥ ile dış bölge (sonsuzlu birleşim) sınırı.
      const op = pick(r, ["<", "≤", "<", "≤", ">", "≥"]);
      const a = c - d, b = c + d;
      const ic = op === "<" || op === "≤", dahil = op === "≤" || op === "≥";
      const icI = { l: a, r: b, li: dahil, ri: dahil };
      const dis = [{ l: -Infinity, r: a, li: false, ri: dahil }, { l: b, r: Infinity, li: dahil, ri: false }];
      const sonuc = ic ? [icI] : dis;
      const dogru = kumeYaz(sonuc);
      const yk = (parcalar, h, acik) => y(kumeYaz(parcalar), h, acik, kumeDeger(parcalar));
      const yanlislar = [
        yk(ic ? [{ ...icI, li: !dahil, ri: !dahil }] : [{ ...dis[0], ri: !dahil }, { ...dis[1], li: !dahil }], "aralik_uc", dahil ? "Eşitlik de var (" + op + "), uçlar dâhildir." : "Eşitlik yok (" + op + "), uçlar dâhil değildir."),
        yk(ic ? dis : [icI], "kavram_karisikligi", ic ? "|x − c| < d, x'in c'ye yakın olduğunu söyler; dış bölgeyi değil iç bölgeyi al." : "|x − c| > d, x'in c'den uzak olduğunu söyler; iç bölgeyi değil dış bölgeyi al."),
        yk(ic ? [{ l: c, r: b, li: dahil, ri: dahil }] : [{ l: b, r: Infinity, li: dahil, ri: false }], "eksik_adim", "Yalnızca sağ tarafa gittin; " + tam(c) + " noktasından iki yöne de " + d + " birim gidilir."),
      ];
      if (c !== 0) {
        const t = ic ? [{ ...icI, l: -c - d, r: -c + d }] : [{ ...dis[0], r: -c - d }, { ...dis[1], l: -c + d }];
        yanlislar.push(yk(t, "isaret_hatasi", "|x − c| içindeki sayının işaretini ters aldın; merkez " + tam(c) + "."));
      }
      if (!ic) yanlislar.push(y(kumeYaz([{ ...dis[0], li: true }, { ...dis[1], ri: true }]), "sonsuz_koseli", "∞ ve −∞ yanına köşeli parantez gelmez."));
      const ifade = mutlakYaz(c, op, d);
      return {
        params: { yon: "mutlak", c, op, d }, baglam: null,
        kok: "x ∈ ℝ olmak üzere " + ifade + " eşitsizliğini sağlayan x değerlerinin kümesi aşağıdakilerden hangisidir?",
        dogru, deger: mutlakDeger(c, op, d), yanlislar,
        ipuclari: [
          mutlakYaz(c, op, d).split("| ")[0] + "| ifadesi, x ile " + tam(c) + " arasındaki uzaklıktır.",
          "Bu uzaklık " + d + " birimden " + (op === "<" ? "az" : op === "≤" ? "az ya da " + d + " birime eşit" : op === ">" ? "fazla" : "fazla ya da " + d + " birime eşit") + " olmalı. " + (ic ? "Sayılar merkeze yakın, iç bölgededir." : "Sayılar merkezden uzak, dış bölgededir."),
          "Uç noktalar: " + tam(c) + " − " + d + " = " + tam(a) + " ve " + tam(c) + " + " + d + " = " + tam(b) + ".",
        ],
        cozum: [
          "1. Merkez " + tam(c) + ", uzaklık " + d + ".",
          "2. Uçlar: " + tam(a) + " ve " + tam(b) + "; " + (dahil ? "eşitlik olduğundan uçlar dâhil." : "eşitlik olmadığından uçlar dâhil değil."),
          "3. " + (ic ? "İç bölge alınır." : "Dış bölge alınır; ∞ tarafında normal parantez."),
          "4. Sonuç: " + dogru + ".",
        ],
      };
    },
    kontrol(p) {
      if (p.yon === "mutlak") return tara(x => OPLAR[p.op](Math.abs(x - p.c), p.d), [p.c - p.d, p.c + p.d]);
      // Aralıktan: c ve d'yi tarayarak ara; ızgaradaki üyelik aralıkla birebir aynı olmalı.
      const I = p.I, izg = []; for (let x = I.l - 3; x <= I.r + 3; x += 0.5) izg.push(x);
      for (let c = I.l; c <= I.r; c++) for (let d = 1; d <= I.r - I.l; d++) for (const op of ["<", "≤"])
        if (izg.every(x => icinde(I, x) === OPLAR[op](Math.abs(x - c), d))) return mutlakYaz(c, op, d);
      return "BULUNAMADI";
    },
  });

  // =====================================================================
  // 9.1.3 · Sayı kümeleri (matematik-u1-k3)
  // =====================================================================

  const kucuk = (p1, q1, p2, q2) => p1 * q2 < p2 * q1; // q > 0
  kayit({
    id: "mat-u1-arada-sayi", konu_id: "matematik-u1-k3", ogrenme_ciktisi: "9.1.3", zorluk: 1,
    kaynak: { kitap: KITAP, sayfa: "61-63" },
    gen(r) {
      const { rint, pick } = R();
      const tip = pick(r, ["ardisik_pay", "birim", "tam", "negatif"]);
      let p1, q1, p2, q2;
      if (tip === "tam") { p1 = pick(r, [-5, -4, -3, -2, 1, 2, 3, 4, 5, 6]); q1 = 1; p2 = p1 + 1; q2 = 1; }
      else if (tip === "birim") { const d = rint(r, 2, 7); p1 = 1; q1 = d + 1; p2 = 1; q2 = d; }
      else { const d = rint(r, 3, 9), n = rint(r, 1, d - 2); p1 = n; q1 = d; p2 = n + 1; q2 = d; }
      if (tip === "negatif") { const t = [-p2, q2, -p1, q1]; [p1, q1, p2, q2] = t; }
      const x = kesirYaz(p1, q1), z = kesirYaz(p2, q2);
      const ortP = p1 * q2 + p2 * q1, ortQ = 2 * q1 * q2;
      const disarida = (p, q) => { if (q < 0) { p = -p; q = -q; } return !(kucuk(p1, q1, p, q) && kucuk(p, q, p2, q2)); };
      const aday = [
        [p1, q1, "kavram_karisikligi", "Uç sayılar arada sayılmaz; iki sayının tam arasında kalan bir sayı isteniyor."],
        [p2, q2, "kavram_karisikligi", "Uç sayılar arada sayılmaz; iki sayının tam arasında kalan bir sayı isteniyor."],
        [p1 * q2 + p2 * q1, q1 * q2, "eksik_adim", "İki sayıyı topladın ama ortalama için 2'ye bölmeyi unuttun."],
        [p2 * q1 - p1 * q2, 2 * q1 * q2, "islem_hatasi", "Ortalama için sayıları toplamalısın; sen farkın yarısını buldun."],
        // Hatalı yol sonuna kadar: paylar ve paydalar ayrı toplanır, sonra ortalama için 2'ye bölünür.
        [p1 + p2, 2 * (q1 + q2), "islem_hatasi", "Payları ve paydaları ayrı ayrı topladın; önce paydaları eşitle."],
      ];
      const yanlislar = aday.filter(([p, q]) => disarida(p, q)).map(([p, q, h, a]) => y(kesirYaz(p, q), h, a, p / q));
      const dogru = kesirYaz(ortP, ortQ);
      // Adım başına tek işlem: paydalar farklıysa önce eşitlenir (genişletilmiş kesir sadeleştirilmeden yazılır).
      const ham = (p, q) => (p < 0 ? EKSI : "") + Math.abs(p) + "/" + q;
      const esitle = q1 !== q2 ? "Paydaları eşitle: " + x + " = " + ham(p1 * q2, q1 * q2) + ", " + z + " = " + ham(p2 * q1, q1 * q2) + "." : null;
      const topla = x + " + " + (p2 < 0 ? "(" + z + ")" : z) + " = " + kesirYaz(p1 * q2 + p2 * q1, q1 * q2) + ".";
      return {
        params: { p1, q1, p2, q2 }, baglam: null,
        kok: x + " ile " + z + " sayılarının arasında bulunan rasyonel sayı aşağıdakilerden hangisidir?",
        dogru, deger: ortP / ortQ, yanlislar,
        ipuclari: [
          "İki sayının ortalaması her zaman ikisinin arasındadır.",
          "Ortalama = (birinci sayı + ikinci sayı)/2.",
          esitle || "Önce topla: " + topla,
        ],
        cozum: [
          ...(esitle ? [esitle] : []),
          "Topla: " + topla,
          "Toplamı 2'ye böl: " + dogru + ".",
          "Ortalama, küçük sayıdan büyük ve büyük sayıdan küçük olduğu için " + dogru + " iki sayının arasındadır.",
        ].map((t, i) => i + 1 + ". " + t),
      };
    },
    kontrol({ p1, q1, p2, q2 }) {
      // Ortak paydayı en küçük ortak katla bul, payları genişlet, 2 ile çarpılmış paydada ortadaki payı al.
      let okek = q1; while (okek % q2 !== 0) okek += q1;
      const P = 2 * (p1 * (okek / q1)) + 2 * (p2 * (okek / q2)), Q = 4 * okek; // (2x + 2y) / 4
      if (!(P * q1 > 4 * okek * p1 && P * q2 < 4 * okek * p2)) return "ARADA DEĞİL";
      return kesirYaz(P, Q);
    },
  });

  // Karşıt örnek seçme: tek doğru, sayıları gerçekten değerlendirerek denetlenir.
  const rs = (p, q = 1) => { if (q < 0) { p = -p; q = -q; } const g = gcd(p, q) || 1; return { p: p / g, q: q / g }; };
  const kokS = n => ({ k: n });
  function hesap(op, a, b) {
    if ("k" in a || "k" in b) { // yalnız köklerin çarpımı
      const n = a.k * b.k; return kareMi(n) ? rs(Math.sqrt(n)) : kokS(n);
    }
    if (op === "−") return rs(a.p * b.q - b.p * a.q, a.q * b.q);
    if (op === "+") return rs(a.p * b.q + b.p * a.q, a.q * b.q);
    if (op === "·") return rs(a.p * b.p, a.q * b.q);
    return rs(a.p * b.q, a.q * b.p); // ÷
  }
  const uyeMi = (S, v) => (S === "Q′" ? "k" in v : !("k" in v) && v.q === 1 && (S === "Z" || v.p >= 0));
  const sYaz = (v, parantez) => {
    if ("k" in v) return "√" + v.k;
    const m = kesirYaz(v.p, v.q);
    return parantez && (v.p < 0 || v.q !== 1) ? "(" + m + ")" : m;
  };
  // S iç anahtar (N, Z, Q′); ekranda kitaptaki sembol (s.39, 54, 65).
  const SEMBOL = { N: "ℕ", Z: "ℤ", "Q′": "ℚ′" };
  const onermeYaz = o => sYaz(o.x, true) + " " + o.op + " " + sYaz(o.y, true) + " = " + sYaz(hesap(o.op, o.x, o.y)) + " " + o.iddia + " " + SEMBOL[o.S];
  const vAnahtar = v => ("k" in v ? "k" + v.k : v.p + "/" + v.q);
  const onermeDeger = o => [vAnahtar(o.x), o.op, vAnahtar(o.y), o.iddia, o.S].join(" "); // önermenin yapısal kimliği
  const KUME_AD = { N: "Doğal sayılar kümesi (ℕ)", Z: "Tam sayılar kümesi (ℤ)", "Q′": "İrrasyonel sayılar kümesi (ℚ′)" };
  const OP_AD = { "−": "çıkarma", "÷": "bölme", "·": "çarpma" };

  kayit({
    id: "mat-u1-kapalilik-karsit", konu_id: "matematik-u1-k3", ogrenme_ciktisi: "9.1.3", zorluk: 2,
    kaynak: { kitap: KITAP, sayfa: "63-65" },
    gen(r) {
      const { rint, pick } = R();
      const durum = pick(r, ["N−", "Z÷", "N÷", "Q′·"]);
      const S = durum.slice(0, -1), op = durum.slice(-1);
      const o = (x, y2, iddia, opx) => ({ x, y: y2, op: opx || op, iddia, S });
      let dogruO, digerleri;
      if (durum === "N−") {
        const a = rint(r, 1, 6), b = a + rint(r, 1, 5);
        dogruO = o(rs(a), rs(b), "∉");
        digerleri = [
          [o(rs(b), rs(a), "∈"), "uyan_ornek_vermek", "Bu örnek önermeye uyuyor; karşıt örnekte sonuç kümenin dışında olmalı."],
          [o(rs(-a), rs(b), "∉"), "kavram_karisikligi", EKSI + a + " doğal sayı değil; seçilen iki sayı da kümeden olmalı."],
          [o(rs(b), rs(a), "∉"), "islem_hatasi", b + " − " + a + " = " + (b - a) + " bir doğal sayıdır; ∉ yanlış kullanıldı."],
          [o(rs(a), rs(b), "∈", "+"), "okuma_hatasi", "Önerme toplamayı değil çıkarmayı söylüyor."],
        ];
      } else if (S === "Z" || S === "N") {
        const b = rint(r, 2, 5), a = b * rint(r, 0, 2) + rint(r, 1, b - 1);
        dogruO = o(rs(a), rs(b), "∉");
        digerleri = [
          [o(rs(a * b), rs(b), "∈"), "uyan_ornek_vermek", "Bu örnek önermeye uyuyor; karşıt örnekte sonuç kümenin dışında olmalı."],
          [o(rs(a, b), rs(1), "∉"), "kavram_karisikligi", kesirYaz(a, b) + " bu kümenin elemanı değil; seçilen iki sayı da kümeden olmalı."],
          [o(rs(a * b), rs(b), "∉"), "islem_hatasi", (a * b) + " ÷ " + b + " = " + a + " kümenin elemanıdır; ∉ yanlış kullanıldı."],
          [o(rs(a), rs(b), "∈", "·"), "okuma_hatasi", "Önerme çarpmayı değil bölmeyi söylüyor."],
        ];
      } else {
        const p = pick(r, [2, 3, 5]), k = rint(r, 2, 3), q = pick(r, [2, 3, 5, 6, 7].filter(v => v !== p && !kareMi(v * p)));
        dogruO = o(kokS(p), kokS(p * k * k), "∉");
        digerleri = [
          [o(kokS(p), kokS(q), "∈"), "uyan_ornek_vermek", "Bu örnek önermeye uyuyor; karşıt örnekte sonuç kümenin dışında olmalı."],
          [o(rs(p), rs(p + 1), "∉"), "kavram_karisikligi", p + " ve " + (p + 1) + " irrasyonel değil; seçilen iki sayı da ℚ′ kümesinden olmalı."],
          [o(kokS(p), kokS(p * k * k), "∈"), "irrasyonel_carpim", (p * k) + " rasyonel bir sayıdır; ℚ′ kümesinin elemanı değildir."],
        ];
      }
      const yanlislar = digerleri.map(([x, h, a]) => y(onermeYaz(x), h, a, onermeDeger(x)));
      const tum = [dogruO, ...digerleri.map(d => d[0])];
      const sonuc = sYaz(hesap(op, dogruO.x, dogruO.y));
      return {
        params: { S, op, onermeler: tum }, baglam: null,
        kok: "“" + KUME_AD[S] + " " + OP_AD[op] + " işlemine göre kapalıdır.” önermesinin yanlış olduğunu gösteren karşıt örnek aşağıdakilerden hangisidir?",
        dogru: onermeYaz(dogruO), deger: onermeDeger(dogruO), yanlislar,
        ipuclari: [
          "Karşıt örnek, önermeye uymayan tek bir örnektir.",
          "İki sayı da kümeden seçilmeli, ama işlemin sonucu kümenin dışında (∉) çıkmalı.",
          "Her seçenekte önce iki sayının " + SEMBOL[S] + " kümesinde olup olmadığına bak.",
        ],
        cozum: [
          "1. Karşıt örnekte iki sayı da " + SEMBOL[S] + " kümesinden seçilir: " + sYaz(dogruO.x) + " ve " + sYaz(dogruO.y) + ".",
          "2. İşlem: " + sYaz(dogruO.x, true) + " " + op + " " + sYaz(dogruO.y, true) + " = " + sonuc + ".",
          "3. " + sonuc + " ∉ " + SEMBOL[S] + " olduğundan küme bu işleme göre kapalı değildir.",
        ],
      };
    },
    kontrol({ S, op, onermeler }) {
      const gecerli = onermeler.filter(o => o.op === op && o.iddia === "∉" && uyeMi(S, o.x) && uyeMi(S, o.y) && !uyeMi(S, hesap(o.op, o.x, o.y)));
      return gecerli.length === 1 ? onermeYaz(gecerli[0]) : "GEÇERLİ ÖRNEK SAYISI " + gecerli.length;
    },
  });

  // =====================================================================
  // 9.1.4 · Özdeşlikler (matematik-u1-k4) — yalnız (a+b)², (a−b)², a²−b²
  // =====================================================================

  kayit({
    id: "mat-u1-ozdeslik-hesap", konu_id: "matematik-u1-k4", ogrenme_ciktisi: "9.1.4", zorluk: 1,
    kaynak: { kitap: KITAP, sayfa: "74-79" },
    gen(r) {
      const { rint, pick } = R();
      const tip = pick(r, ["toplam_kare", "fark_kare", "carpim", "kareler_farki", "kareler_farki_ondalik"]);
      const t = pick(r, [20, 30, 40, 50, 60, 70, 80, 90, 100]), b = rint(r, 1, 3);
      const t2 = t * t, iki = 2 * t * b, b2 = b * b;
      let params, kok, baglam = null, dogru, deger, yanlislar, ipuclari, cozum;
      const yd = (v, h, a) => y(sayiYaz(v), h, a, v);
      if (tip === "toplam_kare" || tip === "fark_kare") {
        const art = tip === "toplam_kare", s = art ? 1 : -1, x = t + s * b, isr = art ? " + " : " − ";
        params = { tip: "kare", x, y: 0 };
        deger = t2 + s * iki + b2;
        dogru = tam(deger);
        kok = x + "² işleminin sonucu aşağıdakilerden hangisidir?";
        yanlislar = [
          yd(t2 + s * b2, "kare_dagitma", "(a " + (art ? "+" : "−") + " b)² açılımında ortadaki 2ab terimini unuttun."),
          yd(t2 + s * t * b + b2, "islem_hatasi", "Ortadaki terim ab değil 2ab'dir: 2 · " + t + " · " + b + "."),
          yd(t2 + s * iki, "eksik_adim", "Son terim b² = " + b2 + " eklenmedi."),
        ];
        if (!art) yanlislar.push(yd(t2 - iki - b2, "isaret_hatasi", "(a − b)² açılımında son terim b² her zaman artıdır."));
        if (!art) yanlislar.push(yd(t2 + iki + b2, "fark_karesi_isaret", "(a − b)² açılımında ortadaki terim −2ab'dir."));
        ipuclari = [
          x + " sayısını 10'un bir katı ile küçük bir sayının " + (art ? "toplamı" : "farkı") + " olarak yaz.",
          "(a " + (art ? "+" : "−") + " b)² = a² " + (art ? "+" : "−") + " 2ab + b².",
          x + " = " + t + isr + b + "; a = " + t + ", b = " + b + ".",
        ];
        cozum = [
          "1. " + x + "² = (" + t + isr + b + ")².",
          "2. (" + t + isr + b + ")² = " + t + "² " + (art ? "+" : "−") + " 2 · " + t + " · " + b + " + " + b + "².",
          "3. = " + tam(t2) + (art ? " + " : " − ") + tam(iki) + " + " + b2 + ".",
          "4. = " + dogru + ".",
        ];
      } else if (tip === "carpim") {
        const b4 = rint(r, 1, 4), x = t + b4, z = t - b4;
        params = { tip: "carpim", x, y: z };
        deger = t2 - b4 * b4;
        dogru = tam(deger);
        kok = x + " · " + z + " işleminin sonucu aşağıdakilerden hangisidir?";
        yanlislar = [
          yd(t2 + b4 * b4, "isaret_hatasi", "(a + b)(a − b) = a² − b²; b² çıkarılır, eklenmez."),
          yd(t2, "eksik_adim", "b² = " + b4 * b4 + " çıkarılmadı."),
          yd((t - b4) * (t - b4), "kare_farki_karistirma", "a² − b² ile (a − b)² aynı değildir."),
        ];
        // b = 2'de 2b = b²; "karesini almadın" çeldiricisi doğruya eşit çıkar.
        if (b4 !== 2) yanlislar.push(yd(t2 - 2 * b4, "islem_hatasi", "b'nin karesini almadın: b² = " + b4 + "² = " + b4 * b4 + "."));
        ipuclari = [
          "İki sayı da " + t + " sayısına eşit uzaklıkta mı? Bak.",
          "(a + b) · (a − b) = a² − b² özdeşliğini kullan.",
          x + " = " + t + " + " + b4 + " ve " + z + " = " + t + " − " + b4 + ".",
        ];
        cozum = [
          "1. " + x + " · " + z + " = (" + t + " + " + b4 + ") · (" + t + " − " + b4 + ").",
          "2. = " + t + "² − " + b4 + "² = " + tam(t2) + " − " + b4 * b4 + ".",
          "3. = " + dogru + ".",
        ];
      } else {
        let x, z;
        if (tip === "kareler_farki") { x = t + b; z = t - b; }
        else { x = rint(r, 8, 14) + 0.5; z = x - rint(r, 2, 6); }
        const fark = x - z, top = x + z;
        params = { tip: "kareler_farki", x, y: z };
        deger = fark * top;
        dogru = sayiYaz(deger);
        kok = sayiYaz(x) + "² − " + sayiYaz(z) + "² işleminin sonucu aşağıdakilerden hangisidir?";
        if (tip === "kareler_farki_ondalik") {
          baglam = "Kenarı " + sayiYaz(x) + " m olan kare bir okul bahçesinin ortasında kenarı " + sayiYaz(z) + " m olan kare bir havuz var. Havuzun dışındaki alana çim ekilecek.";
          kok = "Çim ekilecek alan kaç m²'dir?";
        }
        yanlislar = [
          yd(fark * fark, "kare_farki_karistirma", "a² − b² ile (a − b)² aynı değildir; a² − b² = (a − b)(a + b)."),
          yd(top, "eksik_adim", "(a + b)'yi buldun ama (a − b) = " + sayiYaz(fark) + " ile çarpmayı unuttun."),
          yd(fark, "eksik_adim", "(a − b)'yi buldun ama (a + b) = " + sayiYaz(top) + " ile çarpmayı unuttun."),
          yd(top * top, "kare_farki_karistirma", "a² − b², (a + b)² değildir."),
        ];
        ipuclari = [
          baglam ? "Çim, bahçeden havuz çıkınca kalan yere ekilecek. Alanları nasıl yazarsın?" : "İki karenin farkı var; karelerini tek tek almak zorunda değilsin.",
          "a² − b² = (a − b) · (a + b).",
          "a − b = " + sayiYaz(fark) + " ve a + b = " + sayiYaz(top) + ".",
        ];
        // Bağlamlı soruda önce model kurulur: çim alanı = bahçe − havuz.
        cozum = [
          ...(baglam ? ["Çim alanı = bahçenin alanı − havuzun alanı = " + sayiYaz(x) + "² − " + sayiYaz(z) + "²."] : []),
          sayiYaz(x) + "² − " + sayiYaz(z) + "² = (" + sayiYaz(x) + " − " + sayiYaz(z) + ") · (" + sayiYaz(x) + " + " + sayiYaz(z) + ").",
          "= " + sayiYaz(fark) + " · " + sayiYaz(top) + " = " + dogru + (baglam ? " m²." : "."),
        ].map((t, i) => i + 1 + ". " + t);
      }
      return { params, baglam, kok, dogru, deger, yanlislar, ipuclari, cozum };
    },
    kontrol({ tip, x, y: z }) {
      // Özdeşlik kullanmadan doğrudan çarpma (yarımlar ikinin kuvveti olduğundan kayan noktada kesin).
      const v = tip === "kare" ? x * x : tip === "carpim" ? x * z : x * x - z * z;
      return sayiYaz(v);
    },
  });

  kayit({
    id: "mat-u1-alan-modeli", konu_id: "matematik-u1-k4", ogrenme_ciktisi: "9.1.4", zorluk: 3,
    kaynak: { kitap: KITAP, sayfa: "74-78" },
    gen(r) {
      const { rint } = R();
      const k = rint(r, 2, 9), f = r() < 0.6 ? 2 : 1; // f = 2: ortak sınav 7. soru (sarı x · 2x); f = 1: sarı kare
      const L = 2 * f * k, D = f * k * k;
      const baglam = f === 2
        ? "Mavi bir kart ve sarı bir kart var; ikisi de dikdörtgen. Mavi kartın kenarları x cm ve " + L + " cm. Sarı kartın kenarları x cm ve 2x cm. Mavi kartın alanı, sarı kartın alanından " + D + " cm² fazladır."
        : "Mavi kart, kenar uzunlukları x cm ve " + L + " cm olan bir dikdörtgendir. Sarı kart ise bir kenarı x cm olan bir karedir. Mavi kartın alanı, sarı kartın alanından " + D + " cm² fazladır.";
      const sari = f === 2 ? "2x²" : "x²";
      const yanlislar = [
        y(tam(-k), "carpim_sifir_isaret", "(x − " + k + ")² = 0 ise x − " + k + " = 0, yani x = " + k + "; uzunluk negatif olamaz.", -k),
        y(tam(2 * k), "eksik_adim", "Alanlar arasındaki " + D + " cm² farkı denkleme katmadın.", 2 * k),
        y(sayiYaz(k / 2), "islem_hatasi", "x² terimini görmeden " + L + "x = " + D + " gibi çözdün; sarı kartın alanı da x içerir.", k / 2),
      ];
      return {
        params: { L, D, f }, baglam,
        kok: "Buna göre x kaç santimetredir?",
        dogru: tam(k), deger: k, yanlislar,
        ipuclari: [
          "Önce iki kartın alanını x ile yaz: mavi " + L + "x, sarı " + sari + ".",
          "Mavi = sarı + " + D + " denklemini kur, hepsini bir tarafa topla. Bir özdeşliğe benziyor mu?",
          (f === 2 ? "Her terimi 2'ye böl: " : "") + "x² − " + 2 * k + "x + " + k * k + " = 0. Sol tarafı (x − b)² biçiminde yazmayı dene.",
        ],
        cozum: [
          "1. Mavi kartın alanı " + L + "x, sarı kartın alanı " + sari + " cm².",
          "2. " + L + "x = " + sari + " + " + D + " ⇒ " + sari + " − " + L + "x + " + D + " = 0.",
          "3. " + (f === 2 ? "2'ye bölünür: " : "") + "x² − " + 2 * k + "x + " + k * k + " = 0, bu (x − " + k + ")² açılımıdır.",
          "4. (x − " + k + ")² = 0 ⇒ x − " + k + " = 0 ⇒ x = " + k + " cm.",
        ],
      };
    },
    kontrol({ L, D, f }) {
      for (let x = 1; x <= 100; x++) if (L * x === f * x * x + D) return tam(x);
      return "ÇÖZÜM YOK";
    },
  });
  // =====================================================================
  // 9.2.1 · Doğrusal fonksiyonlar (matematik-u2-k1)
  // =====================================================================

  // ax + b yazımı: katsayı 1/−1 gizlenir, b = 0 yazılmaz, a = 0 ise yalnız b.
  const dogruYaz = (a, b) => {
    if (a === 0) return tam(b);
    const ax = (a === 1 ? "" : a === -1 ? EKSI : tam(a)) + "x";
    return b === 0 ? ax : ax + (b > 0 ? " + " : " − ") + Math.abs(b);
  };
  // Doğruya değerce eşit yanlışı eler (uretecDene onu hata sayar); kalan farklı değerleri sayar.
  const esitD = (u, v) => (typeof u === "number" && typeof v === "number" ? Math.abs(u - v) <= 1e-9 * Math.max(1, Math.abs(u), Math.abs(v)) : u === v);
  const ayikla = (ys, d) => ys.filter(v => !esitD(v.deger, d));
  const tekilSay = ys => ys.filter((v, i) => ys.findIndex(w => esitD(w.deger, v.deger)) === i).length;
  // Bağlamlı soruda okunaklı şık: tam ya da tek ondalık basamaklı.
  const okunakli = v => Number.isFinite(v) && Math.abs(v * 10 - Math.round(v * 10)) < 1e-9;
  // Yönelme eki (15'e, 20'ye, 30'a): sayının okunuşundaki son sözcüğe göre (bir, iki ... on, yirmi ... yüz, bin, milyon).
  const BIRLER_EK = ["", "e", "ye", "e", "e", "e", "ya", "ye", "e", "a"]; // bir iki üç dört beş altı yedi sekiz dokuz
  const ONLAR_EK = ["", "a", "ye", "a", "a", "ye", "a", "e", "e", "a"]; // on yirmi otuz kırk elli altmış yetmiş seksen doksan
  const yonelme = x => {
    const s = sayiYaz(x), virgul = s.indexOf(",");
    const n = virgul < 0 ? Math.abs(Math.round(x)) : Number(s.slice(virgul + 1)); // 2,5 "iki virgül beş" diye okunur
    const ek = n === 0 ? "a" // sıfır
      : n % 10 ? BIRLER_EK[n % 10]
      : n % 100 ? ONLAR_EK[(n % 100) / 10]
      : n % 1000 ? "e" // yüz
      : n % 1e6 ? "e" // bin
      : "a"; // milyon, milyar
    return s + "'" + ek;
  };
  G.B9.ekler = { yonelme }; // birim testi için

  kayit({
    id: "mat-u2-deger-hesap", konu_id: "matematik-u2-k1", ogrenme_ciktisi: "9.2.1", zorluk: 1,
    kaynak: { kitap: KITAP, sayfa: "102-106, 115" },
    gen(r) {
      const { pick } = R();
      for (;;) {
        const a = pick(r, [-5, -4, -3, -2, -1, 2, 3, 4, 5, 6]);
        const b = r() < 0.15 ? 0 : pick(r, [-9, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 7, 8, 10]);
        const ters = r() < 0.45;
        const gx = "g(x) = " + dogruYaz(a, b);
        if (!ters) {
          // Sınır: c negatif (eksi · eksi), b = 0 (g(x) = ax). c = 0 yok: 3. ipucu cevabı verirdi.
          const c = pick(r, [-4, -3, -2, -1, 1, 2, 3, 4, 5]);
          if (Math.abs(c) === Math.abs(a)) continue; // x ile katsayı aynı sayı olunca şıklar rastlantıyla çakışıyor
          const d = a * c + b;
          let ys = [
            // İşaret hatası yalnız negatif çarpan varsa gerçek bir hatadır.
            ...(a < 0 || c < 0 ? [y(tam(-a * c + b), "isaret_hatasi", "İşaretli çarpımı yeniden yap: " + tam(a) + " · " + pt(c) + " = " + tam(a * c) + ".", -a * c + b)] : []),
            y(tam(a + c + b), "islem_hatasi", tam(a) + "x, " + tam(a) + " ile x'in çarpımıdır; toplamı değil.", a + c + b),
            y(tam(c + b), "kavram_karisikligi", "x'in katsayısı " + tam(a) + "; x yerine " + tam(c) + " yazınca onu da çarpmalısın.", c + b),
          ];
          if (b !== 0) ys.push(
            y(tam(a * c), "eksik_adim", "Çarpımı buldun ama sabit terim " + tam(b) + " eklenmedi.", a * c),
            y(tam(a * c - b), "isaret_hatasi", "Sabit terimi işaretiyle ekle: " + (b > 0 ? "+ " + b : "− " + -b) + ".", a * c - b),
          );
          ys = ayikla(ys, d);
          if (tekilSay(ys) < 3) continue;
          return {
            params: { mod: "deger", a, b, c }, baglam: null,
            kok: "g: ℝ → ℝ, " + gx + " olduğuna göre g(" + tam(c) + ") kaçtır?",
            dogru: tam(d), deger: d, yanlislar: ys,
            ipuclari: [
              "g(" + tam(c) + ") için x gördüğün yere " + tam(c) + " yaz.",
              "Önce çarpma, sonra toplama yapılır" + (b === 0 ? "; burada sabit terim yok." : "."),
              b === 0 ? "Çarpımın işaretine dikkat: işaretler aynıysa sonuç artı, farklıysa eksidir." : "İlk adım: " + tam(a) + " · " + pt(c) + " = " + tam(a * c) + ".",
            ],
            cozum: [
              "1. x yerine " + tam(c) + " yazılır: g(" + tam(c) + ") = " + tam(a) + " · " + pt(c) + (b === 0 ? "" : (b > 0 ? " + " : " − ") + Math.abs(b)) + ".",
              "2. Çarpma: " + tam(a) + " · " + pt(c) + " = " + tam(a * c) + ".",
              ...(b === 0 ? [] : ["3. Toplama: " + tam(a * c) + (b > 0 ? " + " : " − ") + Math.abs(b) + " = " + tam(d) + "."]),
              (b === 0 ? "3" : "4") + ". Sonuç: g(" + tam(c) + ") = " + tam(d) + ".",
            ],
          };
        }
        // g(x) = d verilir, x istenir. Sınır: x0 = 0 (d = b), a = −1, b = 0, kesirli yanlış yollar.
        const x0 = pick(r, [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]);
        const d = a * x0 + b;
        const kd = (p, q) => y(kesirYaz(p, q), null, null, p / q);
        const ek = (o, h, ac) => Object.assign(o, { hata_turu: h, aciklama: ac });
        let ys = [
          // İşaret hatası yalnız bölen ya da bölünen negatifse gerçek bir hatadır.
          ...(a < 0 || d - b < 0 ? [ek(kd(-(d - b), a), "isaret_hatasi", tam(d - b) + " : " + pt(a) + " işleminde işaretler " + ((a < 0) === (d - b < 0) ? "aynı; sonuç artı" : "farklı; sonuç eksi") + " çıkar.")] : []),
          ek(kd(d - b, 1), "eksik_adim", "x'in katsayısı " + tam(a) + " ile bölme adımı eksik kalmış."),
          ek(kd(a * d + b, 1), "okuma_hatasi", "g(" + tam(d) + ") değerini hesapladın; soru g(x) = " + tam(d) + " olan x'i istiyor."),
        ];
        if (b !== 0) ys.push(
          ek(kd(d + b, a), "isaret_hatasi", "Sabit terim karşıya işareti değişerek geçer: " + tam(d) + (b > 0 ? " − " + b : " + " + -b) + "."),
          ek(kd(d - a * b, a), "islem_hatasi", "İki tarafı " + yonelme(a) + " bölerken sabit terim de bölünür; yalnız " + tam(d) + " bölünmüş.")
        );
        ys = ayikla(ys, x0);
        if (tekilSay(ys) < 3) continue;
        const sag = d - b;
        return {
          params: { mod: "ters", a, b, d }, baglam: null,
          kok: "g: ℝ → ℝ, " + gx + " olduğuna göre g(x) = " + tam(d) + " eşitliğini sağlayan x değeri kaçtır?",
          dogru: tam(x0), deger: x0, yanlislar: ys,
          ipuclari: [
            "g(x) yerine " + tam(d) + " yaz; bir denklem elde edersin.",
            b === 0 ? "Her iki tarafı x'in katsayısı " + tam(a) + " ile böl." : "Sabit terimi işaretini değiştirerek karşıya geçir, sonra x'in katsayısına böl.",
            "İlk adım: " + dogruYaz(a, b) + " = " + tam(d) + ".",
          ],
          cozum: [
            "1. Denklem: " + dogruYaz(a, b) + " = " + tam(d) + ".",
            ...(b === 0 ? [] : ["2. Sabit terim karşıya geçer: " + dogruYaz(a, 0) + " = " + tam(d) + (b > 0 ? " − " + b : " + " + -b) + " = " + tam(sag) + "."]),
            (b === 0 ? "2" : "3") + ". " + tam(a) + " ile bölünür: x = " + tam(sag) + " : " + pt(a) + " = " + tam(x0) + ".",
            (b === 0 ? "3" : "4") + ". Kontrol: g(" + tam(x0) + ") = " + tam(d) + ".",
          ],
        };
      }
    },
    kontrol({ mod, a, b, c, d }) {
      if (mod === "deger") { // a'yı |c| kez ekleyerek/çıkararak
        let s = b; for (let i = 0; i < Math.abs(c); i++) s += c > 0 ? a : -a;
        return tam(s);
      }
      for (let x = -50; x <= 50; x++) if (a * x + b === d) return tam(x);
      return "ÇÖZÜM YOK";
    },
  });

  kayit({
    id: "mat-u2-sifir-isaret", konu_id: "matematik-u2-k1", ogrenme_ciktisi: "9.2.1", zorluk: 2,
    kaynak: { kitap: KITAP, sayfa: "105-106, 115" },
    gen(r) {
      const { pick } = R();
      const yaz = (sag, kapali, nS) => (sag ? (kapali ? "[" : "(") + nS + ", ∞)" : "(" + EKSI + "∞, " + nS + (kapali ? "]" : ")"));
      const kanon = (sag, kapali, p, q) => (sag ? "S" : "L") + (kapali ? "k" : "a") + kesirYaz(p, q);
      for (;;) {
        const a = pick(r, [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);
        // Sınır: b = 0 (sıfır 0), sıfır kesirli (b, a'ya bölünmez), a < 0 (yön değişir).
        const b = r() < 0.15 ? 0 : pick(r, [-12, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]);
        const rel = pick(r, [">", "<", "≥", "≤"]);
        const pozIste = rel === ">" || rel === "≥", kapali = rel === "≥" || rel === "≤";
        const sag = (a > 0) === pozIste; // istenen işaret sıfırın sağında mı
        const nS = kesirYaz(-b, a);
        const dogruD = kanon(sag, kapali, -b, a);
        let ys = [
          y(yaz(!sag, kapali, nS), "esitsizlik_yonu", "x'in katsayısı " + tam(a) + (a < 0 ? " negatif; g azalandır" : " pozitif; g artandır") + ". " + (pozIste ? "Pozitif" : "Negatif") + " olduğu yan sıfırın " + (sag ? "sağıdır." : "soludur."), kanon(!sag, kapali, -b, a)),
          y(yaz(sag, !kapali, nS), "aralik_uc", kapali ? "\"Ya da sıfır\" istendi; g(" + nS + ") = 0 olduğundan x = " + nS + " aralığa girer." : "g(" + nS + ") = 0 olur; 0 ne pozitif ne negatiftir, " + nS + " dahil değildir.", kanon(sag, !kapali, -b, a)),
        ];
        if (b !== 0) {
          ys.push(y(yaz(sag, kapali, kesirYaz(b, a)), "carpim_sifir_isaret", "Sabit terim karşıya işareti değişerek geçer; sıfır " + nS + " olur.", kanon(sag, kapali, b, a)));
          if (Math.abs(a) !== 1) ys.push(y(yaz(sag, kapali, kesirYaz(-a, b)), "islem_hatasi", "Bölme ters yapılmış; " + dogruYaz(a, 0) + " = " + tam(-b) + " ise x = " + tam(-b) + " : " + pt(a) + ".", kanon(sag, kapali, -a, b)));
        } else {
          ys.push(y("(" + EKSI + "∞, ∞)", "kavram_karisikligi", dogruYaz(a, 0) + " her x için aynı işaretli değildir; x = 0'da işaret değiştirir.", "TUM"));
        }
        ys = ayikla(ys, dogruD);
        if (tekilSay(ys) < 3) continue;
        const ax = dogruYaz(a, 0);
        const ISARET_AD = { ">": "pozitif", "<": "negatif", "≥": "pozitif ya da sıfır", "≤": "negatif ya da sıfır" };
        return {
          params: { a, b, rel }, baglam: null,
          // Kitap dili (s.115): "pozitif olduğu aralık"; eşitsizlik çözme 9.2.3'ün konusu.
          kok: "g: ℝ → ℝ, g(x) = " + dogruYaz(a, b) + " olduğuna göre g fonksiyonunun " + ISARET_AD[rel] + " (g(x) " + rel + " 0) olduğu aralık aşağıdakilerden hangisidir?",
          dogru: yaz(sag, kapali, nS), deger: dogruD, yanlislar: ys,
          ipuclari: [
            "Önce fonksiyonun sıfırını bul: g(x) = 0 yap.",
            "Sıfırın bir yanında g pozitif, öbür yanında negatiftir. Hangi yanda pozitif olduğunu x'in katsayısının işareti söyler.",
            "İlk adım: " + dogruYaz(a, b) + " = 0" + (b === 0 ? "." : ", yani " + ax + " = " + tam(-b) + "."),
          ],
          cozum: [
            ...(b === 0
              ? ["Sıfır: " + ax + " = 0, yani x = 0."]
              : ["Sıfır: " + dogruYaz(a, b) + " = 0, yani " + ax + " = " + tam(-b) + ".",
                ...(a === 1 ? [] : ["x = " + tam(-b) + " : " + pt(a) + " = " + nS + "."])]),
            "x'in katsayısı " + tam(a) + (a > 0 ? " > 0; g artandır." : " < 0; g azalandır."),
            a > 0 ? "Artanda sıfırın solunda −, sağında + olur." : "Azalanda sıfırın solunda +, sağında − olur.",
            (pozIste ? "Pozitif" : "Negatif") + " istendi: " + (pozIste ? "+" : "−") + " olan yan, sıfırın " + (sag ? "sağı" : "solu") + ".",
            "g(" + nS + ") = 0.",
            kapali ? "\"Ya da sıfır\" istendi; " + nS + " dahil." : "0 " + (pozIste ? "pozitif" : "negatif") + " değil; " + nS + " dahil değil.",
            "Sonuç: " + yaz(sag, kapali, nS) + ".",
          ].map((t, i) => i + 1 + ". " + t),
        };
      }
    },
    kontrol({ a, b, rel }) {
      // Sıfırı 1/|a| adımlı ızgarada tamsayı eşitliğiyle bul, işareti sağdaki bir noktada değerlendir.
      const q = Math.abs(a);
      for (let k = -20 * q; k <= 20 * q; k++) {
        if (a * k + b * q !== 0) continue;
        const sagPoz = a * (k + 1) + b * q > 0;
        const poz = rel === ">" || rel === "≥", kapali = rel === "≥" || rel === "≤";
        const sag = sagPoz === poz, nS = kesirYaz(k, q);
        return sag ? (kapali ? "[" : "(") + nS + ", ∞)" : "(" + EKSI + "∞, " + nS + (kapali ? "]" : ")");
      }
      return "SIFIR YOK";
    },
  });

  kayit({
    id: "mat-u2-iki-nokta", konu_id: "matematik-u2-k1", ogrenme_ciktisi: "9.2.1", zorluk: 2,
    kaynak: { kitap: KITAP, sayfa: "109, 116-117" },
    gen(r) {
      const { pick, shuffle } = R();
      for (;;) {
        const a = pick(r, [-4, -3, -2, -1, 1, 2, 3, 4, 5]);
        const b = r() < 0.15 ? 0 : pick(r, [-9, -7, -5, -4, -3, -2, -1, 1, 2, 3, 4, 6, 8]);
        // Sınır: x1 = 0 (b doğrudan okunur), Δx = 1 (eğim = Δy), Δx > 1.
        const [x1, x2] = shuffle(r, [-2, -1, 0, 1, 2, 3, 4]).slice(0, 2).sort((u, v) => u - v);
        const y1 = a * x1 + b, y2 = a * x2 + b, dx = x2 - x1, dy = y2 - y1;
        const fy = (p, q) => "g(x) = " + dogruYaz(p, q);
        const yd = (p, q, h, ac) => y(fy(p, q), h, ac, p + "|" + q);
        let ys = [
          yd(-a, y1 + a * x1, "isaret_hatasi", "Eğimde farklar aynı sırayla alınır: (" + tam(y2) + " − " + pt(y1) + ") : (" + tam(x2) + " − " + pt(x1) + ")."),
        ];
        if (dx !== 1) ys.push(yd(dy, y1 - dy * x1, "eksik_adim", "y farkını x farkına (" + dx + ") bölme adımı eksik kalmış."));
        if (b !== 0) ys.push(
          yd(a, -b, "isaret_hatasi", "b'yi bulurken işareti koru: b = " + tam(y1) + " − " + pt(a * x1) + "."),
          yd(b, a, "egim_kesisim_karistirma", "Eğim x'in katsayısıdır, sabit terim değil; a ile b'nin yeri değişmiş."),
        );
        // x2 = 0 ise g(0) = b kökte hazır; bu çeldirici bariz olur.
        if (x1 !== 0 && x2 !== 0) ys.push(yd(a, y1, "kavram_karisikligi", "b, x = 0'daki değerdir; g(" + tam(x1) + ") değil."));
        ys = ayikla(ys, a + "|" + b);
        if (tekilSay(ys) < 3) continue;
        return {
          params: { x1, y1, x2, y2 }, baglam: null,
          kok: "Doğrusal g fonksiyonu için g(" + tam(x1) + ") = " + tam(y1) + " ve g(" + tam(x2) + ") = " + tam(y2) + " olduğuna göre g(x) aşağıdakilerden hangisidir?",
          dogru: fy(a, b), deger: a + "|" + b, yanlislar: ys,
          ipuclari: [
            "Doğrusal fonksiyon g(x) = ax + b biçimindedir; a ile b'yi bulacaksın.",
            "Eğim a = y farkı : x farkı. Sonra bir noktayı yerine koyup b'yi bul.",
            "İlk adım: y farkı, " + tam(y2) + " − " + pt(y1) + ".",
          ],
          cozum: [
            "y farkı: " + tam(y2) + " − " + pt(y1) + " = " + tam(dy) + ".",
            "x farkı: " + tam(x2) + " − " + pt(x1) + " = " + dx + ".",
            "Eğim: a = " + tam(dy) + " : " + dx + " = " + tam(a) + ".",
            ...(x1 === 0
              ? ["g(0) = b olduğundan b = " + tam(y1) + "."]
              : ["(" + tam(x1) + ", " + tam(y1) + ") noktasını yaz: " + tam(a) + " · " + pt(x1) + " + b = " + tam(y1) + ".",
                tam(a * x1) + " + b = " + tam(y1) + " olur.",
                "b = " + tam(y1) + " − " + pt(a * x1) + " = " + tam(b) + "."]),
            "g(x) = " + dogruYaz(a, b) + ".",
            "Kontrol: g(" + tam(x2) + ") = " + tam(a) + " · " + pt(x2) + (b ? (b > 0 ? " + " : " − ") + Math.abs(b) : "") + " = " + tam(y2) + ".",
          ].map((t, i) => i + 1 + ". " + t),
        };
      }
    },
    kontrol({ x1, y1, x2, y2 }) {
      const bul = [];
      for (let a = -30; a <= 30; a++) for (let b = -60; b <= 60; b++) if (a * x1 + b === y1 && a * x2 + b === y2) bul.push("g(x) = " + dogruYaz(a, b));
      return bul.length === 1 ? bul[0] : "ÇÖZÜM SAYISI " + bul.length;
    },
  });

  // Fonksiyon yazımları: std ax + b, onde b ± ax (sabit önde), kay a(x − r) + k, sabit.
  const fMetin = f => {
    if (f.bic === "sabit") return "g(x) = " + tam(f.b);
    if (f.bic === "std") return "g(x) = " + dogruYaz(f.a, f.b);
    if (f.bic === "onde") return "g(x) = " + tam(f.b) + (f.a > 0 ? " + " : " − ") + (Math.abs(f.a) === 1 ? "" : Math.abs(f.a)) + "x";
    const ic = "(x " + (f.r > 0 ? "− " + f.r : "+ " + -f.r) + ")";
    return "g(x) = " + (f.a === 1 ? "" : f.a === -1 ? EKSI : tam(f.a)) + ic + (f.k ? (f.k > 0 ? " + " : " − ") + Math.abs(f.k) : "");
  };
  const fDeger = (f, x) => (f.bic === "sabit" ? f.b : f.bic === "kay" ? f.a * (x - f.r) + f.k : f.b + f.a * x);
  const TUR_AD = { artan: "artandır", azalan: "azalandır", sabit: "sabit fonksiyondur" };
  const KISA = { artan: "artandır", azalan: "azalandır", sabit: "sabittir" };
  // Yer adı + bulunma eki (ses uyumu elle).
  const YER_DE = ["Gölcük'te", "İzmit'te", "Karamürsel'de", "Değirmendere'de", "Gebze'de", "Derince'de", "Kartepe'de", "Başiskele'de"];

  kayit({
    id: "mat-u2-artan-azalan", konu_id: "matematik-u2-k1", ogrenme_ciktisi: "9.2.1", zorluk: 1,
    kaynak: { kitap: KITAP, sayfa: "100, 110, 115" },
    gen(r) {
      const { pick, rint, shuffle } = R();
      const tur = pick(r, ["artan", "azalan", "azalan", "artan", "sabit"]);
      const m = () => rint(r, 2, 5), n = () => rint(r, 2, 9);
      const katsayi = f => (f.bic === "sabit" ? 0 : f.a);
      const acin = f => (f.bic === "kay" ? "parantezi açınca " + dogruYaz(f.a, fDeger(f, 0)) + " olur; " : "");
      const egimYaz = f => acin(f) + "x'in katsayısı " + tam(katsayi(f));
      let dogruF, tuzak;
      for (;;) {
        if (tur === "sabit") {
          // Sınır: g(x) = 0 da sabit fonksiyondur.
          const c = r() < 0.15 ? 0 : pick(r, [-6, -4, -3, -2, 2, 3, 5, 7, 8]), c2 = n();
          dogruF = { bic: "sabit", b: c };
          tuzak = [
            [{ bic: "std", a: c2, b: 0 }, "kavram_karisikligi", "Bu fonksiyonda x var ve katsayısı " + c2 + "; sabit değil, artandır."],
            [{ bic: "std", a: 1, b: c2 }, "kavram_karisikligi", "Sabit terim olması yetmez; x'in katsayısı 1, fonksiyon artandır."],
            [{ bic: "onde", a: -1, b: c2 }, "kavram_karisikligi", "x'in katsayısı " + EKSI + "1; fonksiyon azalandır, sabit değildir."],
            [{ bic: "std", a: -c2, b: 0 }, "kavram_karisikligi", "x'in katsayısı " + tam(-c2) + "; sabit fonksiyonda x'in katsayısı 0'dır."],
          ];
        } else {
          const s = tur === "artan" ? 1 : -1;
          const bic = pick(r, ["std", "onde", "kay"]);
          const a = s * m(), bb = bic === "onde" ? -s * n() : pick(r, [-7, -5, -3, 0, 2, 4, 6]), rr = pick(r, [-3, -2, -1, 1, 2, 4]);
          dogruF = bic === "kay" ? { bic, a, r: rr, k: pick(r, [-4, -1, 0, 3, 5]) } : { bic, a, b: bic === "onde" && bb === 0 ? -s * 3 : bb };
          // Tuzaklar istenen türün tersindedir; her biri gerçek bir okuma hatası.
          tuzak = [
            [{ bic: "onde", a: -s * m(), b: s * n() }, "isaret_hatasi", "Baştaki sayı sabit terimdir; x'in katsayısının işaretine bak."],
            [{ bic: "std", a: -s * m(), b: s * n() }, "egim_kesisim_karistirma", "Artan ya da azalan olmayı sabit terim değil, x'in katsayısı belirler."],
            [{ bic: "sabit", b: s * n() }, "kavram_karisikligi", "Sabit fonksiyon ne artan ne azalandır."],
            (kr => [{ bic: "kay", a: -s * m(), r: kr, k: s * n() }, "kavram_karisikligi",
              "(x " + (kr > 0 ? "− " + kr : "+ " + -kr) + "): grafik " + Math.abs(kr) + " birim " + (kr > 0 ? "sağa" : "sola") + " kayar. Kayma artanlığı değiştirmez."])(s * pick(r, [1, 2, 3, 4])),
          ];
        }
        tuzak = shuffle(r, tuzak).slice(0, 3); // şıkta görünen üç tuzak; çözüm hepsini tek tek açıklar
        const anahtarlar = [dogruF, ...tuzak.map(t => t[0])].map(f => katsayi(f) + "|" + fDeger(f, 0));
        if (new Set(anahtarlar).size === anahtarlar.length) break;
      }
      const kanon = f => katsayi(f) + "|" + fDeger(f, 0);
      const yanlislar = tuzak.map(([f, h, ac]) => y(fMetin(f), h, (tur === "sabit" ? "" : egimYaz(f).replace(/^p/, "P") + ". ") + ac, kanon(f)));
      const tumF = [dogruF, ...tuzak.map(t => t[0])];
      const kural = f => (katsayi(f) > 0 ? "artan" : katsayi(f) < 0 ? "azalan" : "sabit");
      return {
        params: { tur, fonks: tumF }, baglam: null,
        kok: "Aşağıdaki doğrusal fonksiyonlardan hangisi " + TUR_AD[tur] + "?",
        dogru: fMetin(dogruF), deger: kanon(dogruF), yanlislar,
        ipuclari: [
          "Her fonksiyonu ax + b biçiminde düşün; x'in katsayısı a'yı bul.",
          "a > 0 ise artan, a < 0 ise azalan, a = 0 ise sabit fonksiyondur.",
          "Şıklarda x'in katsayısını işaretiyle yaz; sabit terime ve parantez içindeki sayıya bakma.",
        ],
        cozum: [
          ...tumF.map(f => fMetin(f) + ": " + egimYaz(f) + "; fonksiyon " + KISA[kural(f)] + "."),
          "Sonuç: " + fMetin(dogruF) + " " + TUR_AD[tur] + ".",
        ].map((t, i) => i + 1 + ". " + t),
      };
    },
    kontrol({ tur, fonks }) {
      // Kuralı kullanmadan: x = 0 ve x = 1'deki değerleri karşılaştır.
      const uyan = fonks.filter(f => {
        const fark = fDeger(f, 1) - fDeger(f, 0);
        return tur === "artan" ? fark > 0 : tur === "azalan" ? fark < 0 : fark === 0 && fDeger(f, 7) === fDeger(f, -3);
      });
      return uyan.length === 1 ? fMetin(uyan[0]) : "UYAN SAYISI " + uyan.length;
    },
  });

  kayit({
    id: "mat-u2-baglam-model", konu_id: "matematik-u2-k1", ogrenme_ciktisi: "9.2.1", zorluk: 3,
    kaynak: { kitap: KITAP, sayfa: "105-106, 109, 117" },
    gen(r) {
      const { pick, rint } = R();
      const mod = pick(r, ["taksi_ucret", "taksi_km", "bos_x", "bos_y", "dolum_x"]);
      const yer = pick(r, YER_DE);
      const sy = v => sayiYaz(v);
      for (;;) {
        let params, baglam, kok, d, ys, ipuclari, cozum;
        const yv = (v, h, ac) => y(sy(v), h, ac, v);
        if (mod.startsWith("taksi")) {
          // 2026 için makul: açılış 40–60 TL, km 30–45 TL.
          const A = pick(r, [40, 45, 50, 55, 60]), k = pick(r, [30, 35, 40, 45]), x = rint(r, 3, 15), U = A + k * x;
          baglam = yer + " bir taksinin açılış ücreti " + A + " TL, kilometre başına ücreti " + k + " TL'dir.";
          const model = "u(x) = " + k + "x + " + A;
          if (mod === "taksi_ucret") {
            params = { mod, A, k, x };
            kok = "Buna göre " + x + " km yol giden bir yolcu kaç TL öder?";
            d = U;
            ys = [
              yv(k * x, "eksik_adim", "Kilometre ücretini buldun ama " + A + " TL açılış ücretini eklemedin."),
              yv(A * x + k, "kavram_karisikligi", "Açılış ücreti bir kez, kilometre ücreti her kilometre için ödenir."),
              yv((A + k) * x, "islem_hatasi", "Açılış ücreti her kilometrede değil, yalnız bir kez eklenir."),
            ];
            ipuclari = [
              "Ücret iki parçadan oluşur: bir kez ödenen açılış ücreti ve her kilometre için ödenen ücret.",
              "Model: u(x) = (km ücreti) · x + (açılış ücreti).",
              "İlk adım: km ücreti " + k + " TL'yi " + x + " km ile çarp.",
            ];
            cozum = ["Model: " + model + ".", "Kilometre ücreti: " + k + " · " + x + " = " + k * x + " TL.", "Açılış eklenir: " + k * x + " + " + A + " = " + U + " TL."];
          } else {
            params = { mod, A, k, U };
            kok = "Buna göre " + U + " TL ödeyen bir yolcu kaç km yol gitmiştir?";
            d = x;
            ys = [
              yv((U + A) / k, "isaret_hatasi", "Açılış ücretini toplamdan çıkarmalısın, eklememelisin."),
              yv(U / k, "eksik_adim", "Önce " + A + " TL açılış ücretini toplamdan çıkar."),
              yv(U - A, "eksik_adim", "Kalan " + (U - A) + " TL'yi kilometre ücretine bölme adımı eksik kalmış."),
              yv((U - k) / A, "kavram_karisikligi", "Açılış ücreti ile kilometre ücretinin yeri değişmiş."),
            ].filter(o => okunakli(o.deger));
            ipuclari = [
              "Ödenen ücret, açılış ücreti ile kilometre ücretlerinin toplamıdır.",
              "Model u(x) = " + k + "x + " + A + "; u(x) = " + U + " denklemini çöz.",
              "İlk adım: " + k + "x = " + U + " − " + A + ".",
            ];
            cozum = ["Model: " + model + ".", k + "x + " + A + " = " + U + " ⇒ " + k + "x = " + (U - A) + ".", "x = " + (U - A) + " : " + k + " = " + x + " km."];
          }
        } else if (mod.startsWith("bos")) {
          const cift = [[500, 10], [600, 10], [600, 15], [600, 20], [800, 10], [800, 20], [900, 15], [1000, 20], [1000, 25], [1200, 15], [1200, 20]];
          const [V, rr] = pick(r, cift), T = V / rr;
          baglam = yer + " bir evin çatısındaki depoda " + V + " litre su var. Musluk açılınca depodan dakikada " + rr + " litre su akıyor.";
          const model = "d(x) = " + V + " − " + rr + "x";
          if (mod === "bos_y") {
            const x = rint(r, 2, T - 2);
            params = { mod, V, rr, x };
            kok = "Buna göre musluk açıldıktan " + x + " dakika sonra depoda kaç litre su kalır?";
            d = V - rr * x;
            ys = [
              yv(V + rr * x, "isaret_hatasi", "Depo boşalıyor; akan su eklenmez, çıkarılır."),
              yv(rr * x, "okuma_hatasi", "Akan suyu buldun; soru depoda kalan suyu soruyor."),
              yv(V - x, "eksik_adim", "Dakika sayısını dakikada akan " + rr + " litre ile çarpma adımı eksik kalmış."),
            ];
            ipuclari = [
              "Depodaki su her dakika aynı miktarda azalıyor; bu bir doğrusal fonksiyondur.",
              "Model: d(x) = (başlangıçtaki su) − (dakikada akan) · x.",
              "İlk adım: dakikada akan " + rr + " litreyi " + x + " dakika ile çarp.",
            ];
            cozum = ["Model: " + model + ".", "Akan su: " + rr + " · " + x + " = " + rr * x + " litre.", "Kalan: " + V + " − " + rr * x + " = " + d + " litre."];
          } else {
            // Sınır: L = 0, fonksiyonun sıfırı (depo boşalır).
            const x0 = r() < 0.4 ? T : rint(r, 3, T - 3), L = V - rr * x0;
            params = { mod, V, rr, L };
            kok = L === 0 ? "Buna göre depo kaç dakikada tamamen boşalır?" : "Buna göre musluk açıldıktan kaç dakika sonra depoda " + L + " litre su kalır?";
            d = x0;
            ys = [
              yv((V + L) / rr, "isaret_hatasi", "Kalan suyu başlangıçtaki sudan çıkar: " + V + " − " + L + "."),
              yv(V - L, "eksik_adim", "Akan " + (V - L) + " litreyi dakikada akan " + rr + " litreye bölme adımı eksik kalmış."),
            ];
            if (L > 0) ys.push(yv(L / rr, "okuma_hatasi", "Kalan suyu böldün; akması gereken su " + V + " − " + L + " litredir."));
            else ys.push(
              yv(V * rr, "islem_hatasi", "Süreyi bulmak için " + V + " litre " + yonelme(rr) + " bölünür, çarpılmaz."),
              yv(V - rr, "islem_hatasi", "Süreyi bulmak için " + V + " litre " + yonelme(rr) + " bölünür, çıkarılmaz."),
            );
            ys = ys.filter(o => okunakli(o.deger));
            ipuclari = [
              L === 0 ? "Depo boşalınca d(x) = 0 olur; fonksiyonun sıfırını bul." : "Depoda " + L + " litre kalınca d(x) = " + L + " olur.",
              "Model: d(x) = " + V + " − " + rr + "x. Denklemi kur ve x'i yalnız bırak.",
              "İlk adım: " + V + " − " + rr + "x = " + L + ".",
            ];
            cozum = ["Model: " + model + ".", V + " − " + rr + "x = " + L + " ⇒ " + rr + "x = " + (V - L) + ".", "x = " + (V - L) + " : " + rr + " = " + x0 + " dakika."];
          }
        } else {
          const b0 = pick(r, [100, 150, 200, 250, 300]), rr = pick(r, [10, 15, 20, 25]);
          const x0 = rint(r, 8, 40), L = b0 + rr * x0;
          if (L > 1200) continue;
          params = { mod, b0, rr, L };
          baglam = yer + " bir su deposunda " + b0 + " litre su var. Depoya dakikada " + rr + " litre su dolduruluyor.";
          kok = "Buna göre kaç dakika sonra depodaki su " + L + " litre olur?";
          d = x0;
          ys = [
            yv(L / rr, "eksik_adim", "Depoda baştan olan " + b0 + " litreyi hesaba katmadın."),
            yv((L + b0) / rr, "isaret_hatasi", "Baştaki " + b0 + " litre toplamdan çıkarılır, eklenmez."),
            yv(L - b0, "eksik_adim", "Doldurulacak " + (L - b0) + " litreyi dakikada " + rr + " litreye bölme adımı eksik kalmış."),
          ].filter(o => okunakli(o.deger));
          ipuclari = [
            "Depodaki su her dakika aynı miktarda artıyor; başlangıçta da su var.",
            "Model: h(x) = " + rr + "x + " + b0 + ". h(x) = " + L + " denklemini çöz.",
            "İlk adım: " + rr + "x = " + L + " − " + b0 + ".",
          ];
          cozum = ["Model: h(x) = " + rr + "x + " + b0 + ".", rr + "x + " + b0 + " = " + L + " ⇒ " + rr + "x = " + (L - b0) + ".", "x = " + (L - b0) + " : " + rr + " = " + x0 + " dakika."];
        }
        ys = ayikla(ys, d);
        if (tekilSay(ys) < 3) continue;
        return { params, baglam, kok, dogru: sy(d), deger: d, yanlislar: ys, ipuclari, cozum: cozum.map((t, i) => i + 1 + ". " + t) };
      }
    },
    kontrol(p) {
      // Model formülü yerine adım adım benzetim: her km / dakika için tutarı güncelle.
      let t = 0, v;
      if (p.mod === "taksi_ucret") { v = p.A; for (; t < p.x; t++) v += p.k; return sayiYaz(v); }
      if (p.mod === "taksi_km") { v = p.A; while (v < p.U) { v += p.k; t++; } return v === p.U ? sayiYaz(t) : "YOK"; }
      if (p.mod === "bos_y") { v = p.V; for (; t < p.x; t++) v -= p.rr; return sayiYaz(v); }
      if (p.mod === "bos_x") { v = p.V; while (v > p.L) { v -= p.rr; t++; } return v === p.L ? sayiYaz(t) : "YOK"; }
      v = p.b0; while (v < p.L) { v += p.rr; t++; } return v === p.L ? sayiYaz(t) : "YOK";
    },
  });
})();
