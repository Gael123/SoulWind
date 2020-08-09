import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import { initMapbox } from '../plugins/init_mapbox';
import { initAutocomplete } from '../plugins/init_autocomplete';
import { fetchWeather, fetchCurrentPositionWeather, fetchForecastByCoordinates, fetchCurrentPositionForecast } from '../plugins/weather';
import { weather } from '../plugins/weather';
import ReactOnRails from 'react-on-rails';
import  { render } from 'react-dom';
import ReactDOM from 'react-dom';
import React from 'react';
var ReactWeather = require('react-open-weather').default;


ReactDOM.render(
  <ReactWeather
    // forecast="5days"
    apikey="9e482754ef144b23e87671041f96b9fc"
    type="city"
    city="Munich"
    lang="en"
  />,
  document.getElementById('root')
);

// ReactOnRails.register({
//     ReactWeather
// });


fetchCurrentPositionWeather();
// fetchForecastByCoordinates ();
fetchWeather();

// const form = document.querySelector('form');
// const coordinatesInput = document.getElementById('input');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   fetchWeatherByCoordinates(coordinatesInput.value);
// });

// const currentLocationLink = document.getElementById('current-location');
// currentLocationLink.addEventListener('click', fetchCurrentPositionWeather);
initMapbox();
initAutocomplete();
// fetchWeatherByCoordinates();
// fetchCurrentPositionWeather();
