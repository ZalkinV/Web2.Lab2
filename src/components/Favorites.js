import React from "react";
import { connect } from "react-redux";

class Favorites extends React.Component {
  render() {
    return (
      <div>
        <h1>Favorites</h1>
        {
          this.props.favorites.map((item) => { return <p>{item}</p>; })
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


export default connect(mapStateToProps)(Favorites);
