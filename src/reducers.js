import { Actions } from "./actions";


function reducer(state, action) {
  state = {
    ...state,
    weather: {
      ...state.weather,
    },
    favorites: [...state.favorites]
  };

  switch (action.type) {
    case Actions.ADD_FAVORITE:
      let isAlreadyFavorite = state.favorites.includes(action.payload);
      if (!isAlreadyFavorite)
        state.favorites.push(action.payload);
      break;
    
    case Actions.DELETE_FAVORITE:
      let indexToDelete = state.favorites.indexOf(action.payload);
      if (indexToDelete !== -1)
        state.favorites.splice(indexToDelete, 1);
      break;

    default:
      break;
  }
  
  return state;
}


export default reducer;
