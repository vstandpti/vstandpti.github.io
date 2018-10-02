function myMap() {
  var myCenter = new google.maps.LatLng(-6.284471, 106.637384);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content: "V'STAND ADA DI SINI!"
  });
  infowindow.open(map,marker);
}
