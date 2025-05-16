// // with operator
// // The `with` operator extends the scope chain, allowing direct access to an object's properties inside a block.
// // The with operator is commonly used to simplify code by allowing you to access properties of an object without having to repeat the object name.
// // The with operator is not commonly used in high-level programming tasks, and it is generally discouraged due to potential performance issues and code readability concerns.
// // The with operator is not the same as the this keyword, which is used to refer to the current object in a method or function.
// // The with operator is not the same as the in operator, which is used to check if a property exists in an object or an array.


// // let obj = { a: 1, b: 2, c: 3 };
// // with (obj) {
// //   console.log(a); // Output: 1
// //   console.log(b); // Output: 2
// //   console.log(c); // Output: 3
// // }
// // console.log(a); // Output: ReferenceError: a is not defined
// // console.log(b); // Output: ReferenceError: b is not defined
// // console.log(c); // Output: ReferenceError: c is not defined

// // Example Object
// let obj = { a: 1, b: 2, c: 3 };

// // Using `with` to access properties without repeating `obj`
// with (obj) {
//     console.log(a); // Output: 1
//     console.log(b); // Output: 2
//     console.log(c); // Output: 3
// }

// // Outside the `with` block, the properties are not accessible directly
// try {
//     console.log(a); // ReferenceError
// } catch (error) {
//     console.log("a is not defined outside 'with' block"); // Output
// }

// try {
//     console.log(b); // ReferenceError
// } catch (error) {
//     console.log("b is not defined outside 'with' block"); // Output
// }

// try {
//     console.log(c); // ReferenceError
// } catch (error) {
//     console.log("c is not defined outside 'with' block"); // Output
// }

// notes
// The with statement is discouraged in strict mode('use strict';) and deprecated in modern JavaScript.
// It can lead to ambiguous code and performance issues.
// Instead of using with, prefer explicit references like obj.a, obj.b, etc.
