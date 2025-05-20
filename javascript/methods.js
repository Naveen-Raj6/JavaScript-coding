// // ✅ Method in JavaScript

// // 📘 Definition:
// // A method is a function **associated with an object** (i.e., a property whose value is a function).

// // ✅ Key Points:
// // - A method is a function defined inside an object.
// // - It can access the object’s properties using `this`.
// // - Useful for encapsulating behavior in objects.

// // ✅ Syntax:
// const objectName = {
//     methodName: function () {
//         // code
//     }
// };

// // ✅ Example 1: Simple Method
// const user = {
//     name: "Naveen",
//     greet: function () {
//         console.log("Hello, " + this.name);
//     }
// };

// user.greet(); // Output: Hello, Naveen

// // ✅ Example 2: Method with Parameters
// const calculator = {
//     multiply: function (a, b) {
//         return a * b;
//     }
// };

// console.log(calculator.multiply(4, 5)); // Output: 20

// // ✅ Example 3: Using `this` inside a method
// const person = {
//     name: "Luffy",
//     age: 19,
//     describe: function () {
//         console.log(`${this.name} is ${this.age} years old.`);
//     }
// };

// person.describe(); // Output: Luffy is 19 years old

// // ✅ Example 4: Using call() with method
// function show() {
//     console.log("Name: " + this.name);
// }

// const user1 = { name: "Zoro" };

// show.call(user1); // Output: Name: Zoro

// // ✅ Example 5: Using apply() with method
// function greet(city, country) {
//     console.log(`${this.name} from ${city}, ${country}`);
// }

// const user2 = { name: "Sanji" };

// greet.apply(user2, ["Paris", "France"]); // Output: Sanji from Paris, France

// // ✅ Example 6: Using bind() with method
// function intro() {
//     console.log("I am " + this.name);
// }

// const user3 = { name: "Brook" };

// const boundIntro = intro.bind(user3);
// boundIntro(); // Output: I am Brook
