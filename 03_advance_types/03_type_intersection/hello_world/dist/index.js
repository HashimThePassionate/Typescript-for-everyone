"use strict";
// Implement the combined type
const shape = {
    draw: () => {
        console.log("Drawing the object...");
    },
    resize: (width, height) => {
        console.log(`Resizing the object to width: ${width}, height: ${height}`);
    },
};
// Using the methods
shape.draw(); // Output: Drawing the object...
shape.resize(100, 200); // Output: Resizing the object to width: 100, height: 200
