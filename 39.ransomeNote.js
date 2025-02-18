var canConstruct = function(ransomNote, magazine) 
{
    for (let i = 0; i < ransomNote.length; i++)
         {
        if (magazine.indexOf(ransomNote[i]) === -1)
        {
            return false;
        } 
        else 
        {
            magazine = magazine.replace(ransomNote[i], '');
        }
    }
    return true;
}
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true




// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1: Input: ransomNote = "a", magazine = "b" ,Output: false
// Example 2: Input: ransomNote = "aa", magazine = "ab",Output: false
// Example 3: Input: ransomNote = "aa", magazine = "aab" ,Output: true
