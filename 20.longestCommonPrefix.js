var longestCommonPrefix=function(strs)
{
    if(strs.length==0)
    {
        return "";
    }
    let prefix=strs[0];
    for(let i=1;i<strs.length;i++)
    {
        while(strs[i].indexOf(prefix)!=0)
        {
            prefix=prefix.substring(0,prefix.length-1);
            if(prefix.length==0)
            {
                return "";
            }
        }
    }
    return prefix;
}
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));  



// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:Input: strs = ["flower","flow","flight"] ,Output: "fl"

// Example 2: Input: strs = ["dog","racecar","car"] ,output: ""
// Explanation: There is no common prefix among the input strings