import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";


const initialState = {
  weather: {
    city: undefined,
    temp: undefined,
    wind: undefined,
    humidity: undefined,
    pressure: undefined,
    coords: undefined
  },
  favorites: []
};

function middleware(store) {
  return next => action => {
    console.log("Old state", store.getState());
    next(action);
    console.log("New state", store.getState());
  }
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(middleware)
);

store.subscribe(() => {
  console.log("Store was changed!", store.getState());
});


export default store;
