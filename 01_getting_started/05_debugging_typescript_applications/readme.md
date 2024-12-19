# 🚀 **Debugging TypeScript Applications in VS Code**

Debugging is an essential part of development, especially when things don’t work as expected. In this section, we’ll explore how to debug TypeScript applications in **Visual Studio Code (VS Code)**. Debugging allows us to run code **line by line**, inspect variables, and understand what’s happening under the hood.

---

## 🛠️ **What You’ll Need**
1. **VS Code** installed on your machine.
2. **A TypeScript project** with a `tsconfig.json` file (configured as explained earlier).
3. The ability to compile TypeScript into JavaScript (`tsc`).

---

## 📝 **Step-by-Step Debugging Process**

### **1. Write Some Sample Code**
Let’s add some simple logic in our `index.ts` file:
```typescript
let age: number = 20;

if (age < 15) {
    age += 10;  // Add 10 if age is less than 15
} else {
    age -= 5;   // Subtract 5 otherwise
}

console.log("Updated age is:", age);
```

---

### **2. Compile the Code**
Before debugging, ensure your TypeScript code is compiled into JavaScript:
```bash
tsc
```
This will generate an `index.js` file in your `dist` folder (or wherever your `outDir` is configured in `tsconfig.json`).

---

### **3. Open the Debug Panel**
1. In **VS Code**, click the **Run and Debug** icon in the Activity Bar (or press `Ctrl+Shift+D` / `Cmd+Shift+D`).
2. Click **"Create a launch.json file"** if it’s not already present.
   - Select **Node.js** as the environment.

This will generate a `launch.json` file under the `.vscode` folder.

---

### **4. Configure `launch.json`**
Update your `launch.json` file to debug TypeScript:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/dist/index.js",  // Path to compiled JavaScript
      "preLaunchTask": "tsc: build - tsconfig.json",  // Ensure TypeScript compiles before debugging
      "outFiles": ["${workspaceFolder}/dist/**/*.js"], // Map TypeScript to JavaScript
      "sourceMaps": true  // Enable source maps for better debugging
    }
  ]
}
```

### Key Points:
- **`program`**: Specifies the compiled JavaScript file to debug.
- **`preLaunchTask`**: Ensures the TypeScript compiler runs before debugging.
- **`sourceMaps`**: Helps map the TypeScript code to its corresponding JavaScript.

---

### **5. Add a Breakpoint**
1. Open your `index.ts` file.
2. Click to the left of the line numbers where you want to pause execution. A red dot (breakpoint) will appear.
   Example:
   ```typescript
   if (age < 15) {
       age += 10;  // Add a breakpoint here
   }
   ```

---

### **6. Start Debugging**
1. In the Debug Panel, select **Launch Program**.
2. Click the green **Start Debugging** button (or press `F5`).

---

### **7. Debugging Tools**
Once the debugger pauses at the breakpoint, you’ll see several tools for debugging:
- **Step Over (F10)**: Execute the current line and move to the next one.
- **Step Into (F11)**: Dive into a function call to debug it.
- **Step Out (Shift+F11)**: Exit the current function and return to the calling code.
- **Restart (Ctrl+Shift+F5)**: Restart debugging.
- **Stop (Shift+F5)**: Stop debugging.

### **Inspect Variables**
On the left, you’ll find the **Variables** pane:
- You can see the current values of variables (e.g., `age`).
- Add variables to the **Watch** pane to monitor their values as the program executes.

---

### **8. Modify and Debug Again**
Let’s modify the code to better observe debugging:
```typescript
let age: number = 20;

if (age < 15) {
    age += 10;
    console.log("Age after increment:", age); // Add a log to observe
} else {
    age -= 5;
    console.log("Age after decrement:", age); // Add a log to observe
}

console.log("Final age is:", age);
```

---

## 🌟 **Benefits of Debugging in TypeScript**
1. **Early Error Detection**: Use TypeScript’s static typing along with debugging to catch issues at compile-time and runtime.
2. **Clear Insights**: Understand how your code executes step-by-step.
3. **Improved Productivity**: Debugging helps identify logical errors faster.

---

**Debugging is an essential skill in development. Mastering it will save you countless hours of frustration! 🎉** 

If you're ready, we’ll dive into configuring advanced debugging techniques and features in the next section. 🚀

---

**Regards,**  
**Muhammad Hashim**  