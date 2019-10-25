import React from "react";
import { connect } from "react-redux";

import { fetchWeatherByCoords } from "../../middlewares";
import { setGeolocationWeather, fetchWeatherPending, fetchWeatherSuccess, fetchWeatherError } from "../../actions";
import Weather from "../Weather/Weather";

import "./Geolocation.css";


class Geolocation extends React.Component {
  componentDidMount() {
    this.props.fetchWeatherByCoords(this.props.forecast.coords);
  }

  render() {
    return (
      <div class="geolocation">
        <h1 class="header">Refresh geolocation</h1>
        <button class="button"
          onClick={() => this.handleClick()}
        >Get geolocation</button>
        <Weather forecast={this.props.forecast}/>
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
        this.props.fetchWeatherByCoords(coords);
      });
    } else {
      alert("Your browser does not support geolocation!");
    }
  }
}


function mapStateToProps(state) {
  return {
    forecast: state.geolocation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWeatherByCoords: (coords) => {
      dispatch(fetchWeatherPending());
      
      let promise = fetchWeatherByCoords(coords);
      promise
        .then(response => {
          response.json()
            .then(json => {
              console.log(response, json);
              if (!response.ok) {
                dispatch(fetchWeatherError(json.message));
              } else {
                dispatch(fetchWeatherSuccess());
                dispatch(setGeolocationWeather(json))
              }
            });
        },
        error => dispatch(fetchWeatherError(error)))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocation);