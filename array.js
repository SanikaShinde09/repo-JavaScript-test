const a =["A",1,2,"B"];
console.log(a)

a[0] = "Y";
console.log(a)

a[4] = "C"
console.log(a)

a.push(20);
console.log(a);

a.shift()
console.log(a);

a.pop(2)
console.log(a);

a.unshift("B");
console.log(a);
a.length = 5;
console.log(a);

const points = [10,20,30,40,50];
console.log(points)

const tree = ["mango","banana","cherry"];
let tree1 = tree.at(0);
console.log(tree1)


const mygirls = ["rutuja","shivani","priti"];
const myboys = ["atul","parth","yash"];
 const mychildren = mygirls.concat(myboys);
 console.log(mygirls,myboys)

 const myarr = [[1,3],[3,4],[4,5]];
 const newarr = myarr.flat();
 console.log(myarr)

 const fruits = ["mango","apple","orange"];
 const citrus = fruits.slice(1)
 console.log(fruits)

 const fruits2 = ["berry","starwberry","jelly"]
 fruits2.copyWithin(0,2);
 console.log(fruits2)

 const fruits3 = ["jelly","mango","apple"];
 fruits3.length = 2;
 console.log(fruits3)

 const fruits4 = ["mango","apple","orange"];
 delete fruits4[0];
 console.log(fruits4)

 let m=fruits.toString();
 console.log(m)

 const cars = ["thar","bmw","saab","suzuki","volvo"];
 const cars3 = cars.slice(1,3);
 console.log(cars3)