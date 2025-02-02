var isPalindrome = function(s) {
   //s is array not string, so we need to convert array to string, then we can use replace function
    s = s.join(''); //convert array to string

    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();  //replace all non-alphanumeric characters with empty string and convert all uppercase letters into lowercase letters
    return s === s.split('').reverse().join('');

};
console.log(isPalindrome(["A man, a plan, a canal: Panama"])); //true
console.log(isPalindrome(["race a car"])); //false
console.log(isPalindrome([" "])); //true

//replace(/[^0-9a-z]/gi, '')
//means replace all characters except 0-9 and a-z with empty string,gi- g means global, i means case insensitive

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1: Input: s = "A man, a plan, a canal: Panama" ,Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2: Input: s = "race a car",Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3: Input: s = " " ,Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.