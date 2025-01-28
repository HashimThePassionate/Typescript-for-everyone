type Quantity = 50 | 100;

let quantity: Quantity;
quantity = 50; // ✅ Valid
quantity = 100; // ✅ Valid
// quantity = 75; // ❌ Error: Type '75' is not assignable to type 'Quantity'.
