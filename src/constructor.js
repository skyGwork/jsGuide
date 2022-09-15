// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

let person = new Person('John', 'Doe');
let anotherPerson = new Person('Max', 'well');

console.log(person.firstName);
console.log(anotherPerson.getFullName());
