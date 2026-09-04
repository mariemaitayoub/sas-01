const prompt=require('prompt-sync')();
let a=prompt("base :");
let puissance=1;
let b=prompt("exposant :");
for(let i=1;i<=b;i++){
    puissance*=a;
}console.log(`${puissance}`);