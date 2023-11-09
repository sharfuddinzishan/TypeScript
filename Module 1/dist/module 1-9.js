"use strict";
/*
    Module 1.9 Type Alias
    Type Alias Applied On: variable, object, function
*/
{
    const s1 = {
        name: 'A',
        dept: 'CSE',
        roll: 1,
        institute: 'CPI',
    };
    const s2 = {
        name: 'A',
        dept: 'EEE',
        institute: 'CPI'
    };
    console.log(s1.roll);
    console.log(s2.roll);
    let result = 10;
    let role = true;
    let showStudent = (s) => s.name;
    console.log(showStudent(s1));
}
