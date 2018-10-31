function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Employee(name, surname, job, salary) {
  this.job = job;
  this.salary = salary;
  Person.call(this, name, surname);
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

function Developer(name, surname, job, salary, specialization) {
  this.specialization = specialization;
  Employee.call(this, name, surname, job, salary);
}
Developer.prototype.getSpecialization = function() {
  return this.specialization;
};
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function Manager(name, surname, job, salary, department) {
  this.department = department;
  Employee.call(this, name, surname, job, salary);
}

Manager.prototype.getDepartment = function() {
  return this.department;
};
Manager.prototype.changeDepartment = function() {
  return (this.department = "Analytics");
};

var newEmployee = new Employee("vilic", "vilic", "IT strucnjak veliki", "mala");

var newDeveloper = new Developer(
  "Gojko",
  "Vilic",
  "IT Strucnjak",
  "mala",
  "python expert"
);
var newManager = new Manager(
  "Stefan",
  "Bulatovic",
  "Manager",
  "infinity",
  "NASA"
);
console.log(newManager);
