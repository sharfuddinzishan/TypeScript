"use strict";
/*
    Ternary, optional chaining & nullish coalescing operator
*/
var _a, _b, _c;
const user1 = {
    isAuth: null,
    address: {
        location: {
            state: undefined,
            city: 'Chattogram',
            zilla: ''
        }
    }
};
const islogged = user1.isAuth ? "Yes Login" : "No Logged";
console.log('Ternary ', islogged);
const isloggedNullish = user1.isAuth ? "Yes Login" : "No Logged Nullish";
console.log('Nullish ', isloggedNullish);
const state = (_b = (_a = user1 === null || user1 === void 0 ? void 0 : user1.address) === null || _a === void 0 ? void 0 : _a.location.state) !== null && _b !== void 0 ? _b : "No State";
console.log('Optional Chaining with Nullish ', state);
// Difference between Nullish and Ternary
// Ternary return False for "" empty String
// Nullish check only Null and Undefined. So Empty string not false in nullish
const checkZilla = (_c = user1 === null || user1 === void 0 ? void 0 : user1.address) === null || _c === void 0 ? void 0 : _c.location.zilla;
const zilla = checkZilla ? checkZilla : "No State";
console.log('In Ternary ', zilla);
const zillaNullish = checkZilla !== null && checkZilla !== void 0 ? checkZilla : "No State";
console.log('In Nullish ', zillaNullish);
