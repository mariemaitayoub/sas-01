const prompt=require("prompt-sync")();
let a=[],v=[],fusion=[];
let n=Number(prompt('donner le n pour a '));
let m=Number(prompt('donner le m pour v '));

for(let i=0;i<n;i++){
    
    a[i]=Number(prompt(` ${i+1}    =    `));
        
}console.log(a);
for(let i=0;i<m;i++){
    
    v[i]=Number(prompt(` ${i+1}    =    `));
        
}console.log(v);
for(let i=0;i<m;i++){
     a.push(v[i]);
       
    
}
console.log(`fusion  ${a}`);