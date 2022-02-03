function fizzBuzz(num) {
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0) {
            console.log('Fizz');
        }
        if (i % 5 === 0) {
            console.log('FizzBuzz');
        }
    }
}

fizzBuzz(100);
