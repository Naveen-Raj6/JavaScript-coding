// "use strict" enforces stricter parsing and error handling in JavaScript code
// It helps catch common coding mistakes and prevents the use of unsafe actions
// It must be placed at the top of a script or function to take effect

"use strict"; // Enable strict mode for the entire script

// Example 1: Prevents the use of undeclared variables
// x = 10; // ❌ ReferenceError: x is not defined
// let x = 10; // ✅ Proper declaration
// console.log(x); // Output: 10

// // Example 2: Prevents assignment to read-only properties
// const obj = {};
// Object.defineProperty(obj, "name", {
//     value: "John",
//     writable: false,
// });

// console.log(obj.name = "Jane");// ❌ TypeError in strict mode
// console.log(obj.name); // Output: John

// Example 3: Prevents duplicate parameter names
// function sum(a, a) { return a + a; } // ❌ SyntaxError in strict mode

// function sum(a, b) { // ✅ Valid in strict mode
//     return a + b;
// }
// console.log(sum(3, 4)); // Output: 7

// // Strict mode also disables `this` referring to the global object in functions
// function showThis() {
//     console.log(this); // undefined in strict mode
// }
// showThis();


// diffrence between strict and non strict

// // Non-strict mode
// function nonStrictMode() {
//     // No "use strict"
//     a = 10; // Allowed (creates global variable)
//     console.log("Non-Strict Mode - a:", a);

//     function test(x, x) {
//         console.log("Non-Strict Mode - Duplicate param x:", x); // No error
//     }
//     test(1, 2);

//     function showThis() {
//         console.log("Non-Strict Mode - this:", this); // refers to global object (window/global)
//     }
//     showThis();
// }

// nonStrictMode();


// // Strict mode
// function strictMode() {
//     "use strict";

//     try {
//         b = 20; // ❌ Error: b is not declared
//     } catch (err) {
//         console.log("Strict Mode - b error:", err.message);
//     }

//     try {
//         function test(y, y) { } // ❌ Error: duplicate parameter
//     } catch (err) {
//         console.log("Strict Mode - duplicate param error:", err.message);
//     }

//     function showThis() {
//         console.log("Strict Mode - this:", this); // undefined
//     }
//     showThis();
// }

// strictMode();
