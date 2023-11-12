"use strict";
/*
    Module 2.5: Generic Function
*/
{
    let enroll = (s, p) => {
        let id = Math.floor(Math.random() * 1000);
        return Object.assign(Object.assign({}, s), { roll: id, dept: p });
    };
    let student = [];
    let s1 = {
        name: 'Sharfuddin',
        age: 20,
        gpa: 3.5,
        semester: 1
    };
    let s2 = {
        name: 'Minar',
        age: 20,
        gpa: 3.75,
        semester: 1
    };
    student.push(enroll(s1, 'CSE'));
    student.push(enroll(s2, 'EEE'));
    console.log(student);
}
