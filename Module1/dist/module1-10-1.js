"use strict";
const s1 = {
    name: "Mehedi",
    dept: "CSE",
    roll: 1,
    age: 18
};
const t1 = {
    name: "Sharfuddin",
    dept: "CSE",
    salary: 12000,
    age: 25
};
const t2 = {
    name: "Zishan",
    dept: "CSE",
    salary: 18000,
    age: 35
};
function sumAge(s, t) {
    console.log(s.age + t.age);
}
function sumSalary(s, t) {
    console.log(s.salary + t.salary);
}
sumAge(s1, t1);
sumSalary(t1, t2);
