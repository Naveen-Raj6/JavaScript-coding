// // 13. In Operator
// // The `in` operator checks whether a specified property/key exists in an object or an array.
// // It returns true if the property exists, otherwise false.

// // Example with an object:
// let obj = { a: 1, b: 2, c: 3 };

// console.log("a" in obj); // Output: true
// // Explanation: The object `obj` has a property named 'a'.

// console.log("d" in obj); // Output: false
// // Explanation: The property 'd' does NOT exist in the object.

// console.log(0 in obj); // Output: false
// // Explanation: Numeric keys are not properties of this object.

// // Example with an array:
// let arr = [1, 2, 3, 4, 5];

// console.log(0 in arr); // Output: true
// // Explanation: Index 0 exists in the array (first element).

// console.log(5 in arr); // Output: false
// // Explanation: Index 5 does NOT exist because array length is 5 (last index is 4).

// // Additional notes:
// // - The `in` operator checks for the presence of a property in the entire prototype chain.
// // - It works with both object properties and array indices.
