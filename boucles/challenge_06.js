const prompt=require('prompt-sync')();
let n=Number(prompt('donner un nmbre :'));
for(let i=1;i<=n;i++){
    
    console.log(`${2*i}`);
}