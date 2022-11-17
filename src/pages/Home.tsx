import { useEffect } from "react";
import { fetchPokemons } from "../actions/appActions";
import Pokemons from "../components/Pokemons";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemons("https://pokeapi.co/api/v2/pokemon"));
  }, []);

  const { pokemonsList } = useAppSelector((state) => state.app);

  return (
    <div className="bg-stone-100">
      {pokemonsList && <Pokemons pokemons={pokemonsList.results} />}
    </div>
  );
}

export default Home;
