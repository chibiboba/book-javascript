function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
let tries = 0;
let result; 

do { 
    result = randomNumberBetween(1, 6);
    tries += 1;
} while (result <= 2); //ideal case for do while occurs when you need to execute
// some code at least once


console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
// String() converts value of object to string. 