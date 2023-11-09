/*
1. funzione per generare tabellone
2. funzione per scrivere i numeri push arary
3. funzione associata al bottone che genera numeri random
4. funzione che aggiunge una classList.add('selected')
EXTRA
5. funzione che genera tabelline da 24
*/

const numeriEstratti = []

const createTable = function () {
    const container = document.getElementById('tabellone')

    for (let i = 0; i < 76; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cellaTabellone')
        cell.innerText = i + 1

        container.appendChild(cell)
    }
}

const generaNumero = function () {
    
    const num = Math.floor(Math.random() * 76 + 1)
    let newNumber = num;
    while (numeriEstratti.includes(newNumber)) {
        newNumber = Math.floor(Math.random() * 76 + 1)
    }
    return newNumber
}
/*
const estraiNumero = function () {
    let newNumber = generaNumero()
    while(numeriEstratti.includes(newNumber)){
        newNumber = generaNumero()
    }
    numeriEstratti.push(newNumber)
    document.getElementById('generatedNumber').innerText = newNumber;
    console.log(numeriEstratti)
}*/
const estraiNumero = function () {
    if (numeriEstratti.length < 76) {
        let newNumber = generaNumero()
        numeriEstratti.push(newNumber)
        document.getElementById('generatedNumber').innerText = newNumber;
    } else {
        document.getElementById('generatedNumber').innerText = 'STOP!';
    }
    console.log(numeriEstratti)
}

const segnaEstratti = function () {
    const all76Div = document.getElementsByClassName('cellaTabellone')
    const all76DivArray = Array.from(all76Div);
    all76DivArray.forEach((div) => {
        if (numeriEstratti.includes(parseInt(div.innerText))) {
            div.classList.add('selected')
        }
    })
}
const createTabellina = function () {
    const container = document.getElementById('containerTabelline')
    let randomArray = [];
    const h1 = document.createElement('h1')
    h1.innerText = 'TABELLINA';
    const tabellina = document.createElement('div')
    tabellina.classList.add('tabellina')
    container.appendChild(h1)
    container.appendChild(tabellina)

    for (let i = 0; i < 26; i++) {
        const cell = document.createElement('div')
        cell.classList.add('casellaTabellina')
        let randomNumber= Math.floor(Math.random() * 76 + 1);
        while (randomArray.includes(random)) 
        {
            randomNumber = Math.floor(Math.random() * 76 + 1)
        }
        randomArray.push(randomNumber)
        cell.innerText = randomNumber
        tabellina.appendChild(cell)
    }

}








createTable();
const newNumberButton = document.getElementById('newNumber')
newNumberButton.addEventListener('click', function () {
    estraiNumero();
    segnaEstratti();
})

const newTabellinaButton = document.getElementById('newTabellina')
newTabellinaButton.addEventListener('click',createTabellina)


