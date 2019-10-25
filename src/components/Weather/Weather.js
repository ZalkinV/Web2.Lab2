import React from "react";
import { getIconURL } from "../../middlewares";
import WeatherParam from "../WeatherParam/WeatherParam";

import "./Weather.css";


export default function Weather(props) {
  const {
    forecast: {
      cityName,
      temperature,
      icon,
      windSpeed,
      description,
      pressure,
      humidity,
      coords: {
        lat: latitude,
        lon: longitude
      } = {}
    }
  } = props;

  return (
    <div class="weather">
      <div class="header">
        <div class="city-name">{cityName}</div>
        <div class="temperature">{temperature} &#8451;</div>
        <img src={getIconURL(icon)} alt="Weather icon" />
      </div>

      <WeatherParam name="Wind" value={`${windSpeed} m/s`} />
      <WeatherParam name="Cloudness" value={description} />
      <WeatherParam name="Pressure" value={`${pressure} hPa`} />
      <WeatherParam name="Humidity" value={`${humidity}%`} />
      <WeatherParam name="Coords" value={`${latitude}, ${longitude}`} />
    </div>
  );
}
