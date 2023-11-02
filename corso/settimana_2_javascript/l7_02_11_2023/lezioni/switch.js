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

let day;
switch (new Date().getDay()) {
    case 0:
        day = 'Domenica';
        break;
    case 1:
        day = 'Lunedi';
        break;
    case 2:
        day = 'Martedi';
        break;
    case 3:
        day = 'Mercoledi';
        break;
    case 4:
        day = 'Giovedi';
        break;
    case 5:
        day = 'Venerdi';
        break;
    case 6:
        day = 'Sabato';
        break;

}
console.log(day);