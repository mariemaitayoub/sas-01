const prompt = require("prompt-sync")();

let age = Number(prompt("age du conducteur : "));
let type = Number(prompt("type de voiture (1 sportive, 2 utilitaire, 3 familiale) : "));
let accidents = Number(prompt("nombre d'accidents : "));
let prime = 1000; 
if (age < 25) {
    prime = prime * 1.5;
} else if (age <= 65) {
    prime = prime;
} else {
    prime = prime * 1.2;
}

if (type === 1) {
    prime = prime * 2;
} else if (type === 2) {
    prime = prime * 1.2;
} else if (type === 3) {
    prime = prime * 1.1;
}

if (accidents > 1) {
    prime = prime * 1.3;
}

console.log(`La prime d'assurance est : ${prime} €`);




















