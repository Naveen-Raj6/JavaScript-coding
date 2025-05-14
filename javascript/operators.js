// Operators in JavaScript are special symbols or keywords that perform operations on one or more operands (values or variables).
// Operators are used to assign values, compare values, perform arithmetic operations, and more.
// Operators are the building blocks of JavaScript programming and are used to manipulate data and variables.

// There are different types of operators in JavaScript, including:

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Ternary Operator
// 7. Unary Operators
// 8. Type Operators
// 9. Spread Operator
// 10. Rest Operator
// 11. Delete Operator
// 12. Instanceof Operator
// 13. In Operator
// 14. Comma Operator
// 15. Void Operator
// 16. With Operator
// 17. Nullish Coalescing Operator
// 18. Optional Chaining Operator
// 19. Optional Chaining function call operator
// 20. Nullish Coalescing Assignment Operator


//1. Arithmetic Operators
// Arithmetic operators are used to perform basic mathematical operations such as addition, subtraction, multiplication, and division.

//addition (+): Adds two numbers together.
//let x = 10;
//let y = 5;
//let z = x + y;
//console.log(z); // Output: 15

// Subtraction (-): Subtracts one number from another.
//let a = x - y;
//console.log(a); // Output: 5

// Multiplication (*): Multiplies two numbers together.
//let b = x * y;
//console.log(b); // Output: 50

// Division (/): Divides one number by another.
//let c = x / y;
//console.log(c); // Output: 2

// Modulus (%): Returns the remainder of a division operation.
//let d = x % y;
//console.log(d); // Output: 0

// Exponentiation (**): Raises a number to the power of another number.
//let e = x ** y;
//console.log(e); // Output: 100000

// Increment (++): Increases a number by 1.
//let f = x++;
//console.log(f); // Output: 10 (f is assigned the value of x before incrementing)
//console.log(x); // Output: 11 (x is incremented after assignment)

// Decrement (--): Decreases a number by 1.
//let g = x--;
//console.log(g); // Output: 11 (g is assigned the value of x before decrementing)
//console.log(x); // Output: 10 (x is decremented after assignment)


//2. Assignment Operators
// Assignment operators are used to assign values to variables. They can also perform operations and assign the result to a variable.

// Assignment (=): Assigns a value to a variable.
//let x = 10;
//console.log(x); // Output: 10
//let y = 5;
//console.log(y); // Output: 5
//let z = x + y;
//console.log(z); // Output: 15
// same for other arithmetic operators like -, *, /, %, **

//let h = x += y; // x = x + y
//console.log(h); // Output: 15 (x is now 15)

//same for other assignment operators like -=, *=, /=, %=, **=, &=, |=, ^=, <<=, >>=, >>>=


//3. Comparison Operators
// Comparison operators are used to compare two values and return a boolean value (true or false).
// They are commonly used in conditional statements and loops to control the flow of the program.

// Equal (==): Compares two values for equality (loose comparison).
//console.log(x == y); // Output: false

// Strict Equal (===): Compares two values for equality (strict comparison).
//console.log(x === y); // Output: false

// Not Equal (!=): Compares two values for inequality (loose comparison).
//console.log(x != y); // Output: true

// Strict Not Equal (!==): Compares two values for inequality (strict comparison).
//console.log(x !== y); // Output: true

// Greater Than (>):
//console.log(x > y); // Output: true

// Less Than (<):
//console.log(x < y); // Output: false

// Greater Than or Equal (>=):
//console.log(x >= y); // Output: true

// Less Than or Equal (<=):
//console.log(x <= y); // Output: false


//4. Logical Operators
// Logical operators are used to combine or negate boolean values. They are commonly used in conditional statements and loops.

// Logical AND (&&):
//console.log(x > y && y > z); // Output: false

// Logical OR (||):
//console.log(x > y || y > z); // Output: true

// Logical NOT (!):
//console.log(!(x > y)); // Output: true
//console.log(!(x < y)); // Output: false
//console.log(!(x == y)); // Output: true
//console.log(!(x != y)); // Output: false
//console.log(!(x === y)); // Output: true
//console.log(!(x !== y)); // Output: false
//console.log(!(x >= y)); // Output: true
//console.log(!(x <= y)); // Output: false
//console.log(!(x && y)); // Output: false
//console.log(!(x || y)); // Output: true


