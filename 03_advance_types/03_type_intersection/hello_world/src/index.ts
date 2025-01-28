// Define the Drawable type
type Drawable = {
  draw: () => void; // ✏️ Method to draw an object
};

// Define the Resizable type
type Resizable = {
  resize: (width: number, height: number) => void; // 📏 Method to resize an object
};

// Combine Drawable and Resizable using Intersection Types
type DrawableResizable = Drawable & Resizable;

// Implement the combined type
const shape: DrawableResizable = {
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
