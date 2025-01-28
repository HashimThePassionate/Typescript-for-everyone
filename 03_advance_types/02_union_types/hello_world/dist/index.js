"use strict";
function convertWeight(weight) {
    if (typeof weight === "number") {
        // TypeScript now knows `weight` is a number
        return weight * 2.2; // Convert kg to lbs
    }
    else {
        // TypeScript now knows `weight` is a string
        return parseFloat(weight) * 2.2; // Parse the number and convert
    }
}
