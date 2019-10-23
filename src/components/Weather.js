import React from "react";


export default function Weather(props) {
  return (
    <div>
      <div>{props.forecast.cityName}</div>
    </div>
  );
}


