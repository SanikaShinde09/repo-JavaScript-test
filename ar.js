const b = ["sanika",4,"atul",5,"sakshi",9,"parth"];
console.log(b);

b.push(10)
console.log(b)

b.shift()
console.log(b)

b.unshift("P")
console.log(b)

b.pop(4)
console.log(b)

b.length = 6
console.log(b)

let i;
const c = ["parth","sidhi","shivani","sharvani","snehal","vidya"];

for(i=0;i<(c.length);i++)
{
    console.log(c[i]);
}


const fruits = ["apple","mango","banana","cherry"];
const citrus = fruits.slice(1,3)
console.log(fruits)