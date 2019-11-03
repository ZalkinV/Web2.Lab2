import React from "react";
import { connect } from "react-redux";

import { setGeolocation, fetchWeatherByCoords } from "../../actions/geoActions";
import Weather from "../Weather/Weather";

import "./Geolocation.css";


class Geolocation extends React.Component {
  render() {
    return (
      <div className="geolocation">
        <h1 className="header">Refresh geolocation</h1>
        <button className="button"
          onClick={() => this.handleClick()}
        >Get geolocation</button>
        <Weather
          onFetch={() => this.props.fetchWeatherByCoords(this.props.coords)}
          forecast={this.props.forecast}/>
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

        this.props.fetchWeatherByCoords(coords);
      });
    } else {
      alert("Your browser does not support geolocation!");
    }
  }
}


function mapStateToProps(state) {
  return {
    coords: state.geo.coords,
    forecast: state.geo.forecast
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
