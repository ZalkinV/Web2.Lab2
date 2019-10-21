import { Actions } from "./actions";


function reducer(state, action) {
  console.log("Reducer", action);
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
      break;

    default:
      break;
  }
  
  return state;
}


export default reducer;
