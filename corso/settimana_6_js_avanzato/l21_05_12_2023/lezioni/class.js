// abbiamo visto che JS è un linguaggio di programmazione orientato agli oggetti
// la differenza principale, tuttavia, con altri linguaggi di programmazione più classici
// come Java, C#, C++ è che JS si basa sul concetto di PROTOTIPO, mentre gli altri si
// basano sul concetto di CLASSE

// grazie alle classi, gli altri linguaggi permettono di estendere le funzionalità
// di una struttura principale creando delle "sottovarianti", delle "sottoclassi"

// let obj = {}
// in JS è possibile creare un oggetto direttamente con le {} senza avere il costruttore,
// mentre in tutti i classici linguaggi OOP questo non è possibile: è necessario avere
// PRIMA la classe, e poi se ne deriva l'istanza (l'oggetto)

// negli altri linguaggi non è possibile modificare uno "stampino" dopo la sua creazione
// mentre in JS come abbiamo visto ieri è possibile agire sui prototipi

// con il passare del tempo e l'introduzione di ES6 anche JS ha cominciato a permettere
// a suoi sviluppatori di utilizzare il concetto di "classe", uniformando gli approcci
// con altri linguaggi più blasonati e rendendo più facile la transizione a sviluppatori
// provenienti da questi linguaggi.

class Person {
  constructor(name, surname, age, address) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.address = address;
  }
  // metodo della classe, si dichiara senza keyword (let, const, function)
  showFullName() {
    return "Ciao sono: " + this.name + " " + this.surname + ", ho " + this.age + "anni e abito in" + this.address;
  }
}

const valentinoRossi = new Person("Valentino", "Rossi", 45, "viale dei fiori, 42");
console.log(valentinoRossi);

console.log(valentinoRossi.showFullName());

// Ereditarietà tramite keyword extends su altra classe
class Developer extends Person {
  constructor(name, surname, age, address, skills, specialty) {
    // super invoca il costruttore della classe da cui Developer si estende (Person)
    // Person è definita la SUPERCLASSE di Developer
    super(name, surname, age, address);

    this.skills = skills;
    this.specialty = specialty;
  }

  showFullDescription() {
    // super mi permette di chiamare metodi della super-classe (o istanza principale in questo caso)
    return super.showFullName() + ", e sono specializzato in: " + this.specialty;
  }
}

const stefanoDev = new Developer(
  "Stefano",
  "Miceli",
  30,
  "via dei platani 23",
  ["HTML", "CSS", "JS", "React"],
  "UX & FRONT DEV"
);

console.log(stefanoDev.showFullDescription());
