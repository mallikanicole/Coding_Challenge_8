//Task 1 Function Declaration
function calculateSalary(baseSalary, bonus, taxRate){
    return netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
};//declare net salary function
console.log(`Net Salary:$${calculateSalary(5000, 500, 0.1).toFixed(2)}`); // Expected output: "Net Salary: $5000.00"
console.log(`Net Salary:$${calculateSalary(7000, 1000, 0.15).toFixed(2)}`); // Expected output: "Net Salary: $6950.00"