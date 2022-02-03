function chunk(arr, size) {
    let result = [];
    let chunkArr = [];
    for (let i = 0; i < arr.length; i++) {
        chunkArr.push(arr[i]);
        if (arr[i] % size === 0) {
            result.push(chunkArr);
            chunkArr = [];
        }
    }
    if (chunkArr.length) {
        result.push(chunkArr);
        chunkArr = [];
    }
    return result;
}
chunk([1, 2, 3, 4, 5], 10);
