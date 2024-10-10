// const promiseone = new Promise(function(resolve,reject){
//     //Do and async task
//     // DB calls,cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseone.then(function(){
//     console.log('Promise consumed'); 
// });


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise without decaration")
//         resolve()
//     },1000);
// }).then(function(){
//     console.log('Promise 2 consumed');
// })


/**************************************Promisetwo***************************************/

// const promisetwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:'mahak',email:'xyz@gmail.com'})           // the parameter inside the resolve is consumed by the user in the 
//     },1000);
// })
// promisetwo.then(function(user){
//     console.log(user)
// })


/************************************** Promisethree ***************************************/


// const promisethree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         // let error = false;
//         if(!error){
//             resolve({username: 'mahakpreet', password: '123456'})
//         }else{
//             reject('Error: Failed to fetch data');
//         }
//     },1000);
// })

// promisethree.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("The Promise is either resolved or rejected"))



/**************************************PromiseFour***************************************/

// const PromiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // let error = true;
//         let error = false;
//         if(!error){
//             resolve({username : "fourthname", password : "489525"})
//         }else{
//             reject('Error: Failed to fetch data');
//         }
//     },1000)
// });

// async function consumePromiseFour(){
//     try {
//         const response = await PromiseFour
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFour();


/**************************************Fetch for next class***************************************/

// async function getalldata(){
//     try {
//         const response =  fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getalldata();


/************************************* more ***************************************/


// fetch('https://api.github.com/users/Mahakpreet001')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((error)=>{
//     console.log("E:",error);
// })