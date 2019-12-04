var johnMass = 92,
    markMass = 78;
var johnHeight = 1.95,
    markHeight = 1.69;
var bmiJohn, bmiMark;
bmiJohn = johnMass / (johnHeight * johnHeight);
bmiMark = markMass / (markHeight * markHeight);
console.log(bmiMark, bmiJohn);
var markHigherBmi = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher John\'s : ' + markHigherBmi);