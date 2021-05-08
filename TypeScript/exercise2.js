"use strict";
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
exports.__esModule = true;
exports.Audi = void 0;
function saySomethin(arg1, arg2) {
    console.log("Suppp, pirmas arg " + arg1 + ", o antras " + arg2);
}
saySomethin("arg1", "arg2");
saySomethin("arg1");
var anonymousFunction = function (arg1) {
    console.log("Anoninmine funkcija");
};
anonymousFunction("no arg");
var arrowFunction = function () { return console.log("be pametru logika"); };
arrowFunction();
var arrowFunctionWithArgumments = function (arg1, arg2, arg3) {
    console.log("Function with arguments");
    var sum = arg1 + arg2 + arg3;
    console.log("" + sum);
};
arrowFunctionWithArgumments(1, 1, 3);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
function processPerson(person) {
    console.log("Persone name is: " + person.name);
    console.log("Person last name is: " + person.lastName);
    console.log("Person age is: " + person.age);
}
var firstPerson = new Person();
firstPerson.name = "Jimmy";
firstPerson.lastName = "Dummmy";
firstPerson.age = 25;
processPerson(firstPerson);
var Audi = /** @class */ (function () {
    function Audi(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    Audi.prototype.calculateSpeed = function (speed) {
        return speed * 5;
    };
    return Audi;
}());
exports.Audi = Audi;
var audiQ5 = new Audi();
audiQ5.brand = "Q5";
audiQ5.price = 1222;
var speed = audiQ5.calculateSpeed(10);
console.log(audiQ5);
console.log("speed - " + speed);
var audiQ7 = new Audi("Q7", 699);
console.log(audiQ7);
var CarService_1 = require("./CarService");
var carService = new CarService_1.CarService();
carService.printDetails(audiQ5);
