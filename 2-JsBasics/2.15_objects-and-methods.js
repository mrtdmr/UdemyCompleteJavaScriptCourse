// var john = {
//     firstName: 'John', // Property
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(birthYear) {
//         return 2018 - birthYear;
//     }
// };

var john = {
    firstName: 'John', // Property
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        //return 2018 - this.birthYear; // this means current object
        this.age = 2018 - this.birthYear;
    }
};
//john.age = john.calcAge();
john.calcAge();
console.log(john);
