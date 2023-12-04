// PRIMITIVES: string, number, boolean, undefined, null, symbol, bigInt.....

// NOT-PRIMITIVES: object, array, function

let name = "Stefano";
{
  let name = "Francesco";
  console.log(name);
}

// Funzioni
// sono blocchi di codice riutilizzabili!
// che vanno eseguiti per ottenere un risultato o effetto

// se la funzione ha un return, posso aspettarmi dalla sua esecuzione un valore in uscita.
// posso trattare la sua chiamata come il valore che mi ritornerà

// una variabile creata all'interno di una funzione non può essere letta all'esterno
function getBatchName() {
  // la variabile batchName ha un ambito racchiuso all'interno del blocco di questa funzione e
  // NON PUO' essere letta DIRETTAMENTE in un contesto esterno
  let batchName = "FS0623B";

  return batchName; // possiamo però far uscire un valore dal contesto della funzione dandoci la possibilità di leggerlo da fuori (un contesto più esterno)
}

// console.log(batchName); // non posso leggere una variabile interna ad un contesto ( da fuori a dentro non riesco a leggere )

console.log(getBatchName());
console.log("FS0623B");

// se la funzione non ha un return (si definisce VOID) il suo valore di ritorno sarà undefined (primitiva) e
// verosimilmente la useremo per avere un effetto collaterale in un qualche punto del nostro programma

let counter = 0;

function count() {
  // da dentro a fuori ho accesso alle variabili più esterne
  counter = counter + 1;
}

console.log("PRE COUNT()", counter);

// eseguo la funzione count() 100 volte
for (let i = 0; i < 100; i++) {
  count();
}

// il valore di counter sarà quindi 100
console.log("POST COUNT()", counter);

function sum() {
  let a = 5;
  let b = 8;

  let result = a + b;
  return result;
}

const total = sum();

console.log(total);

const totalPlusTwo = total + 2;
console.log(totalPlusTwo);

const totalPlusFour = sum() + 4;
console.log(totalPlusFour);

// parametri di funzione
// i parametri sono dei segnaposto (placeholder) per un eventuale valore che può arrivare nel momento in cui la funzione viene eseguita
// quando eseguiamo una funzione che si aspetta dei parametri dovremmo necessariamente passare degli argomenti che daranno valore ai parametri

function sumWithParams(a, b) {
  let result = a + b;
  return result;
}

console.log(sumWithParams(5, 10));
console.log(sumWithParams(15, 100));

function sayHello(secondMessage, name, lastChar) {
  console.log("Hello " + name + ", " + secondMessage + lastChar);
}

sayHello("you are welcome here", "Alice", "!");
sayHello("nice to meet you", "Alessio", "!!!");
sayHello("nice to see you again", "Francesco", ".");
sayHello("I'll see you in a bit", "Hachim", "...", "EXTRA");
// sayHello(); // se la funzione si aspetta un parametro e noi non glielo passiamo, laddove il parametro è utilizzato riceverà undefined

window.onload = function () {
  getRandomNum();
};

// alternativa al .onload e ha la particolarità di partire leggermente prima, perché aspetterà solo l'avvenuta creazione del DOM, rispetto a tutte le risorse, anche esterne
// window.addEventListener("DOMContentLoaded", function () {});

// function expression
// funzione anonima passata come valore di una variabile
// perde la funzionalità di hoisting (sollevamento) e risponde in maniera più lineare e meno ambiguo
const getRandomNum = function (maxNum) {
  const random = Math.floor(Math.random() * maxNum);

  return random;
};

console.log(getRandomNum(3));

const fruits = ["apple", "pear", "kiwi", "grape", "anans", "orange"];

console.log("RANDOM FRUIT", fruits[getRandomNum(fruits.length)]);
// console.log(fruits.reverse()); // inverte l'ordine degli elementi dell'array

// for loop invertito che mi logga dall'ultimo al primo
for (let i = fruits.length - 1; i >= 0; i--) {
  const fruit = fruits[i];
  console.log(fruit);
}

const animals = ["cat", "dog", "rabbit", "horse"];
console.log("RANDOM ANIMAL", animals[getRandomNum(animals.length)]);

// arrow function
// è sempre una funzione anonima con sitassi potenzialmente più sintetica
// const getRandomNumArrow = maxNum => {
//   const random = Math.floor(Math.random() * maxNum);
//   return random;
// };

// in una arrow function è possibile avere un return IMPLICITO se il contesto presenta una singola linea di codice
const getRandomNumArrowExp = maxNum => {
  console.log(maxNum);
  return Math.floor(Math.random() * maxNum);
};

// per avere un return implicito bisogna eliminare le graffe di contesto e la keyword "return"
const getRandomNumArrowImpl = maxNum => Math.floor(Math.random() * maxNum);
console.log(getRandomNumArrowImpl(5));

// const newArr = fruits.concat(animals);

// spread operator mi "spalma" elementi di un array o proprietà di un oggetto
const combinedArr = [...fruits, ...animals];

const newArr = [];
for (let i = 0; i < combinedArr.length; i++) {
  const str = combinedArr[i];
  //   console.log("str", str);

  const firstCharUpper = str.charAt(0).toUpperCase();
  //   console.log("FIRST CHAR", firstCharUpper);
  const lastChars = str.substring(1);
  //   console.log("FINAL STR", firstCharUpper + lastChars);

  const fullWordCapital = firstCharUpper + lastChars;
  newArr.push(fullWordCapital);
}

console.log(newArr);

const quickFox = "The quick brown fox jumps over the lazy dog.";

const capitalize = string => {
  const splitStrArr = string.split(" ");
  const words = [];

  for (let i = 0; i < splitStrArr.length; i++) {
    const word = splitStrArr[i];
    //   console.log("str", word);

    const firstCharUpper = word.charAt(0).toUpperCase();
    //   console.log("FIRST CHAR", firstCharUpper);
    const lastChars = word.substring(1);
    //   console.log("FINAL word", firstCharUpper + lastChars);

    const fullWordCapital = firstCharUpper + lastChars;
    words.push(fullWordCapital);
  }

  return words.join(" ");
};

console.log(capitalize(quickFox));
console.log(capitalize("epicode is awesome!"));
