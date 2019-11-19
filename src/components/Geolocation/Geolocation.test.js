import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Geolocation from "./Geolocation";


describe("<Geolocation /> render", () => {

  const DEFAULT_FORECAST = {
    cityName: "New York",
    temperature: "-22",
    icon: "icon_code",
    windSpeed: 15,
    description: "good to stay at home",
    pressure: 234,
    humidity: 1,
    coords: {
      lat: 74,
      lon: 89
    }
  };

  const DEFAULT_COORDS = {
    lat: 12,
    lon: 34
  };

  const storeCreator = configureStore();

  const DEFAULT_STORE = storeCreator({
    geo: {}
  });


  test("should has only coords", () => {
    const store = {
      ...DEFAULT_STORE,
      geo: {
        coords: DEFAULT_COORDS
      }
    };

    const tree = renderer
      .create(
        <Provider store={store}>
          <Geolocation
            onFetch={() => {}}
          />
        </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
