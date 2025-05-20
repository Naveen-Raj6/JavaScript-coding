// // ✅ Higher-Order Function

// // 📘 Definition:
// // A Higher-Order Function is a function that either:
// // - Takes one or more functions as arguments, OR
// // - Returns another function as its result.

// // ✅ Key Points:
// // - Used in functional programming
// // - Enables abstraction and reusability
// // - Common examples: map(), filter(), reduce()
// // - Can be used for callbacks, currying, and decorators

// // ✅ Syntax:
// function higherOrder(fn) {
//     // do something
//     return function () {
//         // return another function
//     };
// }

// // ✅ Example 1: Passing a function as an argument
// function greet(name) {
//     return "Hello, " + name;
// }

// function processUserInput(callback) {
//     const name = "Naveen";
//     console.log(callback(name));
// }

// processUserInput(greet);
// // Output: Hello, Naveen

// // ✅ Example 2: Returning a function from another function
// function multiplier(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }

// const double = multiplier(2);
// console.log(double(5)); // Output: 10

// note:
// Even though the function is anonymous(it has no name), we assigned it to a variable:
// const double = multiplier(2);
// So now the anonymous function is stored inside the variable double.
// We can use double as if it was the function name.

// // ✅ Example 3: Using map() as a Higher-Order Function
// const nums = [1, 2, 3, 4];
// const squared = nums.map(function (num) {
//     return num * num;
// });
// console.log(squared); // Output: [1, 4, 9, 16]

// // ✅ Using `this` inside a Higher-Order Function
// const obj = {
//     factor: 10,
//     multiply: function (arr) {
//         return arr.map(function (num) {
//             return num * this.factor;
//         }, this); // pass `this` as second argument to map()
//     },
// };
// console.log(obj.multiply([1, 2, 3])); // Output: [10, 20, 30]

// note:
// The map() function creates a new scope, and the regular function(num) { ... } inside it doesn't automatically inherit this from multiply.
// So without passing this, you'd get undefined:
// multiply: function (arr) {
//         return arr.map(function (num) {
//             return num * this.factor;
//         }, this);
// or
// multiply: function (arr) {
//     return arr.map(function (num) {
//         return num * this.factor; // ❌ this is undefined here!
// });
// console.log(obj.multiply([1, 2, 3])); // Output: [NaN, NaN, NaN]
// Because inside the map() callback, this is no longer referring to obj.


// // ✅ call() with Higher-Order Function
// function greetWithAge(age) {
//     console.log(`${this.name} is ${age} years old`);
// }

// function executeGreet(fn, age) {
//     fn.call({ name: "Luffy" }, age);
// }

// executeGreet(greetWithAge, 19); // Output: Luffy is 19 years old

// // ✅ bind() with Higher-Order Function
// function showMessage(message) {
//     console.log(this.prefix + message);
// }

// function useMessage(fn) {
//     const bound = fn.bind({ prefix: "Note: " });
//     bound("This is bound.");
// }

// useMessage(showMessage); // Output: Note: This is bound

// note:
// bound("This is bound."); //This line passes "This is bound." as the argument for message.
// so this " bound("This is bound."); " is equivalent to: " showMessage.call({ prefix: "Note: " }, "This is bound."); "
// Which results in: console.log("Note: " + "This is bound."); // => Note: This is bound.




// // ✅ apply() with Higher-Order Function
// function display(name, country) {
//     console.log(`${this.title} ${name} from ${country}`);
// }

// function useDisplay(fn) {
//     fn.apply({ title: "Mr." }, ["Zoro", "Wano"]);
// }

// useDisplay(display); // Output: Mr. Zoro from Wano
