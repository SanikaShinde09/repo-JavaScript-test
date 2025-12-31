let maths = 10;
let history =20;
let hindi = 20;
let english = 7;
let marathi = 8;
let total;
let percentage;

total = maths + history + hindi + english + marathi;
percentage = total / 500 * 100;
console.log(total)

if (total >= 165 && percentage >= 35) {

   console.log(percentage, "% result is pass");
} else {
   console.log(percentage, "% result is fail");
}

