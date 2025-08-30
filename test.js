

// let sum = 0
// for (let index = 1; index <= 7; index++) {
//     sum += index
// }

// console.log(sum);

// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }




// recursion
// function sum(value) {
//     let s = 0
//     if (value > 0) {
//         s = value + sum(value - 1)

//     }
//     return s
// }

// let result = sum(10)
// console.log(result);

// function totalNum(value) {
//     if (value === 0) return 0
//     return 1 + totalNum(Math.floor(value / 10))
// }
// console.log(totalNum(100));


// var globalVar="i am global"

// function showGlobal(){
//     console.log(globalVar);

// }
// showGlobal()
// console.log(globalVar);

// function scope(){
//     var funScope="i am functional var"
//     console.log(funScope);

// }
// scope()
// console.log(funScope);

// if (true) {
//     let blockVar = "I am block scoped";
//     const anotherBlockVar = "Also block scoped";
//     console.log(blockVar); // accessible
// }

// console.log(blockVar); 
// console.log(anotherBlockVar);

// console.log(a);

// var a="hello world"
// console.log(a);

// var a
// console.log(a);
// a="hello world"
// console.log(a);

// ------------------------------ gec

// x = 30
// console.log(x);
// var x = 10
// console.log(x);

// console.log("global execution start");

// var globalVariable="i am a global variable"

// function globalFunction(){
//     console.log("Inside global function");    
// }
// console.log(globalVariable);
// globalFunction()

// console.log("global excution ends...");

// console.log("gec start");
// setTimeout(()=>{
//     console.log("set time started...");    
// },0)
// console.log("gec ends...");

// recursion function
// function countCar(value) {
//     if (value === 0) return 0
//     return 1 + countCar(Math.floor(value / 10))
// }
// console.log(countCar(1000));


// Closures
// function Closures(){
//     let name ="hello world"

//     function sayName(){
//         console.log(name);

//     }
//     sayName()
// }
// Closures()

// function add(value) {
//     function result(num) {
//         console.log(value + num);
//     }
//     return result
// }
// let a = add(20)
// a(10)

//--------------------------- curring function

// function add(a) {
//     return function (b) {
//         return function (c) {
//              return a + b + c;
//         }
//     }
// }
// console.log(add(1)(2)(3));
// let add=(a)=>(b)=>(c)=> a+b+c
// console.log(add(1)(2)(3));


// old schoool
// function senEmail(sendto) {
//     return function (subject) {
//         return function (body) {
//             console.log( `email send to ${sendto} \n subject-${subject} \n dear sir ${body}`);

//         }
//     }
// }

// new school
// let senEmail=(sendto)=>(subject)=>(body)=>console.log( `email send to ${sendto} \n subject-${subject} \n dear sir ${body}`);

// console.log(senEmail('satyam@gmail.com')("request to give my money") ("please i humble request to you give my all money"));
// let step1=senEmail("satyam@gmail.com")
// let step2=step1("request to you")
// step2("hello there")

// const email = (to) => (subject) => (body) => {
//     return `${to} hyy ${subject} there ${body}`
// }
// console.log(email("satyam@gamil.com")("give money")("hyy bro give money"))

// ------------------------------------------ Composition-

// function add(a, b) {
//     return a + b

// }

// function squre(value) {
//     return value * value
// }
// old school
// function compostionFunction(fn1, fn2) {
//     return function (a, b) {
//         return fn2(fn1(a, b))
//     }
// }

// morden js
// let compostionFunction=(fn1,fn2)=>(a,b)=>fn2(fn1(a,b))

// let a = compostionFunction(add, squre)
// console.log(a(3, 4));

//================================== memoization

// function memoizedAddTo256() {
//   let cache = {};

//   return function(num) {
//     if (num in cache) {
//       console.log("Cache se aaya:", num);
//       return cache[num];
//     } else {
//       console.log("Naya calculate hua:", num);
//       let result = num + 256;
//       cache[num] = result;
//       return result;
//     }
//   };
// }

// const add = memoizedAddTo256();

// console.time();

// console.log(add(20)); 
// console.log(add(20)); 
// console.log(add(40)); 
// console.log(add(40))
// console.timeEnd();
//--------------------------------------------------------------------

// Implicit Function 
// const multiply=(a,b)=>a*b
// console.log(multiply(2,3));

//---------------------------------------------------------------------
// Default Function Parameters

// function greet(greet = "hello",name) {
//   console.log(`${greet} mr`);
// }

// greet('satyam')
// greet()

//-------------------------------------------------------------------
// Arrow function
// const squre = (n) => {
//   return n * n
// }
// console.log(squre(5));

// more short
// const square =n=>n*n
// console.log(square(5));

//------------------------------------------------------------
// call()
// let person = {
//   name: 'satyam',
//   age: 25,
//   proffession: 'software developer'
// }