// 5. Bitwise Operators
// Bitwise operators are used to perform operations on binary representations of numbers. They operate on the individual bits of the operands.
// They are commonly used in low-level programming and bit manipulation tasks.
// They are not commonly used in high-level programming tasks, but they can be useful in certain situations.

// the bitwise operators are as follows:
// Bitwise AND (&): Performs a bitwise AND operation on two numbers.
//let a = 5; // 0101 in binary
//let c = a & b; // 0001 in binary (1 in decimal)
//console.log(c); // Output: 1

// Bitwise OR (|): Performs a bitwise OR operation on two numbers.
//let d = a | b; // 0111 in binary (7 in decimal)
//console.log(d); // Output: 7

// Bitwise XOR (^): Performs a bitwise XOR operation on two numbers.
//let e = a ^ b; // 0110 in binary (6 in decimal)
//console.log(e); // Output: 6

// Bitwise NOT (~): Inverts the bits of a number.
//let f = ~a; // 1010 in binary (10 in decimal)
//console.log(f); // Output: -6 (in two's complement representation)

// Left Shift (<<): Shifts the bits of a number to the left by a specified number of positions.
//let g = a << 1; // 1010 in binary (10 in decimal)
//console.log(g); // Output: 20

// Right Shift (>>): Shifts the bits of a number to the right by a specified number of positions.
//let h = a >> 1; // 0010 in binary (2 in decimal)
//console.log(h); // Output: 2

// Right Shift with Zero Fill (>>>): Shifts the bits of a number to the right by a specified number of positions, filling with zeros.
//let i = a >>> 1; // 0010 in binary (2 in decimal)
//console.log(i); // Output: 2

// Left Shift with Zero Fill (<<<): Shifts the bits of a number to the left by a specified number of positions, filling with zeros.
//let j = a << 1; // 1010 in binary (10 in decimal)
//console.log(j); // Output: 20


// Ternary Operator
// The ternary operator is a shorthand way to write an if-else statement. It takes three operands and returns one of two values based on a condition.

// let k = (a > b) ? a : b;
// console.log(k); // Output: 5

// let l = (a < b) ? a : b;
// console.log(l); // Output: 3

// let m = (a == b) ? a : b;
// console.log(m); // Output: 5

// let n = (a != b) ? a : b;
// console.log(n); // Output: 5

// let o = (a === b) ? a : b;
// console.log(o); // Output: 5

// let p = (a !== b) ? a : b;
// console.log(p); // Output: 5


// Unary Operators
// Unary operators are operators that operate on a single operand. They can be used to perform operations such as negation, incrementing, and decrementing.

// The unary operators are as follows:

// Unary Plus (+): Converts a value to a number.
//let q = +a; // 5
//console.log(q); // Output: 5

// Unary Minus (-): Converts a value to a negative number.
//let t = -a; // -5
//console.log(t); // Output: -5

// Unary Increment (++): Increases a number by 1.
//let u = ++a; // 6
//console.log(u); // Output: 6

// Unary Decrement (--): Decreases a number by 1.
//let v = --a; // 5
//console.log(v); // Output: 5


// Type Operators
// Type operators are used to determine the type of a value or variable. They can be used to check if a value is a number, string, boolean, or object.

// The type operators are as follows:
// Typeof: Returns the type of a value or variable.
//let w = typeof a; // "number"
//console.log(w); // Output: "number"
//let x = typeof "Hello"; // "string"
//console.log(x); // Output: "string"
//let y = typeof true; // "boolean"
//console.log(y); // Output: "boolean"
//let z = typeof null; // "object"
//console.log(z); // Output: "object"
//let a1 = typeof undefined; // "undefined"
//console.log(a1); // Output: "undefined"
//let a2 = typeof {}; // "object"
//console.log(a2); // Output: "object"
//let a3 = typeof []; // "object"
//console.log(a3); // Output: "object"
//let a4 = typeof function() {}; // "function"
//console.log(a4); // Output: "function"
//let a5 = typeof Symbol(); // "symbol"
//console.log(a5); // Output: "symbol"
//let a6 = typeof BigInt(12345678901234567890); // "bigint"
//console.log(a6); // Output: "bigint"
//let a7 = typeof NaN; // "number"
//console.log(a7); // Output: "number"
//let a8 = typeof Infinity; // "number"
//console.log(a8); // Output: "number"


