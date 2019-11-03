import React from "react";
import { connect } from "react-redux";

import { setGeolocation, fetchWeatherByCoords } from "../../actions/geoActions";
import Weather from "../Weather/Weather";

import "./Geolocation.css";


class Geolocation extends React.Component {
  render() {
    return (
      <div class="geolocation">
        <h1 class="header">Refresh geolocation</h1>
        <button class="button"
          onClick={() => this.handleClick()}
        >Get geolocation</button>
        <Weather onFetch={() => this.props.fetchWeatherByCoords}/>
      </div>
    );
  }

  handleClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        this.props.setGeolocation(coords);
      });

      this.props.fetchWeatherByCoords(this.props.geolocation.coords);
    } else {
      alert("Your browser does not support geolocation!");
    }
  }
}


function mapStateToProps(state) {
  return {
    forecast: state.geo.geolocation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setGeolocation: (coords) => {
      dispatch(setGeolocation(coords));
    },

    fetchWeatherByCoords: (coords) => {
      dispatch(fetchWeatherByCoords(coords));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocation);
