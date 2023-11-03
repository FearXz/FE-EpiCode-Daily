// definizione funzione
/*
function nome(argomenti) {
    //istruzioni
    // return parola chiave per resituire un valore se necessario
}
// function è una keyword per dichiarare una funzione
// possono esserci uno o più argomenti separati da virgole (lista di variabili)

//richiamare funzione
nome(valori1, valore2);


function somma() {
    var z = 11 + 5;
    return z;
}

var risultato = somma();
var risultato2 = 5 + somma() * 2;

function somma(x, y) {
    var z = x + y;
    return z;
}*/
var risultato = somma(11, 5);

// il numero di argomenti può essere diverso dal numero dei valori

var risultato3 = somma(11); // x=11 y= undefined ->NaN

// ECMAScript6 nuovo modo per scrivere in breve

function somma(x = 0, y = 0) { //inizializzo direttamente  ECMAScript6
    var z = x + y;
    return z;
}

function moltiplica(par) { // normale
    return par * 2;
}
moltiplica(4);// 8

var moltiplica = (par) => par * 2; //funzione rapida in ECMAScript6
// se ce un solo parametro posso togliere le parentesi tonde

var moltiplica = par => par * 2;
// se non abbiamo parametri meglio metterle le parentesi 
console.log(moltiplica(5));

//SCOPE
// qua dichiaro x sia dentro che fuori e sono diverse
var x = 'fuori';
function kebab() {
    var x = 'dentro'
    console.log(x);
}
kebab();
console.log(x);

// qua dichiaro y solo fuori e dentro la modifico
// le variabili dichiarate var localmenente  non sono accessibili dall'esterno
var y = 'fuori';
function kebab2() {
     y = 'dentro'
    console.log(y);
}
kebab2();
console.log(y);
