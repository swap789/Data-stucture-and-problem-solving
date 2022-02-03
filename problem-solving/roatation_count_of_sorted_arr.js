/*
Consider an array of distinct numbers sorted in increasing order. The array has been 
rotated (clockwise) k number of times. Given such an array, find the value of k.
Examples: 
 
Input : arr[] = {15, 18, 2, 3, 6, 12}
Output: 2
Explanation : Initial array must be {2, 3,
6, 12, 15, 18}. We get the given array after 
rotating the initial array twice.

Input : arr[] = {7, 9, 11, 12, 5}
Output: 4

Input: arr[] = {7, 9, 11, 12, 15};
Output: 0
*/

function findRotationCount(arr, len) {
    let rotationCnt = 0;
    for (let i = 0; i <= len; i++) {
        if (arr[i] > arr[i + 1]) {
            rotationCnt = i + 1;
            break;
        }
    }
    return rotationCnt;
}

let arr = [7, 9, 11, 12, 5];

const rotationCnt = findRotationCount(arr, arr.length);
console.log(`Rotation count is ${rotationCnt}`);
