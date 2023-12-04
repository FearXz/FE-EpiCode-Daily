const fruits = ["apple", "pear", "kiwi", "grape", "anans", "orange"];

window.onload = () => {
  // selezione del dom

  // verso il basso con .getElement(s)By() o .querySelecto() / .querySelectorAll()

  // verso l'alto con .parentNode/.parentElement o .closeset("selettoreCSS")

  //   const h1 = document.getElementsByTagName("h1")[0];
  const form = document.querySelector("form");

  //   form.onsubmit = function (event) {}

  form.addEventListener("submit", function (event) {
    // il preventDefault sull'evento è fondamentale per evitare il refresh della pagina!!!
    event.preventDefault();
    console.log(event);

    const titleNode = document.getElementById("title");
    const subtitleNode = document.getElementById("subtitle");
    const cardTextNode = document.getElementById("card-text");

    generateCard(titleNode.value, subtitleNode.value, cardTextNode.value);
  });

  const h1 = document.querySelector("h1"); // richiede un selettore CSS: nel caso di classi . e nel caso di id #
  console.dir(h1);
  h1.style.color = "red";

  generateCard("Epicode", "Awesome coding school", "Get hired in only 6 months");
  generateCard("Epicode2", "Awesome coding school", "Get hired in only 6 months");
  generateCard("Epicode3", "Awesome coding school", "Get hired in only 6 months");
  generateCard("Epicode4", "Awesome coding school", "Get hired in only 6 months");
};

//funzione con default parameter (parametro opzionale che acquisce valore preconfigurato se undefined)
const generateCard = (title, subtitle, text, btnText = "Delete Card") => {
  const row = document.querySelector("#cards");

  const col = document.createElement("div");
  col.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${subtitle}</h6>
                        <p class="card-text">${text}</p>
                        <button class="btn btn-danger" onclick="deleteCard(event)"> ${btnText}</button>
                    </div>
  `;

  card.addEventListener("click", function (event) {
    console.log(event.currentTarget);

    // currentTarget è il proprietario dell'evento
    // con solo target si rischia di ricevere indietro non la card ma i suoi figli
    event.currentTarget.classList.toggle("border-danger");
  });

  col.appendChild(card);
  row.appendChild(col);
};

const deleteCard = event => {
  //   event.target.parentNode.parentNode.parentNode.remove();

  // closest mi prende il nodo, corrispondente alla ricerca, più vicino verso l'alto
  const myCard = event.target.closest(".card");
  alert("Hai rimosso " + myCard.querySelector("h5").innerText);

  myCard.parentNode.remove();
};
