function factorial(number) {
    let factNum = 1;
    for (let i = 1; i <= number; i++) {
        factNum = factNum * i;
    }
    return factNum;
}

let checkFactorial = 5;
let factorialResult = factorial(checkFactorial);
console.log("Factorial Number of " + checkFactorial + " is " + factorialResult);