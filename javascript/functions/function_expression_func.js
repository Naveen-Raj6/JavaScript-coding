// // ✅ Function Expression
// // A function expression is when you assign a function to a variable.
// // Unlike named functions, function expressions are NOT hoisted.

// // 📌 Key Points:
// // - Function is assigned to a variable.
// // - Can be anonymous or named.
// // - Not hoisted — must be declared before use.
// // - Useful for creating functions dynamically or passing as values.

// // ✅ Syntax:
// const functionName = function (param1, param2) {
//     // function body
//     return result;
// };

// // ✅ First Example:
// const sayHi = function () {
//     console.log("Hi from function expression!");
// };
// sayHi(); // Output: Hi from function expression!

// // ✅ With Parameters & Return:
// const multiply = function (x, y) {
//     return x * y;
// };
// console.log(multiply(3, 5)); // Output: 15

// // ✅ 'this' keyword in Function Expression:
// const obj = {
//     name: "Naveen",
//     greet: function () {
//         console.log(this.name);
//     }
// };
// obj.greet(); // Output: Naveen

// // ✅ Using bind() with Function Expression:
// // bind() - Returns a new function with 'this' bound to the provided object.

// const sayName = function () {
//     console.log(this.name);
// };
// const person1 = { name: "Zoro" };
// const boundSayName = sayName.bind(person1);
// boundSayName(); // Output: Zoro

// // ✅ Using call() with Function Expression:
// // call() - Invokes the function with a specific 'this' and arguments individually.

// const introduce = function (age) {
//     console.log(this.name + " is " + age + " years old");
// };
// const person2 = { name: "Luffy" };
// introduce.call(person2, 19); // Output: Luffy is 19 years old

// // ✅ Using apply() with Function Expression:
// // apply() - Invokes the function with a specific 'this' and arguments as an array.

// const details = function (age, country) {
//     console.log(`${this.name} is ${age} and from ${country}`);
// };
// const person3 = { name: "Sanji" };
// details.apply(person3, [21, "France"]); // Output: Sanji is 21 and from France
