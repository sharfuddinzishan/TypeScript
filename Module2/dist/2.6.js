"use strict";
/*
    Constraint
    T extends {name:string} means parameter must have name property
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
    let AddToDb = (obj, accept, rest) => {
        let role = accept ? "User" : 'Normal';
        return Object.assign(Object.assign(Object.assign({}, obj), { auth: role }), rest);
    };
    employee.push(AddToDb(user1, true));
    employee.push(AddToDb(user2, true, { others: { skill: 'python' } }));
    console.log(employee);
}
