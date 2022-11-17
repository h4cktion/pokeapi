import { IPokemonNamesAndUrls } from "../types";
import NavigationActions from "./NavigationActions";
import PokemonCard from "./PokemonCard";

interface propsType {
  pokemons: IPokemonNamesAndUrls[];
}
function Pokemons({ pokemons }: propsType) {
  return (
    <>
      <div className="flex justify-center gap-4 w-full flex-wrap pt-8 pb-8">
        {pokemons.map(({ url }, idx) => (
          <div key={idx}>
            <PokemonCard url={url} />
          </div>
        ))}
      </div>
      <NavigationActions />
    </>
  );
}

export default Pokemons;
