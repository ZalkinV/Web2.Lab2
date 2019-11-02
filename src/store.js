import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers";


const LOCAL_STORAGE_KEY = "favorites";

function getFavoritesFromStorage() {
  const localStorageContent = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  let favorites = [];
  if (localStorageContent !== null && Array.isArray(localStorageContent))
    favorites = localStorageContent;
  return new Map(favorites.map(cityName => [cityName, {coords: {}}]));
}


const initialState = {
  geolocation: {
    coords: {
      lat: 43.02,
      lon: 44.68
    }
  },
  favorites: getFavoritesFromStorage()
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(logger, thunk)
);

store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...store.getState().favorites.keys()]));
});


export default store;
