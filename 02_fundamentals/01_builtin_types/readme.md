# 🚀 **Understanding Built-in TypeScript Types**

JavaScript has several **built-in types**, such as `number`, `string`, `boolean`, `undefined`, and `object`. TypeScript enhances these by introducing **new types** like `any` and others. In this section, we’ll explore these types and their usage in TypeScript.

---

## 🔢 **Built-in Types in JavaScript**

JavaScript provides basic types that you’re already familiar with:
1. **`number`**: Represents both integers and floating-point numbers.
   ```typescript
   let sales: number = 12345;
   ```
2. **`string`**: Represents text values.
   ```typescript
   let course: string = "TypeScript Basics";
   ```
3. **`boolean`**: Represents true/false values.
   ```typescript
   let isPublished: boolean = true;
   ```
4. **`undefined`**: A variable that has been declared but not assigned a value.
5. **`object`**: Used to represent non-primitive values like arrays, objects, and functions.

---

## 🆕 **TypeScript-Specific Types**

TypeScript introduces several new types to make your code more robust:

### 1. **`any`** 🌐
   - Allows variables to hold **any type** of value.
   - Use sparingly; it disables type safety.
   ```typescript
   let dynamicValue: any = 5;
   dynamicValue = "Now a string";  // No error
   ```

---

## 🖍️ **Type Inference**

In TypeScript, you don’t always need to annotate variables because the compiler can **infer types** based on initial values.

### Example:  
```typescript
let sales = 12345;  // TypeScript infers `number`
let course = "TypeScript Basics";  // TypeScript infers `string`
let isPublished = true;  // TypeScript infers `boolean`
```

### **Key Takeaway**  
- If you initialize a variable, TypeScript automatically infers its type.  
- If no value is assigned, TypeScript defaults the type to `any`.

---

## 🔄 **Changing Annotations Dynamically**

If we remove type annotations, TypeScript still understands the variable’s type through inference. For example:
```typescript
let sales: number = 12345;
sales = 67890;  // Valid

// Removing annotation
let sales = 12345;  // TypeScript still knows `sales` is a number
sales = "string";   // Error: Type 'string' is not assignable to type 'number'
```

---

## 📝 **Summary**
1. **JavaScript Types**: Basic types like `number`, `string`, `boolean`.
2. **TypeScript Enhancements**:
   - New types: `any`.
   - Type inference: Saves time and reduces redundancy in variable declarations.
3. **Best Practices**:
   - Use type annotations only when necessary.  
   - Leverage TypeScript’s **type inference** for clean and concise code.

**Regards,**  
**Muhammad Hashim and Ishaque**  