const prompt=require("prompt-sync")();
let a=[],s=0;
let n=Number(prompt('donner le n '));
for(let i=0;i<n;i++){
    
    a[i]=Number(prompt(` ${i+1}    =    `));
        s+=a[i]
}console.log(`le moyenne ${s/n}`);
