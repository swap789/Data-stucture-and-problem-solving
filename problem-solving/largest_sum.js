/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var sum = nums[0];
    var max = sum;
    for (let i = 1; i < nums.length; i++) {
        sum = (sum + nums[i]) > nums[i] ? (sum + nums[i]) : nums[i];
        max = sum > max ? sum : max;
    }
    return max;
};