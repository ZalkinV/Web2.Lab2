import React from "react";
import { connect } from "react-redux";


class AddFavorite extends React.Component {
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="city" placeholder="City name" />
        <input type="submit" value="Add to favorite"/>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.props);
    this.props.addFavorite(e.currentTarget.elements.city.value);
  }
}

function mapStateToProps(){
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (city) => {
      dispatch({
        type: 1,
        payload: city
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFavorite);
