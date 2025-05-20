// // ✅ apply() in JavaScript

// // 📘 Definition:
// // The `apply()` method calls a function with a given `this` value, 
// // and arguments provided as an array (or array-like object).

// // ✅ Key Points:
// // - Similar to call(), but arguments are passed as an array
// // - Useful when arguments are already in array form
// // - Changes the `this` context of the function

// // ✅ Syntax:
// func.apply(thisArg, [arg1, arg2, ...]);

// // ✅ Example 1: Simple apply()
// function greet(age) {
//     console.log(`${this.name} is ${age} years old`);
// }

// const person = { name: "Zoro" };

// greet.apply(person, [21]);
// // Output: Zoro is 21 years old

// // ✅ Example 2: apply() with multiple arguments
// function introduce(city, hobby) {
//     console.log(`${this.name} lives in ${city} and loves ${hobby}`);
// }

// const user = { name: "Sanji" };

// introduce.apply(user, ["Paris", "cooking"]);
// // Output: Sanji lives in Paris and loves cooking

// // ✅ Example 3: apply() with Math.max (spread array to arguments)
// const nums = [4, 2, 9, 1];
// const max = Math.max.apply(null, nums);
// console.log(max); // Output: 9

// // ✅ Example 4: Using apply() with IIFE
// (function (msg) {
//     console.log(this.name + " says " + msg);
// }).apply({ name: "Brook" }, ["Yohoho!"]);
// // Output: Brook says Yohoho!

// // ✅ Real-life use case: Convert arguments to array
// function sum() {
//     const args = Array.prototype.slice.apply(arguments);
//     return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3)); // Output: 6

// // ✅ Comparison: call() vs apply()
// function showInfo(a, b) {
//     console.log(`${this.name} got ${a} and ${b}`);
// }

// const student = { name: "Nami" };

// showInfo.call(student, "A", "B");           // args passed individually
// showInfo.apply(student, ["A", "B"]);        // args passed as array
