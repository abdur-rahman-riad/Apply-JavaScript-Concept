function isLeapYear(year) {
    let yesLeapYear = "Yes! Leap Year";
    let noLeapYear = "No! Not Leap Year";
    if (year % 400 == 0) {
        return yesLeapYear;
    }
    else if (year % 100 == 0) {
        return noLeapYear;
    }
    else if (year % 4 == 0) {
        return yesLeapYear;
    }
    else {
        return noLeapYear;
    }
}

let givenYear = 2120;
let checkLeapYear = isLeapYear(givenYear);
console.log("Is That Given Year is Leap Year ? --- " + checkLeapYear);