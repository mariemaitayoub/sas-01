
const prompt = require("prompt-sync")();

let budget = Number(prompt("Budget (€) : "));
let destination = Number(prompt("Destination (1 = plage, 2 = montagne, 3 = ville) : "));
let personnes = Number(prompt("Nombre de personnes : "));


if (budget >= 1000) {
    console.log("Voyage haut de gamme");
} else if (budget >= 500) {
    console.log("Voyage moyen");
} else {
    console.log("Voyage economique");
}
if (destination === 1) {
if (budget >= 1000 && personnes > 2) {
    
    console.log("Destination recommandée : Plage");
    } else {
        console.log("La plage n'est pas recommandée selon les conditions.");}
} else if (destination === 2) {
if (budget >= 500 && personnes <= 2) {
        console.log("Destination recommandée : Montagne");
} else {
    console.log("La montagne n'est pas recommandée selon les conditions.");
}

} else if (destination === 3) {
console.log("Destination recommandée : Ville");
} else {
    console.log("Destination invalide");
}