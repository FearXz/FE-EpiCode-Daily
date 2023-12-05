// constructor function sono funzioni che hanno il preciso scopo di creare oggetti

// gli oggetti in JS sono semplici da realizzare --> {}, fin tanto che ne creiamo pochi...
// il problema arriva quando abbiamo la necessità di crearne molti in serie, tutti anonimi e indipendenti, con stesse coppie chiave/valore

// una funzione costruttrice funge da "fabbrica di oggetti"
// va creata in PascalCase (quindi anche con la prima lettera maiuscola)

// per aiutarci a scrivere oggetti in serie fatti con la stessa struttura
// entrano in gioco le funzioni costruttrici (constructor functions)

// camelCase -> prima lettera minuscola e le altre maiuscole (gobba di cammello)
// PascalCase -> tutte le lettere iniziali delle parole maiuscole (inclusa la prima)

// dovrà essere una funzione classica e non arrow.
// le arrow function non possono essere delle costruttrici

// la funzione costruttrice genera l'istanza di un oggetto a partire dalla stessa matrice

// creaimo lo stampo che genererà tanti oggetti simili (istanze)

const Person = function () {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.myMethod = function () {};
};
// per far generare l'oggetto alla funzione costruttrice dovremo implementare l'utilizzo della keyword "new"

const giuseppeVerdi = new Person();

giuseppeVerdi.name = "Giuseppe";
giuseppeVerdi.surname = "Verdi";

console.log(giuseppeVerdi);

// un nuovo stampino più dinamico che accetta dei parametri per assegnare il valore alle proprietà immediatamente

const DynamicPerson = function (_name, _surname, _address, _email, _myMethod = function () {}) {
  this.name = _name;
  this.surname = _surname;
  this.address = _address;
  this.email = _email;
  this.catchPhrase = _myMethod;
};

// mario e wario vengono generati da subito come oggetti con tutte le proprietà necessarie
const marioSuper = new DynamicPerson("Mario", "Super", "Yoshi Island", "super@mario.com", function () {
  console.log("It's me " + this.name);
});
console.log(marioSuper);
const warioSuper = new DynamicPerson("Wario", "Super", "Castle", "super@wario.com", function () {
  console.log("It's me " + this.name);
});
console.log(warioSuper);
warioSuper.catchPhrase();
