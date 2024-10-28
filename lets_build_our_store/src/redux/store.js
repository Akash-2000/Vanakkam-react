import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartslice";
import { pokemonApi } from "./services/pokemon";

const reduxstore = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default reduxstore;
