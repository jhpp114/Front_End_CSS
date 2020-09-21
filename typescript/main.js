"use strict";
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
