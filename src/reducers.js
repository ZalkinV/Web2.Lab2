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
      break;
    
    case Actions.DELETE_FAVORITE:
      break;

    default:
      break;
  }
  
  return state;
}


export default reducer;
