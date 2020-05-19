--// TYPES of design pattern in s/w design
// 1. Creational - ['factory pattern' ]
// 2. Structural
// 3. Behaviourial

function Developer(name, age) {
  this.name = name;
  this.age = age;
  this.type = 'Developer';
};

Developer.prototype.islessthanthirty = function () {
  return this.age < 30;
};

function Tester(name, age) {
  Developer.call(this, name, age);
  this.type = 'Tester';
}

Tester.prototype = Object.create(Developer.prototype);

function EmployeeFactory() {
  this.create = (name, age, type) => {
    switch (type) {
      case 1:
        return new Developer(name, age);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
  console.log(this.islessthanthirty());
}

const emplyeeFactory = new EmployeeFactory();
const employees = [];

employees.push(emplyeeFactory.create('Vaibhav', 29, 1));
employees.push(emplyeeFactory.create('Simran', 25, 2));

console.log(employees);

employees.forEach((employee) => say.call(employee));
