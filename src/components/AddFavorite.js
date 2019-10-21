import React from "react";
import { connect } from "react-redux";


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

function mapStateToProps(){
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (cityName) => {
      dispatch({
        type: 1,
        payload: cityName
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFavorite);
