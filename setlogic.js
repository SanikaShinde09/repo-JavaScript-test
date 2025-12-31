const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);
const C = A.union(B);
let  text = "";
for (const x of C) {
    text += x;
}
console.log("The union is: " +text);


const D = new Set(['a','b','c']);
const E = new Set(['b','c','d']);
const F = D.intersection(E);
let text1 = "";
for(const x of F) {
    text1 += x;
}
console.log("The intersection is: " +text1);

const G = new Set(['a','b','c']);
const H = new Set(['b','c','d']);
const I = G.difference(H);
let text2 = "";
for(const x of I) {
    text2 += x;
}
console.log("The difference is: " +text2)


const X = new Set(['a','b','c']);
const Y = new Set(['b','c','d']);
const Z = X.symmetricDifference(Y);
let text3 = "";
for(const x of Z) {
    text3 += x;
}
console.log("Symmetric difference is: " +text3);

const M = new Set(['a','b','c']);
const N = new Set(['b','c','d']);
let answer = M.isSubsetOf(N);
console.log(answer)

const U = new Set(['a','b','c']);
const V = new Set(['b','c','d']);
let answer1 = U.isSupersetOf(V);
console.log(answer1)

const W = new Set(['a','b','c']);
const P = new Set(['b','c','d']);
let answer3 = W.isDisjointFrom(P);
console.log(answer3)


