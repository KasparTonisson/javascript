//Kaspar Tõnisson
//11.10.23

// Funktsioon, mis väljastab sinu nime ilma argumendita

// Klassikaline funktsioon
function minuNimi() {
    console.log("Sinu nimi siin");
  }
  
  // Noolfunktsioon
  const minuNimiNool = () => {
    console.log("Sinu nimi siin");
  };
  
  // Funktsioon, mis kuvab praeguse kuupäeva ja kuu eesti keeles
  
  function kuupaevEesti(kuupaev) {
    const kuupaevaObjekt = new Date(kuupaev);
    const kuu = kuupaevaObjekt.toLocaleString('et-EE', { month: 'long' });
    console.log(`Praegune kuupäev Eesti keeles: ${kuupaevaObjekt.getDate()}. ${kuu} ${kuupaevaObjekt.getFullYear()}`);
  }
  
  // Funktsioon teadmata hulga täisarvude summa ja keskmise arvutamiseks
  
  const arvudeKeskmine = (...arvud) => {
    const kogusumma = arvud.reduce((summa, arv) => summa + arv, 0);
    const keskmine = kogusumma / arvud.length;
    return { summa: kogusumma, keskmine: keskmine };
  };
  
  // Funktsioon salajase sõnumi loomiseks, asendades täishäälikud tärnidega
  
  const salajaneSonum = (sisendS6num) => {
    const taishaalikud = "aeiouAEIOU";
    let salajaneS6num = "";
    for (let i = 0; i < sisendS6num.length; i++) {
      if (taishaalikud.includes(sisendS6num[i])) {
        salajaneS6num += "*";
      } else {
        salajaneS6num += sisendS6num[i];
      }
    }
    return salajaneS6num;
  };
  
  // Funktsioon unikaalsete nimede leidmiseks ja säilitamiseks esialgses järjekorras
  
  const leiaUnikaalsedNimed = (nimed) => {
    const unikaalsedNimed = [];
    const nimeHoidla = {};
  
    for (const nimi of nimed) {
      if (!nimeHoidla[nimi]) {
        unikaalsedNimed.push(nimi);
        nimeHoidla[nimi] = true;
      }
    }
  
    return unikaalsedNimed;
  };
  
  // Testimine ja väljund
  
  minuNimi();
  minuNimiNool();
  
  kuupaevEesti("2023-10-11");
  
  const tulemus = arvudeKeskmine(5, 10, 15);
  console.log(`Summa: ${tulemus.summa}, Keskmine: ${tulemus.keskmine}`);
  
  const sisendS6num = "Tere, ma olen salajane!";
  const tulemusS6num = salajaneSonum(sisendS6num);
  console.log(tulemusS6num);
  
  const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
  const unikaalsed = leiaUnikaalsedNimed(nimed);
  console.log(unikaalsed);
  



  // Toote objekt
const toode = {
    nimetus: "Piim",
    hind: 3.60,
    kogus: 2,
    // Meetod toote koguhinna arvutamiseks
    koguHind: function () {
      return this.hind * this.kogus;
    },
    // Meetod toote koguse muutmiseks
    muudaKogust: function (uusKogus) {
      this.kogus = uusKogus;
    },
    // Meetod objekti sisu kuvamiseks
    kuvaSisu: function () {
      console.log(`${this.nimetus} - ${this.hind} EUR - Kogus: ${this.kogus}`);
    },
  };
  
  // Ostukorvi objekt
  const ostukorv = {
    tooted: [
      { nimi: 'Piim', hind: 3.60, kogus: 2 },
      { nimi: 'Leib', hind: 2.00, kogus: 1 },
      { nimi: 'Munad', hind: 1.50, kogus: 6 },
      { nimi: 'Juust', hind: 4.20, kogus: 1 },
      { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
    ],
    // Meetod kogu ostukorvi sisu kuvamiseks
    kuvaSisu: function () {
      for (const toode of this.tooted) {
        console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
      }
    },
    // Meetod ostukorvi summa arvutamiseks
    koguSumma: function () {
      let summa = 0;
      for (const toode of this.tooted) {
        summa += toode.hind * toode.kogus;
      }
      return summa;
    },
    // Meetod uute toodete lisamiseks ostukorvi
    lisaToode: function (nimi, hind, kogus) {
      this.tooted.push({ nimi, hind, kogus });
    },
  };
  
  // Kasutame meetodeid ja kuvame tulemused konsoolis
  console.log("Toote omadused:");
  toode.kuvaSisu();
  console.log("Toote koguhind:", toode.koguHind());
  
  console.log("\nOstukorvi sisu:");
  ostukorv.kuvaSisu();
  console.log("Ostukorvi kogu summa:", ostukorv.koguSumma());
  
  ostukorv.lisaToode('Kohv', 5.80, 2);
  console.log("\nOstukorvi pärast uue toote lisamist:");
  ostukorv.kuvaSisu();
  console.log("Ostukorvi kogu summa:", ostukorv.koguSumma());



  const nimed1 = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

  const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    // Lisa kontrollimiseks oma nimi ja isikukood
  ];
  
  const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    // ...
  ];
  
  // Funktsioon, mis teeb nimed korda ja loob e-kirjad
  function teeNimedKordaJaLooEmail(nimed1) {
    return nimed1.map(nimi => {
      const osad = nimi.split(" ");
      const eesnimi = osad[0].charAt(0).toUpperCase() + osad[0].slice(1);
      let email = "";
      if (osad.length > 1) {
        const perenimi = osad[1].toLowerCase();
        email = perenimi + "@metshein.com";
      }
      return { nimi: eesnimi + (osad.length > 1 ? " " + osad[1] : ""), email: email };
    });
  }

// Funktsioon sünniaja ja vanuse leidmiseks
function leiaSunniaegJaVanus(isikukood) {
  const aasta = "19" + isikukood.substr(1, 2);
  const kuu = isikukood.substr(3, 2);
  const päev = isikukood.substr(5, 2);
  const sünniaeg = new Date(`${aasta}-${kuu}-${päev}`);
  const täna = new Date();
  const vanus = täna.getFullYear() - sünniaeg.getFullYear();
  return { sünniaeg: sünniaeg.toDateString(), vanus: vanus };
}

// Funktsioon parima ja keskmise tulemuse leidmiseks
function leiaParimJaKeskmine(tulemused) {
  const parim = Math.max(...tulemused);
  const keskmine = tulemused.reduce((summa, tulemus) => summa + tulemus, 0) / tulemused.length;
  return { parim: parim, keskmine: keskmine };
}

const korrastatudNimedJaEmailid = teeNimedKordaJaLooEmail(nimed);
console.log("Nimed ja e-kirjad:");
console.log(korrastatudNimedJaEmailid);

for (const inimene of inimesteAndmed) {
  const { nimi, isikukood } = inimene;
  const { sünniaeg, vanus } = leiaSunniaegJaVanus(isikukood);
  console.log(`${nimi}: Sünniaeg - ${sünniaeg}, Vanus - ${vanus} aastat`);
}

for (const õpilane of opilased) {
  const { nimi, tulemused } = õpilane;
  const { parim, keskmine } = leiaParimJaKeskmine(tulemused);
  console.log(`${nimi}: Parim tulemus - ${parim}, Keskmine tulemus - ${keskmine.toFixed(2)}`);
}
