/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let obj = {};
    if (nums.length === 1) {
        return nums[0];
    }
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        let arr = [];
        arr.push(nums[i]);
        for (let j = i + 1; j < nums.length; j++) {
            sum = sum + nums[j];
            arr.push(nums[j]);
            obj[sum] = [...arr];
        }
    }
    let max = obj[0];
    Object. keys(objectName)[0] 
    for (let key in obj) {
        if (+key > max) {
            max = +key;
        }
    }

    return max, obj[max];
};

let nums = [-1, 2];

let result = maxSubArray(nums);
console.log(result);
