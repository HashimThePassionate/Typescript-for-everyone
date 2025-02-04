class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname? : string;

  constructor(id: number, owner: string, balance: number, nickname?: string) {
      this.id = id;
      this.owner = owner;
      this.balance = balance;
      this.nickname = nickname;
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

// const account = new Account(1,"Hashim", 1000);
// account.id = 20;
const account1 = new Account(1, "Hashim", 1000, "Savings");
console.log(account1.nickname); // Prints: Savings

const account2 = new Account(2, "Ali", 500);
console.log(account2.nickname); // Prints: undefined (since it's optional)