console.log("Ciao TypeScript");

let x = "Ciao";

console.log(x);

// myString = "Miceli";
let myString: string = "1Stefano";

let myNumber: number = 30;

console.log(myString);

console.log(myNumber);

let myAnyVar: any = false; // Evitare l'utilizzo di any quanto più possibile
myAnyVar = "Stefano"; // non ci darà più errore in caso di assegnazione di un tipo diverso, di fatto stiamo lavorando come fosse JS puro

// myString = 20;

// TYPE INFERENCE - la capacità di TS di assegnare automaticamente un tipo

// TIPI PRIMITIVI
// string
// number
// boolean
// null
// undefined

// unknown - per ogni tipo non conosciuto, che magari si conoscerà in futuro.
// any - !! DA USARE CON CAUTELA !! - serve a spegnere i controlli di ts

// TIPI STRUTTURALI
// array
// object

// console.log(Number(myString));

// questo non funziona perché NaN è di tipo "number" (usare isNaN())
// if (typeof Number(myString) === "number") {
//   console.log("è un numero");
// } else {
//   console.log("NON è un numero");
// }
// console.log();

const sum = (num1, num2) => {
  const n1 = parseInt(num1);
  const n2 = parseInt(num2);

  if (typeof n1 === "number" && typeof n2 === "number" && !isNaN(n1) && !isNaN(n2)) {
    return n1 + n2;
  } else {
    return "usa valori numerici per i parametri!";
  }
};

const sumWithTypeScript = (num1: number, num2: number) => {
  return (num1 + num2).toString();
};
// Grazie alla type inference TS è in grado di rilevare il tipo del valore in uscita
// se volessimo avere un valore in particolare si potrebbe esplicitarlo dopo le parentesi che definiscono la funzione ():string =>

console.log(sum("asda", 3));
console.log(sumWithTypeScript(50, 3));

// con l'operatore | si definsce un UNION TYPE
const mixedAddition = (par1: number | string, par2: number | string) => {
  if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
    return par1 + par2;
  } else {
    return "Abbiamo ricevuto una stringa";
  }
};

console.log(mixedAddition(2, 3));

// CUSTOM TYPE (o Alias) è un tipo che possiamo definire noi una volta e riutilizzare in punti diversi della nostra applicazione

type StringOrNumber = string | number;

const mixedAdditionWithAlias = (par1: StringOrNumber, par2: StringOrNumber) => {
  if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
    return par1 + par2;
  } else {
    return "Abbiamo ricevuto una stringa";
  }
};

console.log(mixedAddition(2, 5));

// funzine con parametro opzionale non obbligatorio
const mixedAdditionWithOptionalParams = (str1: string, str2?: string) => {
  return str1.concat(str2 || "...");
};

console.log(mixedAdditionWithOptionalParams("Epicode"));

// ESEMPIO CON UNKNOWN TYPE
// let maybe: unknown;
// if (maybe === true) {
//   const myBoolean: boolean = maybe;
//   // const myNewString: string = maybe; // errore, boolean (maybe) non è assegnabile al tipo stringa
//   console.log(myBoolean);
// }

// if (typeof maybe === "string") {
//   const myNewString: string = maybe; // maybe ha acquisito grazie al contesto del suo condizionale, il tipo "string", assegnabile quindi alla variabile con tipo stringa
//   console.log(myNewString);
// }

// ARRAY

const myArray = [1]; // il tipo di questo array è stato inferito con number[], cioè array di numeri

myArray.push(50); // potremo pushare solo numeri
console.log(myArray);

// const myArray2: (string | number)[] = [];
// const myArray2: Array<StringOrNumber> = []; // sintassi alternative
const myArray2: StringOrNumber[] = [];
myArray2.push("Stefano");
myArray2.push(1000);
myArray2.push("Miceli");

myArray2.forEach(el => console.log(el.toString())); // mettere un punto dopo "el" ci darà suggerimenti riguardo ai metodi disponibili a entrambi "string" e "number"
// myArray2.forEach(el => console.log(el.toFixed())); // questo non funzionerebbe ed infatti TS ci avvisa
// console.log(myArray2);

const myArray3: StringOrNumber[] = []; // non siamo sicuri di quale tipo-valore sarà in una precisa posizione...

myArray3.push("Stefano");
myArray3.push(50);

console.log(myArray3);

// TUPLE

const myMixedTuple: [string, number] = ["", 0];
const myMixedTuple2: [null | string, number] = ["stringa", 0];
console.log(myMixedTuple2);

myMixedTuple2[0]?.length; // selezionare ora una posizione specifica nell'array ci verranno suggeriti solo metodi specifici per quel tipo
// il punto di domanda va a gestire l'eventualità che ci torni null come valore

