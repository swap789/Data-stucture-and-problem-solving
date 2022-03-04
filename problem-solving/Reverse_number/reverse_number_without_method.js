/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (num) {
    let result = '';
    while (num % 10 !== 1) {
        let rem = num % 10;
        result = result + rem;
        num = num / 10;
    }
    return result;
};

let result = reverse(123);
console.log(result)