/*
    Union
    - If newObject type is from two object using union |,
      then, newObject must have one of objects all properties

    Intersection
    - If newObject type is from two object using intersaction &,
      then, newObject must have two of objects all properties
*/
{
// union |
type gender='Male'|'Female'

type FrontEnd={
    scope:"React"|"Designer"
}
type BackEnd={
    scope:"Backend"|"API"
}

// Intersaction
type FullStack=FrontEnd & BackEnd

const dev1:FrontEnd={
    scope:"Designer"
}
const dev2:BackEnd={
    scope:"API"
}

/* Union Example With Object */

type Person={
    name:string,
    age:number
}
type Student={
    marks?:number,
    roll:number
}
type Teacher={
    designation:"Teacher"|"Principle",
    salary:number
}

type SUT=Student|Teacher

/*
const user1:SUT={
    salary:1200 // Need designation as ST is Union of Student Teacher
}
*/
const user1:SUT={
    salary:1200, // Need designation as ST is Union of Student Teacher
    designation:"Principle"
}

type SIT=Student & Teacher
const user2:SIT={
    roll:12,
    designation:'Teacher',
    salary:12000
}

/* 
   **************** Standard Code******************* 
*/

type PIT=Person & Teacher
type PIS=Person & Student

const user3:PIT={
    name:"Sharfuddin",
    age:29,
    designation:"Teacher",
    salary:20000
}

const user4:PIS={
    name:"Rakib",
    age:20,
    roll:10,
    marks:29,
}






}