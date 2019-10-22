import React from "react";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../actions";

import AddFavorite from "./AddFavorite"
import Favorite from "./Favorite";


class Favorites extends React.Component {
  render() {
    return (
      <div>
        <h1>Favorites</h1>
        <AddFavorite onSubmit={(e) => this.handleAddFavorite(e)} />
        {
          this.props.favorites.map((item) => {
            return (
              <Favorite key={item} cityName={item} onClick={() => this.props.deleteFavorite(item)} />
            );
          })
        }
      </div>
    );
  }

  handleAddFavorite(e) {
    e.preventDefault();

    this.props.addFavorite(e.currentTarget.elements.cityName.value);
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
