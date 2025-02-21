var isAnagram = function(s, t)
{
    if(s.length !== t.length)
    {
        return false;
    }
    let s1 = s.split("").sort().join("");
    let t1 = t.split("").sort().join("");
    for(let i=0;i<s1.length;i++)
    {
        if(s1[i] !== t1[i])
        {
            return false;
        }
    }
    return true;
}
console.log(isAnagram( "anagram", "nagaram"));
console.log(isAnagram( "rat", "car"));

// Given two strings s and t, return true if t is an 
// anagram  of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false