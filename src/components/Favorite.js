import React from "react";

export default function Favorite(props) {
  return (
    <div>
      <p>{props.cityName}</p>
      <button onClick={() => props.onClick()}>X</button>
    </div>
  );
}
