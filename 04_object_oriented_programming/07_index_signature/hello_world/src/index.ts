class SeatAssignment {
    [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats["A1"] = "John";
seats["A2"] = "Emma";
seats["B5"] = "Michael";

console.log(seats["A1"]); // Output: John
console.log(seats["B5"]); // Output: Michael