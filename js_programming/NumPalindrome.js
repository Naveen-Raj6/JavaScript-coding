// Ques 1 - Palindrome Number
// An integer is palindrome when it reads the same forward and backward.

//input: x = 121 =======> output: true
//input: x = 10 =======> output: false

//option A

// const isPalindrome = function(x){
//     console.log(+x.toString().split("").reverse().join(""));
//     return x === +x.toString().split("").reverse().join("");
// }
// let p=121;
// console.log(isPalindrome(p));

//option B

// const isPalindrome = function(x){
//     console.log(+x.toString().split("").reverse().join(""));
//     return x < 0 ? false : x === +x.toString().split("").reverse().join("");
// }
// let p=12;
// console.log(isPalindrome(p));

//+x => + will convert the String "121" to integer 121
// 121 => "121" => ["1","2","1"]=> "1","2","1"]=> "121"

// ******************************************************************************************************

// option c 

const isPalindrome = function(x) {
    if (x < 0) return false;  // Negative numbers are not palindromes
    if (x === 0) return true; // 0 is a palindrome

    let original = x;
    let reversed = 0;
    
    // Reverse the number
    while (x > 0) {
        reversed = reversed * 10 + (x % 10); // Get the last digit and add it to reversed number
        x = Math.floor(x / 10); // Remove the last digit from x
    }
    
    // Compare the original and reversed numbers
    return original === reversed;
}

let p = 121;
console.log(isPalindrome(p));  // Output: true

let q = -121;
console.log(isPalindrome(q));  // Output: false
