console.log("Hi");
let name1 = "Darius";
console.log(name1);


let firstName = "firstname";
let lastName = "nolastname";

let interestRate = 0.3;

interestRate = 1;

console.log(interestRate);

const anotherInterestRate = 2;

console.log(anotherInterestRate);

let age = 30;

let isApproved = true;

let undifinedVar = undefined;

let variableNull = null;

let person = {
    firstName: "Darius",
    age: 28
};
console.log(person);

person.firstName = "Kebab";

console.log(person);
let selection = "age";
person[selection] = 30;

console.log(person);

let selectedColors = ["red", "blue"];
selectedColors[2] = "1";
console.log(selectedColors.length);

function greet(firstName, lastName){
    console.log("Hiiiiii " + firstName +" " + lastName);
}

greet("Visciokas");
function square(number){
    return number * number;
}

console.log(square(2));