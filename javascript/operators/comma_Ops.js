// // 14. Comma Operator
// // The comma operator allows you to evaluate multiple expressions, but only returns the value of the last expression.
// // It is represented by a comma (,).
// // It is mostly used where multiple expressions are needed but only one result can be returned,
// // such as in the initialization or increment sections of for loops.

// // Example 1:
// let a = (1, 2, 3); // Multiple expressions separated by commas
// console.log(a); // Output: 3
// // Explanation: The expressions 1 and 2 are evaluated and discarded. The value of 'a' is the last expression, 3.

// // Example 2:
// let b = (1 + 2, 3 + 4);
// console.log(b); // Output: 7
// // Explanation: First, 1 + 2 = 3 is evaluated (but not used), then 3 + 4 = 7 is evaluated and assigned to b.

// // Example 3: Using comma operator in a for loop
// for (let i = 0, j = 10; i <= 5; i++, j--) {
//     console.log(`i: ${i}, j: ${j}`);
// }
// // Explanation: Both i and j are initialized, incremented, or decremented in the for loop using commas.
// // The comma operator allows multiple expressions in one place.

// // Summary:
// // - The comma operator evaluates each operand from left to right.
// // - Returns the value of the last operand.
// // - Useful for combining multiple expressions where only one value is expected.
// // - Different from the spread operator (...), which expands iterables.

// // Note: Overusing the comma operator can make code less readable, so it should be used sparingly.
