// // 9. Spread Operator
// // The spread operator (...) expands an iterable (like arrays or objects) into individual elements.

// // It’s useful for:
// // - Combining arrays or objects
// // - Creating shallow copies
// // - Passing multiple arguments to functions

// // Spread vs Rest:
// // Spread: expands elements from an iterable
// // Rest: collects multiple elements into an array

// // Example 1: Combining arrays using spread
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2]; // expands arr1 and arr2 elements into a new array
// console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

// // Example 2: Creating a shallow copy of an array
// let originalArray = [10, 20, 30];
// let copyArray = [...originalArray];
// console.log(copyArray); // Output: [10, 20, 30]

// // Example 3: Combining objects using spread
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let obj3 = { ...obj1, ...obj2 }; // expands obj1 and obj2 properties into a new object
// console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 4 }

// // Example 4: Creating a shallow copy of an object
// let originalObj = { x: 10, y: 20 };
// let copyObj = { ...originalObj };
// console.log(copyObj); // Output: { x: 10, y: 20 }

// // Example 5: Using spread in function calls
// function sum(a, b, c) {
//     return a + b + c;
// }

// let nums = [1, 2, 3];
// console.log(sum(...nums)); // Output: 6 (equivalent to sum(1, 2, 3))

// // Summary:
// // - Spread expands elements/properties
// // - Creates shallow copies (nested objects/arrays are not deeply copied)
// // - Useful for merging or cloning arrays/objects


// Note: Spread creates a shallow copy.Nested objects or arrays inside will still be referenced, not deeply cloned.

