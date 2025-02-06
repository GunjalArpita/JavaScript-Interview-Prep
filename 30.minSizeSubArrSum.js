var minSubArrayLen = function(target, nums) {
    let n=nums.length;
    let minlen=0;
    for(let i=0;i<n;i++)
    {   
        if(target===nums[i])
        {
            return 1;
        }
        else if(nums[i]+nums[i+1]==target)
       {
         minlen=+2;
        }
        
    }
   return minlen;
};
console.log(minSubArrayLen(target = 7, nums = [2,3,1,2,4,3]));
console.log(minSubArrayLen( target = 4, nums = [1,4,4]));
console.log(minSubArrayLen(target = 11, nums = [1,1,1,1,1,1,1,1]));

//code to pass all(21) test cases:

// function minSubArrayLen(target, nums) {
//     let left = 0;
//     let total = 0;
//     let minLength = Infinity;

//     for (let right = 0; right < nums.length; right++) {
//         total += nums[right];  // Expand the window by adding nums[right]

//         while (total >= target) {
//             minLength = Math.min(minLength, right - left + 1);  // Update min length
//             total -= nums[left];  // Shrink the window from left
//             left++;  // Move left pointer forward
//         }
//     }

//     return minLength === Infinity ? 0 : minLength;  // Return 0 if no valid subarray found
// }

// // **Test Cases**
// console.log(minSubArrayLen(7, [2,3,1,2,4,3]));  // Output: 2
// console.log(minSubArrayLen(4, [1,4,4]));        // Output: 1
// console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));  // Output: 0


// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 // Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
