const prompt = require('prompt-sync')();


function factorielle(a){
    let fact=1;
    for(let i=a;i>=1;i--)
        {
        fact*=i;
    }
return fact;
}
let a=prompt("donner un nombre ");

console.log(factorielle(a));


