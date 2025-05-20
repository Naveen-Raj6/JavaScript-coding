// // ✅ Currying in JavaScript

// // 📘 Definition:
// // Currying is a technique of transforming a function that takes **multiple arguments** into a **series of functions**,
// // each taking **one argument at a time**.

// // ✅ Key Points:
// Currying breaks a function into a sequence of functions, each handling one argument.
// // - Helps in function reusability and composition
// // - Returns new functions with partially applied arguments
// // - Common in functional programming
// // - Useful for customization and reducing repetition

// // ✅ Syntax:
// function normalAdd(a, b) {
//     return a + b;
// }

// // Curried version:
// function curriedAdd(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// console.log(curriedAdd(10)(20));✅
// console.log(curriedAdd(10,20));


// // ✅ Example 1: Basic Currying
// const add5 = curriedAdd(5);
// console.log(add5(3)); // Output: 8

// // ✅ Example 2: Currying with Arrow Functions
// const multiply = a => b => c => a * b * c;

// console.log(multiply(2)(3)(4)); // Output: 24

// // ✅ Example 3: Curry for Reusability
// function greet(greeting) {
//     return function (name) {
//         return `${greeting}, ${name}`;
//     };
// }

// const sayHello = greet("Hello");
// console.log(sayHello("Naveen")); // Output: Hello, Naveen
// console.log(sayHello("Zoro"));   // Output: Hello, Zoro

// // ✅ Example 4: Partial Application vs Currying
// // Partial Application = fix a few arguments, call later with rest
// function partialSum(a, b, c) {
//     return a + b + c;
// }

// const partialAdd = partialSum.bind(null, 2);
// console.log(partialAdd(3, 4)); // Output: 9

// // ✅ When to Use:
// // - When building configurable or reusable functions
// // - In functional libraries (like lodash's `_.curry()`)
// // - When you want to lock in certain arguments early

// // ✅ With Real-World Use Case
// // Example: Create a URL builder
// function createURL(base) {
//     return function (path) {
//         return `${base}/${path}`;
//     };
// }

// const apiURL = createURL("https://api.example.com");
// console.log(apiURL("users")); // Output: https://api.example.com/users
// console.log(apiURL("posts")); // Output: https://api.example.com/posts


// ✅ Example 1: Currying with `this`
// const person = {
//     prefix: "Mr.",
//     greet: function (greeting) {
//         return function (name) {
//             return `${greeting}, ${this.prefix} ${name}`;
//         };
//     },
// };

// const greetWithHello = person.greet("Hello").bind(person);
// console.log(greetWithHello("Zoro")); // Output: Hello, Mr. Zoro

// // ✅ Example 2: Using `call()` with Curried Function
// function greet(greeting) {
//     return function (name) {
//         return `${greeting}, ${this.title} ${name}`;
//     };
// }

// const greetPerson = greet("Hi");
// console.log(greetPerson.call({ title: "Captain" }, "Luffy"));
// // Output: Hi, Captain Luffy

// // ✅ Example 3: Using `apply()` with Curried Function
// const greetUser = greet("Welcome");
// console.log(greetUser.apply({ title: "Doctor" }, ["Chopper"]));
// // Output: Welcome, Doctor Chopper

// // ✅ Example 4: Using `bind()` with Curried Function
// const greetSamurai = greet("Salute");
// const boundGreet = greetSamurai.bind({ title: "Samurai" });
// console.log(boundGreet("Kin'emon")); // Output: Salute, Samurai Kin'emon
