function isAnagramOrNot(stringA, stringB) {
    let a = buildCharMap(stringA);
    let b = buildCharMap(stringB);

    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }

    for (let char of a) {
        if (a[char] !== b[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
