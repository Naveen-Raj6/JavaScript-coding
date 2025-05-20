// // ✅ Recursive Function
// // A recursive function is a function that calls itself to solve a smaller instance of the same problem.

// // 📘 Key Points:
// // - Useful for tasks that can be broken into similar subtasks (e.g., factorial, Fibonacci).
// // - Must have a base case to stop the recursion.
// // - Can replace loops for certain problems (e.g., tree traversal).

// // ✅ Syntax:
// function functionName(params) {
//     if (baseCaseCondition) {
//         return result;
//     } else {
//         return functionName(modifiedParams); // recursive call
//     }
// }

// // ✅ First Example: Count down from a number
// function countDown(n) {
//     if (n === 0) {
//         console.log("Done!");
//         return;
//     }
//     console.log(n);
//     countDown(n - 1); // recursive call
// }

// countDown(5);
// // Output: 5 4 3 2 1 Done!

// // ✅ With Return Value: Factorial
// function factorial(n) {
//     if (n === 0) {
//         return 1; // base case
//     } else {
//         return n * factorial(n - 1); // recursive step
//     }
// }

// console.log(factorial(5)); // Output: 120

// // ✅ this keyword inside Recursive Function
// const user = {
//     name: "Naveen",
//     greet: function hello(times) {
//         if (times === 0) return;
//         console.log("Hello from", this.name);
//         this.greet(times - 1); // 'this' refers to user object
//     },
// };

// user.greet(3);
// // Output:
// // Hello from Naveen
// // Hello from Naveen
// // Hello from Naveen

// // ✅ bind() with Recursive Function
// function speak(count) {
//     if (count === 0) return;
//     console.log(this.sound);
//     speak.bind(this)(count - 1);
// }

// const dog = { sound: "Woof!" };
// const boundSpeak = speak.bind(dog);
// boundSpeak(3);
// // Output: Woof! Woof! Woof!

// // ✅ call() with Recursive Function
// function echo(n) {
//     if (n === 0) return;
//     console.log(this.word);
//     echo.call(this, n - 1);
// }

// const parrot = { word: "Polly" };
// echo.call(parrot, 2);
// // Output: Polly Polly

// // ✅ apply() with Recursive Function
// function shout(n, suffix) {
//     if (n === 0) return;
//     console.log(this.name + suffix);
//     shout.apply(this, [n - 1, suffix]);
// }

// const hero = { name: "Zoro" };
// shout.apply(hero, [2, "!!!"]);
// // Output: Zoro!!! Zoro!!!
