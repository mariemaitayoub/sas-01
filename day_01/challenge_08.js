const prompt = require('prompt-sync')();

let a = Number(prompt("Entrez le premier nombre : "));
let b = Number(prompt("Entrez le deuxième nombre : "));
let c = Number(prompt("Entrez le troisième nombre : "));
let moyenne = (a * b * c) ** (1 / 3);

console.log(`La moyenne géométrique est : ${moyenne}`);









