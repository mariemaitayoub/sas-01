const prompt=require("prompt-sync")();
let a=[];
let n=Number(prompt('nombre des elements'));
let s=0;
for(let i=0;i<n;i++){
    a[i]=Number(prompt(`${i+1}  =  `));
    s+=a[i];
}
console.log(s);