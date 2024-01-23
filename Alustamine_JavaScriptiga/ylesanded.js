//Kaspar Tõnisson
//21.09.23
//Ylesanne 1

let numberValue = 4.2; // Tüüp: number
let stringValue1 = 'Will Code 4 food'; // Tüüp: string
let stringValue2 = "123"; // Tüüp: string
let booleanValue1 = true; // Tüüp: boolean
let arrayValue = [1, 2, 3]; // Tüüp: object (Kuigi tegemist on massiiviga, on JavaScriptis massiividel tüüp "object")
let booleanValue2 = false; // Tüüp: boolean
let stringBooleanValue = 'true'; // Tüüp: string
let undefinedValue = undefined; // Tüüp: undefined

console.log(typeof numberValue);
console.log(typeof stringValue1);
console.log(typeof stringValue2);
console.log(typeof booleanValue1);
console.log(typeof arrayValue);
console.log(typeof booleanValue2);
console.log(typeof stringBooleanValue);
console.log(typeof undefinedValue);



// Kaspar Tõnisson
// 2023-09-21

// Kellaaeg

// Luua kolm muutujat: tunnid, minutid, sekundid. Ühenda muutujad kokku, lisades nende vahele kooloni (:) ja lõppu tähed PM.
let now = new Date();
let tunnid = now.getHours();
let minutid = now.getMinutes();
let sekundid = now.getSeconds();
let ampm = tunnid >= 12 ? 'PM' : 'AM';
tunnid = tunnid % 12;
tunnid = tunnid ? tunnid : 12;
minutid = minutid < 10 ? '0' + minutid : minutid;
sekundid = sekundid < 10 ? '0' + sekundid : sekundid;
let kellaaeg = `${tunnid}:${minutid}:${sekundid}${ampm}`;
console.log(kellaaeg);

// Tsitaat lause sees

// Luua muutuja, mis sisaldab kuulsat tsitaati. Moodustada uus string, mis sisaldab selle tsitaadi teksti koos autori nimega, kasutades erinevaid jutumärke. Veenduda, et tsitaadi tekst ja autori nimi on korralikult vormistatud.
let tsitaat = 'Elu on nagu jalgrattasõit. Selleks, et hoida tasakaalu, pead sa liikuma.';
let autor = 'Albert Einstein';
let tsitaatAutoriga = `"${tsitaat}" - ${autor}`;
console.log(tsitaatAutoriga);

// Mallide kasutamine

// Loo kaks muutujat: eesnimi ja perenimi. Võta kummaski nimest esitähed ning kasuta lauses malli (Template literals).
let eesnimi = 'Kaspar';
let perenimi = 'Tõnisson';
let nimetähed = `${eesnimi[0]}.${perenimi[0]}.`;
console.log(`${eesnimi} ${perenimi} nimetähed on ${nimetähed}`);

// Perenime pikkus

// Loo muutuja kujul “Perenimi, Eesnimi”.
// Loo muutuja ja lisa selle väärtuseks koma asukoht sõnes (index).
// Kasuta eelmist muutujat, et eraldada sõnest perenimi.
// Muuda perenimi suurtähtedeks ja kuva konsooliakanas.
// Kuva perenime pikkus.
let nimi = `${perenimi}, ${eesnimi}`;
let komaAsukoht = nimi.indexOf(',');
let eraldatudPerenimi = nimi.slice(0, komaAsukoht);
let suurtähedPerenimi = eraldatudPerenimi.toUpperCase();
console.log(suurtähedPerenimi);
console.log(`Perenime pikkus: ${perenimi.length}`);

// E-posti aadressi muutmine

// Loo muutuja kasutaja emailiga. Asenda e-posti aadressi domeen "netlog.com" domeeniga "gmail.com" ning tagasta muudetud e-posti aadress.
let epost = "kaspart@netlog.com";
let muudetudEpost = epost.replace("netlog.com", "gmail.com");
console.log(muudetudEpost);

// Andmerida analüüs

// Sul on kasutada järgmine andmerida: "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175"
// Eralda ja kuva sellest IP-aadress ja emailist kasutajanimi.
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let andmed = andmerida.split(",");
let kasutajanimi = andmed[3].split("@")[0];
let ipAadress = andmed[5];
console.log(`Kasutajanimi: ${kasutajanimi}`);
console.log(`IP-aadress: ${ipAadress}`);


//Kaspar Tõnisson
//21.09.23

// Ülesanne 1 - Sõidu aeg ja kaugus

// Muutujad sõidu kauguse ja kiiruse hoidmiseks
let kaugusKm = 100; // Kaugus kilomeetrites
let kiirusKmh = 80; // Kiirus kilomeetrites tunnis

// Arvutame sõidu aja (tunnid)
let soiduAeg = kaugusKm / kiirusKmh;

// Väljastame sõidu aja konsooli
console.log(`Sõidu aeg: ${soiduAeg} tundi`);

