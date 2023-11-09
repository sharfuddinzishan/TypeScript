"use strict";
/*
    Module 1.8 : Destructuring
    Object Destructuring, Array Destruturing
*/
{
    const teacher = {
        tname: "Sharfuddin Ahamed",
        dept: "CMT",
        designation: "Instructor",
        address: {
            thana: "Fulgazi",
            zilla: "Feni"
        }
    };
    // Object Destructuring
    const { tname: name, address: { zilla: district } } = teacher;
    console.log(name, district);
    // Array Destructuring
    const students = ["Sajida", "Liza", "Mehzabin", "Habiba", "Tasfia"];
    // Rest Operator used to hold rest of values
    const [, , bestStudent, ...restStudent] = students;
    console.log(bestStudent);
    console.log(restStudent);
}
