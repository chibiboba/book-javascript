let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

let counter = 0; 
while (counter < myArray.length) { 
  if (myArray[counter] % 2 === 0) { 
    console.log(myArray[counter]); 
  }
  counter++; 
} 