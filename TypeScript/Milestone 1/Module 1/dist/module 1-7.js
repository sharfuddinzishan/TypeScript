"use strict";
/*
    Module 1.7 : Spread and Rest Operator
*/
{
    let student1 = ['Arif', 'Bahar', 'Chahal'];
    let student2 = ['Daud', 'Eftekhar', 'Gobindo'];
    // Spread operator
    let students = [...student1, ...student2];
    console.log(...students);
    student1.push(...student2);
    console.log('Student Push ', ...student1);
    // Rest Operator
    let admit = (...students) => students;
    admit('Rahat', 'Zishan', 'Minar').forEach(s => console.log(s));
}
