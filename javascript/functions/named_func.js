// Named Function
// A named function is a function that has a name identifier.
// You can call it by its name and reuse it as many times as needed.

// Key Points:
// Has a name after the function keyword.
// Can be hoisted(you can call it before it’s defined).
// Useful for code reusability and self - reference.
// Easier to debug because the name shows in stack traces.

// Syntax:
// function functionName(param1, param2) {
//     // function body
//     return result;
// }


// First Example:
// function sayHello() {
//     console.log("Hello from a named function!");
// }

// sayHello(); // Output: Hello from a named function!


// With Parameters & Return:
// function add(a, b) {
//     return a + b;
// }

// console.log(add(3, 4)); // Output: 7


// this keyword in Named Function
// const user = {
//     name: "Naveen",
//     showName: function display() {
//         console.log(this.name);
//     }
// };

// user.showName(); // Output: Naveen

// note: this refers to the object that owns the method(here, user).


// Using bind() with Named Function
// bind() Definition:Creates a new function with a given this value.Does not execute immediately.

// function show() {
//     console.log(this.name);
// }

// const person = { name: "Zoro" };

// const boundFn = show.bind(person);
// boundFn(); // Output: Zoro


// Using call() with Named Function
// call() Definition:Calls the function with a specific this and individual arguments.

// function greet(age) {
//     console.log(this.name + " is " + age + " years old");
// }
// const person = { name: "Luffy" };
// greet.call(person, 19); // Output: Luffy is 19 years old


// Using apply() with Named Function
// apply() Definition:Calls the function with a specific this and arguments as an array.

// function greet(age, country) {
//     console.log(`${this.name} is ${age} and from ${country}`);
// }

// const person = { name: "Sanji" };

// greet.apply(person, [21, "France"]); // Output: Sanji is 21 and from France
  
  
  