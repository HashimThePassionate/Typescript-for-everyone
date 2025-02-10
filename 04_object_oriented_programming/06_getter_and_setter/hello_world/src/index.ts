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
// console.log(account.balance); // ✅ Still works without calling a method