const fruits = ["banana", "apple", "mango", "orange"];
fruits.sort();
console.log(fruits)

const cars = ["BMW", "Volvo", "Thar", "Saab", "Suzuki"];
cars.reverse();
console.log(cars)

const numbers = [10, 40, 60, 70, 18, 29, 50];
// first sort the Array
numbers.sort();
// then reverse it:
numbers.reverse();
console.log(numbers)

const months = ["june", "may", "march", "apr", "feb", "jan"];
const sorted = months.toSorted();
console.log(months)

const pen = ["black", "blue", "gel"];
const sorted1 = pen.toReversed();
console.log(pen)

const points = [7, 6, 3, 10, 5, 2, 1];
points.sort(function (a, b) { return a - b });
console.log(points)

const points1 = [400, 10, 1, 9, 200, 100];
points1.sort(function (a, b) { return b - a });
console.log(points1)

const poin = [40, 1, 5, 8, 10, 100];
function myFunction() {
    poin.sort(function () { return 0.5 - Math.random() });
}
console.log(poin)

const point = [40, 1, 5, 8, 10, 100];
function myArraymin(arr) {
    return Math.min.apply(null, arr);
}

const points2 = [40, 100, 1, 5, 25, 10];
function myFunction(){
for (let i = points2.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points2[i];
  points2[i] = points2[j];
  points2[j] = k;
}
   console.log(i,j)
}


const cars1 = [
    {type:"Volvo",year:2016},
    {type:"Saab",year:2001},
    {type:"BMW",year:2010}
];
cars1.sort(function(a,b){return a.year - b.year});
console.log(cars1)


const po = [
    {name:"X00",price:100},
    {name:"X01",price:100},
    {name:"X02",price:100},
    {name:"X03",price:100},
    {name:"X04",price:110},
    {name:"X05",price:110},
    {name:"X06",price:110},
    {name:"X07",price:110}
];
console.log(po)


