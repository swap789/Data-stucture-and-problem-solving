function reverseInt(num) {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
  }
  
  reverseInt(123);
  