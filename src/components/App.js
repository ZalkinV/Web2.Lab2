import React from "react";
import Geolocation from "./Geolocation"
import AddFavorite from "./AddFavorite"
import Favorites from "./Favorites";

class App extends React.Component {
  render() {
    return (
      <div>
        <Geolocation />
        <h1>Hello, {this.props.name}</h1>
        <AddFavorite />
        <Favorites />
      </div>
    );
  }
}


export default App;
