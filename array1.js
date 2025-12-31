const b = ["mansi","sanika","atul","sara"];
let i;


for(i=0;i<(b.length);i++){
    console.log(b[i]);
     
}

const e = ["apple","mango","strawberry"];
e.splice(2,0,"lemon","kiwi");
e.copyWithin(2,0,2);
console.log(e)

e[0] = "strawberry";
console.log(e);

e[3] = "apple";
console.log(e);

e.push("cherry");
console.log(e);

e[1] = 10;
console.log(e)

e[3] = 20;
console.log(e)


const months = ["june","oct","dec","may"];
console.log(months);

months[4] = "feb";
console.log(months);

months[0] = "nov";
console.log(months);

months.push("july");
console.log(months)

months.pop("nov");
console.log(months)

months.shift();
console.log(months)

months.unshift("B");
console.log(months)

months.length = 5;
console.log(months)

const cars = ["BMW","Thar","saab","Volvo"];
cars.splice(3,0,"swift","suzuki");
console.log(cars)


const girls = ["rutuja","shivani","priti"];
const boys = ["atul","parth","yash"];
 const children = girls.concat(boys);
 console.log(girls,boys)