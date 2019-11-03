import { Actions } from "../actions/favActions";
import getFavoritesFromStorage from "../localStorage";
import { extractWeatherParams } from "../middlewares";

const initialState = {
  favorites: getFavoritesFromStorage()
};

export default function favReducer(state = initialState, action) {
  state = {
    ...state,
    favorites: new Map(state.favorites)
  }

  switch (action.type) {
    case Actions.ADD_FAVORITE:
      state.error = false;
      if (!state.favorites.has(action.payload))
        state.favorites.set(action.payload);
      break;

    case Actions.DELETE_FAVORITE:
      state.error = false;
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
