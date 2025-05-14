// JavaScript Boolean Inbuilt Methods

// 1. valueOf():Returns the primitive value of the Boolean object (i.e., true or false).
// Syntax: 
// booleanObj.valueOf()
// Example:
// let boolObj = new Boolean(true);
// console.log(boolObj.valueOf());  // true
// console.log(typeof boolObj);     // "object"
// console.log(typeof boolObj.valueOf());  // "boolean"

// 2. toString():Converts the Boolean value to a string "true" or "false".
// Syntax:
// boolean.toString()
// Example:
// let flag = true;
// console.log(flag.toString());  // "true"

// let boolObj = new Boolean(false);
// console.log(boolObj.toString());  // "false"


// Type Conversion(not a method, but very important)

// JavaScript automatically converts values to Booleans in conditions.
// Falsy Values(evaluated as false):
// * false
// * 0
// * ""(empty string)
// * null
// * undefined
// * NaN


// Example:
// if ("") {
//     console.log("This won't run");
// } else {
//     console.log("Falsy value"); // Output
// }



// Using Boolean() Constructor(Type Casting)
// You can use the Boolean constructor to explicitly convert any value to true / false.
// console.log(Boolean(10));       // true
// console.log(Boolean("Hello"));  // true
// console.log(Boolean(""));       // false
// console.log(Boolean(null));     // false




