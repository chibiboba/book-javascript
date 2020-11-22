let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]


function oddLengths(arr){
  let stringLengths = arr.reduce((accumualtor, element) => element.length, 0);
  let filtered = stringLengths.reduce((accumulator, element) => {
    return element % 2 !== 0;
    } , 0); 
  return filtered; 
}