/**
 * Author: Swapnil Bankar
 *   
 * Given an array, only rotation operation is allowed on array. We can rotate the array as many 
times as we want. Return the maximum possible summation of i*arr[i].

Examples :  

Input: arr[] = {1, 20, 2, 10}
Output: 72
We can get 72 by rotating array twice.
{2, 10, 1, 20}
20*3 + 1*2 + 10*1 + 2*0 = 72

Input: arr[] = {10, 1, 2, 3, 4, 5, 6, 7, 8, 9}
Output: 330
We can get 330 by rotating array 9 times.
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
0*1 + 1*2 + 2*3 ... 9*10 = 330

**/

function rotate(arr, d) {
    for (i = 0; i <= d - 1; i++) {
        arr[arr.length] = arr[i];
    }
    for (i = 0; i <= arr.length - 1; i++) {
        arr[i] = arr[d + i];
        if (i >= arr.length - d) {
            arr.length = i;
        }
    }
    return arr;
}

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = i * arr[i] + sum;
    }
    return sum;
}

function finalResult() {
    let arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let rotationCount = arr.length;
    let count = 0;
    let finalSum = 0;
    while (count < rotationCount) {
        let sum = getSum(arr);
        if (sum > finalSum) {
            finalSum = sum;
        }
        count++;
        rotatedArr = rotate(arr, count);
    }
    return finalSum
}
finalResult();
