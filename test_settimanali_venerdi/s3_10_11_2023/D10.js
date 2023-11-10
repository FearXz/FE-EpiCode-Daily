/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log('esercizio A');
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log('esercizio B');
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: 'Omar',
  surname: 'LoGiudice',
  age: 31,
};
console.log('esercizio C');
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log('esercizio D');
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ['HTML', 'Css'];
console.log('esercizio E');
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push('Js');
console.log('esercizio F');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log('esercizio G');
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  let random = Math.floor(Math.random() * 6 + 1);
  return random;
}
console.log('esercizio 1');
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else if (num1 < num2) {
    return num2;
  }
  else { return 'Sono uguali'; }
}
console.log('esercizio 2');
console.log(whoIsBigger(10, 12));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(string) {
  let arrayParole = string.split(" ");
  return arrayParole;
}
console.log('esercizio 3');
console.log(splitMe('Volevo fare il kebabbaro'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(string, bool) {
  if (bool) {
    return string.substring(1);
  } else {
    return string.substring(0, string.length - 1);
  }
}
console.log('esercizio 4');
console.log(deleteOne('Da grande farò il kebabbaro', true));
console.log(deleteOne('Da grande farò il kebabbaro', false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(string) {
  // Utilizzo di una regex per rimuovere le cifre numeriche
  let stringaSenzaNumeri = string.replace(/\d/g, '');
  return stringaSenzaNumeri;
}
console.log('esercizio 5');
console.log(onlyLetters('mario ha 5 banane e 20 gatti , mario ha 30 anni, povero mario 999'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(emailString) {

  let splitted = emailString.split('@');
  if (splitted.length == 2) {
    if (splitted[0].length > 0 && splitted[1].length > 0 && splitted[1].includes('.')) {
      let emailok = splitted.join('@')
      console.log('è un email : ' + emailok)
      return true;
    } else { console.log('non è una mail'); }
  } else { console.log('non è una mail'); }
}
console.log('esercizio 6');
isThisAnEmail('ciao@cia.o');
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  let day = new Date();
  currentDay = day.getDay();
  arrayGiorni = ['domenica', 'lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato']
  return arrayGiorni[currentDay];
}
console.log('esercizio 7');
console.log(whatDayIsIt());


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(nVolte) {
  let arrayTiri = [];
  let sum = 0;
  for (let i = 0; i < nVolte; i++) {
    let tiroDado = dice()
    arrayTiri.push(tiroDado);
    sum += parseInt(arrayTiri[i]);
  }
  let ritorna = { somma: sum, valori: arrayTiri, }
  console.log(ritorna)
  return ritorna;
}
console.log('esercizio 8');
rollTheDices(8);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(dataPrecedente) {
  let data = new Date();
  let dataNow = data.getTime();
  let dataPrima = dataPrecedente.getTime();
  let intervalloMillisecondi = dataNow - dataPrima;
  let IntervalloInDay = intervalloMillisecondi / (24 * 60 * 60 * 1000);
  console.log(Math.floor(IntervalloInDay))
  return Math.floor(IntervalloInDay);
}
console.log('esercizio 9');
let dataDaConfrontare = new Date("2021/11/10")
howManyDays(dataDaConfrontare);
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {

  let date = new Date('10/10/2023');
  let giorno = date.getDate();
  let mese = date.getMonth();

  let mioCompleanno = new Date('10/10/1992');
  let giornoComp = mioCompleanno.getDate();
  let meseComp = mioCompleanno.getMonth();

  if (giorno == giornoComp && mese == meseComp) {
    console.log('OGGI È IL MIO COMPLEANNO')
    return true;
  }
  else {
    console.log('OGGI  NON È IL MIO COMPLEANNO')
    return false;
  }
}
console.log('esercizio 10');
isTodayMyBirthday()
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const studente = { nome: 'fra', congome: 'Lobbia', voto: 'pessimo' }
const stringa = 'voto';

function deleteProp(oggetto, stringa) {
  delete oggetto[stringa];
  return oggetto;
}
console.log('esercizio 11');
console.log(deleteProp(studente, stringa));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  let ultimoFilm = movies[0];
  for (let i = 0; i < movies.length; i++) {

    if (parseInt(ultimoFilm.Year) < parseInt(movies[i].Year)) {
      ultimoFilm = movies[i];
    }
  }
  return ultimoFilm;
}
console.log('esercizio 12');
console.log(newestMovie());



/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies() {
  return movies.length;
}
console.log('esercizio 13');
console.log(countMovies());
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears() {
  let soloYears = [];

  for (let i = 0; i < movies.length; i++) {
    let year = movies[i].Year;
    soloYears.push(year);
  }
  return soloYears;
}
console.log('esercizio 14');
console.log(onlyTheYears());
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  let lastMillennium = [];

  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) < 2000) {

      let year = movies[i];
      lastMillennium.push(year);
    }
  }
  return lastMillennium;
}
console.log('esercizio 15');
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  let sumAllTheYears = 0;

  for (let i = 0; i < movies.length; i++) {
    sumAllTheYears += parseInt(movies[i].Year)
  }
  return sumAllTheYears;
}
console.log('esercizio 16');
console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(search) {
  let searchByTitle = [];

  for (let i = 0; i < movies.length; i++) {
    let titolo = movies[i].Title;

    if (titolo.includes(search)) {
      let risultatoTrovato = movies[i];
      searchByTitle.push(risultatoTrovato);
    }
  }
  return searchByTitle;
}
console.log('esercizio 17');
console.log(searchByTitle('Lord'));


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(search) {
  let match = [];
  let unmatch = [];

  for (let i = 0; i < movies.length; i++) {
    let titolo = movies[i].Title;
    let risultatoTrovato = movies[i];

    if (titolo.includes(search)) {

      match.push(risultatoTrovato);
    }
    else {
      unmatch.push(risultatoTrovato);
    }
  }
  let oggetto = { Match: match, Unmatch: unmatch }
  return oggetto;
}
console.log('esercizio 18');
console.log(searchAndDivide('Lord'));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(movies, index) {
  movies.splice(index, 1);
  return movies
}
console.log('esercizio 19');
console.log(removeIndex(movies, 10));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectId() {
  let id = document.getElementById('container');
  return id;
}
console.log('esercizio 20');
selectId();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectTd() {
  let td = document.getElementsByTagName('td');
  return td;
}
console.log('esercizio 21');
selectId();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function stampaTd() {
  let td = document.getElementsByTagName('td');
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
}
console.log('esercizio 22');
stampaTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina. 
*/
function colorAllLink() {
  let link = document.getElementsByTagName('a');
  for (let i = 0; i < link.length; i++) {
    link[i].style.background = 'red';
  }
}
console.log('esercizio 23');
colorAllLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*//* È MESSO IN UN COMMENTO ALTRIMENTI NON STAMPAVA GLI ALTRI ESERCIZI SOTTO
function addListElement() {
  let ul = document.getElementById('myList');
  let li = document.createElement('li');
  li.innerText = 'ciao sono un li';
  ul.appendChild(li);

}
console.log('esercizio 24');
addListElement();
*/
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function liRemove() {

  let li = document.querySelectorAll('#myList li');
  let liCont = li.length;
  for (let i = 0; i < liCont; i++) {
    li[0].remove();
  }
}
console.log('esercizio 25');
liRemove();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addTest() {

  let tr = document.getElementsByTagName('tr');

  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add('test');
  }
}
console.log('esercizio 26');
addTest();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(altezza) {
  let stella = '*';
  let albero = '';
  for (let i = 0; i < altezza; i++) {
    let stelle = stella.repeat(i + 1);
    albero += stelle + '\n';
  }
  console.log(albero);
}
console.log('esercizio 27');
halfTree(8);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(altezza) {
  let spazio = ' ';
  let stella = '*';
  let albero = '';

  for (let i = 0; i < altezza; i++) {

    let spazi = spazio.repeat(altezza - i);
    let stelle = stella.repeat(1 + (i * 2));
    albero += spazi + stelle + '\n';
  }
  console.log(albero);
}
console.log('esercizio 28');
tree(8);



/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(numero) {

  if (numero <= 1) {
    console.log('Un numero naturale, maggiore di 1, si dice primo se è divisibile SOLO per 1 e per se stesso');
    return false
  }
  let i = 2;
  while (numero % i != 0) {
    i++;
  }
  if (numero == i) {
    return true
  } else { return false }
}
console.log('esercizio 29');
console.log(isItPrime(17));

/*1,2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97*/

