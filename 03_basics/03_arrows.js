const user={
    username: "marvel",
    price: 999,

    welcomemessage:function () {
        console.log(`${this.username}, welcom to the website`);
        // console.log(this);
    }

}

// user.welcomemessage()
// user.username = 'sam'
// user.welcomemessage()

// console.log(this);


// function chai() {
//     let username = "hello"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "marvel"
//     console.log(this.username);
// }

const chai = () => {
    let username = "marvel"
    console.log(this);
}

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "mahak"})

// console.log(addtwo(3,4))


const myarray = [2,5,3,7,8]

myarray.forEach(()=>{})
