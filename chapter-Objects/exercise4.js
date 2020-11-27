let obj = {
  b: 2,
  a: 1,
  c: 3,
};


let objKeys = Object.keys(obj);
let upperKeys = objKeys.map(key => {
  return key.toUpperCase() //REMEMBER: need return statement if function body has
  // more than 1 line! 
});
console.log(upperKeys); 


