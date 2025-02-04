# **Readonly and Optional Properties** 🚀

## Introduction 🎯
In TypeScript, we can apply **modifiers** to class properties to make our code more **robust and secure**. Two important modifiers are:

- `readonly`: Ensures that a property **cannot be changed** after initialization.
- `?` (optional property): Allows properties to be **optional**, meaning they may or may not be present in an object.

Let's explore how these modifiers work in a `BankAccount` class. 🏦

---

## Readonly Property 🔒
A **readonly** property can only be assigned a value when it is declared or inside the constructor. Once assigned, it **cannot be modified** anywhere else in the class.

### Example:
```typescript
class Account {
    readonly id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
}

const account = new Account(1, "Hashim", 1000);
console.log(account.id); // Prints: 1

// account.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property
```

### Explanation 🧐
- `readonly id: number;` → Once assigned, the **id** cannot be changed.
- This ensures the **account ID remains fixed** throughout the program.

---

## Optional Property ❓
An **optional property** is not required when creating an object. We define it using the `?` symbol.

### Example:
```typescript
class Account {
    readonly id: number;
    owner: string;
    balance: number;
    nickname?: string; // Optional property

    constructor(id: number, owner: string, balance: number, nickname?: string) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
    }
}

const account1 = new Account(1, "Hashim", 1000, "Savings");
console.log(account1.nickname); // Prints: Savings

const account2 = new Account(2, "Ali", 500);
console.log(account2.nickname); // Prints: undefined (since it's optional)
```

### Explanation 📌
- `nickname?: string;` → The `nickname` property is **optional**.
- `account1` has a **nickname**, but `account2` does not.
- This allows **flexibility** in object creation.

---

## Conclusion ✅
- **Readonly properties** prevent unwanted changes and enhance **data integrity**.
- **Optional properties** allow for **flexible object structures**.
- Combining both improves **code maintainability** and **robustness**.
