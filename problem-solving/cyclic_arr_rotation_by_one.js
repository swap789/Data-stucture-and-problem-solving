function arrayRotation(arr) {
  let tmp = arr[0];
  for (i = 1; i <= arr.length - 1; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = tmp;
  return arr;
}
let newArr = arrayRotation([1, 2, 3, 4, 5])
console.log(newArr)
arrayRotation(newArr)
