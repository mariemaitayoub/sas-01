const prompt = require('prompt-sync')();

let num1=prompt('donner un nombre 1 :'),
    num2=prompt('donner un nombre 1 :'),
    operateur=prompt('donner un operateur :');
switch (operateur){
    case "+=":
    num1+=num2;
    console.log(` "${num1}""${operateur}""${num2}" = "${nombre}"`);
break ;
    case "-=":
    num1-=num2;
    console.log(` "${num1}""${operateur}""${num2}" = "${nombre}"`);
    break;
    
}
