export const Actions = Object.freeze({
  ADD_FAVORITE: "ADD_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  FETCH_WEATHER_PENDING: "FETCH_WEATHER_PENDING",
  FETCH_WEATHER_SUCCESS: "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_ERROR: "FETCH_WEATHER_ERROR",
});


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

export function fetchWeatherPending() {
  return {
    type: Actions.FETCH_WEATHER_PENDING,
  };
}

export function fetchWeatherSuccess(weather) {
  return {
    type: Actions.FETCH_WEATHER_SUCCESS,
    payload: weather
  };
}

export function fetchWeatherError(error) {
  return {
    type: Actions.FETCH_WEATHER_ERROR,
    payload: error
  };
}
