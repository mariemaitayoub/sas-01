const prompt=require("prompt-sync")();
let a=[];
let n=Number(prompt("donner combien delemnt "));


for(let i=0;i<n;i++){
    a[i]=Number(prompt(`${ i +1 }   =    `));
}console.log(a);
let max=a[0];
for(let i = 1;i<n;i++){
    if (a[i]>max){
        max=a[i];
    }
    }
console.log(max);