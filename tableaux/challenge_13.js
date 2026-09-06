const prompt=require("prompt-sync")();
let a=[],v=[];
let n=Number(prompt('donner le n '));
for(let i=0;i<n;i++){
    
    a[i]=Number(prompt(` ${i+1}    =    `));
        
}console.log(a);
for(let i=0;i<n;i++){
     if(a[i]%2!==0){
        v.push(a[i]);
        
    }
    
}
console.log(`les ele impaire ${v}`);