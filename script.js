var map_var = L.map('map_id').setView([
         -33.883072,18.5248993
      ], 12);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map_var);

L.gridLayer.googleMutant({
      maxZoom: 24,
      type:'roadmap'
    }).addTo(map_var);



$.getJSON( "bike_coordinate.json", function(json1) {

   for (var i = 0; i < json1.length; i++) {
    var place = json1[i];
       // Creating a marker and putting it on the map
    var customIcon = L.icon({
      iconUrl: './icons8-marker-48.png',
    iconSize:     [38, 40], // size of the icon
    iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [5, -40] // point from which the popup should open relative to the iconAnchor
    });
    var coordinates = [place.coordinate[1],place.coordinate[0] ] 
    var marker = L.marker(coordinates, {icon: customIcon});
    marker.addTo(map_var).bindPopup(place.description);
    }
});