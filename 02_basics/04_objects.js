// const instauser = new Object()
const instauser = {}

instauser.id="123abc"
instauser.name = "sammy" 
instauser.isLoggedIn = false 

// console.log(instauser);
 const regularuser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Mahakpreet",
            lastname:"Singh"
        }
    }
 }
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)      //here it store in the obj1
// const obj3 = Object.assign({},obj1,obj2)   //here we add {} because we want to store the result in the new empty arr 

const obj3 = {...obj1,...obj2}                //this spread method is easy, simple and latest   
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "first@gmail.com"
    },
    {
        id: 2,
        email: "second@gmail.com"
    },
    {
        id: 3,
        email: "third@gmail.com"
    }
]
// console.log(users[0].email);

// console.log(instauser);
// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));

// console.log(instauser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js in hindi",
    price: "999",
    courseteacher: "hitesh"
}

// console.log(course.courseteacher);
// console.log(course["courseteacher"]);

const {courseteacher: teacher} = course
// console.log(courseteacher);
console.log(teacher);

// {
//     "name":"mahak",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]