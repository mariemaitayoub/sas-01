const prompt = require("prompt-sync")();

let age = Number(prompt("Âge : "));
let historique = Number(
    prompt("Historique médical (0 = aucun, 1 = mineur, 2 = majeur) : "));
let couverture = Number(
    prompt("Type de couverture (1 = base, 2 = étendue) : "));
let plan;
if (age < 30) {
    plan ="Plan de base";
} else {
if (historique === 0) {
plan ="Plan de base";
} else {
plan ="Plan étendu";}}




console.log(`Plan recommandé :${plan}`);