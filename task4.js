// JavaScript Practice Tasks
// Task 1 — For Loop

// for (let a=1; a<=10; a++){
//     console.log(a);
// };


/////////////////////////////////////////////////////////////////////////


// Task 2 — Reverse Number

// for (let a=10; a>=1; a--){
//     console.log(a);
// };


/////////////////////////////////////////////////////////////////////////


//  Task 3 — Even Numbers

// for (let a=1; a<=20; a++){
//     if(a % 2 === 0){
//         console.log(a);
//     }
// };


/////////////////////////////////////////////////////////////////////////


// Task 4 — Odd Numbers

// for (let a=1; a<=20; a++){
//     if(a % 2 !== 0){
//         console.log(a);
//     }
// };


/////////////////////////////////////////////////////////////////////////


// Task 5 — Multiplication Table

// let b = 5;

// for (let a=1; a<=10; a++){
//     console.log(`${a} x ${b} = ${a*b}`);
// };


/////////////////////////////////////////////////////////////////////////


// While Loop
// Task 6 — Countdown

// var a = 10;

// while(a>=1){
//     console.log(a);
//     a--; 
// };


/////////////////////////////////////////////////////////////////////////


// Task 7 — Sum of Numbers

// var a = 1;
// var total = 0;

// while(a<=10){
//     total += a;
//     a++; 
// };

// console.log(`Total : ${total}`);


/////////////////////////////////////////////////////////////////////////


// Do While
// Task 8 — Print Numbers

// let a = 1;

// do{
//     console.log(a);
//     a++;

// }while(a<=5);


/////////////////////////////////////////////////////////////////////////


// Task 9 — Do While Understanding

// 10 is the output. because do while when the condition false that time also run the first output

// let a = 10;

// do {
//     console.log(a);
//     a++;
// } while (a <= 5);


/////////////////////////////////////////////////////////////////////////


//  For...of
// Task 10 — String Characters

// let Name = "javascript";

// for (let name of Name){
//     console.log(name);
// };


/////////////////////////////////////////////////////////////////////////


// Task 11 — Array Values

// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// for (let fruit of fruits){
//     console.log(fruit);
// };


/////////////////////////////////////////////////////////////////////////


// Task 12 — Student Names


// let students = ["Agilesh", "Kishore", "Raaghul", "Ali", "Jeeva"];

// for (let student of students){
//     console.log(`Student : ${student}`);
// };


/////////////////////////////////////////////////////////////////////////


// For...in
// Task 13 — Employee Object

// let employee = {
//     name: "Agi",
//     age: 22,
//     role: "Developer",
//     city: "villupuram"
// };

// for (let emp in employee){
//     console.log(`${emp} : ${employee[emp]}`);
// };


/////////////////////////////////////////////////////////////////////////


// Task 14 — Product Object

// let products = {
//     productName : 'laptop',
//     price : 150000,
//     brand : 'Dell',
//     category : 'Electronics',
//     stock : 34
// };

// for (let product in products){

//     console.log(`${product} : ${products[product]}`);
    
// };


/////////////////////////////////////////////////////////////////////////


// Functions
// Task 15 — Simple Function

// function welcome(){
//     console.log('Welcome to JavaScript'); 
// };

// welcome();
// welcome();
// welcome();


/////////////////////////////////////////////////////////////////////////


// Task 16 — Function With Parameter

// function Name(name) {
//     console.log(`Hello ${name}`);
// };

// Name('Agilesh');
// Name('Kabilan');
// Name('Kaviya');


/////////////////////////////////////////////////////////////////////////


// Task 17 — Multiple Parameters

// function student(name, age, department){
//     console.log(`Name : ${name}, Age : ${age}, Department : ${department}`);
// };

// student('Agilesh',22,'ECE');
// student('Kabilan',23,'CSE');
// student('Kaushik',22,'ECE');


/////////////////////////////////////////////////////////////////////////


// Return
// Task 18 — Addition Function

// function add(a, b) {
//     return a,b;
// };

// let result = add(5,5);
// console.log(`Result : ${result}`);


/////////////////////////////////////////////////////////////////////////


// Task 19 — Salary


// function salary(amount) {
//     return amount;
// };

// let money = salary(40000);
// console.log(`Salary : ${money}`);


/////////////////////////////////////////////////////////////////////////


// Task 20 — Bonus Calculator

// function bonus(salary, bonusAmount){
//     return salary+bonusAmount;
// };

// let salary = 50000;
// let bonusAmount= 5000;
// let value = bonus(salary,bonusAmount);
// console.log(`Salary : ${salary}`);
// console.log(`Bonus : ${bonusAmount}`);
// console.log(`Total : ${value}`);


/////////////////////////////////////////////////////////////////////////


// Default Parameter
// Task 21

// function emp(name, role = "Developer") {
//    console.log(`Nmae : ${name}, Role : ${role}`);
// };