// OGGETTI

// fare l'hover sull'oggeetto ci indicherà già i tipi per ogni proprietà
const obj = {
  name: "Stefano",
  surname: "Miceli",
  country: "Italy",
  hairColor: "Brown",
  height: 180
};
// l'oggetto dona alle proprietà un tipo semplicemente inferendolo in base al valore

// scrivere obj. ci darà suggerimenti validi e specifici sia su proprietà disponibili sia sui metodi disponibili per singolo tipo di proprietà
console.log(obj.hairColor.length);

const obj2 = {
  firstName: "Mario",
  lastName: "Rossi"
};
// come fare a mantenere coerenza tra oggetti simili? (stesse proprietà e stesso TIPO di valori)

// esempio con Custom Type o Alias
type EpicodeTeacher = {
  name: string;
  surname: string;
  age: number;
  country: string;
  isRemote?: boolean;
};

const obj3: EpicodeTeacher = {
  name: "Riccardo",
  surname: "Gulin",
  age: 22,
  country: "Italy",
  isRemote: false
};

const obj4: EpicodeTeacher = {
  name: "Stefano",
  surname: "Gulin",
  age: 22,
  country: "Italy"
};

type HumanBeing2 = {
  name: string;
  gender: string;
};

type EpicodeStudent2 = {
  batch: string;
};

// TYPE INTERSECTION - intersezione di due tipi
const studente4: HumanBeing2 & EpicodeStudent2 = {
  name: "Stefano",
  gender: "Male",
  batch: "FS0722"
};

// esempio con interface
interface HumanBeing {
  name: string;
  eyes: boolean;
  height: number;
  nrOfLimbs?: number;
}

interface EpicodeStudent extends HumanBeing {
  hasWebcam: boolean;
  batch: string;
}

const studente1: EpicodeStudent = {
  name: "Giovanni",
  eyes: true,
  height: 190,
  hasWebcam: true,
  batch: "FS0822ITA"
};

const studente2: EpicodeStudent = {
  name: "Andrea",
  eyes: true,
  height: 190,
  hasWebcam: true,
  batch: "FS0822ITA"
};

const studente3: EpicodeStudent = {
  name: "Francesco",
  eyes: true,
  height: 190,
  hasWebcam: true,
  batch: "FS0822ITA"
};

// inserire in un array gli oggetti generati in maniera coerente dall'interfaccia
// const arrayOfStudents: Array<EpicodeStudent> = [];
const arrayOfStudents: EpicodeStudent[] = [];

arrayOfStudents.push(studente1);
arrayOfStudents.push(studente2);
arrayOfStudents.push(studente3);

console.log(arrayOfStudents);

arrayOfStudents.forEach(s => {
  console.log(s.batch.substring(0, 3)); // TS ci suggerisce i metodi consoni anche per le proprietà di un oggetto che ci arriva dal parametro del forEach!
  // prova a scrivere s. e noterai che conosce perfettamente le proprietà disponibili su quell'oggetto, tutto grazie alla struttura dei tipi che abbiamo creato in precedenza
});

// GENERICS
// un generic è un parametro di tipo per un'interfaccia

interface EpicodeUnit<T> {
  name: string;
  assignedTeacher: string;
  topics: T;
  //   topics: string | string[] | { topic: string[] }[];
  // in alternativa al generic, ma quando diventa così complesso il generic è decisamente meglio.
}
// fornisco i parametri all'invocazione dell'interfaccia
const U1: EpicodeUnit<string> = {
  name: "Unit 1",
  assignedTeacher: "Riccardo",
  topics: "HTML & CSS"
};
// fornisco i parametri all'invocazione dell'interfaccia
const U2: EpicodeUnit<string[]> = {
  name: "Unit 2",
  assignedTeacher: "Stefano C",
  topics: ["UX", "UI", "FLEX", "GRID", "ANIMATIONS", "ADV JS", "ASYNC JS"]
};

interface Topic {
  topic: string[];
}

// fornisco i parametri all'invocazione dell'interfaccia
// const U3: EpicodeUnit<{ topic: string[] }[]> = { // alternativa senza interfaccia dedicata per Topic
const U3: EpicodeUnit<Topic[]> = {
  name: "Unit 2",
  assignedTeacher: "Stefano M",
  topics: [
    { topic: ["React", "State", "Props", "Hooks", "Router"] },
    { topic: ["Redux", "Redux-persist", "Encryption"] },
    { topic: ["TypeScript-Intro", "TypeScript with React"] }
  ]
};

// nota come il codice in index.js è privo di controlli e types di TS, perché i controlli vengono fatti a compile time, a monte, prima del runtime, prima che venga eseguito dal motore JS
