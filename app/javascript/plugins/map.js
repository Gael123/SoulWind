import mapboxgl from 'mapbox-gl';
import fetch from 'cross-fetch';
import { storeCurrentPosition, getCurrentPosition } from './location';

const mapElement = document.getElementById('map');

export default class Map {
  constructor(mapSelector) {
    this.mapEl = document.querySelector(mapSelector);
    // this.postCardContainerEl = document.querySelector(postCardContainerSelector);

    this.currentMarkers = {};
    // this.currentPosts = {};
    this.map = null;
    this.mapMode = EXPLORE_MODE;
    this.geolocateControl = null;
    // this.activePost = null;
    this.initialLocationLoaded = false;


    if (this.mapEl ) {
      this.init();
    }
    else {
      console.warn('Map element ');

    }
  }

init () {
this.map = this.buildMap();
this.geolocateControl =this.buildGeoControl();
this.map.addControl(this.geolocateControl);

this.map.on('load', (e) => {
      this.geolocateControl.trigger();
    });

this.geolocateControl.on('geolocate', (position) => {
this.removeLoading();
this.initialLocationLoaded = true;
storeCurrentPosition(position);


});

const buildGeoControl = () => {
    return new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
        trackUserLocation: true,
      },
      fitBoundsOptions: {
        maxZoom: 17,  // Zoom adjustment
        linear: false,
        animate: false,
      },
    });
  }

const buildMap = () => {
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    duration: 0.8,
    pitch:45,
    center: [151.2205038,-33.8499252],
    zoom: 10,
  });
}












