/*******************************Arrays*******************************************/

const myarr = [1,2,3,4,5,6]
const heros = ["iron-man", "Thor", "Captian", "Hulk"]
// console.log(myarr[0]);

/****************************Arrays methods***************************************/

// myarr.push(7)
// myarr.push(8)

// myarr.unshift(9)
// myarr.shift()


// console.log(myarr.includes(2));
// console.log(myarr.indexOf(5));

// const newarr = myarr.join() 
// console.log(myarr);
// console.log(newarr);

// console.log(typeof myarr);
// console.log(typeof newarr);

console.log("A ",myarr );

const mym1 = myarr.slice(1,3)                    //slice: it copy the give number from the arr 
console.log(mym1);
console.log("B ",myarr);

const mym2 = myarr.splice(1,3)                  //splice: it cut the give number from the arr  
console.log(mym2)
console.log("C ",myarr)