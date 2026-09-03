const prompt = require('prompt-sync')();

let r = Number(prompt("Entrez le rayon de la sphère : "));
const pi=3.14159;
let volume = (4/3)*pi* r ** 3;

console.log(`Le volume de la sphère est : ${volume}`);