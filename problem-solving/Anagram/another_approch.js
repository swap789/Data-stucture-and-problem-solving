function isAnagramOrNot(stringA, stringB) {
    let a = cleanString(stringA)
    let b = cleanString(stringB)
    if (a !== b) {
        return false;
    }
    return true;
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split().sort().join()
}