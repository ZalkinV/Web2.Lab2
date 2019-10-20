import React from "react";
import Geolocation from "./components/Geolocation"
import AddFavorite from "./components/AddFavorite"
import { createStore } from "redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <Geolocation />
        <h1>Hello, {this.props.name}</h1>
        <AddFavorite />
      </div>
    );
  }
}

const initialState = {
  city: {
    name: undefined,
    temp: undefined,
    wind: undefined,
    humidity: undefined,
    pressure: undefined,
    coords: undefined
  },
  favorites: []
};

function reducer(state = initialState, action) {
  state.city = action.payload;
  return state;
}

const store = createStore(reducer);
store.subscribe(() => {
  console.log("Store was changed!", store.getState());
});

store.dispatch({
  type: 1,
  payload: 1
});

store.dispatch({
  type: 1,
  payload: 2
});


export default App;
