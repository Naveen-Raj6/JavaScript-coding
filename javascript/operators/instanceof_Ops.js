// // 12. instanceof Operator
// // The instanceof operator checks if an object is an instance of a particular constructor function or class.
// // It returns true if the object is in the prototype chain of the constructor, otherwise false.

// // Example:

// let obj = new Date(); // Create a new Date object

// console.log(obj instanceof Date);    // Output: true
// // Explanation: obj was created with the Date constructor, so it is an instance of Date.

// console.log(obj instanceof Object);  // Output: true
// // Explanation: All objects in JavaScript inherit from Object, so this is true.

// console.log(obj instanceof Array);   // Output: false
// // Explanation: obj is NOT an instance of Array, so this returns false.

// console.log(obj instanceof Function); // Output: false
// // Explanation: obj is not a function object.

// console.log(obj instanceof String);  // Output: false
// // Explanation: obj is not an instance of String.

// console.log(obj instanceof Number);  // Output: false
// // Explanation: obj is not an instance of Number.

// console.log(obj instanceof Boolean); // Output: false
// // Explanation: obj is not an instance of Boolean.

// // Additional Example:

// function Person(name) {
//     this.name = name;
// }

// let p = new Person("Naveen");

// console.log(p instanceof Person); // true
// console.log(p instanceof Object); // true
// console.log(p instanceof Array);  // false

// // notes:
// // - instanceof checks if an object's prototype chain includes the prototype property of the constructor function.
// // - It is different from typeof, which returns the data type of a variable as a string.
