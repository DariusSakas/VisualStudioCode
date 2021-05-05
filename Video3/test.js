"use strict";
exports.__esModule = true;
var name = "testname";
var sentence = 'random sentence has name ${name}';
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("HI!!");
    };
    return Employee;
}());
var emp1 = new Employee("random1");
console.log(emp1.employeeName);
emp1.greet;
var name2 = "name";
console.log(name2);
