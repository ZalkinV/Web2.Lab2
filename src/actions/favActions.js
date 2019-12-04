import { API_BASE_URL } from "../api"


export const Actions = {
  GET_FAVORITES_SUCCESS: "GET_FAVORITES_SUCCESS",
  ADD_FAVORITE: "ADD_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  FETCH_FAV_SUCCESS: "FETCH_FAV_SUCCESS",
  FETCH_FAV_ERROR: "FETCH_FAV_ERROR" 
}


export function getFavorites() {
  const API_URL = `${API_BASE_URL}/favourites`;

  return function (dispatch) {
    fetch(API_URL)
      .then(response => {
        response.json()
          .then(json => {
            if (!response.ok) {
              console.log(json);
            } else {
              dispatch(getFavoritesSuccess(json));
            }
          });
      },
      error => console.log(error.message))
  }
}

export function getFavoritesSuccess(cities) {
  return {
    type: Actions.GET_FAVORITES_SUCCESS,
    payload: cities
  };
}

export function addFavorite(cityName) {
  return {
    type: Actions.ADD_FAVORITE,
    payload: cityName
  };
}

export function deleteFavorite(cityName) {
  return {
    type: Actions.DELETE_FAVORITE,
    payload: cityName
  };
}

export function fetchWeatherByCityName(cityName) {
  const API_URL = `${API_BASE_URL}/weather?cityName=${cityName}`;
  
  return function(dispatch) {
    fetch(API_URL)
      .then(response => {
        response.json()
          .then(json => {
            if (!response.ok) {
              dispatch(fetchFavError(json.message, cityName));
            } else {
              dispatch(fetchFavSuccess(json, cityName));
            }
          });
      },
      error => dispatch(fetchFavError(error.message, cityName)))
  }
}

function fetchFavSuccess(apiResponse, cityName) {
  return {
    type: Actions.FETCH_FAV_SUCCESS,
    payload: {
      apiResponse,
      cityName
    }
  }
}

function fetchFavError(error, cityName) {
  return {
    type: Actions.FETCH_FAV_ERROR,
    payload: {
      error,
      cityName
    }
  }
}
