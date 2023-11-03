function clock() {
    var orologio = new Date();
    var h = orologio.getHours();
    var m = orologio.getMinutes();
    var s = orologio.getSeconds();
    parseInt(m) < 10 ? m = '0' + m : null; //per mettere lo 0 sui minuti minori di 10
    parseInt(s) < 10 ? s = '0' + s : null;
    document.formOrologio.textOrologio.value = h + ' : ' + m + ' : ' + s;
    window.setTimeout('clock()', 1000);
}