export const Actions = Object.freeze({
  ADD_FAVORITE: 1,
  DELETE_FAVORITE: 2,
});


export function addFavorite(cityName) {
  return {
    type: Actions.ADD_FAVORITE,
    payload: cityName
  };
}

export function deleteFavorite(cityName) {
  return {
    type: Actions.DELETE_FAVORITE,
    payload: cityName
  };
}