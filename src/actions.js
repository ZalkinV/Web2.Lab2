export const Actions = Object.freeze({
  ADD_FAVORITE: 1,
  DELETE_FAVORITE: 2,
});


export function addFavorite(city) {
  return {
    type: Actions.ADD,
    payload: city
  };
}