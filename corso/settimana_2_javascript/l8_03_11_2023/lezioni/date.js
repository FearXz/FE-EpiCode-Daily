var data = new Date(); //costruttore data
var Hh, Mm, Ss, mm;
Hh = data.getHours() + ' : ';
Mm = data.getMinutes() + ' : ';
Ss = data.getSeconds();
document.write('Sono le ore ' + Hh + Mm + Ss);
document.write('<br> <br>');

//-----------------------//
var gg, mm, aaaa;
gg = data.getDate() + '/';
mm = data.getMonth() + 1 + '/';
aaaa = data.getFullYear();
document.write('Oggi è il ' + gg + mm + aaaa);
document.write('<br> <br>');

//-------------------------//
var set, gg, mm, aaaa, h, m, s;
var mesi = [];
var giorni = [];
//tabella mesi
mesi[0] = 'Gennaio';
mesi[1] = 'Febbraio';
mesi[2] = 'Marzo';
mesi[3] = 'Aprile';
mesi[4] = 'Maggio';
mesi[5] = 'Giugno';
mesi[6] = 'Luglio';
mesi[7] = 'Agosto';
mesi[8] = 'Settmbre';
mesi[9] = 'Ottobre';
mesi[10] = 'Novembre';
mesi[11] = 'Dicembre';
//tabella giorni
giorni[0] = 'Domenica';
giorni[1] = 'Lunedi';
giorni[2] = 'Martedi';
giorni[3] = 'Mercoledi';
giorni[4] = 'Giovedi';
giorni[5] = 'Venerdi';
giorni[6] = 'Sabato';
//estrae i giorni della settimana
set = giorni[data.getDay()] + ' ';
gg = data.getDate() + ' ';
mm = mesi[data.getMonth()] + ' ';
aaaa = data.getFullYear();
h = data.getHours()+ ' : ';
m = data.getMinutes()+ ' : ';
s = data.getSeconds();
document.write('Oggi : ' + set + gg + mm + aaaa + '<br> Ore : ' + h + m + s);