/*
    Constraint
    T extends {name:string} means parameter must have name property
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
    
    let AddToDb=<T extends {nid:number},Q extends {others:unknown}>(obj:T,accept:boolean,rest?:Q)=>{
        let role=accept?"User":'Normal'
        return {...obj,auth:role,...rest}
    }
    
    employee.push(AddToDb(user1,true))
    employee.push(AddToDb(user2,true,{others:{skill:'python'}}))
    console.log(employee);
    
    
    
    
    
    
    
    
    }