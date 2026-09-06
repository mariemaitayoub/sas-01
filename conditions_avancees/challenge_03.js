const prompt = require("prompt-sync")();

let joursAccordes = Number(prompt("nombre de jours accordes:"));
let joursUtilises = Number(prompt("nombre de jours utilises:"));
let statut = Number(prompt("statut (0 = temps partiel,1 =temps plein) : "));

let joursRestants;

if (statut === 1) {
    joursRestants = joursAccordes - joursUtilises;
} else if (statut === 0) {
    joursRestants = (joursAccordes / 2) - joursUtilises;
}
if (joursUtilises > joursAccordes) {
    console.log(" alerte ");
} else {
    console.log(`jours de conge restants : ${joursRestants}`);
}