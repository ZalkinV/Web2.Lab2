import { Actions } from "./actions";


function reducer(state, action) {
  state = {
    ...state,
    favorites: [...state.favorites]
  };

  switch (action.type) {
    case Actions.ADD_FAVORITE:
      let isAlreadyFavorite = state.favorites.includes(action.payload);
      if (!isAlreadyFavorite && action.payload !== undefined)
        state.favorites.push(action.payload);
      break;
    
    case Actions.DELETE_FAVORITE:
      let indexToDelete = state.favorites.indexOf(action.payload);
      if (indexToDelete !== -1)
        state.favorites.splice(indexToDelete, 1);
      break;

    case Actions.FETCH_WEATHER_PENDING:
      state.pending = true;
      break;

    case Actions.FETCH_WEATHER_SUCCESS:
      state.pending = false;
      state.weather = action.payload;
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
