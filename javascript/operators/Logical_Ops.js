// // 4. Logical Operators
// // Logical operators work with boolean values (true/false) to build complex conditions.
// // They are mostly used in conditions and loops to control the flow of a program.

// let x = 10;
// let y = 5;
// let z = 15;

// // Logical AND (&&)
// // Returns true only if BOTH conditions are true.
// console.log(x > y && y > z); // false
// // Explanation: x > y is true (10 > 5), but y > z is false (5 > 15), so the overall result is false.

// console.log(x > y && y < z); // true
// // Explanation: Both x > y (10 > 5) and y < z (5 < 15) are true, so result is true.

// // Logical OR (||)
// // Returns true if AT LEAST ONE condition is true.
// console.log(x > y || y > z); // true
// // Explanation: x > y is true (10 > 5), so the whole expression is true even though y > z is false.

// console.log(x < y || y > z); // false
// // Explanation: Both x < y (10 < 5) and y > z (5 > 15) are false, so the result is false.

// // Logical NOT (!)
// // Negates the boolean value: true becomes false, false becomes true.
// console.log(!(x > y));      // false
// // Explanation: x > y is true, but NOT (!) flips it to false.

// console.log(!(x < y));      // true
// // Explanation: x < y is false, NOT (!) flips it to true.

// // Using NOT with equality operators
// console.log(!(x == y));     // true
// // x == y is false (10 == 5), NOT flips to true

// console.log(!(x != y));     // false
// // x != y is true (10 != 5), NOT flips to false

// console.log(!(x === y));    // true
// // x === y is false (different values), NOT flips to true

// console.log(!(x !== y));    // false
// // x !== y is true, NOT flips to false

// console.log(!(x >= y));     // false
// // x >= y is true (10 >= 5), NOT flips to false

// console.log(!(x <= y));     // true
// // x <= y is false (10 <= 5), NOT flips to true

// // NOT with logical operators involving variables (numbers are truthy in JS)
// console.log(!(x && y));     // false
// // Explanation: Both x and y are truthy (non-zero numbers),
// // so x && y evaluates to y (truthy), NOT flips it to false.

// console.log(!(x || y));     // false
// // Explanation: x || y evaluates to x (truthy), NOT flips to false.

// // To show difference, using zero (falsy)
// let zero = 0;
// console.log(!zero);         // true
// // Explanation: 0 is falsy, NOT flips it to true.


// notes
// && (AND): Use when all conditions must be true.
// || (OR): Use when at least one condition must be true.
// !(NOT): Use to invert a boolean condition.