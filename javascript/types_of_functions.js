
// "use strict";

// /*
// 1. Named Function
// - A function with a name.
// - It can be called before or after declaration due to hoisting.
// */
// function add(a, b) {
//     return a + b;
// }
// console.log("Named Function:", add(5, 3)); // Output: 8

// /*
// 2. Function Expression
// - A function assigned to a variable.
// - Not hoisted.
// */
// const subtract = function (a, b) {
//     return a - b;
// };
// console.log("Function Expression:", subtract(10, 4)); // Output: 6

// /*
// 3. Arrow Function (ES6+)
// - Shorter syntax.
// - Does not have its own 'this'.
// */
// const multiply = (a, b) => a * b;
// console.log("Arrow Function:", multiply(4, 5)); // Output: 20

// /*
// 4. Anonymous Function
// - A function without a name.
// - Usually used as an argument or callback.
// */
// setTimeout(function () {
//     console.log("Anonymous Function: Delayed by 1 second");
// }, 1000);

// /*
// 5. IIFE (Immediately Invoked Function Expression)
// - Runs immediately after it’s defined.
// */
// (function () {
//     console.log("IIFE: This function runs immediately");
// })();

// /*
// 6. Generator Function
// - Can pause and resume execution.
// - Uses `function*` and `yield`.
// */
// function* numberGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const gen = numberGenerator();
// console.log("Generator Function:", gen.next().value); // 1
// console.log("Generator Function:", gen.next().value); // 2
// console.log("Generator Function:", gen.next().value); // 3

// /*
// 7. Higher-Order Function
// - A function that takes another function as an argument or returns one.
// */
// function higherOrder(fn, value) {
//     return fn(value);
// }
// function square(x) {
//     return x * x;
// }
// console.log("Higher-Order Function:", higherOrder(square, 6)); // 36

// /*
// 8. Callback Function
// - A function passed into another function to be executed later.
// */
// function processUserInput(callback) {
//     const name = "Naveen";
//     callback(name);
// }
// processUserInput(function (name) {
//     console.log("Callback Function: Hello " + name);
// });

// /*
// 9. Currying function
// Currying is a technique of transforming a function that takes **multiple arguments** into a **series of functions**,
// each taking **one argument at a time**.
// */
// function curriedAdd(a) {
//     return function (b) {
//         b=a+b;
//         return function(c){
//             return b*c
//         };
//     };
//   }
// console.log(curriedAdd(10)(10)(2));
