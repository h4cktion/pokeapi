import axios from "axios";

// const fetchPokemons = async (url: string): Promise<IPokemonList | null> => {
//   try {
//     const res = await axios.get<IPokemonList>(url);
//     const { data } = res;
//     return data;
//   } catch (e) {
//     console.error("[fetchPokemons] Error When we try to fetch Pokemons", e);
//     return null;
//   }
// };

const fetchDataFromUrl = async <T>(url: string): Promise<T | null> => {
  try {
    const res = await axios.get<T>(url);
    const { data } = res;
    return data;
  } catch (e) {
    console.error(
      `[fetchDataFromUrl] Error When we try to fetch data from ${url}. Error: ${e}`
    );
    return null;
  }
};

export default {
  fetchDataFromUrl,
};
