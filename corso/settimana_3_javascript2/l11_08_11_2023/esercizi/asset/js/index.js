// tre cose 
// 1. funzione che fa addTask
// 2. funzione che gestisce attachComplete (riga sbarrata)
// 3. una funzione che attachDelete (cancella)
const handleSubmit = function (e) {
    e.preventDefault()              // evita il comportamento di default 
    addTask()
    attachComplete()
    attachDelete()
}

const addTask = function () {
    // agganciare gli elementi html come fatto stamattina 
    let inputField = document.getElementById('inputText').value;
    // stampare l'html necessario per aggiungere il value del mio campo input inputField.value
    let containerDiv = document.getElementById('containerDiv');
    let newDiv = document.createElement('div');
    let newP = document.createElement('p');
    let newB = document.createElement('button');
    newP.textContent = inputField;
    newB.innerHTML = 'Delete';
    newB.classList.add('remove');
    newDiv.classList.add('task');
    newDiv.appendChild(newP);
    newDiv.appendChild(newB);
    containerDiv.appendChild(newDiv);
    // ogni task che aggiungo aggiunge html -> +=
}

const attachComplete = function () {
    // aggancia gli elementi html
    let allP = document.querySelectorAll('p');

    // li ciclo ad esempio con for
    for (let i = 0; i < allP.length; i++) {
        let paragrafo = allP[i];
        paragrafo.addEventListener('click', function () { this.classList.toggle('line') })
    }
    // all'elemento che seleziono aggiunge|toglie una classe (toggle)
    // https://www.w3schools.com/js/js_this.asp this per leggere il contenuto
    // css ->   text-decoration: line-through;//this.classList.toggle('line')
}

const attachDelete = function () {
    const task = document.querySelectorAll('.task')
    const remove = document.querySelectorAll('.remove')
    // aggancia gli elementi html
    // ciclo for
    for (let i = 0; i < task.length; i++){
        remove[i].addEventListener('click',function() { task[i].remove()})
    }
    // metodo per rimuovere qualcosa .remove
}

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}