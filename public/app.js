var init = function() {
  var container = document.getElementById('main-map');
  var center = {lat: 51.5, lng: -0.127758};
  var mainMap = new MapWrapper(container, center, 10);
  mainMap.addMarker(center);
  // var markerPosition = {lat: 21.16, lng: -86.85};
  // mainMap.addMarker(markerPosition);
  mainMap.addClickEvent();
  var chicagoButton = document.querySelector('#chicago-button');
  chicagoButton.onclick = handleChicagoButtonClick;
  var geoButton = document.querySelector('#geo-button');
  geoButton.onclick = geoFindMe;
}

var handleChicagoButtonClick = function() {
  var container = document.getElementById('main-map');
  var chicago = {lat: 41.87, lng: -87.63};
  var mainMap = new MapWrapper(container, chicago, 10);
  mainMap.addMarker(chicago);
  mainMap.addClickEvent();
  // var chicagoButton = document.querySelector('#chicago-button');
  // chicagoButton.style.display = "none";
}

function geoFindMe() {
  var container = document.getElementById('main-map');

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    container.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var location = {lat: latitude, lng: longitude};
    var mainMap = new MapWrapper(container, location, 10);
    mainMap.addMarker(location);
    mainMap.addClickEvent();

  }

  function error() {
    container.innerHTML = "Unable to retrieve your location";
  }

  container.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

window.onload = init;