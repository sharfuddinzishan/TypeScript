/*
    Key of constraint
    Q key of T means Q must have one of property of Q
*/
{

    interface User{
        nid:number,
        name:string,
        age:number,
        gender:'Male'|'Female',
        adress?:{
            zilla:string,
            thana:string
        }
    }
    
    let employee:Array<User>=[]
    let user1:User={
        nid:1234,
        name:"Sharfuddin",
        age:20,
        gender:"Male"
    }
    
    let user2:User={
        nid:5678,
        name:"Miarana",
        age:30,
        gender:"Female"
    }
    
    employee.push(user1,user2)
    console.log(employee);
    
    let getProps=<T,Q extends keyof T>(obj:T,key:Q)=>{
        return obj[key]?obj[key]:'Not Available'
    }
    
    console.log(getProps(employee[0],'name'));
    
    
    
    
    
    
    
    
    
    }