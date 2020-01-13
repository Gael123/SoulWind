import mapboxgl from 'mapbox-gl';


const mapElement = document.getElementById('map');

const buildMap =() => {
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    duration: 0.8,
    pitch:85,
    center: [151.2205038,-33.8499252],
    zoom: 13,
  });
};


const addControl =(map) =>{
  map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },

  trackUserLocation: true

 })

    );
}

const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    new mapboxgl.Marker()
      .setLngLat([ marker.lng, marker.lat ])
      .addTo(map);
  });
};


const fitMapToMarkers = (map, markers) => {
  const bounds =map.getBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
};

const initMapbox = () => {
  {
    const map = buildMap();
    const markers = JSON.parse(mapElement.dataset.markers);
    addMarkersToMap(map, markers);
    fitMapToMarkers(map, markers);
    addControl(map);


}
};












export { initMapbox };
