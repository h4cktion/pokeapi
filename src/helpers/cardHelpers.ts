export const getColorByType = (type: string) => {
  switch (type) {
    case "water":
    case "ice":
      return "#0085FE";
    case "flying":
      return "#7cb7ef";
    case "fighting":
      return "#2F356A";
    case "fire":
      return "#FEDE67";
    case "grass":
    case "bug":
      return "#00A195";
    case "rock":
    case "dark":
      return "#2D3235";
    case "ground":
      return "#F3B24A";
    case "poison":
      return "#A76BE7";
    default:
      return "#8FABBC";
  }
};

export const isFavorite = (favorites: string[], pokemon: string) => {
  return favorites.includes(pokemon);
};
