//console.log(this);
calculateAge(1990);
function calculateAge(year) {
  console.log(2016 - year);
  console.log(this); //in regular method call this keyword is global object. Here is window.
}

var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);
    function innerFunction() {
      console.log(this);
    }
    innerFunction(); //Regular function call. this is window.
  }
};
john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};
mike.calculateAge = john.calculateAge; //Method borrowing.
mike.calculateAge(); //this variable is only assigned a value when the object calls the method. If this call wouldn't be like this then this variable would always be John object.
