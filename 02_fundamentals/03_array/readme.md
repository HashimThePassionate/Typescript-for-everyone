# 🚀 **Understanding Arrays in TypeScript**

In JavaScript, arrays are flexible and can hold elements of different types. While this flexibility is powerful, it can lead to unexpected bugs in large applications. TypeScript introduces **type annotations for arrays**, ensuring that arrays contain only elements of specific types, which improves code safety and maintainability.

---

## 📚 **Declaring Arrays in JavaScript**

In JavaScript, you can declare arrays like this:
```javascript
let arr = [1, 2, "hello"]; // Valid JavaScript
```

Here:
- The first two elements are numbers, and the third is a string.
- This is perfectly valid in JavaScript because it doesn’t enforce type restrictions.

However, this flexibility can cause issues. For example, if a function expects an array of numbers:
```javascript
function sum(numbers) {
    return numbers.reduce((a, b) => a + b);
}

sum([1, 2, "hello"]); // Runtime error: Cannot add a number and a string
```

---

## 🛠️ **Declaring Arrays in TypeScript**

TypeScript solves this problem by allowing you to enforce type safety for arrays. You can declare arrays to contain elements of specific types:

### **Single-Type Array**
```typescript
let numbers: number[] = [1, 2, 3]; // Array of numbers
```
- This ensures that only numbers can be added to the array.
- If you try to add a string:
  ```typescript
  numbers.push("hello"); // Error: Argument of type 'string' is not assignable to type 'number'
  ```

### **Benefits of Typed Arrays**
1. **Type Safety**: Prevents adding incorrect types to the array.
2. **Code Completion**: TypeScript offers code suggestions based on the array type.

---

## 🖍️ **Type Inference with Arrays**

If you initialize an array with elements, TypeScript can infer its type:
```typescript
let numbers = [1, 2, 3]; // TypeScript infers `number[]`
```

However, if the array is **empty**, TypeScript assigns it the type `any[]`:
```typescript
let values = []; // TypeScript infers `any[]`
values.push(1);  // Allowed
values.push("hello"); // Also allowed
```

To avoid this, explicitly define the type:
```typescript
let values: number[] = []; // Now only numbers can be added
values.push(1);  // Valid
values.push("hello"); // Error
```

---

## 🧰 **Array Methods**

TypeScript provides full support for all JavaScript array methods, along with type safety and code completion.

### Common Array Methods
1. **`push`**: Add an element to the end of the array.
   ```typescript
   numbers.push(4); // Adds 4 to the array
   ```
2. **`pop`**: Remove the last element.
   ```typescript
   numbers.pop(); // Removes the last element
   ```
3. **`map`**: Apply a function to each element.
   ```typescript
   let squared = numbers.map(num => num * num); // [1, 4, 9]
   ```
4. **`filter`**: Filter elements based on a condition.
   ```typescript
   let even = numbers.filter(num => num % 2 === 0); // [2]
   ```
5. **`reduce`**: Reduce the array to a single value.
   ```typescript
   let sum = numbers.reduce((a, b) => a + b, 0); // 6
   ```

### Benefits in TypeScript:
- **Error Detection**: Prevents you from applying incompatible operations.
- **Code Completion**: Provides suggestions for available methods and their signatures.

---

## 🔄 **Mixing Types in Arrays**

In some cases, you may need an array to hold elements of multiple types. TypeScript allows this using **union types**:
```typescript
let mixed: (number | string)[] = [1, "hello", 2];
```

Here:
- The array can contain both numbers and strings.
- If you try to add a boolean, TypeScript will throw an error:
  ```typescript
  mixed.push(true); // Error: Type 'boolean' is not assignable to type 'number | string'
  ```

---

## 📝 **Summary**

1. **Type Safety**: TypeScript ensures arrays contain only specific types of elements.
2. **Type Inference**: TypeScript can automatically detect the type of arrays.
3. **Empty Arrays**: Always explicitly annotate empty arrays to avoid `any[]`.
4. **Code Completion**: TypeScript enhances the development experience by providing method suggestions and signatures.

---

Next, we’ll explore **tuples**, a special kind of array that allows fixed types for specific positions. Stay tuned! 🚀

---

**Regards,**  
**Muhammad Hashim and Ishaque**  