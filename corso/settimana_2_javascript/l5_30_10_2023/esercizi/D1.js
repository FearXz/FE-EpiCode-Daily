/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
Datatype:
Undefined: una variabile vuota , dichiarata e non inizializzata.
Null: tipo di dato vuoto che non identifica un tipo specifico di dato.
String: stringa di testo.
Number: valore numerico decimale o intero.
Boolean: tipo di dato che può essere vero o falso.
Object: tipo di dato in cui si possono definire coppie di dati attributo:valore.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myName = "OMAR";
console.log('il mio nome è:'+ myName );
// se usavo name come variabile risulta deprecata.


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('12 + 20 = '+ (12+20));
//oppure
var num1=12;
var num2=20;
var ris1= num1+num2;
console.log('il risultato di 12+20 è: '+ ris1);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x=12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// myName ="Lo Giudice";
// Uncaught TypeError: Assignment to constant variable. at D1.js:60:6
// myName è una costante , non posso cambiare il suo contenuto con il mio cognome.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("x=12 \n4-x = "+ (4-x));


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = 'john';
var name2 = 'John';

(name1 == name2) ? console.log('Sono uguali') : console.log('Sono diversi');
(name1 == name2.toLowerCase()) ? console.log('Sono Uguali') : console.log('Sono Diversi');

