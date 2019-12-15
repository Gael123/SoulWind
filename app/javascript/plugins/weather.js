const API_KEY = '9e482754ef144b23e87671041f96b9fc';

const icon = document.getElementById('icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
// const city = document.getElementById('city');
const date = document.getElementById('date');

// const updateCard = (data) => {
//   icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//   temperature.innerText = `${Math.round(data.main.temp) - 273}°C`;
//   description.innerText = data.weather[0].description;
//   city.innerText = data.name;
//   const today = new Date();
//   const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric' };
//   const formattedDate = today.toLocaleDateString("en-US", options);
//   date.innerText = formattedDate;
// };

const fetchWeather = (cityName = 'Paris') => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(updateCard);
};

const fetchWeatherByCoordinates = (coordinates) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(updateCard);
};

const fetchCurrentPositionWeather = (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition((data) => {
    fetchWeatherByCoordinates({ lat: data.coords.latitude, lon: data.coords.longitude });
  });
};

export { fetchWeather, fetchCurrentPositionWeather };
