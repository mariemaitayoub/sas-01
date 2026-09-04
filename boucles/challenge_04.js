const prompt=require('prompt-sync')();
let n=Number(prompt('donner un nmbre :'));
for(let i=0;i<n;i++){
    console.log(`${2*i+1}`);
}