/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    let area = l1 * l2;
    return area;
}
console.log(area(5, 6));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazysum(x, y) {
    let sum;
    x = parseInt(x);
    y = parseInt(y);
    if (x == y) {
        return sum = (x + y) * 3;
    }
    else {
        return sum = x + y;
    }
}
console.log(crazysum(6, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazydiff(x) {
    let diff;
    if (x <= 19) {
        return diff = Math.abs(x - 19);
    }
    else {
        return diff = Math.abs((x - 19) * 3);
    }
}
console.log(crazydiff(50));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    n = parseInt(n);
    if ((n >= 20 && n <= 100) || n == 400) {
        return true;
    }
    else {
        return false;
    }
}
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(string) {
    let slice;
    slice = string.substring(0, 7);
    if (slice == 'EPICODE') {
        return string;
    }
    else {
        return 'EPICODE'.concat(string);
    }
}
console.log(epify('EPASDICODEASDASDASD'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(x) {
    x = Math.abs(x);
    if (x % 3 == 0 || x % 7 == 0) {
        return 'divisibile per 3 o 7';
    }
    else {
        return 'non divisibile';
    }
}
console.log(check3and7(21));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string) {
    let reverse = [];

    for (let i = 0; i < string.length; i++) {
        reverse[i] = string.slice(string.length - i - 1, string.length - i);
    }
    let revString = reverse.join();
    revString = revString.replaceAll(',', '');

    return revString;
}
console.log(reverseString('sucalandia'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa) {
    let singoleP = stringa.split(' ');
    var paroleMaiusc=[];

    for (var i = 0; i < singoleP.length; i++) {
        let parola = singoleP[i];
        let singParMaiusc = parola.charAt(0).toUpperCase()+parola.slice(1);
        paroleMaiusc.push(singParMaiusc);
    }
    return paroleMaiusc.join(' ');
}
console.log(upperFirst('ciao sei un kebabbaro cinese'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string){
    let cuttedString;
    cuttedString=string.substring(1, string.length - 1);
    return cuttedString;
}
console.log(cutString('sei un kebabbaro'));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    var random = [];
    for (var i = 0; i < n; i++) {
        let tempRandom = Math.floor(Math.random() * 11);
        random.push(tempRandom);
    }
    return random;
}
console.log(giveMeRandom(15));
