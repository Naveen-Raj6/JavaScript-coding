// Data Types in JavaScript
// JavaScript has several built-in data types, including:

// there two types of data types in JavaScript:
// 1. Primitive Data Types
// 2. Reference/Non-Primitive Data Types

// Primitive Data Types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Reference/Non-Primitive Data Types:
// 1. Object
// 2. Array
// 3. Function
// 4. Set
// 5. Map


// Primitive Data Types: it's object de-referencing because they are stored directly in the variable.and they store the value.

// 1. Number: Represents integer and floating - point numbers.
// Syntax:
// let age = 25;
// let price = 99.99;
// let temp = -10;

// let a = 10;
// let b = 3.5;
// let result = a + b;

// console.log(result);        // 13.5
// console.log(typeof result); // "number"

// Special Values:
// Infinity → 10 / 0
// - Infinity → -5 / 0
// NaN(Not a Number) → "abc" * 2


// 2. String: Stores textual data, written inside 'single', "double", or `backticks`.
// Syntax:
// let name = "Naveen";
// let greeting = 'Hello';
// let full = `Hi, ${name}`;  // Template literal

// // Examples:
// let str = "JavaScript";
// console.log(str.length);           // 10
// console.log(str.toUpperCase());    // "JAVASCRIPT"
// console.log(str.includes("Script")); // true


// 3. Boolean: Stores only true or false, used for logical conditions.
// Syntax:
// let isLoggedIn = true;
// let isPaid = false;

// Examples:
// let age = 20;
// let canVote = age >= 18;

// console.log(canVote);        // true
// console.log(typeof canVote); // "boolean"


// 4. Null:Represents a deliberate absence of any value. You assign it manually.
// Syntax:
// let user = null;
// Examples:
// let person = null;
// console.log(person);        // null
// console.log(typeof person); // "object" (quirk in JS)

// Note: Use null to intentionally clear a variable.


// 5. Undefined:Means a variable is declared but not assigned any value yet.
// Syntax:
// let user;
// Examples:
// let x;
// console.log(x);        // undefined
// console.log(typeof x); // "undefined"


// 6. Symbol(ES6):Represents a unique, immutable identifier. Often used to avoid property name conflicts in objects.
// Syntax:
// let sym = Symbol("id");
// let sym1 = Symbol("user");
// Examples:
// let sym2 = Symbol("user");
// console.log(sym1 === sym2); // false (unique)
// console.log(typeof sym1);   // "symbol"


// 7. BigInt(ES11 / ES2020):Used to store very large integers beyond the Number.MAX_SAFE_INTEGER limit (2^53 - 1).
// Syntax:
// let big = 123456789012345678901234567890n;
// Examples:
// let big1 = 123456789012345678901234567890n;
// let big2 = 1n + 2n;
// console.log(big2);          // 3n
// console.log(typeof big2);   // "bigint"

// note: You cannot mix BigInt with regular Number in operations:

// let x = 10;
// let y = 10n;
// console.log(x + y); // ❌ TypeError















