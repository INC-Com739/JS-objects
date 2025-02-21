'use strict';
// Exercise 1: Create an object representing a car with properties: make, model, year.
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
}
console.log(car);

// Exercise 2: Access and log the 'model' property from the car object.
let carModel = car.model;
console.log(carModel);

// Exercise 3: Add a new property 'color' to the car object and assign it a value.
let carColor = car.color = "blue";
console.log(car.color);
// Exercise 4: Update the 'year' property of the car object.
year = car.year = 2021;
console.log(car.year);
// Exercise 5: Create a method inside the car object that logs a sentence about the car.

let carInfo = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    carDescription: function () {
        return `This is a ${this.year} ${this.make} ${this.model}`;
    }
}
console.log(carInfo.carDescription());
// Exercise 6: Create an object representing a person with properties: name, age, and address (as a nested object).
let person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Chicago",
        state: "IL",
        zip: 60601,
    }
}
console.log(person);

// Exercise 7: Access the street from the address property inside the person object.

let personStreet = person.address.street;
console.log(personStreet);
// Exercise 8: Add a method to the person object that returns their full name and age.

let personInfo = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Chicago",
        state: "IL",
        zip: 60601,
    },
    personDescription: function () {
        return `${this.name} is ${this.age} years old`;
    }
}
console.log(personInfo.personDescription());
// Exercise 9: Create an array of three book objects, each with properties: title, author, and pages.

let books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328,
    }
]
console.log(books);
// Exercise 10: Log the title of the second book in the array.

let bookTitle = books[1].title;
console.log(bookTitle);