type Employee = {
  readonly id: number;       // 🆔 Unique, immutable identifier
  name: string;              // 👤 Employee's name
  retire: (date: Date) => void; // 📅 Retirement method
};

const employee1: Employee = {
  id: 1,
  name: "Muhammad Hashim",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee1);
console.log(employee1.retire(new Date()));



const Employee2: Employee = {
  id: 2,
  name: "John Doe",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(Employee2);