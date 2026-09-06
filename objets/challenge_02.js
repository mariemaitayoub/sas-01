const student={
    name:'mariem',
    prenom:'ait ayoub',
    tableau:[12,13,12.5,7,10,4],
}
let s=0;
let m=0;
console.log(student.name);
console.log(student.prenom);
console.log(student.tableau);
for(let note of student.tableau){
    s+=note;

}
m=s/student.tableau.length
console.log(m);
