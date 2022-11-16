import { useAppSelector } from "../store/hooks";
import PokemonCard from "./PokemonCard";
import Spinner from "./Spinner";

function Pokemons() {
  const { pokemonsList, loading } = useAppSelector((state) => state.app);

  return (
    <div className="flex justify-center gap-4 w-full flex-wrap pt-8 pb-8">
      {pokemonsList?.results?.map(({ url }, idx) => (
        <div key={idx}>
          <PokemonCard url={url} />
        </div>
      ))}
      {loading && <Spinner />}
    </div>
  );
}

export default Pokemons;
