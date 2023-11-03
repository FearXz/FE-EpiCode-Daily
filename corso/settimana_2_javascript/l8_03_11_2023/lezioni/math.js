let text = 'testo a caso , molto a casissimo';
document.getElementById('demo1').innerHTML = text.length;

let part1 = text.slice('15');
document.getElementById('demo2').innerHTML = part1;

function myFunction() {
    let text = document.getElementById('demo3').innerHTML;
    document.getElementById('demo3').innerHTML = text.replace('kebab', 'pizza');
}

function myFunction2() {
    let text = document.getElementById('demo4').innerHTML;
    document.getElementById('demo4').innerHTML = text.toUpperCase();
}

document.getElementById('demo5').innerHTML = Math.max(10, 20, 5);

function myFunctionM1() {
    document.getElementById('demo6').innerHTML = Math.floor(Math.random() * 101);
    }