/*
    Module 1.7 : Spread and Rest Operator
*/
{

let student1:string[]=['Arif','Bahar','Chahal']
let student2:string[]=['Daud','Eftekhar','Gobindo']

// Spread operator
let students:string[]=[...student1,...student2]
console.log(...students);

student1.push(...student2)
console.log('Student Push ',...student1);

// Rest Operator
let admit=(...students:string[]):string[]=>students
admit('Rahat','Zishan','Minar').forEach(s=>console.log(s))


}
