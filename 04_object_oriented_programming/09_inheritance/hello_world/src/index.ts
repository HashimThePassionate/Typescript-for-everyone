class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    walk(): void {
        console.log(`${this.fullName} is walking...`);
    }
}

class Student extends Person {
    constructor(firstName: string, lastName: string, public studentId: number) {
        super(firstName, lastName); // Calls the base class constructor
    }
}

class Teacher extends Person {
    constructor(firstName: string, lastName: string, public subject: string) {
        super(firstName, lastName);
    }
}

const student = new Student("John", "Doe", 101);
console.log(student.fullName); // ✅ Inherited method
student.walk(); // ✅ Inherited method
console.log(student.studentId); // ✅ Unique to Student class

const teacher = new Teacher("Jane", "Smith", "Mathematics");
console.log(teacher.fullName); // ✅ Inherited method
console.log(teacher.subject); // ✅ Unique to Teacher class