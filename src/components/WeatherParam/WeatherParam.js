import React from "react";

import "./WeatherParam.css";


export default function WeatherParam(props) {
  return (
    <div class="param">
      <div class="name">{props.name}</div>
      <div class="value">{props.value}</div>
    </div>
  );
}
