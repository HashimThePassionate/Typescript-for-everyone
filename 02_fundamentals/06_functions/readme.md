# 🚀 **Functions in TypeScript**

TypeScript provides robust features to catch errors and enforce type safety when working with functions. This section explores how to define functions, use parameters, handle return types, and set up `tsconfig.json` to enforce strict checks that help prevent common issues.

---

## 🛠️ **Defining Functions in TypeScript**

Here’s how to define a function in TypeScript with typed parameters and return values:

### Example:
```typescript
function calculateTax(income: number): number {
    return income * 0.2; // Returns 20% of the income as tax
}
```

### Key Points:
1. **Parameter Types**: The parameter `income` is explicitly declared as a `number`.
2. **Return Type**: The function’s return type is declared as `number`.
3. **Type Inference**: If you don’t specify the return type, TypeScript infers it based on the `return` statement.

---

## ⚙️ **Why Specify Return Types?**

Even though TypeScript can infer return types, explicitly declaring them is a **best practice**:
- **Clarity**: It makes the function’s purpose clear to other developers.
- **Error Prevention**: Ensures the function always returns the correct type.

### Example:
```typescript
function calculateTax(income: number): number {
    if (income < 50000) {
        return income * 0.15; // 15% tax for incomes below 50,000
    }
    return income * 0.2; // 20% tax for other incomes
}
```

If a code path doesn’t return a value, TypeScript shows an error:
```typescript
function calculateTax(income: number): number {
    if (income < 50000) {
        return income * 0.15;
    }
    // Error: Not all code paths return a value
}
```

To fix this, ensure all paths return a value.

---

## 🎯 **Optional Parameters**

TypeScript allows you to make function parameters optional by adding a `?` after the parameter name.

### Example:
```typescript
function calculateTax(income: number, taxYear?: number): number {
    if ((taxYear || 2024) < 2022) {
        return income * 0.1; // 10% tax for older years
    }
    return income * 0.2; // Default 20% tax
}
```

### Key Points:
1. **Optional Parameter**: `taxYear` is optional.
2. **Default Value**: If `taxYear` is not provided, it defaults to `undefined`.

---

## ⚙️ **Default Parameter Values**

To avoid handling `undefined`, provide default values for parameters:
```typescript
function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) {
        return income * 0.1; // 10% tax for older years
    }
    return income * 0.2; // Default 20% tax
}
```

Now, you can call the function with or without the `taxYear` argument:
```typescript
console.log(calculateTax(60000));        // Uses default taxYear (2022)
console.log(calculateTax(60000, 2021)); // Uses the specified taxYear (2021)
```

---

## 📜 **`tsconfig.json` Settings for Functions**

TypeScript provides settings in **`tsconfig.json`** to enforce type safety and catch common issues:

### 1. **`strict`**  
Enables a set of strict type-checking options, including:
- **`noImplicitReturns`**
- **`noUnusedParameters`**
- **`strictNullChecks`**

**Default Setting:**
```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

---

### 2. **`noImplicitReturns`**  
Ensures all code paths in a function return a value.  
**Example Setting:**
```json
{
    "compilerOptions": {
        "noImplicitReturns": true
    }
}
```

**Example Code:**
```typescript
function calculateTax(income: number): number {
    if (income < 50000) {
        return income * 0.1;
    }
    // Error: Not all code paths return a value
}
```

---

### 3. **`noUnusedParameters`**  
Flags unused parameters in functions, helping to keep the code clean.  
**Example Setting:**
```json
{
    "compilerOptions": {
        "noUnusedParameters": true
    }
}
```

**Example Code:**
```typescript
function greet(name: string, age: number): string {
    return `Hello, ${name}`; // Error: `age` is declared but never read
}
```

---

### 4. **`strictNullChecks`**  
Ensures `null` and `undefined` are explicitly handled in the code.  
**Example Setting:**
```json
{
    "compilerOptions": {
        "strictNullChecks": true
    }
}
```

**Example Code:**
```typescript
function calculateTax(income: number, taxYear?: number): number {
    if (taxYear < 2022) { // Error: Object is possibly 'undefined'
        return income * 0.1;
    }
    return income * 0.2;
}
```

**Fix with Default Values:**
```typescript
function calculateTax(income: number, taxYear: number = 2022): number {
    return income * (taxYear < 2022 ? 0.1 : 0.2);
}
```

---

## 📝 **Best Practices**

1. **Always Use Explicit Types**  
   - Declare types for parameters and return values.
   - Example:
     ```typescript
     function greet(name: string): string {
         return `Hello, ${name}`;
     }
     ```

2. **Use Default Values**  
   - Avoid `undefined` by setting default parameter values.
   - Example:
     ```typescript
     function calculateTax(income: number, taxYear: number = 2022): number {
         return income * 0.2;
     }
     ```

3. **Check Optional Parameters**  
   - Use conditional checks or default values to handle optional parameters.

4. **Enable Strict Checks in `tsconfig.json`**  
   - Use `noImplicitReturns`, `noUnusedParameters`, and `strictNullChecks` to catch potential issues early.

---

## 📝 **Summary**

- **Functions**:
  - Use type annotations for parameters and return types.
  - Handle optional parameters with `?` and default values.
  - Ensure all code paths return a value to avoid runtime errors.
- **`tsconfig.json` Settings**:
  - **`noImplicitReturns`**: Ensures all paths in functions return a value.
  - **`noUnusedParameters`**: Flags unused parameters in functions.
  - **`strictNullChecks`**: Enforces proper handling of `null` and `undefined`.


**Regards,**  
**Muhammad Hashim and Ishaque**  