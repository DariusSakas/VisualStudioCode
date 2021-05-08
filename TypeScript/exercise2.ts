/**
 * Strong Typing
 * Object Oriented Features
 * Compile time error handling
 * Interfaces, classes, inheritance, access modifiers, constructors
 *
 * Arrow funtctions (Lamdas JAVA eq)
 * Modules export/import
 *
 *
 */

//Declare function with 2 parameters:
export { Audi };
function saySomethin(arg1: string, arg2?: string) {
  console.log(`Suppp, pirmas arg ${arg1}, o antras ${arg2}`);
}
saySomethin("arg1", "arg2");
saySomethin("arg1");

let anonymousFunction = function (arg1) {
  console.log("Anoninmine funkcija");
};

anonymousFunction("no arg");

let arrowFunction = () => console.log("be pametru logika");

arrowFunction();

let arrowFunctionWithArgumments = (arg1, arg2, arg3) => {
  console.log("Function with arguments");
  let sum = arg1 + arg2 + arg3;
  console.log(`${sum}`);
};

arrowFunctionWithArgumments(1, 1, 3);

class Person {
  name: string;
  lastName: string;
  age: number;
  tall: boolean;
}

function processPerson(person: Person) {
  console.log(`Persone name is: ${person.name}`);
  console.log(`Person last name is: ${person.lastName}`);
  console.log(`Person age is: ${person.age}`);
}
let firstPerson = new Person();
firstPerson.name = "Jimmy";
firstPerson.lastName = "Dummmy";
firstPerson.age = 25;

processPerson(firstPerson);

interface Car {
  brand: string;
  price: number;
  calculateSpeed: (speed: number) => number;
}
class Audi implements Car {
  brand: string;
  price: number;

  constructor(brand?: string, price?: number) {
    this.brand = brand;
    this.price = price;
  }

  calculateSpeed(speed: number) {
    return speed * 5;
  }
}
let audiQ5 = new Audi();
audiQ5.brand = "Q5";
audiQ5.price = 1222;
let speed = audiQ5.calculateSpeed(10);
console.log(audiQ5);
console.log(`speed - ${speed}`);

let audiQ7 = new Audi("Q7", 699);
console.log(audiQ7);

import { CarService } from "./CarService";
let carService = new CarService();
carService.printDetails(audiQ5);
