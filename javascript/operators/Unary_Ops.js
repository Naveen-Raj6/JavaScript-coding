// // 7. Unary Operators
// // Unary operators operate on a single operand and perform operations like converting, incrementing, or decrementing.

// let a = 5;

// // Unary Plus (+)
// // Converts the operand to a number (if it isn't already)
// let q = +a;   // 'a' is already a number, so it stays 5
// console.log(q);  // Output: 5

// let str = "10";
// let num = +str;  // Converts string "10" to number 10
// console.log(num); // Output: 10

// // Unary Minus (-)
// // Converts the operand to a number and negates it
// let t = -a;
// console.log(t);  // Output: -5

// let negStr = "-20";
// let negNum = -negStr;  // Converts string "-20" to number and negates it (so 20)
// console.log(negNum);   // Output: 20

// // Unary Increment (++)
// // Increases the value of the operand by 1 and returns the new value (prefix form)
// let u = ++a;
// console.log(u);  // Output: 6

// // Note: 'a' is now 6

// // Unary Decrement (--)
// // Decreases the value of the operand by 1 and returns the new value (prefix form)
// let v = --a;
// console.log(v);  // Output: 5

// // Note: 'a' is now back to 5


// Important Notes:
// * Unary plus(+) is useful to convert strings or other types to numbers.
// * Unary minus(-) converts to number and changes the sign.
// * Increment(++) and decrement(--) have two forms:
    // 1) Prefix: ++a increments first, then returns the new value.
    // 2) Postfix: a++ returns the current value, then increments(not shown here but useful to know).