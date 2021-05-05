export{}
let message = "Hiiiii!";
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "Random title";

let isBeginner: boolean = true;
let total: number = 0;

let name: string = "Kebab";

let sentence: string = 'my name is ${name}';

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ["Dariune", 22]; //fixed types and positions for values of those types

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;

randomValue = 3;
randomValue = "Dariune";

let myVariable: any = 10;
myVariable = "aga"
console.log(myVariable.name);
// myVariable(); variable called as method
myVariable.toUpperCase();


//Any changed to uknown:
let myVariable2: unknown = 10;
function hasName (obj:any): obj is {name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

if (hasName(myVariable2)){
    console.log(myVariable2.name);
}
myVariable2 = "Aha";
(myVariable2 as string).toUpperCase();

//not decalared type( no variable initialized)
let a;
a = 10;
a = true;
//b has type number initialyzed 
let b = 20;
// wont work b = true; , type already number, not boolean

//restriction to number and boolean (union types)
let multiType: number | boolean;
multiType = 20;
multiType = true;
//no restrictions
let anyType: any;
anyType = 20;
anyType = true;


function add(num1: number, num2?: number): number {
    //(num1: number, num2: number): number num1 and num2 delacred as parameters, that have to be number, while "*): number" is return type of this function, "?" operator means undefined
    if(num2)
    return num1 + num2;
    else
    return num1;
}
console.log(add(5, 3));

// add(5, "10"); string doesnt work, because NUMBER!!!!
console.log(add(5));

interface Person{
    firstName: string;
    lastName?: string;
}

function fullName(person: Person){
    console.log('${person.firstName} ${person.lastName}');
}
let p = {
    firstName: "Valera",
    //lastName: "Bubin"
};

fullName(p);

class Employee{
    employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log("HI!!");        
    }
}

let emp1 = new Employee("random1");
console.log(emp1.employeeName);

emp1.greet;

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log("Manager delegating nonsense");
    }
}
let m1 = new Manager("randomManager")

m1.delegateWork;
m1.greet;
console.log(m1.employeeName);
let d;







