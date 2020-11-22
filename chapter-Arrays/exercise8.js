let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// find length of the strings, then filter for odd numbers

function oddLengths(arr){
  return arr.reduce((filteredArray, element) => { // accumulator is an array 
    let length = element.length; 
    if (length % 2 !== 0) { 
      filteredArray.push(length); //push elements into the array 
    }
    
    return filteredArray; //return statement for the accumulator 
  }, []); 
}
