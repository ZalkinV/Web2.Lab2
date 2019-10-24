import React from "react";
import { connect } from "react-redux";

import { fetchWeatherByCoords } from "../middlewares";
import { setGeolocationWeather, fetchWeatherPending, fetchWeatherSuccess, fetchWeatherError } from "../actions";


class Geolocation extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.handleClick()}
        >Get geolocation</button>
      </div>
    );
  }

  handleClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => this.props.fetchWeatherByCoords(position.coords));
    } else {
      alert("Your browser does not support geolocation!");
    }
  }
}


function mapStateToProps(state) {
  return {
    geolocation: state.geolocation
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
