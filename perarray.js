const a = [
    {
        name: "sanika",
        rollno: 142,
        hindi: 40,
        marathi: 50,
        english: 80,
        history: 90,
        maths: 67,
        percentage: 0,
        sum: 0

    },
    {
        name: "atul",
        rollno: 139,
        hindi: 49,
        marathi: 90,
        english: 70,
        history: 50,
        maths: 80,
        percentage: 0,
        sum: 0

    },
    {
        name: "parth",
        rollno: 130,
        hindi: 45,
        marathi: 78,
        english: 56,
        history: 78,
        maths: 63,
        percentage: 0,
        sum: 0
    },
     {
        name: "sakshi",
        rollno: 102,
        hindi: 40,
        marathi: 50,
        english: 80,
        history: 90,
        maths: 67,
        percentage: 0,
        sum: 0

    },
    {
        name: "rohan",
        rollno: 100,
        hindi: 45,
        marathi: 78,
        english: 86,
        history: 98,
        maths: 63,
        percentage: 0,
        sum: 0
    }
]
let i;
let sum;

let t1 = findouthighestnumber(a);
let t2 = findouthighestnumber(a,t1);
let t3 = findouthighestnumber(a,t2);

console.log("1st:"+t1);
console.log("2nd:"+t2);
console.log("3rd:"+t3);

function findouthighestnumber(a, t = 100) {
    let t1 = 0;
    for (i = 0; i < (a.length); i++) {

        sum = a[i].hindi + a[i].marathi + a[i].english + a[i].history + a[i].maths;
        a[i].sum = sum;
        a[i].percentage = (sum / 500) * 100;
        if (i == 0 && a[i].percentage < t)
        {
            t1 = a[i].percentage
        }
    else {
            if (a[i].percentage > t1 && a[i].percentage < t) {
                t1 = a[i].percentage
            }
        }
    }
    return t1


}
// console.log("name:" + a[i].name)
    // console.log("percentage:" + a[i].percentage)
//  console.log(a)

