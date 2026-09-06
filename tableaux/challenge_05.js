const prompt=require("prompt-sync")();
let a=[];
let n=Number(prompt("donner combien delemnt "));


for(let i=0;i<n;i++){
    a[i]=Number(prompt(`${ i +1 }   =    `));
}console.log(a);
let min=a[0];
for(let i = 1;i<n;i++){
    if (a[i]<min){
        min=a[i];
    }
    }
console.log(min);