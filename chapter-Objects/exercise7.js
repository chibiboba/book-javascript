let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3; 
console.log(myObj);

/* 

Both snippets of code iterate over the keys of myObj. However, for..in 
iterates over all of the object's keys, including those in the prototype object, 
myProtoObj. 

Snippet 2 logs: 
quix
foo
bar

Snippet 1 logs only myObj's own properties: 
qux */
