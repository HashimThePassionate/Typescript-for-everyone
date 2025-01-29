"use strict";
let speed = 0; // 🚗 User sets speed to 0
let defaultSpeed = 30; // 🎯 Default speed
// Using Nullish Coalescing
let finalSpeed = speed !== null && speed !== void 0 ? speed : defaultSpeed;
console.log(finalSpeed); // Output: 0 ✅ (Correct, doesn't replace 0 with 30)
