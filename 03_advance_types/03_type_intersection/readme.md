# 🚀 **Intersection Types in TypeScript**

In this lesson, we’ll explore another powerful feature of TypeScript: **Intersection Types**. While **Union Types** allow variables or parameters to be one of many types, **Intersection Types** enable combining multiple types into a single type that includes all their properties. This makes your code more versatile, type-safe, and reusable.


## 🔍 **What Are Intersection Types?**

An **Intersection Type** represents an object that is a combination of multiple types. It is defined using the **`&` (ampersand)** operator. Unlike union types, which allow a variable to hold one of the specified types, intersection types **require the variable to implement all the properties and methods from the combined types**.


## 🛠 **Key Features of Intersection Types**

1. **Combines Properties and Methods**:  
   - Intersection types include all members of the combined types.
   
2. **Flexible and Reusable**:  
   - Define modular types and combine them to represent more complex objects.

3. **Stricter Type Enforcement**:  
   - The resulting type must satisfy all the requirements of the intersected types.


## 🧩 **When to Use Intersection Types**

Intersection types are useful when you need to define an object that satisfies multiple roles or behaviors simultaneously. For example:

- Combining properties of **two objects** into one type.
- Enforcing that an object implements **multiple interfaces**.


## ✍️ **Example: Intersection Types in Action**

Let’s explore a practical example to understand how intersection types work.

### Defining Separate Types

We start with two separate types:

1. **`Drawable`**: Represents an object that can be drawn on the screen.  
2. **`Resizable`**: Represents an object that can be resized.

```typescript
type Drawable = {
  draw: () => void; // ✏️ Method to draw an object
};

type Resizable = {
  resize: (width: number, height: number) => void; // 📏 Method to resize an object
};
```

### Combining Types with an Intersection

Now, we define a new type that combines both `Drawable` and `Resizable` using an intersection type:

```typescript
type DrawableResizable = Drawable & Resizable;
```

The `DrawableResizable` type now requires any object to implement both the `draw` and `resize` methods.


## 🚀 **Why Intersection Types Are Powerful**

### Key Characteristics:

1. **All-in-One Type**: The resulting type must satisfy all properties and methods from the intersected types.  
   - If a type is **both `Drawable` and `Resizable`**, it must implement both the `draw` and `resize` methods.  

2. **Impossible Combinations**:  
   - Intersection types cannot combine incompatible types like `number & string`, as no object can satisfy both.  

3. **Scalability**: Intersection types make it easy to define complex types in modular chunks, reducing redundancy.  


## ✨ **Practical Example**

Here’s a complete example:

```typescript
// Define the Drawable type
type Drawable = {
  draw: () => void; // ✏️ Method to draw an object
};

// Define the Resizable type
type Resizable = {
  resize: (width: number, height: number) => void; // 📏 Method to resize an object
};

// Combine Drawable and Resizable using Intersection Types
type DrawableResizable = Drawable & Resizable;

// Implement the combined type
const shape: DrawableResizable = {
  draw: () => {
    console.log("Drawing the object...");
  },
  resize: (width, height) => {
    console.log(`Resizing the object to width: ${width}, height: ${height}`);
  },
};

// Using the methods
shape.draw(); // Output: Drawing the object...
shape.resize(100, 200); // Output: Resizing the object to width: 100, height: 200
```


## 🎯 **Key Takeaways**

1. **Intersection Types** combine multiple types into one, requiring the resulting type to implement all properties and methods.  
2. Use **`&` (ampersand)** to define intersection types.  
3. Intersection types are useful for creating objects that perform multiple roles or behaviors.  
4. **Impossible Combinations** (e.g., `number & string`) cannot exist, ensuring type safety.  
5. Combining types makes your code modular, reusable, and scalable.  


## 💡 **Why Learn Intersection Types?**

- **Flexibility**: Helps define versatile types that adapt to complex requirements.  
- **Type Safety**: Guarantees the combined type meets all specified criteria.  
- **Clean Code**: Avoids duplication by combining smaller types into larger ones.  

