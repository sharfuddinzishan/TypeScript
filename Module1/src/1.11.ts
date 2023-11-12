/*
    Ternary, optional chaining & nullish coalescing operator
*/

const user1={
    isAuth:null,
    address:{
        location:{
            state:undefined,
            city:'Chattogram',
            zilla:''
        }
    }
}

const islogged=user1.isAuth?"Yes Login":"No Logged"
console.log('Ternary ',islogged);

const isloggedNullish = user1.isAuth ? "Yes Login" : "No Logged Nullish";
console.log('Nullish ',isloggedNullish);

const state=user1?.address?.location.state??"No State"
console.log('Optional Chaining with Nullish ',state);

// Difference between Nullish and Ternary
// Ternary return False for "" empty String
// Nullish check only Null and Undefined. So Empty string not false in nullish
const checkZilla=user1?.address?.location.zilla
const zilla=checkZilla?checkZilla:"No State"
console.log('In Ternary ',zilla);

const zillaNullish=checkZilla??"No State"
console.log('In Nullish ',zillaNullish);