function maxChar(str) {
    let obj = {};
    for (let char of str) {
        if (obj.hasOwnProperty(char)) {
            obj[char] = ++obj[char];
        } else {
            obj[char] = 1;
        }
    }
    console.log(obj);
    let max = 0;
    let final_key;
    for (let key in obj) {
        if (max < obj[key]) {
            max = obj[key];

            final_key = key;
        }
    }
    return `${final_key} character used most, count is ${max}`;
}

maxChar('abbcdssddsfasdfsadfss');
