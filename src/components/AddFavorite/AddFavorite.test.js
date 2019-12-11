import React from "react";
import renderer from "react-test-renderer";

import AddFavorite from "./AddFavorite";


describe("<AddFavorite /> render", () => {

  test("should have form with text input and button", () => {
    const tree = renderer
      .create(<AddFavorite />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
