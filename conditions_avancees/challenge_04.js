const prompt = require("prompt-sync")();

let salaireBase = Number(prompt("salaire de base (€) : "));
let heuresSupp = Number(prompt("nmbre d'heures supplementaires : "));
let poste = Number(prompt("ype de poste (1 = junior, 2 = senior) : "));
let salaire = salaireBase;
let tauxHoraire = salaireBase / 160;

salaire = salaire + (heuresSupp * tauxHoraire * 1.5);

if (poste === 1) {
    salaire = salaire + (salaireBase * 0.10);
} else if (poste === 2) {
    salaire = salaire + (salaireBase * 0.20);
}

console.log(`Salaire final : ${salaire} €`);