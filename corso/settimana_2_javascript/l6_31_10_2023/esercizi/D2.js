/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1= 17.9;
let num2= 9.5;
let intNum1 =Math.floor(num1);
let intNum2 =Math.floor(num2);

console.log('num1 : '+num1);
console.log('num2 : '+num2);
console.log('intNum1 : '+intNum1);
console.log('intNum2 : '+intNum2);

if(intNum1>intNum2){
  console.log('il maggiore è : '+intNum1);
}
else if (Math.floor(num1)<Math.floor(num2)){
  console.log('il maggiore è : '+intNum2);
}
else {
  console.log('sono entrambi: '+intNum2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
if(Math.floor(intNum1) != 5){
  console.log('intNum not equal to : 5');
}
else {
  console.log('intNum1 is : 5');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if(intNum1%5 == 0){
  console.log(intNum1+' è divisibile per 5 ');
}
else{
  console.log(intNum1+' non è divisibile per 5 ');
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
if(intNum1==8 || intNum2==8){
  console.log('uno dei numeri è uguale ad 8');
}
else if (intNum1+intNum2==8){
  console.log('la loro somma è pari ad: 8');

}
else if(intNum1-intNum2==8 ||intNum2-intNum1==8){
  console.log('la loro sottrazione è pari ad: 8');
}
else{
  console.log('nessuno è 8 - la loro somma non è 8 - la loro sottrazione non è 8');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
let shipping = 10;
if(totalShoppingCart >=50){
  console.log('minimo spesa raggiunto\nil costo totale è : '+totalShoppingCart)
}
else{
  console.log('minimo spesa non raggiunto \nil costo totale è : '+(totalShoppingCart+shipping))
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let discount= 0.8;
if(totalShoppingCart*discount >=50){
  console.log('con lo sconto minimo spesa raggiunto\nil costo totale è : '+totalShoppingCart)
}
else{
  console.log('con lo sconto minimo spesa non raggiunto \nil costo totale è : '+(totalShoppingCart+shipping))
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//annido if
let mm1 =21;
let mm2 =20;
let mm3 =23;
console.log('valore 1: '+mm1);
console.log('valore 2: '+mm2);
console.log('valore 3: '+mm3);

if(mm1>=mm2 && mm1>=mm3)
{
  console.log('il primo è : '+mm1);
  if (mm2>=mm3)
  {
    console.log('il secondo è : '+mm2);
    console.log('il terzo è : '+mm3);
  }
  else{
    console.log('il secondo è : '+mm3);
    console.log('il terzo è : '+mm2);
  }
}
else if(mm2>=mm1 && mm2>=mm3)
{
  console.log('il primo è : '+mm2);
  if (mm1>=mm3)
  {
    console.log('il secondo è : '+mm1);
    console.log('il terzo è : '+mm3);
  }
  else{
    console.log('il secondo è : '+mm3);
    console.log('il terzo è : '+mm1);
  }
}
else if(mm3>=mm1 && mm3>=mm2)
{
  console.log('il primo è : '+mm3);
  if (mm2>=mm1)
  {
    console.log('il secondo è : '+mm2);
    console.log('il terzo è : '+mm1);
  }
  else{
    console.log('il secondo è : '+mm1);
    console.log('il terzo è : '+mm2);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore=8;
if (typeof(valore)=="string"){
  console.log(valore+' non è un numero, è una stringa');
}
else if (typeof(valore)=="number"){
  console.log(valore+' è un numero');
}
else {
  console.log(valore+' non è ne numero ne stringa');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 11;
if(numero%2==0){
  console.log(numero+' è pari');
}
else{
  console.log(numero+' è dispari');
}

 /*ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10
if (val < 5) {
  console.log("minore di 5");
}
else if (val < 10) {
  console.log("minore di 10");
}
else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city='Toronto';
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/


/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/


/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let array=[];
array=[1,2,3,4,5,6,7,8,9,10];
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.splice(array.length-1,1,100);
console.log(array);
