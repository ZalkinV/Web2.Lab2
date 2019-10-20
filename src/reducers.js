function reducer(state, action) {
  console.log("reducer", action);
  state = {
    ...state,
    weather: {
      ...state.weather,
      city: action.payload
    }
  };
  
  return state;
}

export default reducer;
