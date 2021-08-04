function oddEven(number) {
    let even = 'Even';
    let odd = 'Odd';
    if (number % 2 == 0) {
        return even;
    }
    if (number % 2 == 1) {
        return odd;
    }
}

let userInput = oddEven(5);
console.log('User Input Number is: ' + userInput);