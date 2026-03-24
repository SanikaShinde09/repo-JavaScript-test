let a = [{
    fname: "bottel",
    price: 50,
    modelno: "XYZ"
},
{
    fname: "pen",
    price: 90,
    modelno: "ABC"
},
{
    fname: "book",
    price: 100,
    modelno: "MNC"
}
]


console.log(a[0]["fname"])
console.log(a[1]["price"])
console.log(a[2]["price"])
a[1].price = 70
a[2].price = 150
console.log(a)

for (i = 0; i < a.length; i++) {
    console.log("name:" + a[i].fname)

    console.log("price:" + a[i].price)
}
