/*
if (condizione) {
    //istruzioni
}
*/
var num1 = 10;
var num2 = 12;

if (num1>num2){
    console.log(num1+' è > di '+num2);
    document.getElementById('test1').innerHTML= num1+' è > di '+num2;
}
else if(num1==num2) {
    console.log(num1+' è = a '+num2);
    document.getElementById('test1').innerHTML=num1+' è = a '+num2;
}
else {
    console.log(num1+' è < di '+num2);
    document.getElementById('test1').innerHTML=num1+' è < di '+num2;
}