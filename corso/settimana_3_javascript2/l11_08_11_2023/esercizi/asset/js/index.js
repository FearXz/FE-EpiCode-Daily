window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", createNewTaskComponent);
};

const createNewTaskComponent = function (event) {
  event.preventDefault(); // evita il comportamento di default
  addTask();
  signCompletedTask();
  addEventListenerDelete();
};

const addTask = function () {
  let inputField = document.querySelector("#newTask input");
  let divContainer = document.querySelector("#tasks");
  let newTask = `<div class="task" ><p>${inputField.value}</p><button class="remove">Delete</button></div>`;
  divContainer.innerHTML += newTask;
};

const signCompletedTask = function () {
  let allTask = document.querySelectorAll(".task");

  for (let i = 0; i < allTask.length; i++) {
    allTask[i].addEventListener("click", function () {
      this.classList.toggle("line");
    });
  }
};

const addEventListenerDelete = function () {
  let allButton = document.querySelectorAll(".remove");

  for (let i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
};
