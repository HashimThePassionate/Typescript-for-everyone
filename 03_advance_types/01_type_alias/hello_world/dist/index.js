"use strict";
const employee1 = {
    id: 1,
    name: "Muhammad Hashim",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee1);
console.log(employee1.retire(new Date()));
const Employee2 = {
    id: 2,
    name: "John Doe",
    retire: (date) => {
        console.log(date);
    },
};
console.log(Employee2);
