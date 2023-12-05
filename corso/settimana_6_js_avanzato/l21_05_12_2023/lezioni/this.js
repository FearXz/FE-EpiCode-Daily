const person = {
  name: "Giovanni",
  surname: "Verga",
  skills: ["authoring", "copywriting", "psychology"],
  myMethod: function () {
    // console.log("Ciao sono " + person.name + " " + person.surname); // la variabile person potrebbe cambiare nel tempo. potrebbe non essere sempre disponibile
    // potremmo volerci riferire ad un'altra variabile di un oggetto simile che è nato dalla clonazione di questo (quindi avrebbe un nome diverso)
    // con il THIS risolviamo questo enpass
    console.log("THIS", this);

    this.skills.forEach(skill => {
      console.log("Ciao il mio nome è:", this.name + " " + this.surname + " e sono pratico di: " + skill);
    });

    // this sarà ereditato dal contesto esterno
    setTimeout(() => {
      console.log("Ciao, sono " + this.name);
    }, 1000);

    // this sarà perso in questo caso
    // setTimeout(function () {
    //   console.log("Ciao, sono " + this.name);
    // }, 1000);

    // this.skills.forEach(function (skill) {
    //   console.log("Ciao il mio nome è:", this.name + " " + this.surname + " e sono pratico di: " + skill);
    // });
  }
};

const person2 = {
  name: "Gianni",
  surname: "Morandi",
  myMethod: () => {
    console.log("THIS", this);

    console.log("Ciao il mio nome è:", this.name + " " + this.surname);
  }
};
