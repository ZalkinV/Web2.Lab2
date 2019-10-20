import React from "react";
import Geolocation from "./Geolocation"
import AddFavorite from "./AddFavorite"

class App extends React.Component {
  render() {
    return (
      <div>
        <Geolocation />
        <h1>Hello, {this.props.name}</h1>
        <AddFavorite />
      </div>
    );
  }
}


export default App;
