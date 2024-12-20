function calculateTax(income: number, taxYear: number = 2024): number {
    if (taxYear < 2022) {
        return income * 0.1; // 10% tax for older years
    }
    return income * 0.2; // Default 20% tax
}


console.log(calculateTax(10000)); // 2000