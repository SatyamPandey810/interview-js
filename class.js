// basic syntex


// the 'class' syntex
// what is a class?
// class fields
// making bound method with class fields

// class Cat {
//     name = 'hello world'
//     age() {
//         console.log("cat function");
//     }
// }
// let a = new Cat()
// console.log(a);
// a.age()

// constructor
// class MyName {
//     name = 'hello world'
//     god = "jai shiv shankar"
//     constructor(a, b) {
//         this.name = a
//         this.god = b
//     }
//     age() {
//         return this.name
//     }
// }
// let a = new MyName("jai shree ram", "radhe radhe");
// console.log(a.name);
// // let b = a.age()
// console.log(a);

//                                         Class expression
// let a = class {
//     firstName = "hello world"
// }
// let b = new a()
// console.log(b.firstName);

//                         Computed name[...]

// let a = class {
//     ["first" + "Name"] = "hello world";
//     ["get" + "First" + "Name"]() {
//         console.log("hello");
//     }
// }

// let b = new a
// console.log(b);

// getters / setters
// getter
// class Car {
//     carName = "TATA"
//     getCarName() {
//         return this.carName
//     }
//     get getCarname() {
//         return this.carName
//     }
// }

// let car = new Car()
// console.log(car.getCarname);
// console.log(car.carName);
// console.log(car.getCarName());

// setter
// class Car {
//     carName = "TATA"
//     constructor(value) {
//         return this.carName = value
//     }
//     setCarName(a) {
//         return this.carName = a
//     }
//     set setCarname(b) {
//         return this.carName = b
//     }

// }
// let car = new Car("HERO")

// console.log(car.setCarName("sumo"));

// car.setCarname = "maruti";
// console.log(car.carName);

// class inheritance
// class parents {
//     className = "Parentsclasss"
//     getClassName() {
//         return this.className
//     }
// }

// class child extends parents {
//     // console.log(this.);
// }

// let Child = new child
// console.log(Child.getClassName());
// console.log(Child.className);

// the extends keywords

// Overriding a property
// class Parents {
//     className = "Parentsclasss"
//     getClassName() {
//         return this.className
//     }
// }

// class Child extends Parents {    
//     className = "hello child class"
// }

// let child = new Child()
// // console.log(child);

// console.log(child.className);
// console.log(child.getClassName());

// Overriding a method
// class Parents {
//     className = "parents class"
//     getParents() {
//         return this.className
//     }
// }
// class Child extends Parents {
//     className = "Child class"
//     getParents() {
//         return this.className + "Child"
//     }
// }
// let child = new Child()
// console.log(child.getParents());
//-------------------------------with parameeter

// class Parents {
//     className = "parents class"
//     getParents() {
//         return this.className
//     }
// }
// class Child extends Parents {
//     className = "Child class"
//     getParents(value) {
//         return this.className + "Child" + value;
//     }
// }

// let child = new Child()
// console.log(child.getParents("knfkjkdflkjH"));

// method overLoading
// class Aria {
//     ariaOf(radius) {
//         console.log(Math.PI * radius * radius);
//     }
//     ariaOf(length, breadth) {
//         console.log(length * breadth);
//     }
// }

// let aria = new Aria
// console.log(aria);

// Super keyword
// class Sup {
//     firstName;
//     testing = "testing"
//     constructor(value) {
//         this.firstName = value
//     }
//     getFirstName() {
//         console.log("working tree");

//         return this.firstName
//     }
// }

// class Child extends Sup {
//     constructor(value) {
//         // this.firstName = value
//         super(value)
//     }
//     testing = "testing child"
//     getFirstName() {
//         console.log(super.testing);

//         // console.log(super.getFirstName());
//         // return this.firstName + ' ' + "ChildClass"
//     }

// }
// let child = new Child("jkjjhkjjh")
// console.log(child.getFirstName());
// console.log(child.firstName);

// ==================================================

// Static properties 

// class Employee {
//     static counter = 0
//     constructor() {
//         Employee.counter++
//     }
// }

// let emp1 = new Employee()
// console.log(emp1);

// let emp2 = new Employee()
// console.log(emp2);

// console.log(Employee.counter);


// Static methods
// class Employee {
//     static counter = 0
//     constructor() {
//         Employee.counter++
//     }
//     static getTotlaInstance() {
//         return this.counter
//     }
// }

// let emp1 = new Employee()
// console.log(emp1);

// let emp2 = new Employee()
// console.log(emp2);
// console.log(Employee.counter);
// console.log(Employee.getTotlaInstance());

// Static properties
// Inheritance of static properties and methods
// class A {
//     firstName = "I am A"

//     getFirstName() {
//         return this.firstName
//     }
// }

// class B extends A {

// }

// let b = new B()
// console.log(b.firstName);
// console.log(b.getFirstName());

// private and protected properties and methods

// class A {
//     name = "A"
//     #private = "private property"
//        #getT = () => {
//             return this.#private
//         }
//        Gets=()=>{
//         return this.#private
//        } 
//     get getPrivate() {
//         // return this.#private
//         return this.#getT()
//     }
// }

// let a = new A()
// console.log(a.getPrivate);
// console.log(a.Gets());

//---------------------------
// Class checking "instanceOf"
// the instanceof operator

// class A {

// }
// let a = new A
// console.log(a instanceof A);

