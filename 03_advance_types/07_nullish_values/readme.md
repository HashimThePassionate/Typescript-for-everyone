# 🚀 **Working with Nullish Values  in TypeScript**  

In TypeScript, handling **`null`** and **`undefined`** is crucial when dealing with user inputs or missing data. Sometimes, we need to provide a **default value** if a variable is nullish (i.e., `null` or `undefined`). However, the traditional approach can lead to unintended behavior when working with falsy values like `0`, `false`, or an empty string.  

To address this, TypeScript provides the **Nullish Coalescing Operator (`??`)**, which ensures a fallback value is applied **only** if the variable is explicitly `null` or `undefined`.  

---

## 🧐 **The Problem: Handling Nullish Values**  

Consider a scenario where we want to define a `speed` variable. This value could come from **user input**, meaning it might be `null` if the user hasn’t provided a value.  

```typescript
let speed: number | null = null; // 🚗 Speed input from the user
let defaultSpeed = 30; // 🎯 Default fallback speed

let finalSpeed = speed || defaultSpeed;

console.log(finalSpeed); // Output: 30
```

### 🚧 **Why Is This a Problem?**  

In JavaScript, the `||` (logical OR) operator **treats all falsy values** (`0`, `false`, `""`, `null`, `undefined`, `NaN`) as if they are **false**.  

So if `speed = 0` (which might be a valid value), the logical OR (`||`) operator **incorrectly replaces it with the default value**:  

```typescript
let speed: number = 0;
let finalSpeed = speed || defaultSpeed; // ❌ Incorrectly assigns 30 instead of 0
```

This happens because `0` is **falsy**, and the `||` operator considers it as "false" and applies the default value.  

---

## 🔥 **Solution: Using the Nullish Coalescing Operator (`??`)**  

To differentiate between **actual nullish values (`null`, `undefined`)** and other falsy values (`0`, `false`, `""`), we use the **Nullish Coalescing Operator (`??`)**:  

```typescript
let finalSpeed = speed ?? defaultSpeed;
```

### ✅ **Why This Works**  

The **`??` operator** only assigns the default value **if the left-hand side is `null` or `undefined`**. Unlike `||`, it **does not treat `0`, `false`, or an empty string as nullish values**.

---

## ✍️ **Example: Implementing a Speed Fallback Mechanism**  

```typescript
let speed: number | null = 0; // 🚗 User sets speed to 0
let defaultSpeed = 30; // 🎯 Default speed

// Using Nullish Coalescing
let finalSpeed = speed ?? defaultSpeed;

console.log(finalSpeed); // Output: 0 ✅ (Correct, doesn't replace 0 with 30)
```

---

## 🎯 **Key Differences: `||` vs. `??`**

| Operator  | Replaces when...                     | Example (`speed = 0`) |
|-----------|-------------------------------------|---------------------|
| `||`      | Left-hand side is **falsy** (`0`, `false`, `""`, `null`, `undefined`) | **Incorrectly returns 30** |
| `??`      | Left-hand side is **nullish** (`null` or `undefined` only) | **Correctly returns 0** |

### 🎨 **Illustration**  

```typescript
let value1 = null ?? "Default"; // ✅ "Default" (null replaced)
let value2 = undefined ?? "Default"; // ✅ "Default" (undefined replaced)
let value3 = 0 ?? "Default"; // ✅ 0 (0 is not null or undefined)
let value4 = false ?? "Default"; // ✅ false (false is not null or undefined)
let value5 = "" ?? "Default"; // ✅ "" (empty string is not null or undefined)
```

---

## ✨ **Use Cases for Nullish Coalescing (`??`)**  

1. **Providing Default Values**  
   ```typescript
   let theme = userPreference ?? "light"; // Uses userPreference if available, otherwise "light"
   ```

2. **Fetching Data from an API**  
   ```typescript
   let data = fetchData() ?? "No Data Available";
   ```

3. **Handling Configuration Settings**  
   ```typescript
   let timeout = config.timeout ?? 3000; // Default timeout of 3000ms
   ```

---

## 📝 **Conclusion**  

The **Nullish Coalescing Operator (`??`)** is a powerful tool for handling `null` and `undefined` values **without mistakenly overriding valid falsy values** like `0` or `false`.  

By using `??` instead of `||`, you ensure that default values are **only applied when necessary**, leading to cleaner, more predictable TypeScript code.  

