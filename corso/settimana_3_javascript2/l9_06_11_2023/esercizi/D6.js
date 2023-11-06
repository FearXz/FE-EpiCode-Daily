/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatena(str1, str2) {
  let newString = str1.slice(0, 2).concat(str2.slice(str2.length - 3, str2.length));
  return newString;
}
console.log(concatena('ciccio', 'pasticcio'));


/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function randomArray() {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    randomArray[i] = Math.floor(Math.random() * 101);
  }
  return randomArray;
}
console.log(randomArray());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
/*
let numPari = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 20, 33, 55, 66, 72, 81];
function checkPari(arrayN) {
  let arrayP = [];
  arrayP = arrayN.filter((elemento) => elemento %2==0);
  return arrayP;
}
console.log(checkPari(numPari));
*/
let numPari = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 20, 33, 55, 66, 72, 81];
function checkPari(arrayN) {
  let arrayP = [];
  arrayP = arrayN.filter(function (elemento) { return elemento % 2 == 0 });
  return arrayP;
}
console.log(checkPari(numPari));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
let sum;
const numForSum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumArrayForEach(numForSum));
/*
function sumArrayForEach(arrayN) {
  let somma = 0;
  arrayN.forEach(function (elemento) { somma += elemento; });
  return somma;
}
*/
function sumArrayForEach(arrayN) {
  let somma = 0;
  arrayN.forEach((elemento) => somma += elemento);
  return somma;
}



/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const numberReduce = [15, 70, 35];
console.log(reduceArrayN(numberReduce));
/*
function reduceArrayN(arrayN) {
  let risultato;
  risultato = arrayN.reduce(function(totalValue,singleValue) {return totalValue+= singleValue});
  return risultato;
}*/
function reduceArrayN(arrayN) {
  return arrayN.reduce((totalValue, singleValue) => totalValue += singleValue);
}


/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const numberArray = [4, 9, 16, 25];
const n = 6;
console.log(sommaMap(numberArray, n));

function sommaMap(arrayN, n) {
  let arrayRisultato = [];
  arrayRisultato = arrayN.map(function (singleElement) { return singleElement += n });
  return arrayRisultato;
}
/*
function sommaMap(arrayN, n) {
  return arrayN.map((singleElement) => singleElement+=n);
}
*/

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const stringhe = ['ciao', 'kebab', 'pistacchio', 'burro'];
console.log(lengthMap(stringhe));

function lengthMap(array) {
  return array.map(function (x) { return x.length });
}
/*
function lengthMap(array) {
  return array.map((x) =>  x.length);
}
*/

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function arrayDispari() {
  let array = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
      array.push(i);
    }
  }
  return array;
}
console.log(arrayDispari());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
const movie1 = [...movies];
/* OK
const oldmovie = (array) => {
  let result = { Year: 2100 }
  array.forEach((array) => {
    let currentYear = parseInt(array.Year)
    if (currentYear < result.Year) {
      result = array
    }
  })
  return result;
}*/
function oldmovie(array) {
  let result = { Year: 2100 }
  array.forEach(function (array) {
    if (parseInt(array.Year) < result.Year) {
      result = array
    }
  })
  return result;
}
console.log(oldmovie(movie1));

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
const movie2 = [...movies];
function countMovie(array) {
  return array.length;
}
console.log(countMovie(movie2));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const movie3 = [...movies];
console.log(mapTitle(movie3));

function mapTitle(array) {
  return array.map(function (array) { return array.Title; });
}

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
const movie4 = [...movies];
function check2000(array) {
  return array.filter(function (array) { return parseInt(array.Year) > 1999 });
}
console.log(check2000(movie4));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const movie5 = [...movies];
console.log(sumArrayString(movie5));
/*
function sumArrayString(array) {
  let sommaAnni = array.map(film => film.Year);
  let somma = 0;
  somma = sommaAnni.reduce((totale, num) => parseInt(totale) + parseInt(num));
  return somma;
}*/
function sumArrayString(array) {

  return array.reduce(function (totale, valoreArray) { return totale += parseInt(valoreArray.Year) }, 0);
}


/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const movie6 = [...movies];
console.log(findimdbID(movie6));

function findimdbID(array) {
  return array.filter(function (array) { return array.imdbID == 'tt2395427' });
}


/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
const movie7 = [...movies];
console.log(checkInYear(movie7, 2012));

function checkInYear(array, anno) {
  return array.findIndex((array) => {return parseInt(array.Year) == anno});
}
