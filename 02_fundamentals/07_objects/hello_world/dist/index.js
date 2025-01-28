"use strict";
const employee = {
    id: 101, // 🆔 Read-only property
    name: "John Doe", // 👤 Employee name
    greet: () => "Hello, my name is John Doe!", // 📣 Method
};
// ✅ Accessing properties
console.log(employee.name); // Output: John Doe
// ❌ Attempting to modify a readonly property
// employee.id = 102; // Error: Cannot assign to 'id' because it is a read-only propert
