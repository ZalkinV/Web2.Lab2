import { Actions } from "../actions/geoActions";
import { extractWeatherParams } from "../middlewares";


const initialState = {
  geolocation: {
    coords: {
      lat: 43.02,
      lon: 44.68
    }
  },
}

export default function geoReducer(state = initialState, action) {
  state = {
    ...state
  }

  switch (action.type) {
    case Actions.SET_GEOLOCATION:
      state.geolocation.coords = action.payload;
      break;
    
    case Actions.FETCH_GEO_SUCCESS:
      state.geolocation = extractWeatherParams(action.payload);
      break;

    case Actions.FETCH_GEO_ERROR:
      state.geolocation.error = action.payload;
      break;

    default:
      break;
  }

  return state;
}
