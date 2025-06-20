"use strict";
let age = 20;
if (age < 50)
    age += 15;
let sales = 12345789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach(n => { console.log(n.toString()); });
let user = [1, "Shruti"];
user.push(1);
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
let secondSize = 3;
console.log(secondSize);
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
myColor = Color.Blue;
console.log(myColor);
let car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
let myName = "Shruti";
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello() {
    console.log("Hello");
}
function multiply(val1, val2) {
    return val1 * val2;
}
let myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 2));
let userData = {
    name: "Daksh",
    age: 19
};
let complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
let complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
let myRealRealAge = 27;
myRealRealAge = "27";
myRealRealAge = 27;
let finalValue = "A String";
if (typeof finalValue === "string") {
    console.log("Final value is string");
}
function neverReturns() {
    throw new Error("An error");
}
let canBeNull = 12;
let canAlsoBeNull;
canAlsoBeNull = null;
function greet(person) {
    console.log("Hello " + person.firstName);
}
function ChangeName(person) {
    person.firstName = "Dcoder";
}
let Per = {
    firstName: "Daksh",
    hobbies: ["sports", "coding"],
    greet(lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greet(Per);
ChangeName(Per);
greet(Per);
Per.greet("Lohar");
class Person12 {
    constructor() {
        this.firstName = "";
        this.lastName = "";
    }
    greet(lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}
let myPerson = new Person12();
myPerson.firstName = "D CODER";
myPerson.greet("Pro");
myPerson.greet(myPerson.lastName);
let myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return value1 + value2 + 2;
};
console.log(myDoubleFunction(2, 3.4));
function echo(data) {
    return data;
}
console.log(echo("Daksh"));
console.log(echo(45).length);
console.log(echo({ age: 29, name: "Daksh" }));
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Daksh"));
console.log(betterEcho(45));
console.log(betterEcho({ age: 29, name: "Daksh" }));
let testResults = [1.94, 2.33];
testResults.push(-2.33);
//# sourceMappingURL=index.js.map