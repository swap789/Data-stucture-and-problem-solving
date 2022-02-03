function reverseString(str) {
    return str.split('').reduce((rev, char) => {
        return char + rev;
    }, '')
}

reverseString('swapnil');
