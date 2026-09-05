let a='mariem';
let b='riemt';
console.log(a.includes(b));
for(let i=0;i<a.length-1;i++){
    for(let j=0;j<b.length-1;j++){
        if(a[i]===b[j]){
            i++;
break;
           
        }
    
    }
}
