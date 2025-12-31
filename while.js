let enterednumber;
let result;
while (true)
{
    enterednumber = "enter a odd number to stop";


    if (enterednumber){
        console.log("invalid input please enter a number");
    }
    result = enterednumber%2;
    if(result===0){
        console.log(enterednumber + "is an even number");
    } else{
        console.log(enterednumber + "is an odd number");
        break;
    }
}