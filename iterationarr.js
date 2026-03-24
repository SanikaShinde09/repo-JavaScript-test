const number = [45, 9, 2, 16, 25];
let txt = "";
number.forEach(myFunction);
function myFunction(value, index, Array) {
    txt += value + "<br>";
}
console.log(number)

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(myArr, newArr)

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, Array) {
    return value * 2;
}
console.log(numbers1)



const no = [1, 4, 30, 10, 25,];
const over18 = no.filter(myFunction);
console.log("over:" + over18);
function myFunction(value, index, Array) {
    return value > 18;
}



const n = [45, 1, 9, 10, 25];
let sum = n.reduce(myFunction, 100);
function myFunction(total, value, index, Array) {
    return total + value;
}
console.log(sum)

const NO = [40, 12, 6, 15, 30];
let sum1 = NO.reduceRight(myFunction);
function myFunction(total, value) {
    return total + value;
}
console.log(sum1)

const no1 = [1, 14, 5, 30, 25];
let allOver18 = no1.every(myFunction);
console.log("All over 18 is:" + allOver18);
function myFunction(value) {
    return value > 18;
}

const no2 = [2, 20, 8, 12, 50];
let someOver18 = no2.some(myFunction);
console.log("some over 18 is:" + someOver18);
function myFunction(value) {
    return value > 18;
}

let text = "ABCDEFG";
const myarr = Array.from(text);
console.log(text)

const myNumbers = [1, 2, 3, 4];
const myArr1 = Array.from(myNumbers, (x) => x * 2);
console.log(myArr1)

const fruits = ["mango", "orange", "banana", "apple"];
const keys = fruits.keys();
console.log(fruits)

const fruits1 = ["apple", "mango", "orange"];
const f = fruits1.entries();
for (let x of f) {
console.log(fruits1)
}


const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(months)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3)

const q1 = ["jan", "feb", "mar"];
const q2 = ["apr", "may", "jun"];
const q3 = ["jul", "aug", "sep"];
const q4 = ["oct", "nov", "dec"];
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)

const NUM = [23,55,21,40,56,90];
let minValue = Math.min(...NUM);
let maxValue = Math.max(...NUM);
console.log("min = " +minValue)
console.log("max = " +maxValue)

let a,rest;
const arr = [1,2,3,4,5,6,7,8];
 [a,...rest] = arr;
console.log("The rest is:" +rest)

