import React from "react";
import { getIconURL } from "../middlewares";


export default function Weather(props) {
  return (
    <div>
      <div>{props.forecast.cityName}</div>
      <img src={getIconURL(props.forecast.icon)} alt="Weather icon" />
    </div>
  );
}


