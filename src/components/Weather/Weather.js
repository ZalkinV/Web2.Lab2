import React from "react";

import { getIconURL } from "../../middlewares";
import WeatherParam from "../WeatherParam/WeatherParam";

import "./Weather.css";
import Loader from "../Loader/Loader";


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    this.props.onFetch();
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoader();
    } else {
      return this.renderWeather();
    }
  }

  renderLoader() {
    return <Loader />
  }

  renderWeather() {
    const {
      forecast: {
        cityName,
        temperature,
        icon,
        windSpeed,
        description,
        pressure,
        humidity,
        coords: {
          lat: latitude,
          lon: longitude
        } = {}
      },
      onDelete
    } = this.props;

    return (
      <div class="weather">
        <div class="header">
          <div class="city-name">{cityName}</div>
          <div class="temperature">{temperature} &#8451;</div>
          <img src={getIconURL(icon)} alt="Weather icon" />
        </div>

        <WeatherParam name="Wind" value={`${windSpeed} m/s`} />
        <WeatherParam name="Cloudness" value={description} />
        <WeatherParam name="Pressure" value={`${pressure} hPa`} />
        <WeatherParam name="Humidity" value={`${humidity}%`} />
        <WeatherParam name="Coords" value={`${latitude}, ${longitude}`} />

        {onDelete && <button class="button" onClick={onDelete}>X</button>}
      </div>
    );
  }
}
