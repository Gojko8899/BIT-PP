class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return this.name + " " + this.surname + ":" + this.salary;
    }
    getSalary() {
        return this.salary;
    }
    increaseSalary() {
        let part = this.salary / 10;
        return this.salary + part;
    }
}
class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        return this.specialization;
    }
}
class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
    changeDepartment() {
        return (this.department = "Analytics");

    }
}



const newEmployee = new Employee("vilic", "vilic", "IT strucnjak veliki", 25000);
const newDeveloper = new Developer(
    "Gojko",
    "Vilic",
    "IT Strucnjak",
    "mala",
    "python expert"
);
const newManager = new Manager(
    "Stefan",
    "Bulatovic",
    "Manager",
    "infinity",
    "NASA"
);
console.log(newEmployee.increaseSalary());