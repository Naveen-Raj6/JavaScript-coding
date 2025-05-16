// // 10. Rest Operator
// // The rest operator (...) collects multiple elements or arguments into a single array.

// // Key points:
// // - Used mainly in function parameters to gather arguments into an array.
// // - Used in destructuring assignment to collect the remaining elements or properties.
// // - Different from the spread operator, which expands elements.

// // Example 1: Rest operator in array destructuring
// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = arr;
// // a = 1, b = 2, rest = [3, 4, 5]
// console.log(a);    // Output: 1
// console.log(b);    // Output: 2
// console.log(rest); // Output: [3, 4, 5]

// // Example 2: Rest operator in object destructuring
// const obj = { a: 1, b: 2, c: 3 };
// const { a: x, b: y, ...restObj } = obj;
// // x = 1, y = 2, restObj = { c: 3 }
// console.log(x);       // Output: 1
// console.log(y);       // Output: 2
// console.log(restObj); // Output: { c: 3 }

// // Example 3: Rest operator in function parameters
// function sumAll(...numbers) {
//     // 'numbers' is an array of all arguments passed
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sumAll(1, 2, 3));          // Output: 6
// console.log(sumAll(4, 5, 6, 7, 8));    // Output: 30

// // Summary:
// // - Rest gathers remaining elements or arguments into an array.
// // - Useful for variable number of function arguments.
// // - Works with array and object destructuring.
