const myObj = { name: "Stefano", surname: "Miceli" };

console.log(myObj);
console.log(myObj.__proto__); // Object
console.log(myObj.__proto__.__proto__); // null

const myStr = "Epicode";
console.dir(myStr);
console.log(myStr.__proto__); // String
console.log(myStr.__proto__.__proto__); // Object
console.log(myStr.__proto__.__proto__.__proto__); // null

const myArr = [];
console.log(myArr);
console.log(myArr.__proto__); // Array
console.log(myArr.__proto__.__proto__); // Object
console.log(myArr.__proto__.__proto__.__proto__); // null

const myFunc = function () {};
console.dir(myFunc);
console.log(myFunc.__proto__); // Function
console.log(myFunc.__proto__.__proto__); // Object
console.log(myFunc.__proto__.__proto__.__proto__); // null

let selectedProp = "nickname";

const myCat = {
  // creazione dinamica di proprietà di oggetto con bracket notation (interpreta il valore prima di utilizzarlo)
  [selectedProp]: "Kitty",
  age: 2,
  "fur-type": "long and fluffy",
  "date.of.adoption": "25/12/2023",
  parentCat: {
    name: "Smoky"
  }
};
// Accedere a proprietà di un oggetto:

// dot notation - accedere a proprietà di oggetti senza caratteri speciali
console.log(myCat.age); // 2
console.log(myCat.parentCat.name);

// bracket notation - per accedere a proprietà con caratteri speciali
console.log(myCat["date.of.adoption"]); // "25/12/2023"
// myCat.fur - type; // impossibile accedere alla proprietà fur-type
console.log(myCat["fur-type"]); // "long and fluffy"

console.log("SELECTED PROP: ", myCat[selectedProp]);

// creazione a posteriori di proprietà sull'oggetto già creato
myCat.numOfLegs = 4;

delete myCat.age;
console.log(myCat);

myCat.livesCount = { value: 7 };

myCat.livesCount.value = myCat.livesCount.value - 2;
console.log(myCat);

console.log(Object.keys(myCat)); // metodo sul costruttore che ritorna un array con chiavi del nostro oggetto in forma di stringa
console.log(Object.values(myCat)); // metodo sul costruttore che ritorna un array con valori del nostro oggetto
console.log(Object.entries(myCat)); // metodo sul costruttore che ritorna un array di sotto array con chiave/valore

const fruit = ["apple", "orange", "banana", "kiwi"];

// const a = fruit[0]
// const b = fruit[1]
// const c = fruit[2]
// const d = fruit[3]

// destrutturazione di array
// const [a, , c] = fruit;

// ...rest
const [a, ...rest] = fruit;

// ...rest parameter
const randomFunc = (p1, p2, ...rest) => {
  console.log(p1);
  console.log(p2);
  console.log(rest);
};
randomFunc("parametro1", "parametro2", 5, true, false, ["a", "b"]);

console.log(a, rest);

const [key, value] = ["b", 42];

const object1 = {
  a: "somestring",
  b: 42
};
const entriesArr = Object.entries(object1);

console.log(key);
console.log(value);

console.log(entriesArr); // [['a', 'somestring'], ['b', 42]]

// for (let i = 0; i < entriesArr.length; i++) {
//   const elem = entriesArr[i];

//   console.log("KEY", elem[0]);
//   console.log("VALUE", elem[1]);

//   const [key, value] = elem;
//   console.log("KEY", key);
//   console.log("VALUE", value);
// }

const object2 = {};

for (let elem of entriesArr) {
  const [key, value] = elem;

  console.log("KEY", key); // "a", "b"
  console.log("VALUE", value); // "somestring", 42

  object2[key] = value;
}

console.log("OBJECT1", object1);
console.log("OBJECT2", object2);

// const object3 = object1; // DA NON FARE MAI! modificare object3 corrisponderebbe ad una modifica anche sull'originale object1
// console.log("OBJECT3", object3);
// object3.b = 55;
console.log("CAMBIO PROP B in 55");
// console.log("OBJECT3", object3);
console.log("OBJECT2", object2);
console.log("OBJECT1", object1);

// metodo nr1 Object.assign() per clonare un oggetto in maniera superficiale (shallow copy)

const object4 = Object.assign({}, object1);
object4.b = 55;
object4.a = "another thing";
console.log("OBJECT1", object1);
console.log("OBJECT4", object4);

// metodo nr2 spread operator per clonare un oggetto in maniera superficiale (shallow copy)
const object5 = { ...object1 };
console.log(object5);

const anotherCat = { ...myCat, parentCat: { ...myCat.parentCat }, livesCount: { ...myCat.livesCount, value: 7 } };

anotherCat.parentCat.name = "Mr. Skippy";

console.log("ANOTHER CAT", anotherCat);
console.log("MY CAT", myCat);

// metodo nr3 con metodi di JSON per creare una DEEP COPY, una copia profonda

const anotherCatToString = JSON.stringify(anotherCat);
console.log(anotherCatToString);
const parsedAnotherCat = JSON.parse(anotherCatToString); // clone di anotherCat
console.log(parsedAnotherCat);

// metodo nr4 - deep copy con structuredClone
const deepCopyCat = structuredClone(anotherCat); // altro clone profondo
console.log(deepCopyCat);
