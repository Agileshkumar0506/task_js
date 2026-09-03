// Task 1 — Variables

// var name = 'Agilesh';
// let age = 22;
// const city = 'villupuram';
// var college = 'mailam Engineering college';

// console.log(name,age,city,college);
// name = 'kabilan';
// age = 24;
// city = 'pondycherry';
// var name = 'sridhar';
// let age = 33;
// const city = 'villupuram';

// Task 2 — Printing Statements

// console.log("Hello World");
// alert("pls wait 3 minutes");
// confirm("are you sure u want to delete this file ?");
// prompt("Whats Ur Name");
// document.writeln("Hello World");

// Task 3 — User Details

// var name = prompt("Enter Ur Name");
// var age = prompt("Enter Ur Age");
// var city = prompt("Enter Ur City");
// var qualification = prompt("Enter Ur Qualifications");

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`City: ${city}`);
// console.log(`Qualification: ${qualification}`);

// Task 4 — Find Data Types

// let a = "JavaScript";
// let b = 100;
// let c = 99.5;
// let d = true;
// let e = false;
// let f = undefined;
// let g = null;

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));
// console.log(typeof(g));

// Task 5 — Student Array

// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[students.length-1]);
// console.log(students);

// Task 6 — Employee Object

// var emp_detials = {
//     name : "Agilesh",
//     age : 22,
//     role : 'Full Stack Python Developer',
//     skills : ['Python','Django','MySQL','MongoDB','Frontend'],
//     isWorking : true,
//     qualification : ['B.E','M.E']
// };

// console.log(emp_detials.name);
// console.log(emp_detials.age);
// console.log(emp_detials.role);
// console.log(emp_detials.skills[0]);
// console.log(emp_detials.qualification[emp_detials.qualification.length-1]);
// console.log(emp_detials.isWorking);

// Arithmetic Operator Tasks
// Task 7 — Calculator

// let a = 20;
// let b = 5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// Task 8 — Shopping Bill

// let Shirt = 999;
// let Pant = 1499;
// let Shoes = 1999;
// let Bag = 799;

// console.log(`Total Price : ${Shirt+Pant+Shoes+Bag}`);

// Task 9 — Increment & Decrement

// let a = 10;   
// let b = a++;   //a = 11, b = 10

// console.log(a);
// console.log(b);  

// let a = 10;
// let b = ++a;  //a = 11, b = 11

// console.log(a);
// console.log(b);  

// let a = 10;
// let b = a--;  //a = 9, b = 10

// console.log(a);
// console.log(b); 

// let a = 10;
// let b = --a;  //a = 9, b = 9

// console.log(a);
// console.log(b);  

// Assignment Operator Tasks
// Task 10

// let num = 10;

// console.log(num += 5);
// console.log(num -= 3);
// console.log(num *= 2);
// console.log(num /= 4);
// console.log(num %= 3);
// console.log(num **= 2);

// Comparison Operator Tasks
// Task 11 — Find Output

// true
// false
// true
// false

// true
// false

// false
// true

// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 >= 10);
// console.log(10 <= 9);

// console.log(5 == "5");
// console.log(5 === "5");

// console.log(10 != "10");
// console.log(10 !== "10");

// Logical Operator Tasks
// Task 12 — AND

// true
// false
// false
// false

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Task 13 — OR

// true
// true
// true
// false

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Task 14 — NOT

// false
// true
// true
// false

// console.log(!true);
// console.log(!false);
// console.log(!(5 > 10));
// console.log(!(10 > 5));

// Task 15 — Combination

// false
// true
// true
// true


// console.log(5 == "5" && !(5 === 5) || 6 > 7);
// console.log(10 > 5 && 8 < 12 || 4 === "4");
// console.log(7 === 7 && 10 != "10" || 5 >= 5);
// console.log(15 < 10 || 20 > 15 && 5 == "5");

// Ternary Operator Tasks
// Task 16 — Voting

// let age = 20;
// age >= 18 ? console.log("Eligible to vote") : console.log("Not eligile");

// Task 17 — Password

// let password = true;
// password === true ? console.log("Login successfully") : console.log("Worng password");

// Concatenation & Template String
// Task 18 — User Introduction

// let name = "agilesh";
// let age = 22;
// let city = "villupuram";

// console.log("My name is "+name+". I am "+age+" "+"years old. I live in"+" "+city+".");
// console.log(`My name is ${name}. I am ${age} years old. i live in ${city}.`);

// Type Casting Tasks
// Task 19 — String Conversion

// console.log(String(100));
// console.log(String(true));
// console.log(String(undefined));
// console.log(String(null));
// console.log(String([1,2]));

