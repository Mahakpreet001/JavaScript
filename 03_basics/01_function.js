function saymyname() {
    console.log("M");
    console.log("A");
    console.log("H");
    console.log("A");
    console.log("K");
}

// saymyname()

// function addtwonumber(num1,num2) {
//     console.log(num1+num2);
// }
// const result = addtwonumber(3,4)
// console.log("Result : ", result);

function addtwonumber(num1,num2) {
    // let result = num1+num2;
    // return result;
    
    return num1+num2
}

// const result = addtwonumber(3,4)
// console.log("Result : ", result);


// function loginmessage(username) {
// if (username===undefined) {
//     console.log("Please enter a username");
//     return
// }
//     return `${username} just logged in`
// }

// console.log(loginmessage("mahak"));

function loginmessage(username = "Dam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
        return `${username} just logged in`
    }
    
// console.log(loginmessage("mahak"));


// function addtocart(...num1) {}
function addtocart(val1,val2,...num1) {
    return num1
}

// console.log(addtocart(200,400,600));

const user = {
    username: "mahak",
    prices: 1999
}

function handleobj(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobj(user)
// handleobj({
//     username: "sam",
//     price:1999
// })

const mynewarr = [100,500,600,900,700]

function returnsecondvalue(getarr) {
    return getarr[2]
}

console.log(returnsecondvalue(mynewarr));
