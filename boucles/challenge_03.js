const prompt=require('prompt-sync')();
let s=0;
let a=Number(prompt("donner un nombre :"));
for(let i=a;i>=1;i--){
    s+=i;
}
    console.log(`${s}`);
