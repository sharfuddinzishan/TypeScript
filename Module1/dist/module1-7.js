"use strict";
/*
    Module 1.7 : Spread and Rest Operator
    Create Object from Two Object using Spread
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
    // Create object using spread operator 
    const course = {
        cname: 'Python',
        credit: 3
    };
    const teacher = {
        tname: 'Zishan',
        dept: 'CMT'
    };
    const student = Object.assign(Object.assign({}, course), teacher);
    console.log(student);
}
