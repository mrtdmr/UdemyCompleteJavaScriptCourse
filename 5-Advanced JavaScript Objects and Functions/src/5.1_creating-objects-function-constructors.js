// Function constructor
var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = "Smith";
var john = new Person("john", 1990, "teacher"); //Instantiation. new operatoru yeni bir nesne oluşturur ve fonksiyonun yapıcı metoduna bu yeni nesneyi aktarır. Bu sayede this anahtar kelimesi global context i değil gönderilen nesneyi işaret eder.
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
