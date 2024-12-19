# 🚀 **Setting Up TypeScript on Your Machine**

The first step to mastering TypeScript is setting up your environment! 🌐 Let’s walk through the process of installing and verifying the **TypeScript compiler**. Don't worry if you’re new to this; we’ll cover everything step by step! 🛠️


## 🔧 **Prerequisites**

Before we begin, make sure you have **Node.js** installed on your computer. Why? Because we’ll use **Node Package Manager (NPM)**, which comes with Node.js, to install TypeScript.

### **Check if Node.js is Installed**
1. Open your terminal (Command Prompt, PowerShell, or a terminal emulator like iTerm).
2. Run the following command:
   ```bash
   node -v
   ```
   - If you see a version number (e.g., `v16.18.0`), Node.js is installed. ✅
   - If not, go to [Node.js Official Website](https://nodejs.org/) and download the **latest version** for your operating system. Install it and rerun the above command to confirm.


## 📥 **Installing the TypeScript Compiler**

With Node.js installed, you can use `npm` to install TypeScript. Follow these steps:

1. Open your terminal and run:
   ```bash
   npm i -g typescript
   ```
   - The `-g` flag ensures TypeScript is installed globally, so you can use it from anywhere on your system. 🌍
   - This will download and install the **TypeScript compiler**.

2. Verify the installation by checking the TypeScript version:
   ```bash
   tsc -v
   ```
   - If you see something like `Version 5.7.2`, TypeScript is installed successfully. 🎉


## 🖥️ **Choosing an IDE**

For this course, we’ll use **Visual Studio Code (VS Code)**, a powerful and beginner-friendly IDE. 💻  
- Download VS Code from the [Official VS Code Website](https://code.visualstudio.com/).  
- Install and launch it on your machine.


## 🛠️ **Configuring VS Code for TypeScript**

1. **Install the TypeScript Extension**  
   - Open VS Code.
   - Go to the **Extensions Marketplace** (click the square icon on the left or press `Ctrl+Shift+X`).
   - Search for and install the **"TypeScript Language Features"** extension. 🔍

2. **Set Up a New Project**  
   - Create a folder for your TypeScript projects.
   - Open the folder in VS Code (`File -> Open Folder`).
   - Add a new file, e.g., `index.ts` (all TypeScript files use the `.ts` extension).

3. **Compile TypeScript Code**  
   - In the terminal, navigate to your project folder:
     ```bash
     cd path/to/your/project
     ```
   - Compile your TypeScript file:
     ```bash
     tsc index.ts
     ```
   - This will generate a JavaScript file (`index.js`) that you can run with Node.js.


## 📦 **Key Notes About TypeScript Versions**

- **Version Compatibility**: Don’t worry about using a slightly newer or older version of TypeScript than the one used in this course. 🌟
  - The concepts taught here will remain relevant across versions.
  - Use `tsc -v` to check your installed TypeScript version at any time.


## 🎯 **What’s Next?**

With TypeScript installed and configured, you're ready to dive into coding! 🎉 In the next lessons, we’ll write and compile TypeScript programs using VS Code. Get ready to explore the power of **TypeScript** step by step! 🚀


**Regards,**  
**Muhammad Hashim**  