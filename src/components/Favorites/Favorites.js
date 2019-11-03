import React from "react";
import { connect } from "react-redux";

import AddFavorite from "../AddFavorite/AddFavorite"
import Weather from "../Weather/Weather";
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
            [...this.props.favorites.entries()].map((entry) => {
              return (
                <Weather
                  key={entry[0]}
                  onFetch={() => this.props.fetchWeatherByCityName(entry[0])}
                  onDelete={() => this.props.deleteFavorite(entry[0])}
                  forecast={entry[1]} />
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
