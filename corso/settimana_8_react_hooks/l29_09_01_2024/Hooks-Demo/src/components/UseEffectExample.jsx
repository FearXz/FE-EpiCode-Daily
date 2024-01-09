// Per poter utilizzare un QUALSIASI Hook è necessario ricordare DUE regole:

import { useEffect, useState } from "react";

// 1) i React Hooks si possono utilizzare SOLAMENTE in COMPONENTI REACT A FUNZIONE!
// 2) i React Hooks si possono dichiarare e utilizzare solamente IN CIMA al componente, prima del return statement,
//    dovranno anche necessariamente essere FUORI da qualsiasi ciclo, condizionale if/else, switch case, funzioni, ecc

const UseEffectExample = () => {
  // qui dentro posso usare useState e useEffect!
  const [counter, setCounter] = useState(0);
  const [isImageShown, setIsImageShown] = useState(false);

  //   if(false) {
  //     useEffect(() => {})
  //   }

  // ATTENZIONE! un React Hook non può mai essere chiamato condizionalmente o dentro a cicli ecc...

  useEffect(() => {
    console.log("sono uno useEffect! vengo lanciato all'avvio dell'applicazione e ad ogni update");
    // setCounter(counter +1) // <--- loop infinito! sto settando lo stato in uno useEffect che viene anche rilanciato ad ogni cambio di stato
  });

  // questo useEffect verrà lanciato al montaggio del componente... MA NON SOLO!
  // verrà anche lanciato ad OGNI aggiornamento del componente stesso.
  // es. ogni volta che clicco un bottone per aggiornare uno stato.

  useEffect(() => {
    if (counter > 0) {
      console.log("sono uno useEffect! vengo lanciato all'avvio dell'applicazione e OGNI VOLTA che counter cambierà");
    }
  }, [counter]);

  useEffect(() => {
    console.log("sono uno useEffect! vengo lanciato all'avvio dell'applicazione e OGNI VOLTA che isImageShown cambierà");
  }, [isImageShown]);

  useEffect(() => {
    console.log("sono uno useEffect! vengo lanciato all'avvio dell'applicazione e basta");
  }, []);
  // questo useEffect fa le veci di un componentDidMount, ovvero parte al montaggio del componente e non si ripete più.

  useEffect(() => {
    return () => {
      // un return all'interno della callback di useEffect fa le veci di un componentWillUnmount, ovvero esegue qualcosa un instante prima che il componente venga smontato
      console.log("addio... sto morendo");
    };
  }, []);

  return (
    <div>
      <h1>Esempi di useEffect!</h1>
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

export default UseEffectExample;
