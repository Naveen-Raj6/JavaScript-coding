// ✅ bind() in JavaScript

// 📘 Definition:
// The `bind()` method creates a **new function** that, when called,
// has its `this` keyword set to the provided value.

// ✅ Key Points:
// - Does NOT call the function immediately
// - Returns a new function with bound `this`
// - Useful for callbacks or event handlers
// - Can pre-set arguments (partial application)

// ✅ Syntax:
// const newFunc = originalFunc.bind(thisArg, arg1, arg2, ...);

// // ✅ Example 1: Simple bind()
// function greet() {
//     console.log("Hello, " + this.name);
// }

// const person = { name: "Nami" };

// const greetNami = greet.bind(person);
// greetNami(); // Output: Hello, Nami

// // ✅ Example 2: Pre-setting arguments with bind
// function greet(greeting, ending) {
//     console.log(greeting + ", " + this.name + ending);
// }

// const user = { name: "Zoro" };

// const customGreet = greet.bind(user, "Hey");
// // this is "!" is ending parameters value
// customGreet("!"); // Output: Hey, Zoro!
// // So it's equivalent to:
// const fullyGreet = greet.bind(user, "Hey", "!");
// fullyGreet(); // Output: Hey, Zoro!


// // ✅ Example 3: Using bind() with setTimeout
// const obj = {
//     name: "Sanji",
//     sayHi: function () {
//         console.log("Hi, I'm " + this.name);
//     }
// };

// setTimeout(obj.sayHi.bind(obj), 1000);
// // Output after 1s: Hi, I'm Sanji

// // ✅ Example 4: bind() doesn't execute immediately
// function add(x, y) {
//     return x + y;
// }

// const add10 = add.bind(null, 10); // First arg (x) is fixed to 10
// console.log(add10(5)); // Output: 15

// // ✅ Example 5: IIFE with bind()
// (function () {
//     console.log("Bound to: " + this.role);
// }).bind({ role: "Captain" })();
// // Output: Bound to: Captain

// // ✅ call vs apply vs bind
// function showInfo(a, b) {
//     console.log(`${this.name} got ${a} and ${b}`);
// }

// const student = { name: "Luffy" };

// showInfo.call(student, "A", "B");         // calls immediately
// showInfo.apply(student, ["A", "B"]);      // calls immediately with array
// const boundFn = showInfo.bind(student, "A", "B");
// boundFn();                                // calls later with pre-bound args
