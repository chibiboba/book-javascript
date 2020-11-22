let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 

function findIntegers(things){ 
  return things.filter(value => Number.isInteger(value)); 
} 

// arrow functions, when a single line, have implicit returns 

/* 

Another solution

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

*/ 