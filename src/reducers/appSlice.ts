import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemons } from "../actions/appActions";
import {
  getInitialFavorites,
  saveInLocalStorage,
} from "../helpers/localStorageHelpers";
import type { RootState } from "../store";
import { IAppState, IPokemonList } from "../types";

const initialState: IAppState = {
  pokemonsDetails: null,
  pokemonsList: null,
  favorites: getInitialFavorites("favoris"),
  loading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<any>) => {
      const favoritesCopy = [...state.favorites];
      const urlToAdd = action.payload;
      if (favoritesCopy.includes(urlToAdd)) return { ...state };
      favoritesCopy.push(urlToAdd);
      saveInLocalStorage("favoris", favoritesCopy);
      return { ...state, favorites: favoritesCopy };
    },
    removeToFavorites: (state, action: PayloadAction<any>) => {
      const favoritesCopy = state.favorites.filter(
        (favoris) => favoris !== action.payload
      );
      saveInLocalStorage("favoris", favoritesCopy);
      return { ...state, favorites: favoritesCopy };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPokemons.fulfilled,
      (state, action: PayloadAction<IPokemonList | null>) => {
        return (state = {
          ...state,
          pokemonsList: action.payload,
          loading: false,
        });
      }
    );
  },
});

export const { addToFavorites, removeToFavorites } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
