var _a;
console.log("Ciao TypeScript");
var x = "Ciao";
console.log(x);
// myString = "Miceli";
var myString = "1Stefano";
var myNumber = 30;
console.log(myString);
console.log(myNumber);
var myAnyVar = false; // Evitare l'utilizzo di any quanto più possibile
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
var sum = function (num1, num2) {
    var n1 = parseInt(num1);
    var n2 = parseInt(num2);
    if (typeof n1 === "number" && typeof n2 === "number" && !isNaN(n1) && !isNaN(n2)) {
        return n1 + n2;
    }
    else {
        return "usa valori numerici per i parametri!";
    }
};
var sumWithTypeScript = function (num1, num2) {
    return (num1 + num2).toString();
};
// Grazie alla type inference TS è in grado di rilevare il tipo del valore in uscita
// se volessimo avere un valore in particolare si potrebbe esplicitarlo dopo le parentesi che definiscono la funzione ():string =>
console.log(sum("asda", 3));
console.log(sumWithTypeScript(50, 3));
// con l'operatore | si definsce un UNION TYPE
var mixedAddition = function (par1, par2) {
    if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
        return par1 + par2;
    }
    else {
        return "Abbiamo ricevuto una stringa";
    }
};
console.log(mixedAddition(2, 3));
var mixedAdditionWithAlias = function (par1, par2) {
    if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
        return par1 + par2;
    }
    else {
        return "Abbiamo ricevuto una stringa";
    }
};
console.log(mixedAddition(2, 5));
// funzine con parametro opzionale non obbligatorio
var mixedAdditionWithOptionalParams = function (str1, str2) {
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
var myArray = [1]; // il tipo di questo array è stato inferito con number[], cioè array di numeri
myArray.push(50); // potremo pushare solo numeri
console.log(myArray);
// const myArray2: (string | number)[] = [];
// const myArray2: Array<StringOrNumber> = []; // sintassi alternative
var myArray2 = [];
myArray2.push("Stefano");
myArray2.push(1000);
myArray2.push("Miceli");
myArray2.forEach(function (el) { return console.log(el.toString()); }); // mettere un punto dopo "el" ci darà suggerimenti riguardo ai metodi disponibili a entrambi "string" e "number"
// myArray2.forEach(el => console.log(el.toFixed())); // questo non funzionerebbe ed infatti TS ci avvisa
// console.log(myArray2);
var myArray3 = []; // non siamo sicuri di quale tipo-valore sarà in una precisa posizione...
myArray3.push("Stefano");
myArray3.push(50);
console.log(myArray3);
// TUPLE
var myMixedTuple = ["", 0];
var myMixedTuple2 = ["stringa", 0];
console.log(myMixedTuple2);
(_a = myMixedTuple2[0]) === null || _a === void 0 ? void 0 : _a.length; // selezionare ora una posizione specifica nell'array ci verranno suggeriti solo metodi specifici per quel tipo
// il punto di domanda va a gestire l'eventualità che ci torni null come valore
// OGGETTI
// fare l'hover sull'oggeetto ci indicherà già i tipi per ogni proprietà
var obj = {
    name: "Stefano",
    surname: "Miceli",
    country: "Italy",
    hairColor: "Brown",
    height: 180
};
// l'oggetto dona alle proprietà un tipo semplicemente inferendolo in base al valore
// scrivere obj. ci darà suggerimenti validi e specifici sia su proprietà disponibili sia sui metodi disponibili per singolo tipo di proprietà
console.log(obj.hairColor.length);
var obj2 = {
    firstName: "Mario",
    lastName: "Rossi"
};
var obj3 = {
    name: "Riccardo",
    surname: "Gulin",
    age: 22,
    country: "Italy",
    isRemote: false
};
var obj4 = {
    name: "Stefano",
    surname: "Gulin",
    age: 22,
    country: "Italy"
};
// TYPE INTERSECTION - intersezione di due tipi
var studente4 = {
    name: "Stefano",
    gender: "Male",
    batch: "FS0722"
};
var studente1 = {
    name: "Giovanni",
    eyes: true,
    height: 190,
    hasWebcam: true,
    batch: "FS0822ITA"
};
var studente2 = {
    name: "Andrea",
    eyes: true,
    height: 190,
    hasWebcam: true,
    batch: "FS0822ITA"
};
var studente3 = {
    name: "Francesco",
    eyes: true,
    height: 190,
    hasWebcam: true,
    batch: "FS0822ITA"
};
// inserire in un array gli oggetti generati in maniera coerente dall'interfaccia
// const arrayOfStudents: Array<EpicodeStudent> = [];
var arrayOfStudents = [];
arrayOfStudents.push(studente1);
arrayOfStudents.push(studente2);
arrayOfStudents.push(studente3);
console.log(arrayOfStudents);
arrayOfStudents.forEach(function (s) {
    console.log(s.batch.substring(0, 3)); // TS ci suggerisce i metodi consoni anche per le proprietà di un oggetto che ci arriva dal parametro del forEach!
    // prova a scrivere s. e noterai che conosce perfettamente le proprietà disponibili su quell'oggetto, tutto grazie alla struttura dei tipi che abbiamo creato in precedenza
});
// fornisco i parametri all'invocazione dell'interfaccia
var U1 = {
    name: "Unit 1",
    assignedTeacher: "Riccardo",
    topics: "HTML & CSS"
};
// fornisco i parametri all'invocazione dell'interfaccia
var U2 = {
    name: "Unit 2",
    assignedTeacher: "Stefano C",
    topics: ["UX", "UI", "FLEX", "GRID", "ANIMATIONS", "ADV JS", "ASYNC JS"]
};
// fornisco i parametri all'invocazione dell'interfaccia
// const U3: EpicodeUnit<{ topic: string[] }[]> = { // alternativa senza interfaccia dedicata per Topic
var U3 = {
    name: "Unit 2",
    assignedTeacher: "Stefano M",
    topics: [
        { topic: ["React", "State", "Props", "Hooks", "Router"] },
        { topic: ["Redux", "Redux-persist", "Encryption"] },
        { topic: ["TypeScript-Intro", "TypeScript with React"] }
    ]
};
// nota come il codice in index.js è privo di controlli e types di TS, perché i controlli vengono fatti a compile time, a monte, prima del runtime, prima che venga eseguito dal motore JS
