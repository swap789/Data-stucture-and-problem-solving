/*
Input - I work in javascript language
Output - language javascript in work I
*/


function reverseLine(str) {
    let arr = [];
    let sample = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            sample = sample + str[i];
        } else {
            arr.push(sample);
            sample = '';
        }
        if (!str[i + 1]) {
            arr.push(sample);
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
}

let str = 'I work in javascript language';
reverseLine(str);