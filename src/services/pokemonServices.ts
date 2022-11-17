import axios from "axios";
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

export default {
  fetchPokemons,
};
