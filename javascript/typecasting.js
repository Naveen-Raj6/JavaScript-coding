"use strict";

// INTERNAL TYPE CASTING (Implicit Coercion)
// JavaScript automatically converts types when needed

// console.log('5' + 10);       // Output: "510"  (number 10 converted to string, concatenation)
// console.log('5' - 10);       // Output: -5    (string '5' converted to number, subtraction)
// console.log(true + 1);       // Output: 2     (true converted to 1)
// console.log(false + 1);      // Output: 1     (false converted to 0)
// console.log(null + 5);       // Output: 5     (null converted to 0)
// console.log(undefined + 5);  // Output: NaN   (undefined converted to NaN)

// // EXTERNAL TYPE CASTING (Explicit Conversion)
// // You explicitly convert types using functions like String(), Number(), Boolean()

// let num = 123;
// let strNum = String(num);        // number to string
// console.log(strNum);             // Output: "123"
// console.log(typeof strNum);      // Output: "string"

// let str = "456";
// let numStr = Number(str);        // string to number
// console.log(numStr);             // Output: 456
// console.log(typeof numStr);      // Output: "number"

// let bool = true;
// let strBool = String(bool);      // boolean to string
// console.log(strBool);            // Output: "true"

// let emptyStr = "";
// let boolEmpty = Boolean(emptyStr);  // string to boolean (empty string is false)
// console.log(boolEmpty);          // Output: false

"use strict";

/*
Internal Type Casting (Implicit Coercion):Internal type casting (implicit coercion): Automatic type conversion done by JS during operations.
------------------------------------------
- This happens automatically by JavaScript when it expects a certain type in an operation.
- JavaScript converts values behind the scenes to make the operation work.
- For example, if you add a string and a number, JavaScript converts the number to a string and concatenates.
- This is called "implicit" because you don't write code to convert the types; JS does it automatically.

Example:
'5' + 10  // '10' is converted to string -> result: "510"
'5' - 10  // '5' is converted to number -> result: -5


External Type Casting (Explicit Conversion):External type casting (explicit conversion): Manual type conversion done by the programmer using conversion functions.
---------------------------------------------
- This happens when you manually convert one data type to another in your code.
- You explicitly use functions like String(), Number(), Boolean() to change the type.
- This is useful when you want to make sure the values are of the right type.

Example:
String(123)    // converts number 123 to string "123"
Number("456")  // converts string "456" to number 456
Boolean("")    // converts empty string to false
*/

