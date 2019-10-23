import { fetchWeatherPending, fetchWeatherError, fetchWeatherSuccess, addFavorite } from "./actions";


const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_BASE_PARAMETERS = "&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en"

export function fetchWeatherByCityName(cityName) {
  const API_URL = `${API_BASE_URL}?q=${cityName}${API_BASE_PARAMETERS}`;
  return fetchWeather(API_URL);
}

export function fetchWeatherByCoords(coords) {
  const API_URL = `${API_BASE_URL}?lat=${coords.lat}&lon=${coords.lon}${API_BASE_PARAMETERS}`;
  return fetchWeather(API_URL);
}

function fetchWeather(url) {
  return function(dispatch) {
    dispatch(fetchWeatherPending());

    fetch(url)
      .then(response => {
        response.json().then(data => {
          dispatch(fetchWeatherSuccess(data));
          console.log(response, data);
          dispatch(addFavorite(data.name))
        });
      })
      .catch(error => {
        dispatch(fetchWeatherError(error))
      });
  }
}
