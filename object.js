// Objects
// Literals and properties
// Square bracket shorthand
// Computed properties
// Property value shorthands
// function testing(){
//     return{
//         name:"john doe"
//     }
// }
// console.log(testing());

// property names limitations
// Property existence test ,"in" operator
// the "for in" loop

// let object = {
//     name: "john doe",
//     age: 30,
//     email: "john@gmail.com",
//     'phone num': '1234567'
// }
// console.log(object['phone num']);

// for (key in object) {
//     console.log(object[key]);
// }

// let obj = {
//     name1: "john dou"
// }
// console.log("name" in obj);

// let object = {
//     fullName: "John Doe",
//     age: 25,
//     email: "john@gmail.com",
//     printMarks: function () {
//         console.log("age", age);
//     }
// }

// const company = {
//     taxRate() {
//         console.log("all salary depted in 20%");

//     }
// }
// console.log(company.taxRate);

// let emp = {
//     salary: 300000,
//     taxRate() {
//         console.log("no tax payble");

//     }
// }
// console.log(emp.taxRate());

// // let emp2 = {
// //     salary: 2000
// // }

// // console.log(emp2.taxRate());
// emp.__proto__ = company.taxRate
// emp2.__proto__ = company.taxRate

// Object reference and copying.
// Primitive type
// let number = 10
// let number1 = number
// number1 = 20

// console.log(number);
// console.log(number1);

// reference type
// let array = [10, 20, 30]

// let array1 = array;
// array1[array1.length] = 40;

// console.log(array1);
// console.log(array);

// Comparison by reference
// let obj = {}
// let obj1 = {}   // false
// let obj1 = obj     // true
// console.log(obj === obj1);

// Cloning and merging, Object.assign
// let obj = {
//     name: "john doe",
//     name: "hello world"
// }
// console.log(obj.name);

// let obj = {
//     firstName: "John doe",
//     ages: 2000
// }

// let obj1 = {
//     firstName: "John",
//     age: 40
// }
// for (const key in obj1) {
//     obj[key] = obj1[key]
// }
// console.log(obj);

// Object.assign(obj, obj1)
// console.log(obj);

// Object.keys(obj)
// console.log(obj);

// Nested cloning
// let a = {
//     firstName: "john doe"
// };
// let b = a;
// console.log(b);

// structured Clone
// let a = {
//     firstName: "john doe"
// };
// // let b = structuredClone(a)
// let b = structuredClone(a);
// b.age = 20
// console.log(a);
// console.log(b);

// console.log(b === a);

// Garbage collection :-

//  Object methods "this"
// let object = {
//     firstName: "john doe",
//     getFirstName: function () {
//         console.log(this.firstName);
//         this.getAge()
//     },
//     getAge: function() {
//         console.log(this);

//         console.log("testing");
//     }
// }
// object.getFirstName()

//  Method shorthand
// let object = {
//     firstName: "john doe",
//     getFirstName: function () {
//         console.log(this.firstName);
//         this.getAge()
//     },
//     getAge () {
//         console.log(this);
//         console.log("testing");
//     }
// }
// object.getFirstName()

// "this" in method


// "this" is not bound (not using in arrow function)
// Arrow functions have no "this"
// let object = {
//     firstName: "john doe",
//     getFirstName: function () {
//         console.log(this.firstName);
//         this.getAge()
//     },
//     getAge: () =>{
//         console.log(this);
//         console.log("testing");
//     }
// }
// object.getFirstName()

// Constuctor, operator "new"

// function Testing() {
//     this.name= "hello world";
//     this.getName=()=>{
//         return this.name
//     }   
// }

// let b = new Testing()
// console.log(b);
// console.log(b.getName());

// Constructor function
// Constructor mode test: new.target
// function testing() {
// console.log(new.target);

//     this.name = "hello world"
//     // return {
//     // }
// }
// let t = new testing()
// console.log(t);

// console.log(t.name);
// return from Constructor
// methods in Constructor 


// Option chaining
// The "non-existing property" problem
// Short-circuiting



