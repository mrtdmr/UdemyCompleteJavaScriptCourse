//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//Multiple Operators
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge; //precedence order -,>=,=
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8*4-6=>32-6=>26=>assignment y to x
console.log(x, y);

//More Operators
x *= 2;
console.log(x);
x += 10;
x += 1;
x++;
x -= 1;
x--;