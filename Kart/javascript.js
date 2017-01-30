async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"

function initMap() {
  var Norway = {lat: 62.00, lng: 10.000};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: Norway
  });
  var marker = new google.maps.Marker({
    position: Norway,
    map: map
  });
}
