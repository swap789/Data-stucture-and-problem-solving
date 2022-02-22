function splitAndShiftAtEnd(arr, splitLocation) {
    let result = [];
   for (let i = splitLocation; i < arr.length; i++) {
        result.push(arr[i]);
    }
    for (let i = 0; i < splitLocation; i++) {
        result.push(arr[i]);
    }
    return result
}

let arr = [12, 10, 5, 6, 52, 36];
let splitLocation = 2;
splitAndShiftAtEnd(arr, splitLocation);