import React from "react";
import Geolocation from "./Geolocation"
import Favorites from "./Favorites";

class App extends React.Component {
  render() {
    return (
      <div>
        <Geolocation />
        <h1>Hello, {this.props.name}</h1>
        <Favorites />
      </div>
    );
  }
}


export default App;
