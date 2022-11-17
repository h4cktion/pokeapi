import axios from "axios";
import { IPokemonList } from "../types";

const fetchPokemons = async (): Promise<IPokemonList | null> => {
  try {
    const res = await axios.get<IPokemonList>(
      "https://pokeapi.co/api/v2/pokemon"
    );
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