// Ülesanne 2 - Postituste kuvamine

// Andmed
let postitusteArv = 137; // Kokku 137 postitust
let postitusiLehekyljel = 10; // Igal lehel 10 postitust

// Arvutame, mitu lehekülge on vaja
let lehekylgi = Math.ceil(postitusteArv / postitusiLehekyljel);

// Arvutame, mitu postitust on viimasel lehel
let viimaselLehel = postitusteArv % postitusiLehekyljel;

// Väljastame tulemused konsooli
console.log(`Lehekülgi vaja: ${lehekylgi}`);
console.log(`Viimasel lehel postitusi: ${viimaselLehel}`);

// Ülesanne 3 - Serveri töökulu

// Andmed
let serveriVõimsusW = 400; // Serveri võimsus wattides (W)
let elektriHindKwh = 0.0969; // Elektri hind eurodes kilovatt-tunni kohta (eurod/kWh)

// Arvutame serveri voolutarbimise kilovatt-tundides (kWh)
let voolutarbimineKwh = serveriVõimsusW / 1000;

// Arvutame serveri töökulu ühe tunni jooksul eurodes
let tookuluEurodes = voolutarbimineKwh * elektriHindKwh;

// Väljastame töökulu konsooli
console.log(`Serveri töökulu ühe tunni jooksul: ${tookuluEurodes} eurot`);

//Kaspar Tõnisson
//21.09.23

// Ülesanne 1 - Leet nädalapäevad
let leetNadalapaevad = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede"];

// Paranda massiiv ja kuva selle elemendid
leetNadalapaevad[2] = "Kolmapäev";
leetNadalapaevad[3] = "Neljapäev";
console.log(`Massiivi sisu: ${leetNadalapaevad.join(", ")}`);

// Kuva massiivi suurus
console.log(`Massiivi suurus: ${leetNadalapaevad.length}`);

// Lisa lõppu koodi abiga Laupäev ja Pühapäev
leetNadalapaevad.push("Laupäev", "Pühapäev");
console.log(`Lisatud Laupäev ja Pühapäev: ${leetNadalapaevad.join(", ")}`);

// Sorteeri elemendid kahanevalt
leetNadalapaevad.sort().reverse();
console.log(`Kahanevalt sorteeritud: ${leetNadalapaevad.join(", ")}`);

// Kuva viimane element
console.log(`Viimane element: ${leetNadalapaevad[leetNadalapaevad.length - 1]}`);


// Ülesanne 2 - Koodide töötlemine
let koodid = "444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977 84421878934473534291995 798457553821668942312 11114498238219156246883553 3599955 8831995953696776 8138759916933117676486 2388776737768787 37232647683297835458183 11318659392964788174775 683293746169875551252354 741545327395636643318531 38447974824822841161273 88768222547689886222 6345677462396774359 4942661761 1354569165 2553653936124138282 851786784517417366411515 42279319649497959785 5523951771 45941761289678527316294 37776454913244819275691 436669892715419465494342 682264111527 734681268219555989841131 882641896825571288724 382545666 12133138432672285179566156291 83644842221351483476411355532 9589336353993598224 184537669759184472427331 41851326945453796784 525783591 173773335961894524914465 47516715963756294236321 7296569497726217615 79487235 4931878519724923131437 31214731844284735237658435 1378458823933518466122 1241955123792435126557994 347427652476673662454 55596877477154112241923 9789414554758712319821 86228624276917113671233411 89659521 1352796469161477381192 69483824148396716861472 4766533634762298963245 5155973593459278561 1784478259974148659431 29583142566714785218623 244371427148584159487652 871836193187759591363 247956";

// Tükelda sõne ja kuva mitu koodi saad
let koodiMassiiv = koodid.split(" ");
console.log(`Koodide arv: ${koodiMassiiv.length}`);

// Mitmes index on koodil 35482977
let indeks = koodiMassiiv.indexOf("35482977");
console.log(`Kood 35482977 indeks: ${indeks}`);

// Kuva saadud massiivist täpselt pooled elemendid
let poolMassiivist = koodiMassiiv.slice(0, koodiMassiiv.length / 2);
console.log(`Täpselt pooled elemendid: ${poolMassiivist.join(", ")}`);


// Ülesanne 3 - Sportlaste tulemused
let sportlased = [
  ["Alice", 25, [10.2, 9.8, 10.5]],
  ["Bob", 22, [9.5, 9.6, 9.7]],
  ["Charlie", 28, [11.1, 11.2, 11.5]]
];

// Kuva õpilase nimi ja parim tulemus (eraldi read)
for (let i = 0; i < sportlased.length; i++) {
  let nimi = sportlased[i][0];
  let parimTulemus = Math.max(...sportlased[i][2]);
  console.log(`${nimi}: Parim tulemus on ${parimTulemus}`);
}
