// // 5. Bitwise Operators
// // Bitwise operators work on the binary (bit-level) representation of numbers.
// // Useful for low-level programming, performance optimization, flags, and masking.

// let a = 5;  // Binary:  0101
// let b = 3;  // Binary:  0011

// // Bitwise AND (&)
// // Compares bits of a and b. Result bit is 1 only if both bits are 1.
// let c = a & b;  // 0101 & 0011 = 0001 (decimal 1)
// console.log(c); // Output: 1

// // Bitwise OR (|)
// // Compares bits of a and b. Result bit is 1 if at least one bit is 1.
// let d = a | b;  // 0101 | 0011 = 0111 (decimal 7)
// console.log(d); // Output: 7

// // Bitwise XOR (^)
// // Compares bits of a and b. Result bit is 1 if bits are different.
// let e = a ^ b;  // 0101 ^ 0011 = 0110 (decimal 6)
// console.log(e); // Output: 6

// // Bitwise NOT (~)
// // Inverts bits of the number (1's complement).
// // Note: Result is -(n + 1) due to two's complement representation.
// let f = ~a;     // ~0101 = 1010 (in 4-bit), but in JS it's -6
// console.log(f); // Output: -6

// // Left Shift (<<)
// // Shifts bits left by specified number of positions, filling with zeros on the right.
// // Equivalent to multiplying by 2^number_of_positions.
// let g = a << 1; // 0101 << 1 = 1010 (decimal 10)
// console.log(g); // Output: 10

// // Right Shift (>>)
// // Shifts bits right by specified number of positions, preserving sign (sign bit extended).
// // Equivalent to dividing by 2^number_of_positions, rounding down.
// let h = a >> 1; // 0101 >> 1 = 0010 (decimal 2)
// console.log(h); // Output: 2

// // Zero-fill Right Shift (>>>)
// // Shifts bits right by specified positions, filling left bits with zeros (ignores sign).
// let i = a >>> 1; // 0101 >>> 1 = 0010 (decimal 2)
// console.log(i); // Output: 2

// Note: There's no Left Shift with Zero Fill operator (<<<) in JavaScript.
// Left shift (<<) always fills with zeros from the right.
// Bitwise NOT(~) results in -(n + 1) because JavaScript uses two's complement representation for signed integers.
// Left shift(<<) and right shift(>>) keep the sign(positive / negative).
// Zero - fill right shift(>>>) always fills with zeros and is useful for unsigned numbers.
// There is no << < operator in JavaScript.Left shift << always fills with zeros on the right side.