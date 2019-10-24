import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers";


const initialState = {
  geolocation: {
    coords: {
      lat: 43.02,
      lon: 44.68
    }
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
