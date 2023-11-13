"use strict";
/*
    Develop a TypeScript function
    to retrieve specific details from an array of objects.
    Your task is to extract 'id' and 'name' properties,
    unveiling their concealed values.
    After crafting the function, apply it to an array of diverse objects.
    Showcase the extracted 'id' and 'name' details,
    revealing the secrets kept within these mysterious objects.
*/
{
    let user1 = {
        id: 1,
        name: 'Sharfuddin',
        salary: 20000
    };
    let user2 = {
        id: 22,
        name: 'Minar',
        salary: 25000
    };
    const user = [user1, user2];
    let getProps = (obj, key) => {
        return obj.map(data => data[key]);
    };
    console.log(getProps(user, 'id'));
    console.log(getProps(user, 'name'));
}
