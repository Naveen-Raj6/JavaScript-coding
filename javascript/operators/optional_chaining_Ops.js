// // Optional Chaining Operator (?.)
// // The optional chaining operator is used to access properties of an object without having to check if the object is null or undefined.
// // It is represented by the ?. operator.
// // The optional chaining operator is commonly used to simplify code by allowing you to access properties of an object without having to check if the object is null or undefined.
// // The optional chaining operator is not the same as the nullish coalescing operator, which is used to provide a default value if a variable is null or undefined.
// // The nullish coalescing operator is represented by the ?? operator.
// // The optional chaining operator is not the same as the spread operator, which is used to expand an iterable into individual elements.
// // The optional chaining operator is not the same as the rest operator, which is used to collect multiple arguments into a single array.
// // It allows safe access to deeply nested object properties
// // without manually checking if each property in the chain exists.

// // Example object
// let obj = { a: { b: { c: 1 } } };

// // Accessing deeply nested property safely
// console.log(obj?.a?.b?.c); // Output: 1 (because all levels exist)

// // Trying to access a non-existing nested property safely
// console.log(obj?.a?.d?.c); // Output: undefined (no error thrown)

// // Example with a missing top-level property
// let newObj = null;
// console.log(newObj?.a); // Output: undefined (no error)