import { Actions } from "./actions";


function reducer(state, action) {
  state = {
    ...state,
    favorites: [...state.favorites]
  };

  switch (action.type) {
    case Actions.SET_COORDS:
      state.coords = action.payload;
      break;

    case Actions.ADD_FAVORITE:
      const existedFavorite = state.favorites.find(elem => elem.cityName === action.payload.cityName);
      if (existedFavorite === undefined)
        state.favorites.push(action.payload);
      break;
    
    case Actions.DELETE_FAVORITE:
      const indexToDelete = state.favorites.find(elem => elem.cityName === action.payload.cityName);
      if (indexToDelete !== -1)
        state.favorites.splice(indexToDelete, 1);
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
