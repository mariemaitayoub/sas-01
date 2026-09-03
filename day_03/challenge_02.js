const prompt = require('prompt-sync')();

let lettre=prompt('saisie un voyelle : ');
switch(lettre){
    case'o':
    case'a':
    case'u':
    case'i':
    case'e': 
    console.log(`"${lettre}" est voyelle`);
break;
default:
console.log(`"${lettre}" est consonne`);
}