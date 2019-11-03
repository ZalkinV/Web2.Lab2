import React from "react";
import { connect } from "react-redux";

import AddFavorite from "../AddFavorite/AddFavorite"
import Weather from "../Weather/Weather";
import Loader from "../Loader/Loader";
import { addFavorite, deleteFavorite, fetchWeatherByCityName } from "../../actions/favActions";

import "./Favorites.css";


class Favorites extends React.Component {
  render() {
    return (
      <div class="favorites">
        <h1>Favorites</h1>
        <AddFavorite onSubmit={(e) => this.handleAddFavorite(e)} />
        {this.props.error && <div class="error">Error: {this.props.error}</div>}
        <div class="forecasts">
          {
            [...this.props.favorites.keys()].map((cityName) => {
              return (
                <Weather
                  key={cityName}
                  onFetch={() => this.props.fetchWeatherByCityName(cityName)}
                  onDelete={() => this.props.deleteFavorite(cityName)} />
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
    this.props.addFavorite(cityName);
  }
}


function mapStateToProps(state) {
  return {
    favorites: state.fav.favorites,
    error: state.fav.error
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
      dispatch(fetchWeatherByCityName(cityName));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
