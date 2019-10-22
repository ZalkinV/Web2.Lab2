import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers";


const initialState = {
  weather: {
    cityName: undefined,
    temp: undefined,
    wind: undefined,
    humidity: undefined,
    pressure: undefined,
    coords: undefined
  },
  favorites: []
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(logger, thunk)
);

store.subscribe(() => {
  console.log("Store was changed!", store.getState());
});


export default store;
