
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -26.875450, lng: 28.229910 },
    zoom: 8,
  });
}