// Spread Operator
// The spread operator is used to expand an iterable (such as an array or object) into individual elements.
// It is represented by three dots (...).
// The spread operator is commonly used in array and object destructuring, as well as in function calls to pass multiple arguments.
// The spread operator is not the same as the rest operator, which is used to collect multiple arguments into a single array.
// The spread operator is used to expand an iterable into individual elements, while the rest operator is used to collect multiple arguments into a single array.
// The spread operator is used to create shallow copies of arrays and objects, as well as to combine multiple arrays or objects into one.

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
// console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let obj3 = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
// console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 4 }


// Rest Operator
// The rest operator is used to collect multiple arguments into a single array.
// It is represented by three dots (...).
// The rest operator is commonly used in function parameters to collect multiple arguments into a single array.
// The rest operator is not the same as the spread operator, which is used to expand an iterable into individual elements.
// The rest operator is used to collect multiple arguments into a single array, while the spread operator is used to expand an iterable into individual elements.

// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = arr; // a = 1, b = 2, rest = [3, 4, 5]
// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(rest); // Output: [3, 4, 5]

// const obj = { a: 1, b: 2, c: 3 };
// const { a: x, b: y, ...restObj } = obj; // x = 1, y = 2, restObj = { c: 3 }
// console.log(x); // Output: 1
// console.log(y); // Output: 2
// console.log(restObj); // Output: { c: 3 }
// The rest operator can also be used in function parameters to collect multiple arguments into a single array.


// delete operator
// The delete operator is used to remove a property from an object or an element from an array.
// It is represented by the delete keyword.
// The delete operator is commonly used to remove properties from objects or elements from arrays.
// The delete operator can also be used to remove variables, but it is not recommended to use it for this purpose.
// The delete operator is not the same as the null operator, which is used to set a variable to null.

// let obj = { a: 1, b: 2, c: 3 };
// delete obj.b; // { a: 1, c: 3 }
// console.log(obj); // Output: { a: 1, c: 3 }
// let arr = [1, 2, 3, 4, 5];
// delete arr[2]; // [1, 2, <1 empty item>, 4, 5]
// console.log(arr); // Output: [1, 2, <1 empty item>, 4, 5]


// instanceof operator
// The instanceof operator is used to check if an object is an instance of a specific constructor function or class.
// It is represented by the instanceof keyword.
// The instanceof operator is commonly used to check if an object is an instance of a specific constructor function or class.
// The instanceof operator can also be used to check if an object is an instance of a specific prototype chain.
// The instanceof operator is not the same as the typeof operator, which is used to check the type of a value or variable.

// let obj = new Date();
// console.log(obj instanceof Date); // Output: true
// console.log(obj instanceof Object); // Output: true
// console.log(obj instanceof Array); // Output: false
// console.log(obj instanceof Function); // Output: false
// console.log(obj instanceof String); // Output: false
// console.log(obj instanceof Number); // Output: false
// console.log(obj instanceof Boolean); // Output: false


//In operator
// The in operator is used to check if a property exists in an object or an array.
// It is represented by the in keyword.

// let obj = { a: 1, b: 2, c: 3 };
// console.log("a" in obj); // Output: true
// console.log("d" in obj); // Output: false
// console.log(0 in obj); // Output: false

// let arr = [1, 2, 3, 4, 5];
// console.log(0 in arr); // Output: true
// console.log(5 in arr); // Output: false


//comma operator
// The comma operator is used to evaluate multiple expressions and return the value of the last expression.
// It is represented by a comma (,).
// The comma operator is commonly used in for loops and function calls to evaluate multiple expressions.
// The comma operator is not commonly used in high-level programming tasks, but it can be useful in certain situations.
// The comma operator is not the same as the spread operator, which is used to expand an iterable into individual elements.

