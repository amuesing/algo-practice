//** ES2015 Class Syntax **//

// What is a Class?

// A blueprint for creating objects
// with pre-defined properties and methods.

// Why do we need to know this?

// We're going to implement data structures as classes!

//** The Syntax **//

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// The method to create new objects must be called constructor.

// The class keyword creates a constant, so you can not redefine it.
// Watch out for the syntax as well!

//** Creating objects from classes **//

// We use the "new" keyword

let firstStudent = new Student("Aaron", "Muesing")