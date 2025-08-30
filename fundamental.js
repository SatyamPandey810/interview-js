//number
// let num=11111111111111111111111111n
// console.log(num, typeof num);

// Boolean
// let bul = true;
// console.log(bul, typeof bul);

// null
// let num = null
// console.log(num, typeof num);

// undifined
// let num;
// console.log(num,typeof num);

// Array
// let array = [1, 2, 3, 4]
// console.log(array, typeof array);

// string
// let str = "hello world"
// console.log(str, typeof str);

//object
// let a = {
//     age: 12,
//     name: "hello world",
// }
// console.log(a.age);

//symbol
// let sym = Symbol("id")
// console.log(sym, typeof sym);
// console.log(sym.description);


// Interactions:alert,prompt,confirm
// console.log(alert);
// alert("Hello wolrd")

// let nam = prompt("Enter your name")
// console.log(nam);

// let con = confirm("are you want to delete thid records?")
// console.log(con,typeof con);

//Type Conversions

// String conversions
// let num = 10
// let str = String(num)
// console.log(str, typeof str);
// let bool = true
// let bul = String(bool)

// console.log(bool, typeof bool);
// console.log(bul, typeof bul);

// Numeric conversions
// let num = "10"
// let num1=Number(num)
// console.log(num1,typeof num1);
// console.log(num,typeof num);

// Boolean conversion
// let bol = true;
// let bool = Number(bol)
// console.log(bool,typeof bool);

// console.log(bol, typeof bol);

// Basic operators
// Terms: "unary","binary","operand"

// string concatination
// let firstName="hello"
// let lastName="world"
// let con=firstName +" "+ lastName
// console.log(con);

// console.log(10-"10");
// let a = NaN
// console.log(a, typeof a);

// Numeric conversion unary operator

// Increment ++
// let a = 10
// posfix
// console.log(a++)          // a = a + 1
// console.log(a);

//prefix
// let a = 10
// console.log(++a)
// console.log(a);
// let a = 10

// console.log(a + ++a + a++ - a + a++);

// Decrement --
// postfix
// let a = 10
// console.log(a--)
// console.log(a);
// prefix
// console.log(--a);
// console.log(a);

// Assignment Operators
// + - % * *

// Comparison Operators
// == equal to only data check
// let a = 10
// let b = "10"
// console.log(a == b);

// === equal value and equal type
// let a = 10
// let b = 10
// console.log(a !== b);

// > Greater than
// let a = 10
// let b = 10
// console.log(a > b);

// < less than
// let a = "10"
// let b = 10
// console.log(a < b);

// ? ternary operator

// let a = 10
// console.log(a > 8 ? "true" : "false");

// logical operator
// && (and)


// || (or)
// ! (not)

// // for loop
// for (let a = 0; a <= 10; a++) {
//     console.log(a);
// }

// for loop with array
// let array=[1,2,4,5,6]

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// let sum = 4;
// for (let a = 1; a <= 50; a++) {
//     if (a % 2 !== 0) {
//         console.log(a);
//     }
// }
// let game = 30;
// let userPrompt = prompt("Enter the game number:")
// while (userPrompt != game) {
//     userPrompt = prompt("wrong number try again")
// }
// console.log("Congratulation you are enter the game");


// if (userPrompt <= game) {
//     console.log("you are eletible for this game");
// } else {
//     console.log("try other number");
// }


// for loop with string
// let str = "hello world"
// for (let index = 0; index < str.length; index++) {
//     console.log(str[index]);
// }

// for in loop with array
// let array = [1, 2, 4, 5, 6]
// for (const key in array) {
//     console.log(array[key]);

// }

// for in loop with array
// let str = "hello world"

// for (const key in str) {
//     console.log(str[key]);
// }

// for in loop with object
// let obj = {
//     firsName: "deepak",
//     age: 20
// }

// for (const key in obj) {
//     console.log(obj[key]);
// }

// for of loop with array
// const array = [1, 2, 3, 4, 5, 6]

// for (const element of array) {
//     console.log(element);
// }

// for of loop with string
// let str="hello world" 
// for (const element of str) {
//     console.log(element); 
// }


// for (let row = 1; row <= 60; row++) {
//     for (let col = 1; col <= 60; col++) {
//         if (col <= row)
//             document.write("*")
//     }
//     document.write("<br>")
// }

// functions:-
// function declaration
// function addition() {
//     console.log("hello world");
// }
// addition()

// Parameters and argument :
// function addition(num1,num2) {   
//     console.log(num1 + num2);
// }
// addition(20,20)

// Local variables:-
// function addition(num1, num2) {
//     let sum = num1 + num2
//     console.log(sum);
// }
// console.log(sum);
// addition(20, 30)

// Outer variables:-
// function addition() {
//     let a = 10; //outer variable
//     function test() {
//         console.log(a);
//     }
//     test()
// }
// addition()

// global variable:-
// let sum = 10;
// function addition(a, b) {
//     sum = a + b
// }
// console.log(sum);
// addition(10, 20)
// console.log(sum);
// Default values :-
// function test(a, b, c) {
//     console.log(a + b + c)
// }
// test(10, 20)

// Returning a value from a function
// function addition(num1, num2) {
//     return num1 + num2
// }
// let a = addition(10, 20)
// console.log(a);

// function expressions
// let addition = function (a, b) {
//     console.log(a + b);
// }
// addition(20, 10)

// Arrow function
// let addition = (a, b) => {
//     console.log(a + b);
// }
// addition(10, 10)

// Callback functions




