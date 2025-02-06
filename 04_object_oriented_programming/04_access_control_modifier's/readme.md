# **Access Modifiers in TypeScript** 🚀

## Introduction 🎯
In TypeScript, **access modifiers** help us control access to **properties** and **methods** in a class. This makes our code more **robust** and **secure** by preventing unintended modifications.

### TypeScript Access Modifiers 🔒
- **`public`** → Accessible from anywhere (default).
- **`private`** → Accessible only within the class.
- **`protected`** → Accessible within the class and its subclasses (to be covered later).

Let's explore `public` and `private` modifiers using an **enhanced `Account` class**. 🏦

---

## Enhancing the `Account` Class 🏛️
We will modify our previous implementation to introduce **private properties** and **a new transactions feature**.

```typescript
class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    private transactions: { amount: number; type: string; date: Date }[] = [];
    nickname?: string;

    constructor(id: number, owner: string, balance: number, nickname?: string) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
        this.nickname = nickname;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount. Amount must be greater than zero.");
        }
        this._balance += amount;
        this.transactions.push({ amount, type: "Deposit", date: new Date() });
        console.log(`Deposited ${amount}. New balance: ${this.getBalance()}`);
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

## Explanation 🧐
### **Private Properties 🔒**
- `private _balance;` → **Cannot be modified** directly outside the class.
- `private transactions;` → **Stores** all transactions, ensuring proper tracking.
- Prevents unauthorized modifications, making the code **more reliable**.

### **Using Private Methods 🛠️**
- `private calculateTax();` → This method **cannot be accessed** outside the class.
- Private methods are useful for **internal logic** that should not be exposed.

### **Public Methods 📢**
- `deposit()` and `withdraw()` **modify the balance** while maintaining transaction history.
- `getBalance()` provides a **safe way** to check the balance instead of direct access.

---

## Why Use Private Properties? 🤔
If `balance` were **public**, we could do:
```typescript
account._balance = 0;
```
This would **erase** all transaction history, leading to **data inconsistency**. By using `private`, we ensure that balance **only changes through controlled methods**.

---

## Conclusion ✅
- **Access modifiers** help control how properties and methods are used.
- Use **`private`** to protect sensitive logic and prevent unauthorized modifications.
- Use **`public`** for methods that should be accessible externally.
- Private methods are useful for **internal calculations** (e.g., tax calculation).

