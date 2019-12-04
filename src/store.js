import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import favReducer from "./reducers/favReducer";
import geoReducer from "./reducers/geoReducer";


const store = createStore(
  combineReducers({fav: favReducer, geo: geoReducer}),
  applyMiddleware(logger, thunk)
);


export default store;
