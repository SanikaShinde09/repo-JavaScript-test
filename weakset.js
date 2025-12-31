let mySet = new WeakSet();
let myObj = {fname:"sanika",lname:"shinde"};
mySet.add(myObj);
let answer = mySet.has(myObj);
console.log("Do I have myObj? is " + answer)



let mySet1 = new WeakSet();
let myObj1 = {fname:"parth",lname:"shinde"};
mySet.delete(myObj1);
let answer1 = mySet.has(myObj1);
console.log("Do I have myObj? is " + answer1)


let mySet2 = new WeakSet();
let myObj2 = {fname:"sakshi",laname:"shinde"};
mySet.add(myObj2);
myObj2 = null;
let answer2 = mySet.has(myObj2);
console.log("myObj :" +answer2)


const persons = new WeakSet();
const myObj3 = {name:"sakshi",age:24};
mySet.add(myObj);
let answer4 = mySet.has(myObj3);
console.log("is visiting for the first time " +answer4)

const people = new WeakSet();
const rutu = {name:"rutu",age:30};
mySet.add(rutu)
let answer5 = mySet.has(rutu);
console.log("Rutu, age30,is visiting for the first time: "  + answer5)

const people1 = new WeakSet();
const shivani = {name:"shivani",age:22};
mySet.add(shivani)
let answer6 = mySet.has(shivani);
console.log("Shivani, age22, is visiting for the first time: " + answer6)


const people2 = new WeakSet();
const sharvni = {name:"sharvni",age:23};
mySet.add(sharvni)
let answer7 = mySet.has(sharvni);
console.log("sharvni is visiting: " + answer7)

const people3 = new WeakSet();
const sidhi = {name:"sidhi",age:28};
mySet.add(sidhi)
let answer8 = mySet.has(sidhi);
console.log("sidhi " + answer8) 





// track(sharvni)
// function track(visitor) {
//     if(persons.has(visitor)) {
//        (text += visitor.name + " is visiting again." );
//     }else{
//         persons.add(visitor);
//        (text += visitor.name + " , age" + visitor.age +", is visiting for the first time ");
//     }
// }