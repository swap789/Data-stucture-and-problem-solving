/**
 * 
 A sorted array is rotated at some unknown point, find the minimum element in it. 
The following solution assumes that all elements are distinct.

Examples: 

Input: {5, 6, 1, 2, 3, 4}
Output: 1

Input: {1, 2, 3, 4}
Output: 1

Input: {2, 1}
Output: 1
 */
function findMinNumber(arr, len) {
    let min = 0;
    for (let i = 0; i <= len; i++) {
        if (arr[i] > arr[i + 1]) {
            min = arr[i + 1];
            break;
        } else if (arr[i] < arr[i + 1]) {
            min = arr[i];
            break;
        }
    }
    return min;
}

let arr = [5, 6, 1, 2, 3, 4];

const min = findMinNumber(arr, arr.length);
console.log(`Minimum number is ${min}`);
