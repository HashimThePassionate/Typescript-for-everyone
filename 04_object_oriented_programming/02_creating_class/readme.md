# **Creating class in TypeScript** 🚀

## Introduction 🎯
Object-Oriented Programming (OOP) is all about **objects**. To create an **object**, we first need to create a **class**. A class acts as a **blueprint** for creating objects; think of it as an **object factory**. Let's explore how to implement a **Bank Account** with properties and methods in TypeScript.

---

## Creating a Class 🏛️
A **class** in TypeScript is defined using the `class` keyword. For example, let's represent a **Bank Account** with the following:

```typescript
class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount. Amount must be greater than zero.");
        }
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. Remaining balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
}
```

### Explanation 📖
1. **Defining Properties** 🏦
   - `id: number;` → Stores the **account ID**.
   - `owner: string;` → Stores the **owner's name**.
   - `balance: number;` → Stores the **account balance**.
   
2. **Constructor Method** 🏗️
   - The **constructor** initializes the properties when an object is created.
   - `this.id = id;` assigns the unique **account ID**.
   - `this.owner = owner;` assigns the passed **owner name**.
   - `this.balance = balance;` assigns the initial **balance**.

3. **Methods (Functions inside the class)** ⚙️
   - `deposit(amount: number)` → Adds money to the account, **throws an error if amount ≤ 0**.
   - `withdraw(amount: number)` → Deducts money if funds are available.

Now that we have created the `Account` class, the next step is to create an **object** from it. Objects are **instances** of a class, and we use the `new` keyword to instantiate them. Let's explore how to create and use objects in TypeScript.

---

## Creating an Object 📦

To create an object from a class, we declare a variable and assign it a **new instance** of the class using the `new` operator:

```typescript
const account = new Account(1,"Hashim", 1000);
```

### Explanation 📖

- `const account` → Declares a variable named `account`.
- `new Account(1,"Hashim", 1000);` → Creates a **new instance** of the `Account` class.
- The parameters (`1,"Hashim", 1000`) initialize the  **id,owner name** and **balance**.
- This instance has **all properties and methods** of the `Account` class.

---

## Accessing Properties and Methods 🏦

Once the object is created, we can access its **properties and methods**:

```typescript
console.log(account.balance); // Prints initial balance

account.deposit(100); // Deposits $100 into the account
console.log(account.balance); // Prints updated balance
```

### Explanation 🧐

- `account.balance;` → Retrieves and logs the **current balance**.
- `account.deposit(100);` → Calls the **deposit method** to add money.
- `console.log(account.balance);` → Displays the **new balance**.
- If a **negative amount** is passed to `deposit()`, an **error** will be thrown.

---

## TypeScript Compilation & Execution 🖥️

To compile and run the TypeScript code:

- Use the command: `tsc index.ts` to **compile**.
- Run the compiled JavaScript using `node dist/index.js`.
- or shortcut `tsc && node dist/index.js`.

---

## Using `typeof` Operator 🛠️

The `typeof` operator helps determine the **type** of a variable. We can use it for **type narrowing**:

```typescript
if (typeof account === "object") {
    console.log("account is an object");
}
```

### Explanation 🔍

- `typeof account === "object";` → Checks if `account` is an **object**.
- Useful when handling **union types**.

---

## Using `instanceof` Operator 🔄

To check if an object is an **instance** of a class, use `instanceof`:

```typescript
if (account instanceof Account) {
    console.log("This is a Bank Account instance.");
}
```

### Explanation ✅

- `instanceof` checks if an **object belongs** to a specific class.
- Returns a **Boolean value** (`true` or `false`).
-

