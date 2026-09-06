const prompt=require("prompt-sync")();
let a=[];
let n=Number(prompt("donner un nombre :"));
for(let i=0;i<n;i++){
    a[i]=prompt(`${i+1} = `);
}
console.log(a);