var trap=function(height)
{
    let leftMax = 0; //leftMax is the maximum height of the left side of the array
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1; //right is the maximum height of the right side of the array
    let result = 0;

    while (left < right)
    {
        if (height[left] <= height[right])
        {
            if (height[left] >= leftMax)
            {
                leftMax = height[left];
            } else
            {
                result += leftMax - height[left];
            }
            left++;
        } else
        {
            if (height[right] >= rightMax)
            {
                rightMax = height[right];
            } else
            {
                result += rightMax - height[right];
            }
            right--;
        }
    }

    return result;
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); //6
console.log(trap([4,2,0,3,2,5])); //9


// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1: Input: height = [0,1,0,2,1,0,1,3,2,1,2,1] ,Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2: Input: height = [4,2,0,3,2,5] Output: 9