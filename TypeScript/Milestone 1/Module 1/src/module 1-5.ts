/*
    Module 1.5: Object, Optional, Literal
*/

let userInfo: {
    userName: string;
    userPass: number;
    isAdmin: boolean;
    address: {
        district: string;
        division: string;
    };
    // Literal 
    companyName:'TypeScript'
    readonly nationality: string;
    // Optional 
    contactNumber?:number;
}
={
    userName:'abc@gmail.com',
    userPass:123456,
    isAdmin:true,
    address:{
        district:'Feni',
        division:'Chattrogram'
    },
    companyName:'TypeScript',
    nationality:'Bangladeshi'
}

/* Readonly so value can not be changed */
// userInfo.companyName="JavaScript"
// userInfo.nationality='India' 