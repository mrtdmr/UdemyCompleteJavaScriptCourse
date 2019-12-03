// Ternary Operator
var firsName = 'John';
var age = 20;
age >= 18 ? console.log(firsName + ' drinks beer.') : console.log(firsName + ' drinks juice.');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firsName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firsName + ' drivers an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firsName + ' designs beautiful websites.');
        break;
    default:
        console.log(firsName + ' does something else.');
}