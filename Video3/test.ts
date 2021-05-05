export {}
let name: string = "testname";
let sentence: string = 'random sentence has name ${name}';

class Employee{
    employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log("HI!! ${name}");        
    }
}

let emp1 = new Employee("random1");
console.log(emp1.employeeName);

emp1.greet;

let name2 = "name";

console.log(name2);


