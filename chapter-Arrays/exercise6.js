let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/* without arrow functions 

function oddLengths(arr){
  let stringLengths = arr.map(function(value) {
    return value.length; 
  });
  
  let filtered = stringLengths.filter(function(value){ 
    return (value % 2 !== 0);
  });
  
  return filtered; 
} */ 

function oddLengths(arr){
  let stringLengths = arr.map(value => value.length);
  let filtered = stringLengths.filter(value => value % 2 !== 0);
  return filtered; 
}