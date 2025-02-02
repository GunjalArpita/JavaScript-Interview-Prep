var isSubsequence = function(s, t) {
    let i = 0;  
    for (let j = 0; j < t.length; j++)
     {
        if (i < s.length && s[i] === t[j]) 
        {
            i++;  
        }
    }
    return i === s.length;  
    
};

console.log(isSubsequence(s="abc",t="ahbgdc"));
console.log(isSubsequence(s="axc",t="ahbgdc"));


// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1: Input: s = "abc", t = "ahbgdc" ,Output: true
// Example 2: Input: s = "axc", t = "ahbgdc",Output: false