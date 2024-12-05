// const person = {};

// person.age = 50;
// person.firstName = 'Damilola';
// person.lastName = 'Odeyemi';
// person.eyeColor = 'red';

// console.log(person)

const person ={

    firstName: "Damilola",
lastName: 'Odeyemi',
age: 23,
eyeColor: 'white',
fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(person.fullName)