var majorityElement = function(nums) {
    let obj = {};
    let max = 0;
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]]++;
        }else{
            obj[nums[i]] = 1;
        }
    }
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
            result = key;
        }
    }
    return result;
}
console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2


// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//  Example 1: Input: nums = [3,2,3] ,Output: 3

// Example 2: Input: nums = [2,2,1,1,1,2,2] ,Output: 2