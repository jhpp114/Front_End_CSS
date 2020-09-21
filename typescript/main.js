"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "hello world";
console.log(message);
// initializing data types
var isMale = true;
var total = 0;
var name = "Park";
// name = true;
var sentence = "My name is " + name + "\nI am a beginner in typescript";
console.log(sentence);
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var myColor = Color.Red;
console.log(myColor);
function add(num1, num2) {
    return num1 + num2;
}
// param types and last :number is return type
function add1(num1, num2) {
    return num1 + num2;
}
// add question mark makes optional param
function add2(num1, num2) {
    return num1 + num2;
}
add1(1, 2);
add2(1);
function printPerson(_person) {
    console.log(_person.firstname + " " + _person.lastname);
}
var student1 = {
    firstname: "jun",
    lastname: "Park"
};
printPerson(student1);
// typescript class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greeting = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp = new Employee("park");
emp.greeting();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, location) {
        var _this = _super.call(this, managerName) || this;
        _this.location = location;
        return _this;
    }
    return Manager;
}(Employee));
var managerEdmonds = new Manager("Park", "Edmonds");
managerEdmonds.greeting();
