# ✨ **Union Types and Type Narrowing in TypeScript**

In this section, we will explore the concept of **Union Types** in TypeScript, which allows variables or functions to handle **multiple types**. Additionally, we’ll learn about **Type Narrowing**, a technique to refine union types into more specific types during runtime. This combination adds both flexibility and type safety to your code.


## 🧩 **Union Types: A Versatile Solution**

A **Union Type** allows a variable, function parameter, or return value to accept more than one type. This is achieved using the **vertical bar (`|`) operator**.

### 🌟 Why Use Union Types?

- **Flexibility**: Enables handling multiple types with a single implementation.
- **Type Safety**: Provides compile-time checks for the specified types.
- **Cleaner Code**: Reduces the need for redundant overloads or manual type checks.

### ✍️ Example Use Case: Weight Conversion Function

Let’s consider a function to convert weight from kilograms (kg) to pounds (lbs). The input can either be:

1. A **number** (e.g., `10`) representing kilograms.  
2. A **string** (e.g., `"10kg"`) representing the weight as text.

Using a **Union Type**, we can define this function to handle both input types:

```typescript
function convertWeight(weight: number | string): number {
  // Function implementation will be added after type narrowing
}
```


## 🔍 **Type Narrowing: Refining Union Types**

**Type Narrowing** is a technique to **differentiate between types** within a union. By narrowing the type, TypeScript understands the properties and methods specific to the current type being handled.

### 🔧 How Type Narrowing Works

We can narrow the type of a variable by using the `typeof` operator:

- **If `typeof` weight equals `"number"`**:  
  TypeScript treats the variable as a number, giving access to **number-specific methods** (e.g., arithmetic operations, `.toFixed()`).
  
- **If `typeof` weight equals `"string"`**:  
  TypeScript treats the variable as a string, allowing access to **string-specific methods** (e.g., `.toUpperCase()`, `.substring()`).

### 🚀 Implementing Type Narrowing

Here’s how we can refine the weight conversion function using **type narrowing**:

```typescript
function convertWeight(weight: number | string): number {
  if (typeof weight === "number") {
    // TypeScript now knows `weight` is a number
    return weight * 2.2; // Convert kg to lbs
  } else {
    // TypeScript now knows `weight` is a string
    return parseFloat(weight) * 2.2; // Parse the number and convert
  }
}
```


## ✨ **Key Points About Union Types and Narrowing**

1. **Union Types**:  
   Use the `|` operator to allow multiple types for a variable, parameter, or return value.

   ```typescript
   let weight: number | string;
   ```

2. **Common Methods**:  
   Both numbers and strings share methods like `.toLocaleString()`, `.toString()`, and `.valueOf()`. These can be safely accessed without narrowing.

3. **Type Narrowing**:  
   Use the `typeof` operator or other techniques to refine the type at runtime.  
   - **Number-specific methods**: Available when narrowed to `number`.  
   - **String-specific methods**: Available when narrowed to `string`.

4. **One-liner Checks**:  
   For simple logic, you can omit the code block `{}` when writing type checks:

   ```typescript
   if (typeof weight === "number") return weight * 2.2;
   ```

5. **Converting Strings to Numbers**:  
   Use `parseFloat()` to extract numeric values from a string. This is useful when handling inputs like `"10kg"`.


## 🛠 **Practical Use Case: Weight Conversion**

Here’s the full implementation for a flexible weight conversion function:

```typescript
function convertWeight(weight: number | string): number {
  if (typeof weight === "number") {
    // Handle number input
    return weight * 2.2;
  } else {
    // Handle string input
    return parseFloat(weight) * 2.2;
  }
}

// Example Calls
console.log(convertWeight(10));       // Output: 22 (10 kg to lbs)
console.log(convertWeight("10"));   // Output: 22 (10 kg to lbs)
```


## 🎯 **Benefits of Using Union Types and Narrowing**

1. **Enhanced Flexibility**: Accommodates multiple input types in a single implementation.  
2. **Improved Type Safety**: Ensures only valid operations are performed based on the current type.  
3. **Readable Code**: Type narrowing makes the logic clear and concise.  
4. **Reduced Errors**: Compile-time checks catch potential issues early.


## 📝 **Conclusion**

By combining **Union Types** and **Type Narrowing**, you can write robust and flexible TypeScript code that handles diverse input scenarios with ease. These techniques are essential for building scalable, type-safe applications while maintaining clean and maintainable codebases.
