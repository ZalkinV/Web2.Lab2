import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";
import loggerMiddleware from "./middlewares";


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
  applyMiddleware(loggerMiddleware)
);

store.subscribe(() => {
  console.log("Store was changed!", store.getState());
});


export default store;