// function greet(){
//   console.log(`Hello my name is ${this.name} and my ${this.age} and i am a ${this.proffession}`); 

// }
// greet.call(person)
//----------------------------------------------------------
// apply()
// let person = {
//   name: "john",
//   age: 30,
// }

// function greet(pro) {
//   console.log(`my name ${this.name} and my age is ${this.age} my pro is ${pro}`);
// }

// greet.apply(person, ['developer'])

//-----------------------------------------------------
// bind()

// let person = {
//   name: "john",
//   age: 20
// }
// function greet(pro) {
//   console.log(`hello i am ${this.name} and my age is ${this.age} my pro is ${pro}`);
// }
// let a = greet.bind(person, 'developer')
// // console.log(a());
// a()


// -------------------------------------------------------------
// map function

// const number = [1, 2, 3, 4]
// const d = number.map(num => {
//   return num * 2
// })

// console.log(d);

// console.log(d());
//-------------------------------------------------------------
// filter function
// let number = [1, 2, 3, 4]
// let a = number.filter(num => {
//   return num % 2 === 0
// })
// console.log(a);

//-------------------------------------------------------------
// reduce function
// let number = [1, 2, 3, 4]
// let func=number.reduce((b,c)=>{
//   return b+c  
// })

// console.log(func);

//--------------------------------------------------------------
// for each function
// let number = [1, 2, 3, 4]
// number.forEach(a => {
//   console.log(a * 2)
// })

//--------------------------------------------------------------
// some function
// let number1= [2,5,7,9] 
// let a = number1.some(num => {
//   return num % 2 === 0
// })
// console.log(a);

//-------------------------------------
// every function
// let number = [2,4,5]
// let b = number.every(num => {
//   return num % 2 === 0
// })
// console.log(b);
// const f = x => 2 * x + 3;
// const g = x => x * x;

// const composed = x => f(g(x));

// console.log(composed(5));

//--------------------------------------------------------------------
// Function Composition
// const func1 = (a => {
//   return a + 2
// })

// const func2 = (b => {
//   return b * 2
// })
// const composition = (c => {
//   return func1(func2(c))
// })
// let a = composition(3)
// console.log(a);

// const func1 = (a) => a + 2;
// const func2 = (b) => b * 2;

// // Use pipe (left → right)
// const piped = pipe(func2, func1);

// console.log(piped(3));  

// let func1 = (a => {
//     return a + 2
// })
// let func2 = (b => {
//     return b * 2
// })
// let compo = (x => {
//     return func1(func2(x))
// })

// let a=compo(4)
// console.log(a);

// ---------------------------------------------------------- Partial Application

// Partial Application का मतलब है:
// किसी function के कुछ arguments fix कर देना और एक नया function बना लेना जो बाकी arguments बाद में लेगा।

// function multiply(a, b, c) {
//     return a * b * c;
// }

// function multiply(a, b, c) {
//   return a * b * c;
// }

// const double = multiply.bind(null, 2);

// console.log(double(3, 4));


// let a = (a, b, c) => {
//     return a + b + c

// }
// let b = a.bind(null, 3)
// console.log(b(10, 10));
// console.log(b(10, 30));

// Debouncing & Throttling (interview favorite for frontend perf)-------------------------------------------------

// function debounce(fn, delay) {
//     let timerId;
//     return function (...args) {
//         clearTimeout(timerId)
//         timerId = setTimeout(() => {
//             fn(...args)
//         }, delay)
//     }
// }


// const searchwithBounce = (query) => {
//     console.log(`Searching for`, query);
// }
// const searchwithBounced = debounce(searchwithBounce, 1000)
// searchwithBounced('ha')
// searchwithBounced('har')
// searchwithBounced('hard')
// searchwithBounced('hard j')
// searchwithBounced('hard js')


//================= Throttling
// function throttle(fn, delly) {
//     let lastCall = 0;
//     return function (...args) {
//         const now = Date.now()
//         if (now - lastCall < delly) {
//             return
//         }
//         lastCall = now
//         return fn(...args)
//     }
// }

// function sendChatMessage(message) {
//     console.log("sending message", message);
// }
// const sendMessageWithSlow = throttle(sendChatMessage, 2000)

// sendMessageWithSlow("hii")
// sendMessageWithSlow("sir")
// sendMessageWithSlow("kya")
// sendMessageWithSlow("hua")
// sendMessageWithSlow("apko")


// ---------------------------------- - - - - call back 
// function test(callback) {
//     callback()
// }

// test(() => {
//     console.log("t1");
//     test(() => {
//         console.log("t2");
//         test(() => {
//             console.log("t3");
//             test(() => {
//                 console.log("t4");
//             })
//         })          // pramid of doom
//     })
// })

// ==-=-=-===-===-=-===-=-=-=-=-==-=-=-==-=-==-=-==-=-=- Promise

