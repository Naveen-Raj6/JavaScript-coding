// "use strict";

/*
Switch Statement:
The switch statement is used to perform different actions based on different conditions.
It compares the value of an expression against multiple case values and executes the matching case's code.

Syntax:
switch(expression) {
  case value1:
    // code to run if expression === value1
    break;
  case value2:
    // code to run if expression === value2
    break;
  ...
  default:
    // code to run if no case matches
}

Example: Check day number and print day name
*/

// let day = 3;  // Suppose day 1 = Monday, 2 = Tuesday, ...

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number");
// }


// notes
// The day variable is checked against each case.
// When a matching case is found(case 3), it runs the code and then break stops the switch.
// If no case matches, the default runs.