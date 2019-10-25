import React from "react";
import { connect } from "react-redux";

import AddFavorite from "../AddFavorite/AddFavorite"
import Weather from "../Weather/Weather";
import { fetchWeatherByCityName } from "../../middlewares"
import { addFavorite, deleteFavorite, fetchWeatherPending, fetchWeatherError, fetchWeatherSuccess } from "../../actions";

import "./Favorites.css";


class Favorites extends React.Component {
  componentDidMount() {
    this.props.favorites.forEach((forecast, cityName) => {
      this.props.fetchWeatherByCityName(cityName);
    });
  }

  render() {
    return (
      <div class="favorites">
        <h1>Favorites</h1>
        <AddFavorite onSubmit={(e) => this.handleAddFavorite(e)} />
        {this.props.pending && 
          <>
            <img src={"/loader.svg"} alt="loader" />
            <p>Forecast is loading...</p>
          </>}
        <div class="forecasts">
          {
            [...this.props.favorites.values()].map((forecast) => {
              return (
                <div class="forecast" key={forecast.cityName}>
                  <Weather forecast={forecast} />
                  <button class="button" onClick={() => this.props.deleteFavorite(forecast.cityName)}>X</button>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

  handleAddFavorite(e) {
    e.preventDefault();
    const cityName = e.currentTarget.elements.cityName.value;
    this.props.fetchWeatherByCityName(cityName);
  }
}


function mapStateToProps(state) {
  return {
    favorites: state.favorites,
    pending: state.pending
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteFavorite: (cityName) => {
      dispatch(deleteFavorite(cityName)); 
    },

    fetchWeatherByCityName: (cityName) => {
      dispatch(fetchWeatherPending());
      
      let promise = fetchWeatherByCityName(cityName);
      promise
        .then(response => {
          response.json()
            .then(json => {
              console.log(response, json);
              if (!response.ok) {
                dispatch(fetchWeatherError(json.message));
              } else {
                dispatch(fetchWeatherSuccess());
                dispatch(addFavorite(json))
              }
            });
        },
        error => dispatch(fetchWeatherError(error)))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
