/*
while (i < 10) {
    console.log(i);
    i++;
}

var text = "";
var n = 1;
var i = 0;
while (n <= 10) {
    text += "Tabellina del " + n;

    i = 0;
    while (i <= 10) {
        text += '<br>' + n + 'x' + i + '=' + i * n;
        i++;
    }

    n++;
    text+= '<br> <br>'
}
document.getElementById('demo').innerHTML=text;
*/

var utenti = ['mario','peppe','aldo','giovanni','giacomo'];

for (i=0; utenti.length;i++) {
    console.log(utenti[i]);
}
