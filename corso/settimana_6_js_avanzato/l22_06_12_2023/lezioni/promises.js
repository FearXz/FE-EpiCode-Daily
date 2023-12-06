const myPromise = () =>
  // la mia funzione ritorna una Promise (costruttore di oggetto con metodi specifici già associati)

  new Promise((resolve, reject) => {
    // la promise richiede una callback function così configurata: un parametro resolve e uno reject. Entrambi sono FUNZIONI passate dal costruttore stesso.

    const randTime = Math.floor(Math.random() * 3000);
    const randTime2 = Math.floor(Math.random() * 3000);

    const fetchedData = "La promise si è risolta correttamente";

    // quale funzione viene chiamata per prima determinerà lo status finale di risoluzione della promise stessa (positivo/negativo)

    // setTimeout(() => {
    //   if (fetchedData) {
    //     resolve(fetchedData);
    //   } else {
    //     reject("HUSTON WE HAVE A PROBLEM!");
    //   }
    // }, randTime);

    setTimeout(() => reject("HUSTON WE HAVE A PROBLEM!"), randTime2);
    // chiamare reject determina uno status negativo e farà scattare l'esecuzione del metodo .catch() sull'oggetto Promise

    setTimeout(() => resolve(fetchedData), randTime);
    // chiamare resolve determina uno status positivo e farà scattare l'esecuzione del metodo .then() sull'oggetto Promise

    // l'argomento delle due funzioni (resolve/reject) verrà passato al parametro della callback corrispondente a then o catch
  });

// console.log(myPromise()); // NON CERCARE MAI DI LEGGERE IN MODO SINCRONO UN VALORE CHE ARRIVA IN MANIERA A-SINCRONA, leggeresti Promise<pending>

myPromise()
  // then si attiva quando lo status della Promise diventa "resolved" (positivo)

  .then(message => {
    console.log("1", message);
    return myPromise(); // ritornare una promise mi permette di aspettarne il risultato concatenando un nuovo then al precedente
  })
  .then(message => {
    // qui trovo il messaggio di risoluzione della seconda Promise
    console.log("2", message);
  })
  .catch(error => console.log("ERROR: ", error));
// catch si attiva quando lo status della Promise diventa "rejected" (negativo)
