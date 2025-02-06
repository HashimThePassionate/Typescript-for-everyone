# **Parameter Properties in TypeScript** 🚀

## Introduction 🎯
TypeScript provides a **concise way** to define and initialize class properties directly in the constructor. Instead of manually assigning each parameter, we can use **parameter properties** to simplify our code.

### Benefits of Parameter Properties ⚡
- **Reduces boilerplate code**
- **Automatically assigns values** to properties
- **Enhances readability**

Let's explore how this feature works using the `Account` class. 🏦

---

## Traditional Constructor (Before Optimization) ❌
```typescript
class Account {
    readonly id: number;
    public owner: string;
    private _balance: number;
    private transactions: { amount: number; type: string; date: Date }[] = [];
    nickname?: string;

    constructor(id: number, owner: string, balance: number, nickname?: string) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
        this.nickname = nickname;
        this.transactions = [];
    }
    // ...
}
```

### Explanation 📖
- We manually assign each parameter **inside** the constructor.
- This pattern repeats every time we create a new class.

---

## Optimized Constructor Using Parameter Properties ✅
```typescript
class Account {
    private transactions: { amount: number; type: string; date: Date }[] = [];
    
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number,
        public nickname?: string
    ) {}
    // ...
}
```

### Explanation 🧐
- **Public and private modifiers** inside the constructor automatically create and initialize properties.
- We **eliminate repetitive assignments**, making the code more **concise**.
- The `readonly` modifier ensures that `id` **cannot be changed** after initialization.
- `_balance` remains **private**, ensuring encapsulation.
- `nickname` remains **optional**.
- `transactions` is a **private property** initialized as an empty array to **track all deposits and withdrawals**.

---

## Additional Improvements ✨
We can still add methods for **deposit, withdrawal, and balance retrieval**, ensuring better functionality.

```typescript
class Account {
    private transactions: { amount: number; type: string; date: Date }[] = [];
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number,
        public nickname?: string
    ) {}
    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount. Amount must be greater than zero.");
        }
        this._balance += amount;
        this.transactions.push({ amount, type: "Deposit", date: new Date() });
        console.log(`Deposited ${amount}. New balance: ${this.getBalance()}`);
        console.log(this.transactions);
        
    }

    withdraw(amount: number): void {
        if (amount > this._balance) {
            console.log("Insufficient funds");
            return;
        }
        this._balance -= amount;
        this.transactions.push({ amount, type: "Withdrawal", date: new Date() });
        console.log(`Withdrawn ${amount}. Remaining balance: ${this.getBalance()}`);
    }

    private calculateTax(): number {
        return this._balance * 0.1; // Example tax calculation
    }

    getBalance(): number {
        return this._balance;
    }
}
```

---

## Key Takeaways 🏆
✅ **Parameter properties** make code **more concise** and **readable**.  
✅ **Encapsulation** is maintained by keeping sensitive properties `private`.  
✅ **Readonly properties** ensure values are immutable after initialization.  
✅ **Private transactions array** keeps a **record of all transactions** securely.  
✅ **Methods remain the same** to manage account transactions.  

---

## Conclusion ✅
Using **parameter properties**, we reduce redundant code and improve readability while maintaining **strong type safety** in TypeScript. This technique is particularly useful when dealing with **multiple class properties**. 🚀🔥

In the next lesson, we will explore **access modifiers (`protected`) and their role in inheritance**. Stay tuned! 😊

