// // 8. Type Operators
// // Type operators help you determine the data type of a value or variable.

// // The most common type operator in JavaScript is 'typeof'.
// // It returns a string indicating the type of the operand.

// let a = 42;
// let w = typeof a;  // Checks the type of variable 'a'
// console.log(w);    // Output: "number"

// let x = typeof "Hello";
// console.log(x);    // Output: "string"

// let y = typeof true;
// console.log(y);    // Output: "boolean"

// // Special case: typeof null returns "object" due to legacy reasons
// let z = typeof null;
// console.log(z);    // Output: "object"

// // undefined type
// let a1 = typeof undefined;
// console.log(a1);   // Output: "undefined"

// // Objects
// let a2 = typeof {};
// console.log(a2);   // Output: "object"

// // Arrays are technically objects in JavaScript
// let a3 = typeof [];
// console.log(a3);   // Output: "object"

// // Functions have their own type
// let a4 = typeof function () { };
// console.log(a4);   // Output: "function"

// // Symbol type, used for unique identifiers
// let a5 = typeof Symbol();
// console.log(a5);   // Output: "symbol"

// // BigInt type for very large integers
// let a6 = typeof BigInt(12345678901234567890);
// console.log(a6);   // Output: "bigint"

// // NaN (Not-a-Number) is a special numeric value, type is number
// let a7 = typeof NaN;
// console.log(a7);   // Output: "number"

// // Infinity is also considered a number
// let a8 = typeof Infinity;
// console.log(a8);   // Output: "number"


// notes
// typeof is the only built -in operator to detect types dynamically in JavaScript.
// It returns a string describing the type.
// Common return values: "number", "string", "boolean", "object", "function", "undefined", "symbol", "bigint".
// Quirk: typeof null returns "object".This is a well - known historical bug but is kept for backward compatibility.
// Arrays and objects both return "object", so to check for arrays specifically, you can use Array.isArray()(not shown here).
// NaN is a special value representing "Not-a-Number" but its type is still "number".
// Infinity and - Infinity are also considered "number" types.