// Other variants: ?.(), ?.[]
// let object = {
//     name: {
//         firstName: "john",
//         lastName: "doe"
//     },
//     num: [10, 20, 30],
//     testing() {
//         console.log('test function');
//     }
// }
// console.log(object.name1?.firstName);
// console.log(object.nums?.[0]);
// object.test?.()

// Symbols 
// Hidden properties
// let sym = Symbol("id")
// let sym2 = sym;

// console.log(sym2 === sym)
// ;
// const sym = Symbol.for("id")
// const sym1 = Symbol("id")

// console.log(Symbol.keyFor(sym1));

// console.log(Symbol.keyFor(sym));

// console.log(sym.description);

// Symbols in an object literal.

// let sym = Symbol("id")

// let object = {
//     name: "Hello world",
//     [sym]: 10
// }
// // console.log(object[sym]);
// for (const key in object) {
//     console.log(key, object[sym]);
// }


// Symbol are skipped by for...in
// Global symbols
// Symbol.keyFor


// ------------------------------ Advance data type -----------------------

// let a = 10
// console.log(a.toString(1));
// console.log(toString());


// Rounding
// let a = 10.5
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.round(a));
// console.log(Math.trunc(a));
// console.log(a.toFixed(2));

// console.log(10 + 20 + true + "kjkjhdjk");

// let num = "kkj";
// let num=[10,10,10,10]
// console.log(isFinite(num));

// let a = "sss"
// let b = Number(a)
// console.log(b);
// let number =" djshdkj"
// console.log(isNaN(number));

// let a = Math.random() * 10000
// console.log(Math.floor(a));

// let a = 2 ** 10
// console.log(a);
// console.log(Math.pow(2, 10));

// const a = (1, 2, 3, 4, 5, 3)
// console.log(Math.max(a));
// console.log(Math.min(1,2,3,4));

// parseInt and parseFloat

// let a = "20.22"
// a = Math.floor(a)
// console.log(a,typeof a);

// ------------------------------=> '"`String`"' <=

// let a = `hello world`

// string length
// let str="hello world"
// console.log(str.length);


// accessing characters
// let str="hello world"
// console.log(str[4]);

// String are immutable
// "use strict"

// let str="hello world"
// str[0]="e"
// console.log(str);

// changing the case
// toLowerCase
// let str="HELLO WORLD"
// let str="hello world"
// console.log(str.toLowerCase());


// Serching for a
// indexOf and lastIndexOf
// let str = "hello world"
// console.log(str.indexOf("h"));
// console.log(str.lastIndexOf("w"));

// includes,startWith,endsWith

// let str = "hello world"
// console.log(str.includes("ha"));
// console.log(str.startsWith("hew"));

// Getting a substring
// let name="hello world";
// console.log(name.slice(1,2));
// console.log(name.substring(1,3));

// Comparing string

// let str1="hello"
// let str2="hello"
// console.log(str1 > str2);

// codePointAt
// let a="t"
// console.log(a.codePointAt());

// fromCodePoint
// console.log(String.fromCodePoint(89,98));

// let fullName = "hello world"
// function upperCase(str) {
//     let char = ''
//     for (const value of fullName) {
//         char += String.fromCodePoint(value.codePointAt() + 32)
//     }
//     return char
// }
// let string = upperCase(fullName)
// console.log(string);

//-------------------------------- Array----

// Arrays
// Declaration
// Methods pop/push , shift/unshift
// new Array()
// Multidimensional arrays
// toString

// Arrays methods
// add/removes items
// arr.push()
// let array = [10, 20, 30, 40, 50];
// array[array.length]=200
// let returnValue = array.push(40, 50, 60)
// console.log(returnValue);

// arr.pop()
// let a=array.pop()
// console.log(a);

// arr.shift()
// let a = array.shift()
// console.log(a);

// arr.unshift()
// let a = array.unshift(10, 100)
// console.log(a);


// splice
// Delte method
// let array = [10, 20, 30, 40, 50, 60, 70];

// array.splice(3)
// console.log(array);

// update method
// array.splice(1, 3, 200)
// console.log(array);

// slice
// console.log(array.slice(0, 2));

// concat
// let array = [10, 20, 30, 40, 50, 60, 70];
// let array2 = [90, 100, 110, 120]
// let array3 = ['satyam']

