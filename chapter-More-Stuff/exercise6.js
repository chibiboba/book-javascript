/* Write a function that searches an array of strings for every element that
 matches the regular expression given by its argument. 
The function should return all matching elements in an array. */

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(wordsArray, regex){
  let returnArray = [];
  wordsArray.forEach(function(word) {
    if (regex.test(word)) { //evaluates to truthy if there's a match
      returnArray.push(word);
    }
  });
  return returnArray;
}

/* Shorter solution

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

*/ 