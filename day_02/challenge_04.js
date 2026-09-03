const prompt = require('prompt-sync')();


let v1 = Number(prompt("Entrez  la 1er valeur : "));
let v2 = Number(prompt("Entrez 2 eme valeur : "));

if (v1 === v2) {
    console.log("Les deux valeurs sont strictement égales.");
} else if (v1 > v2) {
    console.log("La 1er valeur est super a 2 eme");
} else {
    console.log("Les deux valeurs sont differentes et la 2 eme est super a la 1er");
}