// console.log("Hello")

let age : number =20;
// age = "hello";

if (age<50)
    age += 15;

//built-in datatypes
//any,unknown,never,enum,tuple

// let sales : number = 12345789;
// let course: string = "TypeScript";
// let is_published : boolean = true;

//we can write it as-->

let sales = 12345789;
let course = "TypeScript";
let is_published = true;

let level;

function render(document: any){
    console.log(document)
}

//array

// let numbers: number[] = [1,2,3];
let numbers = [1,2,3];
numbers.forEach(n=>  { console.log(n.toString())});

//tupples

let user : [number,string]=[1,"Shruti"]
user.push(1);

//enum
 const small = 1;
 const medium = 2;
 const large = 3;

 const enum Size {Small=1,Medium,Large}
 let mySize:Size = Size.Medium;
 console.log(mySize);
 let secondSize:Size = Size.Large;
 console.log(secondSize);

enum Color {
    Gray,          // 0
    Green = 100,   // 100
    Blue           // 101
}

let myColor: Color = Color.Green;
console.log(myColor); // 100
myColor = Color.Blue;
console.log(myColor); // 101

// Any type
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// Global variable (assume declared somewhere)
let myName: string = "Shruti";

// Function returning string
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// Void function
function sayHello(): void {
    console.log("Hello");
}

// Function with argument types
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

// Function type variable
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello; // 
myMultiply = multiply;
console.log(myMultiply(5, 2)); // 10

// Object type
let userData: { name: string; age: number } = {
    name: "Daksh",
    age: 19
};

// Complex type
let complex: {
    data: number[];
    output: (all: boolean) => number[];
} = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// Another object with same structure
let complex2: typeof complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// Union type
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
myRealRealAge = 27;
// myRealRealAge = true; //

// Type checking
let finalValue: any = "A String";
if (typeof finalValue === "string") {
    console.log("Final value is string");
}

// Never type
function neverReturns(): never {
    throw new Error("An error");
}

// Nullable types
let canBeNull: number | null = 12;
// canBeNull = null; // 

let canAlsoBeNull: number | null;
canAlsoBeNull = null; // 

// Interface defining the structure of a person
interface Person {
    firstName: string;
    hobbies?: string[]; // optional
    greet(lastName: string): void;
}

// Function to greet a person
function greet(person: Person): void {
    console.log("Hello " + person.firstName);
}

// Function to change person's name
function ChangeName(person: Person): void {
    person.firstName = "Dcoder";
}

// Object implementing Person interface
let Per: Person = {
    firstName: "Daksh",
    hobbies: ["sports", "coding"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

// Passing object to greet function
greet(Per);
ChangeName(Per);
greet(Per);
Per.greet("Lohar");

// Class implementing the Person interface
class Person12 implements Person {
    firstName: string = "";
    lastName: string = ""; // Extra property not required by interface

    greet(lastName: string): void {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

let myPerson = new Person12();
myPerson.firstName = "D CODER";
myPerson.greet("Pro");
myPerson.greet(myPerson.lastName);

// Interface for a function type
interface DoubleValueFunc {
    (val1: number, val2: number): number;
}

// Assigning function to variable that matches interface
let myDoubleFunction: DoubleValueFunc;

myDoubleFunction = function (value1: number, value2: number): number {
    return value1 + value2 + 2;
};

console.log(myDoubleFunction(2, 3.4)); 


// Simple generic function without type safety
function echo(data: any): any {
    return data;
}
console.log(echo("Daksh"));               // string
console.log(echo(45).length);           
console.log(echo({ age: 29, name: "Daksh" })); // object

// Better generic function with type safety
function betterEcho<T>(data: T): T {
    return data;
}
console.log(betterEcho("Daksh"));        
console.log(betterEcho<number>(45));    
console.log(betterEcho<{ age: number; name: string }>({ age: 29, name: "Daksh" }));

// Built-in generics - Arrays
let testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.33);   