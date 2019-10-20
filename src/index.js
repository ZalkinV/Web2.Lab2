import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";


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

function reducer(state, action) {
  state = {
    ...state,
    weather: {
      ...state.weather,
      city: action.payload
    }
  };
  return state;
}

function middleware(store) {
  return next => action => {
    console.log("Old state", store.getState());
    console.log("Action", action);
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


ReactDOM.render(
  <Provider store={store}>
    <App name="Viktor" />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
