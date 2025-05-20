// // ✅ IIFE (Immediately Invoked Function Expression)

// // 📘 Definition:
// // A function that runs immediately after it is defined.

// // ✅ Key Points:
// // - Executes right after creation
// // - Creates private scope (not accessible globally)
// // - Helps avoid variable pollution
// // - Commonly used for initialization

// // ✅ Syntax:
// (function () {
//     // Your code here
// })();

// (() => {
//     // Arrow function IIFE
// })();

// // ✅ Example 1: Simple IIFE
// (function () {
//     console.log("IIFE executed");
// })();
// // Output: IIFE executed

// // ✅ Example 2: IIFE with parameters
// (function (a, b) {
//     console.log("Sum is", a + b);
// })(3, 4);
// // Output: Sum is 7

// // ✅ Example 3: Arrow function IIFE
// (() => {
//     console.log("Arrow IIFE works!");
// })();
// // Output: Arrow IIFE works!

// // ✅ Example 4: Private variables using IIFE
// const counter = (function () {
//     let count = 0;
//     return function () {
//         count++;
//         console.log("Counter:", count);
//     };
// })();
// counter(); // Counter: 1
// counter(); // Counter: 2

// // ✅ Example 5: Using 'this' with call()
// (function () {
//     console.log("This is:", this.name);
// }).call({ name: "Luffy" });
// // Output: This is: Luffy

// // ✅ Example 6: Using bind() with IIFE
// (function () {
//     console.log("Bound to:", this.name);
// }).bind({ name: "Zoro" })();
// // Output: Bound to: Zoro

// // ✅ Example 7: Using apply() with IIFE
// (function (msg) {
//     console.log(this.name + " says " + msg);
// }).apply({ name: "Sanji" }, ["Hello!"]);
// // Output: Sanji says Hello!
