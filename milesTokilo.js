function milesToKiloMeter(miles) {
    let kiloMeter = miles * 1.60934;
    return kiloMeter;
}

let feniToDhaka = milesToKiloMeter(100);
console.log("Feni to Dhaka in KiloMeters: " + feniToDhaka);

let feniToCtg = milesToKiloMeter(50);
console.log("Feni to Chittagong in KiloMeters: " + feniToCtg);