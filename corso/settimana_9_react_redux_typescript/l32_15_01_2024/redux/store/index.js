// questo file si occuperà di creare il Redux Store all'avvio dell'applicazione

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

// configureStore ha bisogno della struttura del nostro store/stato globale come parametro principale(quindi un reducer)
const store = configureStore({
  // reducer
  reducer: mainReducer
});

export default store;
