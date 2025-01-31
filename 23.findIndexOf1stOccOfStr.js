var strStr = function(haystack, needle)
{
    if(needle.length === 0) return 0;
    if(haystack.length === 0) return -1;
    if(haystack.length < needle.length) return -1;
    let i = 0;
    while(i < haystack.length)
    {
        if(haystack[i] === needle[0])
        {
            let j = 0;
            let k = i;
            while(j < needle.length && k < haystack.length)
            {
                if(haystack[k] !== needle[j]) break;
                j++;
                k++;
            }
            if(j === needle.length) return i;
        }
        i++;
    }
    return -1;
    
};
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1


// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Example 1:
// Input: haystack = "sadbutsad", needle = "sad" ,Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto",Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.