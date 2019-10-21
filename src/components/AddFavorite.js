import React from "react";
import { connect } from "react-redux";
import { addFavorite } from "../actions";


class AddFavorite extends React.Component {
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="cityName" placeholder="City name" required={true} />
        <input type="submit" value="Add to favorite"/>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addFavorite(e.currentTarget.elements.cityName.value);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (cityName) => {
      dispatch(addFavorite(cityName));
    }
  };
}

export default connect(null, mapDispatchToProps)(AddFavorite);
