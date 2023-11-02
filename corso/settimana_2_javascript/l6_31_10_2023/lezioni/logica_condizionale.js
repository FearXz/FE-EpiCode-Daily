/*
if (condizione) {
    //istruzioni
}
*/
var num1 = 12;
var num2 = 10;
var x = 7;

if (num1 > num2) {
    console.log(num1 + ' è > di ' + num2);
    document.getElementById('test1').innerHTML = num1 + ' è > di ' + num2;
}
else if (num1 == num2) {
    console.log(num1 + ' è = a ' + num2);
    document.getElementById('test1').innerHTML = num1 + ' è = a ' + num2;
}
else {
    console.log(num1 + ' è < di ' + num2);
    document.getElementById('test1').innerHTML = num1 + ' è < di ' + num2;
}

if (x % 2 == 0) {
    console.log(x + ' è pari');
    document.getElementById('test2').innerHTML = x + ' è pari';
}
else {
    console.log(x + ' è dispari');
    document.getElementById('test2').innerHTML = x + ' è dispari';
}

// accenno ai costruttori

var saluto = new Date();
var orario = saluto.getHours();

if ((orario > 6) && (orario <= 18)) {
    document.write('Buon giorno!');
}

