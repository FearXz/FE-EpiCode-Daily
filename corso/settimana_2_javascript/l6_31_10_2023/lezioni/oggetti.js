var oggettoVuoto = {};
var persona = {
    nome:'Federico',
    cognome:'DeAmbrosis',
    eta:42
};
var persona2 = {
    nome:'Federico',
    cognome:'DeAmbrosis',
    eta:42,
    indirizzo: {
        via:'pippo',
        numero: 1,
        cap: '00100',
        citta: 'Milano'
    }
};

// accedere a proprietà oggetto : dot notation
var nome = persona.nome;
//oppure ma , usato solo se i nomi degli atributi hanno caratteri speciali.
var nome = persona["nome"];
//mostrare citta in console
console.log(persona2.indirizzo.citta);
//definisco una nuova proprietà dell'oggetto. gli oggetti sono dinamici.
persona2.residenza = "Milano";
console.log(persona2);
//oppure prima dichiaro un oggetto e poi lo inizializzo
var persona3 ={};
persona3.nome= 'lui';
persona3.cognome='egli';
persona3.eta='50';
persona3.indirizzo = {
    via:'pippo',
    numero:1
};
// cancellare un attributo

delete persona3.eta;
console.log(persona3);
