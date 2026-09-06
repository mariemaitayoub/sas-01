const prompt=require("prompt-sync")();
let a=[],v=[];
let n=Number(prompt('donner le n '));
for(let i=0;i<n;i++){
    a[i]=Number(prompt(` ${i+1}    =    `));

}console.log(a);
let fac=Number(prompt("donner facteur    :"));
for(let i=0 ;i<n;i++){
    v[i]=fac*a[i];
}
    //console.log(` ${fac}  *   ${a[i]}  =   ${fac*a[i]}`);}
    console.log(v);