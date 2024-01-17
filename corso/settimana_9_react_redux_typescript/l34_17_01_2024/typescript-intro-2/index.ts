console.log('CIAO MONDO3!')

let firstName = 'Stefano'

// TIPI DI DATO PRIMITIVI SUPPORTATI?
// string
// number
// boolean
// undefined e null
// any <-- sconsigliato da usare

// TIPIZZAZIONE FORTE DEI DATI (STRONGLY TYPED)
let student: string = 'Gianni'
student = 'Morandi'
// student = true <-- non ammesso

let myNumber: number = 50
myNumber = 100000
// myNumber = '100'

// TYPE INFERENCE
// TS è in grado di inferire automaticamente il tipo di una variabile grazie alla sua assegnazione iniziale
// poiché anotherStudent viene inizializzata con un valore stringa, allora la variabile nasce con tipo stringa implicitamente
let anotherStudent = 'Zucchero'
let anotherNumber = 1000

// quindi l'editor SA che anotherStudent è una stringa...
console.log(anotherStudent.toUpperCase())
// anotherNumber.toUpperCase() // <-- non si può fare su un numero! TS lo sa e vi segnala subito l'errore!

// il tipo "any" SPEGNE i controlli di TS, è un modo per aggirarne le regole e fare comunque quello che volete...
// ...a questo punto però siete anche liberi di fare errori!
let boh: any
// il valore è boh è undefined

// console.log(boh.filter((f) => f))

let numberAsString = '50'
console.log(parseInt(numberAsString) + 60)

const sayHello = () => {
  return 'Hello!'
}

let firstLetter = sayHello().slice(0, 1)
console.log(firstLetter) // 'H'

const addition = (num1, num2) => {
  return num1 + num2
}

console.log(addition(5, 6)) // 11
console.log(addition('5', '6')) // ??

// errore
// 56
// null

const additionWithCheck = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return 'i parametri non sono numeri'
  }
}

console.log(additionWithCheck(5, 6))
console.log(additionWithCheck('5', '6'))

// e in TS?
// nelle funzioni è possibile specificare con l'operatore : il TIPO dei parametri, in modo da vincolare
// l'esecuzione di una funzione solamente negli ambiti per cui era stata pensata
const additionInTS = (num1: number, num2: number) => {
  return num1 + num2
}

console.log(additionInTS(5, 6))
// console.log(additionInTS(5, '6')) // <-- errore nell'editor! funzione usata impropriamente

// UNION TYPES
let test: string | number | undefined = 500 // il suo possibile valore rientra in tutti i possibili numeri e tutte le possibili stringhe
test = 'Stefano'
test = undefined

// CUSTOM TYPE o TYPE ALIAS (normalmente scritti in PascalCase)
type StringOrNumber = string | number

let test2: StringOrNumber = '10' // ma anche 10 sarebbe un valore accettabile

// PARAMETRI OPZIONALI
const greetings = (name: string, greet?: string) => {
  return (greet || 'Hello') + ', ' + name
}

console.log(greetings('Giovanni', 'Goodbye'))
// voi vorreste che questa funziona possa funzionare anche con un parametro solo (solo con "name")
// è necessario quindi inserire su greet la direttiva "?", che lo marca come parametro opzionale

// TIPI DI DATO -NON- PRIMITIVI
// ARRAY

let arrayOfNames: Array<string | number> = ['Bianca', 'Giovanni', 'Lorenzo']

let arrayOfNumbers: (number | string)[] = [50, 49, 'Stefano']

let anotherWayOfTypingArray: Array<string> = ['Daniel', 'Cristina', 'Oleksandr']

let arrOfObjects: { firstName: string; lastName: string }[] = [
  {
    firstName: 'Stefano',
    lastName: 'Casasola',
  },
  {
    firstName: 'Diego',
    lastName: 'Banovaz',
  },
]

arrayOfNames.forEach((name) => {
  // console.log(name.slice(0, 1)) // in caso di array misto non ce lo fa fare, perchè name potrebbe essere un numero!
})

arrayOfNames.push(50)

// quello che non potete fare con la dichiarazione di tipo array (che sia con le [] o la parola Array) è stabilire
// il NUMERO degli elementi di un array e/o il loro posizionamento all'interno della struttura

let mixedArray: (string | number)[] = ['stefano', 10]
mixedArray = [10, 'stefano']

// ...ma con una tupla invece sì!
// TUPLA (tuple)
let tupleArray: [string, number] = ['stefano', 10]
// tupleArray = [10, 'stefano'] // <-- errore, perchè il primo elemento DEVE essere una stringa e il secondo DEVE essere un numero

// OGGETTI
let favouriteTeacher = {
  firstName: 'Stefano',
  module: 'Frontend',
}

console.log(favouriteTeacher.firstName.slice(0, 1))

favouriteTeacher.module = 'FullStack'

// devo creare un array di oggetti che abbia la seguente forma:
// {
//   topics: string[]
//   numberOfQuestions: number
//   result: number
//}

// INTERFACCE (sono ideali per stabilire in anticipo le forme degli oggetti)
interface Benchmark {
  topics: string[] // obbligatoria
  numberOfQuestions: number // obbligatoria
  result?: number // opzionale (con il ?)
}

const W1Benchmark: Benchmark = {
  topics: ['HTML', 'CSS'],
  numberOfQuestions: 35,
}

const W2Benchmark: Benchmark = {
  topics: ['JS'],
  numberOfQuestions: 40,
  result: 60,
}

const arrayOfBenchmarks: Benchmark[] = []
arrayOfBenchmarks.push(W1Benchmark)
arrayOfBenchmarks.push(W2Benchmark)

const arrayOfTopics: string[] = []

arrayOfBenchmarks.forEach((benchmark) => {
  // let topics: string[] = []
  benchmark.topics.forEach((topic) => {
    arrayOfTopics.push(topic)
  })
})
// ['HTML', 'CSS', 'JS']
console.log(arrayOfTopics)

// INTERFACES e EXTENDS
interface HumanBeing {
  height: number
  numberOfHands?: number
  hairColor: string
  hasMoustaches: boolean
}

const marioBros: HumanBeing = {
  hairColor: 'brown',
  height: 60,
  numberOfHands: 2,
  hasMoustaches: true,
}

interface SoccerPlayer extends HumanBeing {
  team: string
  favouriteFoot: string
}

const player: SoccerPlayer = {
  team: 'Genoa',
  favouriteFoot: 'left',
  hairColor: 'blonde',
  height: 175,
  hasMoustaches: false,
  // non ha numberOfHands, ma era una proprietà opzionale quindi il mio oggetto resta valido
}

// GENERICS
// Un GENERIC è un TIPO passato come ARGOMENTO ad un'interfaccia
// nella definizione di interfaccia lo si definisce e lo si assegna come tipo per una o più proprietà
// serve per rendere più RIUTILIZZABILE un'interfaccia (D R Y)
// va passato all'interfaccia tramite parentesi angolari < >

interface Address<A> {
  city: string
  street: string
  civicNumber: number
  zipCode: string
  area: A
}

interface AmericanArea {
  county: string
  state: string
}

const italianAddress: Address<string> = {
  city: 'Cagliari',
  street: 'via Roma',
  civicNumber: 1,
  zipCode: '09125',
  area: 'Sardinia',
}

const americanAddress: Address<AmericanArea> = {
  city: 'Seattle',
  street: '4th Avenue',
  civicNumber: 345,
  zipCode: '00000',
  area: {
    county: 'King',
    state: 'Washington',
  },
}
