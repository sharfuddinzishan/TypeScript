"use strict";
/*
    Generic Interface
*/
{
    let finalize = (form, status, rest) => {
        return Object.assign(Object.assign({}, form), { accepted: status, others: Object.assign({}, rest) });
    };
    let s1 = {
        formNo: 1,
        sName: 'Sharfuddin',
        dept: "CSE",
        topics: "Oracle APEX",
        type: "Project",
        advisor: {
            name: "Habibullah",
            title: "Professor"
        }
    };
    let s2 = {
        formNo: 2,
        sName: 'Minar',
        dept: "CSE",
        topics: "React JS",
        type: "Project",
        advisor: {
            name: "Mahbub",
            title: "Asst. Professor"
        }
    };
    let defenseList = [];
    /*
    console.log((defenseList[0] as Form).dept) this code is not run
    if let defenseList:Array<object>=[] initialized
    as dept belongs to Form
    */
    defenseList.push(finalize(s1, true));
    // defenseList.push(finalize<Form>(s1,true)) //same as above
    defenseList.push(finalize(s2, true, { desc: 'sharfuddin.com' }));
    console.log(defenseList[0]);
    console.log(defenseList[0].advisor.name);
}
