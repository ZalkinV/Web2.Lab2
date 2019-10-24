import React from "react";
import Geolocation from "./Geolocation"
import Favorites from "./Favorites";

class App extends React.Component {
  render() {
    return (
      <div>
        <Geolocation />
        <Favorites />
      </div>
    );
  }
}


export default App;
