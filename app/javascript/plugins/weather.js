const API_KEY = '9e482754ef144b23e87671041f96b9fc';

const icon = document.getElementById('icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const city = document.getElementById('city');
const date = document.getElementById('date');
const speed = document.getElementById('speed');
const feels = document.getElementById('feels');

const direction = document.getElementById('direction')
const update  = document.getElementById('update')

const updateCard = (data) => {
  icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  temperature.innerText = `${Math.round(data.main.temp) - 273}°C`;
  // description.innerText = data.weather[0].description;
  city.innerText = data.name;
  feels.innerText = `${Math.round(data.main.feels_like) - 273}°C`;
  speed.innerText = `${Math.round(data.wind.speed) * 1.9438}Knots`;


  var d2d = require('degrees-to-direction');
  direction.innerText = d2d(data.wind.deg);

  // update.innerText =  data.lastupdate.value;

  // const today = new Date();
  // const localOffset = data.timezone + today.getTimezoneOffset() * 60;
  // const localDate = new Date(today.setUTCSeconds(localOffset));
  // const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  // const formattedDate = localDate.toLocaleDateString("en-US", options);
  // date.innerText = formattedDate;
};



const fetchWeather = (cityName = 'Paris') => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(updateCard);
};

const results = document.querySelector("#results");
const fetchWeatherByCoordinates = (coordinates) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(updateCard);

};




// const coordinates = document.querySelector('#results');
// const form = document.querySelector('form');
// const coordinatesInput = document.getElementById('input');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   fetchWeatherByCoordinates(coordinatesInput.value);
// });



const fetchCurrentPositionWeather = (event) => {
  // event.preventDefault();
  navigator.geolocation.getCurrentPosition((data) => {
    fetchWeatherByCoordinates({ lat: data.coords.latitude, lon: data.coords.longitude });
  });
};


const forecastspeed = document.getElementById('forecastspeed');

const forecastdirection = document.getElementById('forecastdirection')

const forecastCard = (data) => {
  forecastspeed.innerText = `${Math.round(data.list.wind.speed) * 1.9438}Knots`;
 var d2d = require('degrees-to-direction');

  forecastdirection.innerText = d2d(data.list.wind.deg);

};

const fetchForecastByCoordinates = (coordinates) => {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(forecastCard);
    // .then(forecastCard);

};

const fetchCurrentPositionForecast = (event) => {
  // event.preventDefault();
  navigator.geolocation.getCurrentPosition((data) => {
    fetchForecastByCoordinates({ lat: data.coords.latitude, lon: data.coords.longitude });
  });
};


export { fetchWeather, fetchCurrentPositionWeather,fetchForecastByCoordinates };
