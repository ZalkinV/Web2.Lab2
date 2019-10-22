import { fetchWeatherPending, fetchWeatherError, fetchWeatherSuccess } from "./actions";


const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_BASE_PARAMETERS = "&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en"

export function fetchWeatherByCityName(cityName) {
  return dispatch => {
    dispatch(fetchWeatherPending());

    const API_URL = `${API_BASE_URL}?q=${cityName}${API_BASE_PARAMETERS}`;
    fetch(API_URL)
      .then(response => {
        response.json().then(data => {
          dispatch(fetchWeatherSuccess(data));
          console.log(response, data);
        });
      })
      .catch(error => {
        dispatch(fetchWeatherError(error))
      });
  };
}
