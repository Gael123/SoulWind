import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import { initMapbox } from '../plugins/init_mapbox';
import { initAutocomplete } from '../plugins/init_autocomplete';
import { fetchWeather, fetchCurrentPositionWeather, fetchForecastByCoordinates, fetchCurrentPositionForecast } from '../plugins/weather';
import { weather } from '../plugins/weather';
import ReactOnRails from 'react-on-rails';

var ReactWeather = require('react-open-weather').default;


ReactOnRails.register({
    ReactWeather
});


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