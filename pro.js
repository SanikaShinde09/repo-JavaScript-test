let i = 0;
let total = 0;
let discount = 10;
let discountAmount = 0;
let finalam = 0;
for(i=0; i<pro.length; i++){
     pro[i].subtotal = pro[i].qty * pro[i].price;
    total += pro[i].subtotal;
}
discountAmount = ((discount * total)/100).toFixed(2);
finalam = (total - discountAmount).toFixed(2);
console.log(pro)
console.log("total: " +total)
console.log(discount +"%:"+ discountAmount)
console.log("final amt:"+finalam)