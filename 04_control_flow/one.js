// if else

const pow = 55
// if(pow > 50){
//     console.log('greater than 50');
// }else{
//     console.log('less than 50');
// }


const score = 155
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }


const balance = 800
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard && 2==2) {
    console.log("Allowed to buy course");   
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}