// let a = (1, 2, 3); // a = 3
// console.log(a); // Output: 3
// let b = (1 + 2, 3 + 4); // b = 7
// console.log(b); // Output: 7


//void operator
// The void operator is used to evaluate an expression and return undefined.
// It is represented by the void keyword.
// The void operator is commonly used to evaluate an expression without returning a value.
// The void operator is not commonly used in high-level programming tasks, but it can be useful in certain situations.
// The void operator is not the same as the delete operator, which is used to remove a property from an object or an element from an array.
// The void operator is not the same as the null operator, which is used to set a variable to null.

// let a = void 0; // a = undefined
// console.log(a); // Output: undefined
// let b = void (1 + 2); // b = undefined
// console.log(b); // Output: undefined


//with operator
// The with operator is used to extend the scope chain for a block of code.
// It is represented by the with keyword.
// The with operator is commonly used to simplify code by allowing you to access properties of an object without having to repeat the object name.
// The with operator is not commonly used in high-level programming tasks, and it is generally discouraged due to potential performance issues and code readability concerns.
// The with operator is not the same as the this keyword, which is used to refer to the current object in a method or function.
// The with operator is not the same as the in operator, which is used to check if a property exists in an object or an array.

// let obj = { a: 1, b: 2, c: 3 };
// with (obj) {
//   console.log(a); // Output: 1
//   console.log(b); // Output: 2   
//   console.log(c); // Output: 3
// }
// console.log(a); // Output: ReferenceError: a is not defined
// console.log(b); // Output: ReferenceError: b is not defined
// console.log(c); // Output: ReferenceError: c is not defined
// The with operator is not recommended for use in modern JavaScript programming, as it can lead to performance issues and code readability concerns. It is generally better to use explicit object references instead of the with operator.


// optional chaining operator
// The optional chaining operator is used to access properties of an object without having to check if the object is null or undefined.
// It is represented by the ?. operator.
// The optional chaining operator is commonly used to simplify code by allowing you to access properties of an object without having to check if the object is null or undefined.
// The optional chaining operator is not the same as the nullish coalescing operator, which is used to provide a default value if a variable is null or undefined.
// The nullish coalescing operator is represented by the ?? operator.
// The optional chaining operator is not the same as the spread operator, which is used to expand an iterable into individual elements.
// The optional chaining operator is not the same as the rest operator, which is used to collect multiple arguments into a single array.

// let obj = { a: { b: { c: 1 } } };
// console.log(obj?.a?.b?.c); // Output: 1
// console.log(obj?.a?.d?.c); // Output: undefined


// optional chaining operator with function calls
// The optional chaining operator can also be used to call functions without having to check if the function is null or undefined.
// It is represented by the ?. operator.
// The optional chaining operator is commonly used to simplify code by allowing you to call functions without having to check if the function is null or undefined.
// The optional chaining operator is not the same as the nullish coalescing operator, which is used to provide a default value if a variable is null or undefined.
// The nullish coalescing operator is represented by the ?? operator.

// let obj = { a: { b: { c: () => 1 } } };
// console.log(obj?.a?.b?.c()); // Output: 1
// console.log(obj?.a?.b?.d()); // Output: undefined


// nullish coalescing operator
// The nullish coalescing operator is used to provide a default value if a variable is null or undefined.
// It is represented by the ?? operator.
// The nullish coalescing operator is commonly used to provide a default value if a variable is null or undefined.
// The nullish coalescing operator is not the same as the optional chaining operator, which is used to access properties of an object without having to check if the object is null or undefined.
// The optional chaining operator is represented by the ?. operator.
// The nullish coalescing operator is not the same as the logical OR operator (||), which returns the first truthy value.
// The logical OR operator is represented by the || operator.
// The nullish coalescing operator is not the same as the logical AND operator (&&), which returns the first falsy value.
// The logical AND operator is represented by the && operator.
// The nullish coalescing operator is not the same as the spread operator, which is used to expand an iterable into individual elements.

