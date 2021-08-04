function factorial(number) {
    let factNumber = 1;
    let i = 1;
    while (i <= number) {
        factNumber = factNumber * i;
        i++;
    }
    return factNumber;
}

let chechFactorial = 5;
let factorialResult = factorial(chechFactorial);
console.log("Factorial of " + chechFactorial + " is " + factorialResult);