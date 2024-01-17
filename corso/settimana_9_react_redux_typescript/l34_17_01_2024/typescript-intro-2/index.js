console.log('CIAO MONDO3!');
var firstName = 'Stefano';
// TIPI DI DATO PRIMITIVI SUPPORTATI?
// string
// number
// boolean
// undefined e null
// any <-- sconsigliato da usare
// TIPIZZAZIONE FORTE DEI DATI (STRONGLY TYPED)
var student = 'Gianni';
student = 'Morandi';
// student = true <-- non ammesso
var myNumber = 50;
myNumber = 100000;
// myNumber = '100'
// TYPE INFERENCE
// TS è in grado di inferire automaticamente il tipo di una variabile grazie alla sua assegnazione iniziale
// poiché anotherStudent viene inizializzata con un valore stringa, allora la variabile nasce con tipo stringa implicitamente
var anotherStudent = 'Zucchero';
var anotherNumber = 1000;
// quindi l'editor SA che anotherStudent è una stringa...
console.log(anotherStudent.toUpperCase());
// anotherNumber.toUpperCase() // <-- non si può fare su un numero! TS lo sa e vi segnala subito l'errore!
// il tipo "any" SPEGNE i controlli di TS, è un modo per aggirarne le regole e fare comunque quello che volete...
// ...a questo punto però siete anche liberi di fare errori!
var boh;
// il valore è boh è undefined
// console.log(boh.filter((f) => f))
var numberAsString = '50';
console.log(parseInt(numberAsString) + 60);
var sayHello = function () {
    return 'Hello!';
};
var firstLetter = sayHello().slice(0, 1);
console.log(firstLetter); // 'H'
var addition = function (num1, num2) {
    return num1 + num2;
};
console.log(addition(5, 6)); // 11
console.log(addition('5', '6')); // ??
// errore
// 56
// null
var additionWithCheck = function (num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return 'i parametri non sono numeri';
    }
};
console.log(additionWithCheck(5, 6));
console.log(additionWithCheck('5', '6'));
// e in TS?
// nelle funzioni è possibile specificare con l'operatore : il TIPO dei parametri, in modo da vincolare
// l'esecuzione di una funzione solamente negli ambiti per cui era stata pensata
var additionInTS = function (num1, num2) {
    return num1 + num2;
};
console.log(additionInTS(5, 6));
// console.log(additionInTS(5, '6')) // <-- errore nell'editor! funzione usata impropriamente
// UNION TYPES
var test = 500; // il suo possibile valore rientra in tutti i possibili numeri e tutte le possibili stringhe
test = 'Stefano';
test = undefined;
var test2 = '10'; // ma anche 10 sarebbe un valore accettabile
// PARAMETRI OPZIONALI
var greetings = function (name, greet) {
    return (greet || 'Hello') + ', ' + name;
};
console.log(greetings('Giovanni', 'Goodbye'));
// voi vorreste che questa funziona possa funzionare anche con un parametro solo (solo con "name")
// è necessario quindi inserire su greet la direttiva "?", che lo marca come parametro opzionale
// TIPI DI DATO -NON- PRIMITIVI
// ARRAY
var arrayOfNames = ['Bianca', 'Giovanni', 'Lorenzo'];
var arrayOfNumbers = [50, 49, 'Stefano'];
var anotherWayOfTypingArray = ['Daniel', 'Cristina', 'Oleksandr'];
var arrOfObjects = [
    {
        firstName: 'Stefano',
        lastName: 'Casasola',
    },
    {
        firstName: 'Diego',
        lastName: 'Banovaz',
    },
];
arrayOfNames.forEach(function (name) {
    // console.log(name.slice(0, 1)) // in caso di array misto non ce lo fa fare, perchè name potrebbe essere un numero!
});
arrayOfNames.push(50);
// quello che non potete fare con la dichiarazione di tipo array (che sia con le [] o la parola Array) è stabilire
// il NUMERO degli elementi di un array e/o il loro posizionamento all'interno della struttura
var mixedArray = ['stefano', 10];
mixedArray = [10, 'stefano'];
// ...ma con una tupla invece sì!
// TUPLA (tuple)
var tupleArray = ['stefano', 10];
// tupleArray = [10, 'stefano'] // <-- errore, perchè il primo elemento DEVE essere una stringa e il secondo DEVE essere un numero
// OGGETTI
var favouriteTeacher = {
    firstName: 'Stefano',
    module: 'Frontend',
};
console.log(favouriteTeacher.firstName.slice(0, 1));
favouriteTeacher.module = 'FullStack';
var W1Benchmark = {
    topics: ['HTML', 'CSS'],
    numberOfQuestions: 35,
};
var W2Benchmark = {
    topics: ['JS'],
    numberOfQuestions: 40,
    result: 60,
};
var arrayOfBenchmarks = [];
arrayOfBenchmarks.push(W1Benchmark);
arrayOfBenchmarks.push(W2Benchmark);
var arrayOfTopics = [];
arrayOfBenchmarks.forEach(function (benchmark) {
    // let topics: string[] = []
    benchmark.topics.forEach(function (topic) {
        arrayOfTopics.push(topic);
    });
});
// ['HTML', 'CSS', 'JS']
console.log(arrayOfTopics);
var marioBros = {
    hairColor: 'brown',
    height: 60,
    numberOfHands: 2,
    hasMoustaches: true,
};
var player = {
    team: 'Genoa',
    favouriteFoot: 'left',
    hairColor: 'blonde',
    height: 175,
    hasMoustaches: false,
    // non ha numberOfHands, ma era una proprietà opzionale quindi il mio oggetto resta valido
};
var italianAddress = {
    city: 'Cagliari',
    street: 'via Roma',
    civicNumber: 1,
    zipCode: '09125',
    area: 'Sardinia',
};
var americanAddress = {
    city: 'Seattle',
    street: '4th Avenue',
    civicNumber: 345,
    zipCode: '00000',
    area: {
        county: 'King',
        state: 'Washington',
    },
};
