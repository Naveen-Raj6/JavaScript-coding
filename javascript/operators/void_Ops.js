// 15. void operator
// The void operator is used to evaluate an expression and return undefined.
// It is represented by the void keyword.
// The void operator is commonly used to evaluate an expression without returning a value.
// The void operator is not commonly used in high-level programming tasks, but it can be useful in certain situations.
// The void operator is not the same as the delete operator, which is used to remove a property from an object or an element from an array.
// The void operator is not the same as the null operator, which is used to set a variable to null.

// let a = void 0; // a = undefined
// console.log(a); // Output: undefined
// let b = void (1 + 2); // b = undefined
// console.log(b); // Output: undefined

// Example 1: Basic usage with 0
// let a = void 0;
// console.log(a); // Output: undefined

// // Example 2: Using an expression inside void
// let b = void (1 + 2);
// console.log(b); // Output: undefined

// // Example 3: With a function that returns a value
// function greet() {
//     console.log("Hello!");
//     return "Done";
// }

// Note: If you run this in a browser environment, you'll see how void is used in links (javascript:void(0)) to prevent the page from navigating or refreshing.