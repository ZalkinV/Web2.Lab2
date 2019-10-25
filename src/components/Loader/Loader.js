import React from "react";

import "./Loader.css";


export default function Loader(props) {
  return (
    <div class="loader">
      <img src={"/loader.svg"} alt="loader" />
      <p>Forecast is loading...</p>
    </div>
  );
}
