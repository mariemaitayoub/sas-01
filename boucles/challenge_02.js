const prompt=require('prompt-sync')();
let fact=1;
let n=prompt("donner un nmbre :");
for(let i=n;i>1;i--){
fact*=i;
}
    console.log(`${n}!=${fact}`);
