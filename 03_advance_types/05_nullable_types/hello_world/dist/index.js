"use strict";
function greet(name) {
    if (name) {
        console.log(`Hello, ${name.toUpperCase()}`);
    }
    else {
        console.log("Hola");
    }
}
// ✅ Valid calls
greet("John"); // Output: Hello, JOHN
greet(null); // Output: Hola
