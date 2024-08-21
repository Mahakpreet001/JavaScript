//singleton

//object literals          way to declare object

const mysym = Symbol("key1")


const jsuser = {
    name:"Mahak",
    "fullname":"MahakpreetSingh",
    [mysym]:"mykey1",
    age:18,
    location:"Sangrur",
    email:"mahak@gmail.com",
    isLoggerdIn:false,
    lastLoginDays:["Monday","Wednesday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["fullname"]);
// console.log(jsuser[mysym]);

jsuser.email = "mahak@google.com"
// Object.freeze(jsuser)
jsuser.email = "mahak@outlook.com"
// console.log(jsuser);

jsuser.greeting = function() {
    console.log("Hello user");       
}
jsuser.greeting2 = function() {
    console.log(`Hello js user,${this.name}`);       
}

console.log(jsuser.greeting())
console.log(jsuser.greeting2())