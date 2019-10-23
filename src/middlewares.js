const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_BASE_PARAMETERS = "&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en"
const API_ICON_URL = "https://openweathermap.org/img/wn/";


export function fetchWeatherByCityName(cityName) {
  const API_URL = `${API_BASE_URL}?q=${cityName}${API_BASE_PARAMETERS}`;
  return fetchWeather(API_URL);
}

export function fetchWeatherByCoords(coords) {
  const API_URL = `${API_BASE_URL}?lat=${coords.lat}&lon=${coords.lon}${API_BASE_PARAMETERS}`;
  return fetchWeather(API_URL);
}

export function getIconURL(iconCode) {
  return `${API_ICON_URL}${iconCode}.png`;
}

function fetchWeather(url) {
  return fetch(url);
}
