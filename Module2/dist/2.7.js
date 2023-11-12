"use strict";
/*
    Key of constraint
    Q key of T means Q must have one of property of Q
*/
{
    let employee = [];
    let user1 = {
        nid: 1234,
        name: "Sharfuddin",
        age: 20,
        gender: "Male"
    };
    let user2 = {
        nid: 5678,
        name: "Miarana",
        age: 30,
        gender: "Female"
    };
    employee.push(user1, user2);
    console.log(employee);
    let getProps = (obj, key) => {
        return obj[key] ? obj[key] : 'Not Available';
    };
    console.log(getProps(employee[0], 'name'));
}
