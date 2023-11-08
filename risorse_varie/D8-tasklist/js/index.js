const handleSubmit = function (e) {
  e.preventDefault()
  addTask()
  attachComplete()
  attachDelete()
}

const addTask = function () {
  let tasks = document.querySelector('#tasks')
  let inputField = document.querySelector('#newTask input')
  let newTask = `
      <div class="task">
          <span id="taskname">
              ${inputField.value}
          </span>
          <button class="delete">
              <i class="far fa-trash-alt"></i>
          </button>
      </div>`
  
  tasks.innerHTML += newTask
  inputField.value = ''
}

const attachComplete = function () {
  let allTasks = document.querySelectorAll('.task')
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener('click', function () {
      this.classList.toggle('completed')
    })
  }
}

const attachDelete = function () {
  let allDeleteButtons = document.querySelectorAll('.delete')
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener('click', function () {
      this.parentNode.remove()
    })
  }
}

window.onload = function () {
  let form = document.querySelector('form')
  form.addEventListener('submit', handleSubmit)
}
