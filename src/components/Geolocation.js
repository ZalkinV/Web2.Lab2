import React from "react";

class Geolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        latitude: null,
        longitude: null
      };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.handleClick()}
        >Обновить геолокацию</button>
        <p>Position: {this.state.latitude}, {this.state.longitude} </p>
      </div>
    );
  }

  handleClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p) => this.updateGeolocation(p.coords));
    } else {
      alert("Your browser does not support geolocation!");
    }
  }

  updateGeolocation(coords) {
    this.setState({ latitude: coords.latitude, longitude: coords.longitude })
  }
}

export default Geolocation;
