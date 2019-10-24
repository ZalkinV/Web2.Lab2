import React from "react";
import { getIconURL } from "../../middlewares";
import WeatherParam from "../WeatherParam";


export default function Weather(props) {
  return (
    <div>
      <div>
        <div>{props.forecast.cityName}</div>
        <div>{props.forecast.temperature}</div>
        <img src={getIconURL(props.forecast.icon)} alt="Weather icon" />
      </div>

      <WeatherParam name="Wind" value={props.forecast.windSpeed} />
      <WeatherParam name="Cloudness" value={props.forecast.description} />
      <WeatherParam name="Pressure" value={`${props.forecast.pressure}hPa`} />
      <WeatherParam name="Humidity" value={`${props.forecast.humidity}%`} />
      <WeatherParam name="Coords" value={`${props.forecast.coords.lat}, ${props.forecast.coords.lon}`} />
    </div>
  );
}
