import React from "react";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Favorites from "./Favorites";


describe("<Favorites /> render", () => {

  const storeCreator = configureStore([thunk]);

  beforeAll(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue("fake success response")
    });
  });

  afterAll(() => {
    delete global.fetch;
  });

  test("should has error", () => {
    const store = storeCreator({
      fav: {
        error: "test error message",
        favorites: new Map()
      }
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <Favorites />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("should has empty favorites", () => {
    const store = storeCreator({
      fav: {
        favorites: new Map()
      }
    });

    const tree = renderer
    .create(
      <Provider store={store}>
        <Favorites />
      </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
