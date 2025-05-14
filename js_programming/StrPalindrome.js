// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// *****************************************************************************************

var isPalindrome = function(s) {
    if (s.length <= 0) return false;
    // Convert to lowercase and remove non-alphanumeric characters
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the string
    let reversed = str.split('').reverse().join('');
    // Return comparison result
    return str === reversed;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // Output: true
