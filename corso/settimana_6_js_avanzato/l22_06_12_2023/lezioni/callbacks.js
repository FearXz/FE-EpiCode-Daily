const waitAndMessage = () => {
  setTimeout(() => {
    // questo console log sebbene compare prima nel codice verrà visto dopo il secondo, dopo almeno 3.5s
    console.log("sono passati 3.5s");
  }, 3500);

  // questo console log non è subordinato ad una operazione asincrona, verrà letto in maniera asincrona e sarà il primo che vedremo
  console.log("Io sono l'ultimo");
};

// --------------------------------------------------------------------------------------------------------------------------------------------------

// definizione di funzione (vedi più in basso per il punto di ingresso della risoluzione del codice)
const phoneCall = (id, callback) => {
  // callback è un parametro, quindi un dato dinamico che possiamo decidere noi al momento della chiamata della funzione
  const randTime = Math.floor(Math.random() * 3000);
  // ci permette di utilizzare il dato creato in questa funzione in modi sempre diversi, prima con un messaggio e poi un altro e un altro ancora.

  setTimeout(() => {
    callback(id, randTime); // normalAnswer(randTime); grannysAnswer(randTime);  ((time) => console.log("📞 Che vuoi?!? " + time / 1000 + "s"))()
  }, randTime);

  console.log("☎️ *Il telefono sta squillando* (" + id + ")");
};

const normalAnswer = (id, time) => {
  console.log(id + ") 📞 Pronto? Chi parla? " + time / 1000 + "s");
};

const grannysAnswer = (id, time) => {
  console.log(id + ") 📞 Pronto? Tesoro hai mangiato?? " + time / 1000 + "s");
};

// posso usare phoneCall e ricevere output differenti da ogni utilizzo,
// grazie al fatto che l'output dipende dalla callback che ho creato e fornito come secondo argomento
// ho quindi la flessibilità di decidere come usare il dato creato all'interno della funzione phoneCall in modi potenzialmente sempre diversi

// punti di ingresso 👇
phoneCall(1, normalAnswer);
phoneCall(2, grannysAnswer);
phoneCall(3, (id, time) => console.log(id + ") 📞 Che vuoi?!? " + time / 1000 + "s"));
// phoneCall();

// --------------------------------------------------------------------------------------------------------------------------------------------------
// callback in array methods
// reimplementazione di due metodi degli array per comprendere il funzionamento delle callback nel loro contesto
const arr = [20, 30, 50, 100];

const forEach = callback => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    callback(element);
  }
};

arr.forEach(element => console.log("il numero è: " + element));

const filter = callback => {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (callback(element)) {
      filteredArr.push(element);
    }
  }

  return filteredArr;
};

const filteredElements = arr.filter(element => element > 30);
console.log(filteredElements);
