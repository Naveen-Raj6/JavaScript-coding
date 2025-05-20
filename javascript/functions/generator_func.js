// // ✅ Generator Function

// // 📘 Definition:
// // A Generator Function is a special type of function that can pause execution and resume later,
// // producing a sequence of values over time instead of a single value.

// // ✅ Key Points:
// // - Defined with function* syntax (asterisk * after function)
// // - Uses `yield` to pause and return a value
// // - Can be iterated with next() method to get values one by one
// // - Useful for managing asynchronous code, infinite sequences, or custom iterators

// // ✅ Syntax:
// function* generatorFunction() {
//     // yield values one by one
//     yield 1;
//     yield 2;
//     yield 3;
// }

// // ✅ Example 1: Simple Generator
// function* numbers() {
//     yield "First";
//     yield "Second";
//     yield "Third";
// }

// const gen = numbers();

// console.log(gen.next()); // Output: { value: 'First', done: false }
// console.log(gen.next()); // Output: { value: 'Second', done: false }
// console.log(gen.next()); // Output: { value: 'Third', done: false }
// console.log(gen.next()); // Output: { value: undefined, done: true }

// // ✅ Example 2: Generator with loop
// function* countUpTo(max) {
//     let count = 1;
//     while (count <= max) {
//         yield count++;
//     }
// }

// const counter = countUpTo(3);

// console.log(counter.next().value); // Output: 1
// console.log(counter.next().value); // Output: 2
// console.log(counter.next().value); // Output: 3
// console.log(counter.next().done);  // Output: true

// // ✅ Using `this` inside Generator Function
// const obj = {
//     prefix: "Gen: ",
//     *genNumbers() {
//         yield this.prefix + 1;
//         yield this.prefix + 2;
//     }
// };

// const generator = obj.genNumbers();

// console.log(generator.next().value); // Output: Gen: 1
// console.log(generator.next().value); // Output: Gen: 2

// // ✅ Using call(), apply(), bind() with Generator Functions
// // Note: call, apply, bind work but 'this' depends on context inside generator

// function* myGen() {
//     yield this.name;
//     yield this.age;
// }

// const context = { name: "Luffy", age: 19 };

// const genWithCall = myGen.call(context);
// console.log(genWithCall.next().value); // Output: Luffy
// console.log(genWithCall.next().value); // Output: 19

// const genWithApply = myGen.apply(context);
// console.log(genWithApply.next().value); // Output: Luffy
// console.log(genWithApply.next().value); // Output: 19

// const boundGen = myGen.bind(context);
// const genInstance = boundGen();
// console.log(genInstance.next().value); // Output: Luffy
// console.log(genInstance.next().value); // Output: 19