// let a = array.concat(array2, array3)
// console.log(a);


// Iterate:forEach
// let array = [10, 20, 30, 40, 50, "hello world"]

// let a = array.forEach(element => {
//     console.log(element);
// });

// console.log(a);

// Searching in array indexOf lastIndexOf

// let array = [10, 20, 30, 40, 50]

// console.log(array.indexOf(10));
// console.log(array.lastIndexOf(50));
// console.log(array.includes(200));

// let value = array.find((value, index, arr) => value === 30)

// console.log(value);

// let f = array.filter((value, array) => {
//    return value === 10
// })
// console.log(f);


// transform an array
// Map
// let array = [10, 20, 30, 40]
// let a = array.map((value, index, array) => {
//     return value * 2
// })

// console.log(a);

// sort 
// let array = ['a', 'c', 'b', 'd', 'e']
// let array2 = [50, 30, 20, 40, 100];

// console.log(array.sort());
// let a = (array2.sort((a, b) => {
//     return a - b
// }));
// console.log(a);
// console.log(array2.reverse());


// toString
// let array = [50, 30, 20, 40, 100];
// console.log(array2.toString());
// join
// let string = array.join(" ");

// split
// console.log(string.split());

// reduce
// let array = [10, 20, 30, 40, 50, 60, 70, 10];
// let a = array.reduce((a, b) => {
//     return a + b
// })
// console.log(a);

// let array = [10, 20, 30, 40, 50, 60, 70, 10];
// let array = null;
// console.log(Array.isArray(array));

// multidimensional array
// let array = [[10, 20], [30, 40, 50], [60, 70,], 10];
// console.log(array[0][1]);

// Iterables
// string
// let str = "hello world"
// for (const str1 of str) {
//     console.log(str1);
// }

// Array
// let array = [10, 20, 30, 40, 50, 60, 70, 10];
// for (const element of array) {
//     console.log(element);
// }

// Object
// let obj ={
//     firstName:"hello world",
//     age:20
// }

// for (const element in obj) {
//     console.log(element);   
// }

//----------------------------------------

// map
// new Map()
// let map = new Map()
// // Map.set()
// map.set(1, 20)
// map.set(2, 30)
// map.set(3, 40)
// map.set(4, 50)
// map.set(5, 60)
// console.log(map.keys());

// for (const element of map.keys()) {
//     console.log(element);
// }
// console.log(map.values());

// for (const element of map.values()) {
//     console.log(element);
// }

// console.log(map.entries());
// for (const element of map.entries()) {
//     console.log(element[0]);    
// }

// Map.get()
// console.log(map.get(6));
// Map.has()
// console.log(map.has(2));
// Map.delete()
// console.log(map.delete(2));

// console.log(map);
// Map.clear()
// map.clear();
// console.log(map);

// Map.size()
// console.log(map.size,map);

// set--------------------------------------------------

// new set(iterable)

// let set=new Set()

// // set.add
// set.add(10)
// set.add(20)
// console.log(set);

// set.delete()
// set.has()
// set.clear()
// set.size()

//-------------------------------------------------------
// weekMap and weekSet

// WeakMap.get(key)
// let weakMap = new WeakMap()

// // WeakMap.set(key,value)
// let obj = { key: 1 }
// weakMap.set(obj, 10)

// // WeakMap.get()
// console.log(weakMap.get(obj))
// console.log(weakMap);
// // weakMap.has(key)
// console.log(weakMap.has(obj));

// weakMap.delete(key)
// console.log(weakMap.delete(obj));

// weakSet()
// let weakSet = new WeakSet()

// add
// weakSet.add({ value: 10 })
// console.log(weakSet);


// Object.keys, values,entries------------------------------------------------------------

// Object.keys(obj)
// let obj = {
//     name: "hello world",
//     age: 20,
//     phone: 1234567
// };
// console.log(Object.keys(obj));
// for (const key of Object.keys(obj)) {
//    console.log(key);   
// }

// Object.values(obj)
// let obj = {
//     name: "hello world",
//     age: 20,
//     phone: 1234567
// };
// console.log(Object.values(obj));
// for (const key of Object.values(obj)) {
//    console.log(key);   
// }

