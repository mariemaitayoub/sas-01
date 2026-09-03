const prompt = require('prompt-sync')();

let nombre =parseInt(prompt('donner un nombre :'));

if (nombre %2 ==0){
    console.log('${nombre}nombre pair ');
}else 
    console.log('${nombre} nombre impair ');