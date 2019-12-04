var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married')
    console.log(firstName + ' is married.');
else
    console.log(firstName + ' is not married.');

var isMarried = true;
if (isMarried)
    console.log(firstName + ' is married.');
else
    console.log(firstName + ' is not married.');

var johnMass = 92,
    markMass = 78;
var johnHeight = 1.95,
    markHeight = 1.69;
var bmiJohn, bmiMark;
bmiJohn = johnMass / (johnHeight * johnHeight);
bmiMark = markMass / (markHeight * markHeight);
if (bmiMark > bmiJohn)
    console.log('Mark\'s bmi is higher than John\'s.');
else if (bmiJohn > bmiMark)
    console.log('John\'s bmi is higher than Mark\'s.');
else
    console.log('Mark\'s bmi is equal to John\'s.');