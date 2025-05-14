// JavaScript Number Methods(Inbuilt)

// JavaScript provides several built -in methods to perform operations or formatting on numbers.

// 1. toString():Converts a number to a string.
// Syntax:
// number.toString([radix])

// Example:
// let num = 255;
// console.log(num.toString());      // "255"
// console.log(num.toString(2));     // "11111111" (binary)

// 2. toFixed():Formats a number to a fixed number of decimal places.
// Syntax:
// number.toFixed(digits)
// Example:
// let pi = 3.14159;
// console.log(pi.toFixed(2));  // "3.14"
// Returns a string, useful for rounding numbers for display.

// 3. toExponential():Returns the number in exponential (scientific) notation.
// Syntax:
// number.toExponential([digits])
// Example:
// let x = 123456;
// console.log(x.toExponential(2)); // "1.23e+5"

// 4. toPrecision():Formats the number to a specified length (total digits).
// Syntax:
// number.toPrecision(digits)
// Example:
// let num = 9.876;
// console.log(num.toPrecision(2)); // "9.9"
// console.log(num.toPrecision(4)); // "9.876"

// 5. valueOf():Returns the primitive value of a number object.
// Syntax:
// number.valueOf()
// Example:
// let n = new Number(100);
// console.log(n.valueOf());    // 100 (as number)
// console.log(typeof n);       // "object"
// console.log(typeof n.valueOf()); // "number"

// 6. Number.isInteger():Checks if the given value is an integer.
// Checks if the given value is an integer.
// Number.isInteger(value)
// Example:
// console.log(Number.isInteger(10));     // true
// console.log(Number.isInteger(10.5));   // false

// 7. Number.isNaN():Checks if the value is NaN (Not a Number).
// Syntax:
// Number.isNaN(value)
// Example:
// console.log(Number.isNaN("abc" * 2));  // true
// console.log(Number.isNaN(123));        // false

// 8. Number.isFinite():Checks whether the value is a finite number (not Infinity or NaN).
// Syntax:
// Number.isFinite(value)
// Example:
// console.log(Number.isFinite(20));     // true
// console.log(Number.isFinite(Infinity)); // false

// 9. parseInt()(Global Function):Parses a string and returns an integer.
// Syntax:
// parseInt(string, radix)

// Example:
// console.log(parseInt(42.20));       // 42
// console.log(parseInt("101", 2));   // 5

// 10. parseFloat()(Global Function):Parses a string and returns a floating point number.
// Syntax:
// parseFloat(string)
// Example:
// console.log(parseFloat("3.14"));     // 3.14
// console.log(parseFloat("99.99abc")); // 99.99























