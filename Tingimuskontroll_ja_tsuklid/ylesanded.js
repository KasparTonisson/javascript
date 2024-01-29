//Kaspar Tõnisson



let temperatuur = 20;

if (temperatuur > 25) {
    console.log("Väga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
    console.log("Mõnus temperatuur");
} else {
    console.log("Jahe ilm");
}

let kasutajanimi = prompt("Sisestage oma kasutajanimi:");

if (kasutajanimi === "admin") {
    console.log("Tere, administraator!");
} else {
    console.log("Tere, külaline!");
}

let piletitüüp = prompt("Sisestage piletitüüp (taispilet või sooduspilet):");
let vanus = prompt("Sisestage oma vanus:");

let hind;

if (piletitüüp === "taispilet") {
    if (vanus < 18) {
        hind = 10;
    } else if (vanus >= 18 && vanus <= 64) {
        hind = 20;
    } else {
        hind = 15;
    }
} else if (piletitüüp === "sooduspilet") {
    if (vanus < 18 || vanus >= 65) {
        hind = 8;
    } else {
        hind = 15;
    }
}

console.log(`Pileti hind on ${hind} eurot.`);

let number = parseInt(prompt("Sisestage number:"));

switch (true) {
  case number > 0:
    console.log("Sisestatud number on positiivne.");
    break;
  case number < 0:
    console.log("Sisestatud number on negatiivne.");
    break;
  default:
    console.log("Sisestatud number on null.");
    break;
}

let broneeringuArv = parseInt(prompt("Sisestage broneeringu arv:"));

switch (true) {
  case broneeringuArv >= 1 && broneeringuArv <= 2:
    console.log("Valitud on laud kahele inimesele.");
    break;
  case broneeringuArv >= 3 && broneeringuArv <= 4:
    console.log("Valitud on laud neljale inimesele.");
    break;
  case broneeringuArv >= 5 && broneeringuArv <= 6:
    console.log("Valitud on laud kuuele inimesele.");
    break;
  case broneeringuArv > 6:
    console.log("Valitud on suur laud.");
    break;
  default:
    console.log("Broneering ei sobi saadaval olevate laudade jaoks.");
    break;
}

const products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

for (let i = 0; i < products.length; i++) {
  console.log(`${i + 1}. ${products[i]}`);
}

const temperatures = [
  [5, 8, 12, 10, 7, 9, 11, 14, 16, 13, 10, 6, 4, 3, 2, 4, 6, 8, 10, 12, 15, 17, 18, 16, 13, 10],
];

const months = "Jaanuar, Veebruar, Märts, Aprill, Mai, Juuni, Juuli, August, September, Oktoober, November, Detsember";
const monthNames = months.split(", ");

let highestTemperatures = [];
let lowestTemperatures = [];

for (let i = 0; i < temperatures.length; i++) {
  const highest = Math.max(...temperatures[i]);
  const lowest = Math.min(...temperatures[i]);
  highestTemperatures.push(highest);
  lowestTemperatures.push(lowest);
  console.log(`Kuu ${monthNames[i]}: Kõrgeim temperatuur - ${highest}°C, Madalaim temperatuur - ${lowest}°C`);
}

const highestIndex = highestTemperatures.indexOf(Math.max(...highestTemperatures));
const lowestIndex = lowestTemperatures.indexOf(Math.min(...lowestTemperatures));

console.log(`Kõige kõrgem temperatuur oli kuus ${monthNames[highestIndex]} - ${highestTemperatures[highestIndex]}°C`);
console.log(`Kõige madalam temperatuur oli kuus ${monthNames[lowestIndex]} - ${lowestTemperatures[lowestIndex]}°C`);

const coins = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
const sortedCoins = [];
let totalCoins = 0;
let totalAmount = 0;

while (coins.length > 0) {
  const coin = coins.pop();
  if (coin >= 1) {
    sortedCoins.push(`${coin} euro`);
  } else {
    sortedCoins.push(`${coin * 100} senti`);
  }
  totalCoins++;
  totalAmount += coin;
}

console.log(`Said kokku ${totalCoins} münti:`);
console.log(sortedCoins.join(", "));
console.log(`Müntide kogusumma: ${totalAmount} eurot`);
