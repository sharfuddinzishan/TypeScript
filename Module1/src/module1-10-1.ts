type Department="CSE"|"EEE"|"ETE"
type Student={
    name:string,
    dept:Department,
    roll?:number,
    age:number
}
type Teacher={
    name:string,
    dept:Department,
    salary:number,
    age:number
}

const s1:Student={
    name:"Mehedi",
    dept:"CSE",
    roll:1,
    age:18
}
const t1:Teacher={
    name:"Sharfuddin",
    dept:"CSE",
    salary:12000,
    age:25
}
const t2:Teacher={
    name:"Zishan",
    dept:"CSE",
    salary:18000,
    age:35
}

type StudentOrTeacher=Student|Teacher

function sumAge(s:StudentOrTeacher,t:StudentOrTeacher):void{
    console.log(s.age+t.age);
}

type StudentAndTeacher=Student&Teacher

function sumSalary(s:StudentAndTeacher,t:StudentAndTeacher):void{
    console.log(s.salary+t.salary);
}
sumAge(s1,t1)
sumSalary(t1,t2)