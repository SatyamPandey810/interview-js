// recursion and stack
// function test() {
//     test()
// }

// let sum = 0
// for (let index = 0; index <= 100; index++) {
//     sum += index
// }
// console.log(sum);

// function sum(value) {
//     let s = 0
//     if (value > 0) {
//         s = value + sum(value - 1)
//     }
//     return s
// }
// let result = sum(100)
// console.log(result);

// stack
// function func1() {
//     func2()
//     console.log("func1");

// }
// function func2() {
//     fun3()
//     console.log("func2");

// }
// function fun3() {
//     console.log("func3");
// }
// func1()

// the Excution context and stack





// rest parameters and spread syntax
// function num(...num1) {
//     console.log(num1);
// }
// num(10, 20, 20)

// let array = [10, 20, 30, 40]
// console.log(...array);

// let array1 = [...array]
// console.log(array1);

// rest parameters...
// spread...
// copy an array/object via spread operator

// hoisting
// Temporal Dead Zone

// nested functions
// lexical environment
// Variable scope 
// function testing() {
//     let a = 10
//     function t() {
//         console.log(a);
//     }
//     t()
// }
// testing()

// the old var
// var has no block scope 
// var tolerates redeclarations
// var variables can be declared below their use

// let fullName="john dou"
// function testing() {
//     let fullName = "hello world"
// }
// testing()
// console.log(fullName);


// console.log(fullName);
// var a = 10;

// function testScope() {
//   console.log("1:", a);
//   var a = 20;
//   console.log("2:", a);
// }

// testScope();
// console.log("3:", a);    

// var fullName = "hello world"
// {
//     var fullName = "blocked scope"
// }
// console.log(fullName);

// const firstName="hello world"
// const firstName="hello world"
// console.log(firstName);

// iife
// (function  ()  {
//     console.log('testing')
// })()


// let counter = 0
// setInterval(() => {
//     // counter++
//     // console.log("hyy there");
//     console.log(counter++);
// }, 1000)

// decorators and forwording call/apply
// using "func.call" for the context
// func.apply


// let emp = {
//     firstName: "hello world",
//     lastName: "john due"
// }

// let object = {
//     getDetails: function () {
//         return this.firstName + " " + this.lastName
//     }
// }
// console.log(object.getDetails.call(emp));


// module









// ================================================================================

