export const getInitialFavorites = (key: string) => {
  const jsonValue = localStorage.getItem(key);
  if (jsonValue !== null) return JSON.parse(jsonValue);
  return [];
};

export const saveInLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
