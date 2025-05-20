// // ✅ call() in JavaScript

// // 📘 Definition:
// // `call()` is a method that allows you to call a function with a specified `this` value 
// // and arguments provided individually.

// // ✅ Key Points:
// // - It changes the `this` context of the function
// // - Arguments are passed one by one
// // - Useful for function borrowing or method reuse

// // ✅ Syntax:
// func.call(thisArg, arg1, arg2, ...);

// // ✅ Example 1: Simple usage of call()
// function greet(age) {
//     console.log(`${this.name} is ${age} years old`);
// }

// const person = { name: "Naveen" };

// greet.call(person, 22);
// // Output: Naveen is 22 years old

// // ✅ Example 2: Function borrowing using call()
// const person1 = {
//     name: "Luffy",
//     sayHi: function () {
//         console.log("Hi, " + this.name);
//     }
// };

// const person2 = { name: "Zoro" };

// person1.sayHi.call(person2);
// // Output: Hi, Zoro

// // ✅ Example 3: call() with multiple arguments
// function introduce(city, hobby) {
//     console.log(`${this.name} lives in ${city} and loves ${hobby}`);
// }

// const user = { name: "Sanji" };

// introduce.call(user, "Paris", "cooking");
// // Output: Sanji lives in Paris and loves cooking

// // ✅ Example 4: call() with IIFE
// (function (msg) {
//     console.log(this.name + " says " + msg);
// }).call({ name: "Brook" }, "Yohoho!");
// // Output: Brook says Yohoho!

// // ✅ Real-life use case: Reusing array methods
// const arrayLike = {
//     0: "A",
//     1: "B",
//     2: "C",
//     length: 3
// };

// // Use Array.prototype.join on array-like object
// const result = Array.prototype.join.call(arrayLike, "-");
// console.log(result); // Output: A-B-C
