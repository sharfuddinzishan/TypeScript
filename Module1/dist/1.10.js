"use strict";
/*
    Union
    - If newObject type is from two object using union |,
      then, newObject must have one of objects all properties

    Intersection
    - If newObject type is from two object using intersaction &,
      then, newObject must have two of objects all properties
*/
{
    const dev1 = {
        scope: "Designer"
    };
    const dev2 = {
        scope: "API"
    };
    /*
    const user1:SUT={
        salary:1200 // Need designation as ST is Union of Student Teacher
    }
    */
    const user1 = {
        salary: 1200,
        designation: "Principle"
    };
    const user2 = {
        roll: 12,
        designation: 'Teacher',
        salary: 12000
    };
    const user3 = {
        name: "Sharfuddin",
        age: 29,
        designation: "Teacher",
        salary: 20000
    };
    const user4 = {
        name: "Rakib",
        age: 20,
        roll: 10,
        marks: 29,
    };
}
