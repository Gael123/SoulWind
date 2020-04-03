
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
const mapElement = document.getElementById('map');

const buildMap = () => {
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    duration: 0.8,
    center: [151.2069,-34.0116],
    zoom: 12,


  });
}

// const geocoder = new MapboxGeocoder({
// accessToken: mapboxgl.accessToken,
// mapboxgl: mapboxgl
// });

const addControl = (map) => {
  map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true,
fitBoundsOptions: {
        zoom: 14,  // Zoom adjustment
        linear: false,
        animate: false,
      },

})
);
}






const addMarkersTo = (map, markers) => {

  markers.forEach((marker) => {
    // Create a HTML element for your custom marker


    new mapboxgl.Marker(element)
      .setLngLat([ marker.lng, marker.lat ])
      .setPopup(popup) //
      .addTo(map);

  });
}

  const fitMapToMarkers = (map, markers) => {
  const bounds = map.getBounds();
let NorthWest = bounds.getNorthWest()
  let West = bounds.getWest()
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
 map.fitBounds(bounds, { padding: 70, maxZoom: 12, duration: 0 });


};

const initMapbox = () => {
  if (mapElement) {
    // Build map
    const map = buildMap();
    const position = addControl(map);
    // Add Markers
    const markers = JSON.parse(mapElement.dataset.markers);
    addMarkersTo(map, markers);

    // Fit to markers
    fitMapToMarkers(map, markers);
     // addControl(map);
map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken,
                                      mapboxgl: mapboxgl }));

  }

};
export { initMapbox };
