// // ✅ this Keyword in JavaScript

// // 📘 Definition:
// // `this` refers to the object that is currently executing the function.

// // ✅ Key Points:
// // - In a **method**, `this` refers to the object that owns the method.
// // - In a **regular function**, `this` is `undefined` in strict mode, or the global object in non-strict.
// // - In **arrow functions**, `this` is **lexically bound** (inherits from its parent scope).
// // - With `call`, `apply`, `bind` you can manually set the value of `this`.

// // ✅ Example 1: `this` inside a method
// const person = {
//     name: "Naveen",
//     greet: function () {
//         console.log("Hello, " + this.name);
//     }
// };

// person.greet(); // Output: Hello, Naveen

// // ✅ Example 2: `this` in a regular function
// function show() {
//     console.log(this);
// }
// show(); // Output: window (in browser) or undefined (in strict mode)

// // ✅ Example 3: `this` in arrow function
// const user = {
//     name: "Zoro",
//     greet: () => {
//         console.log("Hi, " + this.name);
//     }
// };

// user.greet(); // Output: Hi, undefined
// // ❗Arrow functions do not have their own `this`. They use the one from where they were defined.

// // ✅ Example 4: Using `this` with call()
// function sayHello() {
//     console.log("Hello " + this.name);
// }
// const obj1 = { name: "Luffy" };
// sayHello.call(obj1); // Output: Hello Luffy

// // ✅ Example 5: Using `this` with apply()
// function introduce(age, city) {
//     console.log(`${this.name} is ${age} and from ${city}`);
// }
// const obj2 = { name: "Sanji" };
// introduce.apply(obj2, [21, "Paris"]); // Output: Sanji is 21 and from Paris

// // ✅ Example 6: Using `this` with bind()
// function welcome() {
//     console.log("Welcome " + this.name);
// }
// const obj3 = { name: "Brook" };
// const boundFn = welcome.bind(obj3);
// boundFn(); // Output: Welcome Brook

// // ✅ Example 7: this inside a constructor
// function Hero(name) {
//     this.name = name;
// }
// const h = new Hero("Asta");
// console.log(h.name); // Output: Asta

// // ✅ Example 8: this in setTimeout (loses context)
// const team = {
//     name: "Straw Hats",
//     show: function () {
//         setTimeout(function () {
//             console.log(this.name); // ❌ undefined
//         }, 1000);
//     }
// };
// team.show();

// // ✅ Fix with arrow function:
// const team2 = {
//     name: "Straw Hats",
//     show: function () {
//         setTimeout(() => {
//             console.log(this.name); // ✅ Straw Hats
//         }, 1000);
//     }
// };
// team2.show();
