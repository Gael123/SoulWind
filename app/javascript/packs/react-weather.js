import React from 'react';
import { render } from 'react-dom';
import ReactWeather from '../components/ReactWeather';

render(
  <ReactWeather
    forecast="5days"
    apikey="9e482754ef144b23e87671041f96b9fc"
    type="city"
    city="Munich"
    lang="en"
  />,
  document.getElementById('root')
);
