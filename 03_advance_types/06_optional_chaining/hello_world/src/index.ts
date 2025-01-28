type Customer = {
  birthday?: Date; // Optional property
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() } ;
}

const customer = getCustomer(1);

console.log(customer?.birthday);

const customers: Customer[] | null = null;

// Safe access to the first element
console.log(customers?.[0]); // Outputs: undefined (no runtime error)


let log: ((message: string) => void) | null = null;

// Optional call
// log?.("This is a message"); // Nothing happens if log is null

// Assign a function to log
log = (message) => console.log(message);

// Safe call again
log?.("Hello, Optional Chaining!"); // Outputs: Hello, Optional Chaining!

