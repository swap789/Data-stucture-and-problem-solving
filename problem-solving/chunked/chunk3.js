function chunk(arr, size) {
    const chunked = [];
    let index = 0;
    while (index < arr.length) {
      chunked.push(arr.slice(index, index + size));
      console.log(index)
      index += size;
    }
    return chunked;
  }
  chunk([1, 2, 3, 4, 5], 2);
1  