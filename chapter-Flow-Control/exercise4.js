/* 

It logs

Product2
Product3
Product not found!

This is because the case clauses of the switch statement lack break statements.
Without a break statement, the first matching case clause ie executed, 
and then control falls through all the subsequent case clauses 
and executes them, regardless if the case clauses don't match the value. 
*/ 