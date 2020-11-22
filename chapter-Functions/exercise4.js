function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let one = times(1,1);
let two = times(2, one);
let three = times(3, two);
let four = times(4, three);
let five = times(5, four);