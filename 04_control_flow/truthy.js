const userEmail = []

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }

// falsy values

//  false , 0 , -0 , BigInt(0n) , "" , null , undefined , NaN


//  truthy values

//  "0" , "false" , " " , {} , [] , function(){}

// if (userEmail.length === 0) {
//     console.log("arrary is empty");
// }

const emptyobject = {}

// if (Object.keys(emptyobject).length === 0) {
//     console.log("object is empty");   
// }

//************************* Nullish Coalescing Operator (??): null/undefined ****************************************************

let val1;
// val1 = 5 ?? 10                 //-->  5
// val1 = null ?? 10              //-->  10
// val1 = undefined ?? 15         //-->  15
// val1 = undefined ?? null       //-->  null
// val1 = null ?? undefined       //-->  undefined
// val1 = null ?? 20 ?? 10        //-->  20
// console.log(val1);

//************************************ Terniary Oprator******************

// condition ? true : false

const ice = 100

ice >= 80 ? console.log("Greater than 80"): console.log("Less  than 80");
