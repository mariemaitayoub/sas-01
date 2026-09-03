const prompt = require('prompt-sync')();

let prix = Number(prompt("entrez le prix : "));
let reduction = Number(prompt("entrez le pourcentage de réduction : "));

let montantReduction = prix * reduction / 100;
let prixFinal = prix - montantReduction;

console.log(`montant de la reduction : ${montantReduction} DH`);
console.log(`prix final : ${prixFinal} DH`);