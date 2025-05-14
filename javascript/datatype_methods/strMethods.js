// JavaScript String Methods

// Strings in JavaScript are immutable and come with many built -in methods to manipulate and work with them.

// 1. length:Returns the number of characters in the string.
// Syntax:
// string.length
// Example:
// let name = "Naveen";
// console.log(name.length);  // 6

// 2. toUpperCase():Converts the string to uppercase.
// Syntax:
// string.toUpperCase()
// Example:
// let text = "hello";
// console.log(text.toUpperCase());  // "HELLO"

// 3. toLowerCase():Converts the string to lowercase.
// Example:
// let msg = "WELCOME";
// console.log(msg.toLowerCase());  // "welcome"

// 4. charAt(index):Returns the character at the given index.
// Syntax:
// string.charAt(index)
// Example:
// let word = "JavaScript";
// console.log(word.charAt(4));  // "S"

// 5. indexOf(substring):Returns the first index of the substring, or - 1 if not found.
// Example:
// let str = "coding is fun";
// console.log(str.indexOf("is"));   // 7
// console.log(str.indexOf("z"));    // -1

// 6. lastIndexOf(substring):Returns the last occurrence of a substring.
// Example:
// let str = "I like coding, coding is fun";
// console.log(str.lastIndexOf("coding"));  // 13

// 7. includes(substring):Checks if a string contains the given substring.
// Example:
// let message = "Hello World";
// console.log(message.includes("World"));  // true

// 8. startsWith(substring):Checks if the string starts with the given substring.
// Example:
// console.log("JavaScript".startsWith("Java"));  // true

// 9. endsWith(substring):Checks if the string ends with the given substring.
// Example:
// console.log("hello.txt".endsWith(".txt"));  // true

// 10. slice(start, end)
// Returns a portion of the string from start to end(not including end).
// Example:
// let str = "JavaScript";
// console.log(str.slice(0, 4));  // "Java"

// 11. substring(start, end):Similar to slice(), but doesn’t accept negative values.
// Example:
// let str = "Developer";
// console.log(str.substring(0, 5));  // "Devel"

// 12. substr(start, length)(Deprecated):Still works, but avoid using in modern code.
// Example:
// let str = "JavaScript";
// console.log(str.substr(4, 6));  // "Script"

// 13. trim():Removes whitespace from both ends of the string.
// Example:
// let name = "  Naveen  ";
// console.log(name.trim());  // "Naveen"

// 14. replace(oldValue, newValue):Replaces the first match of the substring.
// Example:
// let text = "I love coding";
// console.log(text.replace("love", "enjoy"));  // "I enjoy coding"
// Use regex with /g flag to replace all:
// text.replace(/o/g, "0");  // Replace all 'o' with '0'

// 15. split(separator):Splits the string into an array using the separator.
// Example:
// let csv = "red,green,blue";
// let colors = csv.split(",");
// console.log(colors);  // ["red", "green", "blue"]

// 16. repeat(count):Repeats the string count times.
// Example:console.log("Ha".repeat(3));  // "HaHaHa"

// 17. concat():Combines strings.
// let first = "Hello";
// let second = "World";
// console.log(first.concat(" ", second));  // "Hello World"































