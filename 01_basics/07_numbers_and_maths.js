const value = 400
// console.log(value);

const number = new Number(500)
// console.log(number);

// console.log(number.toString().length);
// console.log(number.toFixed(2));

const othernumber = 123.8966
// console.log(othernumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString());

/*********************************************math******************************************************/

// console.log(Math);
// console.log(Math.abs(-45));
// console.log(Math.round(45.95));
// console.log(Math.ceil(45.25));                   //choose higher value
// console.log(Math.floor(45.95));                  //choose lower value
// console.log(Math.min(4,8,6,9,5));                //choose min value in arr
// console.log(Math.max(4,8,6,9,5));                //choose max value in arr


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.floor(Math.random()*10))+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min )     //formula for random number btw certain range