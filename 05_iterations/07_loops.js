//  Map : 

const mynum = [1,2,3,4,5,6,7,8,9,10]
const newnum = mynum.map((num) => num+10)
// console.log(newnum);

const newnums = mynum                      // we can add multiple .map functions to one, this is called chaining. 
    .map((num) => num*10)                  // we can use .map .filter and other function one after another
    .map((num) => num+1)                   // the value in the num will change on the behafe of upper function
    .filter((num) => num >= 40)            // the values whose condition matches the statement was executed

console.log(newnums);
