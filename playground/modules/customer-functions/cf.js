//Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // Function body
    console.log(`Running Calculate Bill!!`);
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}

// Function call. or **run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function Definition
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose'){
    return `HEY ${name.toUpperCase()}`;
}

const myBill4 = console.log(calculateBill(100, undefined, 0.2))