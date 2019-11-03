import { Actions } from "../actions/geoActions";
import { extractWeatherParams } from "../api";


const initialState = {
  coords: {
    lat: 43.02,
    lon: 44.68
  }
}

export default function geoReducer(state = initialState, action) {
  state = {
    ...state,
    error: false
  }

  switch (action.type) {
    case Actions.SET_GEOLOCATION:
      state.coords = action.payload;
      break;
    
    case Actions.FETCH_GEO_SUCCESS:
      state.forecast = extractWeatherParams(action.payload);
      break;

    case Actions.FETCH_GEO_ERROR:
      state.error = action.payload;
      break;

    default:
      break;
  }

  return state;
}
