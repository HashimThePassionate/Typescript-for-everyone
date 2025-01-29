# 🚀 **Understanding the `never` Type in TypeScript**  

The **`never` type** in TypeScript represents values that **never occur**. It is used in specific scenarios where a function **never returns**, such as an **infinite loop** or a function that **always throws an error**. While not commonly used, understanding `never` can help improve type safety in your applications.

---

## 🧐 **What Is the `never` Type?**  

The `never` type indicates that a function **never successfully returns**. This means the function either:

1. **Runs indefinitely** (e.g., an infinite loop).  
2. **Throws an error** and never completes execution.  

The TypeScript compiler infers the `never` type in such cases to **help catch unreachable code** and ensure proper type safety.

---

## 🛠 **Example 1: A Function That Never Returns (Infinite Loop)**  

Consider a function that continuously processes events and **never terminates**:

```typescript
function processEvents(): never {
  while (true) {
    console.log("Processing event...");
  }
}
```

### ✅ **Key Observations:**
- This function **never exits** because of the infinite `while (true)` loop.
- The TypeScript compiler infers its return type as `never`.

---

## 🔥 **Example 2: A Function That Always Throws an Error**  

A function that **always throws an exception** also has a return type of `never` because it **never successfully returns**.

```typescript
function reject(message: string): never {
  throw new Error(message);
}

console.log("This will never be reached"); // ❌ Unreachable code
```

### ✅ **Key Observations:**
- The `reject()` function **always throws an error**, preventing any further execution.
- Any code after calling this function is **unreachable**, which TypeScript warns about.

---

## 🔍 **How TypeScript Uses `never` to Detect Unreachable Code**  

TypeScript has a compiler option called **`allowUnreachableCode`** that controls whether unreachable code is flagged.  

If **unreachable code** is detected, the compiler **grays out** the unreachable lines and may show warnings.

```typescript
function processEvents(): never {
  while (true) {
    console.log("Processing event...");
  }
  console.log("This line will never execute"); // ❌ Unreachable code
}
```

Turning off `allowUnreachableCode` in `tsconfig.json` will **strictly enforce this rule**.

---

## ✨ **When to Use the `never` Type?**  

| Scenario | Example |
|----------|---------|
| **Infinite Loops** | Functions that run continuously, like event listeners. |
| **Error Handling** | Functions that always throw an exception. |
| **Exhaustive Type Checks** | Ensuring all possible cases are handled in a `switch` statement. |

---

## 🎨 **Example 3: `never` in Exhaustive Type Checks**  

The `never` type is useful when ensuring **all cases** are covered in a `switch` statement.

```typescript
type Status = "success" | "error" | "loading";

function handleStatus(status: Status): string {
  switch (status) {
    case "success":
      return "Operation was successful!";
    case "error":
      return "An error occurred!";
    case "loading":
      return "Loading...";
    default:
      const _exhaustiveCheck: never = status; // Ensures all cases are handled
      throw new Error(`Unhandled status: ${status}`);
  }
}
```

### ✅ **Why This Works?**
- If a new case (e.g., `"pending"`) is added to `Status`, TypeScript will **throw an error** in the `default` case, reminding us to handle it.

---

## 🎯 **Key Takeaways**  

1. **The `never` type represents values that never occur.**  
2. Functions that **never return** (`infinite loops` or `always throwing errors`) return `never`.  
3. **TypeScript detects unreachable code** and warns developers when `never` is inferred.  
4. The `never` type is useful for **exhaustive type checking** in `switch` statements.  

---

## 📝 **Conclusion**  

While `never` is not commonly used, it plays an important role in **strict type safety** and **unreachable code detection**. Understanding `never` helps you write **safer, more predictable TypeScript applications**. 🚀  
