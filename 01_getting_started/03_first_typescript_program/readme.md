# 🚀 **Creating and Compiling Your First TypeScript Project**

In this section, we’ll walk through creating your first **TypeScript project**, compiling the code, and understanding the basics of **type annotations**. Let’s get started step by step! 🌟

---

## 📂 **Step 1: Setting Up Your Project Folder**

1. **Create a New Folder**  
   - Go to your **Desktop** (or any preferred location).
   - Create a folder for your project, e.g., `hello-world`.  
     ```bash
     mkdir hello-world
     cd hello-world
     ```
   - You can name this folder anything you like and place it anywhere on your machine.

2. **Open the Folder in VS Code**  
   - Drag and drop the folder into the **Visual Studio Code** window.
   - Alternatively, use the terminal:
     ```bash
     code .
     ```

---

## 📝 **Step 2: Writing Your First TypeScript File**

1. **Create a File**  
   Inside your project folder, create a new file named `index.ts`. This will be your **TypeScript source file**.

2. **Write Basic Code**  
   Open `index.ts` and add the following code:
   ```typescript
   let age: number = 25;  // Declaring a variable `age` of type number
   console.log("Hello, brother! Your age is:", age);
   ```

   ### Key Points:
   - **Type Annotation**: `let age: number` ensures that `age` can only store numbers.
   - **Type Safety**: If you try to assign a string to `age`, like `age = "twenty-five"`, TypeScript will throw an error:  
     ```
     Type 'string' is not assignable to type 'number'.
     ```

---

## 🖥️ **Step 3: Compiling TypeScript Code**

1. **Open the Terminal**  
   - In VS Code, go to the **View** menu and select **Terminal** (shortcut: `Ctrl + ~` on Windows/Linux or `Cmd + ~` on Mac).

2. **Compile the Code**  
   Use the **TypeScript compiler** (`tsc`) to compile `index.ts`:
   ```bash
   tsc index.ts
   ```

   - This generates a `index.js` file in the same folder.  
   - The `index.js` file contains plain JavaScript code that browsers or Node.js can execute.

3. **Run the Compiled Code**  
   Run the JavaScript file using Node.js:
   ```bash
   node index.js
   ```
   Output:  
   ```
   Hello, brother! Your age is: 25
   ```

---

## 💡 **Why Use TypeScript?**

1. **Static Typing for Safety**  
   - The `let age: number` declaration ensures the variable can only hold numbers.
   - If you try to assign a value of a different type (e.g., a string), TypeScript catches the error **before runtime**.
   - Example Error:  
     ```
     Type 'string' is not assignable to type 'number'.
     ```

2. **Compile-Time Error Detection**  
   - TypeScript helps catch potential bugs early during development, saving time and reducing the risk of runtime errors.

3. **Compatibility with JavaScript**  
   - TypeScript code compiles into plain JavaScript that runs in all modern browsers and environments.

---

## 🎯 **Next Steps**

In the next lesson, we’ll explore:
- **Configuring the TypeScript Compiler**: Learn how to target specific JavaScript versions.
- **Detailed Features**: Understand advanced TypeScript features like `tsconfig.json`, type inference, and more.

Stay tuned as we dive deeper into TypeScript and its powerful features! 🚀

---

**Regards,**  
**Muhammad Hashim**  