import React from "react";

import "./Loader.css";


export default function Loader() {
  return (
    <div className="loader">
      <img src={"/loader.svg"} alt="loader" />
      <p>Forecast is loading...</p>
    </div>
  );
}
