import axios from "axios";
import { IPokemon } from "pokeapi-typescript";
import { IPokemonList } from "../types";

const fetchPokemons = async (url: string): Promise<IPokemonList | null> => {
  try {
    const res = await axios.get<IPokemonList>(url);
    const { data } = res;
    return data;
  } catch (e) {
    console.error("[fetchPokemons] Error When we try to fetch Pokemons", e);
    return null;
  }
};
const fetchPokemon = async (url: string): Promise<IPokemon | null> => {
  try {
    const res = await axios.get<IPokemon>(url);
    const { data } = res;
    return data;
  } catch (e) {
    console.error(
      "[fetchPokemons] Error When we try to fetch Pokemon details",
      e
    );
    return null;
  }
};

export default {
  fetchPokemons,
  fetchPokemon,
};
