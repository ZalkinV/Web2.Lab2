import React from "react";
import { connect } from "react-redux";

import AddFavorite from "./AddFavorite"
import Weather from "./Weather";
import { fetchWeatherByCityName } from "../middlewares"
import { addFavorite, deleteFavorite, fetchWeatherPending, fetchWeatherError, fetchWeatherSuccess } from "../actions";


class Favorites extends React.Component {
  render() {
    return (
      <div>
        <h1>Favorites</h1>
        <AddFavorite onSubmit={(e) => this.handleAddFavorite(e)} />
        {
          this.props.favorites.map((item) => {
            return (
              <div key={item}>
                <Weather cityName={item} />
                <button onClick={() => this.props.deleteFavorite(item)}>X</button>
              </div>
            );
          })
        }
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
    favorites: state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (cityName) => {
      dispatch(addFavorite(cityName));
    },

    deleteFavorite: (cityName) => {
      dispatch(deleteFavorite(cityName)); 
    },

    fetchWeatherByCityName: (cityName) => {
      dispatch(fetchWeatherPending());
      let promise = fetchWeatherByCityName(cityName);

      promise
        .then(response => {
          response.json().then(data => {
            dispatch(fetchWeatherSuccess(data));
            console.log(response, data);
            dispatch(addFavorite(data.name))
          });
        })
        .catch(error => {
          dispatch(fetchWeatherError(error))
        });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
