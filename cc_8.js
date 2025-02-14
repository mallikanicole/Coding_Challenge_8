//Task 1 Function Declaration
function calculateSalary(baseSalary, bonus, taxRate){
    return netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
};//declare net salary function
console.log(`Net Salary:$${calculateSalary(5000, 500, 0.1).toFixed(2)}`); // Expected output: "Net Salary: $5000.00"
console.log(`Net Salary:$${calculateSalary(7000, 1000, 0.15).toFixed(2)}`); // Expected output: "Net Salary: $6950.00"

//Task 2 Function Expression

function calculateDiscount(price, discountRate){
    return price-(price*discountRate)
};//use price and discount rate to find total price
console.log(`Final Price:$${calculateDiscount(100, 0.2).toFixed(2)}`); // Expected output: "Final Price: $80.00"
console.log(`Final Price:$${calculateDiscount(250, 0.15).toFixed(2)}`); // Expected output: "Final Price: $212.50"

//Task 3 Arrow Function

function calculateServiceFee(amount, serviceType){
    let serviceFee=0;
    if (serviceType==="Premium") serviceFee=amount*.15;//add fee for premium
    else if(serviceType==="Standard") serviceFee=amount*.10;//add fee for standard
    else serviceFee=amount*.05;//add fee for basic
    console.log(`Service Fee:$${serviceFee.toFixed(2)}`);//log fee
}//create fnction for service fee

calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"