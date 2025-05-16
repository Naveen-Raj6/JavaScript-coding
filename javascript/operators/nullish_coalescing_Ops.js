// // Nullish Coalescing Operator (??)
// // The nullish coalescing operator is used to provide a default value if a variable is null or undefined.
// // It is represented by the ?? operator.
// // The nullish coalescing operator is commonly used to provide a default value if a variable is null or undefined.
// // The nullish coalescing operator is not the same as the optional chaining operator, which is used to access properties of an object without having to check if the object is null or undefined.
// // The optional chaining operator is represented by the ?. operator.
// // The nullish coalescing operator is not the same as the logical OR operator (||), which returns the first truthy value.
// // The logical OR operator is represented by the || operator.
// // The nullish coalescing operator is not the same as the logical AND operator (&&), which returns the first falsy value.
// // The logical AND operator is represented by the && operator.
// // The nullish coalescing operator is not the same as the spread operator, which is used to expand an iterable into individual elements.


// // It returns the right-hand side **only if** the left-hand side is `null` or `undefined`.

// let a = null;
// let b = undefined;
// let c = 0;
// let d = "";
// let e = false;

// a and b are nullish → default values are used
// console.log(a ?? "Default A"); // Output: "Default A"
// console.log(b ?? "Default B"); // Output: "Default B"

// c, d, e are NOT nullish → original values are kept
// console.log(c ?? 100); // Output: 0
// console.log(d ?? "Empty"); // Output: ""
// console.log(e ?? true); // Output: false

// Difference from || (Logical OR):
// console.log(c || 100); // Output: 100 — because 0 is falsy
// console.log(c ?? 100); // Output: 0 — because 0 is not nullish


// * || returns the first truthy value.
// * ?? returns the first non - null / undefined value.

// Use Case:
// Use ?? when you want to assign defaults only for null or undefined, and keep falsy values like 0, "", or false.
