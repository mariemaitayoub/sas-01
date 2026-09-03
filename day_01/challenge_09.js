const prompt = require('prompt-sync')();

let x1 = Number(prompt("Entrez x1 : "));
let y1 = Number(prompt("Entrez y1 : "));
let z1 = Number(prompt("Entrez z1 : "));

let x2 = Number(prompt("Entrez x2 : "));
let y2 = Number(prompt("Entrez y2 : "));
let z2 = Number(prompt("Entrez z2 : "));

let distance = ((x2-x1)** 2 +(y2 -y1) ** 2+(z2-z1) ** 2)** (1/2);

console.log(`La distance est : ${distance}`);