function reverseString(str) {
    let len = str.length - 1;
    let result = '';
    for (let i = len; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  
  reverseString('swapnil');