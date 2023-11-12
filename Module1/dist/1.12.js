"use strict";
/*
    Module 1.12: Any Unknown Never Void
    - Any: Error show in run time
    - Unknown: Error show in compile time
    - Never: If function not reach to end point }
    - Void: If function not return anything and reach to end point }

    - Both Any and Unknown used if type of value is not sure
    - Good practice not used any, instead of used unknown if value is not known
    - TypeScript goal is to remove run time error, thats why any should not used
    - For unknown, we have to check typeof, otherwise compiletime error
    - User can input string and number, so userInput is unknown
*/
{
    let userIn; // Any Type
    //userIn.toUppercase() // No Compile time error but arise error in runtime
    let userInput; //unknown type
    // userInput.toUpperCase() //Compile time error
    if (typeof userInput == 'string')
        console.log(userInput.toUpperCase());
    if (typeof userInput == 'number')
        console.log(userInput);
    /* void */
    function showUser(msg) {
        console.log('hello ', msg);
    }
    showUser('Zishan');
    /*
    
    function displayUser(msg:unknown):never{
        console.log('hello ',msg);
        // A function returning 'never' cannot have a reachable end point.
    }
    displayUser('Zishan')
    */
    function showErr(error) {
        throw new Error(error);
    }
    showErr('Never have no end point');
}