// console.log(typeof(String(100)));
// console.log(typeof(String(true)));
// console.log(typeof(String(undefined)));
// console.log(typeof(String(null)));
// console.log(typeof(String([1,2])));


// Task 20 — Number Conversion

// 0
// 0
// 123
// NaN
// 1
// 0
// NaN
// 0

// console.log(Number());
// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("a1"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));

// 21.Boolean Conversion

// false
// false
// true
// true
// true
// false
// false
// false
// true
// true

// console.log(Boolean());
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(123));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));

// Flow Control Tasks
// Task 22 — Voting Eligibility

// let age = prompt("Enter ur age");

// if(age >= 18){
//     console.log("u can vote");
// }else{
//     console.log("u can't vote");
// };

// Task 23 — Positive or Negative

// let pos_neg = Number(prompt("Enter Any Number"));

// if (pos_neg > 0){
//     console.log("Positive Number");
// }else if (pos_neg < 0){
//     console.log("Negative Number");   
// }else{
//     console.log("zero Digit");
// };

// Task 24 — Grade System

// let marks = Number(prompt("Enter Ur Marks"));

// if (marks >= 90 && marks <= 100){
//     console.log("A Grade");
// }else if (marks >= 80){
//     console.log("B Grade");   
// }else if (marks >= 70){
//     console.log("C Grade");
// }else if (marks >= 60){
//     console.log("D Grade");
// }else if (marks <= 60 && marks >= 0){
//     console.log("Fail");
// }else{
//     console.log("Enter Digit Only");
// };

// Nested If Task
// Task 25 — Job Eligibility

// let Age = prompt("Enter Ur Age");
// let Height = prompt("Enter Ur Height");
// let Weight = prompt("Enter Ur Weight");

// if (Age >= 18){
//     if (Height >= 160){
//         if (Weight >= 60){
//             console.log("Congratulations! You are selected");
//         }else{
//             console.log("Sorry You are Not Selected");
//         }
//     }else{
//         console.log("Sorry You are Not Selected");
//     }
// }else{
//     console.log("Sorry You are Not Selected");
// };

// Switch Tasks
// Task 26 — Traffic Light

// let light = 'yellow';

// switch(light){
//     case 'red': console.log("Stop");
//     break;
//     case 'yellow': console.log("Ready");
//     break;
//     case 'green': console.log("Go");
//     break;

//     default : console.log("Unknown Color");
// };

// Task 27 — Day

// let day = 4;

// switch(day){
//     case 1 : console.log("MONDAY");
//     break;
//     case 2 : console.log("TUESDAY");
//     break;
//     case 3 : console.log("WEDNESDAY");
//     break;
//     case 4 : console.log("THURSDAY");
//     break;
//     case 5 : console.log("FRIDAY");
//     break;
//     case 6 : console.log("SATURDAY");
//     break;
//     case 7 : console.log("SUNDAY");
//     break;

//     default : console.log("INVALID DAY");
// };

// FINAL MINI PROJECT
// Task 28 — Student Result System

// Step 1 — Get user details

// let Name = prompt('Enter ur name');
// let Age = prompt('Enter ur age');
// let City = prompt('Enter ur city');

// Step 2 — Get marks

// let Tamil = Number(prompt('Enter ur Tamil mark'));
// let Engilsh = Number(prompt('Enter ur Emglish mark'));
// let Maths = Number(prompt('Enter ur maths mark'));

// Step 3 — Calculate

// console.log(`Total Marks : ${Tamil+Engilsh+Maths}`);
// console.log(`Average Marks : ${Tamil+Engilsh+Maths/300}`);

// Step 4 — Check result

// let marks = Number(prompt("Enter Ur Marks"));

// if (marks >= 90 && marks <= 100){
//     console.log("A Grade");
// }else if (marks >= 80){
//     console.log("B Grade");   
// }else if (marks >= 70){
//     console.log("C Grade");
// }else if (marks >= 60){
//     console.log("D Grade");
// }else if (marks <= 60 && marks >= 0){
//     console.log("Fail");
// }else{
//     console.log("Enter Digit Only");
// };

// Step 5 — Check voting

// let age = prompt("Enter ur age");

// if(age >= 18){
//     console.log("u can vote");
// }else{
//     console.log("u can't vote");
// };

// Step 6 — Display

// let name = 'Agi';
// let age = 22;
// let city = 'Villupuram';
// let total = 490;
// let average = 96.30
// let grade = "A"
// let voting = "Eligible"

// console.log(`Name : ${name}`);
// console.log(`Age : ${age}`);
// console.log(`City : ${city}`);
// console.log(`Total : ${total}`);
// console.log(`Average : ${average}`);
// console.log(`Grade : ${grade}`);
// console.log(`Voting : ${voting}`);

