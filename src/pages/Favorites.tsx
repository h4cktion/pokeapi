import React from "react";
import PokemonCard from "../components/PokemonCard";
import { useAppSelector } from "../store/hooks";

function Favorites() {
  const { favorites } = useAppSelector((state) => state.app);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl my-6 uppercase">Favoris</h1>
      <div className="flex flex-wrap gap-4">
        {favorites.map((url, idx) => (
          <div key={idx}>
            <PokemonCard url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
