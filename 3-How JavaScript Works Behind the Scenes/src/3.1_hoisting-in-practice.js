//Function Hoisting
calculateAge(1965); // Global context te bulunan metod tanımları tarandığı için, metod tanımından önce de çağrılabiliyor. Function declaration
function calculateAge(year) {
    console.log(2016 - year);
}
calculateAge(1990);

//retirement(1990); // Hoisting function declaration için geçerlidir. Function expressions larda hoisting çalışmaz. Burada metod tanımından önce çağrılamaz.
var retirement = function(year) {
    console.log(65 - (2016 - year));
};
retirement(1990);

//Variable Hoisting
console.log(age); //undefined. Variable taraması yapılır ve execute kısmından önce undefined olarak atanır.
var age = 23; //Global Execution context object.
console.log(age);

function foo() {
    console.log(age); //undefined
    var age = 65; //Execution context object of Foo function. They are different.
    console.log(age);
}
foo();
console.log(age);
