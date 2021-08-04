function inchToFeet(inches) {
    let feet = inches / 12;
    return feet;
}

let myHeight = inchToFeet(66);
console.log("My Height in Feet is: " + myHeight);

let myHomeHeight = inchToFeet(132);
console.log("My Home Height in Feet is: " + myHomeHeight);
