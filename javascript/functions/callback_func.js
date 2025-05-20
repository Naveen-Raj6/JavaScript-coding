// // ✅ Callback Function

// // 📘 Definition:
// // A callback function is a function passed into another function as an argument,
// // which is then invoked inside the outer function to complete some kind of routine or action.

// // ✅ Key Points:
// // - Allows asynchronous programming and event handling
// // - Enables code reuse and abstraction
// // - Commonly used in functions like setTimeout, array methods (map, filter), and event listeners
// // - Can be named or anonymous functions

// // ✅ Syntax:
// function outerFunction(callback) {
//     // do something
//     callback();  // call the passed function
// }

// // ✅ Example 1: Simple callback
// function greet() {
//     console.log("Hello from callback!");
// }

// function process(callback) {
//     console.log("Start processing...");
//     callback();
// }

// process(greet);
// // Output:
// // Start processing...
// // Hello from callback!

// // ✅ Example 2: Callback with parameters
// function showMessage(message) {
//     console.log("Message:", message);
// }

// function processWithMessage(callback) {
//     callback("This is a callback message");
// }

// processWithMessage(showMessage);
// // Output: Message: This is a callback message

// // ✅ Using `this` inside a callback function
// const obj = {
//     prefix: "Note: ",
//     show(msg) {
//         console.log(this.prefix + msg);
//     },
//     process(callback) {
//         callback.call(this, "Hello!");
//     }
// };

// obj.process(obj.show); // Output: Note: Hello!

// // ✅ Using bind() with callback
// function logMessage(msg) {
//     console.log(this.prefix + msg);
// }

// const boundLog = logMessage.bind({ prefix: "Log: " });
// function processLog(callback) {
//     callback("Bound callback called");
// }

// processLog(boundLog); // Output: Log: Bound callback called

// // ✅ Using call() with callback
// function displayAge(age) {
//     console.log(this.name + " is " + age + " years old");
// }

// function useDisplay(fn) {
//     fn.call({ name: "Luffy" }, 19);
// }

// useDisplay(displayAge); // Output: Luffy is 19 years old

// // ✅ Using apply() with callback
// function displayInfo(age, country) {
//     console.log(`${this.name} is ${age} years old and from ${country}`);
// }

// function useInfo(fn) {
//     fn.apply({ name: "Zoro" }, [21, "Wano"]);
// }

// useInfo(displayInfo); // Output: Zoro is 21 years old and from Wano
