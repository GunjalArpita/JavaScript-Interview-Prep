var groupAnagrams = function(strs)
{
    let map = new Map();
    for(let str of strs)
        {
        let sortedStr = str.split('').sort().join('');
        if(map.has(sortedStr))
        {
            map.get(sortedStr).push(str);
        } 
        else 
        {
            map.set(sortedStr, [str]);
        }
    }
    return Array.from(map.values());
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));


// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1: Input: strs = ["eat","tea","tan","ate","nat","bat"] ,Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:Input: strs = [""] ,Output: [[""]]

// Example 3: Input: strs = ["a"] ,Output: [["a"]]