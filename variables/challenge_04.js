const prompt = require('prompt-sync')();
let vitesse_kmh=prompt("donner un vitesse en km/h ");
let vitesse_ms=Number(vitesse_kmh)*0.27778;
console.log(`"${vitesse_ms}"`);