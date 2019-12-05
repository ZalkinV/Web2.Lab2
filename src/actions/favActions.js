import { API_BASE_URL } from "../api"


export const Actions = {
  GET_FAVORITES_SUCCESS: "GET_FAVORITES_SUCCESS",
  GET_FAVORITES_ERROR: "GET_FAVORITES_ERROR",
  ADD_FAVORITE: "ADD_FAVORITE",
  ADD_FAVORITE_SUCCESS: "ADD_FAVORITE_SUCCESS",
  ADD_FAVORITE_ERROR: "ADD_FAVORITE_ERROR",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  DELETE_FAVORITE_ERROR: "DELETE_FAVORITE_ERROR",
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
            if (response.ok) {
              dispatch(getFavoritesSuccess(json));
            } else {
              dispatch(getFavoritesError(json.message));
            }
          });
      },
      error => dispatch(getFavoritesError(error.message)))
  }
}

function getFavoritesSuccess(cities) {
  return {
    type: Actions.GET_FAVORITES_SUCCESS,
    payload: cities
  };
}

function getFavoritesError(error) {
  return {
    type: Actions.GET_FAVORITES_ERROR,
    payload: error
  };
}

export function addFavorite(cityName) {
  const API_URL = `${API_BASE_URL}/favourites`;
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cityName })
  };

  return function (dispatch) {
    dispatch({
      type: Actions.ADD_FAVORITE,
      payload: cityName
    });

    fetch(API_URL, fetchOptions)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok)
              dispatch(addFavoriteSuccess(cityName, json.forecast));
            else
              dispatch(addFavoriteError(cityName, json.message));
          });
      },
      error => dispatch(addFavoriteError(cityName, error)))
  }
}

function addFavoriteSuccess(cityName, apiResponse) {
  return {
    type: Actions.ADD_FAVORITE_SUCCESS,
    payload: {
      cityName,
      apiResponse
    }
  };
}

function addFavoriteError(cityName, error) {
  return {
    type: Actions.ADD_FAVORITE_ERROR,
    payload: {
      cityName,
      error
    }
  };
}
    

export function deleteFavorite(cityName) {
  const API_URL = `${API_BASE_URL}/favourites`;
  const fetchOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cityName }),
  };

  return function(dispatch) {
    dispatch({
      type: Actions.DELETE_FAVORITE,
      payload: cityName
    });

    fetch(API_URL, fetchOptions)
      .then(response => {
        response.json()
          .then(json => {
            if (!response.ok)
              dispatch(deleteFavoriteError(cityName, json.message));
          });
      },
      error => dispatch(deleteFavoriteError(cityName, error.message)));
  };
}

function deleteFavoriteError(error) {
  return {
    type: Actions.DELETE_FAVORITE_ERROR,
    payload: error
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
