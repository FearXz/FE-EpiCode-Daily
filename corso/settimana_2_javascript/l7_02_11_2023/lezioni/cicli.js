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

var utenti1 = ['mario','peppe','aldo','giovanni','giacomo'];
var utenti2 = ['mario2','peppe2','aldo2','giovanni2','giacomo2'];

for (i=0; i<utenti1.length;i++) {
    console.log(utenti1[i]);
}
for (elemento in utenti2) {
    console.log(utenti2[elemento]);
}
