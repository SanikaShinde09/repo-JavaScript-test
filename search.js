const fruits = ["apple","mango","apple","orange"];
let position = fruits.indexOf("Apple") + 1;
console.log(fruits)

const fruits1 = ["banana","cherry","banana","jelly"];
let position1 = fruits1.lastIndexOf("banana") +1;
console.log(fruits1)

const cars = ["BMW","Volvo","suzuki"];
cars.includes("Volvo");
console.log(cars)

const numbers =[4,9,16,25,29];
console.log("first number over 18 has index " +numbers)

const temp = [20,30,50,32,25,45];
let high = temp.findLast(x => x > 40);
console.log("the last temperature over 40 was " + high);

const temp1 = [27,30,37,43,40,42];
let pos = temp1.findLastIndex(x => x > 42);
console.log("the last temperature over 42 was in position " + pos);





