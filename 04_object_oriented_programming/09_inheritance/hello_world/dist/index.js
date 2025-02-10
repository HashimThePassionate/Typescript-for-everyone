"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log(`${this.fullName} is walking...`);
    }
}
class Student extends Person {
    constructor(firstName, lastName, studentId) {
        super(firstName, lastName); // Calls the base class constructor
        this.studentId = studentId;
    }
}
class Teacher extends Person {
    constructor(firstName, lastName, subject) {
        super(firstName, lastName);
        this.subject = subject;
    }
}
const student = new Student("John", "Doe", 101);
console.log(student.fullName); // ✅ Inherited method
student.walk(); // ✅ Inherited method
console.log(student.studentId); // ✅ Unique to Student class
const teacher = new Teacher("Jane", "Smith", "Mathematics");
console.log(teacher.fullName); // ✅ Inherited method
console.log(teacher.subject); // ✅ Unique to Teacher class
