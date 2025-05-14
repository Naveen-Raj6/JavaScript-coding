// A variable is a container used to store data values (like numbers, strings, etc.)
// so you can use them later in your code.

// JavaScript Variables can be declared in 4 ways:

// Automatically ex:- x=5; //by default it is var
// Using var ex:- var y=10;
// Using let ex:- let z=15;
// Using const ex:- const w=20;


// 1. var keyword
// The var keyword is used to declare a variable in JavaScript.
// var is global object, which means that the variable is accessible from anywhere in the code.
// var is window object, which means that the variable is accessible from the global scope.
// var global scope, which means that the variable is accessible from the global scope.
// var is short for "variable", which means that the value of the variable can change over time.
// The var keyword was used in all JavaScript code from 1995 to 2015.

// Characteristics of var
//declaration variables with var keyword are globally-scoped and later we can initialize them with a value. ex:- var x;
//initialization that occurs after declaration is done with the assignment operator (=). ex:- x=5;
//declaration and initialization can be done in the same line or in different lines. ex:- var y=10;
//reinitialization of a variable is done with the assignment operator (=). ex:- y=15;
//redeclaring a variable is done with the var keyword. ex:- var y;
//redeclaring and reinitializing a variable is done with the var keyword. ex:- var y=20;

// disadvantages of var and problems with var
// 1. Hoisting: Variables declared with var are hoisted to the top of their scope, but their values are not initialized.
// ex:- console.log(a); // undefined, because a is hoisted but not initialized
// var a = 5;
// console.log(a); // 5, because a is initialized after the first console.log
// This can lead to confusion and bugs in your code, especially in larger codebases.
// 2. Lack of block scope: Variables declared with var are not block-scoped, which can lead to unexpected behavior in loops and conditionals.
// 3. Redeclaration: Variables declared with var can be redeclared in the same scope, which can lead to confusion and errors.

// note: if you don't about hoisting , hoisting is nothing but a behavior or mechanism in javascript where declarations are moved to the top of their scope during the compile phase.


// to overcome the drawback of var keyword, we can use let and const keywords.
// in 2015 in ecma script 6 (Es6) version , they introduced block scope variables let and const keywords.

// 2. let keyword
// The let keyword is used to declare a block-scoped variable in JavaScript.
// the let is block-scoped, which means that the variable is only accessible within the block in which it is declared.
// the let also function-scoped, which means that the variable is only accessible within the function in which it is declared.
// The let keyword was introduced in 2015 in ECMAScript 6 (ES6) version.

// Characteristics of let
//declaration variables with let keyword are block-scoped and later we can initialize them with a value. ex:- let x;
//initialization that occurs after declaration is done with the assignment operator (=). ex:- x=5;
//declaration and initialization can be done in the same line or in different lines. ex:- let y=10;
//reinitialization of a variable is done with the assignment operator (=). ex:- x=10;
//redeclaring a variable is not allowed with the let keyword. ex:- let x; // SyntaxError: Identifier 'x' has already been declared
//redeclaring and reinitializing a variable is not allowed with the let keyword. ex:- let x=15; // SyntaxError: Identifier 'x' has already been declared

//note: let variables are not hoisted, which means that they are not accessible before they are declared. This can help prevent bugs and make your code more predictable.
// ex:- console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 5;
// console.log(a); // 5, because a is initialized after the first console.log

// 3. const keyword
// The const keyword is used to declare a block-scoped variable in JavaScript that cannot be reassigned.
// The const keyword was introduced in 2015 in ECMAScript 6 (ES6) version.
// the const block-scoped, which means that the variable is only accessible within the block in which it is declared.
// the const also function-scoped, which means that the variable is only accessible within the function in which it is declared.
// const is short for "constant", which means that the value of the variable cannot be changed after it is assigned.

// Characteristics of const
//declaration variables with const keyword are block-scoped and later we can initialize them with a value. ex:- const x; // SyntaxError: Missing initializer in const declaration
//initialization that occurs after declaration is done with the assignment operator (=). ex:- x=5; // SyntaxError: Missing initializer in const declaration
//declaration and initialization can be done in the same line or in different lines. And we can do only this using const keyword ex:- const y=10;
//reinitialization of a variable is not allowed with the const keyword. ex:- x=10; // TypeError: Assignment to constant variable.
//redeclaring a variable is not allowed with the const keyword. ex:- const x; // SyntaxError: Identifier 'x' has already been declared
//redeclaring and reinitializing a variable is not allowed with the const keyword. ex:- const x=15; // SyntaxError: Identifier 'x' has already been declared

// note: const variables are not immutable, they are just read-only. We can change the properties of an object or array declared with const, but we cannot reassign the variable itself.
// ex:- const obj = { name: "John" };

//note: const variables are not hoisted, which means that they are not accessible before they are declared. This can help prevent bugs and make your code more predictable.
// ex:- console.log(a); // ReferenceError: Cannot access 'a' before initialization
// const a = 5;
// console.log(a); // 5, because a is initialized after the first console.log