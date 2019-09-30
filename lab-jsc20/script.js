// function Person(name, surname) {
//   this.name = name || 'guest';
//   this.surname = surname || 'sur-guest';
// }
//
// Person.prototype.showName = function() {
//   console.log(`Your name is ${this.name}, ${this.surname}`);
// }
//
// function PersonId(id, name) {
//   Person.call(this);
//   this.id = id;
//   this.name = name || this.name;
// }
//
// PersonId.prototype = Object.create(Person.prototype);
// PersonId.prototype.constructor = PersonId;
//
// PersonId.prototype.showUser = function() {
//   document.querySelector('.block').innerHTML = `${this.name}, ${this.surname}, your ID - ${this.id}`;
// }
//
// let obj = new PersonId(777, 'Vova');
//
// obj.showUser();
// obj.showName();

class Person {
  constructor(name, surname) {
    this.name = name || 'guest';
    this.surname = surname || 'sur-name';
  }

  showName() {
    console.log(`Your name is ${this.name}, ${this.surname}`);
  }
}

class PersonId extends Person{
  constructor(id) {
    super();
    this.id = id;
  }

  showUser() {
    document.querySelector('.block').innerHTML = `${this.name}, ${this.surname}, your ID - ${this.id}`;
  }
}

let obj = new PersonId(233, 'Jack', 'Deniels');

obj.showName();
obj.showUser();
