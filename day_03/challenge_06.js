const prompt = require('prompt-sync')();

let nombre = Number(prompt("entrez un nombre : "));

if (nombre < 0) {
    console.log("Le nombre est ngatif.");
}
else if (nombre > 0) {
    console.log("Le nombre est positif.");
}
else {
    console.log("Le nombre est nul.");
}