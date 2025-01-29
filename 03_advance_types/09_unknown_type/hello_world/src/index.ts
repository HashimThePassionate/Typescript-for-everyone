function render(document: unknown) {
    if (typeof document === "string") {
      console.log(document.toUpperCase()); // ✅ Safe because it's a string
    } else {
      console.log("Invalid document type");
    }
  }
  
render("TypeScript Guide"); // ✅ Output: TYPESCRIPT GUIDE
render(42); // ✅ Output: Invalid document type


async function fetchData(): Promise<unknown> {
    return "{ \"name\": \"Alice\" }"; // Simulated API response
  }
  
  async function processData() {
    const data = await fetchData();
  
    if (typeof data === "string") {
      console.log("Data received:", JSON.parse(data)); // ✅ Safe JSON parsing
    } else {
      console.log("Unexpected data type");
    }
  }
  
processData();
  