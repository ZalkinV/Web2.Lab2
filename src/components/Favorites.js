import React from "react";
import { connect } from "react-redux";
import { deleteFavorite } from "../actions";

import AddFavorite from "./AddFavorite"
import Favorite from "./Favorite";


class Favorites extends React.Component {
  render() {
    return (
      <div>
        <h1>Favorites</h1>
        <AddFavorite />
        {
          this.props.favorites.map((item) => {
            return (
              <Favorite cityName={item} onClick={() => this.props.deleteFavorite(item)}/>
            );
          })
        }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    favorites: state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteFavorite: (cityName) => {
     dispatch(deleteFavorite(cityName)); 
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
