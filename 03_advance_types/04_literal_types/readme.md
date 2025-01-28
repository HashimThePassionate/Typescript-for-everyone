# 🎯 **Literal Types in TypeScript**

In this lesson, we will explore **Literal Types** in TypeScript, a feature that allows you to limit the values assigned to a variable to **specific predefined options**. This can help ensure type safety and reduce errors in your code.


## 🧐 **What Are Literal Types?**

A **Literal Type** in TypeScript specifies that a variable can only take on a limited set of exact values. These values are defined directly within the type definition.

### 🌟 Key Features of Literal Types:

1. **Restricts Values**:  
   - Variables can only accept specific values you define, making the code safer and more predictable.

2. **Supports Different Data Types**:  
   - Literal types can represent **numbers**, **strings**, or **booleans**.

3. **Improves Code Clarity**:  
   - By explicitly stating the allowed values, your code becomes easier to understand and maintain.


## ✍️ **Example: Limiting Quantity**

Let’s consider a scenario where we want to define a variable `quantity` that can only accept the values `50` or `100`. Without literal types, using a general `number` type allows **any valid number** in JavaScript, which is not ideal.

### 🚧 The Problem Without Literal Types

```typescript
let quantity: number;
quantity = 50; // ✅ Valid
quantity = 100; // ✅ Valid.
```


## 🔧 **Using Literal Types to Solve the Problem**

To restrict the values of `quantity` to **only `50` or `100`**, we can define a literal type directly:

```typescript
let quantity: 50 | 100;
quantity = 50; // ✅ Valid
quantity = 100; // ✅ Valid
quantity = 75; // ❌ Error: Type '75' is not assignable to type '50 | 100'.
```


## 🛠 **Improving Code with Custom Type Aliases**

Instead of hardcoding the literal values (`50 | 100`) in multiple places, we can create a reusable **custom type** using a **type alias**:

```typescript
type Quantity = 50 | 100;

let quantity: Quantity;
quantity = 50; // ✅ Valid
quantity = 100; // ✅ Valid
quantity = 75; // ❌ Error: Type '75' is not assignable to type 'Quantity'.
```

This approach ensures that the allowed values are defined in a single place, making your code easier to maintain and update.


## 🔍 **Literal Types Are Not Limited to Numbers**

Literal types are not restricted to numbers; they can also represent strings or booleans. For example:

### 🎨 Example with Strings

```typescript
type Unit = "cm" | "inch";

let lengthUnit: Unit;
lengthUnit = "cm"; // ✅ Valid
lengthUnit = "inch"; // ✅ Valid
lengthUnit = "meter"; // ❌ Error: Type '"meter"' is not assignable to type 'Unit'.
```

### ✅ Example with Booleans

```typescript
type Toggle = true | false;

let isEnabled: Toggle;
isEnabled = true; // ✅ Valid
isEnabled = false; // ✅ Valid
isEnabled = "yes"; // ❌ Error: Type '"yes"' is not assignable to type 'Toggle'.
```


## ✨ **Why Use Literal Types?**

1. **Enhanced Type Safety**:  
   - Prevents invalid values by restricting variables to specific options.  

2. **Improved Readability**:  
   - Clearly defines the allowed values for a variable, making code more intuitive.

3. **Reusable and Maintainable**:  
   - Use **type aliases** to centralize and manage literal type definitions.  

4. **Supports Various Use Cases**:  
   - Can be used for numbers, strings, or booleans, making it versatile.


## 🛠 **Key Takeaways**

1. **Literal Types** restrict variables to a predefined set of values using the `|` (union) operator.  
2. They can represent **numbers**, **strings**, or **booleans**.  
3. Use **type aliases** to simplify and centralize literal type definitions.  
4. Literal types enhance **type safety** and **code clarity**, making your applications more robust.


## 🎯 **Practical Use Cases**

- **Configuration Options**: Define specific settings (e.g., `"light"` or `"dark"` theme).  
- **Units of Measurement**: Restrict units to valid values (e.g., `"cm"` or `"inch"`).  
- **State Management**: Specify possible states (e.g., `"loading"`, `"success"`, `"error"`).  

