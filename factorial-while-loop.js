function factorial(number) {
    let factNum = 1;
    let i = number;

    while (i >= 1) {
        factNum = factNum * i;
        i--;
    }
    return factNum;
}

let chekFactorial = factorial(5);
console.log(chekFactorial);