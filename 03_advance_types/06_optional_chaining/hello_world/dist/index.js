"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
const customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
const customers = null;
// Safe access to the first element
console.log(customers === null || customers === void 0 ? void 0 : customers[0]); // Outputs: undefined (no runtime error)
let log = null;
// Optional call
// log?.("This is a message"); // Nothing happens if log is null
// Assign a function to log
log = (message) => console.log(message);
// Safe call again
log === null || log === void 0 ? void 0 : log("Hello, Optional Chaining!"); // Outputs: Hello, Optional Chaining!
