function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: {lat: 8.360664267092943, lng:61.89020224576654},
      mapTypeId: 'terrain'
    });

    map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true, streetViewControl: false,});
