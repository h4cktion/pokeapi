import { IPokemon, IPokemonAbility } from "pokeapi-typescript";

export interface IPokemonNamesAndUrls {
  name: string;
  url: string;
}

export interface IPokemonList {
  count: number;
  next: null | string;
  previous: null | string;
  results: IPokemonNamesAndUrls[];
}

export interface IAppState {
  pokemonsDetails: null | IPokemon[];
  pokemonsList: null | IPokemonList;
  loading: boolean;
  favorites: string[];
}
