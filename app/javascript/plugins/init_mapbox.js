import mapboxgl from 'mapbox-gl';

const mapElement = document.getElementById('map');


const buildMap = () => {
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
     center: [151.21535, -34.00955], // starting position
    zoom: 12 // starting zoom
  });
}

const addMarkersTo = (map, markers) => {

  markers.forEach((marker) => {
    // Create a HTML element for your custom marker
    const element = document.createElement('div');
    element.className = 'marker';
    element.style.backgroundImage = `url('${marker.image_url}')`;
    element.style.backgroundPosition = 'center';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundSize = 'contain';
    element.style.width = '35px';
    element.style.height = '35px';

    new mapboxgl.Marker(element)
      .setLngLat([ marker.lng, marker.lat ])
      .addTo(map);
  });
}

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 12, duration: 0 });
};

const initMapbox = () => {
  if (mapElement) {
    // Build map
    const map = buildMap();

    // Add Markers
    const markers = JSON.parse(mapElement.dataset.markers);
    addMarkersTo(map, markers);

    // Fit to markers
    fitMapToMarkers(map, markers);
  }
};
export { initMapbox };
