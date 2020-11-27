/* 
The program logs 'hi' and 'hello'. This is because objects are mutable, but
strings and primitives are not. Line 16 logs the original value of qux.
This is because on line 10, the reassignment occured within a block scope. The
variable argument2, which represents qux is a copy of qux, not the real qux. 
*/ 