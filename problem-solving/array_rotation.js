let arr = [1, 2, 3, 4, 6, 7, 8, 9, 0];

function rotate(arr, d) {
    for (i = 0; i <= d - 1; i++) {
        arr.push(arr[i])
    }
    for (i = 0; i <= d - 1; i++) {
        arr.shift(arr[i])
    }
    return arr;
}

rotate(arr, 5)
/* *******************************************************************************************
Solution without using javascript ready made function
*/

let arr = [1, 2, 3, 4];
function rotate(arr, d) {
  for (i = 0; i <= d - 1; i++) {
    arr[arr.length] = arr[i]; // Put first element at the end of array
  }
  for (i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[d + i];
    if (i >= arr.length - d) {
      arr.length = i;
    }
  }
  return arr;
}

rotate(arr, 2);
