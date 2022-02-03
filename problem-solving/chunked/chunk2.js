function chunk(arr, size) {
    const chunked = []
    for (let ele of arr) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([ele])
        } else {
            last.push(ele);
        }
    }
    return chunked;
}
chunk([1, 2, 3, 4, 5], 10);
