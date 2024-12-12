'use strict';

const btn = document.querySelector('.track-button');

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zYW1hcmlhbnVuZXpyaXZlcmEiLCJhIjoiY2xxMWJiOXlhMDd1MzJtbzViNnZqd214dSJ9.Ots2kI7dKHtA2K0eNTp7aA';
const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.006, 40.7128],
  zoom: 14,
  pitch: 40
});

function getLocation(position) {
    let { latitude, longitude } = position.coords;

    console.log(
        `Latitude: ${latitude}\n +
        Longitude: ${longitude}`
    );

    map.setCenter([longitude, latitude]);

    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
}

function errorHandler() {
    console.log('Unable to retrieve your location');
}

const options = {
    enableHighAccuracy: true
};

btn.addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            getLocation, 
            errorHandler,
            options
        );
    } else {
        console.log('Geolocation is not supported by your browser');
    }
});