// emp("Agilesh");
// emp("Kabilan", "Designer");


/////////////////////////////////////////////////////////////////////////


// Function Types
// Task 22 — Named Function

// function square(number) {
//     return number * number;
// }

// console.log(square(5));
// console.log(square(15));
// console.log(square(25));
// console.log(square(35));
// console.log(square(45));


/////////////////////////////////////////////////////////////////////////


// Task 23 — Anonymous Function

// let calculate = function(a,b){
//     return a + b;
// }

// console.log(calculate(2,3));


/////////////////////////////////////////////////////////////////////////


// Task 24 — Arrow Function

// let multiply = (a, b) => {
//     return a * b;
// };

// console.log(multiply(5,5));


/////////////////////////////////////////////////////////////////////////


// Scope
// Task 25 — Predict the Output

// output - 10,20,30,10

// a - global scope
// b - block scope
// c - block scope 

// A - can access inside and ouside 
// B - can access inside only 
// C - can access inside only 

// function test() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// test();

/////////////////////////////////////////////////////////////////////////


// Hoisting
// Task 26 — Predict

// output - undefined

// console.log(a);

// var a = 10;


/////////////////////////////////////////////////////////////////////////


// Task 27

// before initialization cannot access

// console.log(b);

// let b = 20;


/////////////////////////////////////////////////////////////////////////

// Task 28

// before initialization cannot access
//var- undedined ,let const - cannot access before initialization

// console.log(c);

// const c = 30;


/////////////////////////////////////////////////////////////////////////


// IIFE
// Task 29 — Self Invoking Function

// (function(a){
//     alert(a);
// })('Welcome to JavaScript');


// (function(product,discount){
//     alert(`The product ${product} has a discount of ${discount}`);
// })('mobile','50%');


/////////////////////////////////////////////////////////////////////////


// Callback / Higher-Order Function
// Task 30

// welcome - callback
// execute - higher-order function

// function welcome() {
//     console.log("Welcome");
// };

// function execute(callback) {
//     callback();
// };

// execute(welcome);


/////////////////////////////////////////////////////////////////////////


// Generator Function
// Task 31 — Cashback

// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// };

// let cb = cashback();

// for(c of cb){
//     console.log(c);
// };


/////////////////////////////////////////////////////////////////////////


// FINAL MINI PROJECT
// Task 32 — Employee Management Console

var emp_data = [{
    name : 'agi',
    age : 22,
    dep : 'IT',
    role : 'full stack python developer',
    salary : 40000
},{
    name: "kabil",
    age: 24,
    dep: "HR",
    role: "HR Executive",
    salary: 35000
    }];

 // -------------------------------------------------------------------


//  1. for...of

for (let emp of emp_data){
        console.log(emp);
};


// -------------------------------------------------------------------


// 2. for...in

for (let emp of emp_data){
        for(let key in emp){
            console.log(`${key} : ${emp[key]}`); 
        }
        console.log('-------------------------------------------');
};


// -------------------------------------------------------------------


// 3. Function

function emp_detial(emp){
    console.log(`USING FUNCTION`);
    console.log(`-------------------------------------------`);
    console.log(`Name : ${emp.name}`);
    console.log(`Age : ${emp.age}`);
    console.log(`Dep : ${emp.dep}`);
    console.log(`Role : ${emp.role}`);
    console.log(`Salary : ${emp.salary}`);
    console.log(`-------------------------------------------`);
};

for (let emp of emp_data){
    emp_detial(emp)
};


// -------------------------------------------------------------------

// 4. Function parameters

function emp_detials(name,age,dep,role,salary){
    console.log(`USING FUNCTION PARAMETER`);
    console.log(`-------------------------------------------`);
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
    console.log(`Dep : ${dep}`);
    console.log(`Role : ${role}`);
    console.log(`Salary : ${salary}`);
    console.log(`-------------------------------------------`);
};

for (let emp of emp_data){
    emp_detials(emp.name,emp.age,emp.dep,emp.role,emp.salary)
};


// -------------------------------------------------------------------


// 5. Return

function emp_detials(salary){
    return salary;
};

for (let emp of emp_data){
    let det = emp_detials(emp.salary)
    console.log(det);
};


// -------------------------------------------------------------------


// 6. Condition

for (let emp of emp_data){
    if (emp.salary >= 40000){
    console.log('Good');
}else{
    console.log('Average');
};
};


// -------------------------------------------------------------------


// 7. Arrow function


const Bonus = (salary) => salary * 0.10;

for (let emp of emp_data) {
    let bonus = Bonus(emp.salary);
    console.log(`${emp.name}'s Bonus: ${bonus}`);
};


// -------------------------------------------------------------------

// 8. Generator

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let a = benefits();
for (let benefit of a) {
    console.log(benefit);
};


/////////////////////////////////////////////////////////////////////////