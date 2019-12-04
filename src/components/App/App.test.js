import React from "react";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "./App";


describe("<App /> render", () => {

  const storeCreator = configureStore([thunk]);
  const DEFAULT_STORE = storeCreator({
    fav: {
      favorites: []
    },
    geo: {}
  });

  test("should have <Favorites /> and <Geolocation /> with empty state", () => {
    const tree = renderer
      .create(
        <Provider store={DEFAULT_STORE}>
          <App />
        </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
