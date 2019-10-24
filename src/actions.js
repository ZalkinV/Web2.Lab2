export const Actions = Object.freeze({
  SET_GEOLOCATION: "SET_GEOLOCATION",
  ADD_FAVORITE: "ADD_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  FETCH_WEATHER_PENDING: "FETCH_WEATHER_PENDING",
  FETCH_WEATHER_SUCCESS: "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_ERROR: "FETCH_WEATHER_ERROR",
});


export function setGeolocationWeather(forecast) {
  return {
    type: Actions.SET_GEOLOCATION,
    payload: extractWeatherParams(forecast)
  }
}

export function addFavorite(forecast) {
  return {
    type: Actions.ADD_FAVORITE,
    payload: extractWeatherParams(forecast)
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

export function fetchWeatherSuccess() {
  return {
    type: Actions.FETCH_WEATHER_SUCCESS,
  };
}

export function fetchWeatherError(error) {
  return {
    type: Actions.FETCH_WEATHER_ERROR,
    payload: error
  };
}


function extractWeatherParams(forecast) {
  const {
    coord: coords,
    weather: [{ icon, description }],
    main: {
      temp: temperature,
      pressure,
      humidity
    },
    wind: {
      speed: windSpeed
    },
    name: cityName
  } = forecast;

  return {
    cityName,
    temperature,
    pressure,
    humidity,
    windSpeed,
    icon,
    description,
    coords
  }
}
