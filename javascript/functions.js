/*
Functions in JavaScript

Definition:
A function is a reusable block of code that performs a specific task.
Functions can accept input (parameters) and return an output.

// syntax of function

// function demo() {
//    .............
//    .............
//    return
// }
// demo()

*/


// Parameter:
// The variable listed in the function definition(like name, age)
// Argument:
// The actual value you pass to the function when calling it like ("zoro" , 21)
// example
// function greet(name, age) {  // name, age are parameters
//     console.log(`Hello ${name}, you are ${age} years old.`);
// }
// greet("Naveen", 21);         // "Naveen", 21 are arguments

// note
// Parameters are like placeholders or input variables,
// Arguments are the real data you send into the function.

/*
i) Default (Simple) Function: A function with no parameters that performs a fixed task.
function sayHello() {
  console.log("Hello!");
}
sayHello(); // Output: Hello!

ii)Parameterized Function:A function that takes input values (parameters) to perform dynamic tasks.
function greet(name) {
  console.log("Hello, " + name);
}
greet("Naveen"); // Output: Hello, Naveen

iii)Function with Default Parameters:A function where parameters have default values if no argument is passed.
function welcome(name = "Guest") {
  console.log("Welcome, " + name);
}
welcome();        // Output: Welcome, Guest
welcome("Zoro");  // Output: Welcome, Zoro

iv)Function with Rest Parameters:A function that uses ... to accept any number of arguments as an array.
function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10

v) Constructor Function:A function used to create and initialize objects using the new keyword.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Zoro", 21);
console.log(user.name); // Output: Zoro
console.log(user.age);  // Output: 21

*/



/*

There are different types of functions in JavaScript:
1. Named Function
2. Function with Expression
3. Arrow Function
4. Anonymous Function
5. IIFE (Immediately Invoked Function Expression)
6. Generator Function
7. Higher-Order Function
8. Callback function
9. Currying function


*/