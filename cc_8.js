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

//Task 4 Parameters and Arguments

function calculateRentalCost(days, carType, insurance = false){
    let carTypeCost={"Economy":40,"Standard":60,"Luxury":100};//add cost for car type
    let insuranceCost={true:20*days,false:0};//add insurance cost
    let totalRentalCost=(days*carTypeCost[carType]+insuranceCost[insurance]);//calculate total cost
    console.log(`Total Rental Cost:$${totalRentalCost}`);//log total cost
};//create function for rental cost
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

//Task 5 Returning Values

function calculateLoanPayment(principal, rate, time){
    let loanpayment=principal + (principal * rate * time);//calculate loanpayment
    console.log(`Total Payment:$${(loanpayment).toFixed(2)}`);//log total payment
};//function for loan payment
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"

//Task 6 Higher Order Functions

function filterLargeTransactions(transactions, filterFunction){
    let largeTransactions=transactions.map(filterFunction);
    console.log(largeTransactions)
}

let transactions = [200, 1500, 3200, 800, 2500];
filterLargeTransactions(transactions, amount => amount > 1000 ? amount: filterLargeTransactions);
// Expected output: [1500, 3200, 2500]

///!!!!!!!!!!!!figure out how to get rid of true/false

//Task 7 Closures

function createCartTracker(){
    let totalCart=0;
    return function(cart){
        totalCart+=cart;//calculate running total
        return `Total Cart Value:$${totalCart}`;//log cart value
    };
};//create function to keep running balance of cart

let cart = createCartTracker();
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

//