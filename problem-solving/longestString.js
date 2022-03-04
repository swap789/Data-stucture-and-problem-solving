function longestString(str) {

    /*
        'ABCDEFGABC';
        first = str[0]
        let char = str[0]
        let firstResult = '';
        let secondResult = '';
        for(let i=i+1;i<arr.length;i++) {
            firstResult = firstResult+str[i];
            if(str[i] === first){

            }
        }
    */

    first = str[0]
    let char = str[0]
    let firstResult = '';
    let secondResult = '';
    for (let i = char; i < arr.length; i++) {
        firstResult = firstResult + str[i];
        if (str[i] === first) {
            char = str[i + 1];
        }
    }
}


const str = 'ABCDEFGABC';

longestString(str);