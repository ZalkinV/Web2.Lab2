import React from "react";
import Geolocation from "./components/Geolocation"

class App extends React.Component {
  render() {
    return (
      <div>
        <Geolocation />
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

export default App;
