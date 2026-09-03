const prompt = require('prompt-sync')();

let n1 = Number(prompt("Entrez le premier nombre : "));
let n2 = Number(prompt("Entrez le deuxième nombre : "));
let n3 = Number(prompt("Entrez le troisième nombre : "));

let moyenne = (n1 * 2 + n2 * 3 + n3 * 5) / (2 + 3 + 5);

console.log(`La moyenne pondérée est : ${moyenne}`);