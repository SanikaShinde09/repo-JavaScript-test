const a = [{fname : "sanika", rollno : 142, mobileno : 4356789010, address : "dindnerli",pincode : 416207},
{fname : "atul", rollno : 139, mobileno : 45167021346, address :"gadegoundwadi",pincode : 407452}]

console.log(a)
console.log(a[1]["fname"]);
console.log(a[1].fname = "atul patil")

for(i=0;i<(a.length);i++){
      
    console.log(a[i].fname),

    console.log(a[i].rollno),

    console.log(a[i].mobileno),

    console.log(a[i].address),

    console.log(a[i].pincode)
    
}