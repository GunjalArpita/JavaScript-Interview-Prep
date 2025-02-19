var isIsomorphic = function(s, t)
 {
  let n1=s.length;
  let n2=t.length; 
    if(n1!=n2) return false;
    let map1=new Map();
    let map2=new Map();
    for(let i=0;i<n1;i++)
    {
        if(map1.has(s[i]))
        {
            if(map1.get(s[i])!=t[i]) return false;
        }
        if(map2.has(t[i]))
        {
            if(map2.get(t[i])!=s[i]) return false;
        }
        map1.set(s[i],t[i]);
        map2.set(t[i],s[i]);
    }
    return true;

};
console.log(isIsomorphic("egg","add")); //true
console.log(isIsomorphic("foo","bar")); //false
console.log(isIsomorphic("paper","title")); //true


// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:Input: s = "egg", t = "add" ,Output: true
// Explanation:
// The strings s and t can be made identical by:
// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.

// Example 2: Input: s = "foo", t = "bar" Output: false
// Explanation: The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3: Input: s = "paper", t = "title" ,Output: true