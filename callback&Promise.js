// function test(call) {
//     call()
// }

// test(() => {
//     console.log("1");
//      test(() => {
//         console.log("2");
//          test(() => {
//             console.log("3");
//              test(() => {
//                 console.log("4");
//                  test(() => {
//                     console.log("5");
//                      test(() => {
//                         console.log("6");
//                     })
//                 })
//             })
//         })
//     })
// })

// function step1(call) {
//     setTimeout(() => {
//         console.log("setp 1");
//         call()

//     }, 1000)
// }
// function step2(call) {
//     setTimeout(() => {
//         console.log("setp 2");
//         call()
//     }, 1000)
// }
// function step3(call) {
//     setTimeout(() => {
//         console.log("setp 3");
//         call()
//     }, 1000)
// } function step4(call) {
//     setTimeout(() => {
//         console.log("setp 4");
//         call()

//     }, 100)
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             step4(() => {
//                 console.log("all done");
//             })
//         })
//     })
// })

// PROMISE

// let array = ['pen', "pencil"]
// let promise = new Promise((resolve, reject) => {
//     if (array.includes("pen")) {
//         resolve("hai")
//     } else {
//         reject("nhi hai")
//     }
// })
// promise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// let array = ["datas"]

// let promise = new Promise((resolve, reject) => {
//     if (array.includes("data")) {
//         setTimeout(() => {
//             resolve("data fetch successfully")
//         }, 1000)

//     } else {
//         reject("data not fetch XX")
//     }
// })
// console.log(promise
//     .then((msg) => {
//         console.log("Resolved:", msg);
//     })
//     .catch((err) => {
//         console.log("Rejected:", err);
//     }))

// let p1 = Promise.resolve("A");
// let p2 = Promise.resolve("B");
// let p3 = Promise.resolve("C");

// callback hell issue

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Ravi", sayBye);

// function a(name, call) {
//     console.log("hello" +" " +name);
//     call()
// }
// function goodmorning() {
//     console.log("goodmorning");
// }

// a("satyam", goodmorning)

// function a(name, callback) {
//     console.log("my name is" + " " + name);
//     callback()
// }
// arrow function and function exression 
//  developer = () => {
//     console.log("i am a developer");
// }
// a("satyam", developer)

// annonymous function
// let a=("deepak",function(){
//     console.log(`what are you doing `);

// })               
// a()

// rest api
// let data = fetch("https://restcountries.com/v3.1/independent?status=true")

// data.then((res) => {
//     return res.json();
// }).then((d) => {
//     console.log(d);
// })

async function getApi() {
    let response = await fetch("https://restcountries.com/v3.1/independent?status=true")

    let data = await response.json()
    console.log(data);
}

getApi()



