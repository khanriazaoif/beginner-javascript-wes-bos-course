//Function Definition
const bill = 100;
const taxRate = 8.25;

function calculateBill() {
    // Function body
    // console.log(`Running Calculate Bill!!`)
    const total = bill * 1 + taxRate;
    return total;
}

// Function call. or **run**
const myTotal = calculateBill();
const myTotal2 = calculateBill();

console.log(`Your total is $${calculateBill()}`);
console.log(myTotal, myTotal2);
