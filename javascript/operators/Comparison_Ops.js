// // 3. Comparison Operators
// // Comparison operators compare two values and return a boolean (true or false).
// // They are used in conditions like if statements, loops, and anywhere decisions are needed.

// let x = 10;
// let y = "10";  // Note: y is a string, not a number
// let z = 5;

// // 1. Equal (==) – Loose equality comparison
// // Compares values for equality after type coercion (converts types if different).
// console.log(x == y);  // true because "10" (string) is converted to 10 (number)
// console.log(x == z);  // false

// // 2. Strict Equal (===) – Strict equality comparison
// // Compares values and types for equality, no type conversion.
// console.log(x === y);  // false (number !== string)
// console.log(x === 10); // true

// // 3. Not Equal (!=) – Loose inequality comparison
// // Checks if values are NOT equal after type coercion.
// console.log(x != y);   // false (because x == y is true)
// console.log(x != z);   // true

// // 4. Strict Not Equal (!==) – Strict inequality comparison
// // Checks if values or types are NOT equal.
// console.log(x !== y);  // true (different types)
// console.log(x !== 10); // false (same value and type)

// // 5. Greater Than (>)
// console.log(x > z);    // true (10 > 5)
// console.log(z > x);    // false

// // 6. Less Than (<)
// console.log(x < y);    // false (10 < 10 is false)
// console.log(z < x);    // true (5 < 10)

// // 7. Greater Than or Equal (>=)
// console.log(x >= y);   // true (10 >= 10)
// console.log(z >= x);   // false (5 >= 10 is false)

// // 8. Less Than or Equal (<=)
// console.log(x <= y);   // true (10 <= 10)
// console.log(x <= z);   // false (10 <= 5 is false)

// // notes
// Loose equality(==) compares values but allows type coercion (converts types).
// Strict equality(===) compares both value and type, no conversion.
// The same logic applies for inequality operators(!= vs !==).
// Greater than, less than, greater or equal, less or equal work as expected with numbers.
// If types are different, JavaScript tries to convert for comparisons except for strict equality / inequality.