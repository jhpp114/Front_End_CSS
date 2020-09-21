export {}
let message = `hello world`;
console.log(message);
// initializing data types
let isMale: boolean = true;
let total: number = 0;
let name: string = `Park`;
// name = true;
let sentence: string = `My name is ${name}
I am a beginner in typescript`;
console.log(sentence);

let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3,4];

enum Color {Red, Green, Blue};
let myColor: Color = Color.Red;
console.log(myColor);

function add(num1, num2) {
    return num1 + num2;
}

// param types and last :number is return type
function add1(num1:number, num2:number) :number {
    return num1 + num2;
}
// add question mark makes optional param
function add2(num1:number, num2?:number) :number {
    return num1 + num2;
}

add1(1, 2);
add2(1);

interface Person {
    firstname: string;
    lastname: string;
}

function printPerson(_person: Person) {
    console.log(`${_person.firstname} ${_person.lastname}`);
}

let student1 = {
    firstname: "jun"
,   lastname: "Park"
};
printPerson(student1);


// typescript class
class Employee {
    private employeeName: string;
    constructor(name: string) {
        this.employeeName = name;
    }
    greeting() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

const emp = new Employee("park");
emp.greeting();

class Manager extends Employee {
    private location: string
    constructor(managerName: string, location: string) {
        super(managerName);
        this.location = location;
    }

}
const managerEdmonds = new Manager("Park", "Edmonds");
managerEdmonds.greeting();