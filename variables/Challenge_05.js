const prompt = require('prompt-sync')();
let temp=Number(prompt("donner la temp en celsius:"));
if (100 <= temp ){
    console.log("gaz");
}
else if(0 <= temp ){
    console.log("liquide");
}
else{
    console.log("solide");
}