let str = 'I work in javascript language';
//language javascript in work I
//use charAt
let arr = [];
let reverseString = '';
let sample = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        sample = sample + str[i];
    } else {
        arr.push(sample);
        sample = '';
    }
}
let newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {

    newArr.push(arr[i]);
}

let result = '';
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== ' ') {
        result = result + ' ' + newArr[i];
    }
}
console.log(result);