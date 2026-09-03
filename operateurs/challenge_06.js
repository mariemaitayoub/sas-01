const prompt = require('prompt-sync')();

let nombre = Number(prompt("entrez un nombre : "));

if (nombre>=10 && nombre<=100) {
    console.log("Le nombre appartient a  [10, 100]");
} else {
    console.log("Le nombre n'appartient pas a  [10, 100]");
}