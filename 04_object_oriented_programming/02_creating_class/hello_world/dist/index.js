"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount. Amount must be greater than zero.");
        }
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. Remaining balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient funds");
        }
    }
}
const account = new Account(1, "Hashim", 1000);
console.log(account.balance); // Prints initial balance
account.deposit(100); // Deposits $100 into the account
console.log(account.balance); // Prints updated balance
// account.deposit(-100); // Deposits $100 into the account
