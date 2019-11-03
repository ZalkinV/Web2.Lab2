import { Actions } from "../actions/favActions";
import getFavoritesFromStorage from "../localStorage";
import { extractWeatherParams } from "../middlewares";


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

    case Actions.FETCH_FAV_SUCCESS:
      const forecast = extractWeatherParams(action.payload);
      state.favorites.set(forecast.cityName, forecast);
      break;

    case Actions.FETCH_FAV_ERROR:
      state.error = action.payload;
      break;

    default:
      break;
  }

  return state;
}
