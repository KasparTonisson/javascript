//Kaspar Tõnisson
//21.09.23
//Ylesanne 1

let numberValue = 4.2;
let stringValue1 = 'Will Code 4 food';
let stringValue2 = "123";
let booleanValue1 = true;
let arrayValue = [1, 2, 3];
let booleanValue2 = false;
let stringBooleanValue = 'true';
let undefinedValue = undefined;

console.log(typeof numberValue);
console.log(typeof stringValue1);
console.log(typeof stringValue2);
console.log(typeof booleanValue1);
console.log(typeof arrayValue);
console.log(typeof booleanValue2);
console.log(typeof stringBooleanValue);
console.log(typeof undefinedValue);

// Kellaaeg

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

let tsitaat = 'Elu on nagu jalgrattasõit. Selleks, et hoida tasakaalu, pead sa liikuma.';
let autor = 'Albert Einstein';
let tsitaatAutoriga = `"${tsitaat}" - ${autor}`;
console.log(tsitaatAutoriga);

// Mallide kasutamine

let eesnimi = 'Kaspar';
let perenimi = 'Tõnisson';
let nimetähed = `${eesnimi[0]}.${perenimi[0]}.`;
console.log(`${eesnimi} ${perenimi} nimetähed on ${nimetähed}`);

// Perenime pikkus

let nimi = `${perenimi}, ${eesnimi}`;
let komaAsukoht = nimi.indexOf(',');
let eraldatudPerenimi = nimi.slice(0, komaAsukoht);
let suurtähedPerenimi = eraldatudPerenimi.toUpperCase();
console.log(suurtähedPerenimi);
console.log(`Perenime pikkus: ${perenimi.length}`);

// E-posti aadressi muutmine

let epost = "kaspart@netlog.com";
let muudetudEpost = epost.replace("netlog.com", "gmail.com");
console.log(muudetudEpost);

// Andmerida analüüs

let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let andmed = andmerida.split(",");
let kasutajanimi = andmed[3].split("@")[0];
let ipAadress = andmed[5];
console.log(`Kasutajanimi: ${kasutajanimi}`);
console.log(`IP-aadress: ${ipAadress}`);


// Ülesanne 1 - Sõidu aeg ja kaugus

let kaugusKm = 100;
let kiirusKmh = 80;

let soiduAeg = kaugusKm / kiirusKmh;


console.log(`Sõidu aeg: ${soiduAeg} tundi`);

// Ülesanne 2 - Postituste kuvamine


let postitusteArv = 137;
let postitusiLehekyljel = 10;

let lehekylgi = Math.ceil(postitusteArv / postitusiLehekyljel);

let viimaselLehel = postitusteArv % postitusiLehekyljel;

console.log(`Lehekülgi vaja: ${lehekylgi}`);
console.log(`Viimasel lehel postitusi: ${viimaselLehel}`);

// Ülesanne 3 - Serveri töökulu


let serveriVõimsusW = 400;
let elektriHindKwh = 0.0969;

let voolutarbimineKwh = serveriVõimsusW / 1000;

let tookuluEurodes = voolutarbimineKwh * elektriHindKwh;

console.log(`Serveri töökulu ühe tunni jooksul: ${tookuluEurodes} eurot`);


// Ülesanne 1 - Leet nädalapäevad
let leetNadalapaevad = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede"];

leetNadalapaevad[2] = "Kolmapäev";
leetNadalapaevad[3] = "Neljapäev";
console.log(`Massiivi sisu: ${leetNadalapaevad.join(", ")}`);

console.log(`Massiivi suurus: ${leetNadalapaevad.length}`);

leetNadalapaevad.push("Laupäev", "Pühapäev");
console.log(`Lisatud Laupäev ja Pühapäev: ${leetNadalapaevad.join(", ")}`);

leetNadalapaevad.sort().reverse();
console.log(`Kahanevalt sorteeritud: ${leetNadalapaevad.join(", ")}`);

console.log(`Viimane element: ${leetNadalapaevad[leetNadalapaevad.length - 1]}`);


// Ülesanne 2 - Koodide töötlemine
let koodid = "444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977 84421878934473534291995 798457553821668942312 11114498238219156246883553 3599955 8831995953696776 8138759916933117676486 2388776737768787 37232647683297835458183 11318659392964788174775 683293746169875551252354 741545327395636643318531 38447974824822841161273 88768222547689886222 6345677462396774359 4942661761 1354569165 2553653936124138282 851786784517417366411515 42279319649497959785 5523951771 45941761289678527316294 37776454913244819275691 436669892715419465494342 682264111527 734681268219555989841131 882641896825571288724 382545666 12133138432672285179566156291 83644842221351483476411355532 9589336353993598224 184537669759184472427331 41851326945453796784 525783591 173773335961894524914465 47516715963756294236321 7296569497726217615 79487235 4931878519724923131437 31214731844284735237658435 1378458823933518466122 1241955123792435126557994 347427652476673662454 55596877477154112241923 9789414554758712319821 86228624276917113671233411 89659521 1352796469161477381192 69483824148396716861472 4766533634762298963245 5155973593459278561 1784478259974148659431 29583142566714785218623 244371427148584159487652 871836193187759591363 247956";

let koodiMassiiv = koodid.split(" ");
console.log(`Koodide arv: ${koodiMassiiv.length}`);

let indeks = koodiMassiiv.indexOf("35482977");
console.log(`Kood 35482977 indeks: ${indeks}`);

let poolMassiivist = koodiMassiiv.slice(0, koodiMassiiv.length / 2);
console.log(`Täpselt pooled elemendid: ${poolMassiivist.join(", ")}`);


// Ülesanne 3 - Sportlaste tulemused
let sportlased = [
  ["Alice", 25, [10.2, 9.8, 10.5]],
  ["Bob", 22, [9.5, 9.6, 9.7]],
  ["Charlie", 28, [11.1, 11.2, 11.5]]
];

for (let i = 0; i < sportlased.length; i++) {
  let nimi = sportlased[i][0];
  let parimTulemus = Math.max(...sportlased[i][2]);
  console.log(`${nimi}: Parim tulemus on ${parimTulemus}`);
}
