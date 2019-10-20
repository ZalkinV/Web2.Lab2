import React from "react";

class AddFavorite extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="city" placeholder="City name" />
        <input type="submit" value="Add to favorite"/>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(e.currentTarget.elements.city.value);
  }
}

export default AddFavorite;
