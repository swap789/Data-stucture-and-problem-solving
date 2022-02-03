/**
 * 
Given an array (or string), the task is to reverse the array/string.
Examples : 
 

Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/



function reverseArr(arr) {
    for (let i = 0; i <= (arr.length - 1) / 2; i++) {
        let tmp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = tmp;
    }
    return arr;
}

let arr = [1, 2, 4, 5];
reverseArr(arr);
