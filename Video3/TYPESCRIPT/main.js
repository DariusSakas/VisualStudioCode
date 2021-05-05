"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hiiiii!";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Random title";
var isBeginner = true;
var total = 0;
var name = "Kebab";
var sentence = 'my name is ${name}';
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Dariune", 22]; //fixed types and positions for values of those types
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = 3;
randomValue = "Dariune";
var myVariable = 10;
myVariable = "aga";
console.log(myVariable.name);
// myVariable(); variable called as method
myVariable.toUpperCase();
//Any changed to uknown:
var myVariable2 = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
myVariable2 = "Aha";
myVariable2.toUpperCase();
//not decalared type( no variable initialized)
var a;
a = 10;
a = true;
//b has type number initialyzed 
var b = 20;
// wont work b = true; , type already number, not boolean
//restriction to number and boolean (union types)
var multiType;
multiType = 20;
multiType = true;
//no restrictions
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    //(num1: number, num2: number): number num1 and num2 delacred as parameters, that have to be number, while "*): number" is return type of this function, "?" operator means undefined
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 3));
// add(5, "10"); string doesnt work, because NUMBER!!!!
console.log(add(5));
function fullName(person) {
    console.log('${person.firstName} ${person.lastName}');
}
var p = {
    firstName: "Valera"
};
fullName(p);
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
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating nonsense");
    };
    return Manager;
}(Employee));
var m1 = new Manager("randomManager");
m1.delegateWork;
m1.greet;
console.log(m1.employeeName);
var d;
