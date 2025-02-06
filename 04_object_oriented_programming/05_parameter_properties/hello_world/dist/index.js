"use strict";
class Account {
    constructor(id, owner, _balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
        this.transactions = [];
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount. Amount must be greater than zero.");
        }
        this._balance += amount;
        this.transactions.push({ amount, type: "Deposit", date: new Date() });
        console.log(`Deposited ${amount}. New balance: ${this.getBalance()}`);
        console.log(this.transactions);
    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log("Insufficient funds");
            return;
        }
        this._balance -= amount;
        this.transactions.push({ amount, type: "Withdrawal", date: new Date() });
        console.log(`Withdrawn ${amount}. Remaining balance: ${this.getBalance()}`);
    }
    calculateTax() {
        return this._balance * 0.1; // Example tax calculation
    }
    getBalance() {
        return this._balance;
    }
}
const account = new Account(1, "John Doe", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
// account._balance = 1000; // Error: Property '_balance' is private and only accessible within class 'Account'.
