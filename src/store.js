import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import favReducer from "./reducers/favReducer";
import geoReducer from "./reducers/geoReducer";
import { LOCAL_STORAGE_KEY } from "./localStorage";


const store = createStore(
  combineReducers({fav: favReducer, geo: geoReducer}),
  applyMiddleware(thunk)
);

store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...store.getState().fav.favorites.keys()]));
});


export default store;
