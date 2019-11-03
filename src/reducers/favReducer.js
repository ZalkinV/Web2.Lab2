import { Actions } from "../actions/favActions";
import getFavoritesFromStorage from "../localStorage";


export default function favReducer(state = getFavoritesFromStorage(), action) {
  state = {
    ...state,
    favorites: new Map(state.favorites)
  }

  switch (action.type) {
    case Actions.ADD_FAVORITE:
      state.favorites.set(action.payload);
      break;

    case Actions.DELETE_FAVORITE:
      state.favorites.delete(action.payload);
      break;

    default:
      break;
  }

  return state;
}