// let items = ["pens", "pencil"]
// let promise = new Promise((resolve, reject) => {
//     if (items.includes("pen")) {
//         resolve("hai re")
//     } else {
//         reject("nhi ayy re")

//     }
// })
// promise.then((val) => {
//     console.log(val);
// }).catch((err) => {     // chaining system
//     console.log(err);
// })
// console.log(promise);


// let promise = new Promise((resolve, reject) => {
//     resolve("hello world")
// })

// promise.then((data) => {
//     console.log('t 1');
// }).then((data) => {
//     console.log('t 2');
// }).then((data) => {
//     console.log('t 3');
// })
// ------------------------------------------------------------------promise all
// let fruite = ["mango", "banana", "kiwi"]

// let p=45
// let mango = new Promise((resolve, reject) => {
//     if (fruite.includes("mango")) {
//         resolve("mango hai")
//     } else {
//         reject("nhi hai")
//     }

// })
// let banana = new Promise((resolve, reject) => {
//     if (fruite.includes("banana")) {
//         resolve("bnana hai")
//     } else {
//         reject("banana nhi hai")
//     }

// })
// Promise.all([mango, banana,p]).then((data) => {
//     // console.log(data);
//     data.forEach(item=>{
//         console.log(item);        
//     })

// }).catch((err) => {
//     console.log(err);
// })
// ============================================================ promise race

// let items = ["mango", "banana", "kiwi"]

// let mango = new Promise((resolve, reject) => {
//     if (items.includes("mangos")) {
//         setTimeout(() => {
//             resolve("Mango hai")

//         }, 2000)
//     } else {
//         reject("Mango nhi hai")
//     }
// })

// let banana = new Promise((resolve, reject) => {
//     if (items.includes("banana")) {
//         setTimeout(() => {
//             resolve("banana hai")

//         }, 2000)
//     } else {
//         reject("bnana nhi hai")
//     }
// })

// Promise.race([mango, banana]).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);
// })
//--------------------------------------------------------- allSettled

// let items = ["mango", "banana", "kiwi"]

// let mango = new Promise((resolve, reject) => {
//     if (items.includes("mango")) {
//         resolve("Mango hai")
//         // setTimeout(() => {

//         // }, 3000)
//     } else {
//         reject("Mango nhi hai")
//     }
// })

// let banana = new Promise((resolve, reject) => {
//     if (items.includes("banana")) {
//         resolve("banana hai")
//         // setTimeout(() => {

//         // }, 2000)
//     } else {
//         reject("bnana nhi hai")
//     }
// })

// Promise.allSettled([mango, banana]).then((data) => {
//     console.log(data);
//     data.forEach(data => {
//         console.log(data.value);
//     })

// }).catch((err) => {
//     console.log(err);
// })



//--------------------------------------------------------- any

// let items = ["mango", "banana", "kiwi"]

// let mango = new Promise((resolve, reject) => {
//     if (items.includes("mango")) {
//         resolve("Mango hai")
//         // setTimeout(() => {

//         // }, 3000)
//     } else {
//         reject("Mango nhi hai")
//     }
// })

// let banana = new Promise((resolve, reject) => {
//     if (items.includes("banana")) {
//         resolve("banana hai")
//         // setTimeout(() => {

//         // }, 2000)
//     } else {
//         reject("bnana nhi hai")
//     }
// })

// Promise.any([mango, banana]).then((data) => {
//     console.log(data);


// }).catch((err) => {
//     console.log(err);
// })


//------------==-=-=-=-=-=-=-=-=-=-=-=-=- async/await
//  function  test (){
//     let data =  fetch("https://restcountries.com/v3.1/independent?status=true&fields=languages,capital")

//     data.then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }
// test()

// async function test() {
//     try {
//         let responce = await fetch("https://restcountries.com/v3.1/independent?status=true&fields=languages,capital")
//         let data = await responce.json()
//         console.log(data);

//     } catch (error) {
//         console.log(error);

//     }
// }
// test()

//-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- generator function

// function* genFun(number) {
//     yield number + 2
//     yield number * 2
//     yield number - 2
// }

// let t = genFun(20)
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());


//--------------------------------- prototypal inheritance

// let person = {
//     greet() {
//         return "hello world"
//     }
// }

// let user = {
//     name: "john doe"
// }

// user.__proto__ = person
// console.log(user.greet());
// console.log(user.name);



// function Person(name){
//     return this.name=name
// }

// Person.prototype.greet=function(){
//  return `Hello mr ${this.name}`
// }

// let user=new Person("satyam")
// let user2= new Person("pandey") 


// console.log(user.greet());
// console.log(user2.greet());


const person={
    greet(){
        return 'Hello there'
    }
}
let user=Object.create(person)
user.name='satyam'
console.log(user.name);
console.log(user.greet());

