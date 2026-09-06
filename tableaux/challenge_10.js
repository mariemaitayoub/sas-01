const prompt=require("prompt-sync")();
let a=[],v=[];
let n=Number(prompt('donner le n '));
for(let i=0;i<n;i++){
    a[i]=Number(prompt(` ${i+1}    =    `));

}console.log(`able originale   :   ${a}`);
for (let i=n-1;i>=0;i--){    

    v.push(a[i]);
}console.log(`able copie   :   ${v}`);