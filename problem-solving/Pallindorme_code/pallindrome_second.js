function palindrome(str) {
    let arr = str.split('');
    return arr.every((ele, i) => {
        return ele === str[str.length - i - 1];
    });
}

palindrome('popop');
