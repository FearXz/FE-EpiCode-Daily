var giorniDellaSettimana = [
    'lunedi',
    'martedi',
    'mercoledi',
    'giovedi',
    'venerdi',
    'sabato',
    'domenica'
];
var primoGiorno = giorniDellaSettimana[0];
var terzoGiorno = giorniDellaSettimana[2];
var settimoGiorno = giorniDellaSettimana[6];

console.log(primoGiorno);
console.log(terzoGiorno);
console.log(settimoGiorno);

var myArray = []; //array vuoto
myArray = [ , 'elemento2']; //array con primo elemento undefined, e secondo stringa
var myArray = [];
var myArray = ['stringa','stringa',['a','b']];
var matrice = [[11,12,13],[21,22,23],[31,32,33]]; // array multidimensionale
var contMatrice = matrice [2] [1]; //32
console.log(contMatrice);

const studenti = ['Alessandro','Alessio','Alfonso','Alice'];
let length = studenti.length;
//selezionare il tag con id="demo" per stampare valore variabile
document.getElementById("demo").innerHTML = length;
// chiedo al dom (documenti di fornirmi elemento che ha id demo)
// col metodo .innerHTML stampa dentro id="demo" la variabile lenght