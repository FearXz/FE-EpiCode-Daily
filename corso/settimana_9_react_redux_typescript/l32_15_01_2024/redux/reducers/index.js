// qui definiamo la nostra funzione pura che sarà il reducer principale
// il reducer prende lo stato corrende dell'applicazione nel momento in cui viene "risvegliato", e prende anche l'azione che gli arriva con un dispatch();
// a quel punto ne leggerà il "type" e con queste due informazioni genererà il nuovo stato globale dell'applicazione

// da dove cominciamo? si comincia da uno stato iniziale

const initialState = {
  cart: {
    content: []
  },
  bookSelected: {
    content: null
  },
  admin: { content: "Stefano" } // inutilizzato, serve come esempio di proprietà esterana a cart che viene mantenuta anche dopo il cambio di stato
};

// lo stato iniziale è quello che viene generato automaticamente ad ogni refresh del browser, per poi essere modificato di nuovo ( in maniera "immutable")

// il reducer è una PURE FUNCTION (funzione pura), quindi non modificherà mai i suoi parametri direttamente

const mainReducer = (state = initialState, action) => {
  // da questa funzione, IN OGNI CASO o SITUAZIONE, dovremo PER FORZA ritornare IL NUOVO STATO globale dell'app
  switch (action.type) {
    // qui inseriamo i vari casi, per i diversi "type" degli oggetti "action" che arriveranno con la "dispatch"
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          //content: state.cart.content.push(action.payload) // ASSOLUTAMENTE NO!!! push è un metodo che muta l'array originario (nelle funzioni pure non si può fare),
          // ma ritorna anche un valore che per noi è solo dannoso, ossia: la length del nuovo array, sostituendo l'array originario per un numero.... poco utile

          // content: state.cart.content.concat(action.payload) // Sì
          content: [...state.cart.content, action.payload]
        }
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          // content: state.cart.content.splice(action.payload, 1) // NO!!! muta l'array originale e ritorna l'oggetto dell'elemento eliminato
          // prenderemo il precedente state.cart.content, lo filtreremo prendendo in considerazione l'indice "i", o action.payload in questo caso, del singolo elemento cliccato in Cart
          content: state.cart.content.filter((_, i) => i !== action.payload)
          // content: [...state.cart.content.slice(0, action.payload), ...state.cart.content.slice(action.payload + 1)] // spread dell'array con tutti gli elementi prima di action.payload, e spread degli elementi dopo action.payload
        }
      };

    case "SELECT_BOOK":
      return {
        ...state,
        bookSelected: {
          ...state.bookSelected,
          content: action.payload
        }
      };
    default:
      return state;
    // !! MOLTO IMPORTANTE !! nel caso peggiore, quanto meno, ritorneremo lo stato precedente. Per OGNI chiamata a mainReducer, senza rompere il flusso di Redux
  }
};

export default mainReducer;
