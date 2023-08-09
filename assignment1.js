//Assignment 1
let fruits = ["apple", "banana", "orange"]
//Remove the first fruit from the array
fruits.splice(0, 1)
//Add Grape to the end of the array
fruits.push("grape")
//Update the second fruit in the array to "pear"
fruits.splice(1, 1, "pear")

console.log(fruits);


//Assignmet 2
let person = {
    name: "John",
    age: 30,
    city: "New York",
}
//Remove the age property from the personv object
delete person.age;
//Add a new property called job with the value Engineer to the person object
person.job="Engineer";
//Update the city property of the person object to San Francisco
person.city="San Francisco"
console.log(person);

//Assignment 3
let car = [
    make="Toyota", 
    model="Camry", 
    year=2018
]

    
// Remove the first car object from the cars array
car.splice(0,1)
console.log(car)
//Add a new car object to the car array with the following properties

cars = [
    make = "Honda",
    model = "Civic",
    year = 2020
]
cars[2].model = "Accord"
console.log(cars)

