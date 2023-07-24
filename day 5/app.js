"use strict";
import { sum } from "./more.js";
alert("Welcome to my site");
let name = prompt("Enter your name");
console.log(`Welcome ${name}`);
let n1 = +prompt("enter first number");
let n2 = +prompt("enter second number");
console.log(sum(n1, n2));
const lessThanOrEqualToZero = (num) => {
  return num <= 0 ? true : false;
};
let num = prompt(`enter num to check less Than Or Equal To Zero`);
console.log(lessThanOrEqualToZero(num));
// console.log(lessThanOrEqualToZero(0));
// console.log(lessThanOrEqualToZero(-2));

function checkStudentFaculty(str) {
  if (str === "FCI") {
    alert("You’re eligible to Programing tracks");
  } else if (str === "Engineering") {
    alert("You’re eligible to Network and Embedded tracks");
  } else if (str === "Commerce") {
    alert("You’re eligible to ERP and Social media tracks");
  } else {
    alert("You’re eligible to SW fundamentals tracks");
  }
}
let str = prompt("enter your Faculty");
checkStudentFaculty(str);
const triArea = (base, height) => {
  return (base * height) / 2;
};
let base = prompt("enter the base");
let height = prompt("enter the height");
console.log(triArea(base, height));
