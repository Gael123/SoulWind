const API_KEY = '9e482754ef144b23e87671041f96b9fc';
const forecastspeed = document.getElementById('forecastspeed');
// const feels = document.getElementById('feels');

const direction = document.getElementById('forecastdirection')
const city = document.getElementById('city');


const forecastCard = (data) => {

  city.innerText = data.city.name;

  forecastspeed.innerText = `${Math.round(data.list.wind.speed) * 1.9438}Knots`;


  var d2d = require('degrees-to-direction');
  forecastdirection.innerText = d2d(data.list.wind.deg);



};


const fetchForecastByCoordinates = (coordinates) => {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(forecastCard);

};

const fetchCurrentPositionForecast = (event) => {
  // event.preventDefault();
  navigator.geolocation.getCurrentPosition((data) => {
    fetchForecastByCoordinates({ lat: data.coords.latitude, lon: data.coords.longitude });
  });
};

export { fetchForecastByCoordinates, fetchCurrentPositionForecast };
