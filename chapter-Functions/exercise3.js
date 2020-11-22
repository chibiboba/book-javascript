function getNumber (prompt) {
    let rlSync = require('readline-sync');
    let number = rlSync.question(prompt);
    return Number(number);
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}


let firstNumber = getNumber('Enter the first number:  ');
let secondNumber= getNumber('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`); 