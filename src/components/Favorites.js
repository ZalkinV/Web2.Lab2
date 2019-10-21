import React from "react";
import { connect } from "react-redux";
import { deleteFavorite } from "../actions";

class Favorites extends React.Component {
  render() {
    return (
      <div>
        <h1>Favorites</h1>
        {
          this.props.favorites.map((item) => {
            return (
              <div>
                <p>{item}</p>
                <button onClick={() => this.props.deleteFavorite(item)}>X</button>
              </div>
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
