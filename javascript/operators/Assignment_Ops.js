// // 2. Assignment Operators
// // Assignment operators assign values to variables. They can also perform an operation
// // on a variable and assign the result back to that variable.

// // Simple assignment (=)
// // Assigns the value on the right to the variable on the left.
// let x = 10;
// console.log("Initial value of x:", x); // Output: 10

// let y = 5;
// console.log("Value of y:", y); // Output: 5

// // You can use other operators combined with assignment:
// let z = x + y;
// console.log("Sum (x + y):", z); // Output: 15

// // Addition assignment (+=)
// // Adds the right value to the left variable and assigns the result to the left variable.
// x += y;  // same as: x = x + y
// console.log("After x += y, x:", x); // Output: 15

// // Subtraction assignment (-=)
// x -= y;  // same as: x = x - y
// console.log("After x -= y, x:", x); // Output: 10

// // Multiplication assignment (*=)
// x *= y;  // same as: x = x * y
// console.log("After x *= y, x:", x); // Output: 50

// // Division assignment (/=)
// x /= y;  // same as: x = x / y
// console.log("After x /= y, x:", x); // Output: 10

// // Modulus assignment (%=)
// x %= y;  // same as: x = x % y
// console.log("After x %= y, x:", x); // Output: 0

// // Exponentiation assignment (**=)
// x = 2;
// x **= y; // same as: x = x ** y (x to the power of y)
// console.log("After x **= y, x:", x); // Output: 32 (2^5 = 32)

// // Bitwise assignment operators
// // These operators perform bitwise operations and assign the result.

// // Bitwise AND assignment (&=)
// let a = 5;    // binary: 0101
// let b = 3;    // binary: 0011
// a &= b;       // a = a & b => 0101 & 0011 = 0001 (1)
// console.log("After a &= b, a:", a); // Output: 1

// // Bitwise OR assignment (|=)
// a = 5;
// a |= b;       // a = a | b => 0101 | 0011 = 0111 (7)
// console.log("After a |= b, a:", a); // Output: 7

// // Bitwise XOR assignment (^=)
// a = 5;
// a ^= b;       // a = a ^ b => 0101 ^ 0011 = 0110 (6)
// console.log("After a ^= b, a:", a); // Output: 6

// // Left shift assignment (<<=)
// a = 5;
// a <<= 1;      // a = a << 1 shifts bits to the left by 1 => 0101 << 1 = 1010 (10)
// console.log("After a <<= 1, a:", a); // Output: 10

// // Right shift assignment (>>=)
// a = 5;
// a >>= 1;      // a = a >> 1 shifts bits to the right by 1 => 0101 >> 1 = 0010 (2)
// console.log("After a >>= 1, a:", a); // Output: 2

// // Unsigned right shift assignment (>>>=)
// a = -5;       // binary (32-bit): 11111111 11111111 11111111 11111011
// a >>>= 1;     // shifts right and fills left with 0
// console.log("After a >>>= 1, a:", a); // Output: 2147483645 (a large positive number)
