const a = [[fname = "sanika", rollno = 142, mobileno = 4356789010, address = "dindnerli"],
[fname = "atul", rollno = 139, mobileno = 45167021346, address = "gadegoundwadi"]]
let i;
let j;

for (i = 0; i < (a.length); i++) {
    let p = "";
    for (j = 0; j < (a[i].length); j++) {
        p = p + " " + a[i][j];
    }
    console.log(p)
}