// Object.entries(obj)
// let obj = {
//     name: "hello world",
//     age: 20,
//     phone: 1234567
// };
// console.log(Object.entries(obj));
// for (const key of Object.entries(obj)) {
//     console.log(key);
//     // console.log(`key ${key[0]} value ${key[1]}`);
// }


// Distructuring assignment-------------------------------------------------------

// Array destructuring
// let array = [10, 20, 30, 40, 50, 60]

// // // let a = array[0]
// // // console.log(a);

// // The rest '...' 
// let [...a] = array // rest operator
// let b = [...array] // spread operator
// console.log(...a);
// console.log(b);

// for (const element of [...array]) {
//     console.log(element);
// }


// function addition(...a) {
//     console.log(a);

//     let sum = 0
//     for (const element of a) {
//         sum += element
//     }
//     console.log(sum);

// }
// addition(10, 20, 30, 40, 50, 3)

// Default values
// let array = [10, 20]
// let [a, b, c = 0] = array
// console.log(a, b, c);

// Object destructuring
// let object = {
//     name: {
//         firstName: "john",
//         lastName: "doe"
//     },
//     age: 20,
//     hoby: ['cricket']
// }

// // let { age: Age } = object
// // console.log(Age);

// let {  hoby   } = object;
// console.log(hoby);

// the rest pattern
// let object = {
//     name: {
//         firstName: "john",
//         lastName: "doe"
//     },
//     age: 20,
//     hoby: ['cricket']
// }
// let { age, hoby,...sub } = object;
// console.log(age,hoby,sub);


// JSON methods
// JSON.stringify
// let obj = {
//     name: "deepak",
//     age: 30
// }

// let a = JSON.stringify(obj)
// console.log(a,typeof a);

// let b=JSON.parse(a)
// console.log(b ,typeof b);


// JSON.parse
// let obj = {
//     name: "deepak",
//     age: 30
// }
// let a = JSON.parse(obj)
// console.log(a,typeof a);

// property flags and descriptors----------------------------------------------------------------
// Property flags
// writable
// enumerable
// configruable
// non writable
// non enumerable
// non configruable
// Object.defineProperty
// let obj = {
//     name: "hello world"
// }
// Object.defineProperty(obj, "name", {
//     writable: false
// })
// obj.name = 'jhon'
// console.log(obj.name);

// Object getOwnPropertyDescriptors
// let obj = {
//     name: "hello world"
// }
// console.log(Object.getOwnPropertyDescriptors(obj));

// obj.name = 'jhon'
// console.log(obj.name);



// sealing an object globally

// Object.preventExtensions(obj)
// Object.seal(obj)
// Object.freeze(obj)
// Object.isExtensible(obj)
// Object.isSeald(obj)
// Object.isFrozen(obj)

// let obj = {
//     name: "hello world"
// }

// Object.defineProperty(obj, 'name', {
//     writable: false
// })

// console.log(Object.getOwnPropertyDescriptors(obj));
// obj.name = 'deepak'


// configruable

// let obj = {
//     name: "hello world",
//     age: 10
// }

// Object.defineProperty(obj, "age", {
//     configurable: false
// })

// delete obj.age
// console.log(obj);

// enumerable
// let obj = {
//     name: "hello world",
//     age: 10
// }
// Object.defineProperty(obj, 'age', {
//     enumerable: false
// })
// for (const key in obj) {
//     console.log(key, obj[key]);
// }
// console.log(obj.age);

// Setter and getter

// setter
// let obj = {
//     name: "hello world",
//     age: 10,
//     // setName: function (value) {
//     //     this.name = value
//     // },
//     set setName(value) {
//         this.name = value
//     }
// }
// // obj.name = "jai "
// obj.setName = 'jhons'
// console.log(obj);

// getter

let obj = {
    name: "hello world",
    age: 10,
    // getName: function () {
    //     return this.name
    // }
    get getName(){
        return this.name
    } 
}
// getName()
console.log(obj.getName);

// console.log(obj.getName());


// console.log(obj.name);
// console.log(obj['name']);











