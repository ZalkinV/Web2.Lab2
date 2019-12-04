import { Actions } from "../actions/favActions";
import { extractWeatherParams } from "../api";

const initialState = {
  favorites: new Map()
};

export default function favReducer(state = initialState, action) {
  state = {
    ...state,
    favorites: new Map(state.favorites)
  };

  switch (action.type) {
    case Actions.GET_FAVORITES_SUCCESS:
      state.error = false;
      for (const city of action.payload)
        state.favorites.set(city.cityName);
      break;

    case Actions.GET_FAVORITES_ERROR:
      state.error = action.payload;
      break;

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
      state.error = false;
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
