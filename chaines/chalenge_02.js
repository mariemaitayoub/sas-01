const prompt = require('prompt-sync')(); 
let a = prompt('donner une chaine : '); 
let com = 0; 

for (let element of a) { 
    com++; 
} 

console.log(`longueur est ${com}`);
