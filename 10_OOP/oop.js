// Object literal and this keyword 
// new keyword

const user = {
    username: "mahak",
    loginCount: 4,
    signedIn: true,

    getuserdetails : function(){
        console.log(`Got the details`);
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getuserdetails());
// console.log(this);     // output : {}

/*************************************************************************/

function Users (username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    return this;
}

// const userone = Users('deep',9,true);                       // new is a predefined constructor
// const usertwo = Users('preet',118,false);                   // if we don't use new keyword it will overwrite the existing userone data.
const userone = new Users('deep',9,true);
const usertwo = new Users('preet',118,false);

console.log(userone);
console.log(usertwo);
