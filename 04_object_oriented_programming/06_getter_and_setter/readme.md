# **Getters and Setters in TypeScript**🚀

## Introduction 🎯

In TypeScript, **getters and setters** provide a more controlled way to **access and modify private properties**. Instead of using explicit methods like `getBalance()`, we can use **getter and setter properties** that allow for cleaner syntax and better encapsulation.

### Why Use Getters and Setters? 🤔

- **Encapsulation:** Prevent direct access to private properties.
- **Validation:** Ensure only valid values are assigned.
- **Improved Readability:** Access properties like regular variables.

Let's improve our `Account` class by implementing **getter and setter properties** for `_balance`. 🏦

---

## Improving `Account` Class with Getters and Setters 🏛️

Instead of using `getBalance()`, we define a **getter** for `_balance` so we can access it just like a property. We also add a **setter** to validate balance updates.

```typescript
class Account {
    private transactions: { amount: number; type: string; date: Date }[] = [];
    
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number,
        public nickname?: string
    ) {}

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value < 0) {
            throw new Error("Balance cannot be negative.");
        }
        this._balance = value;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount. Amount must be greater than zero.");
        }
        this._balance += amount; 
        this.transactions.push({ amount, type: "Deposit", date: new Date() });
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount > this._balance) {
            console.log("Insufficient funds");
            return;
        }
        this._balance -= amount; 
        this.transactions.push({ amount, type: "Withdrawal", date: new Date() });
        console.log(`Withdrawn ${amount}. Remaining balance: ${this.balance}`);
    }
}

const account = new Account(1, "John Doe", 1000);
console.log(account.balance); // ✅ Accessing balance like a property
account.deposit(500);
account.withdraw(200);
console.log(account.balance); // ✅ Still works without calling a method

// account.balance = -100; // ❌ Throws error: Balance cannot be negative
```

### Explanation 🧐

- `get balance()` → Defines a **getter** so `balance` can be accessed like a **property**.
- `set balance(value: number)` → Defines a **setter** that validates balance updates.
  - Throws an error if `value < 0`.
  - Allows modification of **balance** through `deposit()` and `withdraw()` only, maintaining controlled updates.
- `_balance` is still **private**, meaning it **cannot be modified directly**.
- `deposit()` and `withdraw()` now **use the setter** to ensure validation.

---

## Key Takeaways 🏆

✅ **Getters allow safe access** to private properties.\
✅ **Setters allow validation** before modifying properties.\
✅ **Improved readability** → Use properties like normal variables instead of methods.\
✅ **Encapsulation remains intact** while improving usability.\
✅ **Balance setter ensures that balance cannot be negative** and maintains transaction integrity.

---

## Conclusion ✅

Using **getters and setters**, we **enhanced** the `Account` class to be more **intuitive and robust** while maintaining **encapsulation**. This technique is especially useful for ensuring **data integrity** and providing a **cleaner interface** for interacting with class properties. 🚀🔥