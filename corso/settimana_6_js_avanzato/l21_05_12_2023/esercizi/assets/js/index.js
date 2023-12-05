window.onload = function () {
  let formNode = document.getElementsByTagName("form")[0];
  formNode.addEventListener("submit", handleSubmit);
  dropDownMenu();
};

class Pet {
  constructor(name, owner, species, breed) {
    this.name = name;
    this.owner = owner;
    this.species = species;
    this.breed = breed;
  }
  static checkSameOwner(animalA, animalB) {
    if (animalA.owner == animalB.owner) {
      return true;
    } else {
      return false;
    }
  }
}

let registeredPet = [];
let animals = {
  cat: ["oriental", "devon", "british"],
  dog: ["beagle", "cocker", "shitzu"],
};

let handleSubmit = (event) => {
  event.preventDefault();

  let petName = document.getElementById("petName").value;
  let petOwner = document.getElementById("petOwner").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;

  if (species === "Pls select a pet first" || breed === "Pls select a pet first") {
    alert("Please select both species and breed.");
    return;
  }

  let newPet = new Pet(petName, petOwner, species, breed);
  registeredPet.push(newPet);
  console.log(registeredPet);

  showPet();
};

let dropDownMenu = function () {
  let PetSpeciesNode = document.getElementById("species");
  let PetBreedNode = document.getElementById("breed");

  PetSpeciesNode.innerHTML = `
  <option selected>Select a pet</option>
  `;
  for (let species in animals) {
    PetSpeciesNode.innerHTML += `
    <option value="${species}">${species}</option>
    `;
  }

  PetSpeciesNode.addEventListener("change", (event) => {
    let species = event.target.value;
    let breed = animals[species];
    console.log(breed);

    PetBreedNode.innerHTML = `
        <option selected>Pls select a pet first</option>`;

    for (let i = 0; i < breed.length; i++) {
      PetBreedNode.innerHTML += `
        <option value="${breed[i]}">${breed[i]}</option>
        `;
    }
  });
};

let showPet = function () {
  let divRegisteredPet = document.getElementById("registeredPet");
  divRegisteredPet.innerHTML = "";

  for (let i = 0; i < registeredPet.length; i++) {
    divRegisteredPet.innerHTML += `
    <div class="pet bg-teal d-flex justify-content-around align-items-center mt-3 fw-medium">
                          <div>
                            <p>PET NAME</p>
                            <p>${registeredPet[i].name}</p>
                          </div>
                          <div>
                            <p>OWNER NAME</p>
                            <p>${registeredPet[i].owner}</p>
                          </div>
                          <div>
                            <p>SPECIES</p>
                            <p>${registeredPet[i].species}</p>
                          </div>
                          <div>
                            <p>BREED</p>
                            <p>${registeredPet[i].breed}</p>
                          </div>
                          <div>
                            <button class="deletebtn btn btn-danger">Delete</button>
                          </div>
                        </div>
    `;
  }
  let deleteButtonNode = document.querySelectorAll(".deletebtn");
  deleteButtonNode.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.currentTarget.parentNode.parentNode.remove();
      console.log(registeredPet.splice(index, 1));
      showPet();
      console.log(registeredPet);
    });
  });
};
