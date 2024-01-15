// questo file si occuperà di creare il Redux Store all'avvio dell'applicazione

import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import cartReducer from "../reducers/cartReducer";
import userReducer from "../reducers/userReducer";
import adminReducer from "../reducers/adminReducer";
import bookSelectedReducer from "../reducers/bookSelectedReducer";
import booksReducer from "../reducers/booksReducer";

// cartReducer e userReducer ad esempio gestiscono la loro porzione di stato più piccola,
// con combineReducer riportiamo le sezioni (slices) in un'unico macro oggetto globale
// prima di passarlo allo store
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  admin: adminReducer,
  bookSelected: bookSelectedReducer,
  books: booksReducer
});

// configureStore ha bisogno della struttura del nostro store/stato globale come parametro principale(quindi un reducer)
const store = configureStore({
  // reducer
  reducer: rootReducer
});

export default store;
