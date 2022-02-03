/**
Reversal algorithm for right rotation of an array
Input: arr[] = {1, 2, 3, 4, 5, 
                6, 7, 8, 9, 10}
          k = 3
Output: 8 9 10 1 2 3 4 5 6 7

Input: arr[] = {121, 232, 33, 43 ,5}
           k = 2
Output: 43 5 121 232 33
 */

function reverseArray(arr, start, end) {
    while (start < end) { // 0 and 4
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

/* Function to right rotate arr[]
of size n by d */
function rightRotate(arr, d, n) {
    arr = reverseArray(arr, 0, n - 1);
    arr = reverseArray(arr, 0, d - 1);
    arr = reverseArray(arr, d, n - 1);
    return arr;
}

let arr = [1, 2, 3, 4, 5]
let d = 2;
len = arr.length;
rightRotate(arr, 2, len)
