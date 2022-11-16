import { useEffect } from "react";
import { fetchPokemons } from "../actions/appActions";
import Pokemons from "../components/Pokemons";
import { useAppDispatch } from "../store/hooks";

function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  return (
    <div className="bg-stone-100">
      <Pokemons />
    </div>
  );
}

export default Home;
