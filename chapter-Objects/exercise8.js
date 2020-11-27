let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

function copyObj(sourceObject, keys){ //different names for parameters
  let destinationObject = {}; 
  
  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key]; 
      // iterate over the array of keys
      // return statement here would only return to the forEach loop
    });
    return destinationObject; //return object here
  } else {
    return Object.assign(destinationObject, sourceObject);
    //mutates destinationObject & sourceObject is unmuted
  }
}












 