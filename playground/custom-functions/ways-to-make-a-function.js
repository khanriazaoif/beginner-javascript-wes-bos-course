// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// console.log(doctorize());

// annonymous function
// function(firstName) {
//     return `Dr. ${firstName}`;
// }

// console.log(doctorize('Riaz')); RIAZ WILL NEVER WORK DUE TO HOISTING. Using a function expression we can not declare a function before it's being written.
// console.log(doctorize2('Ayaz'));

// // Function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// //Functions with the function keyword, like below, are hoisted.
// function doctorize2(firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// function inchToCM(inches) {
//     return inches * 2.54;
// }

// annonymous function
// const inchToCM = inches => inches * 2.54;
// //is same as
// const inchToCM2 = function(inches){
//     return inches * 2.54;
// };



// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

// const add = (a, b = 3) =>  a + b;


// function makeABaby(first, last){
// const baby = {
//     name: `${first} ${last}`,
//     age: 0
// }
// return baby;
// }

// console.log(makeABaby('New', 'Khan'));