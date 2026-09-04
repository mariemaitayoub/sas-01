const prompt = require('prompt-sync')();
let n = parseInt(prompt("Entrez le nombre:"));
for(let i=1;i<=10;i++){
    console.log(`${n}*${i}=${i*n}`);
}