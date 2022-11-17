import { fetchPokemons } from "../actions/appActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function NavigationActions() {
  const { pokemonsList } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const fectchPokemons = (event: React.UIEvent<HTMLElement>) => {
    const { id } = event.currentTarget;
    dispatch(fetchPokemons(id));
  };

  return (
    <div className="flex justify-center gap-6 pb-6">
      {pokemonsList?.previous && (
        <div
          className="hover:cursor-pointer hover:bg-slate-300 rounded-full p-5 bg-slate-200"
          id={pokemonsList.previous}
          onClick={fectchPokemons}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      )}
      {pokemonsList?.next && (
        <div
          className="hover:cursor-pointer hover:bg-slate-300 rounded-full p-5 bg-slate-200"
          id={pokemonsList.next}
          onClick={fectchPokemons}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default NavigationActions;
