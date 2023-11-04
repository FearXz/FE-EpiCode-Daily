/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets);
//oppure
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
let petOrdinati = pets;
petOrdinati.sort();
console.log(petOrdinati);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let petInvertiti = petOrdinati;
petInvertiti.reverse();
console.log(petInvertiti);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let petPrimoUltimo = pets;
console.log(pets);
let petTemp = petPrimoUltimo.shift();
petPrimoUltimo.push(petTemp);
console.log(petPrimoUltimo);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'targa' + i;
  console.log(cars[i]);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let ferrari = {
  brand: 'Ferrai',
  model: 'Enzo',
  color: 'red',
  trims: ['sport', 'style', 'r-line'],

}
cars.push(ferrari);
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims[0];
}
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  let iniziale = cars[i].color.substring(0, 1);
  if (iniziale == 'b') {
    console.log('Fizz');
  }
  else {
    console.log('Buzz');
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
var x = 0;
while (numericArray[x] != 32) {
  console.log(numericArray[x]);
  x++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
var numLet = [];
for (let i = 0; i < charactersArray.length; i++) {

  switch (true) {
    case (charactersArray[i] == 'a'):
    numLet.push(1);
    break;
    case (charactersArray[i] == 'b'):
    numLet.push(2);
    break;
    case (charactersArray[i] == 'c'):
    numLet.push(3);
    break;
    case (charactersArray[i] == 'd'):
    numLet.push(4);
    break;
    case (charactersArray[i] == 'e'):
    numLet.push(5);
    break;
    case (charactersArray[i] == 'f'):
    numLet.push(6);
    break;
    case (charactersArray[i] == 'g'):
    numLet.push(7);
    break;
    case (charactersArray[i] == 'h'):
    numLet.push(8);
    break;
    case (charactersArray[i] == 'i'):
    numLet.push(9);
    break;
    case (charactersArray[i] == 'j'):
    numLet.push(10);
    break;
    case (charactersArray[i] == 'k'):
    numLet.push(11);
    break;
    case (charactersArray[i] == 'l'):
    numLet.push(12);
    break;
    case (charactersArray[i] == 'm'):
    numLet.push(13);
    break;
    case (charactersArray[i] == 'n'):
    numLet.push(14);
    break;
    case (charactersArray[i] == 'o'):
    numLet.push(15);
    break;
    case (charactersArray[i] == 'p'):
    numLet.push(16);
    break;
    case (charactersArray[i] == 'q'):
    numLet.push(17);
    break;
    case (charactersArray[i] == 'r'):
    numLet.push(18);
    break;
    case (charactersArray[i] == 's'):
    numLet.push(19);
    break;
    case (charactersArray[i] == 't'):
    numLet.push(20);
    break;
    case (charactersArray[i] == 'u'):
    numLet.push(21);
    break;
    case (charactersArray[i] == 'v'):
    numLet.push(22);
    break;
    case (charactersArray[i] == 'w'):
    numLet.push(23);
    break;
    case (charactersArray[i] == 'x'):
    numLet.push(24);
    break;
    case (charactersArray[i] == 'y'):
    numLet.push(25);
    break;
    case (charactersArray[i] == 'z'):
    numLet.push(26);
    break;

  }
}
console.log(numLet);
