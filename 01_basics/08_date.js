let mydate = new Date()

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate);

// let mycustomdate = new Date(2024,0,2)
// let mycustomdate = new Date(2005, 1, 19, 5, 10, 56)
// let mycustomdate = new Date("2024-01-15")
let mycustomdate = new Date("02-10-2024")
// console.log(mycustomdate.toLocaleString());

//******************************time***********************************/

let mytime = Date.now()
// console.log(mytime);
// console.log(mycustomdate.getTime());

// console.log(Math.floor(Date.now()/1000));

// console.log(mytime-mycustomdate.getTime());

let newdate = new Date()
console.log(newdate);
console.log(newdate.getDate());
console.log(newdate.getMonth()+1);

console.log(newdate.toLocaleString('default',{
    weekday:"long"
    })
)