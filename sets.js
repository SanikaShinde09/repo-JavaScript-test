const letters = new Set(["a","b","c"]);
console.log("The set has " +letters.size + " values.");


const letter = new Set();
letter.add("a");
letter.add("a");
letter.add("b");
console.log(letter)


const letter1 = new Set();
const a = "a";
const b = "b";
const c = "c";
letter1.add(a);
letter1.add(b);
letter1.add(c);
console.log("The set has " +letter1.size + " values.");



const letter2 = new Set(["e","f","g"]);
letter2.add("h");
letter2.add("i");
console.log("The set has " +letter2.size + " values.");


const letter3 = new Set();
letter3.add("a");
letter3.add("b");
letter3.add("c");
letter3.add("d");
letter3.add("c");
letter3.add("c");
letter3.add("c");
letter3.add("c");
console.log("The set has " +letter3.size + " values.");


const letter4 = new Set(["X","Y","Z"]);
let text = "";
for (const x of letters) {
  text += x + "<br>";
}
console.log(letter4)

const letter5 = new Set(["W","R","P"]);
console.log("The type of the set is " + typeof letter5);

const letter6 = new Set(["V","T","M"]);
console.log(letter5 instanceof Set);