import { Actions } from "./actions";


function reducer(state, action) {
  state = {
    ...state,
    favorites: new Map(state.favorites)
  };

  switch (action.type) {
    case Actions.SET_GEOLOCATION:
      state.geolocation = action.payload;
      break;

    case Actions.ADD_FAVORITE:
      if (!state.favorites.has(action.payload.cityName))
        state.favorites.set(action.payload.cityName, action.payload);
      break;
    
    case Actions.DELETE_FAVORITE:
      state.favorites.delete(action.payload);
      break;

    case Actions.FETCH_WEATHER_PENDING:
      state.pending = true;
      break;

    case Actions.FETCH_WEATHER_SUCCESS:
      state.pending = false;
      break;

    case Actions.FETCH_WEATHER_ERROR:
      state.pending = false;
      state.error = action.payload;
      break;

    default:
      break;
  }
  
  return state;
}


export default reducer;
