import { Actions } from "../actions/favActions";
import getFavoritesFromStorage from "../localStorage";
import { extractWeatherParams } from "../api";

const initialState = {
  favorites: getFavoritesFromStorage()
};

export default function favReducer(state = initialState, action) {
  state = {
    ...state,
    error: false,
    favorites: new Map(state.favorites)
  };

  switch (action.type) {
    case Actions.ADD_FAVORITE:
      if (!state.favorites.has(action.payload))
        state.favorites.set(action.payload);
      break;

    case Actions.DELETE_FAVORITE:
      state.favorites.delete(action.payload);
      break;

    case Actions.FETCH_FAV_SUCCESS:
      const forecast = extractWeatherParams(action.payload.apiResponse);
      state.favorites.delete(action.payload.cityName);
      state.favorites.set(forecast.cityName, forecast);
      break;

    case Actions.FETCH_FAV_ERROR:
      state.error = action.payload.error;
      state.favorites.delete(action.payload.cityName);
      break;

    default:
      break;
  }

  return state;
}
