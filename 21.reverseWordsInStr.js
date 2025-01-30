var reverseWords = function(s) {
    return s.split(' ').filter(Boolean).reverse().join(' ');

   // let arr=s.trim().split(' ')
    // let newArr=[];
    // let count=0;
    // for(let i=arr.length-1;i>=0;i--)
    // {
    //   newArr[count]=arr[i];  // newArr.push(arr[i]);
    //   count++;
    // }   
    // return newArr.join(' ');

};
console.log(reverseWords("the sky is blue")); // blue is sky the
console.log(reverseWords("  hello world  ")); // world hello
console.log(reverseWords("a good   example")); // example good a


//// filter(Boolean) removes empty strings from array  // Boolean('') -> false // Boolean('a') -> true  // Boolean(' ') -> true  // Boolean('  ') -> true   
//code explanation
// 1. split the string by space and convert it to array
// 2. filter the array by removing empty strings 
// 3. reverse the array
// 4. join the array by space and return the string


// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1: Input: s = "the sky is blue" ,Output: "blue is sky the"

// Example 2: Input: s = "  hello world  " ,Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3: Input: s = "a good   example" ,Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string