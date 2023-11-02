let x = 5;
let messaggio;

switch (x % 2) {
    case 0:
        messaggio = x + ' è pari';
        break;

    case 1:
        messaggio = x + ' è dispari';
        break;

    default:
        messaggio = x + ' non è un numero';
        break;
}
console.log(messaggio);

