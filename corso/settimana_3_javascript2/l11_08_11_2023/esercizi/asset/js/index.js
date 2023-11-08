
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
    newP.innerHTML = inputField;
    newB.innerHTML = 'Delete';
    newB.classList.add('remove');
    newDiv.classList.add('task');
    newDiv.appendChild(newP);
    newDiv.appendChild(newB);
    containerDiv.appendChild(newDiv);
   // document.getElementById('inputText').value = '';

}

const attachComplete = function () {

    let all = document.querySelectorAll('.task');

    for (let i = 0; i < all.length; i++) {
        all[i].addEventListener('click', function () { this.classList.toggle('line') })
    }
}

const attachDelete = function () {

    const task = document.querySelectorAll('.task')
    const remove = document.querySelectorAll('.remove')

    for (let i = 0; i < task.length; i++) {
        remove[i].addEventListener('click', function () { this.parentNode.remove() })
    }

}

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}