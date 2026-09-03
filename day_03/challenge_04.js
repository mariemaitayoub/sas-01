const prompt = require('prompt-sync')();


let a=Number(prompt("donner a :"));
let b=Number(prompt("donner b :"));
let c=Number(prompt("donner c :"));
let delta =(b**2)-4*a*c;
if(delta >0){
    let x1 = (-b - delta ** (1 / 2)) / (2 * a);
    let x2 = (-b + delta ** (1 / 2)) / (2 * a);
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
}
else if (delta === 0) {
    let x = -b / (2 * a);

    console.log(`Une solution:x = ${x}`);
}
else {
    console.log("aucune solution");
}