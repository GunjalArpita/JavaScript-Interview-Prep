var longestConsecutive = function(nums) {
   // O(n) time.
    let set = new Set(nums);
    let max = 0;
    for(let num of set){
        if(!set.has(num-1)){
            let currentNum = num;
            let currentStreak = 1;
            while(set.has(currentNum+1)){
                currentNum++;
                currentStreak++;
            }
            max = Math.max(max, currentStreak);
        }
    }
    return max;
};
console.log(longestConsecutive([100,4,200,1,3,2])) //3
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) //9
console.log(longestConsecutive([1,2,0,1])) //3


// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:Input: nums = [100,4,200,1,3,2] ,Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:Input: nums = [0,3,7,2,5,8,4,6,0,1] ,Output: 9

// Example 3: Input: nums = [1,0,1,2] ,Output: 3
