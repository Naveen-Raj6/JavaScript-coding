// // ✅ Arrow Function
// // Arrow functions are a shorter syntax for writing function expressions.
// // Introduced in ES6, they do NOT have their own 'this'.

// // 📌 Key Points:
// // - Shorter syntax than regular functions.
// // - Do NOT have their own 'this', 'arguments', or 'super'.
// // - Not hoisted (must be declared before use).
// // - Cannot be used as constructors (no 'new').

// // ✅ Syntax:
// // const functionName = (param1, param2) => {
// //     // function body
// //     return result;
// // };

// // ✅ First Example:
// const greet = () => {
//     console.log("Hello from arrow function!");
// };
// greet(); // Output: Hello from arrow function!

// // ✅ With Parameters & Return:
// const add = (a, b) => a + b;
// console.log(add(3, 4)); // Output: 7

// // ✅ With One Parameter (no need for parentheses):
// const square = x => x * x;
// console.log(square(5)); // Output: 25

// // ✅ 'this' in Arrow Function:
// // Arrow functions capture 'this' from the surrounding context.

// const user = {
//     name: "Naveen",
//     showName: function () {
//         const arrowFunc = () => {
//             console.log(this.name);
//         };
//         arrowFunc();
//     }
// };
// user.showName(); // Output: Naveen

// // ✅ bind() with Arrow Function
// // ❌ bind has no effect — arrow functions don’t have their own 'this'.

// const arrow = () => {
//     console.log(this.name);
// };
// const person = { name: "Zoro" };
// const boundArrow = arrow.bind(person);
// boundArrow(); // Output: undefined (arrow uses lexical this)

// // ✅ call() with Arrow Function
// // ❌ call has no effect on 'this'

// arrow.call({ name: "Luffy" }); // Output: undefined

// // ✅ apply() with Arrow Function
// // ❌ apply has no effect on 'this'

// arrow.apply({ name: "Sanji" }); // Output: undefined


// Normally in JavaScript:
// Regular functions have their own this — it changes based on how the function is called.
// Arrow functions don’t create a new this.Instead, they use the this value of the surrounding context.

// Comparison Example:
// const obj = {
//     name: "Naveen",
//     regularFunc: function () {
//         console.log("regular:", this.name); // ✅ refers to obj
//     },
//     arrowFunc: () => {
//         console.log("arrow:", this.name); // ❌ undefined, refers to outer/global scope
//     }
// };

// obj.regularFunc(); // Output: regular: Naveen
// obj.arrowFunc();   // Output: arrow: undefined (or global name if defined)

// note:
// regularFunc: gets this from obj
// arrowFunc: gets this from the place where the arrow function was defined, which in this case is the global scope — not obj.


// Correct Usage of this in Arrow Function:
// If you define the arrow function inside a method, it can inherit this from the surrounding method:
// const user = {
//     name: "Zoro",
//     showName: function () {
//         const arrow = () => {
//             console.log(this.name); // ✅ 'this' comes from showName
//         };
//         arrow();
//     }
// };

// user.showName(); // Output: Zoro
  

