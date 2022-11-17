import { IPokemon } from "pokeapi-typescript";
import { getColorByType, isFavorite } from "../helpers/cardHelpers";
import { addToFavorites, removeToFavorites } from "../reducers/appSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import useCallApi from "../hooks/UseCallApi";

interface propsType {
  url: string;
}
function PokemonCard({ url }: propsType) {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.app);
  const details: IPokemon | null = useCallApi(url);
  const isInFavorites = isFavorite(favorites, url);

  const addOrRemoveOfFavorites = (event: any) => {
    const { id } = event.target;
    if (isInFavorites) {
      dispatch(removeToFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };
  return (
    <>
      {details && (
        <div
          className={`shadow-md w-[300px] h-[350px] flex flex-col items-center rounded-lg hover:scale-110 transition relative`}
          style={{
            background: `radial-gradient(circle at 50% -40%, ${getColorByType(
              details.types[0].type.name
            )} 50%, #ffffff 10%)`,
          }}
        >
          <div className="mt-16">
            <img src={details?.sprites?.front_default} alt={details.name} />
          </div>
          <h2 className="font-bold text-xl capitalize mt-4">{details.name}</h2>
          <div className="flex gap-6 justify-center items-center mt-6">
            {details.types.map((type, idx) => (
              <span
                key={idx}
                className="px-4 py-1 text-xs rounded-full"
                style={{ background: `${getColorByType(type.type.name)}` }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <button
            id={url}
            className={`w-full ${
              isInFavorites ? "bg-red-400" : "bg-teal-500"
            } text-white font-bold p-2 absolute bottom-0 rounded-b-lg hover:bg-opacity-70`}
            onClick={addOrRemoveOfFavorites}
          >
            {isInFavorites ? "Retirer des favoris" : "Ajouter aux favoris"}
          </button>
        </div>
      )}
    </>
  );
}

export default PokemonCard;
