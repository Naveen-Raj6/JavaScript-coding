// Anonymous Function
// An anonymous function is a function without a name.
// It is usually used as a function expression, callback, or in places where you don’t need to reuse the function.


// Key Points:
// It does not have a name.
// Cannot be self - referenced directly(unlike named functions).
// Can be assigned to variables.
// Mostly used as:
// * Callback functions
// * IIFE(Immediately Invoked Function Expression)
// * Inside event handlers, setTimeout, map, etc.

// syntax 
// function (param1, param2) {
//     // function body
// };
  
// example
// const greet = function () {
//     console.log("Hello from anonymous function!");
// };
// greet(); // Output: Hello from anonymous function!


// example as callback 
// setTimeout(function() {
// console.log("Executed after 1 second");
// }, 1000);


// this keyword in Anonymous Function:
// const obj = {
//     name: "Anonymous",
//     greet: function () {
//         console.log(this.name); // 'this' refers to obj
//     }
// };
// obj.greet(); // Output: Anonymous


// Using bind() with Anonymous Function
// bind():Creates a new function with this set to the given object.
// It does not call the function immediately.

// example with bind 
// const person = {
//     name: "John"
// };

// const greet = function () {
//     console.log("Hello, " + this.name);
// };

// const boundGreet = greet.bind(person);
// boundGreet(); // Output: Hello, John


// Using call() with Anonymous Function
// call():Calls a function immediately, with this set to a specific object.
// Arguments are passed individually.

// example with call 
// const person = {
//     name: "Alice"
// };
// const greet = function () {
//     console.log("Hi, " + this.name);
// };
// greet.call(person); // Output: Hi, Alice
  

// Using apply() with Anonymous Function
// apply():Same as call(), but arguments are passed as an array.

// example with apply
// const person = {
//     name: "Bob"
// };
// const greet = function (greeting) {
//     console.log(greeting + ", " + this.name);
// };
// greet.apply(person, ["Hey"]); // Output: Hey, Bob


// Syntax & Example (usually used as callback)
// setTimeout(function () {
//     console.log("Hello from anonymous function!");
// }, 1000);
  