# **Index Signatures in TypeScript** 🚀

## Introduction 🎯
In JavaScript, we can **dynamically add properties** to an object. However, **TypeScript is strict** about object structures, meaning we cannot add properties dynamically **unless explicitly allowed**. This is where **index signatures** come in! 🏷️

### Why Use Index Signatures? 🤔
- **Allows dynamic property names** in an object.
- **Ensures type safety** while handling flexible structures.
- **Useful for mapping values dynamically** (e.g., seat assignments, configurations, dictionaries, etc.).

Let's explore index signatures using a **seat assignment system** as an example. 🎟️

---

## Creating a Class with Index Signatures 🏛️
We want to track **who is sitting on which seat**. Since the **seat numbers may vary**, defining each seat **statically** is impractical. Instead, we use **index signatures** to define flexible properties.

```typescript
class SeatAssignment {
    [seatNumber: string]: string;
}
```

### Explanation 🧐
- `[seatNumber: string]: string;` → Defines an **index signature**.
- **Key (`seatNumber`)** → Must be a `string`.
- **Value (`string`)** → Stores the **name of the person sitting there**.
- This allows us to dynamically assign seats without defining them explicitly.

---

## Using Index Signatures 🏷️
Now, let's create an instance and **assign seats dynamically**.

```typescript
const seats = new SeatAssignment();
seats["A1"] = "John";
seats["A2"] = "Emma";
seats["B5"] = "Michael";

console.log(seats["A1"]); // Output: John
console.log(seats["B5"]); // Output: Michael
```

### Explanation 📌
- We dynamically assign **seat numbers** as property names.
- The **values** are the **names of assigned people**.
- The object now behaves like a **map/dictionary**.

---

## Alternative Property Access 🏗️
In JavaScript/TypeScript, properties can be accessed using **dot notation (`.`)** or **bracket notation (`[]`)**.

```typescript
console.log(seats.A1);  // ✅ Works fine
console.log(seats["A1"]);  // ✅ Works fine
```

However, with **index signatures**, it's safer to use **bracket notation** (`[]`).

---

## Type Restrictions 🛑
Since our **index signature** only allows `string` values, trying to assign a number **throws an error**.

```typescript
seats["A3"] = 42;  // ❌ Error: Type 'number' is not assignable to type 'string'.
```

---

## Key Takeaways 🏆
✅ **Index signatures allow dynamic property names.**  
✅ **Enforces type safety by restricting value types.**  
✅ **Useful for scenarios like seat assignments, user roles, dictionaries, and configurations.**  
✅ **Bracket notation (`[]`) is preferred for accessing dynamic properties.**  

---

## Conclusion ✅
Index signatures provide **flexibility** while maintaining **TypeScript's strict type safety**. They are **especially useful** in cases where object properties are not known in advance. 🚀🔥
