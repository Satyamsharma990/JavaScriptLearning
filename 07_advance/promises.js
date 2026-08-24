// const promiseOne = new Promise((resolve, reject) => {
//     //Do an asynchronous task
//     //DB calls, cryptography, network 

//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve();
//     }, 1000)
// })

// promiseOne.then(() =>{
//     console.log("Promise is comsumed");
// })

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2")
//         resolve()
//     }, 1000)
// }).then(function() {
//     console.log("Async 2 is resolved");
// })

// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({
//             username: "Satyam",
//             email: "Satyam@gmail.com"
//         })
//     },1000)
// })

// promiseThree.then(function(user) {
//     console.log(user);    
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error) {
//             resolve({username: "Satyam", password: "123"});
//         } else {
//             reject('Error');
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;   
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log("error");
// }).finally(() => console.log("Promise is either resolved or rejected"))


// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error) {
//             resolve({username: "JavaScript", password: "123"});
//         } else {
//             reject('Error: Js went wrong');
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const consume = await promiseFive
//         console.log(consume); 
//     } catch (error) {
//         console.log("error: JS Inside await", error);
//     }
// }

// consumePromiseFive()

// async function getUser() {
//     try {
        
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error", error);
//     }
// } 

// getUser();


const user = {
    username: "S"
}

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error", error);
})

console.log(userf);
