// // Optional Chaining with Function Calls
// // ?.() allows calling a function **only if it exists**, without throwing an error.

// // The optional chaining operator can also be used to call functions without having to check if the function is null or undefined.
// // It is represented by the ?. operator.
// // The optional chaining operator is commonly used to simplify code by allowing you to call functions without having to check if the function is null or undefined.
// // The optional chaining operator is not the same as the nullish coalescing operator, which is used to provide a default value if a variable is null or undefined.
// // The nullish coalescing operator is represented by the ?? operator.

// // let obj = { a: { b: { c: () => 1 } } };
// // console.log(obj?.a?.b?.c()); // Output: 1
// // console.log(obj?.a?.b?.d()); // Output: undefined


// // Example object with nested functions
// let obj = {
//     a: {
//         b: {
//             c: () => 1 // function that returns 1
//         }
//     }
// };

// // ✅ Function exists → it gets called
// console.log(obj?.a?.b?.c?.()); // Output: 1

// // ❌ Function doesn't exist → safely returns undefined (no error thrown)
// console.log(obj?.a?.b?.d?.()); // Output: undefined

// // ❌ Property doesn't exist → returns undefined instead of error
// console.log(obj?.x?.y?.z?.()); // Output: undefined


// How It Works:
// obj?.a?.b?.c?.()
// If obj.a.b.c exists and is a function, it will be called.
// If any link in the chain is null or undefined, it will return undefined instead of throwing an error.


// Without Optional Chaining:
// if (obj && obj.a && obj.a.b && typeof obj.a.b.c === "function") {
//     console.log(obj.a.b.c());
// }

