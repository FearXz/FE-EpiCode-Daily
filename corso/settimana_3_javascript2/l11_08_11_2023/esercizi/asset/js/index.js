
const handleSubmit = function (e) {
    e.preventDefault()     // evita comprtamento di default        
    addTask()
    attachComplete()
    attachDelete()
}

const addTask = function () {

    let inputField = document.getElementById('inputText').value;

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

}

const attachComplete = function () {

    const allP = document.querySelectorAll('p');

    for (let i = 0; i < allP.length; i++) {
        allP[i].addEventListener('click', function () { this.classList.toggle('line') })
    }

}

const attachDelete = function () {

    const task = document.querySelectorAll('.task')
    const remove = document.querySelectorAll('.remove')

    for (let i = 0; i < task.length; i++) {
        remove[i].addEventListener('click', function () { task[i].remove() })
    }

}

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}