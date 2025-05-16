// // 11. Delete Operator
// // The delete operator removes a property from an object or an element from an array.
// // It is used with the keyword 'delete'.

// // Example with object:
// let obj = { a: 1, b: 2, c: 3 };

// // Remove property 'b' from obj
// delete obj.b;

// console.log(obj);
// // Output: { a: 1, c: 3 }
// // Property 'b' no longer exists in obj

// // Example with array:
// let arr = [1, 2, 3, 4, 5];

// // Remove element at index 2 (which is the value 3)
// delete arr[2];

// console.log(arr);
// // Output: [1, 2, <1 empty item>, 4, 5]
// // Note: The array length remains 5, but index 2 is now empty (a "hole")

// // Important Notes:
// // - Using delete on array elements leaves "holes" (undefined spots), it does NOT re-index or shorten the array.
// // - To remove an element and re-index the array, use methods like arr.splice(index, 1).
// // - delete on variables (declared with var, let, or const) generally does not work and is discouraged.
// // - delete only removes object properties or array elements.

