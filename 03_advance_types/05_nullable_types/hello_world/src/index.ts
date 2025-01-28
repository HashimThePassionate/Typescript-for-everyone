function greet(name: string | null): void {
    if (name) {
      console.log(`Hello, ${name.toUpperCase()}`);
    } else {
      console.log("Hola");
    }
  }
  
  // ✅ Valid calls
  greet("John"); // Output: Hello, JOHN
  greet(null);   // Output: Hola
  