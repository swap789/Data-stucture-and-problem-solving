/*
Given an array arr[] of n integers, find the maximum that maximizes the 
sum of the value of i*arr[i] where i varies from 0 to n-1.

Examples:  

Input: arr[] = {8, 3, 1, 2}
Output: 29
Explanation: Lets look at all the rotations,
{8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
{3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
{1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
{2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17

Input: arr[] = {3, 2, 1}
Output: 7
Explanation: Lets look at all the rotations,
{3, 2, 1} = 3*0 + 2*1 + 1*2 = 4
{2, 1, 3} = 2*0 + 1*1 + 3*2 = 7
{1, 3, 2} = 1*0 + 3*1 + 2*2 = 7

*/

function maxSum(arr, len) {
    let res = Number.MIN_VALUE;

    for (let i = 0; i <= len - 1; i++) {
        let curr_value = 0;
        for (let j = 0; j <= len - 1; j++) {
            let index = (i + j) % len;
            curr_value += j * arr[index];
        }

        res = Math.max(res, curr_value);
    }

    return res;
}
let arr = [1, 20, 2, 10];
maxSum(arr, arr.length);
