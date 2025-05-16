// JavaScript BigInt – Inbuilt Methods 

// What is BigInt ?
// BigInt is a primitive data type introduced in ES2020.
// It allows you to work with integers larger than 2 ^ 53 - 1(which is the limit for the Number type).

// const big = 1234567890123456789012345678901234567890n;

// Creating a BigInt
// 1. Using the n suffix
// let big1 = 123456789012345678901234567890n;
// 2. Using the BigInt() constructor
// let big2 = BigInt("123456789012345678901234567890");

// Important: BigInt values cannot mix with regular Numbers directly in operations:
// let num = 5;
// let big = 10n;
// console.log(num + big);  //  TypeError: Cannot mix BigInt and other types
// Use conversion:
// console.log(BigInt(num) + big);  //  15n


// Built -in Methods and Operations with BigInt 
// While BigInt has limited inbuilt methods, it supports many operations:

// 1. toString([radix])
// Converts the BigInt to a string.
// You can optionally pass a radix(base) like 2, 10, 16, etc.
// example:-
// let big = 255n;
// console.log(big.toString());       // "255"
// console.log(big.toString(2));      // "11111111"
// console.log(big.toString(16));     // "ff"

// 2. valueOf()
// Returns the primitive BigInt value from an object.
// let bigObj = Object(123n);
// console.log(bigObj.valueOf());  // 123n










