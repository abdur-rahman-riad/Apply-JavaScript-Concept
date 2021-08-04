// Variable
var currentTime = "03:45pm";
var bookPrice = 240;
var isColorWhite = false;

// Variable That Could Change Value
let priceOfSomething = 200;

// Variable That Could Not Change Value
const personName = 'Abdur Rahman';

// Array
var myName = ['Mohammad', 'Abdur', 'Rahman', 'Riad'];
var elementCount = myName.length;
var riadPosition = myName.indexOf('Riad');
myName.push('Rahman');
myName.pop();

// Conditional Statements
if (bookPrice < 200) {
    console.log("I Will Buy this book...");
}
else {
    console.log("Book Price is Too Much");
}

// While Loop
var i = 1;
while (i <= 5) {
    console.log(i + "--Hello While Loop");
    i++;
}

// For Loop
for (var i = 1; i <= 5; i++) {
    console.log(i + "--Hello Foor Loop");
}

// Function
function addNumber(num1, num2) {
    var total = num1 + num2;
    return total;
}
var value1 = 10;
var value2 = 5;
var result = addNumber(value1, value2);
var totalResult = result + 20;
console.log("Summation using Function is: " + totalResult);