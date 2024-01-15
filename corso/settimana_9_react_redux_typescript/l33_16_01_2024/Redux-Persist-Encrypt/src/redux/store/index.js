// questo file si occuperà di creare il Redux Store all'avvio dell'applicazione

import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import cartReducer from "../reducers/cartReducer";
import userReducer from "../reducers/userReducer";
import adminReducer from "../reducers/adminReducer";
import bookSelectedReducer from "../reducers/bookSelectedReducer";
import booksReducer from "../reducers/booksReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY // crea il tuo file .env.local in cui creare la chiave REACT_APP_PERSIST_KEY col valore di una stringa complessa che
      // verrà usata come chiave di cripatzione dello store salvato nel localStorage del browser
    })
  ]
};

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

const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore ha bisogno della struttura del nostro store/stato globale come parametro principale(quindi un reducer)
export const store = configureStore({
  // reducer
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
