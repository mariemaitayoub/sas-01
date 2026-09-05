const prompt=require('prompt-sync')();
let a=0;
let b=1;
let userLimit=Number(prompt("donner user limits "));
for(let i=0;i<userLimit;i++){
    if (i===0 || i===1){
        //console.log(`${i} ,`);        
     process.stdout.write(`${i}, `);
    }

    let somme=a+b;
    
    // console.log(`${i}`);
    //swap 
    a=b;
    b=somme;

    //console.log(`${somme} ,`);
     process.stdout.write(`${somme}, `);
    
    
}
























