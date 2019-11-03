import { API_BASE_URL, API_BASE_PARAMETERS } from "../middlewares"


export const Actions = {
  ADD_FAVORITE: "ADD_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  FETCH_FAV_SUCCESS: "FETCH_FAV_SUCCESS",
  FETCH_FAV_ERROR: "FETCH_FAV_ERROR" 
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
  const API_URL = `${API_BASE_URL}?q=${cityName}${API_BASE_PARAMETERS}`;
  
  return function(dispatch) {
    fetch(API_URL)
      .then(response => {
        response.json()
          .then(json => {
            console.log(response, json);
            if (!response.ok) {
              dispatch(fetchFavError(json.message, cityName));
            } else {
              dispatch(fetchFavSuccess(json, cityName));
            }
          });
      },
      error => dispatch(fetchFavError(error, cityName)))
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
