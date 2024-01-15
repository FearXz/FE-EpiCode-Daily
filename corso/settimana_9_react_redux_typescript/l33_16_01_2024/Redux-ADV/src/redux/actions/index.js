// Qui dentro definiamo i TYPE come COSTANTI
// questo permette di evitare errori di sintassi silenziosi, che non produrrebbero un errore chiaro e "parlante", di conseguenza romperebbero il funzionamento di redux e i suoi reducers

export const ADD_TO_CART = "ADD_TO_CART";
// sbagliare l'import di una costante ci avvertirà già a "compile-time" (in vscode) del problema, in anticipo
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SELECT_BOOK = "SELECT_BOOK";
export const SET_ADMIN_NAME = "SET_ADMIN_NAME";
export const SET_USER_NAME = "SET_USER_NAME";
export const GET_BOOKS = "GET_BOOKS";
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR";
export const GET_BOOKS_LOADING_ON = "GET_BOOKS_LOADING_ON";
export const GET_BOOKS_LOADING_OFF = "GET_BOOKS_LOADING_OFF";

// ACTION CREATORS  => una funzione che torna l'azione (oggetto)
// export const addToCartAction = bookSelected => {
//   return { type: ADD_TO_CART, payload: bookSelected };
// };

// versione "condensata" del precedente, con return implicito.
// le tonde aiutano a non confondere le graffe per contesto di funzione, ma mantenendole come definizione di oggetto letterale

export const addToCartAction = bookSelected => ({ type: ADD_TO_CART, payload: bookSelected });

export const addToCartActionWithThunk = bookSelected => {
  return (dispatch, getState) => {
    const currentState = getState();
    console.log("DENTRO ADD TO CART WITH THUNK ", currentState);
    console.log(
      "CHECK",
      currentState.cart.content.findIndex(book => book.id === bookSelected.id)
    );
    const checkBookInCart = currentState.cart.content.findIndex(book => book.id === bookSelected.id);
    if (checkBookInCart === -1) {
      dispatch({ type: ADD_TO_CART, payload: bookSelected });
    } else {
      console.log("LIBRO GIA' PRESENTE NEL CARRELLO");
    }
  };
};

export const removeFromCartAction = index => ({ type: REMOVE_FROM_CART, payload: index });

export const selectBookAction = book => ({ type: SELECT_BOOK, payload: book });

export const setUserNameAction = value => ({ type: SET_USER_NAME, payload: value });

export const setAdminNameAction = value => ({ type: SET_ADMIN_NAME, payload: value });

export const getBooksAction = () => {
  // grazie a redux-thunk, che è un middleware GIA' INTEGRATO nel nostro flow con configureStore() di redux toolkit
  // possiamo creare degl iaction creators che ritornino non solo una singola action (oggetto JS), ma anche una funzione!
  return async (dispatch, getState) => {
    // getState() è una funzione che ritorna lo stato globale
    try {
      dispatch({
        type: GET_BOOKS_LOADING_ON
      });
      let resp = await fetch("https://striveschool-api.herokuapp.com/food-books");
      if (resp.ok) {
        let fetchedBooks = await resp.json();
        // a questo punto avremo aspettato la risoluzione della fetch e potremo fare il dispatch di un'action con fetchedBooks come payload!
        dispatch({ type: GET_BOOKS, payload: fetchedBooks });
      } else {
        console.log("error");
        // siamo anche in grado di gestire errori nel caso in cui si presentino con un azione con type diverso
        dispatch({
          type: GET_BOOKS_ERROR,
          payload: "Errore nel reperimento dei dati"
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_BOOKS_ERROR,
        payload: "Errore nel reperimento dei dati: " + error.message
      });
    } finally {
      // siamo anche in grado di gestire loading states leggibili e attivabili/disattivabili in tutta l'applicazione dall'unico posto che è questo action creator
      dispatch({
        type: GET_BOOKS_LOADING_OFF
      });
    }
  };
};
