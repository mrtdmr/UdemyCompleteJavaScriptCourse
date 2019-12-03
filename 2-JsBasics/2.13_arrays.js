//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[0]);
console.log(names);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
//names[5] = 'Mary';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'Teacher', false];
john.push('Blue'); // En sona ekler.
john.unshift('Mr.'); // İlk başa ekler.
console.log(john);
john.pop(); // En sondan siler.
console.log(john);
john.shift(); // İlk baştan siler.
console.log(john);
console.log(john.indexOf(1990));
console.log(john);
john.slice(1, 2);
var isDesigner = john.indexOf('Designer') === -1 ? 'John is not a Designer.' : 'John is a Designer';
console.log(isDesigner);