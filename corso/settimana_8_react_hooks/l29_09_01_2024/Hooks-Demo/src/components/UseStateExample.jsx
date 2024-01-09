import { useState } from "react";

// Per poter utilizzare un QUALSIASI Hook è necessario ricordare DUE regole:

// 1) i React Hooks si possono utilizzare SOLAMENTE in COMPONENTI REACT A FUNZIONE!
// 2) i React Hooks si possono dichiarare e utilizzare solamente IN CIMA al componente, prima del return statement,
//    dovranno anche necessariamente essere FUORI da qualsiasi ciclo, condizionale if/else, switch case, funzioni, ecc

const UseStateExample = () => {
  // qui dentro possiamo utilizzare gli hook
  // cosa fa useState?
  // crea una singola variabile di stato
  // qui dentro creemo un contatore con un bottone che ne incrementerà il valore ogni volta

  // se fossimo in una classe...
  // state = {
  //      counter: 0
  // }

  // e potremmo modificarlo con un this.setState({
  //     counter: counter + 1
  // })

  // mentre ora creeremo la singola varibile di stato chiamata counter, e la sua funzione "setter" chiamata setCounter

  //   const counterArr = useState(0) // chiamare useState() ritornerà un array (una tupla) di due elementi eterogenei:
  // in prima posizione troviamo il valore dello stato
  // in seconda posizione troviamo la funzione in grado di aggiornare quel valore di stato

  //   const counter = counterArr[0] // variabile per lo stato
  //   const setCounter = counterArr[1] // variabile che mi contiene la funzione che "setta" lo stato

  //   const [counter, setCounter] = counterArr // questo è un passaggio in più rispetto al prossimo che vedrai di seguito

  const [counter, setCounter] = useState(0);
  //  counter è il singolo valore di stato contenuto nella sua variabile chiamata counter
  //  setCounter è la variabile che mi contiene la funzione che "setta" lo stato
  const [isImageShown, setIsImageShown] = useState(false);

  console.log("counter", counter);
  console.log("setCounter", setCounter);

  return (
    <div>
      <h1>useState Hook!</h1>
      <p>useState ci servirà per introdurre nel componente a funzione il concetto di "State"</p>
      <p>
        Il valore attuale di counter è: <strong>{counter}</strong>
      </p>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
      </div>
      <div>
        <h3>per visualizzare/nascondere l'immagine clicca sul bottone qui sotto</h3>
        <button onClick={() => setIsImageShown(!isImageShown)}> {isImageShown ? "Nascondi" : "Visualizza"} immagine</button>
        {isImageShown && (
          <div>
            <img
              src="https://images.unsplash.com/photo-1704402308313-ffd040169a75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="kodak insta camera"
              height={300}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UseStateExample;
