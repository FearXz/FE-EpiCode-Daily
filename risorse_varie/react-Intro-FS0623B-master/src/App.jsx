import logo from "./logo.svg";
import "./App.css";
import FormGroup from "./components/FormGroup";
import MainComponent from "./components/MainComponent";
import ClassComponent from "./components/ClassComponent";

// Questo file contiene il nostro primo componente React, il principale. App.js
// Un componente React, nella sua forma più basilare, non è altro che una semplicissima funzione.... che ritorna del JSX!

// JSX è una sintassi SIMIL-HTML che permette l'inserimento di codice JS all'interno e
// ci permette di avere quindi codice dinamico assieme al markup

// principali cose che cambiano:
// - class diventa className (per evitare ambiguità con la keyword class dei costruttori)
// - le immagini devono essere chiuse da un tag autococlusivo <img />, così come <br />, <hr />, ecc...
// - per le label l'attributo non è più "for", ma è "htmlFor"

// tutto quello che non è una stringa, la devo assegnare all'interno delle parentesi graffe {},
// qui dentro qualsiasi codice dinamico ha la possibilità di venire interpretato

// nel caso dell'attributo style={{}} le prime graffe delimitano codice dinamico, le seconde rappresentano l'oggetto che stiamo passando

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent title="Main Title from Class Component Props" />
        {/* 
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ciao Epicoders!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: "3rem" }}
        >
          Learn React
        </a> 
        */}
        <MainComponent
          id="main-component-1"
          className="bg-light"
          logo={logo}
          anchorStyle={{ marginBottom: "2rem" }}
          formGroupId="test"
          formGroupContent="User Name"
          formGroupPlaceholder="Insert you username..."
        />

        <ClassComponent />

        <MainComponent
          id="main-component-2"
          className="bg-info"
          logo={logo}
          anchorStyle={{ marginBottom: "10rem", backgroundColor: "red" }}
          formGroupId="test2"
          formGroupContent="Email"
          formGroupPlaceholder=""
        />
        {/* applicare un attributo su un Componente lo fa diventare una prop di quel componente 
          - una prop è un dato che passa dal contesto esterno a quello interno */}
        {/* <FormGroup id="test" content="User Name" placeholder="Insert you username..." />
        <FormGroup id="test2" content="Email" placeholder="Insert your email..." />*/}
        <FormGroup id="test3" content="Full Name" placeholder="Insert your full name..." />
      </header>
    </div>
  );
};

export default App;
